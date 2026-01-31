import type { PixelPos, SizeSet } from "./types";

export type LegacyConstants = {
  BasicX: number;
  BasicY: number;
  XSCALE: number;
  YSCALE: number;
  BUTTONWIDTH: number;
  outersize: number;
  LINEBASEHEIGHT: number;
};

export const LEGACY_CONSTANTS: Record<SizeSet, LegacyConstants> = {
  0: {
    BasicX: 25,
    BasicY: 100,
    XSCALE: 200,
    YSCALE: 30,
    outersize: 6,
    BUTTONWIDTH: 350 + 2 * 6,
    LINEBASEHEIGHT: 30,
  },
  1: {
    BasicX: 15,
    BasicY: 60,
    XSCALE: 120,
    YSCALE: 18,
    outersize: 4,
    BUTTONWIDTH: 210 + 2 * 4,
    LINEBASEHEIGHT: 18,
  },
};

export function xPos(sizeSet: SizeSet, gridX: number): number {
  const c = LEGACY_CONSTANTS[sizeSet];
  return c.BasicX + c.XSCALE * gridX;
}

export function yPos(sizeSet: SizeSet, gridY: number): number {
  const c = LEGACY_CONSTANTS[sizeSet];
  return c.BasicY + c.YSCALE * gridY;
}

export function linY(sizeSet: SizeSet, yLevel: number, yy: number): number {
  const c = LEGACY_CONSTANTS[sizeSet];
  return yPos(sizeSet, yLevel) + c.YSCALE * yy;
}

export function linX(sizeSet: SizeSet, xx: number): number {
  const c = LEGACY_CONSTANTS[sizeSet];
  // Matches guidebook/cvg.js:
  // linx(xx){return x(xx+1)-(XSCALE*2-BUTTONWIDTH)/2-outersize;}
  return (
    xPos(sizeSet, xx + 1) - (c.XSCALE * 2 - c.BUTTONWIDTH) / 2 - c.outersize
  );
}

export function point(x: number, y: number): PixelPos {
  return { x, y };
}
