// CVG HTML Data Page7 Done By Ligueston 2008.4.2
hdft["header"]=Header("public","公共路线","Public Route","4月18日（一）","April 18th~Part 1");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(3),y(yLevel),"4月18日","top");
//----------
box[1]=new Array();
yLevel+=2;
box[1][0]=Textbox_Condition(x(3),y(yLevel),"14日，春原挑战智代（四回目）");
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Selection(x(2),y(yLevel),"跟着他去");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Selection(x(4),y(yLevel),"不去管他","r|+未触发");
line[line.length]=Link(box[2][1],box[1][0]);
//----------
box[3]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="";
CmtOption="-接受";
CmtEvents="01000000";
CmtEvntIru="智代有条件参与有纪宁的咒语、体育仓库事件";
box[3][0]=Textbox_Selection_C(x(2),y(yLevel),"春原挑战智代（五回目）","1",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"春原挑战智代（五回目）",0);
line[line.length]=Link(box[3][0],box[2][0]);
//----------
box[4]=new Array();
yLevel+=3;
box[4][0]=Textbox_Option(x(1),y(yLevel),"接受","l|智代");
line[line.length]=Link(box[4][0],box[3][0]);
box[4][1]=Textbox_Option(x(3),y(yLevel),"拒绝","r|智代");
line[line.length]=Link(box[4][1],box[3][0]);
//----------
box[5]=new Array();
yLevel+=2;
CmtSummery="春原被智代踢飞在空中，并向朋也飞来……";
CmtSelect="选择[踢回去]，发动智代的连击。";
CmtCaution="随着剧情深入，发动智代连击的机会会增加，连击次数也会增加。若连击次数超过以往最大值就会显示NEW RECORD。重新开始游戏时，纪录仍然保存。";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[5][0]=Textbox_Selection_C(x(1),y(yLevel),"被踢飞过来的春原","2",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"被踢飞过来的春原",0);
line[line.length]=Link(box[5][0],box[4][0]);
//----------
box[6]=new Array();
yLevel+=3;
box[6][0]=Textbox_Option(x(0),y(yLevel),"踢回去");
line[line.length]=Link(box[6][0],box[5][0]);
box[6][1]=Textbox_Option(x(2),y(yLevel),"躲开");
line[line.length]=Link(box[6][1],box[5][0]);
//----------
box[7]=new Array();
yLevel+=5;
box[7][0]=Textbox_Condition(x(3),y(yLevel),"15日，面对泪水打转的椋");
line[line.length]=Link(box[7][0],Point(linx(2),liny(-1)),Point(linx(1),liny(-2)),box[6][0]);
line[line.length]=Link(box[7][0],Point(linx(2),liny(-1)),Point(linx(1),liny(-2)),box[6][1]);
line[line.length]=Link(box[7][0],Point(linx(2),liny(-1)),box[4][1]);
line[line.length]=Link(box[7][0],box[2][1]);
//----------
box[8]=new Array();
yLevel+=3;
box[8][0]=Textbox_Selection(x(1),y(yLevel),"道歉");
line[line.length]=Link(box[8][0],box[7][0]);
box[8][1]=Textbox_Selection(x(5),y(yLevel),"无视");
line[line.length]=Link(box[8][1],box[7][0]);
//----------
box[9]=new Array();
yLevel+=2;
box[9][0]=Textbox_Selection(x(1),y(yLevel),"椋的占卜道具");
line[line.length]=Link(box[9][0],box[8][0]);
CmtSummery="椋又被女生们围住要求占卜，而杏在谈到椋的占卜时却表现得有些奇怪，而且要求朋也和春原去试试。";
CmtSelect="选择[胸脯占卜]或者[自己去占卜]，在16日的分支{古河重新创立话剧社}中选择让[她一个人做]，并且如果20日没有进入美佐枝线，当日就有可能触发隐藏剧情。";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[9][1]=Textbox_Selection_C(x(5),y(yLevel),"异常灵验的占卜","3",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"椋的占卜道具 / 异常灵验的占卜",0);
line[line.length]=Link(box[9][1],box[8][1]);
//----------
box[10]=new Array();
yLevel+=3;
box[10][0]=Textbox_Option(x(0),y(yLevel),"胸脯占卜");
line[line.length]=Link(box[10][0],box[9][0]);
box[10][1]=Textbox_Option(x(2),y(yLevel),"扑克占卜");
line[line.length]=Link(box[10][1],box[9][0]);
box[10][2]=Textbox_Option(x(4),y(yLevel),"自己去占卜");
line[line.length]=Link(box[10][2],box[9][1]);
box[10][3]=Textbox_Option(x(6),y(yLevel),"让春原去占卜");
line[line.length]=Link(box[10][3],box[9][1]);
//----------
box[11]=new Array();
yLevel+=4;
box[11][0]=Textbox_Condition(x(3),y(yLevel),"17日，和风子说过话");
line[line.length]=Link(box[11][0],Point(linx(1),liny(-1)),box[10][0]);
line[line.length]=Link(box[11][0],Point(linx(1),liny(-1)),box[10][1]);
line[line.length]=Link(box[11][0],Point(linx(5),liny(-1)),box[10][2]);
line[line.length]=Link(box[11][0],Point(linx(5),liny(-1)),box[10][3]);
//----------
box[12]=new Array();
yLevel+=3;
box[12][0]=Textbox_Selection(x(2),y(yLevel),"是");
line[line.length]=Link(box[12][0],box[11][0]);
box[12][1]=Textbox_Selection(x(4),y(yLevel),"否");
line[line.length]=Link(box[12][1],box[11][0]);
//----------
box[13]=new Array();
yLevel+=3;
box[13][0]=Textbox_Selection(x(2),y(yLevel),"走廊中与风子擦身而过");
line[line.length]=Link(box[13][0],box[12][0]);
//----------
box[14]=new Array();
yLevel+=3;
box[14][0]=Textbox_Option(x(1),y(yLevel),"抓住她");
line[line.length]=Link(box[14][0],box[13][0]);
box[14][1]=Textbox_Option(x(3),y(yLevel),"放走她");
line[line.length]=Link(box[14][1],box[13][0]);
//----------
box[15]=new Array();
yLevel+=4;
CmtSummery="";
CmtSelect="此处{琴美线进入}即15日，在分支{面对泪水打转的椋}选择[无视]，分支{庭院中与少女的谈话}选择[再继续谈话]；17日，在分支{走廊上遇到琴美}选择[跟着她去]。没有选择相应选项或者没有触发任一分支的情况均属于否。<br>{17日、和风子说过话}包括风子线已进入时，在分支{隔壁教室里的陌生女孩}选择[向她搭话]，以及风子线未进入时，在分支空教室里的陌生女孩选择向她搭话。只要触发其一，就满足与风子说过话的条件。";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[15][0]=Textbox_Condition_C(x(4),y(yLevel),"琴美线进入或17日，和风子说过话","4",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"条件选择分支",0);
line[line.length]=Link(box[15][0],Point(linx(2),liny(-1)),box[14][0]);
line[line.length]=Link(box[15][0],Point(linx(2),liny(-1)),box[14][1]);
line[line.length]=Link(box[15][0],box[12][1]);
//----------
box[16]=new Array();
yLevel+=3;
box[16][0]=Textbox_Selection(x(2),y(yLevel),"是");
line[line.length]=Link(box[16][0],box[15][0]);
box[16][1]=Textbox_Selection(x(6),y(yLevel),"否");
line[line.length]=Link(box[16][1],box[15][0]);
//----------
box[17]=new Array();
yLevel+=2;
CmtSummery="春原不知去哪儿了，朋也为了逃避老师的责问而跑出了教室，可马上打消了寻找的念头。";
CmtSelect="此处分支选项的个数及内容根据之前的剧情选择有所变化：若您已进入琴美线，则会出现[图书馆]、[回教室去]两个选项；若您17日向风子搭话，则会出现[空教室]、[回教室去]两个选项；同时满足上述条件，则出现[图书馆]、[空教室]、[回教室去]三个选项（若上述情况都不满足，不会进入此分支，请注意前一次条件分支的判断）。<br>选择[图书馆]则继续琴美线、退出风子线并且不会认识风子，否则退出琴美线；选择[空教室]并在之后的分支选择[再看一会]就能认识风子；选择[回教室去]则同时退出琴美线和风子线。";
CmtCaution="";
CmtOption="-空教室";
CmtEvents="11111010";
CmtEvntIru="风子有条件参与64HIT、有纪宁的咒语、体育仓库事件、3对3篮球赛、伪女友事件和业余棒球；风子大师进入必选";
box[17][0]=Textbox_Selection_C(x(2),y(yLevel),"寻找春原","5",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"寻找春原",0);
line[line.length]=Link(box[17][0],box[16][0]);
//----------
box[18]=new Array();
yLevel+=3;
box[18][0]=Textbox_Option(x(0),y(yLevel),"图书馆","l|琴美|-风子");
line[line.length]=Link(box[18][0],box[17][0]);
box[18][1]=Textbox_Option(x(2),y(yLevel),"空教室","l|风子|-琴美");
line[line.length]=Link(box[18][1],box[17][0]);
box[18][2]=Textbox_Option(x(4),y(yLevel),"回教室去","r|风子|琴美");
line[line.length]=Link(box[18][2],box[17][0]);
//----------
box[19]=new Array();
yLevel+=2;
box[19][0]=Textbox_Block(x(0),y(yLevel),"A");
box[19][0].addLink("p7_retA");
box[19][0].addClick(function(){gotopage(9,"p9_A")});
line[line.length]=Link(box[19][0],box[18][0]);
CmtSummery="朋也担心拿回小刀的风子再次割破自己的手，决定到空教室观察动静。";
CmtSelect="选择再看一会就能认识风子，若已进入风子线（即17日在分支{隔壁教室里的陌生女孩}选择[向她搭话]）则能继续；选择离开则退出。";
CmtCaution="";
CmtOption="-再看一会儿";
CmtEvents="11111010";
CmtEvntIru="开始风子大师剧情；风子成为3对3篮球赛和业余棒球成员候选，参与64HIT、有纪宁的咒语、体育仓库事件和伪女友事件";
box[19][1]=Textbox_Selection_C(x(2),y(yLevel),"独自雕刻的风子","6",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"独自雕刻的风子",0);
line[line.length]=Link(box[19][1],box[18][1]);
//----------
box[20]=new Array();
yLevel+=3;
box[20][0]=Textbox_Option(x(1),y(yLevel),"再看一会儿");
line[line.length]=Link(box[20][0],box[19][1]);
box[20][1]=Textbox_Option(x(3),y(yLevel),"离开");
line[line.length]=Link(box[20][1],box[19][1]);
//----------
box[21]=new Array();
yLevel+=5;
box[21][0]=Textbox_Block(x(3),y(yLevel),"B");
box[19][0].addLink("p7_retB");
box[21][0].addClick(function(){gotopage(9,"p9_B")});
line[line.length]=Link(box[21][0],Point(linx(3),liny(-1)),Point(linx(2),liny(-2)),box[20][0]);
line[line.length]=Link(box[21][0],Point(linx(3),liny(-1)),Point(linx(2),liny(-2)),box[20][1]);
line[line.length]=Link(box[21][0],Point(linx(3),liny(-1)),box[18][2]);
line[line.length]=Link(box[21][0],box[16][1]);

line[line.length]=Link(Point(linx(3),liny(2)),box[21][0]);
line[line.length]=Link(Point(linx(3),liny(2)),Point(linx(0),liny(2)),box[19][0]);
line[line.length]=Link(Point(linx(3),liny(2)),Point(linx(3),liny(2)));
line[line.length-1].addTitle("点击转到第8页");
line[line.length-1].addClick(function(){gotopage(8)});

hdft["footer"]=Footer(liny(3),7);