// CVG HTML Data Page44 Done By Ligueston 2008.4.17
hdft["header"]=Header("fuuko","���� ����","Fuuko Ibuki","4��28�ա�4��30��","April 28th~April 30th");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(3),y(yLevel),"4��28��","top");
//----------
box[1]=new Array();
yLevel+=2;
box[1][0]=Textbox_Selection(x(3),y(yLevel),"�����ѡ��");
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Option(x(1),y(yLevel),"������");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Option(x(3),y(yLevel),"���ٿ�");
line[line.length]=Link(box[2][1],box[1][0]);
box[2][2]=Textbox_Option(x(5),y(yLevel),"���������");
line[line.length]=Link(box[2][2],box[1][0]);
//----------
box[3]=new Array();
yLevel+=3;
box[3][0]=Textbox_Selection(x(3),y(yLevel),"���۵Ĳ���");
line[line.length]=Link(box[3][0],box[2][0]);
line[line.length]=Link(box[3][0],box[2][1]);
line[line.length]=Link(box[3][0],box[2][2]);
//----------
box[4]=new Array();
yLevel+=3;
box[4][0]=Textbox_Option(x(2),y(yLevel),"����Ҳ���μ�����");
line[line.length]=Link(box[4][0],box[3][0]);
box[4][1]=Textbox_Option(x(4),y(yLevel),"��Ϣһ���");
line[line.length]=Link(box[4][1],box[3][0]);
//----------
box[5]=new Array();
yLevel+=3;
box[5][0]=Textbox_Option(x(3),y(yLevel),"���Ӵ�ʦ���ߣ�");
box[5][0].addLink("p44_retKFMT7");
box[5][0].addClick(function(){gotopage(50,"p50_KFMT7")});
line[line.length]=Link(box[5][0],box[4][0]);
line[line.length]=Link(box[5][0],box[4][1]);
//----------
box[6]=new Array();
yLevel+=2;
box[6][0]=Textbox_Date(x(3),y(yLevel),"4��27��","bottom");
line[line.length]=Link(box[6][0],box[5][0]);
//----------
box[7]=new Array();
yLevel+=5;
box[7][0]=Textbox_Date(x(3),y(yLevel),"4��29��","top");
//----------
box[8]=new Array();
yLevel+=2;
box[8][0]=Textbox_Selection(x(3),y(yLevel),"�����Ĵ���");
line[line.length]=Link(box[8][0],box[7][0]);
//----------
box[9]=new Array();
yLevel+=3;
box[9][0]=Textbox_Option(x(2),y(yLevel),"�����һ��ȥ");
line[line.length]=Link(box[9][0],box[8][0]);
box[9][1]=Textbox_Option(x(4),y(yLevel),"��������");
line[line.length]=Link(box[9][1],box[8][0]);
//----------
box[10]=new Array();
yLevel+=3;
box[10][0]=Textbox_Option(x(3),y(yLevel),"���Ӵ�ʦ���ˣ�");
box[10][0].addLink("p44_retKFMT8");
box[10][0].addClick(function(){gotopage(50,"p50_KFMT8")});
line[line.length]=Link(box[10][0],box[9][0]);
line[line.length]=Link(box[10][0],box[9][1]);
//----------
box[11]=new Array();
yLevel+=2;
box[11][0]=Textbox_Date(x(3),y(yLevel),"4��30��","bottom");
line[line.length]=Link(box[11][0],box[10][0]);
//----------
box[12]=new Array();
yLevel+=5;
box[12][0]=Textbox_Date(x(3),y(yLevel),"4��30��","top");
//----------
box[13]=new Array();
yLevel+=2;
box[13][0]=Textbox_Selection(x(3),y(yLevel),"���˵����");
line[line.length]=Link(box[13][0],box[12][0]);
//----------
box[14]=new Array();
yLevel+=3;
box[14][0]=Textbox_Option(x(1),y(yLevel),"��У���һ¥����");
line[line.length]=Link(box[14][0],box[13][0]);
box[14][1]=Textbox_Option(x(3),y(yLevel),"��У�����¥����");
line[line.length]=Link(box[14][1],box[13][0]);
box[14][2]=Textbox_Option(x(5),y(yLevel),"������");
line[line.length]=Link(box[14][2],box[13][0]);
//----------
box[15]=new Array();
yLevel+=3;
box[15][0]=Textbox_Selection(x(3),y(yLevel),"���˵ķ���");
line[line.length]=Link(box[15][0],box[14][0]);
line[line.length]=Link(box[15][0],box[14][1]);
line[line.length]=Link(box[15][0],box[14][2]);
//----------
box[16]=new Array();
yLevel+=3;
box[16][0]=Textbox_Option(x(2),y(yLevel),"����");
line[line.length]=Link(box[16][0],box[15][0]);
box[16][1]=Textbox_Option(x(4),y(yLevel),"�����");
line[line.length]=Link(box[16][1],box[15][0]);
//----------
box[17]=new Array();
yLevel+=2;
box[17][0]=Textbox_Option(x(4),y(yLevel),"���Ӵ�ʦ���ţ�");
box[17][0].addLink("p44_retKFMT9");
box[17][0].addClick(function(){gotopage(50,"p50_KFMT9")});
line[line.length]=Link(box[17][0],box[16][1]);
//----------
box[18]=new Array();
yLevel+=3;
box[18][0]=Textbox_Date(x(3),y(yLevel),"5��2��","bottom");
line[line.length]=Link(box[18][0],box[17][0]);
line[line.length]=Link(box[18][0],box[16][0]);
box[18][0].addTitle("���ת��45ҳ");
box[18][0].addClick(function(){gotopage(45)});

hdft["footer"]=Footer(liny(2),44);