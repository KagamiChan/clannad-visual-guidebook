// CVG HTML Data Page17 Done By Ligueston 2008.4.15
hdft["header"]=Header("public","����·��","Public Route","4��22�գ�����","April 22nd~Part 3");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Block(x(0),y(yLevel),"B");
box[0][0].addLink("p17_B");
box[0][0].addClick(function(){gotopage(15,"p15_retB")})
CmtSummery="";
CmtSelect="{18�ջ�19�գ�����������ʶ�м���}����18�գ��ڷ�֧{�ӿ�ѡ��˯���ĵط�}ѡ��[������ȥ˯]�������ڽ������ķ�֧{�¿κ��߽������ҵ�Ů��}ѡ��[��˵���仰]�����ߣ�18���ڷ�֧{�ӿ�ѡ��˯���ĵط�}ѡ��[���ǻؽ��Ұ�]����δ���������֧��������19�յķ�֧{������У����ȥ��һ��}ѡ��[ȥ������]���Լ��ڽ������ķ�֧{�¿κ��߽������ҵ�Ů��}ѡ��[��˵���仰]�����������������ʶ�м�������������ֻ������������һ�֡���ͬ������·21��ע��2{�м����߽���}��������ݣ�";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[0][1]=Textbox_Condition_C(x(4),y(yLevel),"18�ջ�19�գ�����������ʶ�м���","5",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"18�ջ�19�գ�����������ʶ�м���",0);
line[line.length]=Link(Point(linx(4),liny(0)-LINEBASEHEIGHT/2),Point(linx(4),liny(0)-LINEBASEHEIGHT/2));
board[board.length]=Board(liny(0),liny(22));
//----------
box[1]=new Array();
yLevel+=3;
box[1][0]=Textbox_Selection(x(2.5),y(yLevel),"��");
line[line.length]=Link(box[1][0],Point(linx(3.5),liny(-1)));
box[1][1]=Textbox_Selection(x(5.5),y(yLevel),"��");
line[line.length]=Link(box[1][1],Point(linx(3.5),liny(-1)));
line[line.length]=Link(Point(linx(4),liny(-1)),box[0][1]);
//----------
box[2]=new Array();
yLevel+=2;
box[2][0]=Textbox_Condition(x(2.5),y(yLevel),"20�գ���ҰѰ�����");
line[line.length]=Link(box[2][0],box[1][0]);
//----------
box[3]=new Array();
yLevel+=3;
box[3][0]=Textbox_Selection(x(2.5),y(yLevel),"�ܾ�","l|+δ����");
line[line.length]=Link(box[3][0],box[2][0]);
box[3][1]=Textbox_Selection(x(4.5),y(yLevel),"��æ");
line[line.length]=Link(box[3][1],box[2][0]);
//----------
box[4]=new Array();
yLevel+=2;
CmtSummery="���緹�󣬴�ԭ����ǰȥ�����Ҽ��м���������Ҳһ��ǰ����";
CmtSelect="��20�գ��ڷ�֧{��ҰѰ�����}��ѡ����[�ܾ�]����δ���������֧������21���ڷ�֧{�ٵ�������}ѡ��[��ȥѧ��ʳ��]����δ���������֧�������ջ���һ��û�з�֧���м������顣��������������������ô���ղ������м������飬��������з�֧���м������齫�����յľ����������";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[4][0]=Textbox_Selection_C(x(2.5),y(yLevel),"��ԭȥ���м�������Ҳ��ͬ","6",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"��ԭȥ���м�������Ҳ��ͬ",0);
line[line.length]=Link(box[4][0],box[3][0]);
//----------
box[5]=new Array();
yLevel+=3;
box[5][0]=Textbox_Option(x(2.5),y(yLevel),"ȥ","l|�м���");
line[line.length]=Link(box[5][0],box[4][0]);
box[5][1]=Textbox_Option(x(4.5),y(yLevel),"��ȥ","r|�м���");
line[line.length]=Link(box[5][1],box[4][0]);
//----------
box[6]=new Array();
yLevel+=2;
CmtSummery="�м�����ԭ�Ƽ������ܹ���Ů�������Լ��������ԭ���Ͼ�����һ�ԣ���Ҳ����ѡ��Ŀ�ꡣ";
CmtSelect="���ҽ�����ʶ�Ǵ�ʱ������16�շ�֧{��ԭ��ս�Ǵ���һ��Ŀ��}ѡ��[ȥ]����ѡ��[�Ǵ�]�Ż���֣�����Ϊ[��]��[�]����ѡ��";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[6][0]=Textbox_Selection_C(x(2.5),y(yLevel),"��Ҳ��æѡ��ʩչ�����Ŀ��","7",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"��Ҳ��æѡ��ʩչ�����Ŀ��",0);
line[line.length]=Link(box[6][0],box[5][0]);
//----------
box[7]=new Array();
yLevel+=3;
box[7][0]=Textbox_Option(x(0.5),y(yLevel),"�Ǵ�");
line[line.length]=Link(box[7][0],box[6][0]);
box[7][1]=Textbox_Option(x(2.5),y(yLevel),"��");
line[line.length]=Link(box[7][1],box[6][0]);
box[7][2]=Textbox_Option(x(4.5),y(yLevel),"�");
line[line.length]=Link(box[7][2],box[6][0]);

