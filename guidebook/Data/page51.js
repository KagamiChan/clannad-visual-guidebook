// CVG HTML Data Page51 Done By Shakugan_No_Kaluote 2008.4.20
hdft["header"]=Header("nagisa","�ź� �/�Ҵ� ����","Nagisa Furukawa / Toshio Yukimura","4��26�ա�4��27��","April 26th~April 27th");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(3.5),y(yLevel),"4��26��","top");
//----------
box[1]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="";
CmtOption="-ȥ���ҿ�";
CmtEvents="00100000";
CmtEvntIru="��Ұ��Ϊ3��3��������Ա��ѡ";
box[1][0]=Textbox_Selection_C(x(3.5),y(yLevel),"��ǰѰ�һ��","1",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"��ǰѰ�һ��",0);
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Option(x(2.5),y(yLevel),"ȥ���ҿ�");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Option(x(4.5),y(yLevel),"�ȵ�����һ");
line[line.length]=Link(box[2][1],box[1][0]);
//----------
box[3]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="";
CmtOption="-���Ҵ�������</div></td><td width=\""+(COMMENTBARWIDTH)+"\" height=\""+COMMENTBARHEIGHT+"\" valign=\"bottom\" align=\"center\"></td><td width=\""+(COMMENTBARWIDTH)+"\" height=\""+COMMENTBARHEIGHT+"\" valign=\"bottom\" align=\"center\"></td><td width=\""+(COMMENTBASESPACING)+"\"></td></tr></table></td></tr><tr><td background=\""+src_commentbase_base+"\"><table border=0 cellpadding=0 cellspacing=0 width=\""+COMMENTWIDTH+"\"><tr><td width=\""+(COMMENTBASESPACING)+"\"></td><td width=\""+(8*COMMENTBUTTONSIZE-COMMENTBASESPACING)+"\" height=\""+COMMENTBUTTONSIZE+"\" valign=\"bottom\" align=\"left\" class=\"comment"+sizestr+"\"><img src=\""+src_comment_mark_un[0]+"\" style=\"margin-right:0px;\"><img src=\""+src_comment_mark_un[1]+"\" style=\"margin-right:0px;\"><img src=\""+src_comment_mark_en[2]+"\" style=\"margin-right:0px;\"><img src=\""+src_comment_mark_un[3]+"\" style=\"margin-right:0px;\"><img src=\""+src_comment_mark_un[4]+"\" style=\"margin-right:0px;\"><img src=\""+src_comment_mark_un[5]+"\" style=\"margin-right:0px;\"><img src=\""+src_comment_mark_un[6]+"\" style=\"margin-right:0px;\"><img src=\""+src_comment_mark_un[7]+"\" style=\"margin-right:0px;\"></td><td width=\""+(COMMENTWIDTH-COMMENTBASESPACING-8*COMMENTBUTTONSIZE)+"\"><table border=0 cellpadding=0 cellspacing=0 height="+COMMENTEVENTHEIGHT+" background=\""+src_commentbase_event+"\"><tr><td height="+COMMENTEVENTHEIGHT+" valign=\"middle\" class=\"cmtEvnt"+sizestr+"\" width=\""+(COMMENTWIDTH-2*COMMENTBASESPACING-8*COMMENTBUTTONSIZE)+"\">��Ұ����3��3������</td></tr></table></td><td width=\""+(COMMENTBASESPACING)+"\"></td></tr></table></td></tr><tr><td background=\""+src_commentbase_base+"\" height=\""+(COMMENTBASESPACING/2)+"\"></td></tr><tr><td background=\""+src_commentbase_base+"\"><table border=0 cellpadding=0 cellspacing=0 width=\""+COMMENTWIDTH+"\"><tr><td width=\""+(COMMENTBASESPACING)+"\"></td><td width=\""+(COMMENTBARWIDTH)+"\" height=\""+COMMENTBARHEIGHT+"\" background=\""+src_commentbase_option_B+"\" valign=\"bottom\" align=\"center\"><div class=\"cmtopt"+sizestr+"\">��Ҫ��������";
CmtEvents="00100000";
CmtEvntIru="�����������������3��3������";
box[3][0]=Textbox_Selection_C(x(2.5),y(yLevel),"�����������Ҵ�","2",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"�����������Ҵ�",0);
line[line.length]=Link(box[3][0],box[2][0]);
//----------
box[4]=new Array();
yLevel+=3;
box[4][0]=Textbox_Option(x(1.5),y(yLevel),"���Ҵ�������");
line[line.length]=Link(box[4][0],box[3][0]);
box[4][1]=Textbox_Option(x(3.5),y(yLevel),"��Ҫ������");
line[line.length]=Link(box[4][1],box[3][0]);
//----------
box[5]=new Array();
yLevel+=4;
box[5][0]=Textbox_Condition(x(3.5),y(yLevel),"23�գ���ԭ�����ô����绰");
line[line.length]=Link(box[5][0],Point(linx(2.5),liny(-1)),box[4][0]);
line[line.length]=Link(box[5][0],Point(linx(2.5),liny(-1)),box[4][1]);
line[line.length]=Link(box[5][0],box[2][1]);
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
CmtSummery="";
CmtSelect="";
CmtCaution="";
CmtOption="-�õ�";
CmtEvents="00100001";
CmtEvntIru="��������������3��3��������ѿ�¡�����֦�����ҵ���񣨴�Ϊ����֦�����ҵ�������һ��;����Ҳ����ѡ;����";
box[7][0]=Textbox_Selection_C(x(2.5),y(yLevel),"ǰ��̽�׵�ѿ��","3",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"ǰ��̽�׵�ѿ��",0);
line[line.length]=Link(box[7][0],box[6][0]);
//----------
box[8]=new Array();
yLevel+=3;
box[8][0]=Textbox_Option(x(1.5),y(yLevel),"�õ�");
line[line.length]=Link(box[8][0],box[7][0]);
box[8][1]=Textbox_Option(x(3.5),y(yLevel),"�Լ�һ����ȥ��");
line[line.length]=Link(box[8][1],box[7][0]);
//----------
box[9]=new Array();
yLevel+=4;
box[9][0]=Textbox_Date(x(3.5),y(yLevel),"4��27��","bottom");
line[line.length]=Link(box[9][0],Point(linx(2.5),liny(-1)),box[8][0]);
line[line.length]=Link(box[9][0],Point(linx(2.5),liny(-1)),box[8][1]);
line[line.length]=Link(box[9][0],box[6][1]);
//----------
box[10]=new Array();
yLevel+=5;
box[10][0]=Textbox_Date(x(3),y(yLevel),"4��27��","top");
//----------
box[11]=new Array();
yLevel+=2;
box[11][0]=Textbox_Condition(x(3),y(yLevel),"26�գ�ǰ��̽�׵�ѿ��");
line[line.length]=Link(box[11][0],box[10][0]);
//----------
box[12]=new Array();
yLevel+=3;
box[12][0]=Textbox_Selection(x(1),y(yLevel),"�õ�");
line[line.length]=Link(box[12][0],box[11][0]);
box[12][1]=Textbox_Selection(x(5),y(yLevel),"�Լ�һ����ȥ��","r|+δ����");
line[line.length]=Link(box[12][1],box[11][0]);
//----------
box[13]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="";
CmtOption="-����";
CmtEvents="00000001";
CmtEvntIru="���������������ҵ���񣨴�Ϊ���Ӳ����ҵ�������һ��;����";
box[13][0]=Textbox_Selection_C(x(1),y(yLevel),"��æ�������","1",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"��æ�������",0);
line[line.length]=Link(box[13][0],box[12][0]);
box[13][1]=Textbox_Selection(x(5),y(yLevel),"��ĩ�������");
line[line.length]=Link(box[13][1],box[12][1]);
//----------
box[14]=new Array();
yLevel+=3;
box[14][0]=Textbox_Option(x(0),y(yLevel),"����");
line[line.length]=Link(box[14][0],box[13][0]);
box[14][1]=Textbox_Option(x(2),y(yLevel),"����");
line[line.length]=Link(box[14][1],box[13][0]);
box[14][2]=Textbox_Option(x(4),y(yLevel),"����æ");
line[line.length]=Link(box[14][2],box[13][1]);
box[14][3]=Textbox_Option(x(6),y(yLevel),"�������");
line[line.length]=Link(box[14][3],box[13][1]);
//----------
box[15]=new Array();
yLevel+=2;
box[15][0]=Textbox_Selection(x(4),y(yLevel),"������ߵ��");
line[line.length]=Link(box[15][0],box[14][2]);
//----------
box[16]=new Array();
yLevel+=3;
box[16][0]=Textbox_Option(x(3),y(yLevel),"��ס侵ļ��");
line[line.length]=Link(box[16][0],box[15][0]);
box[16][1]=Textbox_Option(x(5),y(yLevel),"�����Լ�");
line[line.length]=Link(box[16][1],box[15][0]);
//----------
box[17]=new Array();
yLevel+=5;
box[17][0]=Textbox_Option(x(3),y(yLevel),"�������磨�ߣ�");
line[line.length]=Link(box[17][0],Point(linx(5),liny(-1)),Point(linx(4),liny(-2)),box[16][0]);
line[line.length]=Link(box[17][0],Point(linx(5),liny(-1)),Point(linx(4),liny(-2)),box[16][1]);
line[line.length]=Link(box[17][0],Point(linx(1),liny(-7)),box[14][0]);
line[line.length]=Link(box[17][0],Point(linx(1),liny(-7)),box[14][1]);
line[line.length]=Link(box[17][0],Point(linx(5),liny(-1)),box[14][3]);
//----------
box[18]=new Array();
yLevel+=2;
box[18][0]=Textbox_Date(x(3),y(yLevel),"4��28��","bottom");
box[18][0].addTitle("���ת����52ҳ");
box[18][0].addClick(function(){gotopage(52)});
line[line.length]=Link(box[18][0],box[17][0]);

hdft["footer"]=Footer(liny(2),51);