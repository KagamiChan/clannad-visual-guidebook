// CVG HTML Data Page3 Done By Ligueston 2008.4.5
hdft["header"]=Header("public","����·��","Public Route","4��16�գ�һ��","April 16th~Part 1");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(4),y(yLevel),"4��16��","top");
//----------
box[1]=new Array();
yLevel+=2;
box[1][0]=Textbox_Condition(x(4),y(yLevel),"15�գ������ˮ��ת���");
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Selection(x(3),y(yLevel),"��Ǹ");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Selection(x(5),y(yLevel),"����");
line[line.length]=Link(box[2][1],box[1][0]);
//----------
box[3]=new Array();
yLevel+=2;
box[3][0]=Textbox_Selection(x(3),y(yLevel),"��ѧ·�Ͽ���һλ������");
line[line.length]=Link(box[3][0],box[2][0]);
//----------
box[4]=new Array();
yLevel+=3;
box[4][0]=Textbox_Option(x(2),y(yLevel),"�������߹�ȥ");
line[line.length]=Link(box[4][0],box[3][0]);
box[4][1]=Textbox_Option(x(4),y(yLevel),"�������Ŵ��к�");
line[line.length]=Link(box[4][1],box[3][0]);
//----------
box[5]=new Array();
yLevel+=3;
box[5][0]=Textbox_Selection(x(3),y(yLevel),"��û�гٵ���ԭ��");
line[line.length]=Link(box[5][0],box[4][0]);
line[line.length]=Link(box[5][0],box[4][1]);
//----------
box[6]=new Array();
yLevel+=3;
box[6][0]=Textbox_Option(x(2),y(yLevel),"����׷����ȥ","l|��|�");
line[line.length]=Link(box[6][0],box[5][0]);
box[6][1]=Textbox_Option(x(4),y(yLevel),"ûʲô�ý����","r|��|�");
line[line.length]=Link(box[6][1],box[5][0]);
//----------
box[7]=new Array();
yLevel+=3;
box[7][0]=Textbox_Condition(x(3),y(yLevel),"15�գ�����������ͥԺ�е�Ů��");
line[line.length]=Link(box[7][0],box[6][0]);
line[line.length]=Link(box[7][0],box[6][1]);
//----------
box[8]=new Array();
yLevel+=3;
box[8][0]=Textbox_Selection(x(2),y(yLevel),"����");
line[line.length]=Link(box[8][0],box[7][0]);
box[8][1]=Textbox_Selection(x(4),y(yLevel),"������","r|+δ����");
line[line.length]=Link(box[8][1],box[7][0]);
//----------
box[9]=new Array();
yLevel+=2;
box[9][0]=Textbox_Selection(x(2),y(yLevel),"�����ϵĳ�˼��������");
line[line.length]=Link(box[9][0],box[8][0]);
//----------
box[10]=new Array();
yLevel+=3;
box[10][0]=Textbox_Option(x(1),y(yLevel),"�����Ů��");
line[line.length]=Link(box[10][0],box[9][0]);
box[10][1]=Textbox_Option(x(3),y(yLevel),"��ȥ������");
line[line.length]=Link(box[10][1],box[9][0]);
//----------
box[11]=new Array();
yLevel+=5;
box[11][0]=Textbox_Condition(x(4),y(yLevel),"15�գ�ƽϢɧ��������Ů��");
line[line.length]=Link(box[11][0],Point(linx(3),liny(-1)),Point(linx(2),liny(-2)),box[10][0]);
line[line.length]=Link(box[11][0],Point(linx(3),liny(-1)),Point(linx(2),liny(-2)),box[10][1]);
line[line.length]=Link(box[11][0],Point(linx(3),liny(-1)),box[8][1]);
line[line.length]=Link(box[11][0],box[2][1]);
//----------
box[12]=new Array();
yLevel+=3;
box[12][0]=Textbox_Selection(x(3),y(yLevel),"�ҶԴ�Ҳ�ĸ���Ȥ");
line[line.length]=Link(box[12][0],box[11][0]);
box[12][1]=Textbox_Selection(x(5),y(yLevel),"�ҶԴ˺�����Ȥ","r|+δ����");
line[line.length]=Link(box[12][1],box[11][0]);
//----------
box[13]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="";
CmtOption="-ȥ";
CmtEvents="01110011";
CmtEvntIru="�Ǵ������������м�������������ֿ��¼���3��3��������αŮ���¼��ͱ�ҵ����ҵ���������ѡ";
box[13][0]=Textbox_Selection_C(x(3),y(yLevel),"��ԭ��ս�Ǵ���һ��Ŀ��","1",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"��ԭ��ս�Ǵ���һ��Ŀ��",0);
line[line.length]=Link(box[13][0],box[12][0]);
//----------
box[14]=new Array();
yLevel+=3;
box[14][0]=Textbox_Option(x(2),y(yLevel),"ȥ","l|�Ǵ�");
line[line.length]=Link(box[14][0],box[13][0]);
box[14][1]=Textbox_Option(x(4),y(yLevel),"��ȥ","r|�Ǵ�");
line[line.length]=Link(box[14][1],box[13][0]);
//----------
box[15]=new Array();
yLevel+=4;
box[15][0]=Textbox_Condition(x(4),y(yLevel),"15�գ����硢Ӣ���﷨��");
line[line.length]=Link(box[15][0],Point(linx(3),liny(-1)),box[14][0]);
line[line.length]=Link(box[15][0],Point(linx(3),liny(-1)),box[14][1]);
line[line.length]=Link(box[15][0],box[12][1]);
//----------
box[16]=new Array();
yLevel+=3;
box[16][0]=Textbox_Selection(x(3),y(yLevel),"���������Ͽ�");
line[line.length]=Link(box[16][0],box[15][0]);
box[16][1]=Textbox_Selection(x(5),y(yLevel),"�ӿ�");
line[line.length]=Link(box[16][1],box[15][0]);
//----------
box[17]=new Array();
yLevel+=2;
box[17][0]=Textbox_Selection(x(3),y(yLevel),"���硢����");
line[line.length]=Link(box[17][0],box[16][0]);
//----------
box[18]=new Array();
yLevel+=3;
box[18][0]=Textbox_Option(x(2),y(yLevel),"�ӿ�","l|����");
line[line.length]=Link(box[18][0],box[17][0]);
box[18][1]=Textbox_Option(x(4),y(yLevel),"���������Ͽ�","r|����");
line[line.length]=Link(box[18][1],box[17][0]);
//----------
box[19]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="";
CmtOption="-��";
CmtEvents="00000010";
CmtEvntIru="�����øж�����1��";
box[19][0]=Textbox_Selection_C(x(2),y(yLevel),"����ֵ�Ů������Ա㵱","2",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"����ֵ�Ů������Ա㵱",0);
line[line.length]=Link(box[19][0],box[18][0]);
//----------
box[20]=new Array();
yLevel+=3;
box[20][0]=Textbox_Option(x(1),y(yLevel),"��");
line[line.length]=Link(box[20][0],box[19][0]);
box[20][1]=Textbox_Option(x(3),y(yLevel),"����");
line[line.length]=Link(box[20][1],box[19][0]);

yLevel+=4;
line[line.length]=Link(Point(linx(3),liny(0)),Point(linx(2),liny(-1)),box[20][0]);
line[line.length]=Link(Point(linx(3),liny(0)),Point(linx(2),liny(-1)),box[20][1]);
line[line.length]=Link(Point(linx(3),liny(0)),box[18][1]);
line[line.length]=Link(Point(linx(3),liny(0)),Point(linx(5),liny(0)),box[16][1]);
line[line.length]=Link(Point(linx(4),liny(0)),Point(linx(4),liny(0)));
line[line.length-1].addTitle("���ת����4ҳ");
line[line.length-1].addClick(function(){gotopage(4)});

hdft["footer"]=Footer(liny(1),3);