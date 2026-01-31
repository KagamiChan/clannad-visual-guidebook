import path from "path";
import crypto from "crypto";
import type { File } from "@babel/types";
import {
  isAssignmentExpression,
  isBinaryExpression,
  isBlockStatement,
  isCallExpression,
  isExpressionStatement,
  isIdentifier,
  isLiteral,
  isMemberExpression,
  isNewExpression,
  isNumericLiteral,
  isProgram,
  isReturnStatement,
  isSequenceExpression,
  isStringLiteral,
  isTemplateLiteral,
  isUnaryExpression,
  isUpdateExpression,
  isVariableDeclaration,
  isVariableDeclarator,
  traverseFast,
} from "@babel/types";
import { parse } from "@babel/parser";
import type {
  Expression,
  Statement,
  CallExpression,
  MemberExpression,
  NumericLiteral,
  StringLiteral,
} from "@babel/types";
import type { PageIR, GraphNode, GraphEdge, Jump, SizeSet, PixelPos } from "./types";
import { LEGACY_CONSTANTS, linX, linY, point, xPos, yPos } from "./legacyMath";

type Env = {
  yLevel: number;
  vars: Map<string, number | string | undefined>;
};

type NodeRef = {
  varName: string;
  row?: number;
  col?: number;
  index?: number;
};

function sha1(input: string): string {
  return crypto.createHash("sha1").update(input).digest("hex").slice(0, 12);
}

function getPageNumberFromFilename(filePath: string): number {
  const base = path.basename(filePath);
  const m = base.match(/page(\d+)\.js$/i);
  if (!m) throw new Error(`Cannot parse page number from ${filePath}`);
  return Number(m[1]);
}

function makeNodeId(page: number, ref: NodeRef): string {
  if (ref.varName === "box" && ref.row !== undefined && ref.col !== undefined) {
    return `p${page}_box_${ref.row}_${ref.col}`;
  }
  if (ref.index !== undefined) return `p${page}_${ref.varName}_${ref.index}`;
  return `p${page}_${ref.varName}_${sha1(JSON.stringify(ref))}`;
}

function makeEdgeId(page: number, stmtIndex: number): string {
  return `p${page}_edge_${stmtIndex}`;
}

function evalString(expr: Expression | null | undefined, env: Env): string | undefined {
  if (!expr) return undefined;
  if (isStringLiteral(expr)) return expr.value;
  if (isTemplateLiteral(expr) && expr.expressions.length === 0) {
    return expr.quasis.map((q) => q.value.cooked ?? "").join("");
  }
  if (isIdentifier(expr)) {
    const v = env.vars.get(expr.name);
    return typeof v === "string" ? v : undefined;
  }
  return undefined;
}

function evalNumber(expr: Expression | null | undefined, env: Env): number | undefined {
  if (!expr) return undefined;
  if (isNumericLiteral(expr)) return expr.value;
  if (isIdentifier(expr)) {
    if (expr.name === "yLevel") return env.yLevel;
    const v = env.vars.get(expr.name);
    return typeof v === "number" ? v : undefined;
  }
  if (isUnaryExpression(expr) && expr.operator === "-") {
    const v = evalNumber(expr.argument as Expression, env);
    return v === undefined ? undefined : -v;
  }
  if (isBinaryExpression(expr)) {
    const left = evalNumber(expr.left as Expression, env);
    const right = evalNumber(expr.right as Expression, env);
    if (left === undefined || right === undefined) return undefined;
    switch (expr.operator) {
      case "+":
        return left + right;
      case "-":
        return left - right;
      case "*":
        return left * right;
      case "/":
        return left / right;
      default:
        return undefined;
    }
  }
  if (isCallExpression(expr) && isIdentifier(expr.callee)) {
    // allow numeric helper calls to be evaluated via evalPoint-ish routines
    const name = expr.callee.name;
    if (name === "Number" && expr.arguments.length === 1) {
      return evalNumber(expr.arguments[0] as Expression, env);
    }
  }
  return undefined;
}

