// CVG HTML Data Page42 Done By Ligueston 2008.4.17
hdft["header"]=Header("kotomi","һ֮�� ����","Kotomi Ichinose","5��5�ա�����","May 5th~Kotomi");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(4),y(yLevel),"5��5��","top");
//----------
box[1]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="";
CmtOption="-���";
CmtEvents="00000100";
CmtEvntIru="�����øж�����1��";
box[1][0]=Textbox_Selection_C(x(4),y(yLevel),"�����˵ļ���","1",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"�����˵ļ���",0);
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Option(x(3),y(yLevel),"��������");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Option(x(5),y(yLevel),"���");
line[line.length]=Link(box[2][1],box[1][0]);
//----------
box[3]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="��������һ����7�������øжȵĻ��᣺15�ջ�16�գ��ڷ�֧{ͼ��ݣ�����ֵ�Ů������Ա㵱}ѡ��[��]������ֻ�ܴ���һ�Σ���19�գ���֧{���������������}ѡ��[����������������]����֧{�������뿪���}ѡ��[��������ؼ�]��20�գ���֧{���������}ѡ��[����]��21�գ���֧{���������}ѡ��[���Զ�����һ��]��29�գ���֧{�����еİ���}ѡ��[���]�����գ���֧{�����˵ļ���}ѡ��[���]��<br>�˴�ʵ�ʲ����ж���ֻ��6�Σ����������һ�����⣬ץס�����������øжȵĻ���Ļ����Ͳ������������ܵ���BAD ENDING�ķ�֧��";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[3][0]=Textbox_Condition_C(x(3),y(yLevel),"�øжȴ���5","2",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"�øжȴ���5",0);
line[line.length]=Link(box[3][0],box[2][0]);
//----------
box[4]=new Array();
yLevel+=3;
box[4][0]=Textbox_Selection(x(2),y(yLevel),"��");
line[line.length]=Link(box[4][0],box[3][0]);
box[4][1]=Textbox_Selection(x(4),y(yLevel),"��");
line[line.length]=Link(box[4][1],box[3][0]);
//----------
box[5]=new Array();
yLevel+=2;
box[5][0]=Textbox_Selection(x(2),y(yLevel),"��ʿ������");
line[line.length]=Link(box[5][0],box[4][0]);
//----------
box[6]=new Array();
yLevel+=3;
box[6][0]=Textbox_Selection(x(1),y(yLevel),"����ʿ˵�Ļ�������","l|-����");
line[line.length]=Link(box[6][0],box[5][0]);
box[6][1]=Textbox_Selection(x(3),y(yLevel),"���ڻ��Ǳ��ֳ�Ĭ��","r|-����");
line[line.length]=Link(box[6][1],box[5][0]);
//----------
box[7]=new Array();
yLevel+=2;
box[7][0]=Textbox_Quit(x(1),y(yLevel),"���� BAD ENDDING");
line[line.length]=Link(box[7][0],box[6][0]);
//----------
box[8]=new Array();
yLevel+=1;
box[8][0]=Textbox_Date(x(4),y(yLevel),"5��8��","bottom");
line[line.length]=Link(box[8][0],box[6][1]);

