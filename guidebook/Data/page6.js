// CVG HTML Data Page6 Done By Ligueston 2008.4.5
hdft["header"]=Header("public","����·��","Public Route","4��17�գ�����","April 17th~Part 2");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Condition(x(3.5),y(yLevel),"16�գ��ź����´���������");
line[line.length]=Link(Point(linx(3.5),liny(0)-LINEBASEHEIGHT/2),Point(linx(3.5),liny(0)-LINEBASEHEIGHT/2));
line[line.length-1].addTitle("���ת�ص�5ҳ");
line[line.length-1].addClick(function(){gotopage(5)});
//----------
box[1]=new Array();
yLevel+=3;
box[1][0]=Textbox_Selection(x(2),y(yLevel),"��æ");
box[1][1]=Textbox_Selection(x(5),y(yLevel),"����һ������","r|+δ����");
line[line.length]=Link(box[1][0],Point(linx(3),liny(-1)));
line[line.length]=Link(box[1][1],Point(linx(3),liny(-1)));
line[line.length]=Link(Point(linx(3.5),liny(-1)),box[0][0]);
//----------
box[2]=new Array();
yLevel+=2;
box[2][0]=Textbox_Selection(x(2),y(yLevel),"��������ȱ�ٵĶ���");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Block(x(5),y(yLevel),"B");
box[2][1].addLink("p6_retB");
box[2][1].addClick(function(){gotolink("p6_B")});
line[line.length]=Link(box[2][1],box[1][1]);
//----------
box[3]=new Array();
yLevel+=3;
box[3][0]=Textbox_Option(x(0),y(yLevel),"�ջ���");
line[line.length]=Link(box[3][0],box[2][0]);
box[3][1]=Textbox_Option(x(2),y(yLevel),"��ͼ");
line[line.length]=Link(box[3][1],box[2][0]);
box[3][2]=Textbox_Option(x(4),y(yLevel),"�������");
line[line.length]=Link(box[3][2],box[2][0]);
//----------
box[4]=new Array();
yLevel+=3;
box[4][0]=Textbox_Block(x(2),y(yLevel),"A");
box[4][0].addLink("p6_retA");
box[4][0].addClick(function(){gotolink("p6_A")});
line[line.length]=Link(box[4][0],box[3][0]);
line[line.length]=Link(box[4][0],box[3][1]);
line[line.length]=Link(box[4][0],box[3][2]);
CmtSummery="";
CmtSelect="";
CmtCaution="";
CmtOption="-�����";
CmtEvents="10000000";
CmtEvntIru="����֦����64HIT";
box[4][1]=Textbox_Selection_C(x(5),y(yLevel),"����������������֦","3",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"����������������֦",0);
line[line.length]=Link(box[4][1],box[2][1]);
//----------
box[5]=new Array();
yLevel+=3;
box[5][0]=Textbox_Option(x(4),y(yLevel),"�����","l|����֦");
line[line.length]=Link(box[5][0],box[4][1]);
box[5][1]=Textbox_Option(x(6),y(yLevel),"Ŀ������ȥ","r|����֦");
line[line.length]=Link(box[5][1],box[4][1]);
//----------
box[6]=new Array();
yLevel+=4;
box[6][0]=Textbox_Option(x(3.5),y(yLevel),"�������磨����");
line[line.length]=Link(box[6][0],Point(linx(3.5),liny(-1)));
line[line.length]=Link(Point(linx(5),liny(-1)),box[5][0]);
line[line.length]=Link(Point(linx(5),liny(-1)),box[5][1]);
line[line.length]=Link(Point(linx(5),liny(-1)),Point(linx(2),liny(-1)),box[4][0]);
//----------
box[7]=new Array();
yLevel+=2;
box[7][0]=Textbox_Date(x(3.5),y(yLevel),"4��18��","bottom");
line[line.length]=Link(box[7][0],box[6][0]);
box[7][0].addTitle("���ת����7ҳ");
box[7][0].addClick(function(){gotopage(7);});
//----------
box[8]=new Array();
yLevel+=4;
box[8][0]=Textbox_Block(x(0),y(yLevel),"A");
box[8][0].addLink("p6_A");
box[8][0].addClick(function(){gotolink("p6_retA")});
CmtSummery="�Ⱥ���ֵ�����Ĺź���ã���Ҳ������ȥ�������߹����ڽ��ң���Ҳ�ƿ��ţ����ִ��߶�������һ��İ����Ů������������������е�ľƬ�����ʲô��";
CmtSelect="����16�յķ�֧{�ź����´���������}��ѡ��[����]���ͻ��������ľ��鰲�������������������������������֧�У�ѡ���ȥ[������]��[ȥ���ڵĽ��ҿ�һ��]��[�����]���������������ߣ�����18�����ſ�����ʶ���ӣ�ͬ������ʹ��������ߣ���Ҳ�Բ�֪�����ӵ���������";
CmtCaution="";
CmtOption="+��ȥ������|+ȥ���ڵĽ��ҿ�һ��|-�����";
CmtEvents="11111010";
CmtEvntIru="��������������64HIT���м�������������ֿ��¼���3��3��������αŮ���¼���ҵ����򣻷��Ӵ�ʦ�����ѡ";
box[8][1]=Textbox_Selection_C(x(4),y(yLevel),"�Ⱥ���ֵ�����Ĺź�","4",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"������������������ѽ���棩",0);
line[line.length]=Link(Point(linx(4),liny(0)-LINEBASEHEIGHT/2),Point(linx(4),liny(0)-LINEBASEHEIGHT/2));
board[board.length]=Board(liny(0),liny(18));
//----------
box[9]=new Array();
yLevel+=3;
box[9][0]=Textbox_Option(x(3),y(yLevel),"��ȥ������","l|����");
line[line.length]=Link(box[9][0],box[8][1]);
box[9][1]=Textbox_Option(x(5),y(yLevel),"��������ȥ","r|����");
line[line.length]=Link(box[9][1],box[8][1]);
//----------
box[10]=new Array();
yLevel+=2;
box[10][0]=Textbox_Selection(x(3),y(yLevel),"��ȥѰ�ҹź�");
line[line.length]=Link(box[10][0],box[9][0]);
//----------
box[11]=new Array();
yLevel+=3;
box[11][0]=Textbox_Option(x(2),y(yLevel),"ȥ���ڵĽ��ҿ�һ��","l|����");
line[line.length]=Link(box[11][0],box[10][0]);
box[11][1]=Textbox_Option(x(4),y(yLevel),"�������ĵط����ҿ�","r|����");
line[line.length]=Link(box[11][1],box[10][0]);
//----------
box[12]=new Array();
yLevel+=2;
box[12][0]=Textbox_Selection(x(2),y(yLevel),"���ڽ������İ��Ů��");
line[line.length]=Link(box[12][0],box[11][0]);
//----------
box[13]=new Array();
yLevel+=3;
box[13][0]=Textbox_Option(x(1),y(yLevel),"�����","l|����");
line[line.length]=Link(box[13][0],box[12][0]);
box[13][1]=Textbox_Option(x(3),y(yLevel),"�뿪","r|����");
line[line.length]=Link(box[13][1],box[12][0]);
yLevel+=4;
line[line.length]=Link(Point(linx(3),liny(0)),Point(linx(2),liny(-1)),box[13][0]);
line[line.length]=Link(Point(linx(3),liny(0)),Point(linx(2),liny(-1)),box[13][1]);
line[line.length]=Link(Point(linx(3),liny(0)),box[11][1]);
line[line.length]=Link(Point(linx(3),liny(0)),Point(linx(5),liny(0)),box[9][1]);
line[line.length]=Link(Point(linx(4),liny(0)),Point(linx(4),liny(0)));
//----------
box[14]=new Array();
yLevel+=3;
box[14][0]=Textbox_Block(x(0),y(yLevel),"B");
box[14][0].addLink("p6_B");
box[14][0].addClick(function(){gotolink("p6_retB")});
CmtSummery="��ԭ��Ȼû�дӴ���лָ�����Ҳ�������Դ򷢷�ѧ���ʱ�⡣������У�ᣬ�߽�����Ϊû�˵Ŀս��ң���Ҳ����ԭ�����߶�������һ��Ů������������������е�ľƬ�����ʲô��";
CmtSelect="16�������Ƿ��������ؽ������磬����������17���������ӡ�<br>�����16�շ�֧{�ź����´���������}��ѡ������һ����������δ�������ѡ���û�н����������ߺ���ߣ�����17�����������������������֧�У�ѡ��[��У���й�]��[˯һ��]��[�����]����18�������л�����ʶ���ӡ��ͷ����߽���治ͬ���ǣ���֮��ʹ��ʶ�˷���Ҳ���ܽ�����ӽ�ɫ���顣";
CmtCaution="������CLANNAD����Ϊ��Ծ�Ľ�ɫ���������øж����⣬���е������¼����з��Ӳ��룬��18����ʶ�����Ƿ��Ӳ�����Щ�¼��Ĺؼ��ڵ㣬��ˡ���ʶ���ӡ�����Ҫ��";
CmtOption="+��У���й�|+�����|-˯һ��";
CmtEvents="11111010";
CmtEvntIru="��������������64HIT���м�������������ֿ��¼���3��3��������αŮ���¼���ҵ����򣻷��Ӵ�ʦ�����ѡ";
box[14][1]=Textbox_Selection_C(x(4),y(yLevel),"��ѧ��һ���˵���Ҳ","5",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"�����������������δ����棩",0);
line[line.length]=Link(Point(linx(4),liny(0)-LINEBASEHEIGHT/2),Point(linx(4),liny(0)-LINEBASEHEIGHT/2));
board[board.length]=Board(liny(0),liny(18));
//----------
box[15]=new Array();
yLevel+=3;
box[15][0]=Textbox_Option(x(3),y(yLevel),"��У���й�");
line[line.length]=Link(box[15][0],box[14][1]);
box[15][1]=Textbox_Option(x(5),y(yLevel),"��У���й�");
line[line.length]=Link(box[15][1],box[14][1]);
//----------
box[16]=new Array();
yLevel+=2;
box[16][0]=Textbox_Selection(x(3),y(yLevel),"������У��Ŀս���");
line[line.length]=Link(box[16][0],box[15][0]);
//----------
box[17]=new Array();
yLevel+=3;
box[17][0]=Textbox_Option(x(2),y(yLevel),"˯һ��");
line[line.length]=Link(box[17][0],box[16][0]);
box[17][1]=Textbox_Option(x(4),y(yLevel),"��У���й�");
line[line.length]=Link(box[17][1],box[16][0]);
//----------
box[18]=new Array();
yLevel+=2;
box[18][0]=Textbox_Selection(x(2),y(yLevel),"�ս������İ��Ů��");
line[line.length]=Link(box[18][0],box[17][0]);
//----------
box[19]=new Array();
yLevel+=3;
box[19][0]=Textbox_Option(x(1),y(yLevel),"�����");
line[line.length]=Link(box[19][0],box[18][0]);
box[19][1]=Textbox_Option(x(3),y(yLevel),"�뿪");
line[line.length]=Link(box[19][1],box[18][0]);
yLevel+=4;
line[line.length]=Link(Point(linx(3),liny(0)),Point(linx(2),liny(-1)),box[19][0]);
line[line.length]=Link(Point(linx(3),liny(0)),Point(linx(2),liny(-1)),box[19][1]);
line[line.length]=Link(Point(linx(3),liny(0)),box[17][1]);
line[line.length]=Link(Point(linx(3),liny(0)),Point(linx(5),liny(0)),box[15][1]);
line[line.length]=Link(Point(linx(4),liny(0)),Point(linx(4),liny(0)));

hdft["footer"]=Footer(liny(1),6);