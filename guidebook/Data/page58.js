// CVG HTML Data Page58 Done By Ligueston 2008.4.19
hdft["header"]=Header("nagisa","�ź� �/�Ҵ� ����","Nagisa Furukawa / Toshio Yukimura","3��3������(��)","3 on 3 Basketball Match - Part3");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Block(x(0),y(yLevel),"D");
box[0][0].addLink("p58_D");
box[0][0].addClick(function(){gotopage(56,"p56_retD")});
box[0][1]=Textbox_Condition(x(3.5),y(yLevel),"�Ѿ�������У��������");
line[line.length]=Link(Point(linx(3.5),liny(0)-LINEBASEHEIGHT/2),Point(linx(3.5),liny(0)-LINEBASEHEIGHT/2));
board[board.length]=Board(liny(0),liny(23));
//----------
box[1]=new Array();
yLevel+=3;
box[1][0]=Textbox_Selection(x(2),y(yLevel),"��");
line[line.length]=Link(box[1][0],Point(linx(3),liny(-1)));
box[1][1]=Textbox_Selection(x(5),y(yLevel),"��");
line[line.length]=Link(box[1][1],Point(linx(3),liny(-1)));
line[line.length]=Link(Point(linx(3.5),liny(-1)),box[0][1]);
//----------
box[2]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="";
CmtOption="+��������|-ȥ������֦С��";
CmtEvents="00000001";
CmtEvntIru="����֦�����ҵ�������26���ڷ�֧ǰ��̽�׵�ѿ��ѡ��õģ�������֦��ȷ����ϯ��ҵ���񣬴˴���ѡ��û��Ӱ��";
box[2][0]=Textbox_Selection_C(x(2),y(yLevel),"���������м���","5",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"���������м���",0);
line[line.length]=Link(box[2][0],box[1][0]);
//----------
box[3]=new Array();
yLevel+=3;
box[3][0]=Textbox_Option(x(1),y(yLevel),"˵��");
line[line.length]=Link(box[3][0],box[2][0]);
box[3][1]=Textbox_Option(x(3),y(yLevel),"��������");
line[line.length]=Link(box[3][1],box[2][0]);
//----------
box[4]=new Array();
yLevel+=2;
box[4][0]=Textbox_Option(x(1),y(yLevel),"�м�����Ϊ�������");
line[line.length]=Link(box[4][0],box[3][0]);
box[4][1]=Textbox_Condition(x(3),y(yLevel),"15�գ���������������֦����");
line[line.length]=Link(box[4][1],box[3][1]);
//----------
box[5]=new Array();
yLevel+=3;
box[5][0]=Textbox_Selection(x(2),y(yLevel),"�����");
line[line.length]=Link(box[5][0],box[4][1]);
box[5][1]=Textbox_Selection(x(4),y(yLevel),"��ȥ����");
line[line.length]=Link(box[5][1],box[4][1]);
//----------
box[6]=new Array();
yLevel+=2;
box[6][0]=Textbox_Selection(x(2),y(yLevel),"������������֦");
line[line.length]=Link(box[6][0],box[5][0]);
//----------
box[7]=new Array();
yLevel+=3;
box[7][0]=Textbox_Option(x(2),y(yLevel),"ȥ������֦С��");
line[line.length]=Link(box[7][0],box[6][0]);
box[7][1]=Textbox_Option(x(4),y(yLevel),"��Ҳ����");
line[line.length]=Link(box[7][1],box[6][0]);
//----------
box[8]=new Array();
yLevel+=2;
box[8][0]=Textbox_Option(x(2),y(yLevel),"����֦��Ϊ�������");
line[line.length]=Link(box[8][0],box[7][0]);
line[line.length]=Link(Point(linx(2),liny(2)),box[8][0]);
line[line.length]=Link(Point(linx(2),liny(2)),Point(linx(1),liny(2)),box[4][0]);
line[line.length]=Link(Point(linx(2),liny(2)),Point(linx(2),liny(2)));
//----------
box[9]=new Array();
yLevel+=1;
box[9][0]=Textbox_Option(x(4),y(yLevel),"3��3��������һ��");
box[9][0].addClick(function(){gotopage(56,"p56_33BB")});
line[line.length]=Link(box[9][0],box[7][1]);
line[line.length]=Link(box[9][0],Point(linx(5),liny(-5)),box[5][1]);
line[line.length]=Link(box[9][0],box[1][1]);
line[line.length]=Link(Point(linx(4),liny(1)),Point(linx(4),liny(1)));
//----------
box[10]=new Array();
yLevel+=5;
box[10][0]=Textbox_Option(x(0),y(yLevel),"3��3������������");
box[10][0].addLink("p58_33BB2");
box[10][0].addClick(function(){gotopage(53,"p53_ret33BB2")});
box[10][1]=Textbox_Condition(x(4),y(yLevel),"28�գ�û���ҵ��������");
line[line.length]=Link(Point(linx(4),liny(0)-LINEBASEHEIGHT/2),Point(linx(4),liny(0)-LINEBASEHEIGHT/2));
//----------
box[11]=new Array();
yLevel+=3;
box[11][0]=Textbox_Selection(x(2.5),y(yLevel),"��");
line[line.length]=Link(box[11][0],Point(linx(3.5),liny(-1)));
box[11][1]=Textbox_Selection(x(5.5),y(yLevel),"��");
line[line.length]=Link(box[11][1],Point(linx(3.5),liny(-1)));
line[line.length]=Link(Point(linx(4),liny(-1)),box[10][1]);
//----------
box[12]=new Array();
yLevel+=2;
box[12][0]=Textbox_Condition(x(2.5),y(yLevel),"20�գ���ҰѰ�����");
line[line.length]=Link(box[12][0],box[11][0]);
//----------
box[13]=new Array();
yLevel+=3;
box[13][0]=Textbox_Selection(x(1.5),y(yLevel),"��æ");
line[line.length]=Link(box[13][0],box[12][0]);
box[13][1]=Textbox_Selection(x(3.5),y(yLevel),"�ܾ�","r|+δ����");
line[line.length]=Link(box[13][1],box[12][0]);
//----------
box[14]=new Array();
yLevel+=2;
box[14][0]=Textbox_Condition(x(1.5),y(yLevel),"26�գ������������Ҵ�");
line[line.length]=Link(box[14][0],box[13][0]);
//----------
box[15]=new Array();
yLevel+=3;
box[15][0]=Textbox_Selection(x(0.5),y(yLevel),"���Ҵ�������");
line[line.length]=Link(box[15][0],box[14][0]);
box[15][1]=Textbox_Selection(x(2.5),y(yLevel),"��Ҫ������","r|+δ����");
line[line.length]=Link(box[15][1],box[14][0]);
//----------
box[16]=new Array();
yLevel+=2;
box[16][0]=Textbox_Option(x(0.5),y(yLevel),"��Ұ��Ϊ�������");
line[line.length]=Link(box[16][0],box[15][0]);
//----------
box[17]=new Array();
yLevel+=1;
box[17][0]=Textbox_Condition(x(3.5),y(yLevel),"26�գ�ǰ��̽�׵�ѿ��");
line[line.length]=Link(box[17][0],box[15][1]);
line[line.length]=Link(box[17][0],box[13][1]);
//----------
box[18]=new Array();
yLevel+=3;
box[18][0]=Textbox_Selection(x(2.5),y(yLevel),"�õ�");
line[line.length]=Link(box[18][0],box[17][0]);
box[18][1]=Textbox_Selection(x(4.5),y(yLevel),"�Լ�һ����ȥ��");
line[line.length]=Link(box[18][1],box[17][0]);
//----------
box[19]=new Array();
yLevel+=2;
box[19][0]=Textbox_Condition(x(2.5),y(yLevel),"28�գ�����ļƻ�����");
line[line.length]=Link(box[19][0],box[18][0]);
//----------
box[20]=new Array();
yLevel+=3;
box[20][0]=Textbox_Selection(x(1.5),y(yLevel),"������ѿ����");
line[line.length]=Link(box[20][0],box[19][0]);
box[20][1]=Textbox_Selection(x(3.5),y(yLevel),"������ϰ");
line[line.length]=Link(box[20][1],box[19][0]);
//----------
box[21]=new Array();
yLevel+=2;
box[21][0]=Textbox_Option(x(1.5),y(yLevel),"������Ϊ�������");
line[line.length]=Link(box[21][0],box[20][0]);
//----------
box[22]=new Array();
yLevel+=1;
box[22][0]=Textbox_Option(x(3.5),y(yLevel),"侳�Ϊ��Ա");
line[line.length]=Link(box[22][0],box[20][1]);
line[line.length]=Link(box[22][0],box[18][1]);

yLevel+=3;
line[line.length]=Link(Point(linx(2.5),liny(0)),Point(linx(1.5),liny(-1)),box[16][0]);
line[line.length]=Link(Point(linx(2.5),liny(0)),box[21][0]);
line[line.length]=Link(Point(linx(2.5),liny(0)),box[22][0]);
line[line.length]=Link(Point(linx(2.5),liny(0)),Point(linx(5.5),liny(0)),box[11][1]);
line[line.length]=Link(Point(linx(4),liny(0)),Point(linx(4),liny(0)));

hdft["footer"]=Footer(liny(1),58);