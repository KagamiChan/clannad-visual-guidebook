// CVG HTML Data Page40 Done By Ligueston 2008.4.17
hdft["header"]=Header("kotomi","һ֮�� ����","Kotomi Ichinose","4��20�ա�4��23��","April 20th~April 23rd");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(3),y(yLevel),"4��20��","top");
//----------
box[1]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="";
CmtOption="-����";
CmtEvents="00000100";
CmtEvntIru="�����øж�����1��";
box[1][0]=Textbox_Selection_C(x(3),y(yLevel),"���������","1",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"���������",0);
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Option(x(2),y(yLevel),"����");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Option(x(4),y(yLevel),"����");
line[line.length]=Link(box[2][1],box[1][0]);
//----------
box[3]=new Array();
yLevel+=3;
box[3][0]=Textbox_Date(x(3),y(yLevel),"4��21��","bottom");
line[line.length]=Link(box[3][0],box[2][0]);
line[line.length]=Link(box[3][0],box[2][1]);
//----------
box[4]=new Array();
yLevel+=5;
box[4][0]=Textbox_Date(x(3.5),y(yLevel),"4��21��","top");
//----------
box[5]=new Array();
yLevel+=2;
box[5][0]=Textbox_Selection(x(3.5),y(yLevel),"�ѵ��������Ҳ������������");
line[line.length]=Link(box[5][0],box[4][0]);
//----------
box[6]=new Array();
yLevel+=3;
box[6][0]=Textbox_Option(x(2),y(yLevel),"�ٵ���ȥ��");
line[line.length]=Link(box[6][0],Point(linx(3),liny(-1)));
box[6][1]=Textbox_Option(x(5),y(yLevel),"������������ѧ");
line[line.length]=Link(box[6][1],Point(linx(3),liny(-1)));
line[line.length]=Link(Point(linx(3.5),liny(-1)),box[5][0]);
//----------
box[7]=new Array();
yLevel+=2;
box[7][0]=Textbox_Selection(x(2),y(yLevel),"ͨѧ·�ϣ������������");
line[line.length]=Link(box[7][0],box[6][0]);
//----------
box[8]=new Array();
yLevel+=3;
box[8][0]=Textbox_Option(x(0),y(yLevel),"������");
line[line.length]=Link(box[8][0],box[7][0]);
box[8][1]=Textbox_Option(x(2),y(yLevel),"վ�ȵ�����");
line[line.length]=Link(box[8][1],box[7][0]);
box[8][2]=Textbox_Option(x(4),y(yLevel),"������");
line[line.length]=Link(box[8][2],box[7][0]);
//----------
box[9]=new Array();
yLevel+=2;
box[9][0]=Textbox_Selection(x(0),y(yLevel),"�·��ֳ���ĳ·�˳�Ϊ�ܺ���");
line[line.length]=Link(box[9][0],box[8][0]);
//----------
box[10]=new Array();
yLevel+=3;
box[10][0]=Textbox_Option(x(0),y(yLevel),"�뿪����");
line[line.length]=Link(box[10][0],box[9][0]);
box[10][1]=Textbox_Option(x(2),y(yLevel),"ҡһҡ��");
line[line.length]=Link(box[10][1],box[9][0]);
//----------
box[11]=new Array();
yLevel+=3;
box[11][0]=Textbox_Selection(x(0),y(yLevel),"�ܺ��������ļ���");
line[line.length]=Link(box[11][0],box[10][0]);
line[line.length]=Link(box[11][0],box[10][1]);
box[11][1]=Textbox_Condition(x(5),y(yLevel),"19�գ���ԭ׼����в�Ǵ�");
line[line.length]=Link(box[11][1],box[6][1]);
//----------
box[12]=new Array();
yLevel+=3;
box[12][0]=Textbox_Option(x(0),y(yLevel),"�����ַ���͸���");
line[line.length]=Link(box[12][0],box[11][0]);
box[12][1]=Textbox_Option(x(2),y(yLevel),"˺���ӵ�");
line[line.length]=Link(box[12][1],box[11][0]);
box[12][2]=Textbox_Selection(x(4),y(yLevel),"Ȱ������");
line[line.length]=Link(box[12][2],box[11][1]);
box[12][3]=Textbox_Selection(x(6),y(yLevel),"��ȥ����","r|+δ����");
line[line.length]=Link(box[12][3],box[11][1]);
//----------
box[13]=new Array();
yLevel+=2;
box[13][0]=Textbox_Selection(x(4),y(yLevel),"�������������ӣ���е��Ǵ�");
line[line.length]=Link(box[13][0],box[12][2]);
//----------
box[14]=new Array();
yLevel+=3;
box[14][0]=Textbox_Option(x(3),y(yLevel),"���к�");
line[line.length]=Link(box[14][0],box[13][0]);
box[14][1]=Textbox_Option(x(5),y(yLevel),"������");
line[line.length]=Link(box[14][1],box[13][0]);

