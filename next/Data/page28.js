// CVG HTML Data Page28 Done By Shakugan_No_Kaluote 2008.4.17
hdft["header"]=Header("tomoyo","坂上 智代","Tomoyo Sakagami","5月3日～5月5日","May 3rd~May 5th");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(3.5),y(yLevel),"5月3日","top");
//----------
box[1]=new Array();
yLevel+=2;
box[1][0]=Textbox_Selection(x(3.5),y(yLevel),"朋也对智代的幻想（二）");
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Option(x(2.5),y(yLevel),"幻想一下");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Option(x(4.5),y(yLevel),"算了吧");
line[line.length]=Link(box[2][1],box[1][0]);
//----------
box[3]=new Array();
yLevel+=2;
box[3][0]=Textbox_Selection(x(2.5),y(yLevel),"朋也对智代的幻想（三）");
line[line.length]=Link(box[3][0],box[2][0]);
//----------
box[4]=new Array();
yLevel+=3;
box[4][0]=Textbox_Option(x(1.5),y(yLevel),"幻想一下");
line[line.length]=Link(box[4][0],box[3][0]);
box[4][1]=Textbox_Option(x(3.5),y(yLevel),"算了吧");
line[line.length]=Link(box[4][1],box[3][0]);
//----------
box[5]=new Array();
yLevel+=4;
box[5][0]=Textbox_Selection(x(3.5),y(yLevel),"模仿电视中的场景");
line[line.length]=Link(box[5][0],Point(linx(2.5),liny(-1)),box[4][0]);
line[line.length]=Link(box[5][0],Point(linx(2.5),liny(-1)),box[4][1]);
line[line.length]=Link(box[5][0],box[2][1]);
//----------
box[6]=new Array();
yLevel+=3;
box[6][0]=Textbox_Option(x(2.5),y(yLevel),"恩…差不多吧");
line[line.length]=Link(box[6][0],box[5][0]);
box[6][1]=Textbox_Option(x(4.5),y(yLevel),"不…不是这样");
line[line.length]=Link(box[6][1],box[5][0]);
//----------
box[7]=new Array();
yLevel+=3;
box[7][0]=Textbox_Date(x(3.5),y(yLevel),"5月4日","bottom");
line[line.length]=Link(box[7][0],box[6][0]);
line[line.length]=Link(box[7][0],box[6][1]);
//----------
box[8]=new Array();
yLevel+=5;
box[8][0]=Textbox_Date(x(3.5),y(yLevel),"5月4日","top");
//----------
box[9]=new Array();
yLevel+=2;
box[9][0]=Textbox_Condition(x(3.5),y(yLevel),"3日，朋也对智代的幻想（二）");
line[line.length]=Link(box[9][0],box[8][0]);
//----------
box[10]=new Array();
yLevel+=3;
box[10][0]=Textbox_Selection(x(2.5),y(yLevel),"幻想一下");
line[line.length]=Link(box[10][0],box[9][0]);
box[10][1]=Textbox_Selection(x(4.5),y(yLevel),"算了吧");
line[line.length]=Link(box[10][1],box[9][0]);
//----------
box[11]=new Array();
yLevel+=2;
box[11][0]=Textbox_Selection(x(2.5),y(yLevel),"朋也对智代的幻想（四）");
line[line.length]=Link(box[11][0],box[10][0]);
//----------
box[12]=new Array();
yLevel+=3;
box[12][0]=Textbox_Option(x(1.5),y(yLevel),"开始过分的幻想");
line[line.length]=Link(box[12][0],box[11][0]);
box[12][1]=Textbox_Option(x(3.5),y(yLevel),"说再见然后离开");
line[line.length]=Link(box[12][1],box[11][0]);
//----------
box[13]=new Array();
yLevel+=4;
box[13][0]=Textbox_Date(x(3.5),y(yLevel),"5月5日","bottom");
line[line.length]=Link(box[13][0],Point(linx(2.5),liny(-1)),box[12][0]);
line[line.length]=Link(box[13][0],Point(linx(2.5),liny(-1)),box[12][1]);
line[line.length]=Link(box[13][0],box[10][1]);
//----------
box[14]=new Array();
yLevel+=5;
box[14][0]=Textbox_Date(x(3),y(yLevel),"5月5日","top");
//----------
box[15]=new Array();
yLevel+=2;
box[15][0]=Textbox_Selection(x(3),y(yLevel),"希望和智代的快乐能持续下去");
line[line.length]=Link(box[15][0],box[14][0]);
//----------
box[16]=new Array();
yLevel+=3;
box[16][0]=Textbox_Option(x(2),y(yLevel),"这样下去是不行的","l|智代");
line[line.length]=Link(box[16][0],box[15][0]);
box[16][1]=Textbox_Option(x(4),y(yLevel),"就这样下去","r|智代");
line[line.length]=Link(box[16][1],box[15][0]);
//----------
box[17]=new Array();
yLevel+=3;
box[17][0]=Textbox_Date(x(3),y(yLevel),"5月6日","bottom");
box[17][0].addTitle("点击转到第29页");
box[17][0].addClick(function(){gotopage(29)});
line[line.length]=Link(box[17][0],box[16][0]);
line[line.length]=Link(box[17][0],box[16][1]);

hdft["footer"]=Footer(liny(1),28);