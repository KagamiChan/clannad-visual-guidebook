// CVG HTML Data Page12 Done By Shakugan_No_Kaluote 2008.4.11
hdft["header"]=Header("public","公共路线","Public Route","4月20日","April 20th");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(2.5),y(yLevel),"4月20日","top");
//----------
box[1]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="此处{渚线进入}即16日，在分支{古河重新创立话剧社}选择[帮忙]；18日，在分支{琴美的邀请与古河的约定}选择[今天还是和以前一样与渚一起吃]或者未触发这个分支。没有选择相应选项或者没有触发前一分支的情况均属于否；前一分支选择正确但没有触发后一分支的情况属于是。<br>{风子线进入}即16日，在分支{古河重新创立话剧社}选择[帮忙]；18日，在分支{独自雕刻的风子}选择[再看一会儿]。两次选择都正确才满足风子线进入的条件。";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[1][0]=Textbox_Condition_C(x(2.5),y(yLevel),"渚线或者风子线进入","1",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"渚线或者风子线进入",0);
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Selection(x(1),y(yLevel),"是");
line[line.length]=Link(box[2][0],Point(linx(2),liny(-1)));
box[2][1]=Textbox_Selection(x(4),y(yLevel),"否");
line[line.length]=Link(box[2][1],Point(linx(2),liny(-1)));
line[line.length]=Link(Point(linx(2.5),liny(-1)),box[1][0]);
//----------
box[3]=new Array();
yLevel+=2;
box[3][0]=Textbox_Selection(x(1),y(yLevel),"关心古河的身体");
line[line.length]=Link(box[3][0],box[2][0]);
//----------
box[4]=new Array();
yLevel+=3;
box[4][0]=Textbox_Option(x(0),y(yLevel),"早苗呢？");
line[line.length]=Link(box[4][0],box[3][0]);
box[4][1]=Textbox_Option(x(2),y(yLevel),"古河的身体情况怎么样？");
line[line.length]=Link(box[4][1],box[3][0]);
CmtSummery="";
CmtSelect="{18日，和琴美一起吃午饭}包括18日，在分支{琴美的邀请与古河的约定}选择[在这里和琴美一起吃]；或者虽然没有出现这个分支，但是发生了和琴美一起吃午饭的剧情内容（18日渚、风子线未进入，即16日在分支{古河重新创立话剧社}选择让[她一个人做]或者未触发这个分支的话，在分支{寻找春原和朋也内心的思索}分别选择[图书馆]和[不能就这样不理她]，就会发生和琴美一起吃午饭的剧情内容）。不符合以上条件的情况均属于否。";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[4][2]=Textbox_Condition_C(x(4),y(yLevel),"18日，和琴美一起吃午饭","2",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"18日，和琴美一起吃午饭",0);
line[line.length]=Link(box[4][2],box[2][1]);
//----------
box[5]=new Array();
yLevel+=3;
box[5][0]=Textbox_Selection(x(3),y(yLevel),"否");
line[line.length]=Link(box[5][0],box[4][2]);
box[5][1]=Textbox_Selection(x(5),y(yLevel),"是");
line[line.length]=Link(box[5][1],box[4][2]);
//----------
box[6]=new Array();
yLevel+=2;
CmtSummery="朋也和琴美在学校中相遇并来到了图书馆，看着打扫卫生的琴美，朋也在思考着。";
CmtSelect="选择[可以待在这里吗]，完全进入琴美线。一之濑琴美角色剧情攻略请参见P40～P42。";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[6][0]=Textbox_Selection_C(x(5),y(yLevel),"周末、图书馆中的琴美","3",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"周末、图书馆中的琴美",0);
line[line.length]=Link(box[6][0],box[5][1]);
//----------
box[7]=new Array();
yLevel+=3;
CmtSummery="朋也在找春原的路上被一个不认识的人叫住了，他似乎有很重要的事……";
CmtSelect="选择[跟他过去]，并在之后的分支中分别选择[再看一会儿]、[帮忙]，则可以进入柊胜平线，同时退出美佐枝线（若已进入，即18日分支{宿舍走廊遇见美佐枝}选择[向她搭话]）；如果不这样选择，则继续美佐枝线（若已进入），并且无法再进入柊胜平线。<br>攻略渚线时，在第三个分支{芳野寻求帮手中}选择[帮忙]，则进入AFTER STORY后，才有可能得到芳野的“光”。";
CmtCaution="";
CmtOption="+跟他过去|+再看一会儿|-帮忙";
CmtEvents="00100011";
CmtEvntIru="芳野成为3对3篮球和业余棒球成员候选；公子有条件参与毕业典礼";
box[7][0]=Textbox_Selection_C(x(1),y(yLevel),"去宿舍的路上、被陌生男子叫住","4",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"去宿舍的路上、被陌生男子叫住",0);
line[line.length]=Link(box[7][0],Point(linx(1),liny(-2)),box[5][0]);
line[line.length]=Link(box[7][0],Point(linx(1),liny(-5)),box[4][0]);
line[line.length]=Link(box[7][0],Point(linx(1),liny(-5)),box[4][1]);
box[7][1]=Textbox_Option(x(4),y(yLevel),"离开图书馆","l|智代|美佐枝|芽衣");
line[line.length]=Link(box[7][1],box[6][0]);
box[7][2]=Textbox_Option(x(6),y(yLevel),"问可以待在这里吗","r|智代|美佐枝|芽衣");
line[line.length]=Link(box[7][2],box[6][0]);
//----------
box[8]=new Array();
yLevel+=2;
box[8][0]=Textbox_Condition(x(6),y(yLevel),"琴美线完全进入","r|-琴美|有纪宁");
box[8][0].addTitle("点击转到第40页");
box[8][0].addClick(function(){gotopage(40)});
line[line.length]=Link(box[8][0],box[7][2]);
//----------
box[9]=new Array();
yLevel+=1;
box[9][0]=Textbox_Option(x(1),y(yLevel),"跟他过去","l|胜平");
line[line.length]=Link(box[9][0],box[7][0]);
box[9][1]=Textbox_Option(x(3),y(yLevel),"不理他","r|胜平");
line[line.length]=Link(box[9][1],box[7][0]);
//----------
box[10]=new Array();
yLevel+=2;
box[10][0]=Textbox_Selection(x(1),y(yLevel),"两人的争吵");
line[line.length]=Link(box[10][0],box[9][0]);
//----------
box[11]=new Array();
yLevel+=3;
box[11][0]=Textbox_Option(x(1),y(yLevel),"再看一会儿","l|胜平");
line[line.length]=Link(box[11][0],box[10][0]);
box[11][1]=Textbox_Option(x(3),y(yLevel),"离开","r|胜平");
line[line.length]=Link(box[11][1],box[10][0]);
//----------
box[12]=new Array();
yLevel+=2;
box[12][0]=Textbox_Selection(x(1),y(yLevel),"芳野寻求帮手");
line[line.length]=Link(box[12][0],box[11][0]);
//----------
box[13]=new Array();
yLevel+=3;
box[13][0]=Textbox_Option(x(1),y(yLevel),"帮忙","l|胜平|-美佐枝");
line[line.length]=Link(box[13][0],box[12][0]);
box[13][1]=Textbox_Option(x(3),y(yLevel),"拒绝","l|胜平|-美佐枝");
line[line.length]=Link(box[13][1],box[12][0]);
//----------
box[14]=new Array();
yLevel+=3;
box[14][0]=Textbox_Block(x(4),y(yLevel),"A");
box[14][0].addLink("p12_retA");
box[14][0].addClick(function(){gotolink("p12_A")});
line[line.length]=Link(box[14][0],box[13][1]);
line[line.length]=Link(box[14][0],box[7][1]);
line[line.length]=Link(box[14][0],Point(linx(4),liny(-10)),box[9][1]);
line[line.length]=Link(box[14][0],Point(linx(4),liny(-5)),box[11][1]);
//----------
box[15]=new Array();
yLevel+=3;
box[15][0]=Textbox_Date(x(2.5),y(yLevel),"4月21日","bottom");
line[line.length]=Link(Point(linx(1),liny(-1)),box[13][0]);
line[line.length]=Link(Point(linx(1),liny(-1)),Point(linx(4),liny(-1)),box[14][0]);
line[line.length]=Link(box[15][0],Point(linx(2.5),liny(-1)));
box[15][0].addTitle("点击转到13页");
box[15][0].addClick(function(){gotopage(13)});
//----------
box[16]=new Array();
yLevel+=5;
box[16][0]=Textbox_Block(x(0),y(yLevel),"A");
box[16][0].addLink("p12_A");
box[16][0].addClick(function(){gotolink("p12_retA")});
box[16][1]=Textbox_Condition(x(3),y(yLevel),"18日，宿舍走廊遇见美佐枝");
line[line.length]=Link(Point(linx(3),liny(0)-LINEBASEHEIGHT/2),Point(linx(3),liny(0)-LINEBASEHEIGHT/2));
board[board.length]=Board(liny(0),liny(20));
//----------
box[17]=new Array();
yLevel+=3;
box[17][0]=Textbox_Selection(x(1),y(yLevel),"向她搭话");
line[line.length]=Link(box[17][0],box[16][1]);
box[17][1]=Textbox_Selection(x(5),y(yLevel),"目送她离去","r|+未触发");
line[line.length]=Link(box[17][1],box[16][1]);
//----------
box[18]=new Array();
yLevel+=2;
CmtSummery="帮忙找回猫的朋也被美佐枝邀请到她的房间做客，现在朋也将离开这里……";
CmtSelect="选择[还可以再来吗]，如果21日中午之前没有进入或者退出了渚线或风子线并且退出智代线或有纪宁线，那么您已经完全进入美佐枝线，但21日白天仍处在公共线路，晚上开始美佐枝角色剧情。如果21日下午仍然处在智代线或者有纪宁线中，则都会出现一个分支，选择正确同样可以进入美佐枝线；如果处在渚、风子线中（具体参见22日公共线路攻略），意味着失去了进入美佐枝线的机会。其角色剧情攻略请参见P26。";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[18][0]=Textbox_Selection_C(x(1),y(yLevel),"离开美佐枝的房间","5",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"离开美佐枝的房间",0);
line[line.length]=Link(box[18][0],box[17][0]);
CmtSummery="";
CmtSelect="{符合心跳☆高中触发条件}包括16日，在分支{古河重新创立话剧社}中选择[让她一个人做]；18日，在分支{椋的占卜道具}选择[胸脯占卜]或者在分支{异常灵验的占卜}选择[自己去占卜]。没有选择相应选项或者没有触发前一分支的情况均属于否。";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[18][1]=Textbox_Condition_C(x(5),y(yLevel),"符合心跳☆高中触发条件","6",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"符合心跳☆高中触发条件",0);
line[line.length]=Link(box[18][1],box[17][1]);
//----------
box[19]=new Array();
yLevel+=3;
box[19][0]=Textbox_Option(x(0),y(yLevel),"问她还可以再来吗","l|美佐枝");
line[line.length]=Link(box[19][0],box[18][0]);
box[19][1]=Textbox_Option(x(2),y(yLevel),"不会再来了","r|美佐枝");
line[line.length]=Link(box[19][1],box[18][0]);
box[19][2]=Textbox_Selection(x(4),y(yLevel),"是");
line[line.length]=Link(box[19][2],box[18][1]);
box[19][3]=Textbox_Selection(x(6),y(yLevel),"否");
line[line.length]=Link(box[19][3],box[18][1]);
//----------
box[20]=new Array();
yLevel+=2;
CmtSummery="清闲的周末，朋也惯例地来到了春原的房间，以外地发现了一本使春原废寝忘食的书。";
CmtSelect="选择[玩玩看]，进入隐藏剧情心跳☆高中。隐藏剧情触发与否以及其中的任何分支选择结果均不影响之后剧情走向。";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[20][0]=Textbox_Selection_C(x(4),y(yLevel),"春原的娱乐书","7",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"春原的娱乐书",0);
line[line.length]=Link(box[20][0],box[19][2]);
//----------
box[21]=new Array();
yLevel+=3;
box[21][0]=Textbox_Option(x(3),y(yLevel),"玩玩看");
line[line.length]=Link(box[21][0],box[20][0]);
box[21][1]=Textbox_Option(x(5),y(yLevel),"找别的漫画看");
line[line.length]=Link(box[21][1],box[20][0]);
//----------
box[22]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="公共线路中期隐藏剧情。发生于20日上午，触发条件与藤林杏、椋线18日及之前选择有关，所有选项均不影响剧情发展。心跳☆高中相关攻略请参见P24。";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[22][0]=Textbox_Option_C(x(3),y(yLevel),"心跳☆高中","8",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"心跳☆高中",0);
box[22][0].addLink("p12_retXTGZ");
box[22][0].addClick(function(){gotopage(24,"p24_XTGZ")});
line[line.length]=Link(box[22][0],box[21][0]);

yLevel+=4;
line[line.length]=Link(Point(linx(5),liny(0)),Point(linx(4),liny(-1)),box[22][0]);
line[line.length]=Link(Point(linx(5),liny(0)),Point(linx(4),liny(-1)),box[21][1]);
line[line.length]=Link(Point(linx(5),liny(0)),box[19][3]);
line[line.length]=Link(Point(linx(5),liny(0)),Point(linx(1),liny(0)),Point(linx(1),liny(-8)),box[19][0]);
line[line.length]=Link(Point(linx(5),liny(0)),Point(linx(1),liny(0)),Point(linx(1),liny(-8)),box[19][1]);
line[line.length]=Link(Point(linx(3),liny(0)),Point(linx(3),liny(0)));

hdft["footer"]=Footer(liny(3),12);
