// CVG HTML Data Page39 Done By Shakugan_No_Kaluote 2008.4.20
hdft["header"]=Header("sunohara","春原 阳平/春原 芽衣","Youhei Sunohara/Mei Sunohara","伪女友事件","Fake Girlfriend Event");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Option(x(0),y(yLevel),"伪女友事件");
box[0][0].addLink("p39_FAKEGF");
box[0][1]=Textbox_Selection(x(4),y(yLevel),"考虑藤林姐妹");
line[line.length]=Link(Point(linx(4),liny(0)-LINEBASEHEIGHT/2),Point(linx(4),liny(0)-LINEBASEHEIGHT/2));
//----------
box[1]=new Array();
yLevel+=3;
box[1][0]=Textbox_Option(x(2),y(yLevel),"藤林姐妹");
line[line.length]=Link(box[1][0],box[0][1]);
box[1][1]=Textbox_Option(x(4),y(yLevel),"除此之外");
line[line.length]=Link(box[1][1],box[0][1]);
//----------
box[2]=new Array();
yLevel+=2;
box[2][0]=Textbox_Selection(x(2),y(yLevel),"选择姐姐还是妹妹");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Condition(x(4),y(yLevel),"15日,回想起中午庭院中的女生");
line[line.length]=Link(box[2][1],box[1][1]);
//----------
box[3]=new Array();
yLevel+=3;
box[3][0]=Textbox_Option(x(0),y(yLevel),"妹妹");
line[line.length]=Link(box[3][0],box[2][0]);
box[3][1]=Textbox_Option(x(2),y(yLevel),"姐姐");
line[line.length]=Link(box[3][1],box[2][0]);
box[3][2]=Textbox_Selection(x(4),y(yLevel),"在意");
line[line.length]=Link(box[3][2],box[2][1]);
box[3][3]=Textbox_Selection(x(6),y(yLevel),"不在意","r|+未触发");
line[line.length]=Link(box[3][3],box[2][1]);
//----------
box[4]=new Array();
yLevel+=2;
box[4][0]=Textbox_Condition(x(0),y(yLevel),"23日,杏抓朋也出去跟她谈话");
line[line.length]=Link(box[4][0],box[3][0]);
box[4][1]=Textbox_Quit(x(2),y(yLevel),"杏伪女友剧情");
box[4][1].addClick(function(){gotopage(38,"p38_retFAKEGF")});
line[line.length]=Link(box[4][1],box[3][1]);
//----------
box[5]=new Array();
yLevel+=3;
box[5][0]=Textbox_Selection(x(0),y(yLevel),"跟着去");
line[line.length]=Link(box[5][0],box[4][0]);
box[5][1]=Textbox_Selection(x(2),y(yLevel),"逃跑","r|+未触发");
line[line.length]=Link(box[5][1],box[4][0]);
//----------
box[6]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="再次进入伪女友事件，即跳回到24日分支{考虑藤林姐妹}。";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[6][0]=Textbox_Option_C(x(0),y(yLevel),"伪女友事件","1",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"伪女友事件",0);
box[6][0].addClick(function(){gotolink("p39_FAKEGF")});
line[line.length]=Link(box[6][0],box[5][0]);
box[6][1]=Textbox_Quit(x(2),y(yLevel),"椋伪女友剧情");
box[6][1].addClick(function(){gotopage(38,"p38_retFAKEGF")});
line[line.length]=Link(box[6][1],box[5][1]);
CmtSummery="";
CmtSelect="事实上，如果21日在分支{迟到后的午间}选择[看看窗外]，则24日会先一步进入渚、风子的剧情，因而无法进入春原兄妹的线路，而无法触发整个伪女友事件。因此，只有不触发21日的{分支迟到后的午间}（在上一条件（15日在分支{回想起中午庭院中的女生}中选择[在意]）的约束下，有两种方法可以避免触发这个分支：16日在分支{古河重新创立话剧社}中选择[让她一个人做]，或者{18日，和琴美一起吃午饭}（具体参见公共线路19日注释2）。即要求21日之前离开渚、风子线），才会出现接下来的分支{考虑古河}。";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[6][2]=Textbox_Condition_C(x(4),y(yLevel),"21日,迟到后的午间","2",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"21日,迟到后的午间",0);
line[line.length]=Link(box[6][2],box[3][2]);
//----------
box[7]=new Array();
yLevel+=3;
box[7][0]=Textbox_Selection(x(2),y(yLevel),"赶去学生食堂");
line[line.length]=Link(box[7][0],box[6][2]);
box[7][1]=Textbox_Selection(x(4),y(yLevel),"看看窗外","r|+未触发");
line[line.length]=Link(box[7][1],box[6][2]);
//----------
box[8]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="{23日，咒语游戏中遇到渚}即在23日有纪宁的咒语中触发{咒语游戏中遇到渚}的剧情。有纪宁的咒语相关攻略请参见P32。";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[8][0]=Textbox_Condition_C(x(2),y(yLevel),"23日，咒语游戏中遇到渚","3",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"23日，咒语游戏中遇到渚",0);
line[line.length]=Link(box[8][0],box[7][0]);
//----------
box[9]=new Array();
yLevel+=3;
box[9][0]=Textbox_Selection(x(0),y(yLevel),"否");
line[line.length]=Link(box[9][0],box[8][0]);
box[9][1]=Textbox_Selection(x(2),y(yLevel),"是");
line[line.length]=Link(box[9][1],box[8][0]);
//----------
box[10]=new Array();
yLevel+=3;
box[10][0]=Textbox_Selection(x(3),y(yLevel),"考虑古河");
line[line.length]=Link(box[10][0],box[9][1]);
line[line.length]=Link(box[10][0],box[7][1]);
//----------
box[11]=new Array();
yLevel+=3;
box[11][0]=Textbox_Option(x(2),y(yLevel),"除此之外");
line[line.length]=Link(box[11][0],box[10][0]);
box[11][1]=Textbox_Option(x(4),y(yLevel),"拜托古河");
line[line.length]=Link(box[11][1],box[10][0]);
//----------
box[12]=new Array();
yLevel+=2;
box[12][0]=Textbox_Quit(x(4),y(yLevel),"渚伪女友剧情");
box[12][0].addClick(function(){gotopage(38,"p38_retFAKEGF")});
line[line.length]=Link(box[12][0],box[11][1]);
//----------
box[13]=new Array();
yLevel+=1;
box[13][0]=Textbox_Condition(x(0),y(yLevel),"17日，春原挑战智代（四回目）");
line[line.length]=Link(box[13][0],box[11][0]);
line[line.length]=Link(box[13][0],box[9][0]);
box[13][1]=Textbox_Condition(x(6),y(yLevel),"17日，春原挑战智代（四回目");
line[line.length]=Link(box[13][1],box[3][3]);
//----------
box[14]=new Array();
yLevel+=3;
box[14][0]=Textbox_Selection(x(0),y(yLevel),"不去管他","l|+未触发");
line[line.length]=Link(box[14][0],box[13][0]);
box[14][1]=Textbox_Selection(x(2),y(yLevel),"跟着他去");
line[line.length]=Link(box[14][1],box[13][0]);
box[14][2]=Textbox_Selection(x(4),y(yLevel),"跟着他去");
line[line.length]=Link(box[14][2],box[13][1]);
box[14][3]=Textbox_Selection(x(6),y(yLevel),"不去管他","r|+未触发");
line[line.length]=Link(box[14][3],box[13][1]);
//----------
box[15]=new Array();
yLevel+=3;
box[15][0]=Textbox_Selection(x(3),y(yLevel),"考虑智代");
line[line.length]=Link(box[15][0],box[14][1]);
line[line.length]=Link(box[15][0],box[14][2]);
//----------
box[16]=new Array();
yLevel+=3;
box[16][0]=Textbox_Option(x(2),y(yLevel),"除此之外");
line[line.length]=Link(box[16][0],box[15][0]);
box[16][1]=Textbox_Option(x(4),y(yLevel),"拜托智代");
line[line.length]=Link(box[16][1],box[15][0]);
//----------
box[17]=new Array();
yLevel+=2;
box[17][0]=Textbox_Quit(x(4),y(yLevel),"智代伪女友剧情");
box[17][0].addClick(function(){gotopage(38,"p38_retFAKEGF")});
line[line.length]=Link(box[17][0],box[16][1]);
//----------
box[18]=new Array();
yLevel+=1;
box[18][0]=Textbox_Condition(x(0),y(yLevel),"18日，独自雕刻的风子");
line[line.length]=Link(box[18][0],box[16][0]);
line[line.length]=Link(box[18][0],box[14][0]);
box[18][1]=Textbox_Condition(x(6),y(yLevel),"18日，独自雕刻的风子");
line[line.length]=Link(box[18][1],box[14][3]);
//----------
box[19]=new Array();
yLevel+=3;
box[19][0]=Textbox_Selection(x(0),y(yLevel),"离开","l|+未触发");
line[line.length]=Link(box[19][0],box[18][0]);
box[19][1]=Textbox_Selection(x(2),y(yLevel),"再看一会儿");
line[line.length]=Link(box[19][1],box[18][0]);
box[19][2]=Textbox_Selection(x(4),y(yLevel),"再看一会儿");
line[line.length]=Link(box[19][2],box[18][1]);
box[19][3]=Textbox_Selection(x(6),y(yLevel),"离开","r|+未触发");
line[line.length]=Link(box[19][3],box[18][1]);
//----------
box[20]=new Array();
yLevel+=3;
box[20][0]=Textbox_Selection(x(3),y(yLevel),"考虑风子");
line[line.length]=Link(box[20][0],box[19][1]);
line[line.length]=Link(box[20][0],box[19][2]);
//----------
box[21]=new Array();
yLevel+=3;
box[21][0]=Textbox_Option(x(2),y(yLevel),"拜托风子");
line[line.length]=Link(box[21][0],box[20][0]);
box[21][1]=Textbox_Option(x(4),y(yLevel),"除此之外");
line[line.length]=Link(box[21][1],box[20][0]);
//----------
box[22]=new Array();
yLevel+=2;
box[22][0]=Textbox_Quit(x(2),y(yLevel),"风子伪女友剧情");
box[22][0].addClick(function(){gotopage(38,"p38_retFAKEGF")});
line[line.length]=Link(box[22][0],box[21][0]);
//----------
box[23]=new Array();
yLevel+=1;
box[23][0]=Textbox_Selection(x(6),y(yLevel),"恶搞春原");
line[line.length]=Link(box[23][0],box[21][1]);
line[line.length]=Link(box[23][0],box[19][3]);
//----------
box[24]=new Array();
yLevel+=3;
box[24][0]=Textbox_Option(x(4),y(yLevel),"我来假扮");
line[line.length]=Link(box[24][0],box[23][0]);
box[24][1]=Textbox_Option(x(6),y(yLevel),"除此之外");
line[line.length]=Link(box[24][1],box[23][0]);
//----------
box[25]=new Array();
yLevel+=4;
box[25][0]=Textbox_Option(x(3),y(yLevel),"伪女友事件");
box[25][0].addClick(function(){gotolink("p39_FAKEGF")});
line[line.length]=Link(box[25][0],Point(linx(6),liny(-1)),box[24][0]);
line[line.length]=Link(box[25][0],box[24][1]);
line[line.length]=Link(box[25][0],box[19][0]);
line[line.length]=Link(Point(linx(3),liny(1)),Point(linx(3),liny(1)));

hdft["footer"]=Footer(liny(2),39);