// CVG HTML Data Page67 Done By kyrios 2008.4.17
hdft["header"]=Header("nagisa","AFTER STORY","After Story","诞生篇～汐","Chapter of the Birth ～ Ushio");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(3.5),y(yLevel),"诞生篇","top");
line[line.length]=Link(box[0][0],box[0][0]);
//----------
box[1]=new Array();
yLevel+=2;
box[1][0]=Textbox_Condition(x(3.5),y(yLevel),"“光”获得数等于13颗");
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Selection(x(2),y(yLevel),"是");
line[line.length]=Link(box[2][0],Point(linx(2.5),liny(-1))); 
box[2][1]=Textbox_Selection(x(5),y(yLevel),"否");
line[line.length]=Link(box[2][1],Point(linx(3),liny(-1)));
line[line.length]=Link(Point(linx(3.5),liny(-1)),box[1][0]);
//----------
box[3]=new Array();
yLevel+=2;
box[3][0]=Textbox_Condition(x(2),y(yLevel),"完成过渚 TRUE ENDING");
line[line.length]=Link(box[3][0],box[2][0]);
//----------
box[4]=new Array();
yLevel+=3;
box[4][0]=Textbox_Selection(x(1),y(yLevel),"否");
line[line.length]=Link(box[4][0],box[3][0]);
box[4][1]=Textbox_Selection(x(3),y(yLevel),"是");
line[line.length]=Link(box[4][1],box[3][0]);
//----------
box[5]=new Array();
yLevel+=2;
box[5][0]=Textbox_Selection(x(3),y(yLevel),"坂道上的抉择");
line[line.length]=Link(box[5][0],box[4][1]);
//----------
box[6]=new Array();
yLevel+=3;
box[6][0]=Textbox_Option(x(2),y(yLevel),"呼喊","l|-汐|-风子|-公子");
line[line.length]=Link(box[6][0],box[5][0]);
box[6][1]=Textbox_Option(x(4),y(yLevel),"不呼喊","r|-汐|-风子|-公子");
line[line.length]=Link(box[6][1],box[5][0]);
//----------
box[7]=new Array();
yLevel+=3;
box[7][0]=Textbox_Option(x(2),y(yLevel),"结束动画");
line[line.length]=Link(box[7][0],box[6][0]);
line[line.length]=Link(box[7][0],box[4][0]);
box[7][1]=Textbox_Option(x(4),y(yLevel),"坂道下的离别");
line[line.length]=Link(box[7][1],box[2][1]);
line[line.length]=Link(box[7][1],box[6][1]);
//----------
box[8]=new Array();
yLevel+=2;
box[8][0]=Textbox_Option(x(2),y(yLevel),"小镇的奇迹");
line[line.length]=Link(box[8][0],box[7][0]);
box[8][1]=Textbox_Date(x(4),y(yLevel),"汐","bottom");
line[line.length]=Link(box[8][1],box[7][1]);
//----------
box[9]=new Array();
yLevel+=2;
box[9][0]=Textbox_Quit(x(2),y(yLevel),"渚 TRUE ENDING");
line[line.length]=Link(box[9][0],box[8][0]);
//----------
box[10]=new Array();
yLevel+=5;
box[10][0]=Textbox_Date(x(3.5),y(yLevel),"汐","top");
//----------
box[11]=new Array();
yLevel+=2;
box[11][0]=Textbox_Option(x(3.5),y(yLevel),"直幸“光”获得");
line[line.length]=Link(box[11][0],box[10][0]);
//----------
box[12]=new Array();
yLevel+=2;
box[12][0]=Textbox_Condition(x(3.5),y(yLevel),"学院篇，触发风子“光”消失事件");
line[line.length]=Link(box[12][0],box[11][0]);
//----------
box[13]=new Array();
yLevel+=3;
box[13][0]=Textbox_Selection(x(2.5),y(yLevel),"是");
line[line.length]=Link(box[13][0],box[12][0]);
box[13][1]=Textbox_Selection(x(4.5),y(yLevel),"否");
line[line.length]=Link(box[13][1],box[12][0]);
//----------
box[14]=new Array();
yLevel+=2;
box[14][0]=Textbox_Selection(x(2.5),y(yLevel),"早苗的拜访");
line[line.length]=Link(box[14][0],box[13][0]);
//----------
box[15]=new Array();
yLevel+=3;
box[15][0]=Textbox_Option(x(1.5),y(yLevel),"去看看","l|风子|公子");
line[line.length]=Link(box[15][0],box[14][0]);
box[15][1]=Textbox_Option(x(3.5),y(yLevel),"在这等着","r|风子|公子");
line[line.length]=Link(box[15][1],box[14][0]);
//----------
box[16]=new Array();
yLevel+=2;
box[16][0]=Textbox_Option(x(1.5),y(yLevel),"风子“光”获得");
line[line.length]=Link(box[16][0],box[15][0]);
//----------
box[17]=new Array();
yLevel+=2;
box[17][0]=Textbox_Option(x(1.5),y(yLevel),"公子“光”获得");
line[line.length]=Link(box[17][0],box[16][0]);
//----------
box[18]=new Array();
yLevel+=4;
box[18][0]=Textbox_Option(x(3.5),y(yLevel),"幻想世界(十二)");
line[line.length]=Link(box[18][0],Point(linx(2.5),liny(-1)),box[17][0]);
line[line.length]=Link(box[18][0],Point(linx(2.5),liny(-1)),box[15][1]);
line[line.length]=Link(box[18][0],box[13][1]);
//----------
box[19]=new Array();
yLevel+=2;
box[19][0]=Textbox_Condition(x(3.5),y(yLevel),"汐 ENDING");
line[line.length]=Link(box[19][0],box[18][0]);

hdft["footer"]=Footer(liny(1),(67));