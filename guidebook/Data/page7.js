// CVG HTML Data Page7 Done By Ligueston 2008.4.2
hdft["header"]=Header("public","����·��","Public Route","4��18�գ�һ��","April 18th~Part 1");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(3),y(yLevel),"4��18��","top");
//----------
box[1]=new Array();
yLevel+=2;
box[1][0]=Textbox_Condition(x(3),y(yLevel),"14�գ���ԭ��ս�Ǵ����Ļ�Ŀ��");
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Selection(x(2),y(yLevel),"������ȥ");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Selection(x(4),y(yLevel),"��ȥ����","r|+δ����");
line[line.length]=Link(box[2][1],box[1][0]);
//----------
box[3]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="";
CmtOption="-����";
CmtEvents="01000000";
CmtEvntIru="�Ǵ������������м�������������ֿ��¼�";
box[3][0]=Textbox_Selection_C(x(2),y(yLevel),"��ԭ��ս�Ǵ������Ŀ��","1",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"��ԭ��ս�Ǵ������Ŀ��",0);
line[line.length]=Link(box[3][0],box[2][0]);
//----------
box[4]=new Array();
yLevel+=3;
box[4][0]=Textbox_Option(x(1),y(yLevel),"����","l|�Ǵ�");
line[line.length]=Link(box[4][0],box[3][0]);
box[4][1]=Textbox_Option(x(3),y(yLevel),"�ܾ�","r|�Ǵ�");
line[line.length]=Link(box[4][1],box[3][0]);
//----------
box[5]=new Array();
yLevel+=2;
CmtSummery="��ԭ���Ǵ��߷��ڿ��У�������Ҳ��������";
CmtSelect="ѡ��[�߻�ȥ]�������Ǵ���������";
CmtCaution="���ž������룬�����Ǵ������Ļ�������ӣ���������Ҳ�����ӡ����������������������ֵ�ͻ���ʾNEW RECORD�����¿�ʼ��Ϸʱ����¼��Ȼ���档";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[5][0]=Textbox_Selection_C(x(1),y(yLevel),"���߷ɹ����Ĵ�ԭ","2",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"���߷ɹ����Ĵ�ԭ",0);
line[line.length]=Link(box[5][0],box[4][0]);
//----------
box[6]=new Array();
yLevel+=3;
box[6][0]=Textbox_Option(x(0),y(yLevel),"�߻�ȥ");
line[line.length]=Link(box[6][0],box[5][0]);
box[6][1]=Textbox_Option(x(2),y(yLevel),"�㿪");
line[line.length]=Link(box[6][1],box[5][0]);
//----------
box[7]=new Array();
yLevel+=5;
box[7][0]=Textbox_Condition(x(3),y(yLevel),"15�գ������ˮ��ת���");
line[line.length]=Link(box[7][0],Point(linx(2),liny(-1)),Point(linx(1),liny(-2)),box[6][0]);
line[line.length]=Link(box[7][0],Point(linx(2),liny(-1)),Point(linx(1),liny(-2)),box[6][1]);
line[line.length]=Link(box[7][0],Point(linx(2),liny(-1)),box[4][1]);
line[line.length]=Link(box[7][0],box[2][1]);
//----------
box[8]=new Array();
yLevel+=3;
box[8][0]=Textbox_Selection(x(1),y(yLevel),"��Ǹ");
line[line.length]=Link(box[8][0],box[7][0]);
box[8][1]=Textbox_Selection(x(5),y(yLevel),"����");
line[line.length]=Link(box[8][1],box[7][0]);
//----------
box[9]=new Array();
yLevel+=2;
box[9][0]=Textbox_Selection(x(1),y(yLevel),"飵�ռ������");
line[line.length]=Link(box[9][0],box[8][0]);
CmtSummery="��ֱ�Ů����ΧסҪ��ռ����������̸��飵�ռ��ʱȴ���ֵ���Щ��֣�����Ҫ����Ҳ�ʹ�ԭȥ���ԡ�";
CmtSelect="ѡ��[�ظ�ռ��]����[�Լ�ȥռ��]����16�յķ�֧{�ź����´���������}��ѡ����[��һ������]���������20��û�н�������֦�ߣ����վ��п��ܴ������ؾ��顣";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[9][1]=Textbox_Selection_C(x(5),y(yLevel),"�쳣�����ռ��","3",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"飵�ռ������ / �쳣�����ռ��",0);
line[line.length]=Link(box[9][1],box[8][1]);
//----------
box[10]=new Array();
yLevel+=3;
box[10][0]=Textbox_Option(x(0),y(yLevel),"�ظ�ռ��");
line[line.length]=Link(box[10][0],box[9][0]);
box[10][1]=Textbox_Option(x(2),y(yLevel),"�˿�ռ��");
line[line.length]=Link(box[10][1],box[9][0]);
box[10][2]=Textbox_Option(x(4),y(yLevel),"�Լ�ȥռ��");
line[line.length]=Link(box[10][2],box[9][1]);
box[10][3]=Textbox_Option(x(6),y(yLevel),"�ô�ԭȥռ��");
line[line.length]=Link(box[10][3],box[9][1]);
//----------
box[11]=new Array();
yLevel+=4;
box[11][0]=Textbox_Condition(x(3),y(yLevel),"17�գ��ͷ���˵����");
line[line.length]=Link(box[11][0],Point(linx(1),liny(-1)),box[10][0]);
line[line.length]=Link(box[11][0],Point(linx(1),liny(-1)),box[10][1]);
line[line.length]=Link(box[11][0],Point(linx(5),liny(-1)),box[10][2]);
line[line.length]=Link(box[11][0],Point(linx(5),liny(-1)),box[10][3]);
//----------
box[12]=new Array();
yLevel+=3;
box[12][0]=Textbox_Selection(x(2),y(yLevel),"��");
line[line.length]=Link(box[12][0],box[11][0]);
box[12][1]=Textbox_Selection(x(4),y(yLevel),"��");
line[line.length]=Link(box[12][1],box[11][0]);
//----------
box[13]=new Array();
yLevel+=3;
box[13][0]=Textbox_Selection(x(2),y(yLevel),"����������Ӳ������");
line[line.length]=Link(box[13][0],box[12][0]);
//----------
box[14]=new Array();
yLevel+=3;
box[14][0]=Textbox_Option(x(1),y(yLevel),"ץס��");
line[line.length]=Link(box[14][0],box[13][0]);
box[14][1]=Textbox_Option(x(3),y(yLevel),"������");
line[line.length]=Link(box[14][1],box[13][0]);
//----------
box[15]=new Array();
yLevel+=4;
CmtSummery="";
CmtSelect="�˴�{�����߽���}��15�գ��ڷ�֧{�����ˮ��ת���}ѡ��[����]����֧{ͥԺ������Ů��̸��}ѡ��[�ټ���̸��]��17�գ��ڷ�֧{��������������}ѡ��[������ȥ]��û��ѡ����Ӧѡ�����û�д�����һ��֧����������ڷ�<br>{17�ա��ͷ���˵����}�����������ѽ���ʱ���ڷ�֧{���ڽ������İ��Ů��}ѡ��[�����]���Լ�������δ����ʱ���ڷ�֧�ս������İ��Ů��ѡ���������ֻҪ������һ�������������˵������������";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[15][0]=Textbox_Condition_C(x(4),y(yLevel),"�����߽����17�գ��ͷ���˵����","4",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"����ѡ���֧",0);
line[line.length]=Link(box[15][0],Point(linx(2),liny(-1)),box[14][0]);
line[line.length]=Link(box[15][0],Point(linx(2),liny(-1)),box[14][1]);
line[line.length]=Link(box[15][0],box[12][1]);
//----------
box[16]=new Array();
yLevel+=3;
box[16][0]=Textbox_Selection(x(2),y(yLevel),"��");
line[line.length]=Link(box[16][0],box[15][0]);
box[16][1]=Textbox_Selection(x(6),y(yLevel),"��");
line[line.length]=Link(box[16][1],box[15][0]);
//----------
box[17]=new Array();
yLevel+=2;
CmtSummery="��ԭ��֪ȥ�Ķ��ˣ���ҲΪ���ӱ���ʦ�����ʶ��ܳ��˽��ң������ϴ�����Ѱ�ҵ���ͷ��";
CmtSelect="�˴���֧ѡ��ĸ��������ݸ���֮ǰ�ľ���ѡ�������仯�������ѽ��������ߣ�������[ͼ���]��[�ؽ���ȥ]����ѡ�����17������Ӵ��������[�ս���]��[�ؽ���ȥ]����ѡ�ͬʱ�������������������[ͼ���]��[�ս���]��[�ؽ���ȥ]����ѡ�����������������㣬�������˷�֧����ע��ǰһ��������֧���жϣ���<br>ѡ��[ͼ���]����������ߡ��˳������߲��Ҳ�����ʶ���ӣ������˳������ߣ�ѡ��[�ս���]����֮��ķ�֧ѡ��[�ٿ�һ��]������ʶ���ӣ�ѡ��[�ؽ���ȥ]��ͬʱ�˳������ߺͷ����ߡ�";
CmtCaution="";
CmtOption="-�ս���";
CmtEvents="11111010";
CmtEvntIru="��������������64HIT���м�������������ֿ��¼���3��3��������αŮ���¼���ҵ����򣻷��Ӵ�ʦ�����ѡ";
box[17][0]=Textbox_Selection_C(x(2),y(yLevel),"Ѱ�Ҵ�ԭ","5",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"Ѱ�Ҵ�ԭ",0);
line[line.length]=Link(box[17][0],box[16][0]);
//----------
box[18]=new Array();
yLevel+=3;
box[18][0]=Textbox_Option(x(0),y(yLevel),"ͼ���","l|����|-����");
line[line.length]=Link(box[18][0],box[17][0]);
box[18][1]=Textbox_Option(x(2),y(yLevel),"�ս���","l|����|-����");
line[line.length]=Link(box[18][1],box[17][0]);
box[18][2]=Textbox_Option(x(4),y(yLevel),"�ؽ���ȥ","r|����|����");
line[line.length]=Link(box[18][2],box[17][0]);
//----------
box[19]=new Array();
yLevel+=2;
box[19][0]=Textbox_Block(x(0),y(yLevel),"A");
box[19][0].addLink("p7_retA");
box[19][0].addClick(function(){gotopage(9,"p9_A")});
line[line.length]=Link(box[19][0],box[18][0]);
CmtSummery="��Ҳ�����û�С���ķ����ٴθ����Լ����֣��������ս��ҹ۲춯����";
CmtSelect="ѡ���ٿ�һ�������ʶ���ӣ����ѽ�������ߣ���17���ڷ�֧{���ڽ������İ��Ů��}ѡ��[�����]�����ܼ�����ѡ���뿪���˳���";
CmtCaution="";
CmtOption="-�ٿ�һ���";
CmtEvents="11111010";
CmtEvntIru="��ʼ���Ӵ�ʦ���飻���ӳ�Ϊ3��3��������ҵ������Ա��ѡ������64HIT���м�������������ֿ��¼���αŮ���¼�";
box[19][1]=Textbox_Selection_C(x(2),y(yLevel),"���Ե�̵ķ���","6",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"���Ե�̵ķ���",0);
line[line.length]=Link(box[19][1],box[18][1]);
//----------
box[20]=new Array();
yLevel+=3;
box[20][0]=Textbox_Option(x(1),y(yLevel),"�ٿ�һ���");
line[line.length]=Link(box[20][0],box[19][1]);
box[20][1]=Textbox_Option(x(3),y(yLevel),"�뿪");
line[line.length]=Link(box[20][1],box[19][1]);
//----------
box[21]=new Array();
yLevel+=5;
box[21][0]=Textbox_Block(x(3),y(yLevel),"B");
box[19][0].addLink("p7_retB");
box[21][0].addClick(function(){gotopage(9,"p9_B")});
line[line.length]=Link(box[21][0],Point(linx(3),liny(-1)),Point(linx(2),liny(-2)),box[20][0]);
line[line.length]=Link(box[21][0],Point(linx(3),liny(-1)),Point(linx(2),liny(-2)),box[20][1]);
line[line.length]=Link(box[21][0],Point(linx(3),liny(-1)),box[18][2]);
line[line.length]=Link(box[21][0],box[16][1]);

line[line.length]=Link(Point(linx(3),liny(2)),box[21][0]);
line[line.length]=Link(Point(linx(3),liny(2)),Point(linx(0),liny(2)),box[19][0]);
line[line.length]=Link(Point(linx(3),liny(2)),Point(linx(3),liny(2)));
line[line.length-1].addTitle("���ת����8ҳ");
line[line.length-1].addClick(function(){gotopage(8)});

hdft["footer"]=Footer(liny(3),7);