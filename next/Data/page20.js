// CVG HTML Data Page20 Done By Shakugan_No_Kaluote 2008.4.4
hdft["header"]=Header("public","公共路线","Public Route","4月23日（三）","April 23th~Part 3");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Condition(x(2.5),y(yLevel),"22日，被春原利用，智代陷入窘境");
line[line.length]=Link(Point(linx(2.5),liny(0)-LINEBASEHEIGHT/2),Point(linx(2.5),liny(0)-LINEBASEHEIGHT/2));
line[line.length-1].addTitle("点击转到第19页");
line[line.length-1].addClick(function(){gotopage(19)});
line[line.length]=Link(Point(linx(2.5),liny(2)),box[0][0]);
//----------
box[1]=new Array();
yLevel+=3;
box[1][0]=Textbox_Selection(x(1),y(yLevel),"和春原一起享受","l|+未触发");
line[line.length]=Link(box[1][0],Point(linx(2),liny(-1)));
box[1][1]=Textbox_Selection(x(4),y(yLevel),"该阻止他了");
line[line.length]=Link(box[1][1],Point(linx(2),liny(-1)));
//----------
box[2]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="";
CmtOption="-代春原接听</div></td><td width=\""+(COMMENTBARWIDTH)+"\" height=\""+COMMENTBARHEIGHT+"\" valign=\"bottom\" align=\"center\"></td><td width=\""+(COMMENTBARWIDTH)+"\" height=\""+COMMENTBARHEIGHT+"\" valign=\"bottom\" align=\"center\"></td><td width=\""+(COMMENTBASESPACING)+"\"></td></tr></table></td></tr><tr><td background=\""+src_commentbase_base+"\"><table border=0 cellpadding=0 cellspacing=0 width=\""+COMMENTWIDTH+"\"><tr><td width=\""+(COMMENTBASESPACING)+"\"></td><td width=\""+(8*COMMENTBUTTONSIZE-COMMENTBASESPACING)+"\" height=\""+COMMENTBUTTONSIZE+"\" valign=\"bottom\" align=\"left\" class=\"comment"+sizestr+"\"><img src=\""+src_comment_mark_un[0]+"\" style=\"margin-right:0px;\"><img src=\""+src_comment_mark_un[1]+"\" style=\"margin-right:0px;\"><img src=\""+src_comment_mark_en[2]+"\" style=\"margin-right:0px;\"><img src=\""+src_comment_mark_un[3]+"\" style=\"margin-right:0px;\"><img src=\""+src_comment_mark_un[4]+"\" style=\"margin-right:0px;\"><img src=\""+src_comment_mark_un[5]+"\" style=\"margin-right:0px;\"><img src=\""+src_comment_mark_un[6]+"\" style=\"margin-right:0px;\"><img src=\""+src_comment_mark_en[7]+"\" style=\"margin-right:0px;\"></td><td width=\""+(COMMENTWIDTH-COMMENTBASESPACING-8*COMMENTBUTTONSIZE)+"\"><table border=0 cellpadding=0 cellspacing=0 height="+COMMENTEVENTHEIGHT+" background=\""+src_commentbase_event+"\"><tr><td height="+COMMENTEVENTHEIGHT+" valign=\"top\" class=\"cmtEvnt"+sizestr+"\" width=\""+(COMMENTWIDTH-2*COMMENTBASESPACING-8*COMMENTBUTTONSIZE)+"\">秋生有条件参与3对3篮球赛；芽衣、美佐枝有条件参与毕业典礼（此为美佐枝参与毕业典礼的另一种途径，也是首选途径）</td></tr></table></td><td width=\""+(COMMENTBASESPACING)+"\"></td></tr></table></td></tr><tr><td background=\""+src_commentbase_base+"\" height=\""+(COMMENTBASESPACING/2)+"\"></td></tr><tr><td background=\""+src_commentbase_base+"\"><table border=0 cellpadding=0 cellspacing=0 width=\""+COMMENTWIDTH+"\"><tr><td width=\""+(COMMENTBASESPACING)+"\"></td><td width=\""+(COMMENTBARWIDTH)+"\" height=\""+COMMENTBARHEIGHT+"\" background=\""+src_commentbase_option_B+"\" valign=\"bottom\" align=\"center\"><div class=\"cmtopt"+sizestr+"\">不代他接听";
CmtEvents="00000010";
CmtEvntIru="业余棒球进入必选";
box[2][0]=Textbox_Selection_C(x(1),y(yLevel),"春原的妹妹打来电话","7",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"春原的妹妹打来电话",0);
line[line.length]=Link(box[2][0],box[1][0]);
//----------
box[3]=new Array();
yLevel+=3;
box[3][0]=Textbox_Option(x(1),y(yLevel),"代春原接听","l|芽衣");
line[line.length]=Link(box[3][0],box[2][0]);
box[3][1]=Textbox_Option(x(3),y(yLevel),"不代他接听","r|芽衣");
line[line.length]=Link(box[3][1],box[2][0]);
line[line.length]=Link(Point(linx(1),liny(3)),box[3][1]);
//----------
box[4]=new Array();
yLevel+=3;
box[4][0]=Textbox_Condition(x(4),y(yLevel),"15日庭院中少女的谈话");
line[line.length]=Link(box[4][0],box[1][1]);
//----------
box[5]=new Array();
yLevel+=3;
box[5][0]=Textbox_Selection(x(2),y(yLevel),"是时候离开了","l|+未触发");
line[line.length]=Link(box[5][0],box[4][0]);
box[5][1]=Textbox_Selection(x(4),y(yLevel),"在继续谈话");
line[line.length]=Link(box[5][1],box[4][0]);
line[line.length]=Link(Point(linx(1),liny(3)),box[5][0]);
//----------
box[6]=new Array();
yLevel+=2;
box[6][0]=Textbox_Selection(x(4),y(yLevel),"打架的借口");
line[line.length]=Link(box[6][0],box[5][1]);
//----------
box[7]=new Array();
yLevel+=3;
box[7][0]=Textbox_Option(x(2),y(yLevel),"那家伙以话剧社为目标","l|智代");
line[line.length]=Link(box[7][0],box[6][0]);
box[7][1]=Textbox_Option(x(4),y(yLevel),"那家伙休学了很长时间","l|-智代");
line[line.length]=Link(box[7][1],box[6][0]);
box[7][2]=Textbox_Option(x(6),y(yLevel),"那家伙吃过豆沙包","r|智代");
line[line.length]=Link(box[7][2],box[6][0]);
//----------
box[8]=new Array();
yLevel+=4;
box[8][0]=Textbox_Option(x(2.5),y(yLevel),"幻想世界（五）");
line[line.length]=Link(Point(linx(4),liny(-1)),box[7][0]);
line[line.length]=Link(Point(linx(4),liny(-1)),box[7][1]);
line[line.length]=Link(Point(linx(4),liny(-1)),box[7][2]);
line[line.length]=Link(Point(linx(4),liny(-1)),Point(linx(1),liny(-1)),box[3][0]);
line[line.length]=Link(box[8][0],Point(linx(2.5),liny(-1)));
//----------
box[9]=new Array();
yLevel+=2;
box[9][0]=Textbox_Date(x(2.5),y(yLevel),"4月24日","bottom");
line[line.length]=Link(box[9][0],box[8][0]);
box[9][0].addTitle("点击转到21页");
box[9][0].addClick(function(){gotopage(21)});

hdft["footer"]=Footer(liny(3),20);