// CVG HTML Data Page68 Done By kyrios 2008.4.17
hdft["header"]=Header("nagisa","AFTER STORY","After Story","��ҵ����","Graduation Ceremony");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Condition(x(3),y(yLevel),"ѧԺƪ22�գ�����������Ǵ�");
line[line.length]=Link(Point(linx(3),liny(0)-LINEBASEHEIGHT/2),Point(linx(3),liny(0)-LINEBASEHEIGHT/2));
//----------
box[1]=new Array();
yLevel+=3;
box[1][0]=Textbox_Selection(x(2),y(yLevel),"���Ǵ��");
line[line.length]=Link(box[1][0],box[0][0]);
box[1][1]=Textbox_Selection(x(4),y(yLevel),"װ��û����","r|+δ����");
line[line.length]=Link(box[1][1],box[0][0]);
//----------
box[2]=new Array();
yLevel+=2;
box[2][0]=Textbox_Condition(x(2),y(yLevel),"ѧԺƪ28��,�Ǵ���Ϊ�������");
line[line.length]=Link(box[2][0],box[1][0]);
//----------
box[3]=new Array();
yLevel+=3;
box[3][0]=Textbox_Selection(x(1),y(yLevel),"��");
line[line.length]=Link(box[3][0],box[2][0]);
box[3][1]=Textbox_Selection(x(3),y(yLevel),"��");
line[line.length]=Link(box[3][1],box[2][0]);
//----------
box[4]=new Array();
yLevel+=2;
box[4][0]=Textbox_Option(x(1),y(yLevel),"�Ǵ���ϯ��ҵ����");
line[line.length]=Link(box[4][0],box[3][0]);
//----------
box[5]=new Array();
yLevel+=4;
box[5][0]=Textbox_Condition(x(3),y(yLevel),"ѧԺƪ22��,��ѯָ����ʦ������");
line[line.length]=Link(box[5][0],Point(linx(2),liny(-1)),box[3][1]);
line[line.length]=Link(box[5][0],Point(linx(2),liny(-1)),box[4][0]);
line[line.length]=Link(box[5][0],box[1][1]);
//----------
box[6]=new Array();
yLevel+=3;
box[6][0]=Textbox_Selection(x(2),y(yLevel),"�����ֽ�������");
line[line.length]=Link(box[6][0],box[5][0]);
box[6][1]=Textbox_Selection(x(4),y(yLevel),"�Ͱ���������");
line[line.length]=Link(box[6][1],box[5][0]);
//----------
box[7]=new Array();
yLevel+=2;
box[7][0]=Textbox_Option(x(2),y(yLevel),"��,飳�ϯ��ҵ����");
line[line.length]=Link(box[7][0],box[6][0]);
//----------
box[8]=new Array();
yLevel+=3;
box[8][0]=Textbox_Condition(x(3),y(yLevel),"ѧԺƪ23�գ���ԭ�����ô����绰");
line[line.length]=Link(box[8][0],box[7][0]);
line[line.length]=Link(box[8][0],box[6][1]);
//----------
box[9]=new Array();
yLevel+=3;
box[9][0]=Textbox_Selection(x(2),y(yLevel),"����ԭ����");
line[line.length]=Link(box[9][0],box[8][0]);
box[9][1]=Textbox_Selection(x(4),y(yLevel),"����������","r|+δ����");
line[line.length]=Link(box[9][1],box[8][0]);
//----------
box[10]=new Array();
yLevel+=2;
box[10][0]=Textbox_Condition(x(2),y(yLevel),"ѧԺƪ26��,ǰ��̽�׵�ѿ��");
line[line.length]=Link(box[10][0],box[9][0]);
//----------
box[11]=new Array();
yLevel+=3;
box[11][0]=Textbox_Selection(x(1),y(yLevel),"�õ�");
line[line.length]=Link(box[11][0],box[10][0]);
box[11][1]=Textbox_Selection(x(3),y(yLevel),"�Լ�һ����ȥ��");
line[line.length]=Link(box[11][1],box[10][0]);
//----------
box[12]=new Array();
yLevel+=2;
box[12][0]=Textbox_Option(x(1),y(yLevel),"ѿ�²μӱ�ҵ����");
line[line.length]=Link(box[12][0],box[11][0]);
//----------
box[13]=new Array();
yLevel+=4;
box[13][0]=Textbox_Condition(x(3),y(yLevel),"ѧԺƪ26��,ǰ��̽�׵�ѿ��");
line[line.length]=Link(box[13][0],Point(linx(2),liny(-1)),box[12][0]);
line[line.length]=Link(box[13][0],Point(linx(2),liny(-1)),box[11][1]);
line[line.length]=Link(box[13][0],box[9][1]);
//----------
box[14]=new Array();
yLevel+=3;
box[14][0]=Textbox_Selection(x(2),y(yLevel),"�õ�");
line[line.length]=Link(box[14][0],box[13][0]);
box[14][1]=Textbox_Selection(x(4),y(yLevel),"�Լ�һ����ȥ��","r|+δ����");
line[line.length]=Link(box[14][1],box[13][0]);
//----------
box[15]=new Array();
yLevel+=2;
box[15][0]=Textbox_Condition(x(4),y(yLevel),"ѧԺƪ28��,����֦��Ϊ�������");
line[line.length]=Link(box[15][0],box[14][1]);
//----------
box[16]=new Array();
yLevel+=3;
box[16][0]=Textbox_Selection(x(3),y(yLevel),"��");
line[line.length]=Link(box[16][0],box[15][0]);
box[16][1]=Textbox_Selection(x(5),y(yLevel),"��");
line[line.length]=Link(box[16][1],box[15][0]);
//----------
box[17]=new Array();
yLevel+=3;
box[17][0]=Textbox_Option(x(3),y(yLevel),"����֦��ϯ��ҵ����");
line[line.length]=Link(box[17][0],box[16][0]);
line[line.length]=Link(box[17][0],box[14][0]);
//----------
box[18]=new Array();
yLevel+=3;
box[18][0]=Textbox_Condition(x(3),y(yLevel),"ͬ��ƪ,̽��������ʦ");
line[line.length]=Link(box[18][0],box[17][0]);
line[line.length]=Link(box[18][0],box[16][1]);
//----------
box[19]=new Array();
yLevel+=3;
box[19][0]=Textbox_Selection(x(2),y(yLevel),"�ȵ�����һ��ȥ");
line[line.length]=Link(box[19][0],box[18][0]);
box[19][1]=Textbox_Selection(x(4),y(yLevel),"���һ��ȥ","r|+δ����");
line[line.length]=Link(box[19][1],box[18][0]);
//----------
box[20]=new Array();
yLevel+=2;
box[20][0]=Textbox_Condition(x(4),y(yLevel),"ѧԺƪ29��,�ڹź��������������");
line[line.length]=Link(box[20][0],box[19][1]);
//----------
box[21]=new Array();
yLevel+=3;
box[21][0]=Textbox_Selection(x(3),y(yLevel),"��");
line[line.length]=Link(box[21][0],box[20][0]);
box[21][1]=Textbox_Selection(x(5),y(yLevel),"��");
line[line.length]=Link(box[21][1],box[20][0]);
//----------
box[22]=new Array();
yLevel+=3;
box[22][0]=Textbox_Option(x(3),y(yLevel),"���ӳ�ϯ��ҵ����");
line[line.length]=Link(box[22][0],box[21][0]);
line[line.length]=Link(box[22][0],box[19][0]);
line[line.length]=Link(Point(linx(3),liny(2)),Point(linx(5),liny(2)),box[21][1]);
line[line.length]=Link(Point(linx(3),liny(2)),box[22][0]);
line[line.length]=Link(Point(linx(3),liny(2)),Point(linx(3),liny(2)));

hdft["footer"]=Footer(liny(1),68);