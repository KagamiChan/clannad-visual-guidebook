// CVG HTML Data Page5 Done By Ligueston 2008.4.5
hdft["header"]=Header("public","����·��","Public Route","4��17�գ�һ��","April 17th~Part 1");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(3.5),y(yLevel),"4��17��","top");
//----------
box[1]=new Array();
yLevel+=2;
box[1][0]=Textbox_Condition(x(3.5),y(yLevel),"16�գ���ԭ��ս�Ǵ���һ��Ŀ��");
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Selection(x(2.5),y(yLevel),"ȥ");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Selection(x(4.5),y(yLevel),"��ȥ","r|+δ����");
line[line.length]=Link(box[2][1],box[1][0]);
//----------
box[3]=new Array();
yLevel+=2;
box[3][0]=Textbox_Selection(x(2.5),y(yLevel),"��ԭ��ս�Ǵ�������Ŀ��");
line[line.length]=Link(box[3][0],box[2][0]);
//----------
box[4]=new Array();
yLevel+=3;
box[4][0]=Textbox_Option(x(1.5),y(yLevel),"��ȥ����");
line[line.length]=Link(box[4][0],box[3][0]);
box[4][1]=Textbox_Option(x(3.5),y(yLevel),"���ڽ�����");
line[line.length]=Link(box[4][1],box[3][0]);
//----------
box[5]=new Array();
yLevel+=3;
box[5][0]=Textbox_Selection(x(2.5),y(yLevel),"��ԭ��ս�Ǵ�������Ŀ��");
line[line.length]=Link(box[5][0],box[4][0]);
line[line.length]=Link(box[5][0],box[4][1]);
//----------
box[6]=new Array();
yLevel+=3;
box[6][0]=Textbox_Selection(x(1.5),y(yLevel),"������ȥ");
line[line.length]=Link(box[6][0],box[5][0]);
box[6][1]=Textbox_Selection(x(3.5),y(yLevel),"��ȥ����");
line[line.length]=Link(box[6][1],box[5][0]);
//----------
box[7]=new Array();
yLevel+=3;
CmtSummery="���ܵ����ش����ԭ��Ȼ���ţ��Ǵ�֮����ǿ������Ϊ���Ǹ��еġ�Ϊ����֤�Լ��뷨���¿κ��������ν�����Ҳ�����Ǵ�������ս����";
CmtSelect="17�����紺ԭ������ս�Ǵ�ֻ�е����ε�ѡ���ǹؼ�����ѡ��[��ȥ����]���������Ǵ��ߡ�";
CmtCaution="";
CmtOption="-������ȥ";
CmtEvents="01110011";
CmtEvntIru="�Ǵ���Ϊ3��3��������Ա��ѡ������αŮ���¼��������������м�������������ֿ��¼��ͱ�ҵ����ҵ���������ѡ";
box[7][0]=Textbox_Selection_C(x(2.5),y(yLevel),"��԰��ս�Ǵ����Ļ�Ŀ��","1",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"��԰��ս�Ǵ�",0);
line[line.length]=Link(box[7][0],box[6][0]);
line[line.length]=Link(box[7][0],box[6][1]);
//----------
box[8]=new Array();
yLevel+=3;
box[8][0]=Textbox_Option(x(1.5),y(yLevel),"������ȥ","l|�Ǵ�");
line[line.length]=Link(box[8][0],box[7][0]);
box[8][1]=Textbox_Option(x(3.5),y(yLevel),"��ȥ����","r|�Ǵ�");
line[line.length]=Link(box[8][1],box[7][0]);
//----------
box[9]=new Array();
yLevel+=4;
CmtSummery="";
CmtSelect="{15��16�գ��ӿ���������}����15���ڷ�֧{���硢Ӣ���﷨��}ѡ��[�ӿ�]�Լ���16�յķ�֧{���硢����}ѡ��[�ӿ�]��������һ��ֻ���ܴ�����һ���������ӿ�����������������";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[9][0]=Textbox_Condition_C(x(3.5),y(yLevel),"15�ջ�16�գ��ӿ���������","2",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"15�ջ�16�գ��ӿ���������",0);
line[line.length]=Link(box[9][0],Point(linx(2.5),liny(-1)),box[8][0]);
line[line.length]=Link(box[9][0],Point(linx(2.5),liny(-1)),box[8][1]);
line[line.length]=Link(box[9][0],box[2][1]);
//----------
box[10]=new Array();
yLevel+=3;
box[10][0]=Textbox_Selection(x(2.5),y(yLevel),"��");
line[line.length]=Link(box[10][0],box[9][0]);
box[10][1]=Textbox_Selection(x(4.5),y(yLevel),"��");
line[line.length]=Link(box[10][1],box[9][0]);
//----------
box[11]=new Array();
yLevel+=2;
box[11][0]=Textbox_Selection(x(2.5),y(yLevel),"Ӣ���ǰ����Ϣ");
line[line.length]=Link(box[11][0],box[10][0]);
//----------
box[12]=new Array();
yLevel+=3;
box[12][0]=Textbox_Option(x(1.5),y(yLevel),"�ӿ�","l|����");
line[line.length]=Link(box[12][0],box[11][0]);
box[12][1]=Textbox_Option(x(3.5),y(yLevel),"�������˰�","r|����");
line[line.length]=Link(box[12][1],box[11][0]);
//----------
box[13]=new Array();
yLevel+=2;
box[13][0]=Textbox_Condition(x(1.5),y(yLevel),"15�գ������ˮ��ת���");
line[line.length]=Link(box[13][0],box[12][0]);
//----------
box[14]=new Array();
yLevel+=3;
box[14][0]=Textbox_Selection(x(1.5),y(yLevel),"����");
line[line.length]=Link(box[14][0],box[13][0]);
box[14][1]=Textbox_Selection(x(3.5),y(yLevel),"��Ǹ");
line[line.length]=Link(box[14][1],box[13][0]);
//----------
box[15]=new Array();
yLevel+=2;
box[15][0]=Textbox_Selection(x(1.5),y(yLevel),"��������������");
line[line.length]=Link(box[15][0],box[14][0]);
//----------
box[16]=new Array();
yLevel+=3;
box[16][0]=Textbox_Option(x(1.5),y(yLevel),"������ȥ","l|����");
line[line.length]=Link(box[16][0],box[15][0]);
box[16][1]=Textbox_Option(x(3.5),y(yLevel),"һ������","r|����");
line[line.length]=Link(box[16][1],box[15][0]);
//----------
box[17]=new Array();
yLevel+=2;
box[17][0]=Textbox_Selection(x(1.5),y(yLevel),"���������������");
line[line.length]=Link(box[17][0],box[16][0]);
//----------
box[18]=new Array();
yLevel+=3;
box[18][0]=Textbox_Selection(x(1.5),y(yLevel),"���������Ȿ��û��");
line[line.length]=Link(box[18][0],box[17][0]);
box[18][1]=Textbox_Selection(x(3.5),y(yLevel),"���ǲ�Ҫ�ܺ���");
line[line.length]=Link(box[18][1],box[17][0]);

line[line.length]=Link(Point(linx(4.5),liny(3)),Point(linx(2.5),liny(3)),box[18][0]);
line[line.length]=Link(Point(linx(4.5),liny(3)),Point(linx(2.5),liny(3)),box[18][1]);
line[line.length]=Link(Point(linx(4.5),liny(3)),Point(linx(4.5),liny(-2)),box[16][1]);
line[line.length]=Link(Point(linx(4.5),liny(3)),Point(linx(4.5),liny(-7)),box[14][1]);
line[line.length]=Link(Point(linx(4.5),liny(3)),Point(linx(4.5),liny(-12)),box[12][1]);
line[line.length]=Link(Point(linx(4.5),liny(3)),box[10][1]);
line[line.length]=Link(Point(linx(3.5),liny(3)),Point(linx(3.5),liny(3)));
line[line.length-1].addTitle("���ת����6ҳ");
line[line.length-1].addClick(function(){gotopage(6)});

hdft["footer"]=Footer(liny(4),5);
