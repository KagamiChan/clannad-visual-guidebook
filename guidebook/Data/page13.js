// CVG HTML Data Page13 Done By Ligueston 2008.4.15
hdft["header"]=Header("public","����·��","Public Route","4��21�գ�һ��","April 21st~Part 1");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(3.5),y(yLevel),"4��21��","top");
//----------
box[1]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="�˴�{��߽���}��16�գ��ڷ�֧{�ź����´���������}ѡ��[��æ]��18�գ��ڷ�֧{������������źӵ�Լ��}ѡ��[���컹�Ǻ���ǰһ�����һ���]����δ���������֧��û��ѡ����Ӧѡ�����û�д���ǰһ��֧����������ڷ�ǰһ��֧ѡ����ȷ��û�д�����һ��֧����������ǡ�<br>{�����߽���}��16�գ��ڷ�֧{�ź����´���������}ѡ��[��æ]��18�գ��ڷ�֧{���Ե�̵ķ���}ѡ��[�ٿ�һ���]������ѡ����ȷ����������߽����������";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[1][0]=Textbox_Condition_C(x(3.5),y(yLevel),"��߻�����߽���","1",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"��߻�����߽���",0);
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Selection(x(2.5),y(yLevel),"��");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Selection(x(4.5),y(yLevel),"��");
line[line.length]=Link(box[2][1],box[1][0]);
//----------
box[3]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="";
CmtOption="-��ȥѧ��ʳ��";
CmtEvents="00100000";
CmtEvntIru="���21��ǰδ�˳����Ҳδ��ʹ侲���αŮ���¼����˴�ѡ���ȥѧ��ʳ�ã����Ȼ����������αŮ���¼�";
box[3][0]=Textbox_Selection_C(x(2.5),y(yLevel),"�ٵ�������","2",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"�ٵ�������",0);
line[line.length]=Link(box[3][0],box[2][0]);
box[3][1]=Textbox_Block(x(4.5),y(yLevel),"A");
line[line.length]=Link(box[3][1],box[2][1]);
box[3][1].addLink("p13_retA");
box[3][1].addClick(function(){gotopage(14,"p14_A")});
//----------
box[4]=new Array();
yLevel+=3;
box[4][0]=Textbox_Option(x(1.5),y(yLevel),"��ȥѧ��ʳ��","l|��|�|ѿ��|�м���|-�|-����");
line[line.length]=Link(box[4][0],box[3][0]);
box[4][1]=Textbox_Option(x(3.5),y(yLevel),"��������","r|-�|-����|�м���|��|�|ѿ��");
line[line.length]=Link(box[4][1],box[3][0]);
//----------
box[5]=new Array();
yLevel+=4;
box[5][0]=Textbox_Condition(x(3.5),y(yLevel),"18�գ����Ե�̵ķ���");
line[line.length]=Link(box[5][0],Point(linx(2.5),liny(-1)),box[4][0]);
line[line.length]=Link(box[5][0],Point(linx(2.5),liny(-1)),box[4][1]);
line[line.length]=Link(box[5][0],box[3][1]);
//----------
box[6]=new Array();
yLevel+=3;
box[6][0]=Textbox_Selection(x(2.5),y(yLevel),"�ٿ�һ���");
line[line.length]=Link(box[6][0],box[5][0]);
box[6][1]=Textbox_Selection(x(4.5),y(yLevel),"�뿪");
line[line.length]=Link(box[6][1],box[5][0]);
//----------
box[7]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="������·ǰ��������������·ǰ��������顣������21����30�յ�ʮ���ڣ���9���֡�ѡ���֧�ı仯������¼��ڲ��ķ�֧ѡ���йأ���9���������Ƿ��ܴ����Լ�����仯���ܹ�����·�е������Լ�ĳЩ��֧ѡ���Ӱ�죬��Щ��ط�֧�ķ��Ӵ�ʦͼ�궼������ʾ�����Ӵ�ʦ��ع�����μ�P48��P50��";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[7][0]=Textbox_Option_C(x(2.5),y(yLevel),"���Ӵ�ʦ","3",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"���Ӵ�ʦ / �����ٻ�ʹ",0);
box[7][0].addLink("p13_retKFMT1");
box[7][0].addClick(function(){gotopage(48,"p48_KFMT1")});
line[line.length]=Link(box[7][0],box[6][0]);
//----------
box[8]=new Array();
yLevel+=3;
box[8][0]=Textbox_Condition(x(3.5),y(yLevel),"���磬�ٵ�������");
line[line.length]=Link(box[8][0],box[7][0]);
line[line.length]=Link(box[8][0],box[6][1]);
//----------
box[9]=new Array();
yLevel+=3;
box[9][0]=Textbox_Selection(x(2),y(yLevel),"��������");
line[line.length]=Link(box[9][0],Point(linx(3),liny(-1)));
box[9][1]=Textbox_Selection(x(5),y(yLevel),"��ȥѧ��ʳ��","r|+δ����");
line[line.length]=Link(box[9][1],Point(linx(3),liny(-1)));
line[line.length]=Link(Point(linx(3.5),liny(-1)),box[8][0]);
//----------
box[10]=new Array();
yLevel+=2;
box[10][0]=Textbox_Selection(x(2),y(yLevel),"��ѧ����̸��");
line[line.length]=Link(box[10][0],box[9][0]);
//----------
box[11]=new Array();
yLevel+=3;
box[11][0]=Textbox_Option(x(1),y(yLevel),"���ùź�ȥһ��");
line[line.length]=Link(box[11][0],box[10][0]);
box[11][1]=Textbox_Option(x(3),y(yLevel),"������ȥ̸��");
line[line.length]=Link(box[11][1],box[10][0]);
//----------
box[12]=new Array();
yLevel+=2;
box[12][0]=Textbox_Selection(x(1),y(yLevel),"����ź�̸��");
line[line.length]=Link(box[12][0],box[11][0]);
box[12][1]=Textbox_Condition(x(5),y(yLevel),"���磬�������������ӣ���е��Ǵ�");
line[line.length]=Link(box[12][1],box[9][1]);
//----------
box[13]=new Array();
yLevel+=3;
box[13][0]=Textbox_Option(x(0),y(yLevel),"������ȥ����");
line[line.length]=Link(box[13][0],box[12][0]);
box[13][1]=Textbox_Option(x(2),y(yLevel),"������ȥ");
line[line.length]=Link(box[13][1],box[12][0]);
box[13][2]=Textbox_Selection(x(4),y(yLevel),"���к�");
line[line.length]=Link(box[13][2],box[12][1]);
box[13][3]=Textbox_Selection(x(6),y(yLevel),"������","r|+δ����");
line[line.length]=Link(box[13][3],box[12][1]);
//----------
box[14]=new Array();
yLevel+=2;
box[14][0]=Textbox_Selection(x(4),y(yLevel),"���Ǵ�����ͬ");
line[line.length]=Link(box[14][0],box[13][2]);
//----------
box[15]=new Array();
yLevel+=3;
box[15][0]=Textbox_Option(x(3),y(yLevel),"��ȷ����","l|�Ǵ�");
line[line.length]=Link(box[15][0],box[14][0]);
box[15][1]=Textbox_Option(x(5),y(yLevel),"��������","r|�Ǵ�");
line[line.length]=Link(box[15][1],box[14][0]);
//----------
box[16]=new Array();
yLevel+=2;
box[16][0]=Textbox_Selection(x(3),y(yLevel),"�緹�Ľ��");
line[line.length]=Link(box[16][0],box[15][0]);
//----------
box[17]=new Array();
yLevel+=3;
box[17][0]=Textbox_Option(x(3),y(yLevel),"����");
line[line.length]=Link(box[17][0],box[16][0]);
box[17][1]=Textbox_Option(x(5),y(yLevel),"ӲҪ��");
line[line.length]=Link(box[17][1],box[16][0]);
//----------
box[18]=new Array();
yLevel+=4;
box[18][0]=Textbox_Block(x(5),y(yLevel),"B");
box[18][0].addLink("p13_retB");
box[18][0].addClick(function(){gotopage(14,"p14_B")});
line[line.length]=Link(box[18][0],Point(linx(4),liny(-1)),box[17][0]);
line[line.length]=Link(box[18][0],Point(linx(4),liny(-1)),box[17][1]);
line[line.length]=Link(box[18][0],Point(linx(6),liny(-6)),box[15][1]);
line[line.length]=Link(box[18][0],box[13][3]);
//----------
box[19]=new Array();
yLevel+=3;
box[19][0]=Textbox_Selection(x(3.5),y(yLevel),"�������磨�ģ�");
line[line.length]=Link(box[19][0],Point(linx(3.5),liny(-1)));
line[line.length]=Link(Point(linx(2),liny(-1)),Point(linx(5),liny(-1)),box[18][0]);
line[line.length]=Link(Point(linx(2),liny(-1)),Point(linx(2),liny(-13)),Point(linx(1),liny(-14)),box[13][0]);
line[line.length]=Link(Point(linx(2),liny(-1)),Point(linx(2),liny(-13)),Point(linx(1),liny(-14)),box[13][1]);
line[line.length]=Link(Point(linx(2),liny(-1)),Point(linx(2),liny(-13)),box[11][1]);
//----------
box[20]=new Array();
yLevel+=2;
box[20][0]=Textbox_Date(x(3.5),y(yLevel),"4��22��","bottom");
line[line.length]=Link(box[20][0],box[19][0]);
box[20][0].addTitle("���ת��15ҳ");
box[20][0].addClick(function(){gotopage(15)});

hdft["footer"]=Footer(liny(1),13);