export interface GameData {
  box:     Array<Box[]>;
  line:    Array<End[]>;
  comment: Comment[];
  header:  Header;
  footer:  Footer;
  board:   End[];
}

export interface End {
  x:       number;
  y:       number;
  l?:      number;
  h?:      number;
  height?: number;
  __type:  BoardType;
  ref?:    string;
}

export enum BoardType {
  Board = "board",
  Button = "button",
  Point = "point",
  Textbox = "textbox",
  Line = "line",
}

export interface Box {
  x:           number;
  y:           number;
  type?:       CommentType;
  text?:       string;
  css?:        CommentCSS;
  adjustw?:    number;
  ref:         string;
  __type:      BoxType;
  route?:      string;
  num?:        Num;
  comment?:    Comment | null;
  routeC?:     string;
  routeE?:     string;
  dateC?:      string;
  dateE?:      string;
  titlecss?:   BoxTitlecss;
  contentcss?: Contentcss;
  link?:       string;
}

export enum BoxType {
  Button = "button",
  Header = "header",
  Textbox = "textbox",
}

export interface Comment {
  x:           number;
  y:           number;
  text:        string;
  num?:        string;
  summary?:    string;
  hint?:       string;
  setsumei?:   string;
  option?:     string;
  icon?:       string;
  iconillu?:   string;
  titlecss?:   CommentTitlecss;
  contentcss?: ContentcssEnum;
  optioncss?:  Optioncss;
  eventcss?:   Eventcss;
  ref:         string;
  __type:      ContentcssEnum;
  type?:       CommentType;
  css?:        CommentCSS;
  adjustw?:    number;
}

export enum ContentcssEnum {
  Button = "button",
  Comment = "comment",
}

export enum CommentCSS {
  Btn = "btn",
  Btn0414 = "btn0414",
  Comment = "comment",
  Date = "date",
}

export enum Eventcss {
  CmtEvnt = "cmtEvnt",
}

export enum Optioncss {
  Cmtopt = "cmtopt",
}

export enum CommentTitlecss {
  Cmtbtn = "cmtbtn",
}

export enum CommentType {
  Block = "block",
  Condition = "condition",
  Date = "date",
  Option = "option",
  Selection = "selection",
  Text = "text",
}

export enum Contentcss {
  HeaderE = "headerE",
}

export interface Num {
  x:      number;
  y:      number;
  type:   NumType;
  text:   string;
  css:    NumCSS;
  ref:    string;
  __type: BoardType;
}

export enum NumCSS {
  Check = "check",
}

export enum NumType {
  Ccheck = "ccheck",
}

export enum BoxTitlecss {
  HeaderC = "headerC",
}

export interface Footer {
  x:      number;
  y:      number;
  height: number;
  page:   number;
  ref:    string;
  __type: FooterType;
}

export enum FooterType {
  Footer = "footer",
}

export interface Header {
  x:          number;
  y:          number;
  route:      string;
  routeC:     string;
  routeE:     string;
  dateC:      string;
  dateE:      string;
  titlecss:   BoxTitlecss;
  contentcss: Contentcss;
  ref:        Ref;
  __type:     BoxType;
  link?:      string;
}

export enum Ref {
  DivHd0 = "divHd0",
}

