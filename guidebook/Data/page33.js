// CVG HTML Data Page33 Done By Shakugan_No_Kaluote 2008.4.18
hdft["header"]=Header("yukine","���� �м���","Yukine Miyazawa","�����ֿ��¼�","Gym Warehouse Event");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Option(x(0),y(yLevel),"�����ֿ��¼�");
box[0][0].addLink("p33_GYM");
box[0][0].addClick(function(){gotopage(31,"p31_retGYM")});
box[0][1]=Textbox_Selection(x(3.5),y(yLevel),"��Ӳ�ҵĿ���");
line[line.length]=Link(Point(linx(3.5),liny(0)-LINEBASEHEIGHT/2),Point(linx(3.5),liny(0)-LINEBASEHEIGHT/2));
//----------
box[1]=new Array();
yLevel+=3;
box[1][0]=Textbox_Option(x(3.5),y(yLevel),"���Կ�");
line[line.length]=Link(box[1][0],box[0][1]);
box[1][1]=Textbox_Option(x(5.5),y(yLevel),"����ԭ");
line[line.length]=Link(box[1][1],box[0][1]);
//----------
box[2]=new Array();
yLevel+=2;
box[2][0]=Textbox_Condition(x(3.5),y(yLevel),"15�գ�����������ͥԺ�е�Ů��");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Condition(x(5.5),y(yLevel),"��ԭ�ֿ���� A");
line[line.length]=Link(box[2][1],box[1][1]);
//----------
box[3]=new Array();
yLevel+=3;
box[3][0]=Textbox_Selection(x(2.5),y(yLevel),"����");
line[line.length]=Link(box[3][0],box[2][0]);
box[3][1]=Textbox_Selection(x(4.5),y(yLevel),"������","r|+δ����");
line[line.length]=Link(box[3][1],box[2][0]);
//----------
box[4]=new Array();
yLevel+=2;
box[4][0]=Textbox_Selection(x(2.5),y(yLevel),"������ѡ��һ��");
line[line.length]=Link(box[4][0],box[3][0]);
//----------
box[5]=new Array();
yLevel+=3;
box[5][0]=Textbox_Option(x(1.5),y(yLevel),"�źӡ�");
line[line.length]=Link(box[5][0],box[4][0]);
box[5][1]=Textbox_Option(x(3.5),y(yLevel),"���ǹźӡ�");
line[line.length]=Link(box[5][1],box[4][0]);
//----------
box[6]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="{23�գ�������Ϸ�������}����23���м����������д���{������Ϸ�������}�ľ��顣��������{23�գ�������Ϸ����������}ͬ���������˼��<br>�˴��������16�յķ�֧{�ź����´���������}��ѡ��[����]����֮����Ҳ��ʶ�˹źӵļ��ˣ�����ô��ʹ��23��������Ϸ��û�д�������侵ľ��飬ͬ�������ǵ�������";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[6][0]=Textbox_Condition_C(x(1.5),y(yLevel),"23�գ�������Ϸ�������","1",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"23�գ�������Ϸ�������",0);
line[line.length]=Link(box[6][0],box[5][0]);
//----------
box[7]=new Array();
yLevel+=3;
box[7][0]=Textbox_Selection(x(0.5),y(yLevel),"��");
line[line.length]=Link(box[7][0],box[6][0]);
box[7][1]=Textbox_Selection(x(2.5),y(yLevel),"��");
line[line.length]=Link(box[7][1],box[6][0]);
//----------
box[8]=new Array();
yLevel+=2;
box[8][0]=Textbox_Condition(x(0.5),y(yLevel),"侲ֿ����");
line[line.length]=Link(box[8][0],box[7][0]);
box[8][1]=Textbox_Condition(x(2.5),y(yLevel),"�����ֿ����");
line[line.length]=Link(box[8][1],box[7][1]);
box[8][2]=Textbox_Condition(x(4.5),y(yLevel),"18�գ����Ե�̵ķ���");
line[line.length]=Link(box[8][2],Point(linx(4.5),liny(-4)),box[5][1]);
line[line.length]=Link(box[8][2],box[3][1]);
//----------
box[9]=new Array();
yLevel+=3;
box[9][0]=Textbox_Selection(x(2.5),y(yLevel),"�뿪","l|+δ����");
line[line.length]=Link(box[9][0],box[8][2]);
box[9][1]=Textbox_Selection(x(4.5),y(yLevel),"�ٿ�һ���");
line[line.length]=Link(box[9][1],box[8][2]);
//----------
box[10]=new Array();
yLevel+=2;
box[10][0]=Textbox_Selection(x(4.5),y(yLevel),"������ѡ������");
line[line.length]=Link(box[10][0],box[9][1]);
//----------
box[11]=new Array();
yLevel+=3;
box[11][0]=Textbox_Option(x(3.5),y(yLevel),"���ǡ�");
line[line.length]=Link(box[11][0],box[10][0]);
box[11][1]=Textbox_Option(x(5.5),y(yLevel),"���ӡ�");
line[line.length]=Link(box[11][1],box[10][0]);
//----------
box[12]=new Array();
yLevel+=3;
box[12][0]=Textbox_Condition(x(2.5),y(yLevel),"18�գ��������ѵ��Ǵ�");
line[line.length]=Link(box[12][0],box[11][0]);
line[line.length]=Link(box[12][0],box[9][0]);
//----------
box[13]=new Array();
yLevel+=3;
box[13][0]=Textbox_Selection(x(1.5),y(yLevel),"˦��������","l|+δ����");
line[line.length]=Link(box[13][0],box[12][0]);
box[13][1]=Textbox_Selection(x(3.5),y(yLevel),"��æ");
line[line.length]=Link(box[13][1],box[12][0]);
//----------
box[14]=new Array();
yLevel+=2;
box[14][0]=Textbox_Selection(x(3.5),y(yLevel),"������ѡ������");
line[line.length]=Link(box[14][0],box[13][1]);
//----------
box[15]=new Array();
yLevel+=3;
box[15][0]=Textbox_Option(x(2.5),y(yLevel),"���ǡ�");
line[line.length]=Link(box[15][0],box[14][0]);
box[15][1]=Textbox_Option(x(4.5),y(yLevel),"�Ǵ���");
line[line.length]=Link(box[15][1],box[14][0]);
//----------
box[16]=new Array();
yLevel+=2;
box[16][0]=Textbox_Condition(x(4.5),y(yLevel),"23�գ�������Ϸ�������Ǵ�");
line[line.length]=Link(box[16][0],box[15][1]);
//----------
box[17]=new Array();
yLevel+=3;
box[17][0]=Textbox_Selection(x(2.5),y(yLevel),"��");
line[line.length]=Link(box[17][0],box[16][0]);
box[17][1]=Textbox_Selection(x(4.5),y(yLevel),"��");
line[line.length]=Link(box[17][1],box[16][0]);
//----------
box[18]=new Array();
yLevel+=2;
box[18][0]=Textbox_Condition(x(2.5),y(yLevel),"�Ǵ��ֿ����");
line[line.length]=Link(box[18][0],box[17][0]);
//----------
box[19]=new Array();
yLevel+=2;
box[19][0]=Textbox_Selection(x(1.5),y(yLevel),"������ѡ���ģ�");
line[line.length]=Link(box[19][0],Point(linx(1.5),liny(-6)),box[15][0]);
line[line.length]=Link(box[19][0],box[13][0]);
//----------
box[20]=new Array();
yLevel+=3;
box[20][0]=Textbox_Option(x(1.5),y(yLevel),"�ӡ�");
line[line.length]=Link(box[20][0],box[19][0]);
box[20][1]=Textbox_Option(x(3.5),y(yLevel),"���ǡ�");
line[line.length]=Link(box[20][1],box[19][0]);
//----------
box[21]=new Array();
yLevel+=2;
box[21][0]=Textbox_Condition(x(1.5),y(yLevel),"23�գ�������Ϸ�������ӡ��");
line[line.length]=Link(box[21][0],box[20][0]);
//----------
box[22]=new Array();
yLevel+=3;
box[22][0]=Textbox_Selection(x(1.5),y(yLevel),"��");
line[line.length]=Link(box[22][0],box[21][0]);
box[22][1]=Textbox_Selection(x(3.5),y(yLevel),"��");
line[line.length]=Link(box[22][1],box[21][0]);
//----------
box[23]=new Array();
yLevel+=2;
box[23][0]=Textbox_Condition(x(1.5),y(yLevel),"23�գ���ץ��Ҳ������ȥ̸��");
line[line.length]=Link(box[23][0],box[22][0]);
//----------
box[24]=new Array();
yLevel+=1;
box[24][0]=Textbox_Condition(x(5.5),y(yLevel),"��ԭ�ֿ���� B");
line[line.length]=Link(box[24][0],box[22][1]);
line[line.length]=Link(box[24][0],Point(linx(5.5),liny(-5)),box[20][1]);
line[line.length]=Link(box[24][0],Point(linx(5.5),liny(-12)),box[17][1]);
line[line.length]=Link(box[24][0],box[11][1]);
//----------
box[25]=new Array();
yLevel+=2;
box[25][0]=Textbox_Selection(x(1.5),y(yLevel),"����","l|+δ����");
line[line.length]=Link(box[25][0],box[23][0]);
box[25][1]=Textbox_Selection(x(3.5),y(yLevel),"����ȥ");
line[line.length]=Link(box[25][1],box[23][0]);
//----------
box[26]=new Array();
yLevel+=2;
box[26][0]=Textbox_Condition(x(1.5),y(yLevel),"�Ӳֿ���� A����ͨ�棩");
line[line.length]=Link(box[26][0],box[25][0]);
box[26][1]=Textbox_Condition(x(3.5),y(yLevel),"�Ӳֿ���� B������棩");
line[line.length]=Link(box[26][1],box[25][1]);

hdft["footer"]=Footer(liny(1),33);