function asNodeRef(expr: Expression | null | undefined): NodeRef | undefined {
  if (!expr) return undefined;
  if (!isMemberExpression(expr) || expr.computed !== true) return undefined;

  // Supports:
  // - box[ROW][COL]
  // - comment[0]
  // - board[board.length] is not a node
  const root = expr.object;
  const prop = expr.property;
  if (!isNumericLiteral(prop)) return undefined;

  if (isIdentifier(root)) {
    return { varName: root.name, index: prop.value };
  }

  if (isMemberExpression(root) && root.computed === true) {
    const rootObj = root.object;
    const rootProp = root.property;
    if (isIdentifier(rootObj) && isNumericLiteral(rootProp) && isNumericLiteral(prop)) {
      return { varName: rootObj.name, row: rootProp.value, col: prop.value };
    }
  }

  return undefined;
}

function evalPointExpr(
  expr: Expression | null | undefined,
  env: Env,
  sizeSet: SizeSet,
): PixelPos | undefined {
  if (!expr) return undefined;

  if (isCallExpression(expr) && isIdentifier(expr.callee)) {
    const name = expr.callee.name;
    if (name === "x" && expr.arguments.length >= 1) {
      const gx = evalNumber(expr.arguments[0] as Expression, env);
      if (gx === undefined) return undefined;
      return point(xPos(sizeSet, gx), 0);
    }
    if (name === "y" && expr.arguments.length >= 1) {
      const gy = evalNumber(expr.arguments[0] as Expression, env);
      if (gy === undefined) return undefined;
      return point(0, yPos(sizeSet, gy));
    }
    if (name === "linx" && expr.arguments.length >= 1) {
      const xx = evalNumber(expr.arguments[0] as Expression, env);
      if (xx === undefined) return undefined;
      return point(linX(sizeSet, xx), 0);
    }
    if (name === "liny" && expr.arguments.length >= 1) {
      const yy = evalNumber(expr.arguments[0] as Expression, env);
      if (yy === undefined) return undefined;
      return point(0, linY(sizeSet, env.yLevel, yy));
    }
    if (name === "Point" && expr.arguments.length >= 2) {
      const xExpr = expr.arguments[0] as Expression;
      const yExpr = expr.arguments[1] as Expression;

      const xv = evalNumber(xExpr, env);
      const yv = evalNumber(yExpr, env);

      // Support compositions like Point(linx(3), liny(0) - LINEBASEHEIGHT/2)
      // via evalNumber on calls and binary expressions.
      const resolvedX = xv ?? (() => {
        const p = evalPointExpr(xExpr, env, sizeSet);
        return p?.x;
      })();
      const resolvedY = yv ?? (() => {
        const p = evalPointExpr(yExpr, env, sizeSet);
        return p?.y;
      })();

      if (resolvedX === undefined || resolvedY === undefined) return undefined;
      return point(resolvedX, resolvedY);
    }
  }

  return undefined;
}

function evalXY(
  xExpr: Expression | null | undefined,
  yExpr: Expression | null | undefined,
  env: Env,
  sizeSet: SizeSet,
): PixelPos | undefined {
  const px = evalPointExpr(xExpr, env, sizeSet);
  const py = evalPointExpr(yExpr, env, sizeSet);
  if (!px || !py) return undefined;
  return { x: px.x, y: py.y };
}

function extractJumpsFromFunction(fnExpr: Expression | null | undefined): Jump[] {
  if (!fnExpr) return [];
  const jumps: Jump[] = [];

  // Only support arrow functions and function expressions.
  // We avoid full traversal by scanning a few known shapes.
  const scanExpr = (expr: any) => {
    if (!expr) return;
    if (isSequenceExpression(expr)) {
      for (const e of expr.expressions) scanExpr(e);
      return;
    }
    if (isCallExpression(expr) && isIdentifier(expr.callee)) {
      const callee = expr.callee.name;
      if (callee === "gotopage") {
        const toPage = isNumericLiteral(expr.arguments[0] as any)
          ? (expr.arguments[0] as NumericLiteral).value
          : undefined;
        const toAnchor = isStringLiteral(expr.arguments[1] as any)
          ? (expr.arguments[1] as StringLiteral).value
          : undefined;
        if (toPage !== undefined) jumps.push({ kind: "gotopage", toPage, toAnchor });
      }
      if (callee === "gotolink") {
        const toAnchor = isStringLiteral(expr.arguments[0] as any)
          ? (expr.arguments[0] as StringLiteral).value
          : undefined;
        if (toAnchor) jumps.push({ kind: "gotolink", toAnchor });
      }
    }
  };

  const scanStmt = (stmt: Statement) => {
    if (isExpressionStatement(stmt)) scanExpr(stmt.expression);
    if (isReturnStatement(stmt)) scanExpr(stmt.argument as any);
  };

  // ArrowFunctionExpression / FunctionExpression
  const anyFn: any = fnExpr;
  if (anyFn.type === "ArrowFunctionExpression" || anyFn.type === "FunctionExpression") {
    if (isBlockStatement(anyFn.body)) {
      for (const st of anyFn.body.body) scanStmt(st as Statement);
    } else {
      scanExpr(anyFn.body);
    }
  }

  return jumps;
}

