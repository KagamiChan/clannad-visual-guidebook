// CVG HTML Data Page17 Done By Ligueston 2008.4.15
hdft["header"]=Header("public","公共路线","Public Route","4月22日（三）","April 22nd~Part 3");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Block(x(0),y(yLevel),"B");
box[0][0].addLink("p17_B");
box[0][0].addClick(function(){gotopage(15,"p15_retB")})
CmtSummery="";
CmtSelect="{18日或19日，在资料室认识有纪宁}包括18日，在分支{逃课选择睡觉的地方}选择[到那里去睡]，并且在接下来的分支{下课后，走进资料室的女孩}选择[再说几句话]；或者，18日在分支{逃课选择睡觉的地方}选择[还是回教室吧]或者未触发这个分支，并且在19日的分支{来到旧校舍后的去向（一）}选择[去资料室]，以及在接下来的分支{下课后，走进资料室的女孩}选择[再说几句话]。两种情况均满足认识有纪宁的条件，但只可能遇到其中一种。（同公共线路21日注释2{有纪宁线进入}的相关内容）";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[0][1]=Textbox_Condition_C(x(4),y(yLevel),"18日或19日，在资料室认识有纪宁","5",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"18日或19日，在资料室认识有纪宁",0);
line[line.length]=Link(Point(linx(4),liny(0)-LINEBASEHEIGHT/2),Point(linx(4),liny(0)-LINEBASEHEIGHT/2));
board[board.length]=Board(liny(0),liny(22));
//----------
box[1]=new Array();
yLevel+=3;
box[1][0]=Textbox_Selection(x(2.5),y(yLevel),"是");
line[line.length]=Link(box[1][0],Point(linx(3.5),liny(-1)));
box[1][1]=Textbox_Selection(x(5.5),y(yLevel),"否");
line[line.length]=Link(box[1][1],Point(linx(3.5),liny(-1)));
line[line.length]=Link(Point(linx(4),liny(-1)),box[0][1]);
//----------
box[2]=new Array();
yLevel+=2;
box[2][0]=Textbox_Condition(x(2.5),y(yLevel),"20日，芳野寻求帮手");
line[line.length]=Link(box[2][0],box[1][0]);
//----------
box[3]=new Array();
yLevel+=3;
box[3][0]=Textbox_Selection(x(2.5),y(yLevel),"拒绝","l|+未触发");
line[line.length]=Link(box[3][0],box[2][0]);
box[3][1]=Textbox_Selection(x(4.5),y(yLevel),"帮忙");
line[line.length]=Link(box[3][1],box[2][0]);
//----------
box[4]=new Array();
yLevel+=2;
CmtSummery="在午饭后，春原决定前去资料室见有纪宁，让朋也一起前往。";
CmtSelect="若20日，在分支{芳野寻求帮手}中选择了[拒绝]或者未触发这个分支，并且21日在分支{迟到后的午间}选择[赶去学生食堂]或者未触发这个分支，则昨日会有一段没有分支的有纪宁剧情。若不满足上述条件，那么昨日不发生有纪宁剧情，今日这段有分支的有纪宁剧情将被昨日的剧情所替代。";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[4][0]=Textbox_Selection_C(x(2.5),y(yLevel),"春原去见有纪宁，朋也陪同","6",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"春原去见有纪宁，朋也陪同",0);
line[line.length]=Link(box[4][0],box[3][0]);
//----------
box[5]=new Array();
yLevel+=3;
box[5][0]=Textbox_Option(x(2.5),y(yLevel),"去","l|有纪宁");
line[line.length]=Link(box[5][0],box[4][0]);
box[5][1]=Textbox_Option(x(4.5),y(yLevel),"不去","r|有纪宁");
line[line.length]=Link(box[5][1],box[4][0]);
//----------
box[6]=new Array();
yLevel+=2;
CmtSummery="有纪宁向春原推荐了条能够让女孩迷上自己的咒语，春原马上决定试一试，朋也帮他选择目标。";
CmtSelect="当且仅当认识智代时（即在16日分支{春原挑战智代（一回目）}选择[去]），选项[智代]才会出现，否则为[杏]、[椋]二项选择。";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[6][0]=Textbox_Selection_C(x(2.5),y(yLevel),"朋也帮忙选择施展咒语的目标","7",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"朋也帮忙选择施展咒语的目标",0);
line[line.length]=Link(box[6][0],box[5][0]);
//----------
box[7]=new Array();
yLevel+=3;
box[7][0]=Textbox_Option(x(0.5),y(yLevel),"智代");
line[line.length]=Link(box[7][0],box[6][0]);
box[7][1]=Textbox_Option(x(2.5),y(yLevel),"杏");
line[line.length]=Link(box[7][1],box[6][0]);
box[7][2]=Textbox_Option(x(4.5),y(yLevel),"椋");
line[line.length]=Link(box[7][2],box[6][0]);

