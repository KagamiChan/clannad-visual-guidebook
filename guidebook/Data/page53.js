// CVG HTML Data Page53 Done By Shakugan_No_Kaluote 2008.4.19
hdft["header"]=Header("nagisa","�ź� �/�Ҵ� ����","Nagisa Furukawa / Toshio Yukimura","5��1�ա�5��10��","May 1st~May 10th");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(3),y(yLevel),"4��29��","top");
//----------
box[1]=new Array();
yLevel+=2;
box[1][0]=Textbox_Condition(x(3),y(yLevel),"26�գ�ǰ��̽�׵�ѿ��");
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Selection(x(1),y(yLevel),"�õ�");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Selection(x(5),y(yLevel),"�Լ�һ����ȥ��","r|+δ����");
line[line.length]=Link(box[2][1],box[1][0]);
//----------
box[3]=new Array();
yLevel+=2;
box[3][0]=Textbox_Condition(x(1),y(yLevel),"28�գ�����ļƻ�����");
line[line.length]=Link(box[3][0],box[2][0]);
box[3][1]=Textbox_Condition(x(5),y(yLevel),"28�գ������ϰ���뷨");
line[line.length]=Link(box[3][1],box[2][1]);
//----------
box[4]=new Array();
yLevel+=3;
box[4][0]=Textbox_Selection(x(0),y(yLevel),"������ѿ����","l|+δ����");
line[line.length]=Link(box[4][0],box[3][0]);
box[4][1]=Textbox_Selection(x(2),y(yLevel),"������ϰ");
line[line.length]=Link(box[4][1],box[3][0]);
box[4][2]=Textbox_Selection(x(4),y(yLevel),"��ϰ","l|+δ����");
line[line.length]=Link(box[4][2],box[3][1]);
box[4][3]=Textbox_Selection(x(6),y(yLevel),"��Բ�");
line[line.length]=Link(box[4][3],box[3][1]);
//----------
box[5]=new Array();
yLevel+=2;
box[5][0]=Textbox_Condition(x(0),y(yLevel),"27�գ���æ�������");
line[line.length]=Link(box[5][0],box[4][0]);
CmtSummery="";
CmtSelect="{���ӡ��⡱��ʧ�¼���������}������ɹ������ߣ���ɷ���TRUE ENDING���߷���GOOD ENDING���������ٻ��һ�š��⡱���Լ�֮ǰû�д��������ӡ��⡱��ʧ�¼��������¼�ֻ�ܴ���һ�Σ���";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[5][1]=Textbox_Condition_C(x(6),y(yLevel),"���Ϸ��ӡ��⡱��ʧ�¼���������","1",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"���Ϸ��ӡ��⡱��ʧ�¼���������",0);
line[line.length]=Link(box[5][1],box[4][3]);
//----------
box[6]=new Array();
yLevel+=3;
box[6][0]=Textbox_Selection(x(0),y(yLevel),"����");
line[line.length]=Link(box[6][0],box[5][0]);
box[6][1]=Textbox_Selection(x(2),y(yLevel),"����");
line[line.length]=Link(box[6][1],box[5][0]);
box[6][2]=Textbox_Selection(x(4),y(yLevel),"��");
line[line.length]=Link(box[6][2],box[5][1]);
box[6][3]=Textbox_Selection(x(6),y(yLevel),"��");
line[line.length]=Link(box[6][3],box[5][1]);
//----------
box[7]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[7][0]=Textbox_Condition_C(x(0),y(yLevel),"���Ϸ��ӡ��⡱��ʧ�¼���������","1",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"",0);
line[line.length]=Link(box[7][0],box[6][0]);
CmtSummery="";
CmtSelect="";
CmtCaution="�ź�������������¼���������29�����磬��AFTER STORY�����ش�Ӱ�졣�õõ���һ�š��⡱Ϊ��˯�з�����Ը�����⡱�����������1��������AFTER STORY�л�÷��Ӻ͹��ӵġ��⡱���Ӷ����TRUE ENDING�ı�Ҫ������";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[7][1]=Textbox_Option_C(x(6),y(yLevel),"���ӡ��⡱��ʧ�¼�","2",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"���ӡ��⡱��ʧ�¼�",0);
line[line.length]=Link(box[7][1],box[6][3]);
//----------
box[8]=new Array();
yLevel+=3;
box[8][0]=Textbox_Selection(x(0),y(yLevel),"��");
line[line.length]=Link(box[8][0],box[7][0]);
box[8][1]=Textbox_Selection(x(2),y(yLevel),"��");
line[line.length]=Link(box[8][1],box[7][0]);
//----------
box[9]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[9][0]=Textbox_Option_C(x(0),y(yLevel),"���ӡ��⡱��ʧ�¼�","2",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"",0);
line[line.length]=Link(box[9][0],box[8][0]);
//----------
box[10]=new Array();
yLevel+=3;
box[10][0]=Textbox_Selection(x(1),y(yLevel),"���ֵľٶ�");
line[line.length]=Link(box[10][0],box[9][0]);
line[line.length]=Link(box[10][0],box[8][1]);
//----------
box[11]=new Array();
yLevel+=3;
box[11][0]=Textbox_Option(x(0),y(yLevel),"����������ô����");
line[line.length]=Link(box[11][0],box[10][0]);
box[11][1]=Textbox_Option(x(2),y(yLevel),"��������һ��");
line[line.length]=Link(box[11][1],box[10][0]);
//----------
box[12]=new Array();
yLevel+=4;
box[12][0]=Textbox_Date(x(3),y(yLevel),"4��30��","bottom");
line[line.length]=Link(box[12][0],Point(linx(1),liny(-1)),box[11][0]);
line[line.length]=Link(box[12][0],Point(linx(1),liny(-1)),box[11][1]);
line[line.length]=Link(box[12][0],Point(linx(3),liny(-14)),box[6][1]);
line[line.length]=Link(box[12][0],Point(linx(5),liny(-12)),box[6][2]);
line[line.length]=Link(box[12][0],Point(linx(5),liny(-12)),box[7][1]);
line[line.length]=Link(box[12][0],Point(linx(3),liny(-19)),box[4][1]);
line[line.length]=Link(box[12][0],Point(linx(3),liny(-19)),box[4][2]);
//----------
box[13]=new Array();
yLevel+=5;
box[13][0]=Textbox_Date(x(3.5),y(yLevel),"4��30��","top");
//----------
box[14]=new Array();
yLevel+=2;
box[14][0]=Textbox_Option(x(3.5),y(yLevel),"3��3������������");
box[14][0].addLink("p53_ret33BB2");
box[14][0].addClick(function(){gotopage(58,"p58_33BB2")});
line[line.length]=Link(box[14][0],box[13][0]);
//----------
box[15]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="{���������Ի�ʤ������}��3��3��������һ���ͣ����������뵽�ӡ��Ǵ�������֦����������Ұ���е�һλ��Ϊ������顣3��3��������ع�����μ�P56��P58��<br>���뵽��Ϊ�������󣬽������ķ�֧{���һ������}���ֵ�ѡ��Ϊ[���һ�����]��[���һ�����]��[���һ�����]���ǲ���Ķ���һ��ѡ����������������ͬ��[���һ����Ǵ�/����֦/����/��Ұ����]����";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[15][0]=Textbox_Condition_C(x(3.5),y(yLevel),"�������������ܻ�ʤ������","1",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"�������������ܻ�ʤ������",0);
line[line.length]=Link(box[15][0],box[14][0]);
//----------
box[16]=new Array();
yLevel+=3;
box[16][0]=Textbox_Selection(x(2.5),y(yLevel),"��");
line[line.length]=Link(box[16][0],box[15][0]);
box[16][1]=Textbox_Selection(x(4.5),y(yLevel),"��");
line[line.length]=Link(box[16][1],box[15][0]);
//----------
box[17]=new Array();
yLevel+=2;
box[17][0]=Textbox_Selection(x(2.5),y(yLevel),"���һ������");
line[line.length]=Link(box[17][0],box[16][0]);
//----------
box[18]=new Array();
yLevel+=3;
box[18][0]=Textbox_Option(x(1.5),y(yLevel),"���һ�����","l|�|-�Ҵ�");
line[line.length]=Link(box[18][0],box[17][0]);
box[18][1]=Textbox_Option(x(3.5),y(yLevel),"���һ�����","r|-�Ҵ�|�");
line[line.length]=Link(box[18][1],box[17][0]);
//----------
box[19]=new Array();
yLevel+=2;
box[19][0]=Textbox_Date(x(1.5),y(yLevel),"5��1��","bottom");
line[line.length]=Link(box[19][0],box[18][0]);
//----------
box[20]=new Array();
yLevel+=1;
CmtSummery="";
CmtSelect="{29�գ��ڹź��������������}����26�գ��ڷ�֧{ǰ��̽�׵�ѿ��}ѡ��[�õ�]��27�գ��ڷ�֧{��æ�������}ѡ��[����]�Լ���29�յķ�֧{����ļƻ�����}��ѡ��[������ѿ����]����δ���������֧��������29������Ĺź�������������ӡ�Ҳ������{ǰ��̽�׵�ѿ��}ѡ��[�Լ�һ����ȥ��]����δ���������֧��������28�յķ�֧{�����ϰ���뷨}��ѡ��[��Բ�]��ͬ�����ǵ�������";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[20][0]=Textbox_Condition_C(x(4.5),y(yLevel),"29�գ��ź������ǰ��������","2",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"29�գ��ź������ǰ��������",0);
line[line.length]=Link(box[20][0],box[16][1]);
line[line.length]=Link(box[20][0],box[18][1]);
//----------
box[21]=new Array();
yLevel+=3;
box[21][0]=Textbox_Selection(x(2.5),y(yLevel),"��");
line[line.length]=Link(box[21][0],box[20][0]);
box[21][1]=Textbox_Selection(x(4.5),y(yLevel),"��");
line[line.length]=Link(box[21][1],box[20][0]);
//----------
box[22]=new Array();
yLevel+=2;
box[22][0]=Textbox_Option(x(2.5),y(yLevel),"�Ҵ塰�⡱���");
line[line.length]=Link(box[22][0],box[21][0]);
box[22][1]=Textbox_Quit(x(4.5),y(yLevel),"� Bad Ending");
line[line.length]=Link(box[22][1],box[21][1]);
//----------
box[23]=new Array();
yLevel+=2;
box[23][0]=Textbox_Quit(x(2.5),y(yLevel),"�Ҵ� Good Ending");
line[line.length]=Link(box[23][0],box[22][0]);























hdft["footer"]=Footer(liny(1),53);