// CVG HTML Data Page45 Done By Shakugan_No_Kaluote 2008.4.20
hdft["header"]=Header("fuuko","���� ����","Fuuko Ibuki","5��2�ա�5��11��","May 2nd~May 11th");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(3),y(yLevel),"5��2��","top");
//----------
box[1]=new Array();
yLevel+=2;
box[1][0]=Textbox_Selection(x(3),y(yLevel),"��ʦ��ѡ��");
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Option(x(2),y(yLevel),"ȥ�ұ���");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Option(x(4),y(yLevel),"����˵��");
line[line.length]=Link(box[2][1],box[1][0]);
//----------
box[3]=new Array();
yLevel+=3;
box[3][0]=Textbox_Date(x(3),y(yLevel),"5��3��","bottom");
line[line.length]=Link(box[3][0],box[2][0]);
line[line.length]=Link(box[3][0],box[2][1]);
//----------
box[4]=new Array();
yLevel+=5;
box[4][0]=Textbox_Date(x(3),y(yLevel),"5��3��","top");
//----------
box[5]=new Array();
yLevel+=2;
box[5][0]=Textbox_Condition(x(3),y(yLevel),"2�գ���ʦ��ѡ��");
line[line.length]=Link(box[5][0],box[4][0]);
//----------
box[6]=new Array();
yLevel+=3;
box[6][0]=Textbox_Selection(x(2),y(yLevel),"ȥ�ұ���");
line[line.length]=Link(box[6][0],box[5][0]);
box[6][1]=Textbox_Selection(x(4),y(yLevel),"����˵��");
line[line.length]=Link(box[6][1],box[5][0]);
//----------
box[7]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="����������·����������顣������3�����磬����������2�շ����߷�֧��ѡ���йء�����ѡ�����Ӱ����鷢չ���ر��ڿν�ʦ��ѡ��ع�����μ�P47��";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[7][0]=Textbox_Option_C(x(2),y(yLevel),"�ر��ڿν�ʦ��ѡ","1",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"�ر��ڿν�ʦ��ѡ",0);
box[7][0].addLink("p45_retSTCHR");
box[7][0].addClick(function(){gotopage(47,"p47_STCHR")});
line[line.length]=Link(box[7][0],box[6][0]);
//----------
box[8]=new Array();
yLevel+=3;
box[8][0]=Textbox_Date(x(3),y(yLevel),"5��11��","bottom");
line[line.length]=Link(box[8][0],box[7][0]);
line[line.length]=Link(box[8][0],box[6][1]);
//----------
box[9]=new Array();
yLevel+=5;
box[9][0]=Textbox_Date(x(3),y(yLevel),"5��11��","top");
//----------
box[10]=new Array();
yLevel+=2;
box[10][0]=Textbox_Selection(x(3),y(yLevel),"��˯�ķ���");
line[line.length]=Link(box[10][0],box[9][0]);
//----------
box[11]=new Array();
yLevel+=3;
box[11][0]=Textbox_Option(x(2),y(yLevel),"������","l|����");
line[line.length]=Link(box[11][0],box[10][0]);
box[11][1]=Textbox_Option(x(4),y(yLevel),"��������","r|����");
line[line.length]=Link(box[11][1],box[10][0]);
//----------
box[12]=new Array();
yLevel+=3;
box[12][0]=Textbox_Date(x(3),y(yLevel),"����","bottom");
box[12][0].addTitle("���ת����46ҳ");
box[12][0].addClick(function(){gotopage(46)});
line[line.length]=Link(box[12][0],box[11][0]);
line[line.length]=Link(box[12][0],box[11][1]);

hdft["footer"]=Footer(liny(1),45);