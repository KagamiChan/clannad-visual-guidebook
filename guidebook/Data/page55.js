// CVG HTML Data Page55 Done By Ligueston 2008.4.19
hdft["header"]=Header("nagisa","�ź� �/�Ҵ� ����","Nagisa Furukawa / Toshio Yukimura","5��11��","May 11th");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(3.5),y(yLevel),"5��11��","top");
//----------
box[1]=new Array();
yLevel+=2;
box[1][0]=Textbox_Selection(x(3.5),y(yLevel),"�·��������Ķ�ҡ");
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Option(x(2.5),y(yLevel),"���Ǹ��ܰ��ĸ���","l|�");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Option(x(4.5),y(yLevel),"����Ϊ��������ʧְ","r|�");
line[line.length]=Link(box[2][1],box[1][0]);
//----------
box[3]=new Array();
yLevel+=2;
box[3][0]=Textbox_Selection(x(2.5),y(yLevel),"����̨��ֹ��ס�������");
line[line.length]=Link(box[3][0],box[2][0]);
//----------
box[4]=new Array();
yLevel+=3;
box[4][0]=Textbox_Option(x(1.5),y(yLevel),"����","l|�");
line[line.length]=Link(box[4][0],box[3][0]);
box[4][1]=Textbox_Option(x(3.5),y(yLevel),"��Ĭ���Թ�","r|�");
line[line.length]=Link(box[4][1],box[3][0]);
//----------
box[5]=new Array();
yLevel+=2;
box[5][0]=Textbox_Option(x(1.5),y(yLevel),"�������磨ʮ��");
line[line.length]=Link(box[5][0],box[4][0]);
//----------
box[6]=new Array();
yLevel+=1;
box[6][0]=Textbox_Quit(x(3.5),y(yLevel),"� BAD ENDING");
line[line.length]=Link(box[6][0],box[4][1]);
line[line.length]=Link(box[6][0],box[2][1]);
//----------
box[7]=new Array();
yLevel+=1;
box[7][0]=Textbox_Quit(x(1.5),y(yLevel),"� GOOD ENDING");
line[line.length]=Link(box[7][0],box[5][0]);

hdft["footer"]=Footer(liny(1),55);
