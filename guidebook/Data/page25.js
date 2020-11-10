// CVG HTML Data Page25 Done By Shakugan_No_Kaluote 2008.4.15
hdft["header"]=Header("public","公共路线","Public Route","春原的玩笑","Sunohara's Jokes");

var yLevel=0;

//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Option(x(0),y(yLevel),"春原的玩笑（一）");
box[0][0].addLink("p25_SNJK1");
box[0][0].addClick(function(){gotopage(15,"p15_retSNJK1")});
box[0][1]=Textbox_Selection(x(3),y(yLevel),"表演的情景（一）");
line[line.length]=Link(Point(linx(3),liny(0)-LINEBASEHEIGHT/2),Point(linx(3),liny(0)-LINEBASEHEIGHT/2));
//----------
box[1]=new Array();
yLevel+=3;
box[1][0]=Textbox_Option(x(1),y(yLevel),"先自我介绍");
line[line.length]=Link(box[1][0],box[0][1]);
box[1][1]=Textbox_Option(x(3),y(yLevel),"问候说『你好』");
line[line.length]=Link(box[1][1],box[0][1]);
box[1][2]=Textbox_Option(x(5),y(yLevel),"先摆出一副找到了我的样子");
line[line.length]=Link(box[1][2],box[0][1]);
yLevel+=2;
line[line.length]=Link(Point(linx(3),liny(0)),Point(linx(1),liny(0)),box[1][0]);
line[line.length]=Link(Point(linx(3),liny(0)),box[1][1]);
line[line.length]=Link(Point(linx(3),liny(0)),Point(linx(5),liny(0)),box[1][2]);
line[line.length]=Link(Point(linx(3),liny(0)),Point(linx(3),liny(0)));
//----------
box[2]=new Array();
yLevel+=4;
box[2][0]=Textbox_Option(x(0),y(yLevel),"春原的玩笑（二）");
box[2][0].addLink("p25_SNJK2");
box[2][0].addClick(function(){gotopage(18,"p18_retSNJK2")});
box[2][1]=Textbox_Condition(x(3),y(yLevel),"21日，有智代的陪同");
line[line.length]=Link(Point(linx(3),liny(0)-LINEBASEHEIGHT/2),Point(linx(3),liny(0)-LINEBASEHEIGHT/2));
//----------
box[3]=new Array();
yLevel+=3;
box[3][0]=Textbox_Selection(x(0),y(yLevel),"的确不错");
line[line.length]=Link(box[3][0],box[2][1]);
box[3][1]=Textbox_Selection(x(6),y(yLevel),"是这样吗","r|+未触发");
line[line.length]=Link(box[3][1],box[2][1]);
//----------
box[4]=new Array();
yLevel+=2;
box[4][0]=Textbox_Selection(x(0),y(yLevel),"表演的情景（二）");
line[line.length]=Link(box[4][0],box[3][0]);
//----------
box[5]=new Array();
yLevel+=3;
box[5][0]=Textbox_Option(x(0),y(yLevel),"先自我介绍");
line[line.length]=Link(box[5][0],box[4][0]);
box[5][1]=Textbox_Option(x(2),y(yLevel),"问候说『你好』");
line[line.length]=Link(box[5][1],box[4][0]);
box[5][2]=Textbox_Option(x(4),y(yLevel),"先摆出一副找到了我的样子");
line[line.length]=Link(box[5][2],box[4][0]);
//----------
box[6]=new Array();
yLevel+=2;
box[6][0]=Textbox_Condition(x(6),y(yLevel),"22日，表演的情景（一）");
line[line.length]=Link(box[6][0],box[3][1]);
//----------
box[7]=new Array();
yLevel+=3;
box[7][0]=Textbox_Selection(x(2),y(yLevel),"先做自我介绍");
line[line.length]=Link(box[7][0],box[6][0]);
box[7][1]=Textbox_Selection(x(4),y(yLevel),"问候说『你好』");
line[line.length]=Link(box[7][1],box[6][0]);
box[7][2]=Textbox_Selection(x(6),y(yLevel),"先摆出一副找到了我的样子");
line[line.length]=Link(box[7][2],box[6][0]);
//----------
box[8]=new Array();
yLevel+=2;
box[8][0]=Textbox_Block(x(2),y(yLevel),"B");
box[8][0].addLink("p25_retB");
box[8][0].addClick(function(){gotolink("p25_B")});
line[line.length]=Link(box[8][0],box[7][0]);
box[8][1]=Textbox_Block(x(4),y(yLevel),"A");
box[8][1].addLink("p25_retA");
box[8][1].addClick(function(){gotolink("p25_A")});
line[line.length]=Link(box[8][1],box[7][1]);
box[8][2]=Textbox_Block(x(6),y(yLevel),"B");
box[8][2].addClick(function(){gotolink("p25_B")});
line[line.length]=Link(box[8][2],box[7][2]);
yLevel+=3;
line[line.length]=Link(Point(linx(3),liny(0)),Point(linx(0),liny(0)),box[5][0]);
line[line.length]=Link(Point(linx(3),liny(0)),Point(linx(0),liny(0)),Point(linx(0),liny(-7)),box[5][1]);
line[line.length]=Link(Point(linx(3),liny(0)),Point(linx(0),liny(0)),Point(linx(0),liny(-7)),box[5][2]);
line[line.length]=Link(Point(linx(3),liny(0)),Point(linx(6),liny(0)),box[7][2]);
line[line.length]=Link(Point(linx(3),liny(0)),Point(linx(6),liny(0)),box[7][1]);
line[line.length]=Link(Point(linx(3),liny(0)),Point(linx(6),liny(0)),box[7][0]);
line[line.length]=Link(Point(linx(3),liny(0)),Point(linx(3),liny(0)));
//----------
box[9]=new Array();
yLevel+=3;
box[9][0]=Textbox_Option(x(0),y(yLevel),"春原的玩笑（三）");
box[9][0].addLink("p25_SNJK3");
box[9][0].addClick(function(){gotopage(21,"p21_retSNJK3")});
box[9][1]=Textbox_Condition(x(4),y(yLevel),"24日，有智代的陪同");
line[line.length]=Link(Point(linx(4),liny(0)-LINEBASEHEIGHT/2),Point(linx(4),liny(0)-LINEBASEHEIGHT/2));
//----------
box[10]=new Array();
yLevel+=3;
box[10][0]=Textbox_Selection(x(2.5),y(yLevel),"的确不错");
line[line.length]=Link(box[10][0],Point(linx(4.5),liny(-1)));
box[10][1]=Textbox_Selection(x(5.5),y(yLevel),"是这样吗？","r|+未触发");
line[line.length]=Link(box[10][1],Point(linx(3.5),liny(-1)));
line[line.length]=Link(Point(linx(4),liny(-1)),box[9][1]);
//----------
box[11]=new Array();
yLevel+=2;
box[11][0]=Textbox_Condition(x(2.5),y(yLevel),"23日，表演的情景（二）");
line[line.length]=Link(box[11][0],box[10][0]);
//----------
box[12]=new Array();
yLevel+=3;
box[12][0]=Textbox_Selection(x(0.5),y(yLevel),"先作自我介绍");
line[line.length]=Link(box[12][0],box[11][0]);
box[12][1]=Textbox_Selection(x(2.5),y(yLevel),"问候说『你好』");
line[line.length]=Link(box[12][1],box[11][0]);
box[12][2]=Textbox_Selection(x(4.5),y(yLevel),"先摆出一副找到了我的样子");
line[line.length]=Link(box[12][2],box[11][0]);
//----------
box[13]=new Array();
yLevel+=2;
box[13][0]=Textbox_Block(x(2.5),y(yLevel),"A");
box[13][0].addClick(function(){gotolink("p25_A")});
line[line.length]=Link(box[13][0],box[12][1]);
line[line.length]=Link(Point(linx(2.5),liny(0)-LINEBASEHEIGHT/2),Point(linx(2.5),liny(0)-LINEBASEHEIGHT/2));
yLevel+=3;
line[line.length]=Link(Point(linx(2.5),liny(0)),Point(linx(5.5),liny(0)),box[10][1]);
line[line.length]=Link(Point(linx(2.5),liny(0)),box[13][0]);
line[line.length]=Link(Point(linx(2.5),liny(0)),box[12][0]);
line[line.length]=Link(Point(linx(2.5),liny(0)),box[12][2]);
line[line.length]=Link(Point(linx(4),liny(0)),Point(linx(4),liny(0)));
//----------
box[14]=new Array();
yLevel+=3;
box[14][0]=Textbox_Block(x(0),y(yLevel),"A");
box[14][0].addLink("p25_A");
box[14][0].addClick(function(){gotolink("p25_retA")});
box[14][1]=Textbox_Selection(x(3),y(yLevel),"问候的附加惩罚");
line[line.length]=Link(Point(linx(3),liny(0)-LINEBASEHEIGHT/2),Point(linx(3),liny(0)-LINEBASEHEIGHT/2));
board[board.length]=Board(liny(0),liny(6));
//----------
box[15]=new Array();
yLevel+=3;
box[15][0]=Textbox_Option(x(1),y(yLevel),"学嘴里先含上一口水再说");
line[line.length]=Link(box[15][0],box[14][1]);
box[15][1]=Textbox_Option(x(3),y(yLevel),"每句话句尾都加上句『还有马桶盖』");
line[line.length]=Link(box[15][1],box[14][1]);
box[15][2]=Textbox_Option(x(5),y(yLevel),"学一石堂那样说话");
line[line.length]=Link(box[15][2],box[14][1]);
yLevel+=2;
line[line.length]=Link(Point(linx(3),liny(0)),Point(linx(1),liny(0)),box[15][0]);
line[line.length]=Link(Point(linx(3),liny(0)),box[15][1]);
line[line.length]=Link(Point(linx(3),liny(0)),Point(linx(5),liny(0)),box[15][2]);
line[line.length]=Link(Point(linx(3),liny(0)),Point(linx(3),liny(0)));
//----------
box[16]=new Array();
yLevel+=3;
box[16][0]=Textbox_Block(x(0),y(yLevel),"B");
box[16][0].addLink("p25_B");
box[16][0].addClick(function(){gotolink("p25_retB")});
box[16][1]=Textbox_Selection(x(3),y(yLevel),"自我介绍时的状态");
line[line.length]=Link(Point(linx(3),liny(0)-LINEBASEHEIGHT/2),Point(linx(3),liny(0)-LINEBASEHEIGHT/2));
board[board.length]=Board(liny(0),liny(6));
//----------
box[17]=new Array();
yLevel+=3;
box[17][0]=Textbox_Option(x(1),y(yLevel),"就像被回想场面占掉了好几卷的漫画");
line[line.length]=Link(box[17][0],box[16][1]);
box[17][1]=Textbox_Option(x(3),y(yLevel),"就像牺牲生命拯救了地球的宇航员");
line[line.length]=Link(box[17][1],box[16][1]);
box[17][2]=Textbox_Option(x(5),y(yLevel),"就像在站台分别的恋人");
line[line.length]=Link(box[17][2],box[16][1]);
yLevel+=2;
line[line.length]=Link(Point(linx(3),liny(0)),Point(linx(1),liny(0)),box[17][0]);
line[line.length]=Link(Point(linx(3),liny(0)),box[17][1]);
line[line.length]=Link(Point(linx(3),liny(0)),Point(linx(5),liny(0)),box[17][2]);
line[line.length]=Link(Point(linx(3),liny(0)),Point(linx(3),liny(0)));

hdft["footer"]=Footer(liny(1),25);