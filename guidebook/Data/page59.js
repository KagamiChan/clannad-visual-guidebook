// CVG HTML Data Page59 Done By Ligueston 2008.4.18
hdft["header"]=Header("gunfight","ǹս��Ϸ/ҵ�����","Gunfight Game / Amateur BaseBall","4��25��","April 25th");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(3.5),y(yLevel),"4��25��","top");
//----------
box[1]=new Array();
yLevel+=2;
box[1][0]=Textbox_Condition(x(3.5),y(yLevel),"17�գ���ԭ��ս�Ǵ����Ļ�Ŀ��");
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Selection(x(1.5),y(yLevel),"������ȥ");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Selection(x(3.5),y(yLevel),"��ȥ����","r|+δ����");
line[line.length]=Link(box[2][1],box[1][0]);
//----------
box[3]=new Array();
yLevel+=2;
box[3][0]=Textbox_Condition(x(1.5),y(yLevel),"22�գ��ش��Ǵ���ѯ��");
line[line.length]=Link(box[3][0],box[2][0]);
//----------
box[4]=new Array();
yLevel+=3;
box[4][0]=Textbox_Selection(x(0.5),y(yLevel),"���鷳��","l|+δ����");
line[line.length]=Link(box[4][0],box[3][0]);
box[4][1]=Textbox_Selection(x(2.5),y(yLevel),"�������������˼");
line[line.length]=Link(box[4][1],box[4][0]);
//----------
box[5]=new Array();
yLevel+=2;
box[5][0]=Textbox_Selection(x(0.5),y(yLevel),"�Ǵ������ĶԲ�");
line[line.length]=Link(box[5][0],box[4][0]);
//----------
box[6]=new Array();
yLevel+=3;
box[6][0]=Textbox_Option(x(0.5),y(yLevel),"�����˰��");
line[line.length]=Link(box[6][0],box[5][0]);
box[6][1]=Textbox_Option(x(2.5),y(yLevel),"������Ҹ�");
line[line.length]=Link(box[6][1],box[5][0]);
//----------
box[7]=new Array();
yLevel+=3;
box[7][0]=Textbox_Selection(x(3.5),y(yLevel),"�Դ�飵��ֶ�");
line[line.length]=Link(box[7][0],box[6][1]);
line[line.length]=Link(box[7][0],Point(linx(3.5),liny(-5)),box[4][1]);
line[line.length]=Link(box[7][0],box[2][1]);
//----------
box[8]=new Array();
yLevel+=3;
box[8][0]=Textbox_Option(x(1.5),y(yLevel),"����ʱҪ���׵����");
line[line.length]=Link(box[8][0],box[7][0]);
box[8][1]=Textbox_Option(x(3.5),y(yLevel),"�������ȥ��ֹ��ԭ��");
line[line.length]=Link(box[8][1],box[7][0]);
//----------
box[9]=new Array();
yLevel+=2;
box[9][0]=Textbox_Selection(x(3.5),y(yLevel),"�緹�Ľ����ʽ");
line[line.length]=Link(box[9][0],box[8][1]);
//----------
box[10]=new Array();
yLevel+=3;
box[10][0]=Textbox_Option(x(1.5),y(yLevel),"������һ��ȥʳ�óԷ�");
line[line.length]=Link(box[10][0],box[9][0]);
box[10][1]=Textbox_Option(x(3.5),y(yLevel),"�����緹");
line[line.length]=Link(box[10][1],box[9][0]);
box[10][2]=Textbox_Option(x(5.5),y(yLevel),"�ô�ԭȥ��");
line[line.length]=Link(box[10][2],box[9][0]);
//----------
box[11]=new Array();
yLevel+=3;
CmtSummery="��Ҳ�ʹ�ԭ��Ħ�š����ˡ�������������Ѱ�����Ա�͵Ϯ�ľ�ս��������";
CmtSelect="�˴�ֻ��ѡ��[�ٳ�]���ʣ���ѡ��ʱ�����ͨ������ѡ��[������]��[�칫��]����һ�ξ��������ٴλص������֧����ʱ���ղ�ѡ����Ǹ�ѡ�����ʧ����ɶ���ѡ���������ǲ�ѡ��[�ٳ�]������ٴλص������ʱֻʣ��һ��ѡ����ǲ�����������ѡ���ˣ���ʣ��ѡ�����֣���";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[11][0]=Textbox_Selection_C(x(3.5),y(yLevel),"ǰ���ľ�ս�ص�","1",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"ǰ����ս�ص�",0);
line[line.length]=Link(box[11][0],box[10][0]);
line[line.length]=Link(box[11][0],box[10][1]);
line[line.length]=Link(box[11][0],box[10][2]);
//----------
box[12]=new Array();
yLevel+=3;
box[12][0]=Textbox_Option(x(1.5),y(yLevel),"������");
line[line.length]=Link(box[12][0],box[11][0]);
box[12][1]=Textbox_Option(x(3.5),y(yLevel),"�ٳ�");
line[line.length]=Link(box[12][1],box[11][0]);
box[12][2]=Textbox_Option(x(5.5),y(yLevel),"�칫��");
line[line.length]=Link(box[12][2],box[11][0]);
//----------
box[13]=new Array();
yLevel+=3;
box[13][0]=Textbox_Condition(x(3.5),y(yLevel),"���գ��緹�Ľ����ʽ");
line[line.length]=Link(box[13][0],box[12][0]);
line[line.length]=Link(box[13][0],box[12][1]);
line[line.length]=Link(box[13][0],box[12][2]);
//----------
box[14]=new Array();
yLevel+=3;
box[14][0]=Textbox_Selection(x(1.5),y(yLevel),"������һ��ȥʳ�óԷ�");
line[line.length]=Link(box[14][0],box[13][0]);
box[14][1]=Textbox_Selection(x(3.5),y(yLevel),"�����緹");
line[line.length]=Link(box[14][1],box[13][0]);
box[14][2]=Textbox_Selection(x(5.5),y(yLevel),"�ô�ԭȥ��");
line[line.length]=Link(box[14][2],box[13][0]);
//----------
box[15]=new Array();
yLevel+=4;
box[15][0]=Textbox_Option(x(1.5),y(yLevel),"ǹս�ܱ�");
line[line.length]=Link(box[15][0],Point(linx(2.5),liny(-1)),box[14][0]);
line[line.length]=Link(box[15][0],Point(linx(2.5),liny(-1)),box[14][1]);
line[line.length]=Link(box[15][0],Point(linx(0.5),liny(-18)),box[8][0]);
line[line.length]=Link(box[15][0],box[6][0]);
box[15][1]=Textbox_Option(x(5.5),y(yLevel),"ǹսƽ��");
line[line.length]=Link(box[15][1],box[14][2]);
//----------
box[16]=new Array();
yLevel+=3;
box[16][0]=Textbox_Option(x(3.5),y(yLevel),"�������磨����");
line[line.length]=Link(box[16][0],box[15][0]);
line[line.length]=Link(box[16][0],box[15][1]);
//----------
box[17]=new Array();
yLevel+=2;
box[17][0]=Textbox_Date(x(3.5),y(yLevel),"4��26��","bottom");
box[17][0].addTitle("���ת����60ҳ");
box[17][0].addClick(function(){gotopage(60)});
line[line.length]=Link(box[17][0],box[16][0]);

hdft["footer"]=Footer(liny(2),59);