// CVG HTML Data Page23 Done By Shakugan_No_Kaluote 2008.4.9
hdft["header"]=Header("public","����·��","Public Route","4��25�ա�4��26��","April 25th~April 26th");

var yLevel=0;

//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(4),y(yLevel),"4��25��","top");
//----------
box[1]=new Array();
yLevel+=2;
box[1][0]=Textbox_Condition(x(4),y(yLevel),"24�գ���Ҳ��Կ������");
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Selection(x(3),y(yLevel),"������ע������","l|+δ����");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Selection(x(5),y(yLevel),"������ס��");
line[line.length]=Link(box[2][1],box[1][0]);
//----------
box[3]=new Array();
yLevel+=2;
box[3][0]=Textbox_Condition(x(3),y(yLevel),"18�գ����Ե�̵ķ���");
line[line.length]=Link(box[3][0],box[2][0]);
//----------
box[4]=new Array();
yLevel+=3;
box[4][0]=Textbox_Selection(x(2),y(yLevel),"�ڿ�һ���");
line[line.length]=Link(box[4][0],box[3][0]);
box[4][1]=Textbox_Selection(x(4),y(yLevel),"�뿪","r|+δ����");
line[line.length]=Link(box[4][1],box[3][0]);
//----------
box[5]=new Array();
yLevel+=2;
box[5][0]=Textbox_Selection(x(2),y(yLevel),"�����е�N����������");
line[line.length]=Link(box[5][0],box[4][0]);
//----------
box[6]=new Array();
yLevel+=3;
box[6][0]=Textbox_Option(x(1),y(yLevel),"��ס��");
line[line.length]=Link(box[6][0],box[5][0]);
box[6][1]=Textbox_Option(x(3),y(yLevel),"��ʱ������");
line[line.length]=Link(box[6][1],box[5][0]);
//----------
box[7]=new Array();
yLevel+=2;
box[7][0]=Textbox_Option(x(1),y(yLevel),"���Ӵ�ʦ���壩");
box[7][0].addLink("p23_retKFMT5");
box[7][0].addClick(function(){gotopage(49,"p49_KFMT5")});
line[line.length]=Link(box[7][0],box[6][0]);
//----------
box[8]=new Array();
yLevel+=5;
box[8][0]=Textbox_Selection(x(4),y(yLevel),"�������磨����");
line[line.length]=Link(box[8][0],Point(linx(3),liny(-1)),Point(linx(2),liny(-2)),box[7][0]);
line[line.length]=Link(box[8][0],Point(linx(3),liny(-1)),Point(linx(2),liny(-2)),box[6][1]);
line[line.length]=Link(box[8][0],Point(linx(3),liny(-1)),box[4][1]);
line[line.length]=Link(box[8][0],box[2][1]);
//----------
box[9]=new Array();
yLevel+=2;
box[9][0]=Textbox_Date(x(4),y(yLevel),"4��26��","botton");
line[line.length]=Link(box[9][0],box[8][0]);
//----------
box[10]=new Array();
yLevel+=4;
box[10][0]=Textbox_Date(x(3),y(yLevel),"4��26��","top");
//----------
box[11]=new Array();
yLevel+=2;
box[11][0]=Textbox_Condition(x(3),y(yLevel),"24�գ���Ҳ��Կ������");
line[line.length]=Link(box[11][0],box[10][0]);
//----------
box[12]=new Array();
yLevel+=3;
box[12][0]=Textbox_Selection(x(1),y(yLevel),"������ס��");
line[line.length]=Link(box[12][0],box[11][0]);
box[12][1]=Textbox_Selection(x(5),y(yLevel),"������ע������","r|+δ����");
line[line.length]=Link(box[12][1],box[11][0]);
//----------
box[13]=new Array();
yLevel+=2;
box[13][0]=Textbox_Condition(x(1),y(yLevel),"18�գ����Ե�̵ķ���");
line[line.length]=Link(box[13][0],box[12][0]);
box[13][1]=Textbox_Condition(x(5),y(yLevel),"18�գ����Ե�̵ķ���");
line[line.length]=Link(box[13][1],box[12][1]);
//----------
box[14]=new Array();
yLevel+=3;
box[14][0]=Textbox_Selection(x(0),y(yLevel),"�ٿ�һ���");
line[line.length]=Link(box[14][0],box[13][0]);
box[14][1]=Textbox_Selection(x(2),y(yLevel),"�뿪","r|+δ����");
line[line.length]=Link(box[14][1],box[13][0]);
box[14][2]=Textbox_Selection(x(4),y(yLevel),"�ٿ�һ���");
line[line.length]=Link(box[14][2],box[13][1]);
box[14][3]=Textbox_Selection(x(6),y(yLevel),"�뿪","r|+δ����");
line[line.length]=Link(box[14][3],box[13][1]);
//----------
box[15]=new Array();
yLevel+=2;
CmtSummery="��Ҳ�������Ҫ���Ѵ�ԭ�ľ�������ʱ���������﷢�ּ���������Զ�������������";
CmtSelect="ѡ��[��·Ҫ��]������ȫ������ߣ�ѡ��[���ʿ�����]������ȫ��������ߣ������ܴ�ɷ���TRUE ENDING��������ߺ󣬿���ѡ���Թź�侻����Ҵ忡�򡣹ź��/�Ҵ忡���ɫ���鹥����μ�P51��P55���������ӽ�ɫ���鹥����μ�P43��P45��";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[15][0]=Textbox_Selection_C(x(0),y(yLevel),"�����ǹ�������Ļ��⣨һ��","1",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"�����ǹ�������Ļ��⣨һ��",0);
line[line.length]=Link(box[15][0],box[14][0]);
box[15][1]=Textbox_Condition(x(2),y(yLevel),"�����ȫ����");
box[15][1].addTitle("���ת����51ҳ");
box[15][1].addClick(function(){gotopage(51)});
line[line.length]=Link(box[15][1],box[14][1]);
CmtSummery="��ѧ����Ҳ�ؼҵ�;�У��������������м���������Զ���������";
CmtSelect="��24���ڷ�֧{��Ҳ��Կ������}ѡ��[������ע������]������18���ڷ�֧{���Ե�̵ķ���}ѡ����[�ٿ�һ���]��������ͬ�����������������������ѡ����б仯��ѡ��[���ʿ�����]�������ȫ��������ߣ����л����ɷ���TRUE ENDING���߷���GOOD ENDING����������BAD ENDING���������ӽ�ɫ���鹥����μ�P43��P45��";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[15][2]=Textbox_Selection_C(x(4),y(yLevel),"�����ǹ�������Ļ��⣨����","2",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"�����ǹ�������Ļ��⣨����",0);
line[line.length]=Link(box[15][2],box[14][2]);
box[15][3]=Textbox_Condition(x(6),y(yLevel),"� BAD ENDING");
line[line.length]=Link(box[15][3],box[14][3]);
//----------
box[16]=new Array();
yLevel+=3;
box[16][0]=Textbox_Option(x(0),y(yLevel),"���ʿ�����","l|����|-�");
line[line.length]=Link(box[16][0],box[15][0]);
box[16][1]=Textbox_Option(x(2),y(yLevel),"��·Ҫ��","r|-�|����");
line[line.length]=Link(box[16][1],box[15][0]);
box[16][2]=Textbox_Option(x(4),y(yLevel),"���ʿ�����","l|����");
line[line.length]=Link(box[16][2],box[15][2]);
box[16][3]=Textbox_Option(x(6),y(yLevel),"������Ȥ","r|����");
line[line.length]=Link(box[16][3],box[15][2]);
//----------
box[17]=new Array();
yLevel+=2;
box[17][0]=Textbox_Condition(x(0),y(yLevel),"��������ȫ����");
box[17][0].addTitle("���ת����43ҳ");
box[17][0].addClick(function(){gotopage(43)});
line[line.length]=Link(box[17][0],box[16][0]);
box[17][1]=Textbox_Condition(x(2),y(yLevel),"�����ȫ����");
box[17][1].addTitle("���ת����51ҳ");
box[17][1].addClick(function(){gotopage(51)});
line[line.length]=Link(box[17][1],box[16][1]);
box[17][2]=Textbox_Condition(x(4),y(yLevel),"��������ȫ����");
box[17][2].addTitle("���ת����43ҳ");
box[17][2].addClick(function(){gotopage(43)});
line[line.length]=Link(box[17][2],box[16][2]);
box[17][3]=Textbox_Condition(x(6),y(yLevel),"�����ȫ����");
box[17][3].addTitle("���ת����51ҳ");
box[17][3].addClick(function(){gotopage(51)});
line[line.length]=Link(box[17][3],box[16][3]);

new TextboxBase(linx(0),liny(7),"text","Padding","","btn");

hdft["footer"]=Footer(liny(3),23);