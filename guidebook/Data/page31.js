// CVG HTML Data Page31 Done By Shakugan_No_Kaluote 2008.4.18
hdft["header"]=Header("yukine","���� �м���","Yukine Miyazawa","4��24�ա��м���","April 24th~Yukine");

var yLevel=0;

//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(3),y(yLevel),"4��24��","top");
//----------
box[1]=new Array();
yLevel+=2;
box[1][0]=Textbox_Selection(x(3),y(yLevel),"�м����Ĳֿ�����");
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Option(x(2),y(yLevel),"��");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Option(x(4),y(yLevel),"����");
line[line.length]=Link(box[2][1],box[1][0]);
//----------
box[3]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="�����м�����·����������顣������24�����磬���ݼ�ѡ���֧���ֵı仯�빫����·�������ĳЩ��֧ѡ���йأ�ͬʱҲ���м����������о��������йأ���Щ��ط�֧���м���������/�����ֿ��¼�ͼ�궼������ʾ�������ֿ��¼���ع�����μ�P33��";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[3][0]=Textbox_Option_C(x(2),y(yLevel),"�����ֿ��¼�","1",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"�����ֿ��¼�",0);
box[3][0].addLink("p31_retGYM");
box[3][0].addClick(function(){gotopage(33,"p33_GYM")});
line[line.length]=Link(box[3][0],box[2][0]);
//----------
box[4]=new Array();
yLevel+=3;
box[4][0]=Textbox_Date(x(3),y(yLevel),"�м���","bottom");
line[line.length]=Link(box[4][0],box[3][0]);
line[line.length]=Link(box[4][0],box[2][1]);
//----------
box[5]=new Array();
yLevel+=5;
box[5][0]=Textbox_Date(x(4),y(yLevel),"�м���","top");
//----------
box[6]=new Array();
yLevel+=2;
box[6][0]=Textbox_Selection(x(4),y(yLevel),"����ƣ�͵�����");
line[line.length]=Link(box[6][0],box[5][0]);
//----------
box[7]=new Array();
yLevel+=3;
box[7][0]=Textbox_Option(x(3),y(yLevel),"��������","l|�м���");
line[line.length]=Link(box[7][0],box[6][0]);
box[7][1]=Textbox_Option(x(5),y(yLevel),"������","r|�м���");
line[line.length]=Link(box[7][1],box[6][0]);
//----------
box[8]=new Array();
yLevel+=2;
box[8][0]=Textbox_Selection(x(3),y(yLevel),"�ܹ������ĳ���");
line[line.length]=Link(box[8][0],box[7][0]);
//----------
box[9]=new Array();
yLevel+=3;
box[9][0]=Textbox_Option(x(2),y(yLevel),"��","l|�м���");
line[line.length]=Link(box[9][0],box[8][0]);
box[9][1]=Textbox_Option(x(4),y(yLevel),"����","r|�м���");
line[line.length]=Link(box[9][1],box[8][0]);
//----------
box[10]=new Array();
yLevel+=2;
box[10][0]=Textbox_Selection(x(2),y(yLevel),"���ӵ�����");
line[line.length]=Link(box[10][0],box[9][0]);
//----------
box[11]=new Array();
yLevel+=3;
box[11][0]=Textbox_Option(x(1),y(yLevel),"��������˯��ȥ","l|�м���");
line[line.length]=Link(box[11][0],box[10][0]);
box[11][1]=Textbox_Option(x(3),y(yLevel),"������","r|�м���");
line[line.length]=Link(box[11][1],box[10][0]);
//----------
box[12]=new Array();
yLevel+=2;
box[12][0]=Textbox_Option(x(1),y(yLevel),"�м������⡱���");
line[line.length]=Link(box[12][0],box[11][0]);
//----------
box[13]=new Array();
yLevel+=1;
box[13][0]=Textbox_Quit(x(4),y(yLevel),"���� Bad Ending");
line[line.length]=Link(box[13][0],box[11][1]);
line[line.length]=Link(box[13][0],Point(linx(5),liny(-5)),box[9][1]);
line[line.length]=Link(box[13][0],box[7][1]);
//----------
box[14]=new Array();
yLevel+=1;
box[14][0]=Textbox_Quit(x(1),y(yLevel),"�м��� Good Ending");
line[line.length]=Link(box[14][0],box[12][0]);

hdft["footer"]=Footer(liny(1),31);