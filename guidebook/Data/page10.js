// CVG HTML Data Page10 Done By Ligueston 2008.4.10
hdft["header"]=Header("public","����·��","Public Route","4��19�գ�һ��","April 19th~Part 1");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(3),y(yLevel),"4��19��","top");
//----------
box[1]=new Array();
yLevel+=2;
box[1][0]=Textbox_Condition(x(3),y(yLevel),"18�գ��������ѵ��Ǵ�");
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Selection(x(2),y(yLevel),"��æ");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Selection(x(4),y(yLevel),"˦��������","r|+δ����");
line[line.length]=Link(box[2][1],box[1][0]);
//----------
box[3]=new Array();
yLevel+=2;
box[3][0]=Textbox_Selection(x(2),y(yLevel),"��ԭ׼����в�Ǵ�");
line[line.length]=Link(box[3][0],box[2][0]);
//----------
box[4]=new Array();
yLevel+=3;
box[4][0]=Textbox_Option(x(1),y(yLevel),"Ȱ������","l|�Ǵ�");
line[line.length]=Link(box[4][0],box[3][0]);
box[4][1]=Textbox_Option(x(3),y(yLevel),"������","r|�Ǵ�");
line[line.length]=Link(box[4][1],box[3][0]);
//----------
box[5]=new Array();
yLevel+=4;
CmtSummery="";
CmtSelect="�˴�{��߽���}��16�գ��ڷ�֧{�ź����´���������}ѡ��[��æ]��18�գ��ڷ�֧{������������źӵ�Լ��}ѡ��[���컹�Ǻ���ǰһ�����һ���]����δ���������֧��û��ѡ����Ӧѡ�����û�д���ǰһ��֧����������ڷ�ǰһ��֧ѡ����ȷ��û�д�����һ��֧����������ǡ�<br>{�����߽���}��16�գ��ڷ�֧{�ź����´���������}ѡ��[��æ]��18�գ��ڷ�֧{���Ե�̵ķ���}ѡ��[�ٿ�һ���]������ѡ����ȷ����������߽����������";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[5][0]=Textbox_Condition_C(x(3),y(yLevel),"��߻��߷����߽���","1",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"��߻��߷����߽���",0);
line[line.length]=Link(box[5][0],Point(linx(2),liny(-1)),box[4][0]);
line[line.length]=Link(box[5][0],Point(linx(2),liny(-1)),box[4][1]);
line[line.length]=Link(box[5][0],box[2][1]);
//----------
box[6]=new Array();
yLevel+=3;
box[6][0]=Textbox_Selection(x(1),y(yLevel),"��");
line[line.length]=Link(box[6][0],box[5][0]);
box[6][1]=Textbox_Selection(x(5),y(yLevel),"��");
line[line.length]=Link(box[6][1],box[5][0]);
//----------
box[7]=new Array();
yLevel+=2;
box[7][0]=Textbox_Selection(x(1),y(yLevel),"�����ڲٳ����");
line[line.length]=Link(box[7][0],box[6][0]);
CmtSummery="";
CmtSelect="";
CmtCaution="";
CmtOption="-ȥ��У��";
CmtEvents="10000000";
CmtEvntIru="�м�������64HIT�����18���ڷ�֧�ӿ�ѡ��˯���ĵط�ѡ������ȥ˯����˴���ѡ��û��Ӱ��";
box[7][1]=Textbox_Selection_C(x(5),y(yLevel),"������ķ�ѧ��","2",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"������ķ�ѧ��",0);
line[line.length]=Link(box[7][1],box[6][1]);
//----------
box[8]=new Array();
yLevel+=3;
box[8][0]=Textbox_Option(x(0),y(yLevel),"����ȥ");
line[line.length]=Link(box[8][0],box[7][0]);
box[8][1]=Textbox_Option(x(2),y(yLevel),"ȥ�������");
line[line.length]=Link(box[8][1],box[7][0]);
box[8][2]=Textbox_Option(x(4),y(yLevel),"ȥ��У��");
line[line.length]=Link(box[8][2],box[7][1]);
box[8][3]=Textbox_Option(x(6),y(yLevel),"ֱ�ӻؼ�");
line[line.length]=Link(box[8][3],box[7][1]);
//----------
box[9]=new Array();
yLevel+=2;
box[9][0]=Textbox_Block(x(4),y(yLevel),"A");
line[line.length]=Link(box[9][0],box[8][2]);
box[9][0].addLink("p10_retA");
box[9][0].addClick(function(){gotopage(11,"p11_A")});
//----------
box[10]=new Array();
yLevel+=4;
CmtSummery="";
CmtSelect="{18�գ�������һ����緹}����18�գ��ڷ�֧{������������źӵ�Լ��}ѡ��[�����������һ���]��������Ȼû�г��������֧�����Ƿ����˺�����һ����緹�ľ������ݣ�18��価�������δ���룬��16���ڷ�֧{�ź����´���������}ѡ��[����һ������]����δ���������֧�Ļ����ڷ�֧{Ѱ�Ҵ�ԭ}��{��Ҳ���ĵ�˼��}�ֱ�ѡ��[ͼ���]��[���ܾ�����������]���ͻᷢ��������һ����緹�ľ������ݣ���������������������������ڷ�";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[10][0]=Textbox_Condition_C(x(3),y(yLevel),"18�գ�������һ����緹","3",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"18�գ�������һ����緹",0);
line[line.length]=Link(box[10][0],Point(linx(1),liny(-3)),box[8][0]);
line[line.length]=Link(box[10][0],Point(linx(1),liny(-3)),box[8][1]);
line[line.length]=Link(box[10][0],Point(linx(5),liny(-1)),box[9][0]);
line[line.length]=Link(box[10][0],Point(linx(5),liny(-1)),box[8][3]);
//----------
box[11]=new Array();
yLevel+=3;
box[11][0]=Textbox_Selection(x(2),y(yLevel),"��");
line[line.length]=Link(box[11][0],box[10][0]);
box[11][1]=Textbox_Selection(x(4),y(yLevel),"��");
line[line.length]=Link(box[11][1],box[10][0]);
//----------
box[12]=new Array();
yLevel+=3;
box[12][0]=Textbox_Selection(x(1),y(yLevel),"���������Ȿ��û��");
line[line.length]=Link(box[12][0],box[11][0]);
box[12][1]=Textbox_Selection(x(3),y(yLevel),"���ǲ�Ҫ�ܺ���");
line[line.length]=Link(box[12][1],box[11][0]);
//----------
box[13]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="";
CmtOption="-����������������";
CmtEvents="00000100";
CmtEvntIru="�����øж�����1��";
box[13][0]=Textbox_Selection_C(x(1),y(yLevel),"���������������","4",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"���������������",0);
line[line.length]=Link(box[13][0],box[12][0]);
//----------
box[14]=new Array();
yLevel+=3;
box[14][0]=Textbox_Option(x(0),y(yLevel),"����������������");
line[line.length]=Link(box[14][0],box[13][0]);
box[14][1]=Textbox_Option(x(2),y(yLevel),"������");
line[line.length]=Link(box[14][1],box[13][0]);
//----------
box[15]=new Array();
yLevel+=4;
CmtSummery="";
CmtSelect="";
CmtCaution="";
CmtOption="-��������ؼ�";
CmtEvents="00000100";
CmtEvntIru="�����øж�����1��";
box[15][0]=Textbox_Selection_C(x(2),y(yLevel),"�������뿪���","5",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"�������뿪���",0);
line[line.length]=Link(box[15][0],Point(linx(1),liny(-1)),box[14][0]);
line[line.length]=Link(box[15][0],Point(linx(1),liny(-1)),box[14][1]);
line[line.length]=Link(box[15][0],box[12][1]);
//----------
box[16]=new Array();
yLevel+=3;
box[16][0]=Textbox_Option(x(1),y(yLevel),"��������ؼ�");
line[line.length]=Link(box[16][0],box[15][0]);
box[16][1]=Textbox_Option(x(3),y(yLevel),"����������");
line[line.length]=Link(box[16][1],box[15][0]);
//----------
box[17]=new Array();
yLevel+=4;
box[17][0]=Textbox_Option(x(3),y(yLevel),"�������磨����");
line[line.length]=Link(box[17][0],Point(linx(2),liny(-1)),box[16][0]);
line[line.length]=Link(box[17][0],Point(linx(2),liny(-1)),box[16][1]);
line[line.length]=Link(box[17][0],box[11][1]);
//----------
box[18]=new Array();
yLevel+=2;
box[18][0]=Textbox_Date(x(3),y(yLevel),"4��20��","bottom");
line[line.length]=Link(box[18][0],box[17][0]);
box[18][0].addTitle("���ת����12ҳ");
box[18][0].addClick(function(){gotopage(12)});

hdft["footer"]=Footer(liny(1),10);