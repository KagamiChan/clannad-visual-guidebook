// CVG HTML Data Page22 Done By Ligueston 2008.4.16
hdft["header"]=Header("public","����·��","Public Route","4��24�գ�����","April 24th~Part 2");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Block(x(0),y(yLevel),"B");
box[0][0].addLink("p22_B");
box[0][0].addClick(function(){gotopage(21,"p21_retB")});
box[0][1]=Textbox_Condition(x(3.5),y(yLevel),"23�գ���ץ��Ҳ������ȥ̸��");
line[line.length]=Link(Point(linx(3.5),liny(0)-LINEBASEHEIGHT/2),Point(linx(3.5),liny(0)-LINEBASEHEIGHT/2));
board[board.length]=Board(liny(0),liny(47));
//----------
box[1]=new Array();
yLevel+=3;
box[1][0]=Textbox_Selection(x(2.5),y(yLevel),"����ȥ");
line[line.length]=Link(box[1][0],box[0][1]);
box[1][1]=Textbox_Selection(x(4.5),y(yLevel),"����","r|+δ����");
line[line.length]=Link(box[1][1],box[0][1]);
//----------
box[2]=new Array();
yLevel+=2;
CmtSummery="���ӵĹĶ��£���Ҳ�������ͥ��������������͡�������´���Ϊ��Ҳ������";
CmtSelect="ѡ��[��ģ���Ŀ�����]������ȫ�����ӡ���ߡ������ӡ�����飽�ɫ���鹥����μ�P34��P36��";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[2][0]=Textbox_Selection_C(x(2.5),y(yLevel),"������ٰ�æ����","5",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"������ٰ�æ����",0);
line[line.length]=Link(box[2][0],box[1][0]);
//----------
box[3]=new Array();
yLevel+=3;
box[3][0]=Textbox_Option(x(1.5),y(yLevel),"��ģ���Ŀ�����","l|��|�|-ѿ��|-�м���");
line[line.length]=Link(box[3][0],box[2][0]);
box[3][1]=Textbox_Option(x(3.5),y(yLevel),"����������","r|-�м���|-ѿ��|��|�");
line[line.length]=Link(box[3][1],box[2][0]);
//----------
box[4]=new Array();
yLevel+=2;
box[4][0]=Textbox_Condition(x(1.5),y(yLevel),"�ӡ������ȫ����");
box[4][0].addTitle("���ת����34ҳ");
box[4][0].addClick(function(){gotopage(34)});
line[line.length]=Link(box[4][0],box[3][0]);
//----------
box[5]=new Array();
yLevel+=1;
box[5][0]=Textbox_Condition(x(3.5),y(yLevel),"23�գ���ԭ�����ô����绰");
line[line.length]=Link(box[5][0],box[3][1]);
//----------
box[6]=new Array();
yLevel+=3;
box[6][0]=Textbox_Selection(x(2.5),y(yLevel),"����ԭ����");
line[line.length]=Link(box[6][0],box[5][0]);
box[6][1]=Textbox_Selection(x(4.5),y(yLevel),"����������","r|+δ����");
line[line.length]=Link(box[6][1],box[5][0]);
//----------
box[7]=new Array();
yLevel+=2;
CmtSummery="��������Ҳ�ڵ绰�е�������ѿ�¾���ǰ������̽���Լ��ĸ�硣��ԭ���������ÿ����Լ��Ƿϵ����ӡ�";
CmtSelect="ѡ��[����]������ȫ���봺ԭ�����ߡ���ԭ��ƽ����ԭѿ�½�ɫ���鹥����μ�P38��";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[7][0]=Textbox_Selection_C(x(2.5),y(yLevel),"Ӧ��ѿ�µķ���","6",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"Ӧ��ѿ�µķ���",0);
line[line.length]=Link(box[7][0],box[6][0]);
//----------
box[8]=new Array();
yLevel+=3;
box[8][0]=Textbox_Option(x(1.5),y(yLevel),"����","l|ѿ��|-�м���|-ʤƽ");
line[line.length]=Link(box[8][0],box[7][0]);
box[8][1]=Textbox_Option(x(3.5),y(yLevel),"�ӵ�","r|-�м���|-ʤƽ|ѿ��");
line[line.length]=Link(box[8][1],box[7][0]);
//----------
box[9]=new Array();
yLevel+=2;
box[9][0]=Textbox_Condition(x(1.5),y(yLevel),"��������ȫ����");
box[9][0].addTitle("���ת����38ҳ");
box[9][0].addClick(function(){gotopage(38)});
line[line.length]=Link(box[9][0],box[8][0]);
//----------
box[10]=new Array();
yLevel+=1;
CmtSummery="";
CmtSelect="{21�ջ�22�գ���ԭ��ʶ�м���}����û��{����価�������}��������μ�������·22��ע��1����{18�ջ�19�գ�����������ʶ�м���}��������μ�������·22��ע��4����ǰ���£������20�յķ�֧{��ҰѰ�����}��ѡ��[�ܾ�]����δ���������֧����21�����ᴥ��һ��û�з�֧���м����ľ��飬�ڴ˴�ԭ��ʶ���м���������22�����ɴ�����һ���з�֧���м������顣���20�յķ�֧��ѡ����[����]��������22�յķ�֧{�ش��Ǵ���ѯ��}��ѡ��[���鷳��]����δ���������֧����ô21�մ�ԭ��ʶ�м����ľ�����ӳٵ�22�շ�����22�ձ����ľ��鱻������ο�������·22��ע��4��������ڷ�֧{�ش��Ǵ���ѯ��}��ѡ��ѡ��[�������������˼]����ԭ������ʶ�м�����<br>ֻҪ��������δ�ԭ��ʶ���м����ľ��飬�ͷ����ǵ���������ͬ������·23��ע��3��<br>�����м�����ɫ���鹥����μ�P31��";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[10][0]=Textbox_Condition_C(x(3.5),y(yLevel),"21�ջ�22�գ���ԭ��ʶ�м���","7",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"21�ջ�22�գ���ԭ��ʶ�м���",0);
line[line.length]=Link(box[10][0],box[8][1]);
line[line.length]=Link(box[10][0],box[6][1]);
//----------
box[11]=new Array();
yLevel+=3;
box[11][0]=Textbox_Selection(x(2.5),y(yLevel),"��");
line[line.length]=Link(box[11][0],box[10][0]);
box[11][1]=Textbox_Selection(x(4.5),y(yLevel),"��");
line[line.length]=Link(box[11][1],box[10][0]);
//----------
box[12]=new Array();
yLevel+=2;
box[12][0]=Textbox_Condition(x(2.5),y(yLevel),"22�գ���ԭȥ���м�������Ҳ��ͬ");
line[line.length]=Link(box[12][0],box[11][0]);
//----------
box[13]=new Array();
yLevel+=3;
box[13][0]=Textbox_Selection(x(1.5),y(yLevel),"ȥ","l|+δ����");
line[line.length]=Link(box[13][0],box[12][0]);
box[13][1]=Textbox_Selection(x(3.5),y(yLevel),"��ȥ");
line[line.length]=Link(box[13][1],box[12][0]);
//----------
box[14]=new Array();
yLevel+=2;
box[14][0]=Textbox_Condition(x(1.5),y(yLevel),"�м�������ȫ����");
box[14][0].addTitle("���ת����31ҳ");
box[14][0].addClick(function(){gotopage(31)});
line[line.length]=Link(box[14][0],box[13][0]);
//----------
box[15]=new Array();
yLevel+=1;
box[15][0]=Textbox_Condition(x(3.5),y(yLevel),"23�գ����ĵ����ʱ��");
line[line.length]=Link(box[15][0],box[13][1]);
line[line.length]=Link(box[15][0],box[11][1]);
//----------
box[16]=new Array();
yLevel+=3;
box[16][0]=Textbox_Selection(x(2.5),y(yLevel),"ת��������");
line[line.length]=Link(box[16][0],box[15][0]);
box[16][1]=Textbox_Selection(x(4.5),y(yLevel),"˯��","r|+δ����");
line[line.length]=Link(box[16][1],box[15][0]);
//----------
box[17]=new Array();
yLevel+=2;
box[17][0]=Textbox_Selection(x(2.5),y(yLevel),"�������������������");
line[line.length]=Link(box[17][0],box[16][0]);
//----------
box[18]=new Array();
yLevel+=3;
box[18][0]=Textbox_Option(x(1.5),y(yLevel),"��ס��");
line[line.length]=Link(box[18][0],box[17][0]);
box[18][1]=Textbox_Option(x(3.5),y(yLevel),"������");
line[line.length]=Link(box[18][1],box[17][0]);
//----------
box[19]=new Array();
yLevel+=2;
box[19][0]=Textbox_Option(x(1.5),y(yLevel),"���Ӵ�ʦ���ģ�");
box[19][0].addLink("p22_retKFMT4");
box[19][0].addClick(function(){gotopage(49,"p49_KFMT4")});
line[line.length]=Link(box[19][0],box[18][0]);

line[line.length]=Link(Point(linx(2.5),liny(3)),box[19][0]);
line[line.length]=Link(Point(linx(2.5),liny(3)),box[18][1]);
line[line.length]=Link(Point(linx(2.5),liny(3)),Point(linx(4.5),liny(3)),box[16][1]);
line[line.length]=Link(Point(linx(3.5),liny(3)),Point(linx(3.5),liny(3)));

hdft["footer"]=Footer(liny(4),22);