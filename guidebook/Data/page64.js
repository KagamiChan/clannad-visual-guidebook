// CVG HTML Data Page64 Done By kyrios 2008.4.15
hdft["header"]=Header("nagisa","AFTER STORY","After Story","ͬ��ƪ��һ��","Chapter of Conhabitation Life~Part 1");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(3),y(yLevel),"ͬ��ƪ","top");
//----------
box[1]=new Array();
yLevel+=2;
box[1][0]=Textbox_Selection(x(3),y(yLevel),"����������������");
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Option(x(2),y(yLevel),"û�а취ֻ�ܰ�æ","l|����");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Option(x(4),y(yLevel),"���ǲ����Ǹ����첻��","r|����");
line[line.length]=Link(box[2][1],box[1][0]);
//----------
box[3]=new Array();
yLevel+=2;
box[3][0]=Textbox_Condition(x(2),y(yLevel),"���⡱���������11");
line[line.length]=Link(box[3][0],box[2][0]);         
//----------
box[4]=new Array();
yLevel+=3;
box[4][0]=Textbox_Selection(x(1),y(yLevel),"��");
line[line.length]=Link(box[4][0],box[3][0]);
box[4][1]=Textbox_Selection(x(3),y(yLevel),"��");
line[line.length]=Link(box[4][1],box[3][0]);
//----------
box[5]=new Array();
yLevel+=2;
box[5][0]=Textbox_Selection(x(1),y(yLevel),"˼��������");
line[line.length]=Link(box[5][0],box[4][0]);
//----------
box[6]=new Array();
yLevel+=3;
box[6][0]=Textbox_Option(x(0),y(yLevel),"����������");
line[line.length]=Link(box[6][0],box[5][0]);
box[6][1]=Textbox_Option(x(2),y(yLevel),"H������");
line[line.length]=Link(box[6][1],box[5][0]);
//----------
box[7]=new Array();
yLevel+=3;
box[7][0]=Textbox_Selection(x(1),y(yLevel),"�峿���ʺ�");
line[line.length]=Link(box[7][0],box[6][0]);
line[line.length]=Link(box[7][0],box[6][1]);
//----------
box[8]=new Array();
yLevel+=3;
box[8][0]=Textbox_Option(x(0),y(yLevel),"�ش�˵���Ϻ�");
line[line.length]=Link(box[8][0],box[7][0]);
box[8][1]=Textbox_Option(x(2),y(yLevel),"��ס");
line[line.length]=Link(box[8][1],box[7][0]);
CmtSummery="";
CmtSelect="";
CmtCaution="AFTER STORY�̳йź��ѧԺƪ��·�ķ�֧ѡ���¼������Ϸ,���,��AFTER STORY��ǣ�浽ѧԺƪ��ѡ���֧,�������һ�������߲������¼�Ĺ�����,����Ӧ��֧������ѡ�����жϵ�.";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[8][2]=Textbox_Condition_C(x(4),y(yLevel),"ѧԺƪ2��,�Դ����������","1",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"����ѡ���֧ AFTER STORY",0);
line[line.length]=Link(box[8][2],box[2][1]);
line[line.length]=Link(box[8][2],Point(linx(4),liny(-8)),box[4][1]);
//----------
box[9]=new Array();
yLevel+=3;
box[9][0]=Textbox_Option(x(1),y(yLevel),"�������⡱���");
line[line.length]=Link(box[9][0],box[8][0]);
line[line.length]=Link(box[9][0],box[8][1]);
box[9][1]=Textbox_Selection(x(3),y(yLevel),"ϲ��");
line[line.length]=Link(box[9][1],box[8][2]);
box[9][2]=Textbox_Selection(x(5),y(yLevel),"���Ѿ������");
line[line.length]=Link(box[9][2],box[8][2]);
//----------
box[10]=new Array();
yLevel+=2;
box[10][0]=Textbox_Quit(x(1),y(yLevel),"����  Good Ending");
line[line.length]=Link(box[10][0],box[9][0]);
box[10][1]=Textbox_Selection(x(3),y(yLevel),"����ѯ�ʵĻش�");
line[line.length]=Link(box[10][1],box[9][1]);
//----------
box[11]=new Array();
yLevel+=3;
box[11][0]=Textbox_Option(x(2),y(yLevel),"ϲ��");
line[line.length]=Link(box[11][0],box[10][1]);
box[11][1]=Textbox_Option(x(4),y(yLevel),"����������");
line[line.length]=Link(box[11][1],box[10][1]);
//----------
box[12]=new Array();
yLevel+=3;
box[12][0]=Textbox_Option(x(3),y(yLevel),"���硰�⡱���");
line[line.length]=Link(box[12][0],box[11][0]);
line[line.length]=Link(box[12][0],box[11][1]);
//----------
box[13]=new Array();
yLevel+=3;
box[13][0]=Textbox_Condition(x(3),y(yLevel),"ѧԺƪ20�գ���ҰѰ������");
line[line.length]=Link(box[13][0],box[12][0]);
line[line.length]=Link(box[13][0],box[9][2]);
//----------
box[14]=new Array();
yLevel+=3;
box[14][0]=Textbox_Selection(x(2),y(yLevel),"��æ");
line[line.length]=Link(box[14][0],box[13][0]);
box[14][1]=Textbox_Selection(x(4),y(yLevel),"�ܾ�");
line[line.length]=Link(box[14][1],box[13][0]);
//----------
box[15]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="";
CmtOption="+��ʵ�ش�|+����|-��������ȥ";
CmtEvents="00000001";
CmtEvntIru="���������������ҵ�������ѧ԰ƪ29�������ڹź������ǰ�������ӣ�������ȷ����ϯ��ҵ���񣬴˴���ѡ��û��Ӱ��";
box[15][0]=Textbox_Selection_C(x(2),y(yLevel),"��Ұ�����µ�׷��","2",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"��Ұ�����µ�׷��",0);
line[line.length]=Link(box[15][0],box[14][0]);
//----------
box[16]=new Array();
yLevel+=3;
box[16][0]=Textbox_Option(x(1),y(yLevel),"��ʵ�ش�","l|��Ұ");
line[line.length]=Link(box[16][0],box[14][0]);
box[16][1]=Textbox_Option(x(3),y(yLevel),"�����Ū��ȥ","r|��Ұ");
line[line.length]=Link(box[16][1],box[14][0]);
//----------
box[17]=new Array();
yLevel+=2;
box[17][0]=Textbox_Selection(x(1),y(yLevel),"����̸������");
line[line.length]=Link(box[17][0],box[16][0]);
//----------
box[18]=new Array();
yLevel+=3;
box[18][0]=Textbox_Option(x(1),y(yLevel),"����","l|��Ұ");
line[line.length]=Link(box[18][0],box[17][0]);
box[18][1]=Textbox_Option(x(3),y(yLevel),"����Ƶ��","r|��Ұ");
line[line.length]=Link(box[18][1],box[17][0]);
//----------
box[19]=new Array();
yLevel+=2;
box[19][0]=Textbox_Selection(x(1),y(yLevel),"����Ұ̸�Լ��Ĺ�ȥ");
line[line.length]=Link(box[19][0],box[18][0]);
//----------
box[20]=new Array();
yLevel+=3;
box[20][0]=Textbox_Option(x(1),y(yLevel),"�ټ�������ȥ","l|��Ұ");
line[line.length]=Link(box[20][0],box[19][0]);
box[20][1]=Textbox_Option(x(3),y(yLevel),"ͬ��","r|��Ұ");
line[line.length]=Link(box[20][1],box[19][0]);
//----------
box[21]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="";
CmtOption="-�ȵ�����һ��ȥ";
CmtEvents="00000001";
CmtEvntIru="���Ӳ����ҵ�������ѧ԰ƪ29�������ڹź������ǰ�������ӣ�������ȷ����ϯ��ҵ���񣬴˴���ѡ��û��Ӱ��";
box[21][0]=Textbox_Selection_C(x(1),y(yLevel),"̽��������ʦ","3",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"̽��������ʦ",0);
line[line.length]=Link(box[21][0],box[20][0]);
//----------
box[22]=new Array();
yLevel+=3;
box[22][0]=Textbox_Option(x(1),y(yLevel),"�Ⱥ���һ��ȥ");
line[line.length]=Link(box[22][0],box[21][0]);
box[22][1]=Textbox_Option(x(3),y(yLevel),"���һ����ȥ");
line[line.length]=Link(box[22][1],box[21][0]);
//----------
line[line.length]=Link(Point(linx(2),liny(3)),box[22][0]);
line[line.length]=Link(Point(linx(2),liny(3)),box[22][1]);
line[line.length]=Link(Point(linx(2),liny(3)),Point(linx(4),liny(3)),Point(linx(4),liny(-2)),box[20][1]);
line[line.length]=Link(Point(linx(2),liny(3)),Point(linx(4),liny(3)),Point(linx(4),liny(-7)),box[18][1]);
line[line.length]=Link(Point(linx(2),liny(3)),Point(linx(4),liny(3)),Point(linx(4),liny(-12)),box[16][1]);
line[line.length]=Link(Point(linx(2),liny(3)),Point(linx(4),liny(3)),box[14][1]);
line[line.length]=Link(Point(linx(3),liny(3)),Point(linx(3),liny(3)));
line[line.length-1].addTitle("���ת����ʮ��ҳ");
line[line.length-1].addClick(function(){gotopage(65)});

hdft["footer"]=Footer(liny(1),64);