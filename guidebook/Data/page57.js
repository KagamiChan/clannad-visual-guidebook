// CVG HTML Data Page57 Done By Ligueston 2008.4.19
hdft["header"]=Header("nagisa","古河 渚/幸村 俊夫","Nagisa Furukawa / Toshio Yukimura","3对3篮球赛(三)","3 on 3 Basketball Match - Part3");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Block(x(0),y(yLevel),"B");
box[0][0].addLink("p57_B");
box[0][0].addClick(function(){gotopage(56,"p56_retB")});
box[0][1]=Textbox_Condition(x(3.5),y(yLevel),"已经来过新校舍三楼");
line[line.length]=Link(Point(linx(3.5),liny(0)-LINEBASEHEIGHT/2),Point(linx(3.5),liny(0)-LINEBASEHEIGHT/2));
board[board.length]=Board(liny(0),liny(23));
//----------
box[1]=new Array();
yLevel+=3;
box[1][0]=Textbox_Selection(x(2),y(yLevel),"否");
line[line.length]=Link(box[1][0],Point(linx(3),liny(-1)));
box[1][1]=Textbox_Selection(x(5),y(yLevel),"是");
line[line.length]=Link(box[1][1],Point(linx(3),liny(-1)));
line[line.length]=Link(Point(linx(3.5),liny(-1)),box[0][1]);
//----------
box[2]=new Array();
yLevel+=2;
box[2][0]=Textbox_Selection(x(2),y(yLevel),"解释事情的来由");
line[line.length]=Link(box[2][0],box[1][0]);
//----------
box[3]=new Array();
yLevel+=3;
box[3][0]=Textbox_Option(x(1),y(yLevel),"说明");
line[line.length]=Link(box[3][0],box[2][0]);
box[3][1]=Textbox_Option(x(3),y(yLevel),"但很麻烦啊…");
line[line.length]=Link(box[3][1],box[2][0]);
//----------
box[4]=new Array();
yLevel+=2;
box[4][0]=Textbox_Option(x(1),y(yLevel),"杏成为参赛伙伴");
line[line.length]=Link(box[4][0],box[3][0]);
box[4][1]=Textbox_Condition(x(3),y(yLevel),"15日，面对泪水打转的椋");
line[line.length]=Link(box[4][1],box[3][1]);
//----------
box[5]=new Array();
yLevel+=3;
box[5][0]=Textbox_Selection(x(2),y(yLevel),"无视");
line[line.length]=Link(box[5][0],box[4][0]);
box[5][1]=Textbox_Selection(x(4),y(yLevel),"道歉");
line[line.length]=Link(box[5][1],box[4][0]);
//----------
box[6]=new Array();
yLevel+=2;
box[6][0]=Textbox_Selection(x(2),y(yLevel),"继续说服椋加入");
line[line.length]=Link(box[6][0],box[5][0]);
//----------
box[7]=new Array();
yLevel+=3;
box[7][0]=Textbox_Option(x(2),y(yLevel),"拜托你了，请成为我们的一员吧");
line[line.length]=Link(box[7][0],box[6][0]);
box[7][1]=Textbox_Option(x(4),y(yLevel),"不能特别勉强自己");
line[line.length]=Link(box[7][1],box[6][0]);
//----------
box[8]=new Array();
yLevel+=2;
box[8][0]=Textbox_Option(x(2),y(yLevel),"椋成为参赛伙伴");
line[line.length]=Link(box[8][0],box[7][0]);
line[line.length]=Link(Point(linx(2),liny(2)),box[8][0]);
line[line.length]=Link(Point(linx(2),liny(2)),Point(linx(1),liny(2)),box[4][0]);
line[line.length]=Link(Point(linx(2),liny(2)),Point(linx(2),liny(2)));
//----------
box[9]=new Array();
yLevel+=1;
box[9][0]=Textbox_Option(x(4),y(yLevel),"3对3篮球赛（一）");
box[9][0].addClick(function(){gotopage(56,"p56_33BB")});
line[line.length]=Link(box[9][0],box[7][1]);
line[line.length]=Link(box[9][0],Point(linx(5),liny(-5)),box[5][1]);
line[line.length]=Link(box[9][0],box[1][1]);
line[line.length]=Link(Point(linx(4),liny(1)),Point(linx(4),liny(1)));
//----------
box[10]=new Array();
yLevel+=4;
box[10][0]=Textbox_Block(x(0),y(yLevel),"C");
box[10][0].addLink("p57_C");
box[10][0].addClick(function(){gotopage(56,"p56_retC")});
box[10][1]=Textbox_Condition(x(4),y(yLevel),"已经来过旧校舍空教室");
line[line.length]=Link(Point(linx(4),liny(0)-LINEBASEHEIGHT/2),Point(linx(4),liny(0)-LINEBASEHEIGHT/2));
board[board.length]=Board(liny(0),liny(19));
//----------
box[11]=new Array();
yLevel+=3;
box[11][0]=Textbox_Selection(x(3),y(yLevel),"否");
line[line.length]=Link(box[11][0],box[10][1]);
box[11][1]=Textbox_Selection(x(5),y(yLevel),"是");
line[line.length]=Link(box[11][1],box[10][1]);
//----------
box[12]=new Array();
yLevel+=2;
box[12][0]=Textbox_Condition(x(3),y(yLevel),"18日，独自雕刻的风子");
line[line.length]=Link(box[12][0],box[11][0]);
//----------
box[13]=new Array();
yLevel+=3;
box[13][0]=Textbox_Selection(x(2),y(yLevel),"再看一会儿");
line[line.length]=Link(box[13][0],box[12][0]);
box[13][1]=Textbox_Selection(x(4),y(yLevel),"离开","r|+离开");
line[line.length]=Link(box[13][1],box[12][0]);
//----------
box[14]=new Array();
yLevel+=2;
box[14][0]=Textbox_Selection(x(2),y(yLevel),"考虑邀请风子");
line[line.length]=Link(box[14][0],box[13][0]);
//----------
box[15]=new Array();
yLevel+=3;
box[15][0]=Textbox_Option(x(1),y(yLevel),"可以");
line[line.length]=Link(box[15][0],box[14][0]);
box[15][1]=Textbox_Option(x(3),y(yLevel),"再考虑一下");
line[line.length]=Link(box[15][1],box[14][0]);
//----------
box[16]=new Array();
yLevel+=2;
box[16][0]=Textbox_Option(x(1),y(yLevel),"风子成为参赛伙伴");
line[line.length]=Link(box[16][0],box[15][0]);
line[line.length]=Link(Point(linx(1),liny(1)),Point(linx(1),liny(1)));
//----------
box[17]=new Array();
yLevel+=2;
box[17][0]=Textbox_Option(x(4),y(yLevel),"3对3篮球赛（一）");
box[17][0].addClick(function(){gotopage(56,"p56_33BB")});
line[line.length]=Link(box[17][0],box[15][1]);
line[line.length]=Link(box[17][0],Point(linx(3),liny(-1)),box[13][1]);
line[line.length]=Link(box[17][0],box[11][1]);
line[line.length]=Link(Point(linx(4),liny(1)),Point(linx(4),liny(1)));

hdft["footer"]=Footer(liny(2),57);