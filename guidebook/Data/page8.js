// CVG HTML Data Page8 Done By Ligueston 2008.4.9
hdft["header"]=Header("public","����·��","Public Route","4��18�գ�����","April 18th~Part 2");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Condition(x(3.5),y(yLevel),"���磬��ԭ��ս�Ǵ������Ŀ��","top");
line[line.length]=Link(Point(linx(3.5),liny(0)-LINEBASEHEIGHT/2),Point(linx(3.5),liny(0)-LINEBASEHEIGHT/2));
line[line.length-1].addTitle("���ת�ص�7ҳ");
line[line.length-1].addClick(function(){gotopage(7)});
//----------
box[1]=new Array();
yLevel+=3;
box[1][0]=Textbox_Selection(x(2.5),y(yLevel),"����");
line[line.length]=Link(box[1][0],box[0][0]);
box[1][1]=Textbox_Selection(x(4.5),y(yLevel),"�ܾ�","r|+δ����");
line[line.length]=Link(box[1][1],box[0][0]);
//----------
box[2]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="";
CmtOption="-��æ";
CmtEvents="01000000";
CmtEvntIru="�Ǵ������������м�������������ֿ��¼�";
box[2][0]=Textbox_Selection_C(x(2.5),y(yLevel),"�������ѵ��Ǵ�","7",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"",0);
line[line.length]=Link(box[2][0],box[1][0]);
//----------
box[3]=new Array();
yLevel+=3;
box[3][0]=Textbox_Option(x(1.5),y(yLevel),"��æ","l|�Ǵ�");
line[line.length]=Link(box[3][0],box[2][0]);
box[3][1]=Textbox_Option(x(3.5),y(yLevel),"˦��������","r|�Ǵ�");
line[line.length]=Link(box[3][1],box[2][0]);
//----------
box[4]=new Array();
yLevel+=4;
box[4][0]=Textbox_Condition(x(3.5),y(yLevel),"16�գ��ź����´���������");
line[line.length]=Link(box[4][0],Point(linx(2.5),liny(-1)),box[3][0]);
line[line.length]=Link(box[4][0],Point(linx(2.5),liny(-1)),box[3][1]);
line[line.length]=Link(box[4][0],box[1][1]);
//----------
box[5]=new Array();
yLevel+=3;
box[5][0]=Textbox_Selection(x(2),y(yLevel),"��æ");
line[line.length]=Link(box[5][0],Point(linx(3),liny(-1)));
box[5][1]=Textbox_Selection(x(5),y(yLevel),"����һ������","r|+δ����");
line[line.length]=Link(box[5][1],Point(linx(3),liny(-1)));
line[line.length]=Link(Point(linx(3.5),liny(-1)),box[4][0]);
//----------
box[6]=new Array();
yLevel+=2;
box[6][0]=Textbox_Selection(x(2),y(yLevel),"��װѧ����������");
line[line.length]=Link(box[6][0],box[5][0]);
//----------
box[7]=new Array();
yLevel+=3;
box[7][0]=Textbox_Option(x(0),y(yLevel),"���������Ļ����أ�");
line[line.length]=Link(box[7][0],box[6][0]);
box[7][1]=Textbox_Option(x(2),y(yLevel),"�����ϻ�����ʲô������");
line[line.length]=Link(box[7][1],box[6][0]);
box[7][2]=Textbox_Option(x(4),y(yLevel),"��ϲ���������͵�������");
line[line.length]=Link(box[7][2],box[6][0]);
//----------
box[8]=new Array();
yLevel+=3;
box[8][0]=Textbox_Condition(x(2),y(yLevel),"���磬����������͹źӵ�Լ��");
line[line.length]=Link(box[8][0],box[7][0]);
line[line.length]=Link(box[8][0],box[7][1]);
line[line.length]=Link(box[8][0],box[7][2]);
//----------
box[9]=new Array();
yLevel+=3;
box[9][0]=Textbox_Selection(x(1),y(yLevel),"���컹����ǰһ�����һ���","l|+δ����");
line[line.length]=Link(box[9][0],box[8][0]);
box[9][1]=Textbox_Selection(x(3),y(yLevel),"�����������һ���");
line[line.length]=Link(box[9][1],box[8][0]);
//----------
box[10]=new Array();
yLevel+=2;
box[10][0]=Textbox_Selection(x(1),y(yLevel),"·������ɱ������ԭ");
line[line.length]=Link(box[10][0],box[9][0]);
CmtSummery="";
CmtSelect="{15��17�գ�������֦�}����15�գ��ڷ�֧{����������������֦}ѡ��[�����]�Լ�17���ڷ�֧{����������������֦}��ѡ��[�����]������ѡ����ȷ������������";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[10][1]=Textbox_Condition_C(x(5),y(yLevel),"15�պ�17�գ�������֦�","8",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"15�պ�17�գ�������֦�",0);
line[line.length]=Link(box[10][1],box[5][1]);
//----------
box[11]=new Array();
yLevel+=3;
box[11][0]=Textbox_Option(x(0),y(yLevel),"�͹ź�����������");
line[line.length]=Link(box[11][0],box[10][0]);
box[11][1]=Textbox_Option(x(2),y(yLevel),"���Źźӵ���,�첽�ܵ�");
line[line.length]=Link(box[11][1],box[10][0]);
box[11][2]=Textbox_Selection(x(4),y(yLevel),"��");
line[line.length]=Link(box[11][2],box[10][1]);
box[11][3]=Textbox_Selection(x(6),y(yLevel),"��");
line[line.length]=Link(box[11][3],box[10][1]);
//----------
box[12]=new Array();
yLevel+=2;
CmtSummery="��������¥����Ҳ�Ҵ�ԭʱ�������˽�ѵѧ��δ��������֦����̾������׼����ȥ��";
CmtSelect="���ǵõ�����֦���⡱�Ĺؼ�ѡ���֧��ѡ��[�����]��������֦�ߣ�����Ѿ���ɹ�����֦�ߣ�ѡ�����ѡ������ڽ����Ǵ���ɫ�����õ�����֦�ġ��⡱��ѡ��[Ŀ������ȥ]���˳�����֦�ߡ�";
CmtCaution="";
CmtOption="-�����";
CmtEvents="01000000";
CmtEvntIru="����֦�����м���������";
box[12][0]=Textbox_Selection_C(x(4),y(yLevel),"����������������֦","9",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"����������������֦",0);
line[line.length]=Link(box[12][0],box[11][2]);
//----------
box[13]=new Array();
yLevel+=3;
box[13][0]=Textbox_Option(x(3),y(yLevel),"�����","l|����֦");
line[line.length]=Link(box[13][0],box[12][0]);
box[13][1]=Textbox_Option(x(5),y(yLevel),"Ŀ������ȥ","r|����֦");
line[line.length]=Link(box[13][1],box[12][0]);
//----------
box[14]=new Array();
yLevel+=5;
box[14][0]=Textbox_Date(x(3.5),y(yLevel),"4��19��","bottom");
line[line.length]=Link(box[14][0],Point(linx(3.5),liny(-1)));
box[14][0].addTitle("���ת����10ҳ");
box[14][0].addClick(function(){gotopage(10);});
line[line.length]=Link(Point(linx(5),liny(-1)),Point(linx(2),liny(-1)),Point(linx(2),liny(-6)),Point(linx(1),liny(-7)),box[11][0]);
line[line.length]=Link(Point(linx(5),liny(-1)),Point(linx(2),liny(-1)),Point(linx(2),liny(-6)),Point(linx(1),liny(-7)),box[11][1]);
line[line.length]=Link(Point(linx(5),liny(-1)),Point(linx(2),liny(-1)),Point(linx(2),liny(-6)),box[9][1]);
line[line.length]=Link(Point(linx(5),liny(-1)),Point(linx(4),liny(-2)),box[13][0]);
line[line.length]=Link(Point(linx(5),liny(-1)),Point(linx(4),liny(-2)),box[13][1]);
line[line.length]=Link(Point(linx(5),liny(-1)),box[11][3]);

hdft["footer"]=Footer(liny(1),8);