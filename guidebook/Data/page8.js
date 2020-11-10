// CVG HTML Data Page8 Done By Ligueston 2008.4.9
hdft["header"]=Header("public","公共路线","Public Route","4月18日（二）","April 18th~Part 2");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Condition(x(3.5),y(yLevel),"上午，春原挑战智代（五回目）","top");
line[line.length]=Link(Point(linx(3.5),liny(0)-LINEBASEHEIGHT/2),Point(linx(3.5),liny(0)-LINEBASEHEIGHT/2));
line[line.length-1].addTitle("点击转回第7页");
line[line.length-1].addClick(function(){gotopage(7)});
//----------
box[1]=new Array();
yLevel+=3;
box[1][0]=Textbox_Selection(x(2.5),y(yLevel),"接受");
line[line.length]=Link(box[1][0],box[0][0]);
box[1][1]=Textbox_Selection(x(4.5),y(yLevel),"拒绝","r|+未触发");
line[line.length]=Link(box[1][1],box[0][0]);
//----------
box[2]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="";
CmtOption="-帮忙";
CmtEvents="01000000";
CmtEvntIru="智代有条件参与有纪宁的咒语、体育仓库事件";
box[2][0]=Textbox_Selection_C(x(2.5),y(yLevel),"遇到困难的智代","7",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"",0);
line[line.length]=Link(box[2][0],box[1][0]);
//----------
box[3]=new Array();
yLevel+=3;
box[3][0]=Textbox_Option(x(1.5),y(yLevel),"帮忙","l|智代");
line[line.length]=Link(box[3][0],box[2][0]);
box[3][1]=Textbox_Option(x(3.5),y(yLevel),"甩开她的手","r|智代");
line[line.length]=Link(box[3][1],box[2][0]);
//----------
box[4]=new Array();
yLevel+=4;
box[4][0]=Textbox_Condition(x(3.5),y(yLevel),"16日，古河重新创立话剧社");
line[line.length]=Link(box[4][0],Point(linx(2.5),liny(-1)),box[3][0]);
line[line.length]=Link(box[4][0],Point(linx(2.5),liny(-1)),box[3][1]);
line[line.length]=Link(box[4][0],box[1][1]);
//----------
box[5]=new Array();
yLevel+=3;
box[5][0]=Textbox_Selection(x(2),y(yLevel),"帮忙");
line[line.length]=Link(box[5][0],Point(linx(3),liny(-1)));
box[5][1]=Textbox_Selection(x(5),y(yLevel),"让她一个人做","r|+未触发");
line[line.length]=Link(box[5][1],Point(linx(3),liny(-1)));
line[line.length]=Link(Point(linx(3.5),liny(-1)),box[4][0]);
//----------
box[6]=new Array();
yLevel+=2;
box[6][0]=Textbox_Selection(x(2),y(yLevel),"假装学生进行提问");
line[line.length]=Link(box[6][0],box[5][0]);
//----------
box[7]=new Array();
yLevel+=3;
box[7][0]=Textbox_Option(x(0),y(yLevel),"会演怎样的话剧呢？");
line[line.length]=Link(box[7][0],box[6][0]);
box[7][1]=Textbox_Option(x(2),y(yLevel),"海报上画的是什么东西？");
line[line.length]=Link(box[7][1],box[6][0]);
box[7][2]=Textbox_Option(x(4),y(yLevel),"你喜欢哪种类型的男生？");
line[line.length]=Link(box[7][2],box[6][0]);
//----------
box[8]=new Array();
yLevel+=3;
box[8][0]=Textbox_Condition(x(2),y(yLevel),"中午，琴美的邀请和古河的约定");
line[line.length]=Link(box[8][0],box[7][0]);
line[line.length]=Link(box[8][0],box[7][1]);
line[line.length]=Link(box[8][0],box[7][2]);
//----------
box[9]=new Array();
yLevel+=3;
box[9][0]=Textbox_Selection(x(1),y(yLevel),"今天还和以前一样与渚一起吃","l|+未触发");
line[line.length]=Link(box[9][0],box[8][0]);
box[9][1]=Textbox_Selection(x(3),y(yLevel),"在这里和琴美一起吃");
line[line.length]=Link(box[9][1],box[8][0]);
//----------
box[10]=new Array();
yLevel+=2;
box[10][0]=Textbox_Selection(x(1),y(yLevel),"路上意外杀出个春原");
line[line.length]=Link(box[10][0],box[9][0]);
CmtSummery="";
CmtSelect="{15和17日，向美佐枝搭话}包括15日，在分支{宿舍走廊遇见美佐枝}选择[向她搭话]以及17日在分支{宿舍走廊遇见美佐枝}再选择[向她搭话]。两次选择都正确才满足条件。";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[10][1]=Textbox_Condition_C(x(5),y(yLevel),"15日和17日，向美佐枝搭话","8",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"15日和17日，向美佐枝搭话",0);
line[line.length]=Link(box[10][1],box[5][1]);
//----------
box[11]=new Array();
yLevel+=3;
box[11][0]=Textbox_Option(x(0),y(yLevel),"和古河拉开距离走");
line[line.length]=Link(box[11][0],box[10][0]);
box[11][1]=Textbox_Option(x(2),y(yLevel),"拉着古河的手,快步跑掉");
line[line.length]=Link(box[11][1],box[10][0]);
box[11][2]=Textbox_Selection(x(4),y(yLevel),"是");
line[line.length]=Link(box[11][2],box[10][1]);
box[11][3]=Textbox_Selection(x(6),y(yLevel),"否");
line[line.length]=Link(box[11][3],box[10][1]);
//----------
box[12]=new Array();
yLevel+=2;
CmtSummery="来到宿舍楼的朋也找春原时又遇上了教训学生未果的美佐枝，她叹气着正准备离去。";
CmtSelect="这是得到美佐枝“光”的关键选择分支。选则[向她搭话]继续美佐枝线，如果已经完成过美佐枝线，选择这个选项才能在进入智代角色剧情后得到美佐枝的“光”。选择[目送她离去]，退出美佐枝线。";
CmtCaution="";
CmtOption="-向她搭话";
CmtEvents="01000000";
CmtEvntIru="美佐枝参与有纪宁的咒语";
box[12][0]=Textbox_Selection_C(x(4),y(yLevel),"宿舍走廊遇见美佐枝","9",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"宿舍走廊遇见美佐枝",0);
line[line.length]=Link(box[12][0],box[11][2]);
//----------
box[13]=new Array();
yLevel+=3;
box[13][0]=Textbox_Option(x(3),y(yLevel),"向她搭话","l|美佐枝");
line[line.length]=Link(box[13][0],box[12][0]);
box[13][1]=Textbox_Option(x(5),y(yLevel),"目送她离去","r|美佐枝");
line[line.length]=Link(box[13][1],box[12][0]);
//----------
box[14]=new Array();
yLevel+=5;
box[14][0]=Textbox_Date(x(3.5),y(yLevel),"4月19日","bottom");
line[line.length]=Link(box[14][0],Point(linx(3.5),liny(-1)));
box[14][0].addTitle("点击转到第10页");
box[14][0].addClick(function(){gotopage(10);});
line[line.length]=Link(Point(linx(5),liny(-1)),Point(linx(2),liny(-1)),Point(linx(2),liny(-6)),Point(linx(1),liny(-7)),box[11][0]);
line[line.length]=Link(Point(linx(5),liny(-1)),Point(linx(2),liny(-1)),Point(linx(2),liny(-6)),Point(linx(1),liny(-7)),box[11][1]);
line[line.length]=Link(Point(linx(5),liny(-1)),Point(linx(2),liny(-1)),Point(linx(2),liny(-6)),box[9][1]);
line[line.length]=Link(Point(linx(5),liny(-1)),Point(linx(4),liny(-2)),box[13][0]);
line[line.length]=Link(Point(linx(5),liny(-1)),Point(linx(4),liny(-2)),box[13][1]);
line[line.length]=Link(Point(linx(5),liny(-1)),box[11][3]);

hdft["footer"]=Footer(liny(1),8);