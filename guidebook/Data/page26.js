// CVG HTML Data Page26 Done By Shakugan_No_Kaluote 2008.4.16
hdft["header"]=Header("misae","���� ����֦","Misae Sagara","4��21��","April 21st");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(3),y(yLevel),"4��21��","top");
//----------
box[1]=new Array();
yLevel+=2;
CmtSummery="��Ҳ�ٴ��������֦�ķ��䣬�����������Լ��ĸ��顣";
CmtSelect="�˴�����������֧��һ���������ͬ��ѡ���[����]��[ս�����ܸ�]��[����]��[Ϊ�Ҳ���]��[�����е�ζ������]����ͼ�����̵ı�ﲻͬ���ǣ���{ϲ������֦�����ɣ�һ��}��{ϲ������֦�����ɣ�һ��}ѡ����[ս�����ܸ�]��[����]���������ķ�֧������ֶ�����ֱ��Bad Ending������һ����֧�У���һ��ѡ���˵�ѡ���[Ϊ�Ҳ���]��[�����е�ζ������]���������������ֻ֧�а�˳��ѡ��[����]��[Ϊ�Ҳ���]��[�����е�ζ������]���ܴ������֦Good Ending�����򣬽���������֧�����󣬽���Bad Ending��";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[1][0]=Textbox_Selection_C(x(3),y(yLevel),"ϲ������֦�����ɣ�һ��","1",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"ϲ������֦�����ɣ�һ����������",0);
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Option(x(1),y(yLevel),"����","l|����֦");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Option(x(3),y(yLevel),"ս�����ܸ�","l|-����֦");
line[line.length]=Link(box[2][1],box[1][0]);
box[2][2]=Textbox_Option(x(5),y(yLevel),"����","r|����֦");
line[line.length]=Link(box[2][2],box[1][0]);
//----------
box[3]=new Array();
yLevel+=3;
box[3][0]=Textbox_Quit(x(4),y(yLevel),"���� Bad Ending");
line[line.length]=Link(box[3][0],box[2][1]);
line[line.length]=Link(box[3][0],box[2][2]);
//----------
box[4]=new Array();
yLevel+=1;
box[4][0]=Textbox_Selection(x(1),y(yLevel),"ϲ������֦�����ɣ�����");
line[line.length]=Link(box[4][0],box[2][0]);
//----------
box[5]=new Array();
yLevel+=3;
box[5][0]=Textbox_Option(x(1),y(yLevel),"Ϊ�Ҳ���","l|����֦");
line[line.length]=Link(box[5][0],box[4][0]);
box[5][1]=Textbox_Option(x(3),y(yLevel),"ս�����ܸ�","l|-����֦");
line[line.length]=Link(box[5][1],box[4][0]);
box[5][2]=Textbox_Option(x(5),y(yLevel),"����","r|����֦");
line[line.length]=Link(box[5][2],box[4][0]);
//----------
box[6]=new Array();
yLevel+=3;
box[6][0]=Textbox_Quit(x(4),y(yLevel),"���� Bad Ending");
line[line.length]=Link(box[6][0],box[5][1]);
line[line.length]=Link(box[6][0],box[5][2]);
//----------
box[7]=new Array();
yLevel+=1;
box[7][0]=Textbox_Selection(x(1),y(yLevel),"ϲ������֦�����ɣ�����");
line[line.length]=Link(box[7][0],box[5][0]);
//----------
box[8]=new Array();
yLevel+=3;
box[8][0]=Textbox_Option(x(1),y(yLevel),"�����е�ζ������","l|����֦");
line[line.length]=Link(box[8][0],box[7][0]);
box[8][1]=Textbox_Option(x(3),y(yLevel),"ս�����ܸ�","l|-����֦");
line[line.length]=Link(box[8][1],box[7][0]);
box[8][2]=Textbox_Option(x(5),y(yLevel),"����","r|����֦");
line[line.length]=Link(box[8][2],box[7][0]);
//----------
box[9]=new Array();
yLevel+=2;
box[9][0]=Textbox_Quit(x(1),y(yLevel),"����֦ Good Ending");
line[line.length]=Link(box[9][0],box[8][0]);
//----------
box[10]=new Array();
yLevel+=1;
box[10][0]=Textbox_Quit(x(4),y(yLevel),"���� Bad Ending");
line[line.length]=Link(box[10][0],box[8][1]);
line[line.length]=Link(box[10][0],box[8][2]);

hdft["footer"]=Footer(liny(1),26);