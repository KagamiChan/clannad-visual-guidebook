// CVG HTML Data Page33 Done By Shakugan_No_Kaluote 2008.4.18
hdft["header"]=Header("yukine","宫泽 有纪宁","Yukine Miyazawa","体育仓库事件","Gym Warehouse Event");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Option(x(0),y(yLevel),"体育仓库事件");
box[0][0].addLink("p33_GYM");
box[0][0].addClick(function(){gotopage(31,"p31_retGYM")});
box[0][1]=Textbox_Selection(x(3.5),y(yLevel),"堆硬币的考验");
line[line.length]=Link(Point(linx(3.5),liny(0)-LINEBASEHEIGHT/2),Point(linx(3.5),liny(0)-LINEBASEHEIGHT/2));
//----------
box[1]=new Array();
yLevel+=3;
box[1][0]=Textbox_Option(x(3.5),y(yLevel),"试试看");
line[line.length]=Link(box[1][0],box[0][1]);
box[1][1]=Textbox_Option(x(5.5),y(yLevel),"给春原");
line[line.length]=Link(box[1][1],box[0][1]);
//----------
box[2]=new Array();
yLevel+=2;
box[2][0]=Textbox_Condition(x(3.5),y(yLevel),"15日，回想起中午庭院中的女生");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Condition(x(5.5),y(yLevel),"春原仓库剧情 A");
line[line.length]=Link(box[2][1],box[1][1]);
//----------
box[3]=new Array();
yLevel+=3;
box[3][0]=Textbox_Selection(x(2.5),y(yLevel),"在意");
line[line.length]=Link(box[3][0],box[2][0]);
box[3][1]=Textbox_Selection(x(4.5),y(yLevel),"不在意","r|+未触发");
line[line.length]=Link(box[3][1],box[2][0]);
//----------
box[4]=new Array();
yLevel+=2;
box[4][0]=Textbox_Selection(x(2.5),y(yLevel),"陪伴的人选（一）");
line[line.length]=Link(box[4][0],box[3][0]);
//----------
box[5]=new Array();
yLevel+=3;
box[5][0]=Textbox_Option(x(1.5),y(yLevel),"古河…");
line[line.length]=Link(box[5][0],box[4][0]);
box[5][1]=Textbox_Option(x(3.5),y(yLevel),"不是古河…");
line[line.length]=Link(box[5][1],box[4][0]);
//----------
box[6]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="{23日，咒语游戏中遇到渚}即在23日有纪宁的咒语中触发{咒语游戏中遇到渚}的剧情。接下来的{23日，咒语游戏中遇到……}同样是这个意思。<br>此处，如果在16日的分支{古河重新创立话剧社}中选择[帮助]（即之后朋也认识了古河的家人），那么即使在23日咒语游戏中没有触发遇到渚的剧情，同样符合是的条件。";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[6][0]=Textbox_Condition_C(x(1.5),y(yLevel),"23日，咒语游戏中遇到渚","1",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"23日，咒语游戏中遇到渚",0);
line[line.length]=Link(box[6][0],box[5][0]);
//----------
box[7]=new Array();
yLevel+=3;
box[7][0]=Textbox_Selection(x(0.5),y(yLevel),"是");
line[line.length]=Link(box[7][0],box[6][0]);
box[7][1]=Textbox_Selection(x(2.5),y(yLevel),"否");
line[line.length]=Link(box[7][1],box[6][0]);
//----------
box[8]=new Array();
yLevel+=2;
box[8][0]=Textbox_Condition(x(0.5),y(yLevel),"渚仓库剧情");
line[line.length]=Link(box[8][0],box[7][0]);
box[8][1]=Textbox_Condition(x(2.5),y(yLevel),"秋生仓库剧情");
line[line.length]=Link(box[8][1],box[7][1]);
box[8][2]=Textbox_Condition(x(4.5),y(yLevel),"18日，独自雕刻的风子");
line[line.length]=Link(box[8][2],Point(linx(4.5),liny(-4)),box[5][1]);
line[line.length]=Link(box[8][2],box[3][1]);
//----------
box[9]=new Array();
yLevel+=3;
box[9][0]=Textbox_Selection(x(2.5),y(yLevel),"离开","l|+未触发");
line[line.length]=Link(box[9][0],box[8][2]);
box[9][1]=Textbox_Selection(x(4.5),y(yLevel),"再看一会儿");
line[line.length]=Link(box[9][1],box[8][2]);
//----------
box[10]=new Array();
yLevel+=2;
box[10][0]=Textbox_Selection(x(4.5),y(yLevel),"陪伴的人选（二）");
line[line.length]=Link(box[10][0],box[9][1]);
//----------
box[11]=new Array();
yLevel+=3;
box[11][0]=Textbox_Option(x(3.5),y(yLevel),"不是…");
line[line.length]=Link(box[11][0],box[10][0]);
box[11][1]=Textbox_Option(x(5.5),y(yLevel),"风子…");
line[line.length]=Link(box[11][1],box[10][0]);
//----------
box[12]=new Array();
yLevel+=3;
box[12][0]=Textbox_Condition(x(2.5),y(yLevel),"18日，遇到困难的智代");
line[line.length]=Link(box[12][0],box[11][0]);
line[line.length]=Link(box[12][0],box[9][0]);
//----------
box[13]=new Array();
yLevel+=3;
box[13][0]=Textbox_Selection(x(1.5),y(yLevel),"甩开她的手","l|+未触发");
line[line.length]=Link(box[13][0],box[12][0]);
box[13][1]=Textbox_Selection(x(3.5),y(yLevel),"帮忙");
line[line.length]=Link(box[13][1],box[12][0]);
//----------
box[14]=new Array();
yLevel+=2;
box[14][0]=Textbox_Selection(x(3.5),y(yLevel),"陪伴的人选（三）");
line[line.length]=Link(box[14][0],box[13][1]);
//----------
box[15]=new Array();
yLevel+=3;
box[15][0]=Textbox_Option(x(2.5),y(yLevel),"不是…");
line[line.length]=Link(box[15][0],box[14][0]);
box[15][1]=Textbox_Option(x(4.5),y(yLevel),"智代…");
line[line.length]=Link(box[15][1],box[14][0]);
//----------
box[16]=new Array();
yLevel+=2;
box[16][0]=Textbox_Condition(x(4.5),y(yLevel),"23日，诅咒游戏中遇到智代");
line[line.length]=Link(box[16][0],box[15][1]);
//----------
box[17]=new Array();
yLevel+=3;
box[17][0]=Textbox_Selection(x(2.5),y(yLevel),"是");
line[line.length]=Link(box[17][0],box[16][0]);
box[17][1]=Textbox_Selection(x(4.5),y(yLevel),"否");
line[line.length]=Link(box[17][1],box[16][0]);
//----------
box[18]=new Array();
yLevel+=2;
box[18][0]=Textbox_Condition(x(2.5),y(yLevel),"智代仓库剧情");
line[line.length]=Link(box[18][0],box[17][0]);
//----------
box[19]=new Array();
yLevel+=2;
box[19][0]=Textbox_Selection(x(1.5),y(yLevel),"陪伴的人选（四）");
line[line.length]=Link(box[19][0],Point(linx(1.5),liny(-6)),box[15][0]);
line[line.length]=Link(box[19][0],box[13][0]);
//----------
box[20]=new Array();
yLevel+=3;
box[20][0]=Textbox_Option(x(1.5),y(yLevel),"杏…");
line[line.length]=Link(box[20][0],box[19][0]);
box[20][1]=Textbox_Option(x(3.5),y(yLevel),"不是…");
line[line.length]=Link(box[20][1],box[19][0]);
//----------
box[21]=new Array();
yLevel+=2;
box[21][0]=Textbox_Condition(x(1.5),y(yLevel),"23日，诅咒游戏中遇到杏、椋");
line[line.length]=Link(box[21][0],box[20][0]);
//----------
box[22]=new Array();
yLevel+=3;
box[22][0]=Textbox_Selection(x(1.5),y(yLevel),"是");
line[line.length]=Link(box[22][0],box[21][0]);
box[22][1]=Textbox_Selection(x(3.5),y(yLevel),"否");
line[line.length]=Link(box[22][1],box[21][0]);
//----------
box[23]=new Array();
yLevel+=2;
box[23][0]=Textbox_Condition(x(1.5),y(yLevel),"23日，杏抓朋也跟她出去谈话");
line[line.length]=Link(box[23][0],box[22][0]);
//----------
box[24]=new Array();
yLevel+=1;
box[24][0]=Textbox_Condition(x(5.5),y(yLevel),"春原仓库剧情 B");
line[line.length]=Link(box[24][0],box[22][1]);
line[line.length]=Link(box[24][0],Point(linx(5.5),liny(-5)),box[20][1]);
line[line.length]=Link(box[24][0],Point(linx(5.5),liny(-12)),box[17][1]);
line[line.length]=Link(box[24][0],box[11][1]);
//----------
box[25]=new Array();
yLevel+=2;
box[25][0]=Textbox_Selection(x(1.5),y(yLevel),"逃跑","l|+未触发");
line[line.length]=Link(box[25][0],box[23][0]);
box[25][1]=Textbox_Selection(x(3.5),y(yLevel),"跟着去");
line[line.length]=Link(box[25][1],box[23][0]);
//----------
box[26]=new Array();
yLevel+=2;
box[26][0]=Textbox_Condition(x(1.5),y(yLevel),"杏仓库剧情 A（普通版）");
line[line.length]=Link(box[26][0],box[25][0]);
box[26][1]=Textbox_Condition(x(3.5),y(yLevel),"杏仓库剧情 B（特殊版）");
line[line.length]=Link(box[26][1],box[25][1]);

hdft["footer"]=Footer(liny(1),33);