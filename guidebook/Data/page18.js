// CVG HTML Data Page18 Done By Shakugan_No_Kaluote 2008.4.2
hdft["header"]=Header("public","����·��","Public Route","4��23�գ�һ��","April 23th~Part 1");

var yLevel=0;

//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(3.5),y(yLevel),"4��23��","top");
//----------
box[1]=new Array();
yLevel+=2;
box[1][0]=Textbox_Condition(x(3.5),y(yLevel),"21�գ��ٵ�������");
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Selection(x(2.5),y(yLevel),"��������");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Selection(x(4.5),y(yLevel),"��ȥѧ��ʳ��","r|+δ����");
line[line.length]=Link(box[2][1],box[1][0]);
//----------
box[3]=new Array();
yLevel+=2;
box[3][0]=Textbox_Selection(x(2.5),y(yLevel),"��������в��");
line[line.length]=Link(box[3][0],box[2][0]);
//----------
box[4]=new Array();
yLevel+=3;
box[4][0]=Textbox_Option(x(1.5),y(yLevel),"��");
line[line.length]=Link(box[4][0],box[3][0]);
box[4][1]=Textbox_Option(x(3.5),y(yLevel),"����");
line[line.length]=Link(box[4][1],box[3][0]);
//----------
box[5]=new Array();
yLevel+=4;
box[5][0]=Textbox_Condition(x(3.5),y(yLevel),"18�գ����Ե�̵ķ���");
line[line.length]=Link(box[5][0],Point(linx(2.5),liny(-1)),box[4][0]);
line[line.length]=Link(box[5][0],Point(linx(2.5),liny(-1)),box[4][1]);
line[line.length]=Link(box[5][0],box[2][1]);
//----------
box[6]=new Array();
yLevel+=3;
box[6][0]=Textbox_Selection(x(2),y(yLevel),"�ٿ�һ���");
line[line.length]=Link(box[6][0],Point(linx(3),liny(-1)));
box[6][1]=Textbox_Selection(x(5),y(yLevel),"�뿪","r|+δ����");
line[line.length]=Link(box[6][1],Point(linx(3),liny(-1)));
line[line.length]=Link(Point(linx(3.5),liny(-1)),Point(linx(3.5),liny(-2)));
//----------
box[7]=new Array();
yLevel+=2;
box[7][0]=Textbox_Selection(x(2),y(yLevel),"���ӵ�ѯ��");
line[line.length]=Link(box[7][0],box[6][0]);
//----------
box[8]=new Array();
yLevel+=3;
box[8][0]=Textbox_Option(x(0),y(yLevel),"�����ֿ���һҹ��");
line[line.length]=Link(box[8][0],box[7][0]);
box[8][1]=Textbox_Option(x(2),y(yLevel),"һ���ʮ��Сʱ����˵�Ұ���");
line[line.length]=Link(box[8][1],box[7][0]);
box[8][2]=Textbox_Option(x(4),y(yLevel),"û�ж���Ķ�����");
line[line.length]=Link(box[8][2],box[7][0]);
//----------
box[9]=new Array();
yLevel+=4;
box[9][0]=Textbox_Condition(x(3.5),y(yLevel),"21�գ��ٵ�������");
line[line.length]=Link(Point(linx(2),liny(-1)),box[8][0]);
line[line.length]=Link(Point(linx(2),liny(-1)),box[8][1]);
line[line.length]=Link(Point(linx(2),liny(-1)),box[8][2]);
line[line.length]=Link(Point(linx(2),liny(-1)),Point(linx(5),liny(-1)),box[6][1]);
line[line.length]=Link(box[9][0],Point(linx(3.5),liny(-1)));
//----------
box[10]=new Array();
yLevel+=3;
box[10][0]=Textbox_Selection(x(2),y(yLevel),"��������");
line[line.length]=Link(box[10][0],Point(linx(2),liny(-1)));
box[10][1]=Textbox_Selection(x(5),y(yLevel),"��ȥѧ��ʳ��","r|+δ����");
line[line.length]=Link(box[10][1],Point(linx(2),liny(-1)));
line[line.length]=Link(Point(linx(3.5),liny(-1)),box[9][0]);
//----------
box[11]=new Array();
yLevel+=2;
box[11][0]=Textbox_Selection(x(2),y(yLevel),"���侵�����");
line[line.length]=Link(box[11][0],box[10][0]);
//----------
box[12]=new Array();
yLevel+=3;
box[12][0]=Textbox_Option(x(1),y(yLevel),"���ǵ�","l|�");
line[line.length]=Link(box[12][0],box[11][0]);
box[12][1]=Textbox_Option(x(3),y(yLevel),"�����������","r|�");
line[line.length]=Link(box[12][1],box[11][0]);
box[12][2]=Textbox_Condition(x(5),y(yLevel),"22�գ���ǰ,ĵ���Ĵ�������");
line[line.length]=Link(box[12][2],box[10][1]);
//----------
box[13]=new Array();
yLevel+=3;
box[13][0]=Textbox_Selection(x(4),y(yLevel),"��ȥ����");
line[line.length]=Link(box[13][0],box[12][2]);
box[13][1]=Textbox_Selection(x(6),y(yLevel),"��ĵ��������","r|+δ����");
line[line.length]=Link(box[13][1],box[12][2]);
//----------
box[14]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="";
CmtOption="-����ȥ</div></td><td width=\""+(COMMENTBARWIDTH)+"\" height=\""+COMMENTBARHEIGHT+"\" valign=\"bottom\" align=\"center\"></td><td width=\""+(COMMENTBARWIDTH)+"\" height=\""+COMMENTBARHEIGHT+"\" valign=\"bottom\" align=\"center\"></td><td width=\""+(COMMENTBASESPACING)+"\"></td></tr></table></td></tr><tr><td background=\""+src_commentbase_base+"\"><table border=0 cellpadding=0 cellspacing=0 width=\""+COMMENTWIDTH+"\"><tr><td width=\""+(COMMENTBASESPACING)+"\"></td><td width=\""+(8*COMMENTBUTTONSIZE-COMMENTBASESPACING)+"\" height=\""+COMMENTBUTTONSIZE+"\" valign=\"bottom\" align=\"left\" class=\"comment"+sizestr+"\"><img src=\""+src_comment_mark_un[0]+"\" style=\"margin-right:0px;\"><img src=\""+src_comment_mark_un[1]+"\" style=\"margin-right:0px;\"><img src=\""+src_comment_mark_un[2]+"\" style=\"margin-right:0px;\"><img src=\""+src_comment_mark_en[3]+"\" style=\"margin-right:0px;\"><img src=\""+src_comment_mark_un[4]+"\" style=\"margin-right:0px;\"><img src=\""+src_comment_mark_un[5]+"\" style=\"margin-right:0px;\"><img src=\""+src_comment_mark_un[6]+"\" style=\"margin-right:0px;\"><img src=\""+src_comment_mark_un[7]+"\" style=\"margin-right:0px;\"></td><td width=\""+(COMMENTWIDTH-COMMENTBASESPACING-8*COMMENTBUTTONSIZE)+"\"><table border=0 cellpadding=0 cellspacing=0 height="+COMMENTEVENTHEIGHT+" background=\""+src_commentbase_event+"\"><tr><td height="+COMMENTEVENTHEIGHT+" valign=\"middle\" class=\"cmtEvnt"+sizestr+"\" width=\""+(COMMENTWIDTH-2*COMMENTBASESPACING-8*COMMENTBUTTONSIZE)+"\">�Ӳ��������ֿ��¼������ܴ���Ӳֿ���� B������棩</td></tr></table></td><td width=\""+(COMMENTBASESPACING)+"\"></td></tr></table></td></tr><tr><td background=\""+src_commentbase_base+"\" height=\""+(COMMENTBASESPACING/2)+"\"></td></tr><tr><td background=\""+src_commentbase_base+"\"><table border=0 cellpadding=0 cellspacing=0 width=\""+COMMENTWIDTH+"\"><tr><td width=\""+(COMMENTBASESPACING)+"\"></td><td width=\""+(COMMENTBARWIDTH)+"\" height=\""+COMMENTBARHEIGHT+"\" background=\""+src_commentbase_option_B+"\" valign=\"bottom\" align=\"center\"><div class=\"cmtopt"+sizestr+"\">����";
CmtEvents="01010000";
CmtEvntIru="�Ӳ��������ֿ��¼������ܴ���Ӳֿ���� A����ͨ�棩��飲���αŮ���¼�";
box[14][0]=Textbox_Selection_C(x(4),y(yLevel),"��ץ��Ҳ������ȥ̸��","1",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"��ץ��Ҳ������ȥ̸��",0);
line[line.length]=Link(box[14][0],box[13][0]);
//----------
box[15]=new Array();
yLevel+=3;
box[15][0]=Textbox_Option(x(3),y(yLevel),"����ȥ","l|��|�");
line[line.length]=Link(box[15][0],box[14][0]);
box[15][1]=Textbox_Option(x(5),y(yLevel),"����","r|��|�");
line[line.length]=Link(box[15][1],box[14][0]);
//----------
box[16]=new Array();
yLevel+=4;
box[16][0]=Textbox_Option(x(5),y(yLevel),"��ԭ����Ц������");
box[16][0].addLink("p18_retSNJK2");
box[16][0].addClick(function(){gotopage(25,"p25_SNJK2");})
line[line.length]=Link(box[16][0],Point(linx(4),liny(-1)),box[15][0]);
line[line.length]=Link(box[16][0],Point(linx(4),liny(-1)),box[15][1]);
line[line.length]=Link(box[16][0],box[13][1]);

line[line.length]=Link(Point(linx(3),liny(2)),Point(linx(5),liny(2)),box[16][0]);
line[line.length]=Link(Point(linx(3),liny(2)),Point(linx(2),liny(2)),Point(linx(2),liny(-9)),box[12][0]);
line[line.length]=Link(Point(linx(3),liny(2)),Point(linx(2),liny(2)),Point(linx(2),liny(-9)),box[12][1]);
line[line.length]=Link(Point(linx(3.5),liny(2)),Point(linx(3.5),liny(2)));
line[line.length-1].addTitle("���ת����19ҳ");
line[line.length-1].addClick(function(){gotopage(19)});

hdft["footer"]=Footer(liny(3),18);