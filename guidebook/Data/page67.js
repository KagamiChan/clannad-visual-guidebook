// CVG HTML Data Page67 Done By kyrios 2008.4.17
hdft["header"]=Header("nagisa","AFTER STORY","After Story","����ƪ��ϫ","Chapter of the Birth �� Ushio");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(3.5),y(yLevel),"����ƪ","top");
line[line.length]=Link(box[0][0],box[0][0]);
//----------
box[1]=new Array();
yLevel+=2;
box[1][0]=Textbox_Condition(x(3.5),y(yLevel),"���⡱���������13��");
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Selection(x(2),y(yLevel),"��");
line[line.length]=Link(box[2][0],Point(linx(2.5),liny(-1))); 
box[2][1]=Textbox_Selection(x(5),y(yLevel),"��");
line[line.length]=Link(box[2][1],Point(linx(3),liny(-1)));
line[line.length]=Link(Point(linx(3.5),liny(-1)),box[1][0]);
//----------
box[3]=new Array();
yLevel+=2;
box[3][0]=Textbox_Condition(x(2),y(yLevel),"��ɹ�� TRUE ENDING");
line[line.length]=Link(box[3][0],box[2][0]);
//----------
box[4]=new Array();
yLevel+=3;
box[4][0]=Textbox_Selection(x(1),y(yLevel),"��");
line[line.length]=Link(box[4][0],box[3][0]);
box[4][1]=Textbox_Selection(x(3),y(yLevel),"��");
line[line.length]=Link(box[4][1],box[3][0]);
//----------
box[5]=new Array();
yLevel+=2;
box[5][0]=Textbox_Selection(x(3),y(yLevel),"����ϵľ���");
line[line.length]=Link(box[5][0],box[4][1]);
//----------
box[6]=new Array();
yLevel+=3;
box[6][0]=Textbox_Option(x(2),y(yLevel),"����","l|-ϫ|-����|-����");
line[line.length]=Link(box[6][0],box[5][0]);
box[6][1]=Textbox_Option(x(4),y(yLevel),"������","r|-ϫ|-����|-����");
line[line.length]=Link(box[6][1],box[5][0]);
//----------
box[7]=new Array();
yLevel+=3;
box[7][0]=Textbox_Option(x(2),y(yLevel),"��������");
line[line.length]=Link(box[7][0],box[6][0]);
line[line.length]=Link(box[7][0],box[4][0]);
box[7][1]=Textbox_Option(x(4),y(yLevel),"����µ����");
line[line.length]=Link(box[7][1],box[2][1]);
line[line.length]=Link(box[7][1],box[6][1]);
//----------
box[8]=new Array();
yLevel+=2;
box[8][0]=Textbox_Option(x(2),y(yLevel),"С����漣");
line[line.length]=Link(box[8][0],box[7][0]);
box[8][1]=Textbox_Date(x(4),y(yLevel),"ϫ","bottom");
line[line.length]=Link(box[8][1],box[7][1]);
//----------
box[9]=new Array();
yLevel+=2;
box[9][0]=Textbox_Quit(x(2),y(yLevel),"� TRUE ENDING");
line[line.length]=Link(box[9][0],box[8][0]);
//----------
box[10]=new Array();
yLevel+=5;
box[10][0]=Textbox_Date(x(3.5),y(yLevel),"ϫ","top");
//----------
box[11]=new Array();
yLevel+=2;
box[11][0]=Textbox_Option(x(3.5),y(yLevel),"ֱ�ҡ��⡱���");
line[line.length]=Link(box[11][0],box[10][0]);
//----------
box[12]=new Array();
yLevel+=2;
box[12][0]=Textbox_Condition(x(3.5),y(yLevel),"ѧԺƪ���������ӡ��⡱��ʧ�¼�");
line[line.length]=Link(box[12][0],box[11][0]);
//----------
box[13]=new Array();
yLevel+=3;
box[13][0]=Textbox_Selection(x(2.5),y(yLevel),"��");
line[line.length]=Link(box[13][0],box[12][0]);
box[13][1]=Textbox_Selection(x(4.5),y(yLevel),"��");
line[line.length]=Link(box[13][1],box[12][0]);
//----------
box[14]=new Array();
yLevel+=2;
box[14][0]=Textbox_Selection(x(2.5),y(yLevel),"����İݷ�");
line[line.length]=Link(box[14][0],box[13][0]);
//----------
box[15]=new Array();
yLevel+=3;
box[15][0]=Textbox_Option(x(1.5),y(yLevel),"ȥ����","l|����|����");
line[line.length]=Link(box[15][0],box[14][0]);
box[15][1]=Textbox_Option(x(3.5),y(yLevel),"�������","r|����|����");
line[line.length]=Link(box[15][1],box[14][0]);
//----------
box[16]=new Array();
yLevel+=2;
box[16][0]=Textbox_Option(x(1.5),y(yLevel),"���ӡ��⡱���");
line[line.length]=Link(box[16][0],box[15][0]);
//----------
box[17]=new Array();
yLevel+=2;
box[17][0]=Textbox_Option(x(1.5),y(yLevel),"���ӡ��⡱���");
line[line.length]=Link(box[17][0],box[16][0]);
//----------
box[18]=new Array();
yLevel+=4;
box[18][0]=Textbox_Option(x(3.5),y(yLevel),"��������(ʮ��)");
line[line.length]=Link(box[18][0],Point(linx(2.5),liny(-1)),box[17][0]);
line[line.length]=Link(box[18][0],Point(linx(2.5),liny(-1)),box[15][1]);
line[line.length]=Link(box[18][0],box[13][1]);
//----------
box[19]=new Array();
yLevel+=2;
box[19][0]=Textbox_Condition(x(3.5),y(yLevel),"ϫ ENDING");
line[line.length]=Link(box[19][0],box[18][0]);

hdft["footer"]=Footer(liny(1),(67));