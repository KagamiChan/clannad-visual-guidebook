// CVG HTML Data Page2 Done By Shakugan_No_Kaluote 2008.4.11
hdft["header"]=Header("public","公共路线","Public Route","4月15日","April 15th");

var yLevel=0;

//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(3.5),y(yLevel),"4月15日","top");
//----------
box[1]=new Array();
yLevel+=2;
CmtSummery="早晨，心情不爽的朋也对前来发通知并作善意提醒的班长藤林椋说了过分的话……";
CmtSelect="选择[道歉]，则进入藤林姐妹的线路，但17日逃课后不会触发一之濑琴美的剧情而无法继续琴美线。因此，攻略琴美线时须选择[无视]。";
CmtCaution="在CLANNAD中，选择分支每个选项都会对日后剧情的内容产生不同的影响，但不一定都改变剧情的走向。";
CmtOption="-无视";
CmtEvents="00100000";
CmtEvntIru="椋成为3对3篮球赛候选";
box[1][0]=Textbox_Selection_C(x(3.5),y(yLevel),"面对泪水打转的椋","1",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"面对泪水打转的椋",0);
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Option(x(2.5),y(yLevel),"道歉","l|杏|椋|-琴美");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Option(x(4.5),y(yLevel),"无视","r|杏|椋|-琴美");
line[line.length]=Link(box[2][1],box[1][0]);
//----------
box[3]=new Array();
yLevel+=3;
CmtSummery="无聊的学习生活仍在继续，下一节英语语法课，朋也决定是否逃课来打发时间。";
CmtSelect="选择[逃课]，则15日顺利进入一之濑琴美的剧情；若选择[认认真真上课]，则16日还有最后一次认识琴美的机会。15日逃课后，16日的机会就会消失，简而言之，两次机会您只能把握一次。若在之前的分支{面对泪水打转的椋}选择[道歉]，17日即强制退出琴美线。";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[3][0]=Textbox_Selection_C(x(3.5),y(yLevel),"上午、英语语法课","2",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"上午、英语语法课",0);
line[line.length]=Link(box[3][0],box[2][0]);
line[line.length]=Link(box[3][0],box[2][1]);
//----------
box[4]=new Array();
yLevel+=3;
box[4][0]=Textbox_Option(x(2.5),y(yLevel),"逃课","l|琴美");
line[line.length]=Link(box[4][0],box[3][0]);
box[4][1]=Textbox_Option(x(4.5),y(yLevel),"认认真真上课");
line[line.length]=Link(box[4][1],box[3][0]);
//----------
box[5]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="琴美线是CLANNAD中唯一有好感度系统的线路。请注意不要让好感度过低，否则后续剧情会增加一些可能导致BAD ENDING的选择分支。每次选择了正确的选项之后都能使好感度上升1点。";
CmtOption="-吃";
CmtEvents="00000100";
CmtEvntIru="琴美好感度上升1点";
box[5][0]=Textbox_Selection_C(x(2.5),y(yLevel),"被奇怪的女孩邀请吃便当","3",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"图书馆，被奇怪的女孩邀请吃便当",0);
line[line.length]=Link(box[5][0],box[4][0]);
//----------
box[6]=new Array();
yLevel+=3;
box[6][0]=Textbox_Option(x(1.5),y(yLevel),"吃");
line[line.length]=Link(box[6][0],box[5][0]);
box[6][1]=Textbox_Option(x(3.5),y(yLevel),"不吃");
line[line.length]=Link(box[6][1],box[5][0]);
//----------
box[7]=new Array();
yLevel+=4;
CmtSummery="午休时间，朋也在走廊上，看到庭院中独自一人坐着的少女。没错，就是连续两天在坡道上遇见的那个女孩。孤单的她好像并没有朋友的陪伴……";
CmtSelect="选择[到庭院去]并且接下来的分支选择[再继续谈话]，则进入古河渚和伊吹风子的线路，同时这又是琴美线的必选项和能够达成智代线GOOD ENDING的必要前提。";
CmtCaution="CLANNAD中，渚线和风子线在公共剧情中重叠部分相对各自与其它线路之间要多很多。它们是关系比较紧密的两条线。除此之外，还有藤林姐妹线和柊胜平线；坂上智代线和相乐美佐枝线。";
CmtOption="+到庭院去|-再继续谈话";
CmtEvents="11010000";
CmtEvntIru="渚有条件参与64HIT、有纪宁的咒语、体育仓库事件和伪女友事件；秋生有条件参与体育仓库事件。";
box[7][0]=Textbox_Selection_C(x(3.5),y(yLevel),"中午，庭院中的少女","4",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"庭院中孤单的少女",0);
line[line.length]=Link(box[7][0],Point(linx(2.5),liny(-1)),box[6][0]);
line[line.length]=Link(box[7][0],Point(linx(2.5),liny(-1)),box[6][1]);
line[line.length]=Link(box[7][0],box[4][1]);
//----------
box[8]=new Array();
yLevel+=3;
box[8][0]=Textbox_Option(x(2.5),y(yLevel),"到庭院去","l|渚|风子|琴美|智代");
line[line.length]=Link(box[8][0],box[7][0]);
box[8][1]=Textbox_Option(x(4.5),y(yLevel),"不去管她","r|智代|渚|风子|琴美");
line[line.length]=Link(box[8][1],box[7][0]);
//----------
box[9]=new Array();
yLevel+=2;
box[9][0]=Textbox_Selection(x(2.5),y(yLevel),"庭院中与少女的谈话");
line[line.length]=Link(box[9][0],box[8][0]);
//----------
box[10]=new Array();
yLevel+=3;
box[10][0]=Textbox_Option(x(1.5),y(yLevel),"再继续谈话","l|渚|风子|琴美|智代");
line[line.length]=Link(box[10][0],box[9][0]);
box[10][1]=Textbox_Option(x(3.5),y(yLevel),"是时候离开了","r|智代|渚|风子|琴美");
line[line.length]=Link(box[10][1],box[9][0]);
//----------
box[11]=new Array();
yLevel+=4;
CmtSummery="下午，校门口传来嘈杂声，是工业学校的学生的上门挑衅。此时，一位银发女生在众人的注视下出场了，并在片刻间平息了骚动。好事的春原决定会她一会……";
CmtSelect="选择[继续看下去]并在接下来的分支选择[我也对此颇感兴趣]，则进入坂上智代线。若在之前的分支{中午、庭院中的少女}选择[不去管她]，之后将无法达成智代线GOOD ENDING。";
CmtCaution="";
CmtOption="+继续看下去|-我对此也颇感兴趣";
CmtEvents="01110011";
CmtEvntIru="智代有条件参与有纪宁的咒语、体育仓库事件、3对3篮球赛、伪女友事件和毕业典礼；业余棒球进入必选";
box[11][0]=Textbox_Selection_C(x(3.5),y(yLevel),"校门附近的骚动","5",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"校门前的骚动，平息骚动的神秘女生",0);
line[line.length]=Link(box[11][0],Point(linx(2.5),liny(-1)),box[10][0]);
line[line.length]=Link(box[11][0],Point(linx(2.5),liny(-1)),box[10][1]);
line[line.length]=Link(box[11][0],box[8][1]);
//----------
box[12]=new Array();
yLevel+=3;
box[12][0]=Textbox_Option(x(2.5),y(yLevel),"继续看下去","l|智代");
line[line.length]=Link(box[12][0],box[11][0]);
box[12][1]=Textbox_Option(x(4.5),y(yLevel),"出去避难","r|智代");
line[line.length]=Link(box[12][1],box[11][0]);
//----------
box[13]=new Array();
yLevel+=2;
box[13][0]=Textbox_Selection(x(2.5),y(yLevel),"平息骚动的神秘女生");
line[line.length]=Link(box[13][0],box[12][0]);
//----------
box[14]=new Array();
yLevel+=3;
box[14][0]=Textbox_Option(x(1.5),y(yLevel),"我对此也颇感兴趣","l|智代");
line[line.length]=Link(box[14][0],box[13][0]);
box[14][1]=Textbox_Option(x(3.5),y(yLevel),"我对此毫无兴趣","r|智代");
line[line.length]=Link(box[14][1],box[13][0]);
//----------
box[15]=new Array();
yLevel+=4;
CmtSummery="";
CmtSelect="";
CmtCaution="这是游戏中第一次遇到条件选择分支的地方。大多数情况下，我们以是否进入某条线路作为判断条件。CLANNAD中，这种情况是很普遍的。但在某些情况下，只能用特定日期的特定选择来表述。您在攻略时，应当注意每个选择项旁所给出的角标提示，并作适当记录，来确定目前处于哪些角色的线路之中以防止出错。";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[15][0]=Textbox_Condition_C(x(3.5),y(yLevel),"中午，庭院中与少女的谈话","6",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"条件选择分支",0);
line[line.length]=Link(box[15][0],Point(linx(2.5),liny(-1)),box[14][0]);
line[line.length]=Link(box[15][0],Point(linx(2.5),liny(-1)),box[14][1]);
line[line.length]=Link(box[15][0],box[12][1]);
//----------
box[16]=new Array();
yLevel+=3;
box[16][0]=Textbox_Selection(x(2.5),y(yLevel),"再继续谈话");
line[line.length]=Link(box[16][0],box[15][0]);
box[16][1]=Textbox_Selection(x(4.5),y(yLevel),"是时候离开了");
line[line.length]=Link(box[16][1],box[15][0]);
//----------
box[17]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="";
CmtOption="-在意";
CmtEvents="01100001";
CmtEvntIru="渚参与64HIT、有纪宁的咒语，有条件参与体育仓库事件、伪女友事件；秋生参与体育仓库事件";
box[17][0]=Textbox_Selection_C(x(2.5),y(yLevel),"回想起中午庭院中的女生","7",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"回想起中午庭院中的女生",0);
line[line.length]=Link(box[17][0],box[16][0]);
//----------
box[18]=new Array();
yLevel+=3;
box[18][0]=Textbox_Option(x(1.5),y(yLevel),"在意","l|渚|风子");
line[line.length]=Link(box[18][0],box[17][0]);
box[18][1]=Textbox_Option(x(3.5),y(yLevel),"不在意","r|渚|风子");
line[line.length]=Link(box[18][1],box[17][0]);
//----------
box[19]=new Array();
yLevel+=4;
CmtSummery="放学后照例来到春原宿舍楼的朋也，在走廊上遇到了正追赶捣乱学生的宿舍管理员——相乐美佐枝。";
CmtSelect="选择[向她搭话]，则进入相乐美佐枝线。";
CmtCaution="";
CmtOption="-向她搭话";
CmtEvents="01100001";
CmtEvntIru="美佐枝有条件参与有纪宁的咒语、3对3篮球赛和毕业典礼。";
box[19][0]=Textbox_Selection_C(x(3.5),y(yLevel),"宿舍走廊遇见美佐枝","8",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"宿舍走廊遇见美佐枝",-YSCALE*2);
line[line.length]=Link(box[19][0],Point(linx(2.5),liny(-1)),box[18][0]);
line[line.length]=Link(box[19][0],Point(linx(2.5),liny(-1)),box[18][1]);
line[line.length]=Link(box[19][0],box[16][1]);
//----------
box[20]=new Array();
yLevel+=3;
box[20][0]=Textbox_Option(x(2.5),y(yLevel),"向她搭话","l|美佐枝");
line[line.length]=Link(box[20][0],box[19][0]);
box[20][1]=Textbox_Option(x(4.5),y(yLevel),"不去管她","r|美佐枝");
line[line.length]=Link(box[20][1],box[19][0]);
//----------
box[21]=new Array();
yLevel+=3;
CmtSummery="";
CmtSelect="";
CmtCaution="在CLANNAD中，幻想世界是一部分特殊的剧情。幻想世界体现了CLANNAD的背景世界观，是有别于游戏中现实世界的另一个世界，且与渚线路有紧密的联系。幻想世界全篇共十二章，其中在学园篇最多出现十章，后两章将在AFTER STORY中，其作用将在AFTER STORY时得到体现。只有在攻略渚线时，您才能看到完整的幻想世界学园篇部分。幻想世界中没有选择分支。";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[21][0]=Textbox_Option_C(x(3.5),y(yLevel),"幻想世界（一）","9",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"幻想世界",-YSCALE*2);
line[line.length]=Link(box[21][0],box[20][0]);
line[line.length]=Link(box[21][0],box[20][1]);
//----------
box[22]=new Array();
yLevel+=2;
box[22][0]=Textbox_Date(x(3.5),y(yLevel),"4月16日","bottom");
line[line.length]=Link(box[22][0],box[21][0]);
box[22][0].addTitle("点击转到第3页");
box[22][0].addClick(function(){gotopage(3)});

hdft["footer"]=Footer(liny(3),2);