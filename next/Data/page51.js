// CVG HTML Data Page51 Done By Shakugan_No_Kaluote 2008.4.20
hdft["header"]=Header("nagisa","古河 渚/幸村 俊夫","Nagisa Furukawa / Toshio Yukimura","4月26日～4月27日","April 26th~April 27th");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(3.5),y(yLevel),"4月26日","top");
//----------
box[1]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="";
CmtOption="-去找找看";
CmtEvents="00100000";
CmtEvntIru="芳野成为3对3篮球赛成员候选";
box[1][0]=Textbox_Selection_C(x(3.5),y(yLevel),"提前寻找伙伴","1",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"提前寻找伙伴",0);
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Option(x(2.5),y(yLevel),"去找找看");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Option(x(4.5),y(yLevel),"等到星期一");
line[line.length]=Link(box[2][1],box[1][0]);
//----------
box[3]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="";
CmtOption="-让幸村加入队伍</div></td><td width=\""+(COMMENTBARWIDTH)+"\" height=\""+COMMENTBARHEIGHT+"\" valign=\"bottom\" align=\"center\"></td><td width=\""+(COMMENTBARWIDTH)+"\" height=\""+COMMENTBARHEIGHT+"\" valign=\"bottom\" align=\"center\"></td><td width=\""+(COMMENTBASESPACING)+"\"></td></tr></table></td></tr><tr><td background=\""+src_commentbase_base+"\"><table border=0 cellpadding=0 cellspacing=0 width=\""+COMMENTWIDTH+"\"><tr><td width=\""+(COMMENTBASESPACING)+"\"></td><td width=\""+(8*COMMENTBUTTONSIZE-COMMENTBASESPACING)+"\" height=\""+COMMENTBUTTONSIZE+"\" valign=\"bottom\" align=\"left\" class=\"comment"+sizestr+"\"><img src=\""+src_comment_mark_un[0]+"\" style=\"margin-right:0px;\"><img src=\""+src_comment_mark_un[1]+"\" style=\"margin-right:0px;\"><img src=\""+src_comment_mark_en[2]+"\" style=\"margin-right:0px;\"><img src=\""+src_comment_mark_un[3]+"\" style=\"margin-right:0px;\"><img src=\""+src_comment_mark_un[4]+"\" style=\"margin-right:0px;\"><img src=\""+src_comment_mark_un[5]+"\" style=\"margin-right:0px;\"><img src=\""+src_comment_mark_un[6]+"\" style=\"margin-right:0px;\"><img src=\""+src_comment_mark_un[7]+"\" style=\"margin-right:0px;\"></td><td width=\""+(COMMENTWIDTH-COMMENTBASESPACING-8*COMMENTBUTTONSIZE)+"\"><table border=0 cellpadding=0 cellspacing=0 height="+COMMENTEVENTHEIGHT+" background=\""+src_commentbase_event+"\"><tr><td height="+COMMENTEVENTHEIGHT+" valign=\"middle\" class=\"cmtEvnt"+sizestr+"\" width=\""+(COMMENTWIDTH-2*COMMENTBASESPACING-8*COMMENTBUTTONSIZE)+"\">芳野参与3对3篮球赛</td></tr></table></td><td width=\""+(COMMENTBASESPACING)+"\"></td></tr></table></td></tr><tr><td background=\""+src_commentbase_base+"\" height=\""+(COMMENTBASESPACING/2)+"\"></td></tr><tr><td background=\""+src_commentbase_base+"\"><table border=0 cellpadding=0 cellspacing=0 width=\""+COMMENTWIDTH+"\"><tr><td width=\""+(COMMENTBASESPACING)+"\"></td><td width=\""+(COMMENTBARWIDTH)+"\" height=\""+COMMENTBARHEIGHT+"\" background=\""+src_commentbase_option_B+"\" valign=\"bottom\" align=\"center\"><div class=\"cmtopt"+sizestr+"\">不要让他加入";
CmtEvents="00100000";
CmtEvntIru="秋生、渚有条件参与3对3篮球赛";
box[3][0]=Textbox_Selection_C(x(2.5),y(yLevel),"在走廊遇到幸村","2",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"在走廊遇到幸村",0);
line[line.length]=Link(box[3][0],box[2][0]);
//----------
box[4]=new Array();
yLevel+=3;
box[4][0]=Textbox_Option(x(1.5),y(yLevel),"让幸村加入队伍");
line[line.length]=Link(box[4][0],box[3][0]);
box[4][1]=Textbox_Option(x(3.5),y(yLevel),"不要他加入");
line[line.length]=Link(box[4][1],box[3][0]);
//----------
box[5]=new Array();
yLevel+=4;
box[5][0]=Textbox_Condition(x(3.5),y(yLevel),"23日，春原的妹妹打来电话");
line[line.length]=Link(box[5][0],Point(linx(2.5),liny(-1)),box[4][0]);
line[line.length]=Link(box[5][0],Point(linx(2.5),liny(-1)),box[4][1]);
line[line.length]=Link(box[5][0],box[2][1]);
//----------
box[6]=new Array();
yLevel+=3;
box[6][0]=Textbox_Selection(x(2.5),y(yLevel),"代春原接听");
line[line.length]=Link(box[6][0],box[5][0]);
box[6][1]=Textbox_Selection(x(4.5),y(yLevel),"不代他接听","r|+未触发");
line[line.length]=Link(box[6][1],box[5][0]);
//----------
box[7]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="";
CmtOption="-好的";
CmtEvents="00100001";
CmtEvntIru="秋生有条件参与3对3篮球赛；芽衣、美佐枝参与毕业典礼（此为美佐枝参与毕业典礼的另一种途径，也是首选途径）";
box[7][0]=Textbox_Selection_C(x(2.5),y(yLevel),"前来探亲的芽衣","3",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"前来探亲的芽衣",0);
line[line.length]=Link(box[7][0],box[6][0]);
//----------
box[8]=new Array();
yLevel+=3;
box[8][0]=Textbox_Option(x(1.5),y(yLevel),"好的");
line[line.length]=Link(box[8][0],box[7][0]);
box[8][1]=Textbox_Option(x(3.5),y(yLevel),"自己一个人去吧");
line[line.length]=Link(box[8][1],box[7][0]);
//----------
box[9]=new Array();
yLevel+=4;
box[9][0]=Textbox_Date(x(3.5),y(yLevel),"4月27日","bottom");
line[line.length]=Link(box[9][0],Point(linx(2.5),liny(-1)),box[8][0]);
line[line.length]=Link(box[9][0],Point(linx(2.5),liny(-1)),box[8][1]);
line[line.length]=Link(box[9][0],box[6][1]);
//----------
box[10]=new Array();
yLevel+=5;
box[10][0]=Textbox_Date(x(3),y(yLevel),"4月27日","top");
//----------
box[11]=new Array();
yLevel+=2;
box[11][0]=Textbox_Condition(x(3),y(yLevel),"26日，前来探亲的芽衣");
line[line.length]=Link(box[11][0],box[10][0]);
//----------
box[12]=new Array();
yLevel+=3;
box[12][0]=Textbox_Selection(x(1),y(yLevel),"好的");
line[line.length]=Link(box[12][0],box[11][0]);
box[12][1]=Textbox_Selection(x(5),y(yLevel),"自己一个人去吧","r|+未触发");
line[line.length]=Link(box[12][1],box[11][0]);
//----------
box[13]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="";
CmtOption="-可以";
CmtEvents="00000001";
CmtEvntIru="公子有条件参与毕业典礼（此为公子参与毕业典礼的另一种途径）";
box[13][0]=Textbox_Selection_C(x(1),y(yLevel),"帮忙打理店铺","1",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"帮忙打理店铺",0);
line[line.length]=Link(box[13][0],box[12][0]);
box[13][1]=Textbox_Selection(x(5),y(yLevel),"周末的面包店");
line[line.length]=Link(box[13][1],box[12][1]);
//----------
box[14]=new Array();
yLevel+=3;
box[14][0]=Textbox_Option(x(0),y(yLevel),"可以");
line[line.length]=Link(box[14][0],box[13][0]);
box[14][1]=Textbox_Option(x(2),y(yLevel),"不好");
line[line.length]=Link(box[14][1],box[13][0]);
box[14][2]=Textbox_Option(x(4),y(yLevel),"来帮忙");
line[line.length]=Link(box[14][2],box[13][1]);
box[14][3]=Textbox_Option(x(6),y(yLevel),"来买面包");
line[line.length]=Link(box[14][3],box[13][1]);
//----------
box[15]=new Array();
yLevel+=2;
box[15][0]=Textbox_Selection(x(4),y(yLevel),"近在身边的渚");
line[line.length]=Link(box[15][0],box[14][2]);
//----------
box[16]=new Array();
yLevel+=3;
box[16][0]=Textbox_Option(x(3),y(yLevel),"抱住渚的肩膀");
line[line.length]=Link(box[16][0],box[15][0]);
box[16][1]=Textbox_Option(x(5),y(yLevel),"克制自己");
line[line.length]=Link(box[16][1],box[15][0]);
//----------
box[17]=new Array();
yLevel+=5;
box[17][0]=Textbox_Option(x(3),y(yLevel),"幻想世界（七）");
line[line.length]=Link(box[17][0],Point(linx(5),liny(-1)),Point(linx(4),liny(-2)),box[16][0]);
line[line.length]=Link(box[17][0],Point(linx(5),liny(-1)),Point(linx(4),liny(-2)),box[16][1]);
line[line.length]=Link(box[17][0],Point(linx(1),liny(-7)),box[14][0]);
line[line.length]=Link(box[17][0],Point(linx(1),liny(-7)),box[14][1]);
line[line.length]=Link(box[17][0],Point(linx(5),liny(-1)),box[14][3]);
//----------
box[18]=new Array();
yLevel+=2;
box[18][0]=Textbox_Date(x(3),y(yLevel),"4月28日","bottom");
box[18][0].addTitle("点击转到第52页");
box[18][0].addClick(function(){gotopage(52)});
line[line.length]=Link(box[18][0],box[17][0]);

hdft["footer"]=Footer(liny(2),51);