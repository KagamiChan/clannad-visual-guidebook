// CVG HTML Data Page20 Done By Shakugan_No_Kaluote 2008.4.4
hdft["header"]=Header("public","����·��","Public Route","4��23�գ�����","April 23th~Part 3");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Condition(x(2.5),y(yLevel),"22�գ�����ԭ���ã��Ǵ����뾽��");
line[line.length]=Link(Point(linx(2.5),liny(0)-LINEBASEHEIGHT/2),Point(linx(2.5),liny(0)-LINEBASEHEIGHT/2));
line[line.length-1].addTitle("���ת����19ҳ");
line[line.length-1].addClick(function(){gotopage(19)});
line[line.length]=Link(Point(linx(2.5),liny(2)),box[0][0]);
//----------
box[1]=new Array();
yLevel+=3;
box[1][0]=Textbox_Selection(x(1),y(yLevel),"�ʹ�ԭһ������","l|+δ����");
line[line.length]=Link(box[1][0],Point(linx(2),liny(-1)));
box[1][1]=Textbox_Selection(x(4),y(yLevel),"����ֹ����");
line[line.length]=Link(box[1][1],Point(linx(2),liny(-1)));
//----------
box[2]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="";
CmtOption="-����ԭ����</div></td><td width=\""+(COMMENTBARWIDTH)+"\" height=\""+COMMENTBARHEIGHT+"\" valign=\"bottom\" align=\"center\"></td><td width=\""+(COMMENTBARWIDTH)+"\" height=\""+COMMENTBARHEIGHT+"\" valign=\"bottom\" align=\"center\"></td><td width=\""+(COMMENTBASESPACING)+"\"></td></tr></table></td></tr><tr><td background=\""+src_commentbase_base+"\"><table border=0 cellpadding=0 cellspacing=0 width=\""+COMMENTWIDTH+"\"><tr><td width=\""+(COMMENTBASESPACING)+"\"></td><td width=\""+(8*COMMENTBUTTONSIZE-COMMENTBASESPACING)+"\" height=\""+COMMENTBUTTONSIZE+"\" valign=\"bottom\" align=\"left\" class=\"comment"+sizestr+"\"><img src=\""+src_comment_mark_un[0]+"\" style=\"margin-right:0px;\"><img src=\""+src_comment_mark_un[1]+"\" style=\"margin-right:0px;\"><img src=\""+src_comment_mark_en[2]+"\" style=\"margin-right:0px;\"><img src=\""+src_comment_mark_un[3]+"\" style=\"margin-right:0px;\"><img src=\""+src_comment_mark_un[4]+"\" style=\"margin-right:0px;\"><img src=\""+src_comment_mark_un[5]+"\" style=\"margin-right:0px;\"><img src=\""+src_comment_mark_un[6]+"\" style=\"margin-right:0px;\"><img src=\""+src_comment_mark_en[7]+"\" style=\"margin-right:0px;\"></td><td width=\""+(COMMENTWIDTH-COMMENTBASESPACING-8*COMMENTBUTTONSIZE)+"\"><table border=0 cellpadding=0 cellspacing=0 height="+COMMENTEVENTHEIGHT+" background=\""+src_commentbase_event+"\"><tr><td height="+COMMENTEVENTHEIGHT+" valign=\"top\" class=\"cmtEvnt"+sizestr+"\" width=\""+(COMMENTWIDTH-2*COMMENTBASESPACING-8*COMMENTBUTTONSIZE)+"\">��������������3��3��������ѿ�¡�����֦�����������ҵ���񣨴�Ϊ����֦�����ҵ�������һ��;����Ҳ����ѡ;����</td></tr></table></td><td width=\""+(COMMENTBASESPACING)+"\"></td></tr></table></td></tr><tr><td background=\""+src_commentbase_base+"\" height=\""+(COMMENTBASESPACING/2)+"\"></td></tr><tr><td background=\""+src_commentbase_base+"\"><table border=0 cellpadding=0 cellspacing=0 width=\""+COMMENTWIDTH+"\"><tr><td width=\""+(COMMENTBASESPACING)+"\"></td><td width=\""+(COMMENTBARWIDTH)+"\" height=\""+COMMENTBARHEIGHT+"\" background=\""+src_commentbase_option_B+"\" valign=\"bottom\" align=\"center\"><div class=\"cmtopt"+sizestr+"\">����������";
CmtEvents="00000010";
CmtEvntIru="ҵ���������ѡ";
box[2][0]=Textbox_Selection_C(x(1),y(yLevel),"��ԭ�����ô����绰","7",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"��ԭ�����ô����绰",0);
line[line.length]=Link(box[2][0],box[1][0]);
//----------
box[3]=new Array();
yLevel+=3;
box[3][0]=Textbox_Option(x(1),y(yLevel),"����ԭ����","l|ѿ��");
line[line.length]=Link(box[3][0],box[2][0]);
box[3][1]=Textbox_Option(x(3),y(yLevel),"����������","r|ѿ��");
line[line.length]=Link(box[3][1],box[2][0]);
line[line.length]=Link(Point(linx(1),liny(3)),box[3][1]);
//----------
box[4]=new Array();
yLevel+=3;
box[4][0]=Textbox_Condition(x(4),y(yLevel),"15��ͥԺ����Ů��̸��");
line[line.length]=Link(box[4][0],box[1][1]);
//----------
box[5]=new Array();
yLevel+=3;
box[5][0]=Textbox_Selection(x(2),y(yLevel),"��ʱ���뿪��","l|+δ����");
line[line.length]=Link(box[5][0],box[4][0]);
box[5][1]=Textbox_Selection(x(4),y(yLevel),"�ڼ���̸��");
line[line.length]=Link(box[5][1],box[4][0]);
line[line.length]=Link(Point(linx(1),liny(3)),box[5][0]);
//----------
box[6]=new Array();
yLevel+=2;
box[6][0]=Textbox_Selection(x(4),y(yLevel),"��ܵĽ��");
line[line.length]=Link(box[6][0],box[5][1]);
//----------
box[7]=new Array();
yLevel+=3;
box[7][0]=Textbox_Option(x(2),y(yLevel),"�Ǽһ��Ի�����ΪĿ��","l|�Ǵ�");
line[line.length]=Link(box[7][0],box[6][0]);
box[7][1]=Textbox_Option(x(4),y(yLevel),"�Ǽһ���ѧ�˺ܳ�ʱ��","l|-�Ǵ�");
line[line.length]=Link(box[7][1],box[6][0]);
box[7][2]=Textbox_Option(x(6),y(yLevel),"�Ǽһ�Թ���ɳ��","r|�Ǵ�");
line[line.length]=Link(box[7][2],box[6][0]);
//----------
box[8]=new Array();
yLevel+=4;
box[8][0]=Textbox_Option(x(2.5),y(yLevel),"�������磨�壩");
line[line.length]=Link(Point(linx(4),liny(-1)),box[7][0]);
line[line.length]=Link(Point(linx(4),liny(-1)),box[7][1]);
line[line.length]=Link(Point(linx(4),liny(-1)),box[7][2]);
line[line.length]=Link(Point(linx(4),liny(-1)),Point(linx(1),liny(-1)),box[3][0]);
line[line.length]=Link(box[8][0],Point(linx(2.5),liny(-1)));
//----------
box[9]=new Array();
yLevel+=2;
box[9][0]=Textbox_Date(x(2.5),y(yLevel),"4��24��","bottom");
line[line.length]=Link(box[9][0],box[8][0]);
box[9][0].addTitle("���ת��21ҳ");
box[9][0].addClick(function(){gotopage(21)});

hdft["footer"]=Footer(liny(3),20);