// CVG HTML Data Page16 Done By Ligueston 2008.4.15
hdft["header"]=Header("public","����·��","Public Route","4��22�գ�����","April 22nd~Part 2");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Block(x(0),y(yLevel),"A");
box[0][0].addLink("p16_A");
box[0][0].addClick(function(){gotopage(15,"p15_retA")});
box[0][1]=Textbox_Condition(x(3),y(yLevel),"17�գ���԰��ս�Ǵ����Ļ�Ŀ��");
line[line.length]=Link(Point(linx(3),liny(0)-LINEBASEHEIGHT/2),Point(linx(3),liny(0)-LINEBASEHEIGHT/2));
board[board.length]=Board(liny(0),liny(48));
//----------
box[1]=new Array();
yLevel+=3;
box[1][0]=Textbox_Selection(x(2),y(yLevel),"������ȥ");
line[line.length]=Link(box[1][0],box[0][1]);
box[1][1]=Textbox_Selection(x(4),y(yLevel),"��ȥ����");
line[line.length]=Link(box[1][1],box[0][1]);
//----------
box[2]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="";
CmtOption="-���Ǵ��";
CmtEvents="00000001";
CmtEvntIru="�Ǵ������������ҵ����";
box[2][0]=Textbox_Selection_C(x(2),y(yLevel),"����������Ǵ�","3",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"����������Ǵ�",0);
line[line.length]=Link(box[2][0],box[1][0]);
//----------
box[3]=new Array();
yLevel+=3;
box[3][0]=Textbox_Option(x(1),y(yLevel),"���Ǵ��");
line[line.length]=Link(box[3][0],box[2][0]);
box[3][1]=Textbox_Option(x(3),y(yLevel),"װ��û����");
line[line.length]=Link(box[3][1],box[2][0]);
//----------
box[4]=new Array();
yLevel+=4;
box[4][0]=Textbox_Selection(x(3),y(yLevel),"��ԭ�����ݾ粿�����������³�");
line[line.length]=Link(box[4][0],Point(linx(2),liny(-1)),box[3][0]);
line[line.length]=Link(box[4][0],Point(linx(2),liny(-1)),box[3][1]);
line[line.length]=Link(box[4][0],box[1][1]);
//----------
box[5]=new Array();
yLevel+=3;
box[5][0]=Textbox_Option(x(1),y(yLevel),"նɱ");
line[line.length]=Link(box[5][0],box[4][0]);
box[5][1]=Textbox_Option(x(3),y(yLevel),"͵��");
line[line.length]=Link(box[5][1],box[4][0]);
box[5][2]=Textbox_Option(x(5),y(yLevel),"ħ��");
line[line.length]=Link(box[5][2],box[4][0]);
//----------
box[6]=new Array();
yLevel+=3;
box[6][0]=Textbox_Condition(x(3),y(yLevel),"18�գ����Ե�̵ķ���");
line[line.length]=Link(box[6][0],box[5][0]);
line[line.length]=Link(box[6][0],box[5][1]);
line[line.length]=Link(box[6][0],box[5][2]);
//----------
box[7]=new Array();
yLevel+=3;
box[7][0]=Textbox_Selection(x(2),y(yLevel),"�ٿ�һ���");
line[line.length]=Link(box[7][0],box[6][0]);
box[7][1]=Textbox_Selection(x(4),y(yLevel),"�뿪","r|+δ����");
line[line.length]=Link(box[7][1],box[6][0]);
//----------
box[8]=new Array();
yLevel+=2;
box[8][0]=Textbox_Selection(x(2),y(yLevel),"�ݾ粿Ƹ��ָ����ʦ����ѯ����");
line[line.length]=Link(box[8][0],box[7][0]);
//----------
box[9]=new Array();
yLevel+=3;
box[9][0]=Textbox_Option(x(1),y(yLevel),"�ͷ�������һ��");
line[line.length]=Link(box[9][0],box[8][0]);
box[9][1]=Textbox_Option(x(3),y(yLevel),"��Ȼ������");
line[line.length]=Link(box[9][1],box[8][0]);
//----------
box[10]=new Array();
yLevel+=4;
CmtSummery="";
CmtSelect="";
CmtCaution="";
CmtOption="-�����ֽ�������";
CmtEvents="00000001";
CmtEvntIru="�ӡ�飲����ҵ����";
box[10][0]=Textbox_Selection_C(x(3),y(yLevel),"��ѯָ����ʦ������","4",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"��ѯָ����ʦ������",0);
line[line.length]=Link(box[10][0],Point(linx(2),liny(-1)),box[9][0]);
line[line.length]=Link(box[10][0],Point(linx(2),liny(-1)),box[9][1]);
line[line.length]=Link(box[10][0],box[7][1]);
//----------
box[11]=new Array();
yLevel+=3;
box[11][0]=Textbox_Option(x(2),y(yLevel),"�����ֽ�������");
line[line.length]=Link(box[11][0],box[10][0]);
box[11][1]=Textbox_Option(x(4),y(yLevel),"�Ͱ���������");
line[line.length]=Link(box[11][1],box[10][0]);
//----------
box[12]=new Array();
yLevel+=3;
box[12][0]=Textbox_Condition(x(3),y(yLevel),"16�գ���û�гٵ���ԭ��");
line[line.length]=Link(box[12][0],box[11][0]);
line[line.length]=Link(box[12][0],box[11][1]);
//----------
box[13]=new Array();
yLevel+=3;
box[13][0]=Textbox_Selection(x(2),y(yLevel),"����׷����ȥ");
line[line.length]=Link(box[13][0],box[12][0]);
box[13][1]=Textbox_Selection(x(4),y(yLevel),"ûʲô�ý����","r|+δ����");
line[line.length]=Link(box[13][1],box[12][0]);
//----------
box[14]=new Array();
yLevel+=2;
box[14][0]=Textbox_Selection(x(2),y(yLevel),"��ǰ��ĵ���Ĵ�������");
line[line.length]=Link(box[14][0],box[13][0]);
//----------
box[15]=new Array();
yLevel+=3;
box[15][0]=Textbox_Option(x(1),y(yLevel),"��ĵ����������");
line[line.length]=Link(box[15][0],box[14][0]);
box[15][1]=Textbox_Option(x(3),y(yLevel),"�û�ȥ����");
line[line.length]=Link(box[15][1],box[14][0]);

line[line.length]=Link(Point(linx(2),liny(3)),box[15][0]);
line[line.length]=Link(Point(linx(2),liny(3)),box[15][1]);
line[line.length]=Link(Point(linx(2),liny(3)),Point(linx(4),liny(3)),box[13][1]);
line[line.length]=Link(Point(linx(3),liny(3)),Point(linx(3),liny(3)));

hdft["footer"]=Footer(liny(1),16);