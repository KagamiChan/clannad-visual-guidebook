// CVG HTML Data Page43 Done By Ligueston 2008.4.17
hdft["header"]=Header("fuuko","���� ����","Fuuko Ibuki","4��26�ա�4��27��","April 26th~April 27th");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(3),y(yLevel),"4��26��","top");
//----------
box[1]=new Array();
yLevel+=2;
box[1][0]=Textbox_Selection(x(3),y(yLevel),"ǰȥ������ʦ");
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Option(x(2),y(yLevel),"����Ӳ��ȥ");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Option(x(4),y(yLevel),"������������");
line[line.length]=Link(box[2][1],box[1][0]);
//----------
box[3]=new Array();
yLevel+=3;
box[3][0]=Textbox_Condition(x(3),y(yLevel),"24�գ���Ҳ��Կ������");
line[line.length]=Link(box[3][0],box[2][0]);
line[line.length]=Link(box[3][0],box[2][1]);
//----------
box[4]=new Array();
yLevel+=3;
box[4][0]=Textbox_Selection(x(2),y(yLevel),"������ע������","l|+δ����");
line[line.length]=Link(box[4][0],box[3][0]);
box[4][1]=Textbox_Selection(x(4),y(yLevel),"������ס��");
line[line.length]=Link(box[4][1],box[3][0]);
//----------
box[5]=new Array();
yLevel+=2;
box[5][0]=Textbox_Selection(x(4),y(yLevel),"�����������ӣ�����");
line[line.length]=Link(box[5][0],box[4][1]);
//----------
box[6]=new Array();
yLevel+=3;
box[6][0]=Textbox_Option(x(3),y(yLevel),"�ðɡ���������");
line[line.length]=Link(box[6][0],box[5][0]);
box[6][1]=Textbox_Option(x(5),y(yLevel),"��ҲΪ�ҿ���һ����");
line[line.length]=Link(box[6][1],box[5][0]);
//----------
box[7]=new Array();
yLevel+=2;
box[7][0]=Textbox_Selection(x(2),y(yLevel),"�����������ӣ�һ��");
line[line.length]=Link(box[7][0],box[4][0]);
//----------
box[8]=new Array();
yLevel+=3;
box[8][0]=Textbox_Option(x(1),y(yLevel),"����ȫ�����","l|-����");
line[line.length]=Link(box[8][0],box[7][0]);
box[8][1]=Textbox_Option(x(3),y(yLevel),"����������","r|-����");
line[line.length]=Link(box[8][1],box[7][0]);
//----------
box[9]=new Array();
yLevel+=2;
box[9][0]=Textbox_Quit(x(1),y(yLevel),"���� BAD ENDDING");
line[line.length]=Link(box[9][0],box[8][0]);
box[9][1]=Textbox_Option(x(3),y(yLevel),"���Ӵ�ʦ������");
box[9][1].addLink("p43_retKFMT6");
box[9][1].addClick(function(){gotopage(49,"p49_KFMT6")});
line[line.length]=Link(box[9][1],box[8][1]);
//----------
box[10]=new Array();
yLevel+=3;
box[10][0]=Textbox_Date(x(3),y(yLevel),"4��27��","bottom");
line[line.length]=Link(box[10][0],box[9][1]);

line[line.length]=Link(box[10][0],Point(linx(4),liny(-7)),box[6][0]);
line[line.length]=Link(box[10][0],Point(linx(4),liny(-7)),box[6][1]);
//----------
box[11]=new Array();
yLevel+=5;
box[11][0]=Textbox_Date(x(3),y(yLevel),"4��27��","top");
//----------
box[12]=new Array();
yLevel+=2;
box[12][0]=Textbox_Selection(x(3),y(yLevel),"���ǵĴ���");
line[line.length]=Link(box[12][0],box[11][0]);
//----------
box[13]=new Array();
yLevel+=3;
box[13][0]=Textbox_Option(x(2),y(yLevel),"����ʵʵ�ظ�����");
line[line.length]=Link(box[13][0],box[12][0]);
box[13][1]=Textbox_Option(x(4),y(yLevel),"���ֳ�Ĭ");
line[line.length]=Link(box[13][1],box[12][0]);
//----------
box[14]=new Array();
yLevel+=3;
box[14][0]=Textbox_Selection(x(3),y(yLevel),"�����ķ���");
line[line.length]=Link(box[14][0],box[13][0]);
line[line.length]=Link(box[14][0],box[13][1]);
//----------
box[15]=new Array();
yLevel+=3;
box[15][0]=Textbox_Option(x(2),y(yLevel),"������ס���ı���");
line[line.length]=Link(box[15][0],box[14][0]);
box[15][1]=Textbox_Option(x(4),y(yLevel),"����ʵʵ����");
line[line.length]=Link(box[15][1],box[14][0]);
//----------
box[16]=new Array();
yLevel+=3;
box[16][0]=Textbox_Selection(x(3),y(yLevel),"������뷨");
line[line.length]=Link(box[16][0],box[15][0]);
line[line.length]=Link(box[16][0],box[15][1]);
//----------
box[17]=new Array();
yLevel+=3;
box[17][0]=Textbox_Option(x(2),y(yLevel),"�ǰ���");
line[line.length]=Link(box[17][0],box[16][0]);
box[17][1]=Textbox_Option(x(4),y(yLevel),"����");
line[line.length]=Link(box[17][1],box[16][0]);
//----------
box[18]=new Array();
yLevel+=3;
box[18][0]=Textbox_Date(x(3),y(yLevel),"4��28��","bottom");
line[line.length]=Link(box[18][0],box[17][0]);
line[line.length]=Link(box[18][0],box[17][1]);
box[18][0].addTitle("���ת����44ҳ");
box[18][0].addClick(function(){gotopage(44)});

hdft["footer"]=Footer(liny(2),43);