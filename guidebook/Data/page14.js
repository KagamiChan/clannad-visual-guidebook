// CVG HTML Data Page14 Done By Ligueston 2008.4.15
hdft["header"]=Header("public","����·��","Public Route","4��21�գ�����","April 21st~Part 2");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Block(x(0),y(yLevel),"A");
box[0][0].addLink("p14_A");
box[0][0].addClick(function(){gotopage(13,"p13_retA")});
box[0][1]=Textbox_Selection(x(3.5),y(yLevel),"�ѵ��������Ҳ������������");
line[line.length]=Link(Point(linx(3.5),liny(0)-LINEBASEHEIGHT/2),Point(linx(3.5),liny(0)-LINEBASEHEIGHT/2));
board[board.length]=Board(liny(0),liny(29));
//----------
box[1]=new Array();
yLevel+=3;
box[1][0]=Textbox_Option(x(2),y(yLevel),"�ٵ���ȥ��","l|ʤƽ|-�Ǵ�");
line[line.length]=Link(box[1][0],Point(linx(3),liny(-1)));
box[1][1]=Textbox_Option(x(5),y(yLevel),"������������ѧ","l|-�Ǵ�|ʤƽ");
line[line.length]=Link(box[1][1],Point(linx(3),liny(-1)));
line[line.length]=Link(Point(linx(3.5),liny(-1)),box[0][1]);
//----------
box[2]=new Array();
yLevel+=2;
box[2][0]=Textbox_Selection(x(2),y(yLevel),"ͨѧ·�ϣ������������");
line[line.length]=Link(box[2][0],box[1][0]);
//----------
box[3]=new Array();
yLevel+=3;
box[3][0]=Textbox_Option(x(0),y(yLevel),"������","l|ʤƽ");
line[line.length]=Link(box[3][0],box[2][0]);
box[3][1]=Textbox_Option(x(2),y(yLevel),"վ�ȵ�����","r|ʤƽ");
line[line.length]=Link(box[3][1],box[2][0]);
box[3][2]=Textbox_Option(x(4),y(yLevel),"������","r|ʤƽ");
line[line.length]=Link(box[3][2],box[2][0]);
//----------
box[4]=new Array();
yLevel+=2;
box[4][0]=Textbox_Selection(x(0),y(yLevel),"�·��ֳ���ĳ·�˳�Ϊ�ܺ���");
line[line.length]=Link(box[4][0],box[3][0]);
//----------
box[5]=new Array();
yLevel+=3;
box[5][0]=Textbox_Option(x(0),y(yLevel),"�뿪����");
line[line.length]=Link(box[5][0],box[4][0]);
box[5][1]=Textbox_Option(x(2),y(yLevel),"ҡһҡ��");
line[line.length]=Link(box[5][1],box[4][0]);
//----------
box[6]=new Array();
yLevel+=3;
box[6][0]=Textbox_Selection(x(0),y(yLevel),"�ܺ��������ļ���");
line[line.length]=Link(box[6][0],box[5][0]);
line[line.length]=Link(box[6][0],box[5][1]);
box[6][1]=Textbox_Condition(x(5),y(yLevel),"19�գ���ԭ׼����в�Ǵ�");
line[line.length]=Link(box[6][1],box[1][1]);
//----------
box[7]=new Array();
yLevel+=3;
box[7][0]=Textbox_Option(x(0),y(yLevel),"�����ַ�����","l|ʤƽ");
line[line.length]=Link(box[7][0],box[6][0]);
box[7][1]=Textbox_Option(x(2),y(yLevel),"˺���ӵ�","r|ʤƽ");
line[line.length]=Link(box[7][1],box[6][0]);
box[7][2]=Textbox_Selection(x(4),y(yLevel),"Ȱ������");
line[line.length]=Link(box[7][2],box[6][1]);
box[7][3]=Textbox_Selection(x(6),y(yLevel),"��ȥ����","r|+δ����");
line[line.length]=Link(box[7][3],box[6][1]);
//----------
box[8]=new Array();
yLevel+=2;
box[8][0]=Textbox_Selection(x(4),y(yLevel),"�������������ӣ���е��Ǵ�");
line[line.length]=Link(box[8][0],box[7][2]);
//----------
box[9]=new Array();
yLevel+=3;
box[9][0]=Textbox_Option(x(3),y(yLevel),"���к�","l|�Ǵ�");
line[line.length]=Link(box[9][0],box[8][0]);
box[9][1]=Textbox_Option(x(5),y(yLevel),"������","r|�Ǵ�");
line[line.length]=Link(box[9][1],box[8][0]);

yLevel+=4;
line[line.length]=Link(Point(linx(5),liny(0)),Point(linx(4),liny(-1)),box[9][0]);
line[line.length]=Link(Point(linx(5),liny(0)),Point(linx(4),liny(-1)),box[9][1]);
line[line.length]=Link(Point(linx(5),liny(0)),box[7][3]);

