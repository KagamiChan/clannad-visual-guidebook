// CVG HTML Data Page27 Done By Shakugan_No_Kaluote 2008.4.17
hdft["header"]=Header("tomoyo","���� �Ǵ�","Tomoyo Sakagami","4��25�ա�5��2��","April 25st~May 2nd");

var yLevel=0;

//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(3),y(yLevel),"4��25��","top");
//----------
box[1]=new Array();
yLevel+=2;
box[1][0]=Textbox_Selection(x(3),y(yLevel),"�糿��Ҳ���Ǵ�����");
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Option(x(2),y(yLevel),"��ʼ׼��");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Option(x(4),y(yLevel),"���Ҫ�����");
line[line.length]=Link(box[2][1],box[1][0]);
//----------
box[3]=new Array();
yLevel+=3;
box[3][0]=Textbox_Date(x(3),y(yLevel),"4��26��","bottom");
line[line.length]=Link(box[3][0],box[2][0]);
line[line.length]=Link(box[3][0],box[2][1]);
//----------
box[4]=new Array();
yLevel+=5;
box[4][0]=Textbox_Date(x(3),y(yLevel),"4��26��","top");
//----------
box[5]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="";
CmtOption="-��ʳ�����";
CmtEvents="10000000";
CmtEvntIru="�Ҵ����64HIT��ǰ��Ϊ����ɹ��Ҵ��ߣ�";
box[5][0]=Textbox_Selection_C(x(3),y(yLevel),"ѡ��Լ��Է��ĵط�","1",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"ѡ��Լ��Է��ĵط�",0);
line[line.length]=Link(box[5][0],box[4][0]);
//----------
box[6]=new Array();
yLevel+=3;
box[6][0]=Textbox_Option(x(2),y(yLevel),"ȥ�����");
line[line.length]=Link(box[6][0],box[5][0]);
box[6][1]=Textbox_Option(x(4),y(yLevel),"��ʳ�����");
line[line.length]=Link(box[6][1],box[5][0]);
//----------
box[7]=new Array();
yLevel+=3;
box[7][0]=Textbox_Date(x(3),y(yLevel),"5��2��","bottom");
line[line.length]=Link(box[7][0],box[6][0]);
line[line.length]=Link(box[7][0],box[6][1]);
//----------
box[8]=new Array();
yLevel+=5;
box[8][0]=Textbox_Date(x(3.5),y(yLevel),"5��2��","top");
//----------
box[9]=new Array();
yLevel+=2;
box[9][0]=Textbox_Selection(x(3.5),y(yLevel),"��Ҳ���Ǵ��Ļ��루һ��");
line[line.length]=Link(box[9][0],box[8][0]);
//----------
box[10]=new Array();
yLevel+=3;
box[10][0]=Textbox_Option(x(2.5),y(yLevel),"��ô���������ڡ�");
line[line.length]=Link(box[10][0],box[9][0]);
box[10][1]=Textbox_Option(x(4.5),y(yLevel),"����Ҳ����һ�°�");
line[line.length]=Link(box[10][1],box[9][0]);
//----------
box[11]=new Array();
yLevel+=2;
box[11][0]=Textbox_Selection(x(2.5),y(yLevel),"��ֵ�Ҫ��");
line[line.length]=Link(box[11][0],box[10][0]);
//----------
box[12]=new Array();
yLevel+=3;
box[12][0]=Textbox_Option(x(1.5),y(yLevel),"��ɫɫ������");
line[line.length]=Link(box[12][0],box[11][0]);
box[12][1]=Textbox_Option(x(3.5),y(yLevel),"���������");
line[line.length]=Link(box[12][1],box[11][0]);
//----------
box[13]=new Array();
yLevel+=4;
box[13][0]=Textbox_Date(x(3.5),y(yLevel),"5��3��","bottom");
box[13][0].addTitle("���ת����28ҳ");
box[13][0].addClick(function(){gotopage(28)});
line[line.length]=Link(box[13][0],Point(linx(2.5),liny(-1)),box[12][0]);
line[line.length]=Link(box[13][0],Point(linx(2.5),liny(-1)),box[12][1]);
line[line.length]=Link(box[13][0],box[10][1]);

hdft["footer"]=Footer(liny(1),27);