// CVG HTML Data Page52 Done By Shakugan_No_Kaluote 2008.4.20
hdft["header"]=Header("nagisa","�ź� �/�Ҵ� ����","Nagisa Furukawa/Toshio Yukimura","4��28��","April 28th");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(3.5),y(yLevel),"4��28��","top");
//----------
box[1]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="�ź����·ǰ��������顣������28�պ�30�գ��ֳ������֣�28�յ����ݼ�ѡ���֧���ֵı仯�빫����·����ߵ������ĳЩ��֧ѡ���йأ�30�յ�����û�з�֧��������Ȼ��֮ǰĳЩ��֧ѡ���Ӱ�죬��Щ��ط�֧��3��3������ͼ�궼������ʾ��3��3�������еı���Ӱ��֮����ߵ����򣨲ο��ź����·30��ע��1���Լ�AFTER STORY�е�һЩ���飬��ع�����μ�P56��P58��";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[1][0]=Textbox_Option_C(x(3.5),y(yLevel),"3��3��������һ��","1",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"3��3������",0);
box[1][0].addLink("p52_ret33BB");
box[1][0].addClick(function(){gotopage(56,"p56_33BB")});
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=2;
box[2][0]=Textbox_Condition(x(3.5),y(yLevel),"26�գ�ǰ��̽�׵�ѿ��");
line[line.length]=Link(box[2][0],box[1][0]);
//----------
box[3]=new Array();
yLevel+=3;
box[3][0]=Textbox_Selection(x(2),y(yLevel),"�õ�");
line[line.length]=Link(box[3][0],Point(linx(3),liny(-1)));
box[3][1]=Textbox_Selection(x(5),y(yLevel),"�Լ�һ����ȥ��","r|+δ����");
line[line.length]=Link(box[3][1],Point(linx(3),liny(-1)));
line[line.length]=Link(Point(linx(3.5),liny(-1)),box[2][0]);
//----------
box[4]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="{���磬û���ҵ��������}����3��3��������һ����û�����뵽�ӡ�飡��Ǵ������ӡ�����֦���м����е��κ�һλ��Ϊ������顣3��3��������ع�����μ�P56��P58��";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[4][0]=Textbox_Condition_C(x(2),y(yLevel),"���磬û���ҵ��������","2",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"���磬û���ҵ��������",0);
line[line.length]=Link(box[4][0],box[3][0]);
//----------
box[5]=new Array();
yLevel+=3;
box[5][0]=Textbox_Selection(x(1),y(yLevel),"��");
line[line.length]=Link(box[5][0],box[4][0]);
box[5][1]=Textbox_Selection(x(3),y(yLevel),"��");
line[line.length]=Link(box[5][1],box[4][0]);
//----------
box[6]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="";
CmtOption="-������ϰ";
CmtEvents="00100000";
CmtEvntIru="������ϰ";
box[6][0]=Textbox_Selection_C(x(1),y(yLevel),"����ļƻ�����","3",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"����ļƻ�����",0);
line[line.length]=Link(box[6][0],box[5][0]);
//----------
box[7]=new Array();
yLevel+=3;
box[7][0]=Textbox_Option(x(0),y(yLevel),"������ϰ");
line[line.length]=Link(box[7][0],box[6][0]);
box[7][1]=Textbox_Option(x(2),y(yLevel),"������ѿ����");
line[line.length]=Link(box[7][1],box[6][0]);
//----------
box[8]=new Array();
yLevel+=3;
box[8][0]=Textbox_Condition(x(3),y(yLevel),"27�գ���æ�������");
line[line.length]=Link(box[8][0],box[7][1]);
line[line.length]=Link(box[8][0],box[5][1]);
//----------
box[9]=new Array();
yLevel+=3;
box[9][0]=Textbox_Selection(x(1),y(yLevel),"����");
line[line.length]=Link(box[9][0],box[8][0]);
box[9][1]=Textbox_Selection(x(3),y(yLevel),"����");
line[line.length]=Link(box[9][1],box[8][0]);
//----------
box[10]=new Array();
yLevel+=2;
box[10][0]=Textbox_Selection(x(3),y(yLevel),"ѿ��Ī��������");
line[line.length]=Link(box[10][0],box[9][1]);
//----------
box[11]=new Array();
yLevel+=3;
box[11][0]=Textbox_Option(x(1),y(yLevel),"�����");
line[line.length]=Link(box[11][0],box[10][0]);
box[11][1]=Textbox_Option(x(3),y(yLevel),"��ֹ��");
line[line.length]=Link(box[11][1],box[10][0]);
box[11][2]=Textbox_Condition(x(5),y(yLevel),"���磬û���ҵ��������");
line[line.length]=Link(box[11][2],box[3][1]);
//----------
box[12]=new Array();
yLevel+=3;
box[12][0]=Textbox_Selection(x(4),y(yLevel),"��");
line[line.length]=Link(box[12][0],box[11][2]);
box[12][1]=Textbox_Selection(x(6),y(yLevel),"��");
line[line.length]=Link(box[12][1],box[11][2]);
//----------
box[13]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="";
CmtOption="-��Բ�";
CmtEvents="00000001";
CmtEvntIru="���Ӳ����ҵ���񣨴�Ϊ���Ӳ����ҵ�������һ��;����";
box[13][0]=Textbox_Selection_C(x(4),y(yLevel),"�����ϰ���뷨","4",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"�����ϰ���뷨",0);
line[line.length]=Link(box[13][0],box[12][0]);
//----------
box[14]=new Array();
yLevel+=3;
box[14][0]=Textbox_Option(x(3),y(yLevel),"��Բ�");
line[line.length]=Link(box[14][0],box[13][0]);
box[14][1]=Textbox_Option(x(5),y(yLevel),"��ϰ");
line[line.length]=Link(box[14][1],box[13][0]);
//----------
box[15]=new Array();
yLevel+=5;
box[15][0]=Textbox_Date(x(3.5),y(yLevel),"4��29��","bottom");
box[15][0].addTitle("���ת��53ҳ");
box[15][0].addClick(function(){gotopage(53)});
line[line.length]=Link(box[15][0],Point(linx(3.5),liny(-1)))
line[line.length]=Link(Point(linx(5),liny(-1)),Point(linx(4),liny(-2)),box[14][0]);
line[line.length]=Link(Point(linx(5),liny(-1)),Point(linx(4),liny(-2)),box[14][1]);
line[line.length]=Link(Point(linx(5),liny(-1)),box[12][1]);
line[line.length]=Link(Point(linx(5),liny(-1)),Point(linx(2),liny(-1)),Point(linx(2),liny(-10)),box[11][0]);
line[line.length]=Link(Point(linx(5),liny(-1)),Point(linx(2),liny(-1)),Point(linx(2),liny(-10)),box[11][1]);
line[line.length]=Link(Point(linx(5),liny(-1)),Point(linx(2),liny(-1)),Point(linx(2),liny(-9)),Point(linx(0),liny(-15)),box[9][0]);
line[line.length]=Link(Point(linx(5),liny(-1)),Point(linx(2),liny(-1)),Point(linx(2),liny(-9)),box[7][0]);

hdft["footer"]=Footer(liny(2),52);