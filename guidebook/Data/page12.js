// CVG HTML Data Page12 Done By Shakugan_No_Kaluote 2008.4.11
hdft["header"]=Header("public","����·��","Public Route","4��20��","April 20th");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(2.5),y(yLevel),"4��20��","top");
//----------
box[1]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="�˴�{��߽���}��16�գ��ڷ�֧{�ź����´���������}ѡ��[��æ]��18�գ��ڷ�֧{������������źӵ�Լ��}ѡ��[���컹�Ǻ���ǰһ�����һ���]����δ���������֧��û��ѡ����Ӧѡ�����û�д���ǰһ��֧����������ڷ�ǰһ��֧ѡ����ȷ��û�д�����һ��֧����������ǡ�<br>{�����߽���}��16�գ��ڷ�֧{�ź����´���������}ѡ��[��æ]��18�գ��ڷ�֧{���Ե�̵ķ���}ѡ��[�ٿ�һ���]������ѡ����ȷ����������߽����������";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[1][0]=Textbox_Condition_C(x(2.5),y(yLevel),"��߻��߷����߽���","1",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"��߻��߷����߽���",0);
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Selection(x(1),y(yLevel),"��");
line[line.length]=Link(box[2][0],Point(linx(2),liny(-1)));
box[2][1]=Textbox_Selection(x(4),y(yLevel),"��");
line[line.length]=Link(box[2][1],Point(linx(2),liny(-1)));
line[line.length]=Link(Point(linx(2.5),liny(-1)),box[1][0]);
//----------
box[3]=new Array();
yLevel+=2;
box[3][0]=Textbox_Selection(x(1),y(yLevel),"���Ĺźӵ�����");
line[line.length]=Link(box[3][0],box[2][0]);
//----------
box[4]=new Array();
yLevel+=3;
box[4][0]=Textbox_Option(x(0),y(yLevel),"�����أ�");
line[line.length]=Link(box[4][0],box[3][0]);
box[4][1]=Textbox_Option(x(2),y(yLevel),"�źӵ����������ô����");
line[line.length]=Link(box[4][1],box[3][0]);
CmtSummery="";
CmtSelect="{18�գ�������һ����緹}����18�գ��ڷ�֧{������������źӵ�Լ��}ѡ��[�����������һ���]��������Ȼû�г��������֧�����Ƿ����˺�����һ����緹�ľ������ݣ�18��価�������δ���룬��16���ڷ�֧{�ź����´���������}ѡ����[��һ������]����δ���������֧�Ļ����ڷ�֧{Ѱ�Ҵ�ԭ����Ҳ���ĵ�˼��}�ֱ�ѡ��[ͼ���]��[���ܾ�����������]���ͻᷢ��������һ����緹�ľ������ݣ���������������������������ڷ�";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[4][2]=Textbox_Condition_C(x(4),y(yLevel),"18�գ�������һ����緹","2",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"18�գ�������һ����緹",0);
line[line.length]=Link(box[4][2],box[2][1]);
//----------
box[5]=new Array();
yLevel+=3;
box[5][0]=Textbox_Selection(x(3),y(yLevel),"��");
line[line.length]=Link(box[5][0],box[4][2]);
box[5][1]=Textbox_Selection(x(5),y(yLevel),"��");
line[line.length]=Link(box[5][1],box[4][2]);
//----------
box[6]=new Array();
yLevel+=2;
CmtSummery="��Ҳ��������ѧУ��������������ͼ��ݣ����Ŵ�ɨ��������������Ҳ��˼���š�";
CmtSelect="ѡ��[���Դ���������]����ȫ���������ߡ�һ֮��������ɫ���鹥����μ�P40��P42��";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[6][0]=Textbox_Selection_C(x(5),y(yLevel),"��ĩ��ͼ����е�����","3",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"��ĩ��ͼ����е�����",0);
line[line.length]=Link(box[6][0],box[5][1]);
//----------
box[7]=new Array();
yLevel+=3;
CmtSummery="��Ҳ���Ҵ�ԭ��·�ϱ�һ������ʶ���˽�ס�ˣ����ƺ��к���Ҫ���¡���";
CmtSelect="ѡ��[������ȥ]������֮��ķ�֧�зֱ�ѡ��[�ٿ�һ���]��[��æ]������Խ��떰ʤƽ�ߣ�ͬʱ�˳�����֦�ߣ����ѽ��룬��18�շ�֧{����������������֦}ѡ��[�����]�������������ѡ�����������֦�ߣ����ѽ��룩�������޷��ٽ��떰ʤƽ�ߡ�<br>�������ʱ���ڵ�������֧{��ҰѰ�������}ѡ��[��æ]�������AFTER STORY�󣬲��п��ܵõ���Ұ�ġ��⡱��";
CmtCaution="";
CmtOption="+������ȥ|+�ٿ�һ���|-��æ";
CmtEvents="00100011";
CmtEvntIru="��Ұ��Ϊ3��3�����ҵ������Ա��ѡ�����������������ҵ����";
box[7][0]=Textbox_Selection_C(x(1),y(yLevel),"ȥ�����·�ϡ���İ�����ӽ�ס","4",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"ȥ�����·�ϡ���İ�����ӽ�ס",0);
line[line.length]=Link(box[7][0],Point(linx(1),liny(-2)),box[5][0]);
line[line.length]=Link(box[7][0],Point(linx(1),liny(-5)),box[4][0]);
line[line.length]=Link(box[7][0],Point(linx(1),liny(-5)),box[4][1]);
box[7][1]=Textbox_Option(x(4),y(yLevel),"�뿪ͼ���","l|�Ǵ�|����֦|ѿ��");
line[line.length]=Link(box[7][1],box[6][0]);
box[7][2]=Textbox_Option(x(6),y(yLevel),"�ʿ��Դ���������","r|�Ǵ�|����֦|ѿ��");
line[line.length]=Link(box[7][2],box[6][0]);
//----------
box[8]=new Array();
yLevel+=2;
box[8][0]=Textbox_Condition(x(6),y(yLevel),"��������ȫ����","r|-����|�м���");
box[8][0].addTitle("���ת����40ҳ");
box[8][0].addClick(function(){gotopage(40)});
line[line.length]=Link(box[8][0],box[7][2]);
//----------
box[9]=new Array();
yLevel+=1;
box[9][0]=Textbox_Option(x(1),y(yLevel),"������ȥ","l|ʤƽ");
line[line.length]=Link(box[9][0],box[7][0]);
box[9][1]=Textbox_Option(x(3),y(yLevel),"������","r|ʤƽ");
line[line.length]=Link(box[9][1],box[7][0]);
//----------
box[10]=new Array();
yLevel+=2;
box[10][0]=Textbox_Selection(x(1),y(yLevel),"���˵�����");
line[line.length]=Link(box[10][0],box[9][0]);
//----------
box[11]=new Array();
yLevel+=3;
box[11][0]=Textbox_Option(x(1),y(yLevel),"�ٿ�һ���","l|ʤƽ");
line[line.length]=Link(box[11][0],box[10][0]);
box[11][1]=Textbox_Option(x(3),y(yLevel),"�뿪","r|ʤƽ");
line[line.length]=Link(box[11][1],box[10][0]);
//----------
box[12]=new Array();
yLevel+=2;
box[12][0]=Textbox_Selection(x(1),y(yLevel),"��ҰѰ�����");
line[line.length]=Link(box[12][0],box[11][0]);
//----------
box[13]=new Array();
yLevel+=3;
box[13][0]=Textbox_Option(x(1),y(yLevel),"��æ","l|ʤƽ|-����֦");
line[line.length]=Link(box[13][0],box[12][0]);
box[13][1]=Textbox_Option(x(3),y(yLevel),"�ܾ�","l|ʤƽ|-����֦");
line[line.length]=Link(box[13][1],box[12][0]);
//----------
box[14]=new Array();
yLevel+=3;
box[14][0]=Textbox_Block(x(4),y(yLevel),"A");
box[14][0].addLink("p12_retA");
box[14][0].addClick(function(){gotolink("p12_A")});
line[line.length]=Link(box[14][0],box[13][1]);
line[line.length]=Link(box[14][0],box[7][1]);
line[line.length]=Link(box[14][0],Point(linx(4),liny(-10)),box[9][1]);
line[line.length]=Link(box[14][0],Point(linx(4),liny(-5)),box[11][1]);
//----------
box[15]=new Array();
yLevel+=3;
box[15][0]=Textbox_Date(x(2.5),y(yLevel),"4��21��","bottom");
line[line.length]=Link(Point(linx(1),liny(-1)),box[13][0]);
line[line.length]=Link(Point(linx(1),liny(-1)),Point(linx(4),liny(-1)),box[14][0]);
line[line.length]=Link(box[15][0],Point(linx(2.5),liny(-1)));
box[15][0].addTitle("���ת��13ҳ");
box[15][0].addClick(function(){gotopage(13)});
//----------
box[16]=new Array();
yLevel+=5;
box[16][0]=Textbox_Block(x(0),y(yLevel),"A");
box[16][0].addLink("p12_A");
box[16][0].addClick(function(){gotolink("p12_retA")});
box[16][1]=Textbox_Condition(x(3),y(yLevel),"18�գ�����������������֦");
line[line.length]=Link(Point(linx(3),liny(0)-LINEBASEHEIGHT/2),Point(linx(3),liny(0)-LINEBASEHEIGHT/2));
board[board.length]=Board(liny(0),liny(20));
//----------
box[17]=new Array();
yLevel+=3;
box[17][0]=Textbox_Selection(x(1),y(yLevel),"�����");
line[line.length]=Link(box[17][0],box[16][1]);
box[17][1]=Textbox_Selection(x(5),y(yLevel),"Ŀ������ȥ","r|+δ����");
line[line.length]=Link(box[17][1],box[16][1]);
//----------
box[18]=new Array();
yLevel+=2;
CmtSummery="��æ�һ�è����Ҳ������֦���뵽���ķ������ͣ�������Ҳ���뿪�����";
CmtSelect="ѡ��[������������]�����21������֮ǰû�н�������˳�����߻�����߲����˳��Ǵ��߻��м����ߣ���ô���Ѿ���ȫ��������֦�ߣ���21�հ����Դ��ڹ�����·�����Ͽ�ʼ����֦��ɫ���顣���21��������Ȼ�����Ǵ��߻����м������У��򶼻����һ����֧��ѡ����ȷͬ�����Խ�������֦�ߣ��������価��������У�����μ�22�չ�����·���ԣ�����ζ��ʧȥ�˽�������֦�ߵĻ��ᡣ���ɫ���鹥����μ�P26��";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[18][0]=Textbox_Selection_C(x(1),y(yLevel),"�뿪����֦�ķ���","5",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"�뿪����֦�ķ���",0);
line[line.length]=Link(box[18][0],box[17][0]);
CmtSummery="";
CmtSelect="{������������д�������}����16�գ��ڷ�֧{�ź����´���������}��ѡ��[����һ������]��18�գ��ڷ�֧{飵�ռ������}ѡ��[�ظ�ռ��]�����ڷ�֧{�쳣�����ռ��}ѡ��[�Լ�ȥռ��]��û��ѡ����Ӧѡ�����û�д���ǰһ��֧����������ڷ�";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[18][1]=Textbox_Condition_C(x(5),y(yLevel),"������������д�������","6",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"������������д�������",0);
line[line.length]=Link(box[18][1],box[17][1]);
//----------
box[19]=new Array();
yLevel+=3;
box[19][0]=Textbox_Option(x(0),y(yLevel),"����������������","l|����֦");
line[line.length]=Link(box[19][0],box[18][0]);
box[19][1]=Textbox_Option(x(2),y(yLevel),"����������","r|����֦");
line[line.length]=Link(box[19][1],box[18][0]);
box[19][2]=Textbox_Selection(x(4),y(yLevel),"��");
line[line.length]=Link(box[19][2],box[18][1]);
box[19][3]=Textbox_Selection(x(6),y(yLevel),"��");
line[line.length]=Link(box[19][3],box[18][1]);
//----------
box[20]=new Array();
yLevel+=2;
CmtSummery="���е���ĩ����Ҳ�����������˴�ԭ�ķ��䣬����ط�����һ��ʹ��ԭ������ʳ���顣";
CmtSelect="ѡ��[���濴]���������ؾ�����������С����ؾ��鴥������Լ����е��κη�֧ѡ��������Ӱ��֮���������";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[20][0]=Textbox_Selection_C(x(4),y(yLevel),"��ԭ��������","7",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"��ԭ��������",0);
line[line.length]=Link(box[20][0],box[19][2]);
//----------
box[21]=new Array();
yLevel+=3;
box[21][0]=Textbox_Option(x(3),y(yLevel),"���濴");
line[line.length]=Link(box[21][0],box[20][0]);
box[21][1]=Textbox_Option(x(5),y(yLevel),"�ұ��������");
line[line.length]=Link(box[21][1],box[20][0]);
//----------
box[22]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="������·�������ؾ��顣������20�����磬���������������ӡ����18�ռ�֮ǰѡ���йأ�����ѡ�����Ӱ����鷢չ�������������ع�����μ�P24��";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[22][0]=Textbox_Option_C(x(3),y(yLevel),"���������","8",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"���������",0);
box[22][0].addLink("p12_retXTGZ");
box[22][0].addClick(function(){gotopage(24,"p24_XTGZ")});
line[line.length]=Link(box[22][0],box[21][0]);

yLevel+=4;
line[line.length]=Link(Point(linx(5),liny(0)),Point(linx(4),liny(-1)),box[22][0]);
line[line.length]=Link(Point(linx(5),liny(0)),Point(linx(4),liny(-1)),box[21][1]);
line[line.length]=Link(Point(linx(5),liny(0)),box[19][3]);
line[line.length]=Link(Point(linx(5),liny(0)),Point(linx(1),liny(0)),Point(linx(1),liny(-8)),box[19][0]);
line[line.length]=Link(Point(linx(5),liny(0)),Point(linx(1),liny(0)),Point(linx(1),liny(-8)),box[19][1]);
line[line.length]=Link(Point(linx(3),liny(0)),Point(linx(3),liny(0)));

hdft["footer"]=Footer(liny(3),12);
