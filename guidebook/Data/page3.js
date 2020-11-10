// CVG HTML Data Page3 Done By Ligueston 2008.4.5
hdft["header"]=Header("public","公共路线","Public Route","4月16日（一）","April 16th~Part 1");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(4),y(yLevel),"4月16日","top");
//----------
box[1]=new Array();
yLevel+=2;
box[1][0]=Textbox_Condition(x(4),y(yLevel),"15日，面对泪水打转的椋");
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Selection(x(3),y(yLevel),"道歉");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Selection(x(5),y(yLevel),"无视");
line[line.length]=Link(box[2][1],box[1][0]);
//----------
box[3]=new Array();
yLevel+=2;
box[3][0]=Textbox_Selection(x(3),y(yLevel),"上学路上看到一位老婆婆");
line[line.length]=Link(box[3][0],box[2][0]);
//----------
box[4]=new Array();
yLevel+=3;
box[4][0]=Textbox_Option(x(2),y(yLevel),"就这样走过去");
line[line.length]=Link(box[4][0],box[3][0]);
box[4][1]=Textbox_Option(x(4),y(yLevel),"和老婆婆打招呼");
line[line.length]=Link(box[4][1],box[3][0]);
//----------
box[5]=new Array();
yLevel+=3;
box[5][0]=Textbox_Selection(x(3),y(yLevel),"杏没有迟到的原因");
line[line.length]=Link(box[5][0],box[4][0]);
line[line.length]=Link(box[5][0],box[4][1]);
//----------
box[6]=new Array();
yLevel+=3;
box[6][0]=Textbox_Option(x(2),y(yLevel),"试着追问下去","l|杏|椋");
line[line.length]=Link(box[6][0],box[5][0]);
box[6][1]=Textbox_Option(x(4),y(yLevel),"没什么好介意的","r|杏|椋");
line[line.length]=Link(box[6][1],box[5][0]);
//----------
box[7]=new Array();
yLevel+=3;
box[7][0]=Textbox_Condition(x(3),y(yLevel),"15日，回想起中午庭院中的女生");
line[line.length]=Link(box[7][0],box[6][0]);
line[line.length]=Link(box[7][0],box[6][1]);
//----------
box[8]=new Array();
yLevel+=3;
box[8][0]=Textbox_Selection(x(2),y(yLevel),"在意");
line[line.length]=Link(box[8][0],box[7][0]);
box[8][1]=Textbox_Selection(x(4),y(yLevel),"不在意","r|+未触发");
line[line.length]=Link(box[8][1],box[7][0]);
//----------
box[9]=new Array();
yLevel+=2;
box[9][0]=Textbox_Selection(x(2),y(yLevel),"课堂上的沉思，回忆起…");
line[line.length]=Link(box[9][0],box[8][0]);
//----------
box[10]=new Array();
yLevel+=3;
box[10][0]=Textbox_Option(x(1),y(yLevel),"昨天的女孩");
line[line.length]=Link(box[10][0],box[9][0]);
box[10][1]=Textbox_Option(x(3),y(yLevel),"过去的事情");
line[line.length]=Link(box[10][1],box[9][0]);
//----------
box[11]=new Array();
yLevel+=5;
box[11][0]=Textbox_Condition(x(4),y(yLevel),"15日，平息骚动的神秘女生");
line[line.length]=Link(box[11][0],Point(linx(3),liny(-1)),Point(linx(2),liny(-2)),box[10][0]);
line[line.length]=Link(box[11][0],Point(linx(3),liny(-1)),Point(linx(2),liny(-2)),box[10][1]);
line[line.length]=Link(box[11][0],Point(linx(3),liny(-1)),box[8][1]);
line[line.length]=Link(box[11][0],box[2][1]);
//----------
box[12]=new Array();
yLevel+=3;
box[12][0]=Textbox_Selection(x(3),y(yLevel),"我对此也颇感兴趣");
line[line.length]=Link(box[12][0],box[11][0]);
box[12][1]=Textbox_Selection(x(5),y(yLevel),"我对此毫无兴趣","r|+未触发");
line[line.length]=Link(box[12][1],box[11][0]);
//----------
box[13]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="";
CmtOption="-去";
CmtEvents="01110011";
CmtEvntIru="智代有条件参与有纪宁的咒语、体育仓库事件、3对3篮球赛、伪女友事件和毕业典礼；业余棒球进入必选";
box[13][0]=Textbox_Selection_C(x(3),y(yLevel),"春原挑战智代（一回目）","1",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"春原挑战智代（一回目）",0);
line[line.length]=Link(box[13][0],box[12][0]);
//----------
box[14]=new Array();
yLevel+=3;
box[14][0]=Textbox_Option(x(2),y(yLevel),"去","l|智代");
line[line.length]=Link(box[14][0],box[13][0]);
box[14][1]=Textbox_Option(x(4),y(yLevel),"不去","r|智代");
line[line.length]=Link(box[14][1],box[13][0]);
//----------
box[15]=new Array();
yLevel+=4;
box[15][0]=Textbox_Condition(x(4),y(yLevel),"15日，上午、英语语法课");
line[line.length]=Link(box[15][0],Point(linx(3),liny(-1)),box[14][0]);
line[line.length]=Link(box[15][0],Point(linx(3),liny(-1)),box[14][1]);
line[line.length]=Link(box[15][0],box[12][1]);
//----------
box[16]=new Array();
yLevel+=3;
box[16][0]=Textbox_Selection(x(3),y(yLevel),"认认真真上课");
line[line.length]=Link(box[16][0],box[15][0]);
box[16][1]=Textbox_Selection(x(5),y(yLevel),"逃课");
line[line.length]=Link(box[16][1],box[15][0]);
//----------
box[17]=new Array();
yLevel+=2;
box[17][0]=Textbox_Selection(x(3),y(yLevel),"上午、课上");
line[line.length]=Link(box[17][0],box[16][0]);
//----------
box[18]=new Array();
yLevel+=3;
box[18][0]=Textbox_Option(x(2),y(yLevel),"逃课","l|琴美");
line[line.length]=Link(box[18][0],box[17][0]);
box[18][1]=Textbox_Option(x(4),y(yLevel),"认认真真上课","r|琴美");
line[line.length]=Link(box[18][1],box[17][0]);
//----------
box[19]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="";
CmtOption="-吃";
CmtEvents="00000010";
CmtEvntIru="琴美好感度上升1点";
box[19][0]=Textbox_Selection_C(x(2),y(yLevel),"被奇怪的女孩邀请吃便当","2",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"被奇怪的女孩邀请吃便当",0);
line[line.length]=Link(box[19][0],box[18][0]);
//----------
box[20]=new Array();
yLevel+=3;
box[20][0]=Textbox_Option(x(1),y(yLevel),"吃");
line[line.length]=Link(box[20][0],box[19][0]);
box[20][1]=Textbox_Option(x(3),y(yLevel),"不吃");
line[line.length]=Link(box[20][1],box[19][0]);

yLevel+=4;
line[line.length]=Link(Point(linx(3),liny(0)),Point(linx(2),liny(-1)),box[20][0]);
line[line.length]=Link(Point(linx(3),liny(0)),Point(linx(2),liny(-1)),box[20][1]);
line[line.length]=Link(Point(linx(3),liny(0)),box[18][1]);
line[line.length]=Link(Point(linx(3),liny(0)),Point(linx(5),liny(0)),box[16][1]);
line[line.length]=Link(Point(linx(4),liny(0)),Point(linx(4),liny(0)));
line[line.length-1].addTitle("点击转到第4页");
line[line.length-1].addClick(function(){gotopage(4)});

hdft["footer"]=Footer(liny(1),3);