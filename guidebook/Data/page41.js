// CVG HTML Data Page41 Done By Ligueston 2008.4.17
hdft["header"]=Header("kotomi","һ֮�� ����","Kotomi Ichinose","4��25�ա�5��4��","April 25th~May 4th");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(3),y(yLevel),"4��25��","top");
//----------
box[1]=new Array();
yLevel+=2;
box[1][0]=Textbox_Selection(x(3),y(yLevel),"�ӵ�����");
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Option(x(2),y(yLevel),"��ʵ�ش�������");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Option(x(4),y(yLevel),"��ȻҪ����");
line[line.length]=Link(box[2][1],box[1][0]);
//----------
box[3]=new Array();
yLevel+=3;
box[3][0]=Textbox_Date(x(3),y(yLevel),"4��29��","bottom");
line[line.length]=Link(box[3][0],box[2][0]);
line[line.length]=Link(box[3][0],box[2][1]);
//----------
box[4]=new Array();
yLevel+=5;
box[4][0]=Textbox_Date(x(3),y(yLevel),"4��29��","top");
//----------
box[5]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="";
CmtOption="-���";
CmtEvents="00000100";
CmtEvntIru="�����øж�����1��";
box[5][0]=Textbox_Selection_C(x(3),y(yLevel),"�����еİ���","1",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"�����еİ���",0);
line[line.length]=Link(box[5][0],box[4][0]);
//----------
box[6]=new Array();
yLevel+=3;
box[6][0]=Textbox_Option(x(2),y(yLevel),"�������ڼҴ���");
line[line.length]=Link(box[6][0],box[5][0]);
box[6][1]=Textbox_Option(x(4),y(yLevel),"���");
line[line.length]=Link(box[6][1],box[5][0]);
//----------
box[7]=new Array();
yLevel+=3;
box[7][0]=Textbox_Date(x(3),y(yLevel),"4��30��","bottom");
line[line.length]=Link(box[7][0],box[6][0]);
line[line.length]=Link(box[7][0],box[6][1]);
//----------
box[8]=new Array();
yLevel+=5;
box[8][0]=Textbox_Date(x(3),y(yLevel),"4��30��","top");
//----------
box[9]=new Array();
yLevel+=2;
box[9][0]=Textbox_Selection(x(3),y(yLevel),"������Σ��");
line[line.length]=Link(box[9][0],box[8][0]);
//----------
box[10]=new Array();
yLevel+=3;
box[10][0]=Textbox_Option(x(2),y(yLevel),"ȥ��������","l|����");
line[line.length]=Link(box[10][0],box[9][0]);
box[10][1]=Textbox_Option(x(4),y(yLevel),"�ȿ������","r|����");
line[line.length]=Link(box[10][1],box[9][0]);
//----------
box[11]=new Array();
yLevel+=2;
box[11][0]=Textbox_Date(x(2),y(yLevel),"5��3��","bottom");
line[line.length]=Link(box[11][0],box[10][0]);
box[11][1]=Textbox_Quit(x(4),y(yLevel),"���� BAD ENDDING");
line[line.length]=Link(box[11][1],box[10][1]);
//----------
box[12]=new Array();
yLevel+=5;
box[12][0]=Textbox_Date(x(3),y(yLevel),"5��3��","top");
//----------
box[13]=new Array();
yLevel+=2;
box[13][0]=Textbox_Selection(x(3),y(yLevel),"��ʿ��ѯ��");
line[line.length]=Link(box[13][0],box[12][0]);
//----------
box[14]=new Array();
yLevel+=3;
box[14][0]=Textbox_Option(x(2),y(yLevel),"��Ȼ���ڻ��㲻�ϡ�","l|����");
line[line.length]=Link(box[14][0],box[13][0]);
box[14][1]=Textbox_Option(x(4),y(yLevel),"����������","r|����");
line[line.length]=Link(box[14][1],box[13][0]);
//----------
box[15]=new Array();
yLevel+=2;
box[15][0]=Textbox_Date(x(2),y(yLevel),"5��4��","bottom");
line[line.length]=Link(box[15][0],box[14][0]);
box[15][1]=Textbox_Quit(x(4),y(yLevel),"���� BAD ENDDING");
line[line.length]=Link(box[15][1],box[14][1]);
//----------
box[16]=new Array();
yLevel+=5;
box[16][0]=Textbox_Date(x(3.5),y(yLevel),"5��4��","top");
//----------
box[17]=new Array();
yLevel+=2;
box[17][0]=Textbox_Selection(x(3.5),y(yLevel),"�ӵ��²۽�����Լ��");
line[line.length]=Link(box[17][0],box[16][0]);
//----------
box[18]=new Array();
yLevel+=3;
box[18][0]=Textbox_Option(x(2.5),y(yLevel),"�Ѷ�����˸���");
line[line.length]=Link(box[18][0],box[17][0]);
box[18][1]=Textbox_Option(x(4.5),y(yLevel),"��������Ҳ������");
line[line.length]=Link(box[18][1],box[17][0]);
//----------
box[19]=new Array();
yLevel+=2;
box[19][0]=Textbox_Selection(x(2.5),y(yLevel),"�Ը���һ���˵�ͻȻ����");
line[line.length]=Link(box[19][0],box[18][0]);
//----------
box[20]=new Array();
yLevel+=3;
box[20][0]=Textbox_Option(x(1.5),y(yLevel),"�������˵�Լ�ᰡ","l|-����");
line[line.length]=Link(box[20][0],box[19][0]);
box[20][1]=Textbox_Option(x(3.5),y(yLevel),"��������Ҳ������","r|-����");
line[line.length]=Link(box[20][1],box[19][0]);
//----------
box[21]=new Array();
yLevel+=2;
box[21][0]=Textbox_Quit(x(1.5),y(yLevel),"���� BAD ENDDING");
line[line.length]=Link(box[21][0],box[20][0]);
//----------
box[22]=new Array();
yLevel+=1;
box[22][0]=Textbox_Date(x(3.5),y(yLevel),"5��5��","bottom");
line[line.length]=Link(box[22][0],box[20][1]);
line[line.length]=Link(box[22][0],box[18][1]);
box[22][0].addTitle("���ת����42ҳ");
box[22][0].addClick(function(){gotopage(42)});

hdft["footer"]=Footer(liny(2),41);