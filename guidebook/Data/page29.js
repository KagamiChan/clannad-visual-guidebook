// CVG HTML Data Page29 Done By Shakugan_No_Kaluote 2008.4.17
hdft["header"]=Header("tomoyo","���� �Ǵ�","Tomoyo Sakagami","5��6�ա�5��11��","May 6th~May 11th");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(3.5),y(yLevel),"5��6��","top");
//----------
box[1]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="";
CmtOption="-����˵��";
CmtEvents="10000000";
CmtEvntIru="�Ӳ���64HIT";
box[1][0]=Textbox_Selection_C(x(3.5),y(yLevel),"����֮��Ĵ���","1",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"����֮��Ĵ���",0);
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Option(x(2.5),y(yLevel),"����˵��");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Option(x(4.5),y(yLevel),"���ֳ�Ĭ�������Ǵ�����");
line[line.length]=Link(box[2][1],box[1][0]);
//----------
box[3]=new Array();
yLevel+=3;
box[3][0]=Textbox_Condition(x(3.5),y(yLevel),"6�գ�ϣ�����Ǵ��Ŀ����ܳ�����ȥ");
line[line.length]=Link(box[3][0],box[2][0]);
line[line.length]=Link(box[3][0],box[2][1]);
//----------
box[4]=new Array();
yLevel+=3;
box[4][0]=Textbox_Selection(x(2.5),y(yLevel),"������ȥ�ǲ��е�");
line[line.length]=Link(box[4][0],box[3][0]);
box[4][1]=Textbox_Selection(x(4.5),y(yLevel),"������������ȥ");
line[line.length]=Link(box[4][1],box[3][0]);
//----------
box[5]=new Array();
yLevel+=2;
box[5][0]=Textbox_Selection(x(2.5),y(yLevel),"���洺ԭ��Ҫ��");
line[line.length]=Link(box[5][0],box[4][0]);
//----------
box[6]=new Array();
yLevel+=3;
box[6][0]=Textbox_Option(x(1.5),y(yLevel),"����","l|�Ǵ�");
line[line.length]=Link(box[6][0],box[5][0]);
box[6][1]=Textbox_Option(x(3.5),y(yLevel),"�õ�","r|�Ǵ�");
line[line.length]=Link(box[6][1],box[5][0]);
//----------
box[7]=new Array();
yLevel+=2;
box[7][0]=Textbox_Date(x(1.5),y(yLevel),"5��11��","bottom");
line[line.length]=Link(box[7][0],box[6][0]);
//----------
box[8]=new Array();
yLevel+=1;
box[8][0]=Textbox_Quit(x(3.5),y(yLevel),"�Ǵ� Bad Ending");
line[line.length]=Link(box[8][0],box[6][1]);
line[line.length]=Link(box[8][0],box[4][1]);
box[9]=new Array();
yLevel+=5;
box[9][0]=Textbox_Date(x(4),y(yLevel),"5��11��","top");
//----------
box[10]=new Array();
yLevel+=2;
CmtSummery="��ԭ�ٴα��Ǵ��߷��ڿ��У�����Ҳ������";
CmtSelect="ѡ��[�߻�ȥ]�������Ǵ����������64HIT��";
CmtCaution="";
CmtOption="-�߻�ȥ";
CmtEvents="10000000";
CmtEvntIru="64HIT�����ѡ";
box[10][0]=Textbox_Selection_C(x(4),y(yLevel),"���߷ɹ����Ĵ�ԭ","1",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"���߷ɹ����Ĵ�ԭ",0);
line[line.length]=Link(box[10][0],box[9][0]);
//----------
box[11]=new Array();
yLevel+=3;
box[11][0]=Textbox_Option(x(3),y(yLevel),"�߻�ȥ");
line[line.length]=Link(box[11][0],box[10][0]);
box[11][1]=Textbox_Option(x(5),y(yLevel),"�ܿ�");
line[line.length]=Link(box[11][1],box[10][0]);
//----------
box[12]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="�����Ǵ���·����������顣������11����ǰ��û��ѡ���֧�����ݱ仯�빫����·���Ǵ����ڶ��֧��ѡ���йأ���Щ��ط�֧���Ǵ�64HITͼ�궼������ʾ���Ǵ�64HIT��ع�����μ�P30��";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[12][0]=Textbox_Option_C(x(3),y(yLevel),"�Ǵ�64HIT","2",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"�Ǵ�64HIT",0);
box[12][0].addLink("p29_retTY64");
box[12][0].addClick(function(){gotopage(30,"p30_TY64")});
line[line.length]=Link(box[12][0],box[11][0]);
//----------
box[13]=new Array();
yLevel+=3;
box[13][0]=Textbox_Condition(x(4),y(yLevel),"16�գ�����������������֦");
line[line.length]=Link(box[13][0],box[12][0]);
line[line.length]=Link(box[13][0],box[11][1]);
//----------
box[14]=new Array();
yLevel+=3;
box[14][0]=Textbox_Selection(x(3),y(yLevel),"�����");
line[line.length]=Link(box[14][0],box[13][0]);
box[14][1]=Textbox_Selection(x(5),y(yLevel),"Ŀ������ȥ","r|+δ����");
line[line.length]=Link(box[14][1],box[13][0]);
//----------
box[15]=new Array();
yLevel+=2;
CmtSummery="����֦��è�����˲�������Ҳ����Ѱ�ң����ѵ��׿��������Ǵ�ȴ����һ�ԡ�";
CmtSelect="���֮ǰ��ɹ�����֦�ߣ����GOOD ENDING��������18�յķ�֧{����������������֦}��ѡ��[�����]����ѡ���֧�ͻ���֡�ѡ��[��æ]�����Եõ�����֦�ġ��⡱��";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[15][0]=Textbox_Selection_C(x(3),y(yLevel),"������֦������è","3",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"������֦������è",0);
line[line.length]=Link(box[15][0],box[14][0]);
//----------
box[16]=new Array();
yLevel+=3;
box[16][0]=Textbox_Option(x(2),y(yLevel),"��æ");
line[line.length]=Link(box[16][0],box[15][0]);
box[16][1]=Textbox_Option(x(4),y(yLevel),"�ܾ�");
line[line.length]=Link(box[16][1],box[15][0]);
//----------
box[17]=new Array();
yLevel+=2;
box[17][0]=Textbox_Condition(x(2),y(yLevel),"��ɹ�����֦��");
line[line.length]=Link(box[17][0],box[16][0]);
//----------
box[18]=new Array();
yLevel+=3;
box[18][0]=Textbox_Selection(x(1),y(yLevel),"��");
line[line.length]=Link(box[18][0],box[17][0]);
box[18][1]=Textbox_Selection(x(3),y(yLevel),"��");
line[line.length]=Link(box[18][1],box[17][0]);
//----------
box[19]=new Array();
yLevel+=2;
box[19][0]=Textbox_Option(x(1),y(yLevel),"����֦���⡱���");
line[line.length]=Link(box[19][0],box[18][0]);
//----------
box[20]=new Array();
yLevel+=5;
box[20][0]=Textbox_Option(x(4),y(yLevel),"�Ǵ����⡱���");
line[line.length]=Link(box[20][0],Point(linx(3),liny(-1)),Point(linx(2),liny(-2)),box[19][0]);
line[line.length]=Link(box[20][0],Point(linx(3),liny(-1)),Point(linx(2),liny(-2)),box[18][1]);
line[line.length]=Link(box[20][0],Point(linx(3),liny(-1)),box[16][1]);
line[line.length]=Link(box[20][0],box[14][1]);
//----------
box[21]=new Array();
yLevel+=2;
box[21][0]=Textbox_Quit(x(4),y(yLevel),"�Ǵ� Good Ending");
line[line.length]=Link(box[21][0],box[20][0]);

hdft["footer"]=Footer(liny(1),29);