line[line.length]=Link(box[8][0],Point(linx(5),liny(-5)),box[4][1]);
line[line.length]=Link(box[8][0],box[2][1]);
//----------
box[9]=new Array();
yLevel+=5;
box[9][0]=Textbox_Date(x(3.5),y(yLevel),"5��8��","top");
//----------
box[10]=new Array();
yLevel+=2;
box[10][0]=Textbox_Condition(x(3.5),y(yLevel),"23�գ�ѧУ�Ĺ㲥");
line[line.length]=Link(box[10][0],box[9][0]);
//----------
box[11]=new Array();
yLevel+=3;
box[11][0]=Textbox_Selection(x(2.5),y(yLevel),"ȥ�칫�ҿ���");
line[line.length]=Link(box[11][0],box[10][0]);
box[11][1]=Textbox_Selection(x(4.5),y(yLevel),"�ٵ�һ���");
line[line.length]=Link(box[11][1],box[10][0]);
//----------
box[12]=new Array();
yLevel+=2;
box[12][0]=Textbox_Selection(x(2.5),y(yLevel),"��ʦ��ѯ��");
line[line.length]=Link(box[12][0],box[11][0]);
//----------
box[13]=new Array();
yLevel+=3;
box[13][0]=Textbox_Option(x(1.5),y(yLevel),"Ϊʲô������أ�");
line[line.length]=Link(box[13][0],box[12][0]);
box[13][1]=Textbox_Option(x(3.5),y(yLevel),"����˵���ڽ�����");
line[line.length]=Link(box[13][1],box[12][0]);
//----------
box[14]=new Array();
yLevel+=4;
box[14][0]=Textbox_Date(x(3.5),y(yLevel),"����","bottom");
line[line.length]=Link(box[14][0],Point(linx(2.5),liny(-1)),box[13][0]);
line[line.length]=Link(box[14][0],Point(linx(2.5),liny(-1)),box[13][1]);
line[line.length]=Link(box[14][0],box[11][1]);
//----------
box[15]=new Array();
yLevel+=5;
box[15][0]=Textbox_Date(x(4),y(yLevel),"����","top");
//----------
box[16]=new Array();
yLevel+=2;
box[16][0]=Textbox_Selection(x(4),y(yLevel),"����������");
line[line.length]=Link(box[16][0],box[15][0]);
//----------
box[17]=new Array();
yLevel+=3;
box[17][0]=Textbox_Option(x(3),y(yLevel),"����","l|����");
line[line.length]=Link(box[17][0],box[16][0]);
box[17][1]=Textbox_Option(x(5),y(yLevel),"����","r|����");
line[line.length]=Link(box[17][1],box[16][0]);
//----------
box[18]=new Array();
yLevel+=2;
box[18][0]=Textbox_Selection(x(3),y(yLevel),"���ѵ�æµ");
line[line.length]=Link(box[18][0],box[17][0]);
//----------
box[19]=new Array();
yLevel+=3;
box[19][0]=Textbox_Option(x(2),y(yLevel),"��ο˵�����������","l|����");
line[line.length]=Link(box[19][0],box[18][0]);
box[19][1]=Textbox_Option(x(4),y(yLevel),"��ο˵��ֻ�ܷ����ˡ�","r|����");
line[line.length]=Link(box[19][1],box[18][0]);
//----------
box[20]=new Array();
yLevel+=2;
box[20][0]=Textbox_Selection(x(2),y(yLevel),"��ҹ��ִ��");
line[line.length]=Link(box[20][0],box[19][0]);
//----------
box[21]=new Array();
yLevel+=3;
box[21][0]=Textbox_Option(x(1),y(yLevel),"����","l|����");
line[line.length]=Link(box[21][0],box[20][0]);
box[21][1]=Textbox_Option(x(3),y(yLevel),"����","r|����");
line[line.length]=Link(box[21][1],box[20][0]);
//----------
box[22]=new Array();
yLevel+=2;
box[22][0]=Textbox_Option(x(1),y(yLevel),"�������⡱���");
line[line.length]=Link(box[22][0],box[21][0]);
//----------
box[23]=new Array();
yLevel+=1;
box[23][0]=Textbox_Quit(x(4),y(yLevel),"���� BAD ENDDING");
line[line.length]=Link(box[23][0],box[21][1]);
line[line.length]=Link(box[23][0],Point(linx(5),liny(-5)),box[19][1]);
line[line.length]=Link(box[23][0],box[17][1]);
//----------
box[24]=new Array();
yLevel+=1;
box[24][0]=Textbox_Quit(x(1),y(yLevel),"���� GOOD ENDDING");
line[line.length]=Link(box[24][0],box[22][0]);

hdft["footer"]=Footer(liny(1),42);