line[line.length]=Link(Point(linx(5),liny(0)),Point(linx(2),liny(0)),Point(linx(2),liny(-5)),Point(linx(1),liny(-6)),box[7][0]);
line[line.length]=Link(Point(linx(5),liny(0)),Point(linx(2),liny(0)),Point(linx(2),liny(-5)),Point(linx(1),liny(-6)),box[7][1]);
line[line.length]=Link(Point(linx(5),liny(0)),Point(linx(2),liny(0)),Point(linx(2),liny(-5)),Point(linx(3),liny(-17)),box[3][1]);
line[line.length]=Link(Point(linx(5),liny(0)),Point(linx(2),liny(0)),Point(linx(2),liny(-5)),Point(linx(3),liny(-17)),box[3][2]);
line[line.length]=Link(Point(linx(3.5),liny(0)),Point(linx(3.5),liny(0)));

//----------
box[10]=new Array();
yLevel+=4;
box[10][0]=Textbox_Block(x(0),y(yLevel),"B");
box[10][0].addLink("p14_B");
box[10][0].addClick(function(){gotopage(13,"p13_retB")});
box[10][1]=Textbox_Condition(x(4),y(yLevel),"20�գ��뿪����֦�ķ���");
line[line.length]=Link(Point(linx(4),liny(0)-LINEBASEHEIGHT/2),Point(linx(4),liny(0)-LINEBASEHEIGHT/2));
board[board.length]=Board(liny(0),liny(17));
//----------
box[11]=new Array();
yLevel+=3;
box[11][0]=Textbox_Selection(x(3),y(yLevel),"����������������");
line[line.length]=Link(box[11][0],box[10][1]);
box[11][1]=Textbox_Selection(x(5),y(yLevel),"����������","r|+δ����");
line[line.length]=Link(box[11][1],box[10][1]);
//----------
box[12]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="�˴�{�Ǵ��߽���}�����磬�ڷ�֧{���Ǵ�����ͬ}ѡ��[��ȷ����]��û��ѡ����Ӧѡ�����û�д�����֧����������ڷ�<br>{�м����߽���}��18�գ��ڷ�֧{�ӿ�ѡ��˯���ĵط�}ѡ��[������ȥ˯]���ڽ������ķ�֧{�¿κ��߽������ҵ�Ů��}ѡ��[��˵���仰]������18���ڷ�֧{�ӿ�ѡ��˯���ĵط�}ѡ��[���ǻؽ��Ұ�]����δ���������֧������19���ڷ�֧{�¿κ��߽������ҵ�Ů��}ѡ��[��˵���仰]���������������û�н����м����ߡ�";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[12][0]=Textbox_Condition_C(x(3),y(yLevel),"�Ǵ��߻����м����߽���","4",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"�Ǵ��߽�����м����߽���",0);
line[line.length]=Link(box[12][0],box[11][0]);
//----------
box[13]=new Array();
yLevel+=3;
box[13][0]=Textbox_Selection(x(2),y(yLevel),"��");
line[line.length]=Link(box[13][0],box[12][0]);
box[13][1]=Textbox_Selection(x(4),y(yLevel),"��");
line[line.length]=Link(box[13][1],box[12][0]);
//----------
box[14]=new Array();
yLevel+=2;
CmtSummery="һ���ֿ��ȥ����Ҳ�ƻ������ϵ��£�Ҫ����ȥ������֦���ǡ���";
CmtSelect="ѡ��[����ȥ����֦�ķ���]������ȫ��������֦�ߣ���ͬʱ�˳��Ǵ��ߡ��м������Լ����ֽ����ߣ����ѽ��룩����������֦��ɫ���鹥����μ�P26��";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[14][0]=Textbox_Selection_C(x(2),y(yLevel),"����������δ�ʱ��","5",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"����������δ�ʱ��",0);
line[line.length]=Link(box[14][0],box[13][0]);
box[14][1]=Textbox_Condition(x(4),y(yLevel),"����֦����ȫ����");
box[14][1].addTitle("���ת����26ҳ");
box[14][1].addClick(function(){gotopage(26)});
line[line.length]=Link(box[14][1],box[13][1]);
//----------
box[15]=new Array();
yLevel+=3;
box[15][0]=Textbox_Option(x(1),y(yLevel),"����ȥ����֦�ķ���","l|����֦|-��|-�|-�Ǵ�|-ѿ��|-�м���");
line[line.length]=Link(box[15][0],box[14][0]);
box[15][1]=Textbox_Option(x(3),y(yLevel),"��ȥ��","r|-�Ǵ�|-ѿ��|-�м���|����֦|-��|-�");
line[line.length]=Link(box[15][1],box[14][0]);
//----------
box[16]=new Array();
yLevel+=2;
box[16][0]=Textbox_Condition(x(1),y(yLevel),"����֦����ȫ����");
box[16][0].addTitle("���ת����26ҳ");
box[16][0].addClick(function(){gotopage(26)});
line[line.length]=Link(box[16][0],box[15][0]);

line[line.length]=Link(Point(linx(3),liny(0)),box[15][1]);
line[line.length]=Link(Point(linx(3),liny(0)),Point(linx(5),liny(0)),box[11][1]);
line[line.length]=Link(Point(linx(4),liny(0)),Point(linx(4),liny(0)));

hdft["footer"]=Footer(liny(1),14);