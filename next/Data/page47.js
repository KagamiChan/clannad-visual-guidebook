// CVG HTML Data Page47 Done By Shakugan_No_Kaluote 2008.4.20
hdft["header"]=Header("fuuko","伊吹 风子","Fuuko Ibuki","特别授课教师推选","Election for Teacher of Special Class");

var retFunc=function(){gotopage(45,"p45_retSTCHR")};

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Option(x(0),y(yLevel),"教师推选");
box[0][0].addLink("p47_STCHR");
box[0][0].addClick(function(){gotopage(45,"p45_retSTCHR")});
box[0][1]=Textbox_Selection(x(4),y(yLevel),"猜拳胜负（一回目）");
line[line.length]=Link(Point(linx(4),liny(0)-LINEBASEHEIGHT/2),Point(linx(4),liny(0)-LINEBASEHEIGHT/2));
//----------
box[1]=new Array();
yLevel+=3;
box[1][0]=Textbox_Option(x(2),y(yLevel),"剪子");
line[line.length]=Link(box[1][0],box[0][1]);
box[1][1]=Textbox_Option(x(4),y(yLevel),"石头");
line[line.length]=Link(box[1][1],box[0][1]);
box[1][2]=Textbox_Option(x(6),y(yLevel),"布");
line[line.length]=Link(box[1][2],box[0][1]);
//----------
box[2]=new Array();
yLevel+=2;
box[2][0]=Textbox_Selection(x(2),y(yLevel),"朋也 VS 渚（一回目）");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Quit(x(4),y(yLevel),"渚充当教师");
box[2][1].addClick(retFunc);
line[line.length]=Link(box[2][1],box[1][1]);
//----------
box[3]=new Array();
yLevel+=3;
box[3][0]=Textbox_Option(x(0),y(yLevel),"剪子");
line[line.length]=Link(box[3][0],box[2][0]);
box[3][1]=Textbox_Option(x(2),y(yLevel),"布");
line[line.length]=Link(box[3][1],box[2][0]);
box[3][2]=Textbox_Option(x(4),y(yLevel),"石头");
line[line.length]=Link(box[3][2],box[2][0]);
//----------
box[4]=new Array();
yLevel+=2;
box[4][0]=Textbox_Quit(x(0),y(yLevel),"渚充当教师");
box[4][0].addClick(retFunc);
line[line.length]=Link(box[4][0],box[3][0]);
box[4][1]=Textbox_Selection(x(2),y(yLevel),"朋也 VS 渚（二回目）");
line[line.length]=Link(box[4][1],box[3][1]);
box[4][2]=Textbox_Quit(x(4),y(yLevel),"朋也充当教师");
box[4][2].addClick(retFunc);
line[line.length]=Link(box[4][2],box[3][2]);
//----------
box[5]=new Array();
yLevel+=3;
box[5][0]=Textbox_Option(x(0),y(yLevel),"石头");
line[line.length]=Link(box[5][0],box[4][1]);
box[5][1]=Textbox_Option(x(2),y(yLevel),"剪子");
line[line.length]=Link(box[5][1],box[4][1]);
box[5][2]=Textbox_Option(x(4),y(yLevel),"布");
line[line.length]=Link(box[5][2],box[4][1]);
//----------
box[6]=new Array();
yLevel+=2;
box[6][0]=Textbox_Quit(x(0),y(yLevel),"渚充当教师");
box[6][0].addClick(retFunc);
line[line.length]=Link(box[6][0],box[5][0]);
box[6][1]=Textbox_Selection(x(2),y(yLevel),"朋也 VS 渚（三回目）");
line[line.length]=Link(box[6][1],box[5][1]);
box[6][2]=Textbox_Quit(x(4),y(yLevel),"朋也充当教师");
box[6][2].addClick(retFunc);
line[line.length]=Link(box[6][2],box[5][2]);
//----------
box[7]=new Array();
yLevel+=3;
box[7][0]=Textbox_Option(x(0),y(yLevel),"石头");
line[line.length]=Link(box[7][0],box[6][1]);
box[7][1]=Textbox_Option(x(2),y(yLevel),"剪子");
line[line.length]=Link(box[7][1],box[6][1]);
box[7][2]=Textbox_Option(x(4),y(yLevel),"布");
line[line.length]=Link(box[7][2],box[6][1]);
//----------
box[8]=new Array();
yLevel+=2;
box[8][0]=Textbox_Quit(x(0),y(yLevel),"渚充当教师");
box[8][0].addClick(retFunc);
line[line.length]=Link(box[8][0],box[7][0]);
box[8][1]=Textbox_Selection(x(2),y(yLevel),"朋也 VS 渚（四回目）");
line[line.length]=Link(box[8][1],box[7][1]);
box[8][2]=Textbox_Quit(x(4),y(yLevel),"朋也充当教师");
box[8][2].addClick(retFunc);
line[line.length]=Link(box[8][2],box[7][2]);
//----------
box[9]=new Array();
yLevel+=3;
box[9][0]=Textbox_Option(x(0),y(yLevel),"石头");
line[line.length]=Link(box[9][0],box[8][1]);
box[9][1]=Textbox_Option(x(2),y(yLevel),"剪子");
line[line.length]=Link(box[9][1],box[8][1]);
box[9][2]=Textbox_Option(x(4),y(yLevel),"布");
line[line.length]=Link(box[9][2],box[8][1]);
//----------
box[10]=new Array();
yLevel+=2;
box[10][0]=Textbox_Quit(x(0),y(yLevel),"渚充当教师");
box[10][0].addClick(retFunc);
line[line.length]=Link(box[10][0],box[9][0]);
box[10][1]=Textbox_Selection(x(2),y(yLevel),"朋也 VS 渚（五回目）");
line[line.length]=Link(box[10][1],box[9][1]);
box[10][2]=Textbox_Quit(x(4),y(yLevel),"朋也充当教师");
box[10][2].addClick(retFunc);
line[line.length]=Link(box[10][2],box[9][2]);
//----------
box[11]=new Array();
yLevel+=3;
box[11][0]=Textbox_Option(x(1),y(yLevel),"布");
line[line.length]=Link(box[11][0],box[10][1]);
box[11][1]=Textbox_Option(x(3),y(yLevel),"石头");
line[line.length]=Link(box[11][1],box[10][1]);
//----------
box[12]=new Array();
yLevel+=2;
box[12][0]=Textbox_Quit(x(1),y(yLevel),"渚充当教师");
box[12][0].addClick(retFunc);
line[line.length]=Link(box[12][0],box[11][0]);
box[12][1]=Textbox_Quit(x(3),y(yLevel),"朋也充当教师");
box[12][1].addClick(retFunc);
line[line.length]=Link(box[12][1],box[11][1]);
box[12][2]=Textbox_Selection(x(6),y(yLevel),"猜拳胜负（二回目）");
line[line.length]=Link(box[12][2],box[1][2]);
//----------
box[13]=new Array();
yLevel+=3;
box[13][0]=Textbox_Option(x(2),y(yLevel),"石头");
line[line.length]=Link(box[13][0],box[12][2]);
box[13][1]=Textbox_Option(x(4),y(yLevel),"布");
line[line.length]=Link(box[13][1],box[12][2]);
box[13][2]=Textbox_Option(x(6),y(yLevel),"剪子");
line[line.length]=Link(box[13][2],box[12][2]);
//----------
box[14]=new Array();
yLevel+=2;
box[14][0]=Textbox_Quit(x(2),y(yLevel),"春原充当教师");
box[14][0].addClick(retFunc);
line[line.length]=Link(box[14][0],box[13][0]);
box[14][1]=Textbox_Quit(x(4),y(yLevel),"朋也充当教师");
box[14][1].addClick(retFunc);
line[line.length]=Link(box[14][1],box[13][1]);
box[14][2]=Textbox_Selection(x(6),y(yLevel),"猜拳胜负（三回目）");
line[line.length]=Link(box[14][2],box[13][2]);
//----------
box[15]=new Array();
yLevel+=3;
box[15][0]=Textbox_Option(x(2),y(yLevel),"石头");
line[line.length]=Link(box[15][0],box[14][2]);
box[15][1]=Textbox_Option(x(4),y(yLevel),"布");
line[line.length]=Link(box[15][1],box[14][2]);
box[15][2]=Textbox_Option(x(6),y(yLevel),"剪子");
line[line.length]=Link(box[15][2],box[14][2]);
//----------
box[16]=new Array();
yLevel+=2;
box[16][0]=Textbox_Quit(x(2),y(yLevel),"春原充当教师");
box[16][0].addClick(retFunc);
line[line.length]=Link(box[16][0],box[15][0]);
box[16][1]=Textbox_Quit(x(4),y(yLevel),"朋也充当教师");
box[16][1].addClick(retFunc);
line[line.length]=Link(box[16][1],box[15][1]);
box[16][2]=Textbox_Selection(x(6),y(yLevel),"猜拳胜负（四回目）");
line[line.length]=Link(box[16][2],box[15][2]);
//----------
box[17]=new Array();
yLevel+=3;
box[17][0]=Textbox_Option(x(2),y(yLevel),"石头");
line[line.length]=Link(box[17][0],box[16][2]);
box[17][1]=Textbox_Option(x(4),y(yLevel),"布");
line[line.length]=Link(box[17][1],box[16][2]);
box[17][2]=Textbox_Option(x(6),y(yLevel),"剪子");
line[line.length]=Link(box[17][2],box[16][2]);
//----------
box[18]=new Array();
yLevel+=2;
box[18][0]=Textbox_Quit(x(2),y(yLevel),"春原充当教师");
box[18][0].addClick(retFunc);
line[line.length]=Link(box[18][0],box[17][0]);
box[18][1]=Textbox_Quit(x(4),y(yLevel),"朋也充当教师");
box[18][1].addClick(retFunc);
line[line.length]=Link(box[18][1],box[17][1]);
box[18][2]=Textbox_Selection(x(6),y(yLevel),"猜拳胜负（五回目）");
line[line.length]=Link(box[18][2],box[17][2]);
//----------
box[19]=new Array();
yLevel+=3;
box[19][0]=Textbox_Option(x(4),y(yLevel),"石头");
line[line.length]=Link(box[19][0],box[18][2]);
box[19][1]=Textbox_Option(x(6),y(yLevel),"布");
line[line.length]=Link(box[19][1],box[18][2]);
//----------
box[20]=new Array();
yLevel+=2;
box[20][0]=Textbox_Quit(x(4),y(yLevel),"春原充当教师");
box[20][0].addClick(retFunc);
line[line.length]=Link(box[20][0],box[19][0]);
box[20][1]=Textbox_Quit(x(6),y(yLevel),"朋也充当教师");
box[20][1].addClick(retFunc);
line[line.length]=Link(box[20][1],box[19][1]);

hdft["footer"]=Footer(liny(1),47);