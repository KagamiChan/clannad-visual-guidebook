// CVG HTML Data Page9 Done By Ligueston 2008.4.9
hdft["header"]=Header("public","����·��","Public Route","4��18�գ�����","April 18th~Part 3");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Block(x(0),y(yLevel),"A");
box[0][0].addLink("p9_A");
box[0][0].addClick(function(){gotopage(7,"p7_retA")});
box[0][1]=Textbox_Selection(x(2),y(yLevel),"�ӿ�ʱ������ԭ");
line[line.length]=Link(Point(linx(2),liny(0)-LINEBASEHEIGHT/2),Point(linx(2),liny(0)-LINEBASEHEIGHT/2));
board[board.length]=Board(liny(0),liny(35));
//----------
box[1]=new Array();
yLevel+=3;
box[1][0]=Textbox_Option(x(1),y(yLevel),"����һ��");
line[line.length]=Link(box[1][0],box[0][1]);
box[1][1]=Textbox_Option(x(3),y(yLevel),"����������");
line[line.length]=Link(box[1][1],box[0][1]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Selection(x(2),y(yLevel),"��ԥ�Ƿ����ͼ���");
line[line.length]=Link(box[2][0],box[1][0]);
line[line.length]=Link(box[2][0],box[1][1]);
line[line.length]=Link(Point(linx(2),liny(2)),box[2][0]);
//----------
box[3]=new Array();
yLevel+=3;
box[3][0]=Textbox_Option(x(0.5),y(yLevel),"�ؽ���","l|����");
line[line.length]=Link(box[3][0],Point(linx(1.5),liny(-1)));
box[3][1]=Textbox_Option(x(3.5),y(yLevel),"����ͼ���","r|����");
line[line.length]=Link(box[3][1],Point(linx(1.5),liny(-1)));
//----------
box[4]=new Array();
yLevel+=2;
CmtSummery="���ڿ��������˿��û��ע������ߵ������һ�������ģ����";
CmtSelect="�˴�ֻ��ѡ��[��������]���ʣ���ѡ��ʱ�����ͨ��������ѡ��[������ҳ]��[��������]����һ�ξ��������ٴλص������֧����ʱ���ղ�ѡ����Ǹ�ѡ�����ʧ����ɶ���ѡ���������ǲ�ѡ��[��������]������ٴλص������ʱֻʣ��һ��ѡ����ǲ�����������ѡ���ˣ���ʣ��ѡ�����֣���";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[4][0]=Textbox_Selection_C(x(3.5),y(yLevel),"�跨������ע�⵽�Լ�","10",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"�跨������ע�⵽�Լ�",0);
line[line.length]=Link(box[4][0],box[3][1]);
//----------
box[5]=new Array();
yLevel+=3;
box[5][0]=Textbox_Option(x(1.5),y(yLevel),"������ҳ");
line[line.length]=Link(box[5][0],box[4][0]);
box[5][1]=Textbox_Option(x(3.5),y(yLevel),"��������");
line[line.length]=Link(box[5][1],box[4][0]);
box[5][2]=Textbox_Option(x(5.5),y(yLevel),"��������");
line[line.length]=Link(box[5][2],box[4][0]);
//----------
box[6]=new Array();
yLevel+=3;
box[6][0]=Textbox_Selection(x(3.5),y(yLevel),"��Ҳ���ĵ�˼��");
line[line.length]=Link(box[6][0],box[5][0]);
line[line.length]=Link(box[6][0],box[5][1]);
line[line.length]=Link(box[6][0],box[5][2]);
//----------
box[7]=new Array();
yLevel+=3;
box[7][0]=Textbox_Option(x(2.5),y(yLevel),"���ܾ�����������","l|����|-ʤƽ");
line[line.length]=Link(box[7][0],box[6][0]);
box[7][1]=Textbox_Option(x(4.5),y(yLevel),"�Ӵ˲����������Ϲ�ϵ","r|-ʤƽ|����");
line[line.length]=Link(box[7][1],box[6][0]);
//----------
box[8]=new Array();
yLevel+=2;
box[8][0]=Textbox_Condition(x(2.5),y(yLevel),"�ź����´���������");
line[line.length]=Link(box[8][0],box[7][0]);
//----------
box[9]=new Array();
yLevel+=3;
box[9][0]=Textbox_Selection(x(1.5),y(yLevel),"��æ");
line[line.length]=Link(box[9][0],box[8][0]);
box[9][1]=Textbox_Selection(x(3.5),y(yLevel),"����һ������","r|+δ����");
line[line.length]=Link(box[9][1],box[8][0]);
//----------
box[10]=new Array();
yLevel+=2;
box[10][0]=Textbox_Selection(x(1.5),y(yLevel),"����������͹źӵ�Լ��");
line[line.length]=Link(box[10][0],box[9][0]);
//----------
box[11]=new Array();
yLevel+=3;
box[11][0]=Textbox_Option(x(1.5),y(yLevel),"���컹����ǰһ�����һ���","l|�|-����|-�Ǵ�");
line[line.length]=Link(box[11][0],box[10][0]);
box[11][1]=Textbox_Option(x(3.5),y(yLevel),"�����������һ���","r|-����|-�Ǵ�|�");
line[line.length]=Link(box[11][1],box[10][0]);

yLevel+=4;
line[line.length]=Link(Point(linx(3.5),liny(0)),Point(linx(0.5),liny(0)),box[3][0]);
line[line.length]=Link(Point(linx(3.5),liny(0)),Point(linx(2.5),liny(-1)),box[11][0]);
line[line.length]=Link(Point(linx(3.5),liny(0)),Point(linx(2.5),liny(-1)),box[11][1]);
line[line.length]=Link(Point(linx(3.5),liny(0)),Point(linx(4.5),liny(-6)),box[9][1]);
line[line.length]=Link(Point(linx(3.5),liny(0)),box[7][1]);
line[line.length]=Link(Point(linx(2),liny(0)),Point(linx(2),liny(0)));
//----------
box[12]=new Array();
yLevel+=4;
box[12][0]=Textbox_Block(x(0),y(yLevel),"B");
box[12][0].addLink("p9_B");
box[12][0].addClick(function(){gotopage(7,"p7_retB")});
CmtSummery="��Ҳ�뵽�������Ǹ�˯���ĺõط�������û���˻�ȥ���";
CmtSelect="����û�н���価������ߵĻ���ѡ��[���ǻؽ���]�ɣ���19�ջ���һ�ξ�����Դ������ɴ˽����м����ߣ����ѽ���価������ߣ���ô�����������м����ߵ�Ψһ���ᣬѡ��[������ȥ˯]����֮��ķ�֧��ѡ��[��˵���仰]��ͬʱ19�յľ��齵Ϊ����ѡ���Ҳ�Ӱ����̣���ѡ�񴥷�������ͨ���顣";
CmtCaution="";
CmtOption="-������ȥ˯";
CmtEvents="10000000";
CmtEvntIru="�м�������64HIT";
box[12][1]=Textbox_Option_C(x(4),y(yLevel),"�ӿ�ѡ��˯���ĵط�","11",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"�ӿ�ѡ��˯���ĵط�",0);
line[line.length]=Link(Point(linx(4),liny(0)-LINEBASEHEIGHT/2),Point(linx(4),liny(0)-LINEBASEHEIGHT/2));
board[board.length]=Board(liny(0),liny(18));
//----------
box[13]=new Array();
yLevel+=3;
box[13][0]=Textbox_Option(x(3),y(yLevel),"������ȥ˯","l|�м���");
line[line.length]=Link(box[13][0],box[12][1]);
box[13][1]=Textbox_Option(x(5),y(yLevel),"���ǻؽ��Ұ�");
line[line.length]=Link(box[13][1],box[12][1]);
//----------
box[14]=new Array();
yLevel+=2;
box[14][0]=Textbox_Selection(x(3),y(yLevel),"�¿κ��߽������ҵ�Ů��");
line[line.length]=Link(box[14][0],box[13][0]);
//----------
box[15]=new Array();
yLevel+=3;
box[15][0]=Textbox_Option(x(2),y(yLevel),"��˵���仰","l|�м���|-ʤƽ");
line[line.length]=Link(box[15][0],box[14][0]);
box[15][1]=Textbox_Option(x(4),y(yLevel),"�뿪","r|-ʤƽ|�м���");
line[line.length]=Link(box[15][1],box[14][0]);
//----------
box[16]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="";
CmtOption="-˯��";
CmtEvents="00001000";
CmtEvntIru="���Ӵ�ʦ���ݸ��ݴ˴�ѡ��������仯";
box[16][0]=Textbox_Selection_C(x(2),y(yLevel),"�м����뿪��","12",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"�м����뿪��",0);
line[line.length]=Link(box[16][0],box[15][0]);
//----------
box[17]=new Array();
yLevel+=3;
box[17][0]=Textbox_Option(x(1),y(yLevel),"˯��");
line[line.length]=Link(box[17][0],box[16][0]);
box[17][1]=Textbox_Option(x(3),y(yLevel),"�ؽ���");
line[line.length]=Link(box[17][1],box[16][0]);

yLevel+=4;
line[line.length]=Link(Point(linx(3),liny(0)),Point(linx(2),liny(-1)),box[17][0]);
line[line.length]=Link(Point(linx(3),liny(0)),Point(linx(2),liny(-1)),box[17][1]);
line[line.length]=Link(Point(linx(3),liny(0)),box[15][1]);
line[line.length]=Link(Point(linx(3),liny(0)),Point(linx(5),liny(0)),box[13][1]);
line[line.length]=Link(Point(linx(4),liny(0)),Point(linx(4),liny(0)));

hdft["footer"]=Footer(liny(1),9);