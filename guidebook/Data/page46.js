// CVG HTML Data Page46 Done By Shakugan_No_Kaluote 2008.4.20
hdft["header"]=Header("fuuko","���� ����","Fuuko Ibuki","����","Fuuko");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(3),y(yLevel),"����","top");
//----------
box[1]=new Array();
yLevel+=2;
box[1][0]=Textbox_Condition(x(3),y(yLevel),"24�գ���Ҳ��Կ������");
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Selection(x(1),y(yLevel),"������ע������","l|+δ����");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Selection(x(5),y(yLevel),"������ס��");
line[line.length]=Link(box[2][1],box[1][0]);
//----------
box[3]=new Array();
yLevel+=2;
box[3][0]=Textbox_Selection(x(1),y(yLevel),"ҹ������ᣨһ��");
line[line.length]=Link(box[3][0],box[2][0]);
box[3][1]=Textbox_Selection(x(5),y(yLevel),"ҹ������ᣨ����");
line[line.length]=Link(box[3][1],box[2][1]);
//----------
box[4]=new Array();
yLevel+=3;
box[4][0]=Textbox_Option(x(0),y(yLevel),"���Խ�����");
line[line.length]=Link(box[4][0],box[3][0]);
box[4][1]=Textbox_Option(x(2),y(yLevel),"���Լ�����ô������");
line[line.length]=Link(box[4][1],box[3][0]);
box[4][2]=Textbox_Option(x(4),y(yLevel),"����������","l|-����");
line[line.length]=Link(box[4][2],box[3][1]);
box[4][3]=Textbox_Option(x(6),y(yLevel),"���Լ�����ô������","r|-����");
line[line.length]=Link(box[4][3],box[3][1]);
//----------
box[5]=new Array();
yLevel+=2;
box[5][0]=Textbox_Quit(x(4),y(yLevel),"���� BAD ENDING");
line[line.length]=Link(box[5][0],box[4][2]);
//----------
box[6]=new Array();
yLevel+=1;
box[6][0]=Textbox_Condition(x(1),y(yLevel),"11�գ���˯�ķ���");
line[line.length]=Link(box[6][0],box[4][0]);
line[line.length]=Link(box[6][0],box[4][1]);
box[6][1]=Textbox_Condition(x(6),y(yLevel),"11�գ���˯�ķ���");
line[line.length]=Link(box[6][1],box[4][3]);
//----------
box[7]=new Array();
yLevel+=3;
box[7][0]=Textbox_Selection(x(0),y(yLevel),"������");
line[line.length]=Link(box[7][0],box[6][0]);
box[7][1]=Textbox_Selection(x(2),y(yLevel),"��������");
line[line.length]=Link(box[7][1],box[6][0]);
box[7][2]=Textbox_Selection(x(4),y(yLevel),"��������");
line[line.length]=Link(box[7][2],box[6][1]);
box[7][3]=Textbox_Selection(x(6),y(yLevel),"������");
line[line.length]=Link(box[7][3],box[6][1]);
//----------
box[8]=new Array();
yLevel+=3;
box[8][0]=Textbox_Condition(x(0),y(yLevel),"���ӣ�ҹ������ᣨһ��");
line[line.length]=Link(box[8][0],box[7][0]);
box[8][1]=Textbox_Quit(x(3),y(yLevel),"���� BAD ENDING");
line[line.length]=Link(box[8][1],box[7][1]);
line[line.length]=Link(box[8][1],box[7][2]);
//----------
box[9]=new Array();
yLevel+=3;
box[9][0]=Textbox_Selection(x(0),y(yLevel),"���Լ�����ô������");
line[line.length]=Link(box[9][0],box[8][0]);
box[9][1]=Textbox_Selection(x(2),y(yLevel),"���Խ�����");
line[line.length]=Link(box[9][1],box[8][0]);
//----------
box[10]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="�����24�յķ�֧{��Ҳ��Կ������}��ѡ��[������ס��]����侳�Ϊ���ˣ�����ֻ�ܴ�ɷ���GOOD ENDING���ο�������·24��ע��4������������£�23����25��������3����У�������������ӣ�23�գ�{�����п�������}��24�գ�{�������������������}��25�գ�{�����ϵ�N����������}����3����������һ��ѡ��[��ס��]���Ǵ�ɷ���GOOD ENDING�ı�Ҫ���������һ��Ҳû�н�ס������������BAD ENDING��<br>�����24�յķ�֧{��Ҳ��Կ������}��ѡ��[������ע������]��û�к�侳�Ϊ���ˣ�������Դ�ɷ���TRUE ENDING���ڷ���һ�µķ�֧{ҹ���У�ᣨһ��}ѡ��[���Խ�����]�������������23����25�վ�ֻ��2����У�������������ӵĿ��ܣ�25�յĻ�����ʧ����ͬ��������������һ��ѡ��[��ס��]�����ܴ�ɷ���TRUE ENDING/GOOD ENDING��";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[10][0]=Textbox_Condition_C(x(2),y(yLevel),"23�գ������п�������","1",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"23�գ������п�������",0);
line[line.length]=Link(box[10][0],box[9][1]);
//----------
box[11]=new Array();
yLevel+=3;
box[11][0]=Textbox_Selection(x(2),y(yLevel),"������","l|+δ����");
line[line.length]=Link(box[11][0],box[10][0]);
box[11][1]=Textbox_Selection(x(4),y(yLevel),"��ס��");
line[line.length]=Link(box[11][1],box[10][0]);
//----------
box[12]=new Array();
yLevel+=2;
box[12][0]=Textbox_Condition(x(2),y(yLevel),"24�գ��������������������");
line[line.length]=Link(box[12][0],box[11][0]);
box[12][1]=Textbox_Quit(x(4),y(yLevel),"���� TRUE ENDING");
line[line.length]=Link(box[12][1],box[11][1]);
//----------
box[13]=new Array();
yLevel+=3;
box[13][0]=Textbox_Selection(x(2),y(yLevel),"������","l|+δ����");
line[line.length]=Link(box[13][0],box[12][0]);
box[13][1]=Textbox_Selection(x(4),y(yLevel),"��ס��");
line[line.length]=Link(box[13][1],box[12][0]);
//----------
box[14]=new Array();
yLevel+=2;
box[14][0]=Textbox_Condition(x(2),y(yLevel),"25�գ������е�N����������");
line[line.length]=Link(box[14][0],box[13][0]);
box[14][1]=Textbox_Quit(x(4),y(yLevel),"���� TRUE ENDING");
line[line.length]=Link(box[14][1],box[13][1]);
//----------
box[15]=new Array();
yLevel+=3;
box[15][0]=Textbox_Selection(x(2),y(yLevel),"��ʱ������");
line[line.length]=Link(box[15][0],box[14][0]);
box[15][1]=Textbox_Selection(x(4),y(yLevel),"��ס��");
line[line.length]=Link(box[15][1],box[14][0]);
//----------
box[16]=new Array();
yLevel+=2;
box[16][0]=Textbox_Condition(x(0),y(yLevel),"23�գ������п�������");
line[line.length]=Link(box[16][0],box[8][0]);
box[16][1]=Textbox_Quit(x(2),y(yLevel),"���� BAD ENDING");
line[line.length]=Link(box[16][1],box[15][0]);
box[16][2]=Textbox_Quit(x(4),y(yLevel),"���� TRUE ENDING");
line[line.length]=Link(box[16][2],box[15][1]);
box[16][3]=Textbox_Condition(x(6),y(yLevel),"23�գ������п�������");
line[line.length]=Link(box[16][3],box[7][3]);
//----------
box[17]=new Array();
yLevel+=3;
box[17][0]=Textbox_Selection(x(0),y(yLevel),"������","l|+δ����");
line[line.length]=Link(box[17][0],box[16][0]);
box[17][1]=Textbox_Selection(x(2),y(yLevel),"��ס��");
line[line.length]=Link(box[17][1],box[16][0]);
box[17][2]=Textbox_Selection(x(4),y(yLevel),"��ס��");
line[line.length]=Link(box[17][2],box[16][3]);
box[17][3]=Textbox_Selection(x(6),y(yLevel),"������","r|+δ����");
line[line.length]=Link(box[17][3],box[16][3]);
//----------
box[18]=new Array();
yLevel+=3;
box[18][0]=Textbox_Condition(x(0),y(yLevel),"24�գ��������������������");
line[line.length]=Link(box[18][0],box[17][0]);
box[18][1]=Textbox_Quit(x(3),y(yLevel),"���� GOOD ENDING");
line[line.length]=Link(box[18][1],box[17][1]);
line[line.length]=Link(box[18][1],box[17][2]);
box[18][2]=Textbox_Condition(x(6),y(yLevel),"24�գ��������������������");
line[line.length]=Link(box[18][2],box[17][3]);
//----------
box[19]=new Array();
yLevel+=3;
box[19][0]=Textbox_Selection(x(0),y(yLevel),"������","l|+δ����");
line[line.length]=Link(box[19][0],box[18][0]);
box[19][1]=Textbox_Selection(x(2),y(yLevel),"��ס��");
line[line.length]=Link(box[19][1],box[18][0]);
box[19][2]=Textbox_Selection(x(4),y(yLevel),"��ס��");
line[line.length]=Link(box[19][2],box[18][2]);
box[19][3]=Textbox_Selection(x(6),y(yLevel),"������","r|+δ����");
line[line.length]=Link(box[19][3],box[18][2]);
//----------
box[20]=new Array();
yLevel+=2;
box[20][0]=Textbox_Quit(x(6),y(yLevel),"���� BAD ENDING");
line[line.length]=Link(box[20][0],box[19][3]);
//----------
box[21]=new Array();
yLevel+=1;
box[21][0]=Textbox_Condition(x(0),y(yLevel),"25�գ������е�N����������");
line[line.length]=Link(box[21][0],box[19][0]);
box[21][1]=Textbox_Quit(x(3),y(yLevel),"���� GOOD ENDING");
line[line.length]=Link(box[21][1],box[19][1]);
line[line.length]=Link(box[21][1],box[19][2]);
//----------
box[22]=new Array();
yLevel+=3;
box[22][0]=Textbox_Selection(x(0),y(yLevel),"��ʱ������");
line[line.length]=Link(box[22][0],box[21][0]);
box[22][1]=Textbox_Selection(x(2),y(yLevel),"��ס��");
line[line.length]=Link(box[22][1],box[21][0]);
//----------
box[23]=new Array();
yLevel+=2;
box[23][0]=Textbox_Quit(x(0),y(yLevel),"���� BAD ENDING");
line[line.length]=Link(box[23][0],box[22][0]);
box[23][1]=Textbox_Quit(x(2),y(yLevel),"���� GOOD ENDING");
line[line.length]=Link(box[23][1],box[22][1]);

hdft["footer"]=Footer(liny(1),46);