// CVG HTML Data Page30 Done By Shakugan_No_Kaluote 2008.4.17
hdft["header"]=Header("tomoyo","坂上 智代","Tomoyo Sakagami","智代64HIT","Tomoyo's 64Hit");

var yLevel=0;

//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Option(x(0),y(yLevel),"智代64HIT");
box[0][0].addLink("p30_TY64");
box[0][0].addClick(function(){gotopage(29,"p29_retTY64")});
box[0][1]=Textbox_Condition(x(2),y(yLevel),"6日，纷争之间的处理");
line[line.length]=Link(Point(linx(2),liny(0)-LINEBASEHEIGHT/2),Point(linx(2),liny(0)-LINEBASEHEIGHT/2));
//----------
box[1]=new Array();
yLevel+=3;
box[1][0]=Textbox_Selection(x(1),y(yLevel),"插嘴说话");
line[line.length]=Link(box[1][0],box[0][1]);
box[1][1]=Textbox_Selection(x(3),y(yLevel),"保持沉默，交给智代处理");
line[line.length]=Link(box[1][1],box[0][1]);
//----------
box[2]=new Array();
yLevel+=2;
box[2][0]=Textbox_Option(x(1),y(yLevel),"杏增加8HIT");
line[line.length]=Link(box[2][0],box[1][0]);
//----------
box[3]=new Array();
yLevel+=3;
box[3][0]=Textbox_Condition(x(2),y(yLevel),"18日，独自雕刻的风子");
line[line.length]=Link(box[3][0],box[2][0]);
line[line.length]=Link(box[3][0],box[1][1]);
//----------
box[4]=new Array();
yLevel+=3;
box[4][0]=Textbox_Selection(x(1),y(yLevel),"再看一会儿");
line[line.length]=Link(box[4][0],box[3][0]);
box[4][1]=Textbox_Selection(x(3),y(yLevel),"离开","r|+未触发");
line[line.length]=Link(box[4][1],box[3][0]);
//----------
box[5]=new Array();
yLevel+=2;
box[5][0]=Textbox_Option(x(1),y(yLevel),"风子增加8HIT");
line[line.length]=Link(box[5][0],box[4][0]);
//----------
box[6]=new Array();
yLevel+=3;
box[6][0]=Textbox_Condition(x(2),y(yLevel),"17日，宿舍走廊遇见美佐枝");
line[line.length]=Link(box[6][0],box[5][0]);
line[line.length]=Link(box[6][0],box[4][1]);
//----------
box[7]=new Array();
yLevel+=3;
box[7][0]=Textbox_Selection(x(1),y(yLevel),"向她搭话");
line[line.length]=Link(box[7][0],box[6][0]);
box[7][1]=Textbox_Selection(x(3),y(yLevel),"目送她离去","r|+未触发");
line[line.length]=Link(box[7][1],box[6][0]);
//----------
box[8]=new Array();
yLevel+=2;
box[8][0]=Textbox_Option(x(1),y(yLevel),"美佐枝增加8HIT");
line[line.length]=Link(box[8][0],box[7][0]);
//----------
box[9]=new Array();
yLevel+=3;
box[9][0]=Textbox_Condition(x(2),y(yLevel),"18日，逃课选择睡觉的地方");
line[line.length]=Link(box[9][0],box[8][0]);
line[line.length]=Link(box[9][0],box[7][1]);
//----------
box[10]=new Array();
yLevel+=3;
box[10][0]=Textbox_Selection(x(0.5),y(yLevel),"去那里睡");
line[line.length]=Link(box[10][0],Point(linx(1.5),liny(-1)));
box[10][1]=Textbox_Selection(x(3.5),y(yLevel),"还是回教室吧","r|+未触发");
line[line.length]=Link(box[10][1],Point(linx(1.5),liny(-1)));
line[line.length]=Link(Point(linx(2),liny(-1)),box[9][0]);
//----------
box[11]=new Array();
yLevel+=2;
box[11][0]=Textbox_Condition(x(3.5),y(yLevel),"19日，来到旧校舍后的去向（一）");
line[line.length]=Link(box[11][0],box[10][1]);
//----------
box[12]=new Array();
yLevel+=3;
box[12][0]=Textbox_Selection(x(1.5),y(yLevel),"去资料室");
line[line.length]=Link(box[12][0],box[11][0]);
box[12][1]=Textbox_Selection(x(3.5),y(yLevel),"去图书馆");
line[line.length]=Link(box[12][1],box[11][0]);
box[12][2]=Textbox_Selection(x(5.5),y(yLevel),"去社团活动室","r|+未触发");
line[line.length]=Link(box[12][2],box[11][0]);
//----------
box[13]=new Array();
yLevel+=3;
box[13][0]=Textbox_Option(x(0.5),y(yLevel),"有纪宁增加8HIT");
line[line.length]=Link(box[13][0],box[12][0]);
line[line.length]=Link(box[13][0],box[10][0]);
//----------
box[14]=new Array();
yLevel+=3;
box[14][0]=Textbox_Condition(x(2),y(yLevel),"15日，回想起中午庭院中的女生");
line[line.length]=Link(Point(linx(0.5),liny(-1)),box[13][0]);
line[line.length]=Link(Point(linx(0.5),liny(-1)),Point(linx(3.5),liny(-1)),box[12][1]);
line[line.length]=Link(Point(linx(0.5),liny(-1)),Point(linx(3.5),liny(-1)),Point(linx(3.5),liny(-3)),box[12][2]);
line[line.length]=Link(box[14][0],Point(linx(2),liny(-1)));
//----------
box[15]=new Array();
yLevel+=3;
box[15][0]=Textbox_Selection(x(1),y(yLevel),"在意");
line[line.length]=Link(box[15][0],box[14][0]);
box[15][1]=Textbox_Selection(x(3),y(yLevel),"不在意","r|+未触发");
line[line.length]=Link(box[15][1],box[14][0]);
//----------
box[16]=new Array();
yLevel+=2;
box[16][0]=Textbox_Option(x(1),y(yLevel),"渚增加8HIT");
line[line.length]=Link(box[16][0],box[15][0]);
//----------
box[17]=new Array();
yLevel+=3;
box[17][0]=Textbox_Condition(x(2),y(yLevel),"26日，选择约会吃饭的地方");
line[line.length]=Link(box[17][0],box[16][0]);
line[line.length]=Link(box[17][0],box[15][1]);
//----------
box[18]=new Array();
yLevel+=3;
box[18][0]=Textbox_Selection(x(1),y(yLevel),"在食堂吃");
line[line.length]=Link(box[18][0],box[17][0]);
box[18][1]=Textbox_Selection(x(3),y(yLevel),"去外面吃");
line[line.length]=Link(box[18][1],box[17][0]);
//----------
box[19]=new Array();
yLevel+=2;
box[19][0]=Textbox_Condition(x(1),y(yLevel),"完成过幸村线");
line[line.length]=Link(box[19][0],box[18][0]);
//----------
box[20]=new Array();
yLevel+=3;
box[20][0]=Textbox_Selection(x(0),y(yLevel),"是");
line[line.length]=Link(box[20][0],box[19][0]);
box[20][1]=Textbox_Selection(x(2),y(yLevel),"否");
line[line.length]=Link(box[20][1],box[19][0]);
//----------
box[21]=new Array();
yLevel+=2;
box[21][0]=Textbox_Option(x(0),y(yLevel),"幸村增加8HIT");
line[line.length]=Link(box[21][0],box[20][0]);

line[line.length]=Link(Point(linx(1),liny(3)),box[20][0]);
line[line.length]=Link(Point(linx(1),liny(3)),box[20][1]);
line[line.length]=Link(Point(linx(1),liny(3)),Point(linx(3),liny(3)),box[18][1]);
line[line.length]=Link(Point(linx(2),liny(3)),Point(linx(2),liny(3)))

hdft["footer"]=Footer(liny(4),30);