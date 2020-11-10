// CVG HTML Data Page43 Done By Ligueston 2008.4.17
hdft["header"]=Header("fuuko","伊吹 风子","Fuuko Ibuki","4月26日～4月27日","April 26th~April 27th");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(3),y(yLevel),"4月26日","top");
//----------
box[1]=new Array();
yLevel+=2;
box[1][0]=Textbox_Selection(x(3),y(yLevel),"前去看望老师");
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Option(x(2),y(yLevel),"把她硬拉去");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Option(x(4),y(yLevel),"把她留在这里");
line[line.length]=Link(box[2][1],box[1][0]);
//----------
box[3]=new Array();
yLevel+=3;
box[3][0]=Textbox_Condition(x(3),y(yLevel),"24日，朋也面对哭泣的渚");
line[line.length]=Link(box[3][0],box[2][0]);
line[line.length]=Link(box[3][0],box[2][1]);
//----------
box[4]=new Array();
yLevel+=3;
box[4][0]=Textbox_Selection(x(2),y(yLevel),"就这样注视着她","l|+未触发");
line[line.length]=Link(box[4][0],box[3][0]);
box[4][1]=Textbox_Selection(x(4),y(yLevel),"紧紧抱住她");
line[line.length]=Link(box[4][1],box[3][0]);
//----------
box[5]=new Array();
yLevel+=2;
box[5][0]=Textbox_Selection(x(4),y(yLevel),"决定帮助风子（二）");
line[line.length]=Link(box[5][0],box[4][1]);
//----------
box[6]=new Array();
yLevel+=3;
box[6][0]=Textbox_Option(x(3),y(yLevel),"好吧、我陪着你");
line[line.length]=Link(box[6][0],box[5][0]);
box[6][1]=Textbox_Option(x(5),y(yLevel),"你也为我考虑一下嘛");
line[line.length]=Link(box[6][1],box[5][0]);
//----------
box[7]=new Array();
yLevel+=2;
box[7][0]=Textbox_Selection(x(2),y(yLevel),"决定帮助风子（一）");
line[line.length]=Link(box[7][0],box[4][0]);
//----------
box[8]=new Array();
yLevel+=3;
box[8][0]=Textbox_Option(x(1),y(yLevel),"决定全身而退","l|-风子");
line[line.length]=Link(box[8][0],box[7][0]);
box[8][1]=Textbox_Option(x(3),y(yLevel),"决定帮助她","r|-风子");
line[line.length]=Link(box[8][1],box[7][0]);
//----------
box[9]=new Array();
yLevel+=2;
box[9][0]=Textbox_Quit(x(1),y(yLevel),"公共 BAD ENDDING");
line[line.length]=Link(box[9][0],box[8][0]);
box[9][1]=Textbox_Option(x(3),y(yLevel),"风子大师（六）");
box[9][1].addLink("p43_retKFMT6");
box[9][1].addClick(function(){gotopage(49,"p49_KFMT6")});
line[line.length]=Link(box[9][1],box[8][1]);
//----------
box[10]=new Array();
yLevel+=3;
box[10][0]=Textbox_Date(x(3),y(yLevel),"4月27日","bottom");
line[line.length]=Link(box[10][0],box[9][1]);

line[line.length]=Link(box[10][0],Point(linx(4),liny(-7)),box[6][0]);
line[line.length]=Link(box[10][0],Point(linx(4),liny(-7)),box[6][1]);
//----------
box[11]=new Array();
yLevel+=5;
box[11][0]=Textbox_Date(x(3),y(yLevel),"4月27日","top");
//----------
box[12]=new Array();
yLevel+=2;
box[12][0]=Textbox_Selection(x(3),y(yLevel),"海星的处理");
line[line.length]=Link(box[12][0],box[11][0]);
//----------
box[13]=new Array();
yLevel+=3;
box[13][0]=Textbox_Option(x(2),y(yLevel),"老老实实地告诉她");
line[line.length]=Link(box[13][0],box[12][0]);
box[13][1]=Textbox_Option(x(4),y(yLevel),"保持沉默");
line[line.length]=Link(box[13][1],box[12][0]);
//----------
box[14]=new Array();
yLevel+=3;
box[14][0]=Textbox_Selection(x(3),y(yLevel),"生气的风子");
line[line.length]=Link(box[14][0],box[13][0]);
line[line.length]=Link(box[14][0],box[13][1]);
//----------
box[15]=new Array();
yLevel+=3;
box[15][0]=Textbox_Option(x(2),y(yLevel),"慢慢捏住她的鼻子");
line[line.length]=Link(box[15][0],box[14][0]);
box[15][1]=Textbox_Option(x(4),y(yLevel),"老老实实待着");
line[line.length]=Link(box[15][1],box[14][0]);
//----------
box[16]=new Array();
yLevel+=3;
box[16][0]=Textbox_Selection(x(3),y(yLevel),"相见的想法");
line[line.length]=Link(box[16][0],box[15][0]);
line[line.length]=Link(box[16][0],box[15][1]);
//----------
box[17]=new Array();
yLevel+=3;
box[17][0]=Textbox_Option(x(2),y(yLevel),"是啊…");
line[line.length]=Link(box[17][0],box[16][0]);
box[17][1]=Textbox_Option(x(4),y(yLevel),"不…");
line[line.length]=Link(box[17][1],box[16][0]);
//----------
box[18]=new Array();
yLevel+=3;
box[18][0]=Textbox_Date(x(3),y(yLevel),"4月28日","bottom");
line[line.length]=Link(box[18][0],box[17][0]);
line[line.length]=Link(box[18][0],box[17][1]);
box[18][0].addTitle("点击转到第44页");
box[18][0].addClick(function(){gotopage(44)});

hdft["footer"]=Footer(liny(2),43);