line[line.length]=Link(Point(linx(2),liny(4)),Point(linx(2),liny(-1)),Point(linx(1),liny(-2)),box[12][0]);
line[line.length]=Link(Point(linx(2),liny(4)),Point(linx(2),liny(-1)),Point(linx(1),liny(-2)),box[12][1]);
line[line.length]=Link(Point(linx(2),liny(4)),Point(linx(2),liny(-1)),Point(linx(3),liny(-13)),box[8][1]);
line[line.length]=Link(Point(linx(2),liny(4)),Point(linx(2),liny(-1)),Point(linx(3),liny(-13)),box[8][2]);

line[line.length]=Link(Point(linx(2),liny(4)),Point(linx(5),liny(4)),Point(linx(4),liny(3)),box[14][0]);
line[line.length]=Link(Point(linx(2),liny(4)),Point(linx(5),liny(4)),Point(linx(4),liny(3)),box[14][1]);
line[line.length]=Link(Point(linx(2),liny(4)),Point(linx(5),liny(4)),box[12][3]);
//----------
box[15]=new Array();
yLevel+=5;
CmtSummery="";
CmtSelect="";
CmtCaution="";
CmtOption="-���Զ�����һ��";
CmtEvents="00000100";
CmtEvntIru="�����øж�����1��";
box[15][0]=Textbox_Selection_C(x(3.5),y(yLevel),"���������","1",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"���������",0);
line[line.length]=Link(box[15][0],Point(linx(3.5),liny(-1)));
//----------
box[16]=new Array();
yLevel+=3;
box[16][0]=Textbox_Option(x(2.5),y(yLevel),"�ش�˵�����ǡ�");
line[line.length]=Link(box[16][0],box[15][0]);
box[16][1]=Textbox_Option(x(4.5),y(yLevel),"���Զ�����һ��");
line[line.length]=Link(box[16][1],box[15][0]);
//----------
box[17]=new Array();
yLevel+=3;
box[17][0]=Textbox_Date(x(3.5),y(yLevel),"4��23��","bottom");
line[line.length]=Link(box[17][0],box[16][0]);
line[line.length]=Link(box[17][0],box[16][1]);
//----------
box[18]=new Array();
yLevel+=5;
box[18][0]=Textbox_Date(x(3),y(yLevel),"4��23��","top");
//----------
box[19]=new Array();
yLevel+=2;
box[19][0]=Textbox_Selection(x(3),y(yLevel),"ѧУ�Ĺ㲥");
line[line.length]=Link(box[19][0],box[18][0]);
//----------
box[20]=new Array();
yLevel+=3;
box[20][0]=Textbox_Option(x(2),y(yLevel),"ȥ�칫�ҿ���");
line[line.length]=Link(box[20][0],box[19][0]);
box[20][1]=Textbox_Option(x(4),y(yLevel),"�ٵ�һ���");
line[line.length]=Link(box[20][1],box[19][0]);
//----------
box[21]=new Array();
yLevel+=3;
box[21][0]=Textbox_Date(x(3),y(yLevel),"4��25��","bottom");
line[line.length]=Link(box[21][0],box[20][0]);
line[line.length]=Link(box[21][0],box[20][1]);
box[21][0].addTitle("���ת����41ҳ");
box[21][0].addClick(function(){gotopage(41)});

hdft["footer"]=Footer(liny(2),40);