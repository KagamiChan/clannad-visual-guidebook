// CVG HTML Data Page35 Done By goodbest 2008.4.18
hdft["header"]=Header("fujibayashi","���� ��/���� �","Kyou Fujibayashi/Ryou Fujibayashi","5��3�ա�5��5��","May 3rd~May 5th");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(3),y(yLevel),"5��3��","top");
//----------
box[1]=new Array();
yLevel+=2;
box[1][0]=Textbox_Selection(x(3),y(yLevel),"�ӵ���ͻ����");
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Option(x(2),y(yLevel),"��ϰ���Կ�","l|��");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Option(x(4),y(yLevel),"Ĭ�������ؿ�����","r|��");
line[line.length]=Link(box[2][1],box[1][0]);
//----------
box[3]=new Array();
yLevel+=3;
box[3][0]=Textbox_Date(x(3),y(yLevel),"5��4��","bottom");
line[line.length]=Link(box[3][0],box[2][0]);
line[line.length]=Link(box[3][0],box[2][1]);
//----------
box[4]=new Array();
yLevel+=5;
box[4][0]=Textbox_Date(x(3),y(yLevel),"5��4��","top");
//----------
box[5]=new Array();
yLevel+=2;
box[5][0]=Textbox_Selection(x(3),y(yLevel),"���䵱ʱ飵�ѡ��");
line[line.length]=Link(box[5][0],box[4][0]);
//----------
box[6]=new Array();
yLevel+=3;
box[6][0]=Textbox_Option(x(2),y(yLevel),"��ˮ��","l|��|-�");
line[line.length]=Link(box[6][0],box[5][0]);
box[6][1]=Textbox_Option(x(4),y(yLevel),"̹ɣ��","r|-�|��");
line[line.length]=Link(box[6][1],box[5][0]);
//----------
box[7]=new Array();
yLevel+=3;
box[7][0]=Textbox_Date(x(3),y(yLevel),"5��5��","bottom");
line[line.length]=Link(box[7][0],box[6][0]);
line[line.length]=Link(box[7][0],box[6][1]);
//----------
box[8]=new Array();
yLevel+=5;
box[8][0]=Textbox_Date(x(3),y(yLevel),"5��5��","top");
//----------
box[9]=new Array();
yLevel+=2;
box[9][0]=Textbox_Selection(x(3),y(yLevel),"��Ҳ��飵Ĺ�ϵ������");
line[line.length]=Link(box[9][0],box[8][0]);
//----------
box[10]=new Array();
yLevel+=3;
box[10][0]=Textbox_Option(x(1),y(yLevel),"����");
line[line.length]=Link(box[10][0],box[9][0]);
box[10][1]=Textbox_Option(x(3),y(yLevel),"����");
line[line.length]=Link(box[10][1],box[9][0]);
box[10][2]=Textbox_Option(x(5),y(yLevel),"��");
line[line.length]=Link(box[10][2],box[9][0]);
//----------
box[11]=new Array();
yLevel+=3;
box[11][0]=Textbox_Selection(x(3),y(yLevel),"������������");
line[line.length]=Link(box[11][0],box[10][0]);
line[line.length]=Link(box[11][0],box[10][1]);
line[line.length]=Link(box[11][0],box[10][2]);
//----------
box[12]=new Array();
yLevel+=3;
box[12][0]=Textbox_Option(x(2),y(yLevel),"����","l|��|�");
line[line.length]=Link(box[12][0],box[11][0]);
box[12][1]=Textbox_Option(x(4),y(yLevel),"������","r|��|�");
line[line.length]=Link(box[12][1],box[11][0]);
//----------
box[13]=new Array();
yLevel+=2;
box[13][0]=Textbox_Condition(x(2),y(yLevel),"28�գ�ϲ��Ů��������");
line[line.length]=Link(box[13][0],box[12][0]);
//----------
box[14]=new Array();
yLevel+=3;
box[14][0]=Textbox_Selection(x(1),y(yLevel),"ϲ����ͷ��");
line[line.length]=Link(box[14][0],box[13][0]);
box[14][1]=Textbox_Selection(x(3),y(yLevel),"ϲ����ͷ��");
line[line.length]=Link(box[14][1],box[13][0]);
//----------
box[15]=new Array();
yLevel+=2;
box[15][0]=Textbox_Condition(x(1),y(yLevel),"4�գ����䵱ʱ飵�ѡ��");
line[line.length]=Link(box[15][0],box[14][0]);
//----------
box[16]=new Array();
yLevel+=3;
box[16][0]=Textbox_Selection(x(1),y(yLevel),"̹ɣ��");
line[line.length]=Link(box[16][0],box[15][0]);
box[16][1]=Textbox_Selection(x(3),y(yLevel),"��ˮ��");
line[line.length]=Link(box[16][1],box[15][0]);
//----------
box[17]=new Array();
yLevel+=2;
box[17][0]=Textbox_Quit(x(1),y(yLevel),"� GOOD ENDING");
line[line.length]=Link(box[17][0],box[16][0]);
//----------
box[18]=new Array();
yLevel+=1;
box[18][0]=Textbox_Date(x(3),y(yLevel),"5��7��","bottom");
line[line.length]=Link(box[18][0],box[16][1]);
line[line.length]=Link(box[18][0],Point(linx(4),liny(-5)),box[14][1]);
line[line.length]=Link(box[18][0],box[12][1]);

hdft["footer"]=Footer(liny(1),35);
