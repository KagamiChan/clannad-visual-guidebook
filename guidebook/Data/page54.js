// CVG HTML Data Page54 Done By Ligueston 2008.4.19
hdft["header"]=Header("nagisa","�ź� �/�Ҵ� ����","Nagisa Furukawa / Toshio Yukimura","5��1�ա�5��10��","May 1st~May 10th");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(3),y(yLevel),"5��1��","top");
//----------
box[1]=new Array();
yLevel+=2;
box[1][0]=Textbox_Selection(x(3),y(yLevel),"�����øеķ���");
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Option(x(1),y(yLevel),"������");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Option(x(3),y(yLevel),"������Լ��");
line[line.length]=Link(box[2][1],box[1][0]);
box[2][2]=Textbox_Option(x(5),y(yLevel),"�ڶ�����˵����");
line[line.length]=Link(box[2][2],box[1][0]);
//----------
box[3]=new Array();
yLevel+=3;
box[3][0]=Textbox_Date(x(3),y(yLevel),"5��2��","bottom");
line[line.length]=Link(box[3][0],box[2][0]);
line[line.length]=Link(box[3][0],box[2][1]);
line[line.length]=Link(box[3][0],box[2][2]);
//----------
box[4]=new Array();
yLevel+=5;
box[4][0]=Textbox_Date(x(3),y(yLevel),"5��2��","top");
//----------
box[5]=new Array();
yLevel+=2;
CmtSummery="�������е��ʺ�����ʹ��Ҳ��Щ����Ӧ������Ҳ����Ϊ�顣";
CmtSelect="ѡ��[ϲ��]�������AFTER STORY�󣬿ɵõ�����ġ��⡱��";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[5][0]=Textbox_Selection_C(x(3),y(yLevel),"�Դ����������","1",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"�Դ����������",0);
line[line.length]=Link(box[5][0],box[4][0]);
//----------
box[6]=new Array();
yLevel+=3;
box[6][0]=Textbox_Option(x(2),y(yLevel),"ϲ��");
line[line.length]=Link(box[6][0],box[5][0]);
box[6][1]=Textbox_Option(x(4),y(yLevel),"���Ѿ������");
line[line.length]=Link(box[6][1],box[5][0]);
//----------
box[7]=new Array();
yLevel+=3;
box[7][0]=Textbox_Option(x(3),y(yLevel),"��������");
line[line.length]=Link(box[7][0],box[6][0]);
line[line.length]=Link(box[7][0],box[6][1]);
//----------
box[8]=new Array();
yLevel+=2;
box[8][0]=Textbox_Option(x(3),y(yLevel),"�������磨�ˣ�");
line[line.length]=Link(box[8][0],box[7][0]);
//----------
box[9]=new Array();
yLevel+=2;
box[9][0]=Textbox_Date(x(3),y(yLevel),"5��5��","bottom");
line[line.length]=Link(box[9][0],box[8][0]);
//----------
box[10]=new Array();
yLevel+=5;
box[10][0]=Textbox_Date(x(3),y(yLevel),"5��5��","top");
//----------
box[11]=new Array();
yLevel+=2;
box[11][0]=Textbox_Option(x(3),y(yLevel),"�������磨�ţ�");
line[line.length]=Link(box[11][0],box[10][0]);
//----------
box[12]=new Array();
yLevel+=2;
box[12][0]=Textbox_Date(x(3),y(yLevel),"5��6��","bottom");
line[line.length]=Link(box[12][0],box[11][0]);
//----------
box[13]=new Array();
yLevel+=5;
box[13][0]=Textbox_Date(x(3),y(yLevel),"5��10��","top");
//----------
box[14]=new Array();
yLevel+=2;
box[14][0]=Textbox_Selection(x(3),y(yLevel),"����籾�е��");
line[line.length]=Link(box[14][0],box[13][0]);
//----------
box[15]=new Array();
yLevel+=3;
box[15][0]=Textbox_Option(x(1),y(yLevel),"���߾籾");
line[line.length]=Link(box[15][0],box[14][0]);
box[15][1]=Textbox_Option(x(3),y(yLevel),"����˫��");
line[line.length]=Link(box[15][1],box[14][0]);
box[15][2]=Textbox_Option(x(5),y(yLevel),"������");
line[line.length]=Link(box[15][2],box[14][0]);
//----------
box[16]=new Array();
yLevel+=3;
box[16][0]=Textbox_Date(x(3),y(yLevel),"5��11��","bottom");
box[16][0].addTitle("���ת��55ҳ");
box[16][0].addClick(function(){gotopage(55)});
line[line.length]=Link(box[16][0],box[15][0]);
line[line.length]=Link(box[16][0],box[15][1]);
line[line.length]=Link(box[16][0],box[15][2]);

hdft["footer"]=Footer(liny(1),54);