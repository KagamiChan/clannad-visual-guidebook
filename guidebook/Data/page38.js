// CVG HTML Data Page38 Done By goodbest 2008.4.18
hdft["header"]=Header("sunohara","��ԭ  ��ƽ/��ԭ ѿ��","Youhei Sunohara / Mei Sunohara","4��24�ա�ѿ��","April 24th~Mei");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(3),y(yLevel),"4��24��","top");
//----------
box[1]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="��ԭ����·��ǰ��������顣������24��һ��֮�ڣ����ݼ�ѡ���֧���ֵı仯�빫��·�ߵ������ĳЩ��֧ѡ���йأ�ͬʱҲ���м����������в��־��������йأ���Щ��ط�֧��αŮ���¼�ͼ�궼������ʾ��αŮ���¼���ع�����μ�P39";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[1][0]=Textbox_Option_C(x(3),y(yLevel),"αŮ���¼�","1",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"αŮ���¼�",0);
box[1][0].addLink("p38_retFAKEGF");
box[1][0].addClick(function(){gotopage(39,"p39_FAKEGF")});
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=2;
box[2][0]=Textbox_Date(x(3),y(yLevel),"ѿ��","bottom");
line[line.length]=Link(box[2][0],box[1][0]);
//----------
box[3]=new Array();
yLevel+=5;
box[3][0]=Textbox_Date(x(3.5),y(yLevel),"ѿ��","top");
//----------
box[4]=new Array();
yLevel+=2;
box[4][0]=Textbox_Condition(x(3.5),y(yLevel),"20�գ�Ұ��Ѱ�����");
line[line.length]=Link(box[4][0],box[3][0]);
//----------
box[5]=new Array();
yLevel+=3;
box[5][0]=Textbox_Selection(x(2.5),y(yLevel),"����");
line[line.length]=Link(box[5][0],box[4][0]);
box[5][1]=Textbox_Selection(x(4.5),y(yLevel),"�ܾ�");
line[line.length]=Link(box[5][1],box[4][0]);
//----------
box[6]=new Array();
yLevel+=2;
box[6][0]=Textbox_Selection(x(2.5),y(yLevel),"��Ұ����ѿ��");
line[line.length]=Link(box[6][0],box[5][0]);
//----------
box[7]=new Array();
yLevel+=3;
box[7][0]=Textbox_Option(x(1.5),y(yLevel),"��Զ������������ô��");
line[line.length]=Link(box[7][0],box[6][0]);
box[7][1]=Textbox_Option(x(3.5),y(yLevel),"�Ǿ�����");
line[line.length]=Link(box[7][1],box[6][0]);
//----------
box[8]=new Array();
yLevel+=4;
box[8][0]=Textbox_Option(x(3.5),y(yLevel),"��ԭ���á��⡱���");
line[line.length]=Link(box[8][0],Point(linx(2.5),liny(-1)),box[7][0]);
line[line.length]=Link(box[8][0],Point(linx(2.5),liny(-1)),box[7][1]);
line[line.length]=Link(box[8][0],box[5][1]);
//----------
box[9]=new Array();
yLevel+=2;
box[9][0]=Textbox_Quit(x(3.5),y(yLevel),"��ԭ���� GOOD ENDING");
line[line.length]=Link(box[9][0],box[8][0]);

hdft["footer"]=Footer(liny(1),38);