export function extractPageIR(
  sourceFile: string,
  sourceCode: string,
  opts?: { note?: string },
): PageIR {
  const page = getPageNumberFromFilename(sourceFile);

  const env: Env = {
    yLevel: 0,
    vars: new Map<string, number | string | undefined>([
      ["LINEBASEHEIGHT", LEGACY_CONSTANTS[0].LINEBASEHEIGHT],
    ]),
  };

  const nodesByRefKey = new Map<string, GraphNode>();
  const nodeIdByRefKey = new Map<string, string>();
  const edges: GraphEdge[] = [];
  let unknownStatements = 0;
  const notes: string[] = [];
  if (opts?.note) notes.push(opts.note);

  const fileAst: File = parse(sourceCode, {
    sourceType: "script",
    allowReturnOutsideFunction: true,
    errorRecovery: true,
    plugins: [
      // tolerate modern-ish syntax if present
      "optionalChaining",
      "nullishCoalescingOperator",
      "numericSeparator",
    ],
  });

  if (!isProgram(fileAst.program)) {
    throw new Error(`Unexpected AST program for ${sourceFile}`);
  }

  const rememberNode = (ref: NodeRef, node: GraphNode) => {
    const key = JSON.stringify({ page, ...ref });
    nodesByRefKey.set(key, node);
    nodeIdByRefKey.set(key, node.nodeId);
  };

  const resolveNodeId = (ref: NodeRef): string | undefined => {
    const key = JSON.stringify({ page, ...ref });
    return nodeIdByRefKey.get(key);
  };

  const upsertNodeForRef = (ref: NodeRef, kind: string, stmtIndex: number): GraphNode => {
    const key = JSON.stringify({ page, ...ref });
    const existing = nodesByRefKey.get(key);
    if (existing) return existing;

    const node: GraphNode = {
      nodeId: makeNodeId(page, ref),
      page,
      boxRef: ref,
      kind,
      pixelPosBySizeSet: { 0: undefined, 1: undefined },
      anchors: [],
      jumps: [],
      source: { file: sourceFile, page, stmtIndex },
    };
    rememberNode(ref, node);
    return node;
  };

  // Extract header/footer info
  let header: any | undefined;
  let footer: any | undefined;

  const body = fileAst.program.body;
  for (let stmtIndex = 0; stmtIndex < body.length; stmtIndex++) {
    const stmt = body[stmtIndex] as Statement;

    // Track: yLevel += N; yLevel = yLevel + N; yLevel++
    if (isExpressionStatement(stmt)) {
      const expr = stmt.expression;
      if (isAssignmentExpression(expr) && isIdentifier(expr.left) && expr.left.name === "yLevel") {
        if (expr.operator === "=") {
          const v = evalNumber(expr.right as Expression, env);
          if (v !== undefined) env.yLevel = v;
        }
        if (expr.operator === "+=") {
          const v = evalNumber(expr.right as Expression, env);
          if (v !== undefined) env.yLevel += v;
        }
        continue;
      }
      if (isUpdateExpression(expr) && isIdentifier(expr.argument) && expr.argument.name === "yLevel") {
        env.yLevel += expr.operator === "++" ? 1 : -1;
        continue;
      }

      // box[..][..] = ... or comment[0] = ...
      if (isAssignmentExpression(expr) && expr.operator === "=") {
        const leftRef = asNodeRef(expr.left as any);
        if (leftRef) {
          // RHS: Textbox_* call
          if (isCallExpression(expr.right) && isIdentifier(expr.right.callee)) {
            const kind = expr.right.callee.name;
            const node = upsertNodeForRef(leftRef, kind, stmtIndex);

            // best-effort text extraction
            const text = evalString(expr.right.arguments[2] as any, env) ??
              evalString(expr.right.arguments[0] as any, env);
            if (text) node.text = text;

            const routeHints = evalString(expr.right.arguments[3] as any, env);
            if (routeHints && routeHints.includes("|")) node.routeHints = routeHints;

            // coordinate extraction (assume first 2 args are x,y)
            for (const sizeSet of [0, 1] as const) {
              const pos = evalXY(
                expr.right.arguments[0] as any,
                expr.right.arguments[1] as any,
                env,
                sizeSet,
              );
              if (pos) node.pixelPosBySizeSet[sizeSet] = pos;
            }

            continue;
          }

          // RHS: new ButtonBase(...)
          if (isNewExpression(expr.right) && isIdentifier(expr.right.callee)) {
            const kind = expr.right.callee.name;
            const node = upsertNodeForRef(leftRef, kind, stmtIndex);
            const text = evalString(expr.right.arguments[3] as any, env);
            if (text) node.text = text;

            for (const sizeSet of [0, 1] as const) {
              const pos = evalXY(
                expr.right.arguments[0] as any,
                expr.right.arguments[1] as any,
                env,
                sizeSet,
              );
              if (pos) node.pixelPosBySizeSet[sizeSet] = pos;
            }

            continue;
          }

          // RHS: alias to another array element (e.g., box[25][0] = comment[0])
          const rhsRef = asNodeRef(expr.right as any);
          if (rhsRef) {
            const rhsNode = upsertNodeForRef(rhsRef, "alias", stmtIndex);
            const node = upsertNodeForRef(leftRef, rhsNode.kind, stmtIndex);
            node.nodeId = rhsNode.nodeId;
            node.text = node.text ?? rhsNode.text;
            node.anchors = rhsNode.anchors;
            node.jumps = rhsNode.jumps;
            node.pixelPosBySizeSet = rhsNode.pixelPosBySizeSet;
            continue;
          }
        }

        // capture hdft['header']=Header(...)
        if (isAssignmentExpression(expr) && isMemberExpression(expr.left) && expr.operator === "=") {
          const lhs: any = expr.left;
          if (
            lhs.object?.type === "Identifier" &&
            lhs.object.name === "hdft" &&
            lhs.computed === true &&
            isStringLiteral(lhs.property)
          ) {
            const key = lhs.property.value;
            if (key === "header" && isCallExpression(expr.right) && isIdentifier(expr.right.callee)) {
              if (expr.right.callee.name === "Header") {
                header = {
                  route: evalString(expr.right.arguments[0] as any, env),
                  routeC: evalString(expr.right.arguments[1] as any, env),
                  routeE: evalString(expr.right.arguments[2] as any, env),
                  dateC: evalString(expr.right.arguments[3] as any, env),
                  dateE: evalString(expr.right.arguments[4] as any, env),
                };
                continue;
              }
            }
            if (key === "footer" && isCallExpression(expr.right) && isIdentifier(expr.right.callee)) {
              if (expr.right.callee.name === "Footer") {
                const pageNum = evalNumber(expr.right.arguments[1] as any, env);
                footer = { page: pageNum };
                continue;
              }
            }
          }
        }

        // capture variable assignments for later string/number resolution
        if (isAssignmentExpression(expr) && isIdentifier(expr.left) && expr.operator === "=") {
          const name = expr.left.name;
          const num = evalNumber(expr.right as any, env);
          if (num !== undefined) {
            env.vars.set(name, num);
            continue;
          }
          const str = evalString(expr.right as any, env);
          if (str !== undefined) {
            env.vars.set(name, str);
            continue;
          }
        }

        // line[line.length] = Link(...)
        if (isAssignmentExpression(expr) && expr.operator === "=") {
          // left: line[line.length]
          const lhs: any = expr.left;
          if (
            lhs?.type === "MemberExpression" &&
            lhs.object?.type === "Identifier" &&
            lhs.object.name === "line" &&
            lhs.computed === true
          ) {
            const rhs = expr.right;
            if (isCallExpression(rhs) && isIdentifier(rhs.callee) && rhs.callee.name === "Link") {
              const edge: GraphEdge = {
                edgeId: makeEdgeId(page, stmtIndex),
                page,
                waypointsBySizeSet: { 0: [], 1: [] },
                decorative: false,
                source: { file: sourceFile, page, stmtIndex },
              };

              const endpoints: Array<{ kind: "node"; id: string } | { kind: "point"; posBySize: Record<SizeSet, PixelPos | undefined> }> = [];

              for (const arg of rhs.arguments) {
                const ref = asNodeRef(arg as any);
                if (ref) {
                  const id = resolveNodeId(ref) ?? makeNodeId(page, ref);
                  // ensure node exists
                  upsertNodeForRef(ref, "unknown", stmtIndex);
                  endpoints.push({ kind: "node", id });
                  continue;
                }

                if (isCallExpression(arg) && isIdentifier(arg.callee) && arg.callee.name === "Point") {
                  const posBySize: Record<SizeSet, PixelPos | undefined> = { 0: undefined, 1: undefined };
                  for (const sizeSet of [0, 1] as const) {
                    posBySize[sizeSet] = evalPointExpr(arg as any, env, sizeSet);
                  }
                  endpoints.push({ kind: "point", posBySize });
                  continue;
                }

                // Also allow raw point-like expressions (linx/liny) if they show up
                const posBySize: Record<SizeSet, PixelPos | undefined> = { 0: undefined, 1: undefined };
                let anyPos = false;
                for (const sizeSet of [0, 1] as const) {
                  const p = evalPointExpr(arg as any, env, sizeSet);
                  if (p) {
                    posBySize[sizeSet] = p;
                    anyPos = true;
                  }
                }
                if (anyPos) endpoints.push({ kind: "point", posBySize });
              }

              const nodeEndpoints = endpoints.filter((e) => e.kind === "node") as Array<{ kind: "node"; id: string }>;
              edge.from = nodeEndpoints[0]?.id;
              edge.to = nodeEndpoints[nodeEndpoints.length - 1]?.id;

              for (const sizeSet of [0, 1] as const) {
                for (const e of endpoints) {
                  if (e.kind === "point") {
                    const p = e.posBySize[sizeSet];
                    if (p) edge.waypointsBySizeSet[sizeSet].push(p);
                  }
                }
              }

              edge.decorative = !edge.from || !edge.to;
              edges.push(edge);
              continue;
            }
          }
        }

        // node.addLink('...') or node.addClick(()=> gotopage/gotolink)
        if (isCallExpression(expr) && isMemberExpression(expr.callee)) {
          const callee = expr.callee as MemberExpression;
          const method = callee.property;
          const obj = callee.object as any;
          const ref = asNodeRef(obj as any);
          if (ref && isIdentifier(method)) {
            const node = upsertNodeForRef(ref, "unknown", stmtIndex);
            if (method.name === "addLink") {
              const anchor = evalString(expr.arguments[0] as any, env);
              if (anchor) node.anchors.push(anchor);
              continue;
            }
            if (method.name === "addClick") {
              const jumps = extractJumpsFromFunction(expr.arguments[0] as any);
              if (jumps.length) node.jumps.push(...jumps);
              continue;
            }
          }
        }

        unknownStatements++;
        continue;
      }

      // Some call statements can appear without assignment (rare)
      unknownStatements++;
      continue;
    }

    // Capture variable declarations: let yLevel=0; const foo='bar'
    if (isVariableDeclaration(stmt)) {
      for (const d of stmt.declarations) {
        if (!isVariableDeclarator(d) || !isIdentifier(d.id)) continue;
        const name = d.id.name;
        const init = d.init as any;
        if (name === "yLevel") {
          const v = evalNumber(init, env);
          if (v !== undefined) env.yLevel = v;
          continue;
        }
        const num = evalNumber(init, env);
        if (num !== undefined) {
          env.vars.set(name, num);
          continue;
        }
        const str = evalString(init, env);
        if (str !== undefined) {
          env.vars.set(name, str);
          continue;
        }
      }
      continue;
    }

    unknownStatements++;
  }

  const nodes = Array.from(nodesByRefKey.values());

  return {
    page,
    sourceFile,
    header,
    footer,
    nodes,
    edges,
    unknownStatements,
    notes,
  };
}
