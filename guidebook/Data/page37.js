// CVG HTML Data Page37 Done By goodbest 2008.4.18
hdft["header"]=Header("kappei","����ʤƽ","KappeiHiiragii","4��25�ա�ʤƽ","April 25th~Kappei");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(3.5),y(yLevel),"4��25��","top");
//----------
box[1]=new Array();
yLevel+=2;
box[1][0]=Textbox_Condition(x(3.5),y(yLevel),"23�գ����ĵ����ʱ��");
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Selection(x(2.5),y(yLevel),"ת��һ������");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Selection(x(4.5),y(yLevel),"˯��","r|+δ����");
line[line.length]=Link(box[2][1],box[1][0]);
//----------
box[3]=new Array();
yLevel+=2;
box[3][0]=Textbox_Selection(x(2.5),y(yLevel),"�����е�N����������");
line[line.length]=Link(box[3][0],box[2][0]);
//----------
box[4]=new Array();
yLevel+=3;
box[4][0]=Textbox_Option(x(1.5),y(yLevel),"��ס��");
line[line.length]=Link(box[4][0],box[3][0]);
box[4][1]=Textbox_Option(x(3.5),y(yLevel),"��ʱ������");
line[line.length]=Link(box[4][1],box[3][0]);
//----------
box[5]=new Array();
yLevel+=2;
box[5][0]=Textbox_Option(x(1.5),y(yLevel),"���Ӵ�ʦ���壩");
box[5][0].addLink("p37_retKFMT5");
box[5][0].addClick(function(){gotopage(49,"p49_KFMT5")});
line[line.length]=Link(box[5][0],box[4][0]);
//----------
box[6]=new Array();
yLevel+=4;
box[6][0]=Textbox_Date(x(3.5),y(yLevel),"ʤƽ","bottom");
line[line.length]=Link(box[6][0],Point(linx(2.5),liny(-1)),box[5][0]);
line[line.length]=Link(box[6][0],Point(linx(2.5),liny(-1)),box[4][1]);
line[line.length]=Link(box[6][0],box[2][1]);
//----------
box[7]=new Array();
yLevel+=5;
box[7][0]=Textbox_Date(x(3.5),y(yLevel),"ʤƽ","top");
//----------
box[8]=new Array();
yLevel+=2;
box[8][0]=Textbox_Selection(x(3.5),y(yLevel),"�޴��ɹ��ʤƽ");
line[line.length]=Link(box[8][0],box[7][0]);
//----------
box[9]=new Array();
yLevel+=3;
box[9][0]=Textbox_Option(x(2.5),y(yLevel),"��������ס��","l|ʤƽ");
line[line.length]=Link(box[9][0],box[8][0]);
box[9][1]=Textbox_Option(x(4.5),y(yLevel),"��ȷ...��û�а취��...","r|ʤƽ");
line[line.length]=Link(box[9][1],box[8][0]);
//----------
box[10]=new Array();
yLevel+=2;
box[10][0]=Textbox_Condition(x(2.5),y(yLevel),"20�գ�Ұ��Ѱ�����");
line[line.length]=Link(box[10][0],box[9][0]);
//----------
box[11]=new Array();
yLevel+=3;
box[11][0]=Textbox_Selection(x(1.5),y(yLevel),"��æ");
line[line.length]=Link(box[11][0],box[10][0]);
box[11][1]=Textbox_Selection(x(3.5),y(yLevel),"�ܾ�","r|+δ����");
line[line.length]=Link(box[11][1],box[10][0]);
//----------
box[12]=new Array();
yLevel+=2;
box[12][0]=Textbox_Option(x(1.5),y(yLevel),"ʤƽ���⡱���");
line[line.length]=Link(box[12][0],box[11][0]);
//----------
box[13]=new Array();
yLevel+=1;
box[13][0]=Textbox_Quit(x(3.5),y(yLevel),"���� BAD ENDING");
line[line.length]=Link(box[13][0],box[11][1]);
line[line.length]=Link(box[13][0],box[9][1]);
//----------
box[14]=new Array();
yLevel+=1;
box[14][0]=Textbox_Quit(x(1.5),y(yLevel),"ʤƽ GOOD ENDING");
line[line.length]=Link(box[14][0],box[12][0]);

hdft["footer"]=Footer(liny(1),37);