line[line.length]=Link(Point(linx(2.5),liny(3)),box[7][0]);
line[line.length]=Link(Point(linx(2.5),liny(3)),box[7][1]);
line[line.length]=Link(Point(linx(2.5),liny(3)),box[7][2]);
line[line.length]=Link(Point(linx(2.5),liny(3)),Point(linx(5.5),liny(3)),Point(linx(5.5),liny(-2)),box[5][1]);
line[line.length]=Link(Point(linx(2.5),liny(3)),Point(linx(5.5),liny(3)),Point(linx(5.5),liny(-7)),box[3][1]);
line[line.length]=Link(Point(linx(2.5),liny(3)),Point(linx(5.5),liny(3)),box[1][1]);
line[line.length]=Link(Point(linx(4),liny(3)),Point(linx(4),liny(3)));

//----------
box[8]=new Array();
yLevel+=7;
box[8][0]=Textbox_Block(x(0),y(yLevel),"C");
box[8][0].addLink("p17_C");
box[8][0].addClick(function(){gotopage(15,"p15_retC")});
box[8][1]=Textbox_Condition(x(3.5),y(yLevel),"18日，独自雕刻的风子");
line[line.length]=Link(Point(linx(3.5),liny(0)-LINEBASEHEIGHT/2),Point(linx(3.5),liny(0)-LINEBASEHEIGHT/2));
board[board.length]=Board(liny(0),liny(26));
//----------
box[9]=new Array();
yLevel+=3;
box[9][0]=Textbox_Selection(x(2.5),y(yLevel),"再看一会儿");
line[line.length]=Link(box[9][0],box[8][1]);
box[9][1]=Textbox_Selection(x(4.5),y(yLevel),"离开","r|+未触发");
line[line.length]=Link(box[9][1],box[8][1]);
//----------
box[10]=new Array();
yLevel+=2;
box[10][0]=Textbox_Option(x(2.5),y(yLevel),"风子大师（二）");
box[10][0].addLink("p17_retKFMT2");
box[10][0].addClick(function(){gotopage(48,"p48_KFMT2")});
line[line.length]=Link(box[10][0],box[9][0]);
//----------
box[11]=new Array();
yLevel+=2;
box[11][0]=Textbox_Selection(x(2.5),y(yLevel),"处理风子硬塞给的雕刻");
line[line.length]=Link(box[11][0],box[10][0]);
//----------
box[12]=new Array();
yLevel+=3;
box[12][0]=Textbox_Option(x(1.5),y(yLevel),"把它丢掉");
line[line.length]=Link(box[12][0],box[11][0]);
box[12][1]=Textbox_Option(x(3.5),y(yLevel),"带回家去");
line[line.length]=Link(box[12][1],box[11][0]);
//----------
box[13]=new Array();
yLevel+=4;
CmtSummery="";
CmtSelect="此处{胜平线进入}即21日，在分支{受害者遗忘的简历}选择[查清地址后送给他]，并且在今日上午的分支{课前，牡丹的处理问题}选择[把牡丹丢还给杏]或者未触发这个分支。没有选择相应选项或者没有触发前一分支的情况均属于否；前一分支选择正确但没有触发后一分支的情况属于是。<br>{渚、风子线进入}即21日，在分支{迟到后的午间}选择[看看窗外]。没有选择相应选项或者没有触发分支的情况均属于否。<br>当进入渚、风子线时，无论作何选择，都不能最终达成胜平线GOOD ENDING。";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[13][0]=Textbox_Condition_C(x(3.5),y(yLevel),"胜平线进入或渚、风子线进入","8",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"胜平线进入或渚、风子线进入",0);
line[line.length]=Link(box[13][0],Point(linx(2.5),liny(-1)),box[12][0]);
line[line.length]=Link(box[13][0],Point(linx(2.5),liny(-1)),box[12][1]);
line[line.length]=Link(box[13][0],box[9][1]);
//----------
box[14]=new Array();
yLevel+=3;
box[14][0]=Textbox_Selection(x(2.5),y(yLevel),"是");
line[line.length]=Link(box[14][0],box[13][0]);
box[14][1]=Textbox_Selection(x(4.5),y(yLevel),"否");
line[line.length]=Link(box[14][1],box[13][0]);
//----------
box[15]=new Array();
yLevel+=2;
box[15][0]=Textbox_Selection(x(2.5),y(yLevel),"春原求朋也帮忙装备寝室");
line[line.length]=Link(box[15][0],box[14][0]);
//----------
box[16]=new Array();
yLevel+=3;
box[16][0]=Textbox_Selection(x(1.5),y(yLevel),"不帮忙","l|胜平");
line[line.length]=Link(box[16][0],box[15][0]);
box[16][1]=Textbox_Selection(x(3.5),y(yLevel),"帮忙","r|胜平");
line[line.length]=Link(box[16][1],box[15][0]);

line[line.length]=Link(Point(linx(2.5),liny(3)),box[16][0]);
line[line.length]=Link(Point(linx(2.5),liny(3)),box[16][1]);
line[line.length]=Link(Point(linx(2.5),liny(3)),Point(linx(4.5),liny(3)),box[14][1]);
line[line.length]=Link(Point(linx(3.5),liny(3)),Point(linx(3.5),liny(3)));

hdft["footer"]=Footer(liny(1),17);