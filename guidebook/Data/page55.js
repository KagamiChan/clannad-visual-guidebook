// CVG HTML Data Page55 Done By Ligueston 2008.4.19
hdft["header"]=Header("nagisa","古河 渚/幸村 俊夫","Nagisa Furukawa / Toshio Yukimura","5月11日","May 11th");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(3.5),y(yLevel),"5月11日","top");
//----------
box[1]=new Array();
yLevel+=2;
box[1][0]=Textbox_Selection(x(3.5),y(yLevel),"事发后秋生的动摇");
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Option(x(2.5),y(yLevel),"你是个很棒的父亲","l|渚");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Option(x(4.5),y(yLevel),"你作为父亲真是失职","r|渚");
line[line.length]=Link(box[2][1],box[1][0]);
//----------
box[3]=new Array();
yLevel+=2;
box[3][0]=Textbox_Selection(x(2.5),y(yLevel),"在舞台上止不住哭泣的渚");
line[line.length]=Link(box[3][0],box[2][0]);
//----------
box[4]=new Array();
yLevel+=3;
box[4][0]=Textbox_Option(x(1.5),y(yLevel),"呼喊","l|渚");
line[line.length]=Link(box[4][0],box[3][0]);
box[4][1]=Textbox_Option(x(3.5),y(yLevel),"沉默地旁观","r|渚");
line[line.length]=Link(box[4][1],box[3][0]);
//----------
box[5]=new Array();
yLevel+=2;
box[5][0]=Textbox_Option(x(1.5),y(yLevel),"幻想世界（十）");
line[line.length]=Link(box[5][0],box[4][0]);
//----------
box[6]=new Array();
yLevel+=1;
box[6][0]=Textbox_Quit(x(3.5),y(yLevel),"渚 BAD ENDING");
line[line.length]=Link(box[6][0],box[4][1]);
line[line.length]=Link(box[6][0],box[2][1]);
//----------
box[7]=new Array();
yLevel+=1;
box[7][0]=Textbox_Quit(x(1.5),y(yLevel),"渚 GOOD ENDING");
line[line.length]=Link(box[7][0],box[5][0]);

hdft["footer"]=Footer(liny(1),55);
