// CVG HTML Data Page4 Done By Ligueston 2008.4.5
hdft["header"]=Header("public","����·��","Public Route","4��16�գ�����","April 16th~Part 2");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Condition(x(4),y(yLevel),"15�գ�������ͥԺ�е���Ů");
line[line.length]=Link(Point(linx(4),liny(0)-LINEBASEHEIGHT/2),Point(linx(4),liny(0)-LINEBASEHEIGHT/2));
line[line.length-1].addTitle("���ת�ص�3ҳ");
line[line.length-1].addClick(function(){gotopage(3)});
//----------
box[1]=new Array();
yLevel+=3;
box[1][0]=Textbox_Selection(x(2.5),y(yLevel),"����");
line[line.length]=Link(box[1][0],Point(linx(3.5),liny(-1)));
box[1][1]=Textbox_Selection(x(5.5),y(yLevel),"������","r|+δ����");
line[line.length]=Link(box[1][1],Point(linx(3.5),liny(-1)));
line[line.length]=Link(Point(linx(4),liny(-1)),box[0][0]);
//----------
box[2]=new Array();
yLevel+=2;
box[2][0]=Textbox_Condition(x(2.5),y(yLevel),"15�գ������ˮ��ת���");
line[line.length]=Link(box[2][0],box[1][0]);
//----------
box[3]=new Array();
yLevel+=3;
box[3][0]=Textbox_Selection(x(1.5),y(yLevel),"��Ǹ");
line[line.length]=Link(box[3][0],box[2][0]);
box[3][1]=Textbox_Selection(x(3.5),y(yLevel),"����");
line[line.length]=Link(box[3][1],box[2][0]);
//----------
box[4]=new Array();
yLevel+=2;
box[4][0]=Textbox_Selection(x(3.5),y(yLevel),"�糿�Թźӵ�Լ��");
line[line.length]=Link(box[4][0],box[3][1]);
//----------
box[5]=new Array();
yLevel+=3;
box[5][0]=Textbox_Option(x(2.5),y(yLevel),"��ȥ��","l|�|����");
line[line.length]=Link(box[5][0],box[4][0]);
box[5][1]=Textbox_Option(x(4.5),y(yLevel),"�ò�����ô��","r|�|����");
line[line.length]=Link(box[5][1],box[4][0]);
//----------
box[6]=new Array();
yLevel+=3;
CmtSummery="��¶�������������ȥʵ���Լ������룬�ؽ������Ļ����磬������Ҫ��Ҳ�İ�����";
CmtSelect="����ѧԺƪǰ����Ҫ�ڵ㡣ѡ��[��æ]�����������ߺͷ����ߣ�ѡ��[����һ������]���п��ܽ�������֦�ߡ�ʤƽ�ߺ��Ǵ��ߵĽ�ɫ���飬��֧�Դ�����·�ߵ�Ӱ��Ҫ�ȵ�ѧԺƪ���ڲŻ����ֳ�����";
CmtCaution="";
CmtOption="-��æ";
CmtEvents="01000000";
CmtEvntIru="侲��������ֿ��¼�";
box[6][0]=Textbox_Selection_C(x(1.5),y(yLevel),"�ź����´���������","3",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"�ź����´���������",0);
line[line.length]=Link(box[6][0],box[5][0]);
line[line.length]=Link(box[6][0],box[3][0]);
//----------
box[7]=new Array();
yLevel+=3;
box[7][0]=Textbox_Option(x(0.5),y(yLevel),"����һ������","l|�Ǵ�|ʤƽ|����֦|-�|-����");
line[line.length]=Link(box[7][0],box[6][0]);
box[7][1]=Textbox_Option(x(2.5),y(yLevel),"��æ","r|-�|-����|�Ǵ�|ʤƽ|����֦");
line[line.length]=Link(box[7][1],box[6][0]);
//----------
box[8]=new Array();
yLevel+=2;
box[8][0]=Textbox_Selection(x(2.5),y(yLevel),"�źӵ����顸ס���Ҽ�����");
line[line.length]=Link(box[8][0],box[7][1]);
//----------
box[9]=new Array();
yLevel+=3;
box[9][0]=Textbox_Option(x(1.5),y(yLevel),"��ô��������");
line[line.length]=Link(box[9][0],box[8][0]);
box[9][1]=Textbox_Option(x(3.5),y(yLevel),"����ô��");
line[line.length]=Link(box[9][1],box[8][0]);
//----------
box[10]=new Array();
yLevel+=5;
box[10][0]=Textbox_Date(x(4),y(yLevel),"4��17��","bottom");
line[line.length]=Link(box[10][0],Point(linx(4),liny(-1)));
box[10][0].addClick(function(){gotopage(5)});
line[line.length]=Link(Point(linx(2.5),liny(-1)),Point(linx(0.5),liny(-2)),box[7][0]);
line[line.length]=Link(Point(linx(2.5),liny(-2)),box[9][0]);
line[line.length]=Link(Point(linx(2.5),liny(-2)),box[9][1]);
line[line.length]=Link(Point(linx(2.5),liny(-1)),Point(linx(4.5),liny(-2)),box[5][1]);
line[line.length]=Link(Point(linx(2.5),liny(-1)),Point(linx(5.5),liny(-1)),box[1][1]);

hdft["footer"]=Footer(liny(1),4);