// CVG HTML Data Page11 Done By Ligueston 2008.4.10
hdft["header"]=Header("public","����·��","Public Route","4��19�գ�����","April 19th~Part 2");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Block(x(0),y(yLevel),"A");
box[0][0].addLink("p11_A");
box[0][0].addClick(function(){gotopage(10,"p10_retA")});
box[0][1]=Textbox_Condition(x(4),y(yLevel),"18�գ��ӿ�ѡ��˯���ĵط�");
line[line.length]=Link(Point(linx(4),liny(0)-LINEBASEHEIGHT/2),Point(linx(4),liny(0)-LINEBASEHEIGHT/2));
board[board.length]=Board(liny(0),liny(36));
//----------
box[1]=new Array();
yLevel+=3;
box[1][0]=Textbox_Selection(x(2),y(yLevel),"���ǻؽ��Ұ�","l|+δ����");
line[line.length]=Link(box[1][0],box[0][1]);
box[1][1]=Textbox_Selection(x(4),y(yLevel),"ȥ����˯");
line[line.length]=Link(box[1][1],box[0][1]);
//----------
box[2]=new Array();
yLevel+=2;
box[2][0]=Textbox_Condition(x(4),y(yLevel),"18�գ��¿κ��߽������ҵ�Ů��");
line[line.length]=Link(box[2][0],box[1][1]);
//----------
box[3]=new Array();
yLevel+=3;
box[3][0]=Textbox_Selection(x(4),y(yLevel),"��˵���仰");
line[line.length]=Link(box[3][0],box[2][0]);
box[3][1]=Textbox_Selection(x(6),y(yLevel),"�뿪");
line[line.length]=Link(box[3][1],box[2][0]);
//----------
box[4]=new Array();
yLevel+=3;
CmtSummery="��ѧ�����ĵ���Ҳ���ھ�����֮���ȥ����";
CmtSelect="18�������м��������Ͼ��뿪�������ң��˳��м����ߣ����ֵ�����ѡ����Ϊ[ȥ���Ż��]��[ȥͼ����]��[�ؼ�]������[�ؼ�]ѡ����滻��[ȥ������]����18��δ�����м����ߣ�ѡ��[ȥ������]�����Ҫ�����м����ߣ��������Ļ��ᡣ";
CmtCaution="";
CmtOption="-ȥ������";
CmtEvents="10000000";
CmtEvntIru="�м�������64HIT�����18���ڷ�֧�ӿ�ѡ��˯���ĵط�ѡ������ȥ˯����˴���ѡ��û��Ӱ��";
box[4][0]=Textbox_Selection_C(x(2),y(yLevel),"������У����ȥ��һ��","6",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"������У����ȥ��",0);
line[line.length]=Link(box[4][0],box[3][0]);
line[line.length]=Link(box[4][0],box[1][0]);
//----------
box[5]=new Array();
yLevel+=3;
box[5][0]=Textbox_Option(x(0),y(yLevel),"ȥ���Ż��");
line[line.length]=Link(box[5][0],box[4][0]);
box[5][1]=Textbox_Option(x(2),y(yLevel),"ȥͼ���");
line[line.length]=Link(box[5][1],box[4][0]);
box[5][2]=Textbox_Option(x(4),y(yLevel),"ȥ������");
line[line.length]=Link(box[5][2],box[4][0]);
//----------
box[6]=new Array();
yLevel+=2;
box[6][0]=Textbox_Condition(x(4),y(yLevel),"18�գ��ӿ�ѡ��˯���ĵط�");
line[line.length]=Link(box[6][0],box[5][2]);
//----------
box[7]=new Array();
yLevel+=3;
box[7][0]=Textbox_Selection(x(3),y(yLevel),"���ǻؽ��Ұ�","l|+δ����");
line[line.length]=Link(box[7][0],box[6][0]);
box[7][1]=Textbox_Selection(x(5),y(yLevel),"ȥ����˯");
line[line.length]=Link(box[7][1],box[6][0]);
//----------
box[8]=new Array();
yLevel+=2;
box[8][0]=Textbox_Selection(x(3),y(yLevel),"�¿κ��߽������ҵ�Ů��");
line[line.length]=Link(box[8][0],box[7][0]);
//----------
box[9]=new Array();
yLevel+=3;
box[9][0]=Textbox_Option(x(2),y(yLevel),"��˵���仰","l|�м���|-ʤƽ");
line[line.length]=Link(box[9][0],box[8][0]);
box[9][1]=Textbox_Option(x(4),y(yLevel),"�뿪","r|-ʤƽ|�м���");
line[line.length]=Link(box[9][1],box[8][0]);
//----------
box[10]=new Array();
yLevel+=5;
box[10][0]=Textbox_Selection(x(6),y(yLevel),"����У����ȥ�򣨶���");
line[line.length]=Link(box[10][0],box[3][1]);
//----------
box[11]=new Array();
yLevel+=3;
box[11][0]=Textbox_Option(x(2),y(yLevel),"ȥ���Ż��");
line[line.length]=Link(box[11][0],box[10][0]);
box[11][1]=Textbox_Option(x(4),y(yLevel),"ȥͼ���");
line[line.length]=Link(box[11][1],box[10][0]);
box[11][2]=Textbox_Option(x(6),y(yLevel),"ȥ������");
line[line.length]=Link(box[11][2],box[10][0]);

yLevel+=3;
line[line.length]=Link(Point(linx(4),liny(0)),box[11][0]);
line[line.length]=Link(Point(linx(4),liny(0)),box[11][1]);
line[line.length]=Link(Point(linx(4),liny(0)),box[11][2]);

line[line.length]=Link(Point(linx(4),liny(0)),Point(linx(1),liny(0)),Point(linx(1),liny(-6)),Point(linx(4),liny(-7)),Point(linx(3),liny(-8)),box[9][0]);
line[line.length]=Link(Point(linx(4),liny(0)),Point(linx(1),liny(0)),Point(linx(1),liny(-6)),Point(linx(4),liny(-7)),Point(linx(3),liny(-8)),box[9][1]);
line[line.length]=Link(Point(linx(4),liny(0)),Point(linx(1),liny(0)),Point(linx(1),liny(-6)),Point(linx(4),liny(-7)),box[7][1]);

line[line.length]=Link(Point(linx(4),liny(0)),Point(linx(1),liny(0)),Point(linx(1),liny(-18)),box[5][0]);
line[line.length]=Link(Point(linx(4),liny(0)),Point(linx(1),liny(0)),Point(linx(1),liny(-18)),box[5][1]);
line[line.length]=Link(Point(linx(4),liny(0)),Point(linx(4),liny(0)));

hdft["footer"]=Footer(liny(1),11);