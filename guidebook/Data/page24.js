// CVG HTML Data Page24 Done By Shakugan_No_Kaluote 2008.4.14
hdft["header"]=Header("public","����·��","Public Route","���������","Heartbeat��High School");

var yLevel=0;

//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Selection(x(0),y(yLevel),"���������");
box[0][0].addLink("p24_XTGZ");
box[0][0].addClick(function(){gotopage(12,"p12_retXTGZ")});
box[0][1]=Textbox_Selection(x(3),y(yLevel),"У��ǰ����");
line[line.length]=Link(Point(linx(3),liny(0)-LINEBASEHEIGHT/2),Point(linx(3),liny(0)-LINEBASEHEIGHT/2));
//----------
box[1]=new Array();
yLevel+=3;
box[1][0]=Textbox_Option(x(2),y(yLevel),"Ŀ������ȥ");
line[line.length]=Link(box[1][0],box[0][1]);
box[1][1]=Textbox_Option(x(4),y(yLevel),"�������");
line[line.length]=Link(box[1][1],box[0][1]);
//----------
box[2]=new Array();
yLevel+=2;
box[2][0]=Textbox_Selection(x(2),y(yLevel),"ʳ��������");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Quit(x(4),y(yLevel),"Game Over");
box[2][1].addClick(function(){gotopage(12,"p12_retXTGZ")});
line[line.length]=Link(box[2][1],box[1][1]);
//----------
box[3]=new Array();
yLevel+=3;
box[3][0]=Textbox_Option(x(2),y(yLevel),"͵͵ע������");
line[line.length]=Link(box[3][0],box[2][0]);
box[3][1]=Textbox_Option(x(4),y(yLevel),"�������");
line[line.length]=Link(box[3][1],box[2][0]);
//----------
box[4]=new Array();
yLevel+=2;
box[4][0]=Textbox_Selection(x(2),y(yLevel),"��ѧʱ����");
line[line.length]=Link(box[4][0],box[3][0]);
box[4][1]=Textbox_Quit(x(4),y(yLevel),"Game Over");
box[4][1].addClick(function(){gotopage(12,"p12_retXTGZ")});
line[line.length]=Link(box[4][1],box[3][1]);
//----------
box[5]=new Array();
yLevel+=3;
box[5][0]=Textbox_Option(x(2),y(yLevel),"�������");
line[line.length]=Link(box[5][0],box[4][0]);
box[5][1]=Textbox_Option(x(4),y(yLevel),"Ŀ������ȥ");
line[line.length]=Link(box[5][1],box[4][0]);
//----------
box[6]=new Array();
yLevel+=2;
box[6][0]=Textbox_Selection(x(2),y(yLevel),"ѩҰ�Ĺ���");
line[line.length]=Link(box[6][0],box[5][0]);
box[6][1]=Textbox_Quit(x(4),y(yLevel),"Game Over");
box[6][1].addClick(function(){gotopage(12,"p12_retXTGZ")});
line[line.length]=Link(box[6][1],box[5][1]);
//----------
box[7]=new Array();
yLevel+=3;
box[7][0]=Textbox_Option(x(2),y(yLevel),"������");
line[line.length]=Link(box[7][0],box[6][0]);
box[7][1]=Textbox_Option(x(4),y(yLevel),"ӵ����");
line[line.length]=Link(box[7][1],box[6][0]);
//----------
box[8]=new Array();
yLevel+=2;
box[8][0]=Textbox_Selection(x(2),y(yLevel),"ʷ�ٷ�ǳ�");
line[line.length]=Link(box[8][0],box[7][0]);
box[8][1]=Textbox_Quit(x(4),y(yLevel),"Game Over");
box[8][1].addClick(function(){gotopage(12,"p12_retXTGZ")});
line[line.length]=Link(box[8][1],box[7][1]);
//----------
box[9]=new Array();
yLevel+=3;
box[9][0]=Textbox_Option(x(2),y(yLevel),"��ʷ�ٷ�һ����");
line[line.length]=Link(box[9][0],box[8][0]);
box[9][1]=Textbox_Option(x(4),y(yLevel),"�Լ�һ������");
line[line.length]=Link(box[9][1],box[8][0]);
//----------
box[10]=new Array();
yLevel+=2;
box[10][0]=Textbox_Selection(x(2),y(yLevel),"���ƴ�����");
line[line.length]=Link(box[10][0],box[9][0]);
box[10][1]=Textbox_Quit(x(4),y(yLevel),"Game Over");
box[10][1].addClick(function(){gotopage(12,"p12_retXTGZ")});
line[line.length]=Link(box[10][1],box[9][1]);
//----------
box[11]=new Array();
yLevel+=3;
box[11][0]=Textbox_Option(x(2),y(yLevel),"�Լ�����ս��");
line[line.length]=Link(box[11][0],box[10][0]);
box[11][1]=Textbox_Option(x(4),y(yLevel),"���ｻ��ʷ�ٷ�");
line[line.length]=Link(box[11][1],box[10][0]);
//----------
box[12]=new Array();
yLevel+=2;
box[12][0]=Textbox_Selection(x(2),y(yLevel),"Ѱ��Ѫ��");
line[line.length]=Link(box[12][0],box[11][0]);
box[12][1]=Textbox_Quit(x(4),y(yLevel),"Game Over");
box[12][1].addClick(function(){gotopage(12,"p12_retXTGZ")});
line[line.length]=Link(box[12][1],box[11][1]);
//----------
box[13]=new Array();
yLevel+=3;
box[13][0]=Textbox_Option(x(0),y(yLevel),"��");
line[line.length]=Link(box[13][0],box[12][0]);
box[13][1]=Textbox_Option(x(4),y(yLevel),"����");
line[line.length]=Link(box[13][1],box[12][0]);
//----------
box[14]=new Array();
yLevel+=2;
box[14][0]=Textbox_Selection(x(4),y(yLevel),"�����");
line[line.length]=Link(box[14][0],box[13][1]);
//----------
box[15]=new Array();
yLevel+=3;
box[15][0]=Textbox_Option(x(2),y(yLevel),"������");
line[line.length]=Link(box[15][0],box[14][0]);
box[15][1]=Textbox_Option(x(4),y(yLevel),"��ǰ��");
line[line.length]=Link(box[15][1],box[14][0]);
box[15][2]=Textbox_Option(x(6),y(yLevel),"������");
line[line.length]=Link(box[15][2],box[14][0]);
//----------
box[16]=new Array();
yLevel+=2;
box[16][0]=Textbox_Selection(x(0),y(yLevel),"ʷ�ٷ�ӵ��");
line[line.length]=Link(box[16][0],box[13][0]);
box[16][1]=Textbox_Quit(x(2),y(yLevel),"The End");
box[16][1].addClick(function(){gotopage(12,"p12_retXTGZ")});
line[line.length]=Link(box[16][1],box[15][0]);
//----------
box[17]=new Array();
yLevel+=1;
box[17][0]=Textbox_Quit(x(5),y(yLevel),"Game Over");
box[17][0].addClick(function(){gotopage(12,"p12_retXTGZ")});
line[line.length]=Link(box[17][0],box[15][1]);
line[line.length]=Link(box[17][0],box[15][2]);
//----------
box[18]=new Array();
yLevel+=2;
box[18][0]=Textbox_Option(x(0),y(yLevel),"������");
line[line.length]=Link(box[18][0],box[16][0]);
box[18][1]=Textbox_Option(x(2),y(yLevel),"ӵ����");
line[line.length]=Link(box[18][1],box[16][0]);
//----------
box[19]=new Array();
yLevel+=2;
box[19][0]=Textbox_Selection(x(0),y(yLevel),"¶˿�ǳ�");
line[line.length]=Link(box[19][0],box[18][0]);
box[19][1]=Textbox_Quit(x(2),y(yLevel),"Game Over");
box[19][1].addClick(function(){gotopage(12,"p12_retXTGZ")});
line[line.length]=Link(box[19][1],box[18][1]);
//----------
box[20]=new Array();
yLevel+=3;
box[20][0]=Textbox_Option(x(0),y(yLevel),"������");
line[line.length]=Link(box[20][0],box[19][0]);
box[20][1]=Textbox_Option(x(2),y(yLevel),"һ���ж�");
line[line.length]=Link(box[20][1],box[19][0]);
//----------
box[21]=new Array();
yLevel+=2;
box[21][0]=Textbox_Quit(x(0),y(yLevel),"�����Ķ���ǿ��Escape");
box[21][0].addClick(function(){gotopage(12,"p12_retXTGZ")});
line[line.length]=Link(box[21][0],box[20][0]);
box[21][1]=Textbox_Quit(x(2),y(yLevel),"Game Over");
box[21][1].addClick(function(){gotopage(12,"p12_retXTGZ")});
line[line.length]=Link(box[21][1],box[20][1]);

hdft["footer"]=Footer(liny(3),24);