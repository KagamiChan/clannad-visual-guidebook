// CVG HTML Data Page39 Done By Shakugan_No_Kaluote 2008.4.20
hdft["header"]=Header("sunohara","��ԭ ��ƽ/��ԭ ѿ��","Youhei Sunohara/Mei Sunohara","αŮ���¼�","Fake Girlfriend Event");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Option(x(0),y(yLevel),"αŮ���¼�");
box[0][0].addLink("p39_FAKEGF");
box[0][1]=Textbox_Selection(x(4),y(yLevel),"�������ֽ���");
line[line.length]=Link(Point(linx(4),liny(0)-LINEBASEHEIGHT/2),Point(linx(4),liny(0)-LINEBASEHEIGHT/2));
//----------
box[1]=new Array();
yLevel+=3;
box[1][0]=Textbox_Option(x(2),y(yLevel),"���ֽ���");
line[line.length]=Link(box[1][0],box[0][1]);
box[1][1]=Textbox_Option(x(4),y(yLevel),"����֮��");
line[line.length]=Link(box[1][1],box[0][1]);
//----------
box[2]=new Array();
yLevel+=2;
box[2][0]=Textbox_Selection(x(2),y(yLevel),"ѡ���㻹������");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Condition(x(4),y(yLevel),"15��,����������ͥԺ�е�Ů��");
line[line.length]=Link(box[2][1],box[1][1]);
//----------
box[3]=new Array();
yLevel+=3;
box[3][0]=Textbox_Option(x(0),y(yLevel),"����");
line[line.length]=Link(box[3][0],box[2][0]);
box[3][1]=Textbox_Option(x(2),y(yLevel),"���");
line[line.length]=Link(box[3][1],box[2][0]);
box[3][2]=Textbox_Selection(x(4),y(yLevel),"����");
line[line.length]=Link(box[3][2],box[2][1]);
box[3][3]=Textbox_Selection(x(6),y(yLevel),"������","r|+δ����");
line[line.length]=Link(box[3][3],box[2][1]);
//----------
box[4]=new Array();
yLevel+=2;
box[4][0]=Textbox_Condition(x(0),y(yLevel),"23��,��ץ��Ҳ��ȥ����̸��");
line[line.length]=Link(box[4][0],box[3][0]);
box[4][1]=Textbox_Quit(x(2),y(yLevel),"��αŮ�Ѿ���");
box[4][1].addClick(function(){gotopage(38,"p38_retFAKEGF")});
line[line.length]=Link(box[4][1],box[3][1]);
//----------
box[5]=new Array();
yLevel+=3;
box[5][0]=Textbox_Selection(x(0),y(yLevel),"����ȥ");
line[line.length]=Link(box[5][0],box[4][0]);
box[5][1]=Textbox_Selection(x(2),y(yLevel),"����","r|+δ����");
line[line.length]=Link(box[5][1],box[4][0]);
//----------
box[6]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="�ٴν���αŮ���¼��������ص�24�շ�֧{�������ֽ���}��";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[6][0]=Textbox_Option_C(x(0),y(yLevel),"αŮ���¼�","1",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"αŮ���¼�",0);
box[6][0].addClick(function(){gotolink("p39_FAKEGF")});
line[line.length]=Link(box[6][0],box[5][0]);
box[6][1]=Textbox_Quit(x(2),y(yLevel),"�αŮ�Ѿ���");
box[6][1].addClick(function(){gotopage(38,"p38_retFAKEGF")});
line[line.length]=Link(box[6][1],box[5][1]);
CmtSummery="";
CmtSelect="��ʵ�ϣ����21���ڷ�֧{�ٵ�������}ѡ��[��������]����24�ջ���һ������価����ӵľ��飬����޷����봺ԭ���õ���·�����޷���������αŮ���¼�����ˣ�ֻ�в�����21�յ�{��֧�ٵ�������}������һ������15���ڷ�֧{����������ͥԺ�е�Ů��}��ѡ��[����]����Լ���£������ַ������Ա��ⴥ�������֧��16���ڷ�֧{�ź����´���������}��ѡ��[����һ������]������{18�գ�������һ����緹}������μ�������·19��ע��2������Ҫ��21��֮ǰ�뿪価������ߣ����Ż���ֽ������ķ�֧{���ǹź�}��";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[6][2]=Textbox_Condition_C(x(4),y(yLevel),"21��,�ٵ�������","2",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"21��,�ٵ�������",0);
line[line.length]=Link(box[6][2],box[3][2]);
//----------
box[7]=new Array();
yLevel+=3;
box[7][0]=Textbox_Selection(x(2),y(yLevel),"��ȥѧ��ʳ��");
line[line.length]=Link(box[7][0],box[6][2]);
box[7][1]=Textbox_Selection(x(4),y(yLevel),"��������","r|+δ����");
line[line.length]=Link(box[7][1],box[6][2]);
//----------
box[8]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="{23�գ�������Ϸ�������}����23���м����������д���{������Ϸ�������}�ľ��顣�м�����������ع�����μ�P32��";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[8][0]=Textbox_Condition_C(x(2),y(yLevel),"23�գ�������Ϸ�������","3",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"23�գ�������Ϸ�������",0);
line[line.length]=Link(box[8][0],box[7][0]);
//----------
box[9]=new Array();
yLevel+=3;
box[9][0]=Textbox_Selection(x(0),y(yLevel),"��");
line[line.length]=Link(box[9][0],box[8][0]);
box[9][1]=Textbox_Selection(x(2),y(yLevel),"��");
line[line.length]=Link(box[9][1],box[8][0]);
//----------
box[10]=new Array();
yLevel+=3;
box[10][0]=Textbox_Selection(x(3),y(yLevel),"���ǹź�");
line[line.length]=Link(box[10][0],box[9][1]);
line[line.length]=Link(box[10][0],box[7][1]);
//----------
box[11]=new Array();
yLevel+=3;
box[11][0]=Textbox_Option(x(2),y(yLevel),"����֮��");
line[line.length]=Link(box[11][0],box[10][0]);
box[11][1]=Textbox_Option(x(4),y(yLevel),"���йź�");
line[line.length]=Link(box[11][1],box[10][0]);
//----------
box[12]=new Array();
yLevel+=2;
box[12][0]=Textbox_Quit(x(4),y(yLevel),"�αŮ�Ѿ���");
box[12][0].addClick(function(){gotopage(38,"p38_retFAKEGF")});
line[line.length]=Link(box[12][0],box[11][1]);
//----------
box[13]=new Array();
yLevel+=1;
box[13][0]=Textbox_Condition(x(0),y(yLevel),"17�գ���ԭ��ս�Ǵ����Ļ�Ŀ��");
line[line.length]=Link(box[13][0],box[11][0]);
line[line.length]=Link(box[13][0],box[9][0]);
box[13][1]=Textbox_Condition(x(6),y(yLevel),"17�գ���ԭ��ս�Ǵ����Ļ�Ŀ");
line[line.length]=Link(box[13][1],box[3][3]);
//----------
box[14]=new Array();
yLevel+=3;
box[14][0]=Textbox_Selection(x(0),y(yLevel),"��ȥ����","l|+δ����");
line[line.length]=Link(box[14][0],box[13][0]);
box[14][1]=Textbox_Selection(x(2),y(yLevel),"������ȥ");
line[line.length]=Link(box[14][1],box[13][0]);
box[14][2]=Textbox_Selection(x(4),y(yLevel),"������ȥ");
line[line.length]=Link(box[14][2],box[13][1]);
box[14][3]=Textbox_Selection(x(6),y(yLevel),"��ȥ����","r|+δ����");
line[line.length]=Link(box[14][3],box[13][1]);
//----------
box[15]=new Array();
yLevel+=3;
box[15][0]=Textbox_Selection(x(3),y(yLevel),"�����Ǵ�");
line[line.length]=Link(box[15][0],box[14][1]);
line[line.length]=Link(box[15][0],box[14][2]);
//----------
box[16]=new Array();
yLevel+=3;
box[16][0]=Textbox_Option(x(2),y(yLevel),"����֮��");
line[line.length]=Link(box[16][0],box[15][0]);
box[16][1]=Textbox_Option(x(4),y(yLevel),"�����Ǵ�");
line[line.length]=Link(box[16][1],box[15][0]);
//----------
box[17]=new Array();
yLevel+=2;
box[17][0]=Textbox_Quit(x(4),y(yLevel),"�Ǵ�αŮ�Ѿ���");
box[17][0].addClick(function(){gotopage(38,"p38_retFAKEGF")});
line[line.length]=Link(box[17][0],box[16][1]);
//----------
box[18]=new Array();
yLevel+=1;
box[18][0]=Textbox_Condition(x(0),y(yLevel),"18�գ����Ե�̵ķ���");
line[line.length]=Link(box[18][0],box[16][0]);
line[line.length]=Link(box[18][0],box[14][0]);
box[18][1]=Textbox_Condition(x(6),y(yLevel),"18�գ����Ե�̵ķ���");
line[line.length]=Link(box[18][1],box[14][3]);
//----------
box[19]=new Array();
yLevel+=3;
box[19][0]=Textbox_Selection(x(0),y(yLevel),"�뿪","l|+δ����");
line[line.length]=Link(box[19][0],box[18][0]);
box[19][1]=Textbox_Selection(x(2),y(yLevel),"�ٿ�һ���");
line[line.length]=Link(box[19][1],box[18][0]);
box[19][2]=Textbox_Selection(x(4),y(yLevel),"�ٿ�һ���");
line[line.length]=Link(box[19][2],box[18][1]);
box[19][3]=Textbox_Selection(x(6),y(yLevel),"�뿪","r|+δ����");
line[line.length]=Link(box[19][3],box[18][1]);
//----------
box[20]=new Array();
yLevel+=3;
box[20][0]=Textbox_Selection(x(3),y(yLevel),"���Ƿ���");
line[line.length]=Link(box[20][0],box[19][1]);
line[line.length]=Link(box[20][0],box[19][2]);
//----------
box[21]=new Array();
yLevel+=3;
box[21][0]=Textbox_Option(x(2),y(yLevel),"���з���");
line[line.length]=Link(box[21][0],box[20][0]);
box[21][1]=Textbox_Option(x(4),y(yLevel),"����֮��");
line[line.length]=Link(box[21][1],box[20][0]);
//----------
box[22]=new Array();
yLevel+=2;
box[22][0]=Textbox_Quit(x(2),y(yLevel),"����αŮ�Ѿ���");
box[22][0].addClick(function(){gotopage(38,"p38_retFAKEGF")});
line[line.length]=Link(box[22][0],box[21][0]);
//----------
box[23]=new Array();
yLevel+=1;
box[23][0]=Textbox_Selection(x(6),y(yLevel),"��㴺ԭ");
line[line.length]=Link(box[23][0],box[21][1]);
line[line.length]=Link(box[23][0],box[19][3]);
//----------
box[24]=new Array();
yLevel+=3;
box[24][0]=Textbox_Option(x(4),y(yLevel),"�����ٰ�");
line[line.length]=Link(box[24][0],box[23][0]);
box[24][1]=Textbox_Option(x(6),y(yLevel),"����֮��");
line[line.length]=Link(box[24][1],box[23][0]);
//----------
box[25]=new Array();
yLevel+=4;
box[25][0]=Textbox_Option(x(3),y(yLevel),"αŮ���¼�");
box[25][0].addClick(function(){gotolink("p39_FAKEGF")});
line[line.length]=Link(box[25][0],Point(linx(6),liny(-1)),box[24][0]);
line[line.length]=Link(box[25][0],box[24][1]);
line[line.length]=Link(box[25][0],box[19][0]);
line[line.length]=Link(Point(linx(3),liny(1)),Point(linx(3),liny(1)));

hdft["footer"]=Footer(liny(2),39);