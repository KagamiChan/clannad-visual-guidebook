// CVG HTML Data Page36 Done By goodbest 2008.4.18
hdft["header"]=Header("fujibayashi","���� ��/���� �","Kyou Fujibayashi/Ryou Fujibayashi","5��7��","May 7th");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(3.5),y(yLevel),"5��7��","top");
//----------
box[1]=new Array();
yLevel+=2;
CmtSummery="�о���ֵ���Ҳ�ڷ�ѧ��ǰȥ��ͥ���������������������ԭ��ס�";
CmtSelect="ѡ��[�ɱ���ȥ]��ͨ��һϵ��������֧�󣬽�����GOOD ENDING��ѡ��[�߿�]����δͨ����һ��������֧������13�ս���BAD ENDING��";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[1][0]=Textbox_Selection_C(x(3.5),y(yLevel),"����ԭ���","1",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"����ԭ���",0);
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Option(x(2.5),y(yLevel),"�ɱ���ȥ","l|��");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Option(x(4.5),y(yLevel),"�߿�","r|��");
line[line.length]=Link(box[2][1],box[1][0]);
//----------
box[3]=new Array();
yLevel+=2;
box[3][0]=Textbox_Condition(x(2.5),y(yLevel),"28�գ�ϲ��Ů��������");
line[line.length]=Link(box[3][0],box[2][0]);
//----------
box[4]=new Array();
yLevel+=3;
box[4][0]=Textbox_Selection(x(1.5),y(yLevel),"ϲ����ͷ��");
line[line.length]=Link(box[4][0],box[3][0]);
box[4][1]=Textbox_Selection(x(3.5),y(yLevel),"ϲ����ͷ��");
line[line.length]=Link(box[4][1],box[3][0]);
//----------
box[5]=new Array();
yLevel+=2;
box[5][0]=Textbox_Condition(x(1.5),y(yLevel),"3�գ��ӵ���ͻ����");
line[line.length]=Link(box[5][0],box[4][0]);
//----------
box[6]=new Array();
yLevel+=3;
box[6][0]=Textbox_Selection(x(1.5),y(yLevel),"��ϰ���Կ�");
line[line.length]=Link(box[6][0],box[5][0]);
box[6][1]=Textbox_Selection(x(3.5),y(yLevel),"Ĭ�������ؿ�����");
line[line.length]=Link(box[6][1],box[5][0]);
//----------
box[7]=new Array();
yLevel+=2;
box[7][0]=Textbox_Condition(x(1.5),y(yLevel),"4�գ����䵱ʱ飵�ѡ��");
line[line.length]=Link(box[7][0],box[6][0]);
//----------
box[8]=new Array();
yLevel+=3;
box[8][0]=Textbox_Selection(x(1.5),y(yLevel),"��ˮ��");
line[line.length]=Link(box[8][0],box[7][0]);
box[8][1]=Textbox_Selection(x(3.5),y(yLevel),"̹ɣ��");
line[line.length]=Link(box[8][1],box[7][0]);
//----------
box[9]=new Array();
yLevel+=2;
box[9][0]=Textbox_Condition(x(1.5),y(yLevel),"5�գ�������������");
line[line.length]=Link(box[9][0],box[8][0]);
//----------
box[10]=new Array();
yLevel+=3;
box[10][0]=Textbox_Selection(x(1.5),y(yLevel),"����");
line[line.length]=Link(box[10][0],box[9][0]);
box[10][1]=Textbox_Selection(x(3.5),y(yLevel),"������");
line[line.length]=Link(box[10][1],box[9][0]);
//----------
box[11]=new Array();
yLevel+=2;
box[11][0]=Textbox_Option(x(1.5),y(yLevel),"�ӡ��⡱���");
line[line.length]=Link(box[11][0],box[10][0]);
//----------
box[12]=new Array();
yLevel+=1;
box[12][0]=Textbox_Quit(x(3.5),y(yLevel),"���� BAD ENDING");
line[line.length]=Link(box[12][0],box[10][1]);
line[line.length]=Link(box[12][0],Point(linx(4.5),liny(-5)),box[8][1]);
line[line.length]=Link(box[12][0],Point(linx(4.5),liny(-10)),box[6][1]);
line[line.length]=Link(box[12][0],Point(linx(4.5),liny(-15)),box[4][1]);
line[line.length]=Link(box[12][0],box[2][1]);
//----------
box[13]=new Array();
yLevel+=1;
box[13][0]=Textbox_Quit(x(1.5),y(yLevel),"�� GOOD ENDING");
line[line.length]=Link(box[13][0],box[11][0]);

hdft["footer"]=Footer(liny(1),36);