line[line.length]=Link(Point(linx(2.5),liny(3)),box[7][0]);
line[line.length]=Link(Point(linx(2.5),liny(3)),box[7][1]);
line[line.length]=Link(Point(linx(2.5),liny(3)),box[7][2]);
line[line.length]=Link(Point(linx(2.5),liny(3)),Point(linx(5.5),liny(3)),Point(linx(5.5),liny(-2)),box[5][1]);
line[line.length]=Link(Point(linx(2.5),liny(3)),Point(linx(5.5),liny(3)),Point(linx(5.5),liny(-7)),box[3][1]);
line[line.length]=Link(Point(linx(2.5),liny(3)),Point(linx(5.5),liny(3)),box[1][1]);
line[line.length]=Link(Point(linx(4),liny(3)),Point(linx(4),liny(3)));

//----------
box[8]=new Array();
yLevel+=7;
box[8][0]=Textbox_Block(x(0),y(yLevel),"C");
box[8][0].addLink("p17_C");
box[8][0].addClick(function(){gotopage(15,"p15_retC")});
box[8][1]=Textbox_Condition(x(3.5),y(yLevel),"18�գ����Ե�̵ķ���");
line[line.length]=Link(Point(linx(3.5),liny(0)-LINEBASEHEIGHT/2),Point(linx(3.5),liny(0)-LINEBASEHEIGHT/2));
board[board.length]=Board(liny(0),liny(26));
//----------
box[9]=new Array();
yLevel+=3;
box[9][0]=Textbox_Selection(x(2.5),y(yLevel),"�ٿ�һ���");
line[line.length]=Link(box[9][0],box[8][1]);
box[9][1]=Textbox_Selection(x(4.5),y(yLevel),"�뿪","r|+δ����");
line[line.length]=Link(box[9][1],box[8][1]);
//----------
box[10]=new Array();
yLevel+=2;
box[10][0]=Textbox_Option(x(2.5),y(yLevel),"���Ӵ�ʦ������");
box[10][0].addLink("p17_retKFMT2");
box[10][0].addClick(function(){gotopage(48,"p48_KFMT2")});
line[line.length]=Link(box[10][0],box[9][0]);
//----------
box[11]=new Array();
yLevel+=2;
box[11][0]=Textbox_Selection(x(2.5),y(yLevel),"�������Ӳ�����ĵ��");
line[line.length]=Link(box[11][0],box[10][0]);
//----------
box[12]=new Array();
yLevel+=3;
box[12][0]=Textbox_Option(x(1.5),y(yLevel),"��������");
line[line.length]=Link(box[12][0],box[11][0]);
box[12][1]=Textbox_Option(x(3.5),y(yLevel),"���ؼ�ȥ");
line[line.length]=Link(box[12][1],box[11][0]);
//----------
box[13]=new Array();
yLevel+=4;
CmtSummery="";
CmtSelect="�˴�{ʤƽ�߽���}��21�գ��ڷ�֧{�ܺ��������ļ���}ѡ��[�����ַ���͸���]�������ڽ�������ķ�֧{��ǰ��ĵ���Ĵ�������}ѡ��[��ĵ����������]����δ���������֧��û��ѡ����Ӧѡ�����û�д���ǰһ��֧����������ڷ�ǰһ��֧ѡ����ȷ��û�д�����һ��֧����������ǡ�<br>{価������߽���}��21�գ��ڷ�֧{�ٵ�������}ѡ��[��������]��û��ѡ����Ӧѡ�����û�д�����֧����������ڷ�<br>������価�������ʱ����������ѡ�񣬶��������մ��ʤƽ��GOOD ENDING��";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[13][0]=Textbox_Condition_C(x(3.5),y(yLevel),"ʤƽ�߽����価������߽���","8",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"ʤƽ�߽����価������߽���",0);
line[line.length]=Link(box[13][0],Point(linx(2.5),liny(-1)),box[12][0]);
line[line.length]=Link(box[13][0],Point(linx(2.5),liny(-1)),box[12][1]);
line[line.length]=Link(box[13][0],box[9][1]);
//----------
box[14]=new Array();
yLevel+=3;
box[14][0]=Textbox_Selection(x(2.5),y(yLevel),"��");
line[line.length]=Link(box[14][0],box[13][0]);
box[14][1]=Textbox_Selection(x(4.5),y(yLevel),"��");
line[line.length]=Link(box[14][1],box[13][0]);
//----------
box[15]=new Array();
yLevel+=2;
box[15][0]=Textbox_Selection(x(2.5),y(yLevel),"��ԭ����Ҳ��æװ������");
line[line.length]=Link(box[15][0],box[14][0]);
//----------
box[16]=new Array();
yLevel+=3;
box[16][0]=Textbox_Selection(x(1.5),y(yLevel),"����æ","l|ʤƽ");
line[line.length]=Link(box[16][0],box[15][0]);
box[16][1]=Textbox_Selection(x(3.5),y(yLevel),"��æ","r|ʤƽ");
line[line.length]=Link(box[16][1],box[15][0]);

line[line.length]=Link(Point(linx(2.5),liny(3)),box[16][0]);
line[line.length]=Link(Point(linx(2.5),liny(3)),box[16][1]);
line[line.length]=Link(Point(linx(2.5),liny(3)),Point(linx(4.5),liny(3)),box[14][1]);
line[line.length]=Link(Point(linx(3.5),liny(3)),Point(linx(3.5),liny(3)));

hdft["footer"]=Footer(liny(1),17);