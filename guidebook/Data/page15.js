// CVG HTML Data Page15 Done By Ligueston 2008.4.15
hdft["header"]=Header("public","����·��","Public Route","4��22�գ�һ��","April 22nd~Part 1");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(3),y(yLevel),"4��22��","top");
//----------
box[1]=new Array();
yLevel+=2;
box[1][0]=Textbox_Condition(x(3),y(yLevel),"21�գ��ٵ�������");
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Selection(x(3),y(yLevel),"��ȥѧ��ʳ��","l|+δ����");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Selection(x(5),y(yLevel),"��������");
line[line.length]=Link(box[2][1],box[1][0]);
//----------
box[3]=new Array();
yLevel+=2;
box[3][0]=Textbox_Condition(x(3),y(yLevel),"21�գ����Ǵ�����ͬ");
line[line.length]=Link(box[3][0],box[2][0]);
box[3][1]=Textbox_Block(x(5),y(yLevel),"A");
line[line.length]=Link(box[3][1],box[2][1]);
box[3][1].addLink("p15_retA");
box[3][1].addClick(function(){gotopage(16,"p16_A")});
//----------
box[4]=new Array();
yLevel+=3;
box[4][0]=Textbox_Selection(x(2),y(yLevel),"��ȷ����");
line[line.length]=Link(box[4][0],box[3][0]);
box[4][1]=Textbox_Selection(x(4),y(yLevel),"��������","r|+δ����");
line[line.length]=Link(box[4][1],box[3][0]);
//----------
box[5]=new Array();
yLevel+=2;
box[5][0]=Textbox_Selection(x(2),y(yLevel),"�ٵ�����Ҳ�����Ǵ�");
line[line.length]=Link(box[5][0],box[4][0]);
CmtSummery="";
CmtSelect="";
CmtCaution="������·���ڸ�Ц���顣������22����24�յ������ڣ����ݱ仯���Ǵ���21�ա�22�յ�ѡ���йأ�����ѡ�����Ӱ����鷢չ����ԭ����Ц��ع�����μ�P25��";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[5][1]=Textbox_Selection_C(x(4),y(yLevel),"��ԭ����Ц","1",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"��ԭ����Ц",0);
box[5][1].addLink("p15_retSNJK1");
box[5][1].addClick(function(){gotopage(25,"p25_SNJK1");})
line[line.length]=Link(box[5][1],box[4][1]);
//----------
box[6]=new Array();
yLevel+=3;
box[6][0]=Textbox_Option(x(1),y(yLevel),"��Ĭ");
line[line.length]=Link(box[6][0],box[5][0]);
box[6][1]=Textbox_Option(x(3),y(yLevel),"������׼����ȥ");
line[line.length]=Link(box[6][1],box[5][0]);
//----------
box[7]=new Array();
yLevel+=3;
CmtSummery="";
CmtSelect="";
CmtCaution="";
CmtOption="-���鷳��";
CmtEvents="01000010";
CmtEvntIru="�Ǵ������м�������������ֿ��¼���ҵ���������ѡ�����߲����������֧��";
box[7][0]=Textbox_Selection_C(x(2),y(yLevel),"�ش��Ǵ���ѯ��","2",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"�ش��Ǵ���ѯ��",0);
line[line.length]=Link(box[7][0],box[6][0]);
line[line.length]=Link(box[7][0],box[6][1]);
//----------
box[8]=new Array();
yLevel+=3;
box[8][0]=Textbox_Option(x(1),y(yLevel),"�������������˼","l|�Ǵ�");
line[line.length]=Link(box[8][0],box[7][0]);
box[8][1]=Textbox_Option(x(3),y(yLevel),"���鷳��","r|�Ǵ�");
line[line.length]=Link(box[8][1],box[7][0]);
//----------
box[9]=new Array();
yLevel+=3;
box[9][0]=Textbox_Block(x(3),y(yLevel),"B");
line[line.length]=Link(box[9][0],box[8][1]);
line[line.length]=Link(box[9][0],box[5][1]);
box[9][0].addLink("p15_retB");
box[9][0].addClick(function(){gotopage(17,"p17_B")});
//----------
box[10]=new Array();
yLevel+=3;
box[10][0]=Textbox_Condition(x(3),y(yLevel),"16�գ���û�гٵ���ԭ��");
line[line.length]=Link(box[10][0],box[9][0]);
line[line.length]=Link(box[10][0],box[8][0]);
//----------
box[11]=new Array();
yLevel+=3;
box[11][0]=Textbox_Selection(x(2),y(yLevel),"����׷����ȥ");
line[line.length]=Link(box[11][0],box[10][0]);
box[11][1]=Textbox_Selection(x(4),y(yLevel),"ûʲô�ý����","r|+δ����");
line[line.length]=Link(box[11][1],box[10][0]);
//----------
box[12]=new Array();
yLevel+=2;
box[12][0]=Textbox_Selection(x(2),y(yLevel),"��ǰ��ĵ���Ĵ�������");
line[line.length]=Link(box[12][0],box[11][0]);
//----------
box[13]=new Array();
yLevel+=3;
box[13][0]=Textbox_Option(x(1),y(yLevel),"�û�ȥ����","l|��|�|ʤƽ");
line[line.length]=Link(box[13][0],box[12][0]);
box[13][1]=Textbox_Option(x(3),y(yLevel),"��ĵ����������","r|-ʤƽ|��|�");
line[line.length]=Link(box[13][1],box[12][0]);
//----------
box[14]=new Array();
yLevel+=4;
box[14][0]=Textbox_Condition(x(3),y(yLevel),"���磬�ش��Ǵ���ѯ��");
line[line.length]=Link(box[14][0],Point(linx(2),liny(-1)),box[13][0]);
line[line.length]=Link(box[14][0],Point(linx(2),liny(-1)),box[13][1]);
line[line.length]=Link(box[14][0],box[11][1]);
//----------
box[15]=new Array();
yLevel+=3;
box[15][0]=Textbox_Selection(x(2),y(yLevel),"�������������˼");
line[line.length]=Link(box[15][0],box[14][0]);
box[15][1]=Textbox_Selection(x(4),y(yLevel),"���鷳��","r|+δ����");
line[line.length]=Link(box[15][1],box[14][0]);
//----------
box[16]=new Array();
yLevel+=2;
box[16][0]=Textbox_Selection(x(2),y(yLevel),"����ԭ���ã��Ǵ����뾽��");
line[line.length]=Link(box[16][0],box[15][0]);
//----------
box[17]=new Array();
yLevel+=3;
box[17][0]=Textbox_Option(x(1),y(yLevel),"����ֹ����","l|�Ǵ�|-��|-�|-ѿ��|-�м���");
line[line.length]=Link(box[17][0],box[16][0]);
box[17][1]=Textbox_Option(x(3),y(yLevel),"����һ������","r|-ѿ��|-�м���|-��|-�|�Ǵ�");
line[line.length]=Link(box[17][1],box[16][0]);
//----------
box[18]=new Array();
yLevel+=3;
box[18][0]=Textbox_Block(x(4),y(yLevel),"C");
line[line.length]=Link(box[18][0],box[15][1]);
line[line.length]=Link(box[18][0],Point(linx(4),liny(-5)),box[3][1]);
box[18][0].addLink("p15_retC");
box[18][0].addClick(function(){gotopage(17,"p17_C")});
//----------
box[19]=new Array();
yLevel+=3;
box[19][0]=Textbox_Date(x(3),y(yLevel),"4��23��","bottom");
line[line.length]=Link(box[19][0],box[18][0]);
line[line.length]=Link(box[19][0],Point(linx(2),liny(-2)),box[17][0]);
line[line.length]=Link(box[19][0],Point(linx(2),liny(-2)),box[17][1]);
box[19][0].addTitle("���ת��18ҳ");
box[19][0].addClick(function(){gotopage(18)});

hdft["footer"]=Footer(liny(1),15);