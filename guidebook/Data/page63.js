// CVG HTML Data Page63 Done By Ligueston 2008.4.18
hdft["header"]=Header("nagisa","AFTER STORY","After Story","5月12日～5月16日","May 12th~May 16th");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(3),y(yLevel),"5月12日","top");
//----------
box[1]=new Array();
yLevel+=2;
box[1][0]=Textbox_Selection(x(3),y(yLevel),"独自打发闲暇时间");
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Option(x(2),y(yLevel),"看电视");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Option(x(4),y(yLevel),"翻柜子");
line[line.length]=Link(box[2][1],box[1][0]);
//----------
box[3]=new Array();
yLevel+=3;
box[3][0]=Textbox_Date(x(3),y(yLevel),"5月13日","bottom");
line[line.length]=Link(box[3][0],box[2][0]);
line[line.length]=Link(box[3][0],box[2][1]);
//----------
box[4]=new Array();
yLevel+=5;
box[4][0]=Textbox_Date(x(3),y(yLevel),"5月13日","top");
//----------
box[5]=new Array();
yLevel+=2;
box[5][0]=Textbox_Selection(x(3),y(yLevel),"走神时的谈话内容（一）");
line[line.length]=Link(box[5][0],box[4][0]);
//----------
box[6]=new Array();
yLevel+=3;
box[6][0]=Textbox_Option(x(1),y(yLevel),"校父纪念日");
line[line.length]=Link(box[6][0],box[5][0]);
box[6][1]=Textbox_Option(x(3),y(yLevel),"追牛节");
line[line.length]=Link(box[6][1],box[5][0]);
box[6][2]=Textbox_Option(x(5),y(yLevel),"裸体围裙日");
line[line.length]=Link(box[6][2],box[5][0]);
//----------
box[7]=new Array();
yLevel+=2;
box[7][0]=Textbox_Block(x(1),y(yLevel),"A");
box[7][0].addLink("p63_retA");
box[7][0].addClick(function(){gotolink("p63_A")});
line[line.length]=Link(box[7][0],box[6][0]);
box[7][1]=Textbox_Block(x(3),y(yLevel),"B");
box[7][1].addLink("p63_retB");
box[7][1].addClick(function(){gotolink("p63_B")});
line[line.length]=Link(box[7][1],box[6][1]);
//----------
box[8]=new Array();
yLevel+=3;
box[8][0]=Textbox_Date(x(3),y(yLevel),"5月16日","bottom");
line[line.length]=Link(box[8][0],box[7][0]);
line[line.length]=Link(box[8][0],box[7][1]);
line[line.length]=Link(box[8][0],box[6][2]);
//----------
box[9]=new Array();
yLevel+=4;
box[9][0]=Textbox_Block(x(0),y(yLevel),"A");
box[9][0].addLink("p63_A");
box[9][0].addClick(function(){gotolink("p63_retA")});
box[9][1]=Textbox_Selection(x(3),y(yLevel),"走神时的谈话内容（二）");
line[line.length]=Link(Point(linx(3),liny(0)-LINEBASEHEIGHT/2),Point(linx(3),liny(0)-LINEBASEHEIGHT/2));
board[board.length]=Board(liny(0),liny(6));
//----------
box[10]=new Array();
yLevel+=3;
box[10][0]=Textbox_Option(x(1),y(yLevel),"模拟考试");
line[line.length]=Link(box[10][0],box[9][1]);
box[10][1]=Textbox_Option(x(3),y(yLevel),"追牛节");
line[line.length]=Link(box[10][1],box[9][1]);
box[10][2]=Textbox_Option(x(5),y(yLevel),"裸体围裙日");
line[line.length]=Link(box[10][2],box[9][1]);

line[line.length]=Link(Point(linx(3),liny(2)),Point(linx(1),liny(2)),box[10][0]);
line[line.length]=Link(Point(linx(3),liny(2)),box[10][1]);
line[line.length]=Link(Point(linx(3),liny(2)),Point(linx(5),liny(2)),box[10][2]);
line[line.length]=Link(Point(linx(3),liny(2)),Point(linx(3),liny(2)));

//----------
box[11]=new Array();
yLevel+=6;
box[11][0]=Textbox_Block(x(0),y(yLevel),"B");
box[11][0].addLink("p63_B");
box[11][0].addClick(function(){gotolink("p63_retB")});
box[11][1]=Textbox_Selection(x(3),y(yLevel),"走神时的谈话内容（三）");
line[line.length]=Link(Point(linx(3),liny(0)-LINEBASEHEIGHT/2),Point(linx(3),liny(0)-LINEBASEHEIGHT/2));
board[board.length]=Board(liny(0),liny(6));
//----------
box[12]=new Array();
yLevel+=3;
box[12][0]=Textbox_Option(x(1),y(yLevel),"模拟考试");
line[line.length]=Link(box[12][0],box[11][1]);
box[12][1]=Textbox_Option(x(3),y(yLevel),"赶团子节");
line[line.length]=Link(box[12][1],box[11][1]);
box[12][2]=Textbox_Option(x(5),y(yLevel),"裸体围裙日");
line[line.length]=Link(box[12][2],box[11][1]);

line[line.length]=Link(Point(linx(3),liny(2)),Point(linx(1),liny(2)),box[12][0]);
line[line.length]=Link(Point(linx(3),liny(2)),box[12][1]);
line[line.length]=Link(Point(linx(3),liny(2)),Point(linx(5),liny(2)),box[12][2]);
line[line.length]=Link(Point(linx(3),liny(2)),Point(linx(3),liny(2)));

//----------
box[13]=new Array();
yLevel+=6;
box[13][0]=Textbox_Date(x(3),y(yLevel),"5月16日","top");
//----------
box[14]=new Array();
yLevel+=2;
box[14][0]=Textbox_Selection(x(3),y(yLevel),"秋生的作战计划");
line[line.length]=Link(box[14][0],box[13][0]);
//----------
box[15]=new Array();
yLevel+=3;
box[15][0]=Textbox_Option(x(2),y(yLevel),"倒是没什么");
line[line.length]=Link(box[15][0],box[14][0]);
box[15][1]=Textbox_Option(x(4),y(yLevel),"反对");
line[line.length]=Link(box[15][1],box[14][0]);
//----------
box[16]=new Array();
yLevel+=3;
box[16][0]=Textbox_Date(x(3),y(yLevel),"同栖篇","bottom");
box[16][0].addTitle("点击转到第64页");
box[16][0].addClick(function(){gotopage(64)});
line[line.length]=Link(box[16][0],box[15][0]);
line[line.length]=Link(box[16][0],box[15][1]);

hdft["footer"]=Footer(liny(1),63);