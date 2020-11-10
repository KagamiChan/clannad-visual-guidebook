// CVG HTML Data Page32 Done By Shakugan_No_Kaluote 2008.4.18
hdft["header"]=Header("yukine","宫泽 有纪宁","Yukine Miyazawa","有纪宁的咒语","Yukine's Spells");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Option(x(0),y(yLevel),"有纪宁的咒语");
box[0][0].addLink("p32_YNSP");
box[0][0].addClick(function(){gotopage(19,"p19_retYNSP")});
box[0][1]=Textbox_Condition(x(2.5),y(yLevel),"18日，独自雕刻的风子");
line[line.length]=Link(Point(linx(2.5),liny(0)-LINEBASEHEIGHT/2),Point(linx(2.5),liny(0)-LINEBASEHEIGHT/2));
//----------
box[1]=new Array();
yLevel+=3;
box[1][0]=Textbox_Selection(x(1.5),y(yLevel),"再看一会儿");
line[line.length]=Link(box[1][0],box[0][1]);
box[1][1]=Textbox_Selection(x(3.5),y(yLevel),"离开","r|+未触发");
line[line.length]=Link(box[1][1],box[0][1]);
//----------
box[2]=new Array();
yLevel+=2;
box[2][0]=Textbox_Option(x(1.5),y(yLevel),"咒语游戏中遇到风子");
line[line.length]=Link(box[2][0],box[1][0]);
//----------
box[3]=new Array();
yLevel+=3;
box[3][0]=Textbox_Condition(x(2.5),y(yLevel),"18日，遇到困难的智代");
line[line.length]=Link(box[3][0],box[2][0]);
line[line.length]=Link(box[3][0],box[1][1]);
//----------
box[4]=new Array();
yLevel+=3;
box[4][0]=Textbox_Selection(x(1),y(yLevel),"帮忙");
line[line.length]=Link(box[4][0],Point(linx(2),liny(-1)));
box[4][1]=Textbox_Selection(x(4),y(yLevel),"甩开她的手","r|+未触发");
line[line.length]=Link(box[4][1],Point(linx(2),liny(-1)));
line[line.length]=Link(Point(linx(2.5),liny(-1)),box[3][0]);
//----------
box[5]=new Array();
yLevel+=2;
box[5][0]=Textbox_Condition(x(1),y(yLevel),"22日，回答了智代的询问");
line[line.length]=Link(box[5][0],box[4][0]);
//----------
box[6]=new Array();
yLevel+=3;
box[6][0]=Textbox_Selection(x(1),y(yLevel),"添麻烦了","l|+未触发");
line[line.length]=Link(box[6][0],box[5][0]);
box[6][1]=Textbox_Selection(x(3),y(yLevel),"不，不是这个意思");
line[line.length]=Link(box[6][1],box[5][0]);
//----------
box[7]=new Array();
yLevel+=2;
box[7][0]=Textbox_Option(x(1),y(yLevel),"咒语游戏中遇到智代");
line[line.length]=Link(box[7][0],box[6][0]);
//----------
box[8]=new Array();
yLevel+=1;
box[8][0]=Textbox_Condition(x(4),y(yLevel),"15日，回想起中午庭院中的女生");
line[line.length]=Link(box[8][0],box[6][1]);
line[line.length]=Link(box[8][0],box[4][1]);
//----------
box[9]=new Array();
yLevel+=3;
box[9][0]=Textbox_Selection(x(3),y(yLevel),"不在意","l|+未触发");
line[line.length]=Link(box[9][0],box[8][0]);
box[9][1]=Textbox_Selection(x(5),y(yLevel),"在意");
line[line.length]=Link(box[9][1],box[8][0]);
//----------
box[10]=new Array();
yLevel+=2;
box[10][0]=Textbox_Condition(x(3),y(yLevel),"18日，宿舍走廊遇见美佐枝");
line[line.length]=Link(box[10][0],box[9][0]);
box[10][1]=Textbox_Option(x(5),y(yLevel),"咒语游戏中遇到渚");
line[line.length]=Link(box[10][1],box[9][1]);
//----------
box[11]=new Array();
yLevel+=3;
box[11][0]=Textbox_Selection(x(2),y(yLevel),"向她搭话");
line[line.length]=Link(box[11][0],box[10][0]);
box[11][1]=Textbox_Selection(x(4),y(yLevel),"目送她离去","r|+未触发");
line[line.length]=Link(box[11][1],box[10][0]);
//----------
box[12]=new Array();
yLevel+=2;
box[12][0]=Textbox_Option(x(2),y(yLevel),"咒语游戏中遇到美佐枝");
line[line.length]=Link(box[12][0],box[11][0]);
box[12][1]=Textbox_Option(x(4),y(yLevel),"咒语游戏中遇到杏、椋");
line[line.length]=Link(box[12][1],box[11][1]);

yLevel+=4;
line[line.length]=Link(Point(linx(4),liny(0)),Point(linx(3),liny(-1)),box[12][0]);
line[line.length]=Link(Point(linx(4),liny(0)),Point(linx(3),liny(-1)),box[12][1]);
line[line.length]=Link(Point(linx(4),liny(0)),box[10][1]);
line[line.length]=Link(Point(linx(4),liny(0)),Point(linx(1),liny(0)),box[7][0]);
line[line.length]=Link(Point(linx(2.5),liny(0)),Point(linx(2.5),liny(0)));

hdft["footer"]=Footer(liny(1),32);