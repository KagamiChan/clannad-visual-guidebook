// CVG HTML Data Page19 Done By Shakugan_No_Kaluote 2008.4.3
hdft["header"]=Header("public","����·��","Public Route","4��23�գ�����","April 23th~Part 2");

var yLevel=0;

//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Condition(x(4),y(yLevel),"22�գ�����ԭ���ã��Ǵ����뾽��");
line[line.length]=Link(Point(linx(4),liny(0)-LINEBASEHEIGHT/2),Point(linx(4),liny(0)-LINEBASEHEIGHT/2));
line[line.length-1].addTitle("���ת�ص�18ҳ");
line[line.length-1].addClick(function(){gotopage(18)});
//----------
box[1]=new Array();
yLevel+=3;
box[1][0]=Textbox_Selection(x(3),y(yLevel),"�ʹ�ԭһ������","l|+δ����");
line[line.length]=Link(box[1][0],box[0][0]);
box[1][1]=Textbox_Selection(x(5),y(yLevel),"����ֹ����");
line[line.length]=Link(box[1][1],box[0][0]);
//----------
box[2]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="{���Ͻ��Ϲ�ϵ�߽�������}����15�գ��ڷ�֧{�����ˮ��ת���}ѡ��[����]���ڷ�֧{����������������֦}ѡ��[��ȥ����]������Ϊ����Ҳ��ʼ����ʶ�ӡ�飡�����֦��ǰ�����˳����ǵ���·����16��,�ڷ�֧{�ź����´���������}��ѡ��[��æ]��������ߣ���17�գ��ڷ�֧{��ȥѰ�ҹź��}ѡ��[ȥ���ҿ�һ��]�����ڽ������ķ�֧{���ڽ������İ��Ů��}ѡ��[�뿪]������ͬһ���ڷ�֧{������У��Ŀս���}ѡ��[ȥ˯һ��]�����ڽ������ķ�֧{�ս������İ��Ů��}ѡ��[�뿪]������Ϊ17�ս�������ߺ��˳�����18�գ��ڷ�֧����������͹źӵ�Լ��ѡ�������������һ��ԣ��˳���16�ս������ߣ�ͬʱ���������ߣ���19��,�ڷ�֧{������У����ȥ��һ��}ѡ��ȥ�����ң������ڽ������ķ�֧{�¿κ�,�߽������ҵ�Ů��}ѡ��[�뿪]������Ϊ�����м����ߺ��˳�����18��ͬ���н����м����ߵĻ��ᣬ�����ܴ����������޷����������ߣ���20��,�ڷ�֧{��ĩ��ͼ����е�����}ѡ��[�뿪ͼ����]���˳������ߣ���21�գ��ڷ�֧{���Ǵ�����ͬ}ѡ��[��ȷ����]��22��,�ڷ�֧{�ش��Ǵ���ѯ��}��ѡ��[���鷳��]������22�գ��ڷ�֧{�ش��Ǵ���ѯ��}��ѡ��[�������������˼]���ڷ�֧{����ԭ���ã��Ǵ����뾽��}ѡ��[�ʹ�ԭһ������]���������������Ϊ21����Ȼ���Ǵ��߲���22���˳�����������������������������֮��ķ�֧{��ԭ�뵽���µĴ򹤵���}��ѡ��[�ǰ�]�����ɽ�����Ϲ�ϵ�ߡ�";
CmtCaution="���Ϲ�ϵ����CLANNAD���ж���Ϊ���ӵ���·���乥��Ҫ������ڹ涨��ʱ���������˳�ѧԺƪ��ÿ��Ů���ǵ���·��";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[2][0]=Textbox_Condition_C(x(3),y(yLevel),"���Ͻ��Ϲ�ϵ�߽�������","2",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"���Ͻ��Ϲ�ϵ�߽�������",0);
line[line.length]=Link(box[2][0],box[1][0]);
//----------
box[3]=new Array();
yLevel+=3;
box[3][0]=Textbox_Selection(x(2),y(yLevel),"��");
line[line.length]=Link(box[3][0],box[2][0]);
box[3][1]=Textbox_Selection(x(4),y(yLevel),"��");
line[line.length]=Link(box[3][1],box[2][0]);
//----------
box[4]=new Array();
yLevel+=2;
box[4][0]=Textbox_Selection(x(2),y(yLevel),"��ԭ�뵽���µ���");
line[line.length]=Link(box[4][0],box[3][0]);
//----------
box[5]=new Array();
yLevel+=3;
box[5][0]=Textbox_Option(x(1),y(yLevel),"�ǰ�");
line[line.length]=Link(box[5][0],box[4][0]);
box[5][1]=Textbox_Option(x(3),y(yLevel),"��Ǹ����������");
line[line.length]=Link(box[5][1],box[4][0]);
//----------
box[6]=new Array();
yLevel+=2;
box[6][0]=Textbox_Quit(x(1),y(yLevel),"��������ȫ����");
line[line.length]=Link(box[6][0],box[5][0]);
//----------
box[7]=new Array();
yLevel+=1;
CmtSummery="";
CmtSelect="{21�ջ�22�գ���ԭ��ʶ�м���}����û��{����価�������}��������μ�������·22�յ�ע��1����{18�ջ�19�գ�����������ʶ�м���}��������μ�������·22��ע��4����ǰ���£������20�յķ�֧{��ҰѰ�����}��ѡ��[�ܾ�]����δ���������֧����21�����ᴥ����һ���з�֧���м������顣���20�յķ�֧��ѡ����[����]��������22�յķ�֧{�ش��Ǵ���ѯ��}��ѡ��[���鷳��]����δ���������֧����ô21�մ�ԭ��ʶ�м����ľ�����ӳٵ�22�շ�����22�ձ����ľ��鱻������ο�������·22��ע��4��������ڷ�֧{�ش��Ǵ���ѯ��}��ѡ����[�������������˼]����ԭ������ʶ�м�����<br>ֻҪ��������δ�ԭ��ʶ���м����ľ��飬�ͷ����ǵ�����";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[7][0]=Textbox_Condition_C(x(3),y(yLevel),"21�ջ�22�գ���ԭ��ʶ�м���","3",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"21�ջ�22�գ���ԭ��ʶ�м���",0);
line[line.length]=Link(box[7][0],box[5][1]);
line[line.length]=Link(box[7][0],box[3][1]);
//----------
box[8]=new Array();
yLevel+=3;
box[8][0]=Textbox_Selection(x(2),y(yLevel),"��");
line[line.length]=Link(box[8][0],box[7][0]);
box[8][1]=Textbox_Selection(x(4),y(yLevel),"��");
line[line.length]=Link(box[8][1],box[7][0]);
//----------
box[9]=new Array();
yLevel+=2;
box[9][0]=Textbox_Condition(x(2),y(yLevel),"22�գ���ԭȥ���м�������Ҳ��ͬ");
line[line.length]=Link(box[9][0],box[8][0]);
//----------
box[10]=new Array();
yLevel+=3;
box[10][0]=Textbox_Selection(x(2),y(yLevel),"ȥ","l|+δ����");
line[line.length]=Link(box[10][0],box[9][0]);
box[10][1]=Textbox_Selection(x(4),y(yLevel),"��ȥ");
line[line.length]=Link(box[10][1],box[9][0]);
//----------
box[11]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="";
CmtOption="-���Կ�";
CmtEvents="00010000";
CmtEvntIru="���21���ڷ�֧�ٵ�������ѡ���ȥѧ��ʳ�ö��˳���ߣ��ڴ�ѡ�����Կ������ͬ���ɲ���αŮ���¼�";
box[11][0]=Textbox_Selection_C(x(2),y(yLevel),"���԰�������","4",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"���԰�������",0);
line[line.length]=Link(box[11][0],box[10][0]);
//----------
box[12]=new Array();
yLevel+=3;
box[12][0]=Textbox_Option(x(2),y(yLevel),"���Կ�");
line[line.length]=Link(box[12][0],box[11][0]);
box[12][1]=Textbox_Option(x(4),y(yLevel),"����");
line[line.length]=Link(box[12][1],box[11][0]);
//----------
box[13]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="������·���ڣ������м�����·ǰ�ڣ�������顣������23�����û��ѡ���֧�����ݱ仯�빫����·�������ĳЩ��֧ѡ���йأ���Щ��ط�֧���м�������/�����ֿ��¼�ͼ�궼������ʾ���м��������﹥�Բμ�P32��";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[13][0]=Textbox_Option_C(x(2),y(yLevel),"�м���������","5",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"�м���������",0);
box[13][0].addLink("p19_retYNSP");
box[13][0].addClick(function(){gotopage(32,"p32_YNSP")});
line[line.length]=Link(box[13][0],box[12][0]);
//----------
box[14]=new Array();
yLevel+=4;
box[14][0]=Textbox_Condition(x(4),y(yLevel),"18�գ����Ե�̵ķ���");
line[line.length]=Link(box[14][0],Point(linx(3),liny(-1)),box[13][0]);
line[line.length]=Link(box[14][0],Point(linx(3),liny(-1)),box[12][1]);
line[line.length]=Link(box[14][0],Point(linx(5),liny(-8)),box[10][1]);
line[line.length]=Link(box[14][0],Point(linx(5),liny(-13)),box[8][1]);
line[line.length]=Link(box[14][0],box[1][1]);
//----------
box[15]=new Array();
yLevel+=3;
box[15][0]=Textbox_Selection(x(3),y(yLevel),"�ڿ�һ���");
line[line.length]=Link(box[15][0],box[14][0]);
box[15][1]=Textbox_Selection(x(5),y(yLevel),"�뿪","r|+δ����");
line[line.length]=Link(box[15][1],box[14][0]);
//----------
box[16]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="";
CmtOption="-ת��һ������";
CmtEvents="00001000";
CmtEvntIru="���Ӵ�ʦ������ѡ";
box[16][0]=Textbox_Selection_C(x(3),y(yLevel),"���ĵ����ʱ��","6",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"���ĵ����ʱ��",0);
line[line.length]=Link(box[16][0],box[15][0]);
//----------
box[17]=new Array();
yLevel+=3;
box[17][0]=Textbox_Option(x(2),y(yLevel),"ת��һ������");
line[line.length]=Link(box[17][0],box[16][0]);
box[17][1]=Textbox_Option(x(4),y(yLevel),"˯��");
line[line.length]=Link(box[17][1],box[16][0]);
//----------
box[18]=new Array();
yLevel+=2;
box[18][0]=Textbox_Selection(x(2),y(yLevel),"�����п�������");
line[line.length]=Link(box[18][0],box[17][0]);
//----------
box[19]=new Array();
yLevel+=3;
box[19][0]=Textbox_Option(x(1),y(yLevel),"��ס��");
line[line.length]=Link(box[19][0],box[18][0]);
box[19][1]=Textbox_Option(x(3),y(yLevel),"��ȥ����");
line[line.length]=Link(box[19][1],box[18][0]);
//----------
box[20]=new Array();
yLevel+=2;
box[20][0]=Textbox_Option(x(1),y(yLevel),"���Ӵ�ʦ������");
box[20][0].addLink("p19_retKFMT3");
box[20][0].addClick(function(){gotopage(48,"p48_KFMT3")});
line[line.length]=Link(box[20][0],box[19][0]);

line[line.length]=Link(Point(linx(4),liny(4)),Point(linx(3),liny(4)),Point(linx(2),liny(3)),box[20][0]);
line[line.length]=Link(Point(linx(4),liny(4)),Point(linx(3),liny(4)),Point(linx(2),liny(3)),box[19][1]);
line[line.length]=Link(Point(linx(4),liny(4)),Point(linx(3),liny(4)),box[17][1]);
line[line.length]=Link(Point(linx(4),liny(4)),Point(linx(5),liny(4)),box[15][1]);
line[line.length]=Link(Point(linx(4),liny(4)),Point(linx(4),liny(4)));
line[line.length-1].addTitle("���ת����19ҳ");
line[line.length-1].addClick(function(){gotopage(20)});

hdft["footer"]=Footer(liny(5),19);