// CVG HTML Data Page30 Done By Shakugan_No_Kaluote 2008.4.17
hdft["header"]=Header("tomoyo","���� �Ǵ�","Tomoyo Sakagami","�Ǵ�64HIT","Tomoyo's 64Hit");

var yLevel=0;

//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Option(x(0),y(yLevel),"�Ǵ�64HIT");
box[0][0].addLink("p30_TY64");
box[0][0].addClick(function(){gotopage(29,"p29_retTY64")});
box[0][1]=Textbox_Condition(x(2),y(yLevel),"6�գ�����֮��Ĵ���");
line[line.length]=Link(Point(linx(2),liny(0)-LINEBASEHEIGHT/2),Point(linx(2),liny(0)-LINEBASEHEIGHT/2));
//----------
box[1]=new Array();
yLevel+=3;
box[1][0]=Textbox_Selection(x(1),y(yLevel),"����˵��");
line[line.length]=Link(box[1][0],box[0][1]);
box[1][1]=Textbox_Selection(x(3),y(yLevel),"���ֳ�Ĭ�������Ǵ�����");
line[line.length]=Link(box[1][1],box[0][1]);
//----------
box[2]=new Array();
yLevel+=2;
box[2][0]=Textbox_Option(x(1),y(yLevel),"������8HIT");
line[line.length]=Link(box[2][0],box[1][0]);
//----------
box[3]=new Array();
yLevel+=3;
box[3][0]=Textbox_Condition(x(2),y(yLevel),"18�գ����Ե�̵ķ���");
line[line.length]=Link(box[3][0],box[2][0]);
line[line.length]=Link(box[3][0],box[1][1]);
//----------
box[4]=new Array();
yLevel+=3;
box[4][0]=Textbox_Selection(x(1),y(yLevel),"�ٿ�һ���");
line[line.length]=Link(box[4][0],box[3][0]);
box[4][1]=Textbox_Selection(x(3),y(yLevel),"�뿪","r|+δ����");
line[line.length]=Link(box[4][1],box[3][0]);
//----------
box[5]=new Array();
yLevel+=2;
box[5][0]=Textbox_Option(x(1),y(yLevel),"��������8HIT");
line[line.length]=Link(box[5][0],box[4][0]);
//----------
box[6]=new Array();
yLevel+=3;
box[6][0]=Textbox_Condition(x(2),y(yLevel),"17�գ�����������������֦");
line[line.length]=Link(box[6][0],box[5][0]);
line[line.length]=Link(box[6][0],box[4][1]);
//----------
box[7]=new Array();
yLevel+=3;
box[7][0]=Textbox_Selection(x(1),y(yLevel),"�����");
line[line.length]=Link(box[7][0],box[6][0]);
box[7][1]=Textbox_Selection(x(3),y(yLevel),"Ŀ������ȥ","r|+δ����");
line[line.length]=Link(box[7][1],box[6][0]);
//----------
box[8]=new Array();
yLevel+=2;
box[8][0]=Textbox_Option(x(1),y(yLevel),"����֦����8HIT");
line[line.length]=Link(box[8][0],box[7][0]);
//----------
box[9]=new Array();
yLevel+=3;
box[9][0]=Textbox_Condition(x(2),y(yLevel),"18�գ��ӿ�ѡ��˯���ĵط�");
line[line.length]=Link(box[9][0],box[8][0]);
line[line.length]=Link(box[9][0],box[7][1]);
//----------
box[10]=new Array();
yLevel+=3;
box[10][0]=Textbox_Selection(x(0.5),y(yLevel),"ȥ����˯");
line[line.length]=Link(box[10][0],Point(linx(1.5),liny(-1)));
box[10][1]=Textbox_Selection(x(3.5),y(yLevel),"���ǻؽ��Ұ�","r|+δ����");
line[line.length]=Link(box[10][1],Point(linx(1.5),liny(-1)));
line[line.length]=Link(Point(linx(2),liny(-1)),box[9][0]);
//----------
box[11]=new Array();
yLevel+=2;
box[11][0]=Textbox_Condition(x(3.5),y(yLevel),"19�գ�������У����ȥ��һ��");
line[line.length]=Link(box[11][0],box[10][1]);
//----------
box[12]=new Array();
yLevel+=3;
box[12][0]=Textbox_Selection(x(1.5),y(yLevel),"ȥ������");
line[line.length]=Link(box[12][0],box[11][0]);
box[12][1]=Textbox_Selection(x(3.5),y(yLevel),"ȥͼ���");
line[line.length]=Link(box[12][1],box[11][0]);
box[12][2]=Textbox_Selection(x(5.5),y(yLevel),"ȥ���Ż��","r|+δ����");
line[line.length]=Link(box[12][2],box[11][0]);
//----------
box[13]=new Array();
yLevel+=3;
box[13][0]=Textbox_Option(x(0.5),y(yLevel),"�м�������8HIT");
line[line.length]=Link(box[13][0],box[12][0]);
line[line.length]=Link(box[13][0],box[10][0]);
//----------
box[14]=new Array();
yLevel+=3;
box[14][0]=Textbox_Condition(x(2),y(yLevel),"15�գ�����������ͥԺ�е�Ů��");
line[line.length]=Link(Point(linx(0.5),liny(-1)),box[13][0]);
line[line.length]=Link(Point(linx(0.5),liny(-1)),Point(linx(3.5),liny(-1)),box[12][1]);
line[line.length]=Link(Point(linx(0.5),liny(-1)),Point(linx(3.5),liny(-1)),Point(linx(3.5),liny(-3)),box[12][2]);
line[line.length]=Link(box[14][0],Point(linx(2),liny(-1)));
//----------
box[15]=new Array();
yLevel+=3;
box[15][0]=Textbox_Selection(x(1),y(yLevel),"����");
line[line.length]=Link(box[15][0],box[14][0]);
box[15][1]=Textbox_Selection(x(3),y(yLevel),"������","r|+δ����");
line[line.length]=Link(box[15][1],box[14][0]);
//----------
box[16]=new Array();
yLevel+=2;
box[16][0]=Textbox_Option(x(1),y(yLevel),"�����8HIT");
line[line.length]=Link(box[16][0],box[15][0]);
//----------
box[17]=new Array();
yLevel+=3;
box[17][0]=Textbox_Condition(x(2),y(yLevel),"26�գ�ѡ��Լ��Է��ĵط�");
line[line.length]=Link(box[17][0],box[16][0]);
line[line.length]=Link(box[17][0],box[15][1]);
//----------
box[18]=new Array();
yLevel+=3;
box[18][0]=Textbox_Selection(x(1),y(yLevel),"��ʳ�ó�");
line[line.length]=Link(box[18][0],box[17][0]);
box[18][1]=Textbox_Selection(x(3),y(yLevel),"ȥ�����");
line[line.length]=Link(box[18][1],box[17][0]);
//----------
box[19]=new Array();
yLevel+=2;
box[19][0]=Textbox_Condition(x(1),y(yLevel),"��ɹ��Ҵ���");
line[line.length]=Link(box[19][0],box[18][0]);
//----------
box[20]=new Array();
yLevel+=3;
box[20][0]=Textbox_Selection(x(0),y(yLevel),"��");
line[line.length]=Link(box[20][0],box[19][0]);
box[20][1]=Textbox_Selection(x(2),y(yLevel),"��");
line[line.length]=Link(box[20][1],box[19][0]);
//----------
box[21]=new Array();
yLevel+=2;
box[21][0]=Textbox_Option(x(0),y(yLevel),"�Ҵ�����8HIT");
line[line.length]=Link(box[21][0],box[20][0]);

line[line.length]=Link(Point(linx(1),liny(3)),box[20][0]);
line[line.length]=Link(Point(linx(1),liny(3)),box[20][1]);
line[line.length]=Link(Point(linx(1),liny(3)),Point(linx(3),liny(3)),box[18][1]);
line[line.length]=Link(Point(linx(2),liny(3)),Point(linx(2),liny(3)))

hdft["footer"]=Footer(liny(4),30);