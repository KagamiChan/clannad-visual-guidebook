// CVG HTML Data Page21 Done By Shakugan_No_Kaluote 2008.4.6
hdft["header"]=Header("public","����·��","Public Route","4��24�գ�һ��","April 24th~Part 1");

var yLevel=0;

//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(3),y(yLevel),"4��24��","top");
//----------
box[1]=new Array();
yLevel+=2;
box[1][0]=Textbox_Condition(x(3),y(yLevel),"21�գ��ٵ�������");
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Selection(x(0),y(yLevel),"��������");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Selection(x(6),y(yLevel),"��ȥѧ��ʳ��","r|+δ����");
line[line.length]=Link(box[2][1],box[1][0]);
//----------
box[3]=new Array();
yLevel+=2;
box[3][0]=Textbox_Block(x(0),y(yLevel),"A");
line[line.length]=Link(box[3][0],box[2][0]);
box[3][0].addLink("p21_retA");
box[3][0].addClick(function(){gotolink("p21_A")});
box[3][1]=Textbox_Condition(x(6),y(yLevel),"22�գ�����ԭ���ã��Ǵ����뾽��");
line[line.length]=Link(box[3][1],box[2][1]);
//----------
box[4]=new Array();
yLevel+=3;
box[4][0]=Textbox_Selection(x(3),y(yLevel),"����ֹ����");
line[line.length]=Link(box[4][0],box[3][1]);
box[4][1]=Textbox_Selection(x(6),y(yLevel),"�ʹ�ԭһ������","r|+δ����");
line[line.length]=Link(box[4][1],box[3][1]);
//----------
box[5]=new Array();
yLevel+=2;
box[5][0]=Textbox_Condition(x(3),y(yLevel),"23�գ���ܵĽ��");
line[line.length]=Link(box[5][0],box[4][0]);
box[5][1]=Textbox_Option(x(6),y(yLevel),"��ԭ����Ц������");
box[5][1].addLink("p21_retSNJK3");
box[5][1].addClick(function(){gotopage(25,"p25_SNJK3");})
line[line.length]=Link(box[5][1],box[4][1]);
//----------
box[6]=new Array();
yLevel+=3;
box[6][0]=Textbox_Selection(x(1),y(yLevel),"�Ǽһ��Ի�����ΪĿ��");
line[line.length]=Link(box[6][0],box[5][0]);
box[6][1]=Textbox_Selection(x(3),y(yLevel),"�Ǽһ���ѧ�˺ܳ�ʱ��");
line[line.length]=Link(box[6][1],box[5][0]);
box[6][2]=Textbox_Selection(x(5),y(yLevel),"�Ǽһ�Թ���ɳ��","r|+δ����");
line[line.length]=Link(box[6][2],box[5][0]);
//----------
box[7]=new Array();
yLevel+=2;
CmtSummery="�Ǵ���û�����緹ʱ�������ң���Щ��ã����Ҳ˼�����Ǵ����Լ�������";
CmtSelect="ѡ��[˵����ֻ������Ǵ���һ��]������ȫ�����Ǵ��ߣ������Ǵ���ɫ���鹥�Բμ�P27��P51��";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[7][0]=Textbox_Selection_C(x(1),y(yLevel),"���Ǵ����뷨","1",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"���Ǵ����뷨",0);
line[line.length]=Link(box[7][0],box[6][0]);
//----------
box[8]=new Array();
yLevel+=3;
box[8][0]=Textbox_Option(x(1),y(yLevel),"˵����ֻ������Ǵ���һ��","l|�Ǵ�");
line[line.length]=Link(box[8][0],box[7][0]);
box[8][1]=Textbox_Option(x(3),y(yLevel),"˵����ֻ�ǰ����������Ƶ��˰���","r|�Ǵ�");
line[line.length]=Link(box[8][1],box[7][0]);
//----------
box[9]=new Array();
yLevel+=1
box[9][0]=Textbox_Block(x(6),y(yLevel),"B");
box[9][0].addLink("p21_retB");
box[9][0].addClick(function(){gotopage(22,"p22_B")});
line[line.length]=Link(box[9][0],box[5][1]);
//----------
box[10]=new Array();
yLevel+=1
box[10][0]=Textbox_Condition(x(1),y(yLevel),"�Ǵ�����ȫ����");
box[10][0].addTitle("���ת����27ҳ");
box[10][0].addClick(function(){gotopage(27)});
line[line.length]=Link(box[10][0],box[8][0]);
//----------
box[11]=new Array();
yLevel+=2;
CmtSummery="��ԭ����ߵ��ſڱ�����������ȥ�μ�ǹս��Ϸ����ԭ������Ҳһ��μӡ�";
CmtSelect="ѡ��[�μ�]�������ǹս��Ϸ/ҵ������ߡ�ǹս��Ϸ/ҵ�������鹥����μ�P59��P61��";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[11][0]=Textbox_Selection_C(x(3),y(yLevel),"��ɫ����������","2",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"��ɫ����������",0);
line[line.length]=Link(box[11][0],box[8][1]);
line[line.length]=Link(box[11][0],box[9][0]);
line[line.length]=Link(box[11][0],Point(linx(3),liny(-1)),Point(linx(4),liny(-6)),box[6][1]);
line[line.length]=Link(box[11][0],Point(linx(3),liny(-1)),Point(linx(4),liny(-6)),box[6][2]);
//----------
box[12]=new Array();
yLevel+=3;
box[12][0]=Textbox_Option(x(3),y(yLevel),"���μ�","l|ʤƽ");
line[line.length]=Link(box[12][0],box[11][0]);
box[12][1]=Textbox_Option(x(5),y(yLevel),"�μ�","r|ʤƽ");
line[line.length]=Link(box[12][1],box[11][0]);
//----------
box[13]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="�˴�{ʤƽ�߽���}��21�գ��ڷ�֧{�ܺ��������ļ���}ѡ��[�����ַ���͸���]��22�գ��ڷ�֧{��ǰ��ĵ���Ĵ�������}ѡ��[��ĵ����������]����δ���������֧���ڷ�֧{��ԭ����Ҳ��æװ������}ѡ��[����æ]��û��ѡ����Ӧѡ�����û�д���������һ��������֧����������ڷ񣻵�һ��������֧ѡ����ȷ��û�д����ڶ�����֧����������ǡ�<br>��ʤƽ��ɫ���鹥����μ�P37��";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[13][0]=Textbox_Condition_C(x(3),y(yLevel),"ʤƽ�߽���","3",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"ʤƽ�߽���",0);
line[line.length]=Link(box[13][0],box[12][0]);
box[13][1]=Textbox_Condition(x(5),y(yLevel),"ǹս��Ϸ/ҵ���������ȫ����");
box[13][1].addTitle("���ת����59ҳ");
box[13][1].addClick(function(){gotopage(59)});
line[line.length]=Link(box[13][1],box[12][1]);
//----------
box[14]=new Array();
yLevel+=3;
box[14][0]=Textbox_Condition(x(0),y(yLevel),"23�գ�����ʱ������");
line[line.length]=Link(box[14][0],box[3][0]);
box[14][1]=Textbox_Selection(x(3),y(yLevel),"��");
line[line.length]=Link(box[14][1],box[13][0]);
box[14][2]=Textbox_Selection(x(5),y(yLevel),"��");
line[line.length]=Link(box[14][2],box[13][0]);
//----------
box[15]=new Array();
yLevel+=2;
box[15][0]=Textbox_Condition(x(5),y(yLevel),"ʤƽ����ȫ����");
box[15][0].addTitle("���ת����37ҳ");
box[15][0].addClick(function(){gotopage(37)});
line[line.length]=Link(box[15][0],box[14][2]);
//----------
box[16]=new Array();
yLevel+=1;
box[16][0]=Textbox_Selection(x(0),y(yLevel),"���ǵ�");
line[line.length]=Link(box[16][0],box[14][0]);
box[16][1]=Textbox_Selection(x(2),y(yLevel),"�����������");
line[line.length]=Link(box[16][1],box[14][0]);
//----------
box[17]=new Array();
yLevel+=2;
CmtSummery="���Ϊ������������ǳ���ٴ��ܵ��˴����վ����ߵ���ҲӦ����Щʲô�أ�";
CmtSelect="ѡ��[������ס��]�������ߣ������˳���ߡ������ߵĹ����У�ѡ��[������ע������]���Ǵ��TRUE ENDING�ı�Ҫ����֮һ��";
CmtCaution="";
CmtOption="-������ע������";
CmtEvents="00001000";
CmtEvntIru="���Ӵ�ʦ��ɱ�ѡ";
box[17][0]=Textbox_Selection_C(x(0),y(yLevel),"��Ҳ��Կ������","4",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"��Ҳ��Կ������",0);
line[line.length]=Link(box[17][0],box[16][0]);
//----------
box[18]=new Array();
yLevel+=3;
box[18][0]=Textbox_Option(x(0),y(yLevel),"������ע������","l|-�");
line[line.length]=Link(box[18][0],box[17][0]);
box[18][1]=Textbox_Option(x(2),y(yLevel),"������ס��","r|-�");
line[line.length]=Link(box[18][1],box[17][0]);
//----------
box[19]=new Array();
yLevel+=4;
box[19][0]=Textbox_Date(x(3),y(yLevel),"4��25��","bottom");
line[line.length]=Link(box[19][0],Point(linx(1),liny(-1)),box[18][0]);
line[line.length]=Link(box[19][0],Point(linx(1),liny(-1)),box[18][1]);
line[line.length]=Link(box[19][0],box[14][1]);
box[19][0].addTitle("���ת����23ҳ");
box[19][0].addClick(function(){gotopage(23)});
//----------
box[20]=new Array();
yLevel+=5;
box[20][0]=Textbox_Block(x(0),y(yLevel),"A");
box[20][0].addLink("p21_A");
box[20][0].addClick(function(){gotolink("p21_retA")});
box[20][1]=Textbox_Condition(x(3.5),y(yLevel),"23�գ����ĵ����ʱ��");
line[line.length]=Link(Point(linx(3.5),liny(0)-LINEBASEHEIGHT/2),Point(linx(3.5),liny(0)-LINEBASEHEIGHT/2));
board[board.length]=Board(liny(0),liny(14));
//----------
box[21]=new Array();
yLevel+=3;
box[21][0]=Textbox_Selection(x(2.5),y(yLevel),"ת��һ������");
line[line.length]=Link(box[21][0],box[20][1]);
box[21][1]=Textbox_Selection(x(4.5),y(yLevel),"˯��","r|+δ����");
line[line.length]=Link(box[21][1],box[20][1]);
//----------
box[22]=new Array();
yLevel+=2;
box[22][0]=Textbox_Selection(x(2.5),y(yLevel),"�������������������");
line[line.length]=Link(box[22][0],box[21][0]);
//----------
box[23]=new Array();
yLevel+=3;
box[23][0]=Textbox_Option(x(1.5),y(yLevel),"��ס��");
line[line.length]=Link(box[23][0],box[22][0]);
box[23][1]=Textbox_Option(x(3.5),y(yLevel),"������");
line[line.length]=Link(box[23][1],box[22][0]);
//----------
box[24]=new Array();
yLevel+=2;
box[24][0]=Textbox_Option(x(1.5),y(yLevel),"���Ӵ�ʦ���ģ�");
box[24][0].addLink("p21_retKFMT4");
box[24][0].addClick(function(){gotopage(49,"p49_KFMT4")});
line[line.length]=Link(box[24][0],box[23][0]);

line[line.length]=Link(Point(linx(2.5),liny(3)),box[24][0]);
line[line.length]=Link(Point(linx(2.5),liny(3)),box[23][1]);
line[line.length]=Link(Point(linx(2.5),liny(3)),Point(linx(4.5),liny(3)),box[21][1]);
line[line.length]=Link(Point(linx(3.5),liny(3)),Point(linx(3.5),liny(3)));

hdft["footer"]=Footer(liny(5),21);