// CVG HTML Data Page14 Done By Ligueston 2008.4.15
hdft["header"]=Header("public","公共路线","Public Route","4月21日（二）","April 21st~Part 2");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Block(x(0),y(yLevel),"A");
box[0][0].addLink("p14_A");
box[0][0].addClick(function(){gotopage(13,"p13_retA")});
box[0][1]=Textbox_Selection(x(3.5),y(yLevel),"难得早起的朋也决定该做的事");
line[line.length]=Link(Point(linx(3.5),liny(0)-LINEBASEHEIGHT/2),Point(linx(3.5),liny(0)-LINEBASEHEIGHT/2));
board[board.length]=Board(liny(0),liny(29));
//----------
box[1]=new Array();
yLevel+=3;
box[1][0]=Textbox_Option(x(2),y(yLevel),"迟点再去吧","l|胜平|-智代");
line[line.length]=Link(box[1][0],Point(linx(3),liny(-1)));
box[1][1]=Textbox_Option(x(5),y(yLevel),"认认真真起床上学","l|-智代|胜平");
line[line.length]=Link(box[1][1],Point(linx(3),liny(-1)));
line[line.length]=Link(Point(linx(3.5),liny(-1)),box[0][1]);
//----------
box[2]=new Array();
yLevel+=2;
box[2][0]=Textbox_Selection(x(2),y(yLevel),"通学路上，身后传来引擎声");
line[line.length]=Link(box[2][0],box[1][0]);
//----------
box[3]=new Array();
yLevel+=3;
box[3][0]=Textbox_Option(x(0),y(yLevel),"向右跳","l|胜平");
line[line.length]=Link(box[3][0],box[2][0]);
box[3][1]=Textbox_Option(x(2),y(yLevel),"站稳等着它","r|胜平");
line[line.length]=Link(box[3][1],box[2][0]);
box[3][2]=Textbox_Option(x(4),y(yLevel),"向左跳","r|胜平");
line[line.length]=Link(box[3][2],box[2][0]);
//----------
box[4]=new Array();
yLevel+=2;
box[4][0]=Textbox_Selection(x(0),y(yLevel),"事发现场，某路人成为受害者");
line[line.length]=Link(box[4][0],box[3][0]);
//----------
box[5]=new Array();
yLevel+=3;
box[5][0]=Textbox_Option(x(0),y(yLevel),"离开这里");
line[line.length]=Link(box[5][0],box[4][0]);
box[5][1]=Textbox_Option(x(2),y(yLevel),"摇一摇他");
line[line.length]=Link(box[5][1],box[4][0]);
//----------
box[6]=new Array();
yLevel+=3;
box[6][0]=Textbox_Selection(x(0),y(yLevel),"受害者遗忘的简历");
line[line.length]=Link(box[6][0],box[5][0]);
line[line.length]=Link(box[6][0],box[5][1]);
box[6][1]=Textbox_Condition(x(5),y(yLevel),"19日，春原准备威胁智代");
line[line.length]=Link(box[6][1],box[1][1]);
//----------
box[7]=new Array();
yLevel+=3;
box[7][0]=Textbox_Option(x(0),y(yLevel),"查清地址后给他","l|胜平");
line[line.length]=Link(box[7][0],box[6][0]);
box[7][1]=Textbox_Option(x(2),y(yLevel),"撕了扔掉","r|胜平");
line[line.length]=Link(box[7][1],box[6][0]);
box[7][2]=Textbox_Selection(x(4),y(yLevel),"劝他放弃");
line[line.length]=Link(box[7][2],box[6][1]);
box[7][3]=Textbox_Selection(x(6),y(yLevel),"不去管他","r|+未触发");
line[line.length]=Link(box[7][3],box[6][1]);
//----------
box[8]=new Array();
yLevel+=2;
box[8][0]=Textbox_Selection(x(4),y(yLevel),"坂道上遇到呆望樱花中的智代");
line[line.length]=Link(box[8][0],box[7][2]);
//----------
box[9]=new Array();
yLevel+=3;
box[9][0]=Textbox_Option(x(3),y(yLevel),"打招呼","l|智代");
line[line.length]=Link(box[9][0],box[8][0]);
box[9][1]=Textbox_Option(x(5),y(yLevel),"不理她","r|智代");
line[line.length]=Link(box[9][1],box[8][0]);

yLevel+=4;
line[line.length]=Link(Point(linx(5),liny(0)),Point(linx(4),liny(-1)),box[9][0]);
line[line.length]=Link(Point(linx(5),liny(0)),Point(linx(4),liny(-1)),box[9][1]);
line[line.length]=Link(Point(linx(5),liny(0)),box[7][3]);

line[line.length]=Link(Point(linx(5),liny(0)),Point(linx(2),liny(0)),Point(linx(2),liny(-5)),Point(linx(1),liny(-6)),box[7][0]);
line[line.length]=Link(Point(linx(5),liny(0)),Point(linx(2),liny(0)),Point(linx(2),liny(-5)),Point(linx(1),liny(-6)),box[7][1]);
line[line.length]=Link(Point(linx(5),liny(0)),Point(linx(2),liny(0)),Point(linx(2),liny(-5)),Point(linx(3),liny(-17)),box[3][1]);
line[line.length]=Link(Point(linx(5),liny(0)),Point(linx(2),liny(0)),Point(linx(2),liny(-5)),Point(linx(3),liny(-17)),box[3][2]);
line[line.length]=Link(Point(linx(3.5),liny(0)),Point(linx(3.5),liny(0)));

//----------
box[10]=new Array();
yLevel+=4;
box[10][0]=Textbox_Block(x(0),y(yLevel),"B");
box[10][0].addLink("p14_B");
box[10][0].addClick(function(){gotopage(13,"p13_retB")});
box[10][1]=Textbox_Condition(x(4),y(yLevel),"20日，离开美佐枝的房间");
line[line.length]=Link(Point(linx(4),liny(0)-LINEBASEHEIGHT/2),Point(linx(4),liny(0)-LINEBASEHEIGHT/2));
board[board.length]=Board(liny(0),liny(17));
//----------
box[11]=new Array();
yLevel+=3;
box[11][0]=Textbox_Selection(x(3),y(yLevel),"问她还可以再来吗");
line[line.length]=Link(box[11][0],box[10][1]);
box[11][1]=Textbox_Selection(x(5),y(yLevel),"不会再来了","r|+未触发");
line[line.length]=Link(box[11][1],box[10][1]);
//----------
box[12]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="此处{智代线进入}即下午，在分支{有智代的陪同}选择[的确不错]。没有选择相应选项或者没有触发分支的情况均属于否。<br>{有纪宁线进入}即18日，在分支{逃课选择睡觉的地方}选择[到那里去睡]，在接下来的分支{下课后，走进资料室的女孩}选择[再说几句话]；或者18日在分支{逃课选择睡觉的地方}选择[还是回教室吧]或者未触发这个分支，并且19日在分支{下课后，走进资料室的女孩}选择[再说几句话]。其他情况都属于没有进入有纪宁线。";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[12][0]=Textbox_Condition_C(x(3),y(yLevel),"智代线或者有纪宁线进入","4",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"智代线进入或有纪宁线进入",0);
line[line.length]=Link(box[12][0],box[11][0]);
//----------
box[13]=new Array();
yLevel+=3;
box[13][0]=Textbox_Selection(x(2),y(yLevel),"是");
line[line.length]=Link(box[13][0],box[12][0]);
box[13][1]=Textbox_Selection(x(4),y(yLevel),"否");
line[line.length]=Link(box[13][1],box[12][0]);
//----------
box[14]=new Array();
yLevel+=2;
CmtSummery="一天又快过去，朋也计划着晚上的事，要继续去找美佐枝还是……";
CmtSelect="选择[还是去美佐枝的房间]，则完全进入美佐枝线，并同时退出智代线、有纪宁线以及藤林姐妹线（若已进入）。相乐美佐枝角色剧情攻略请参见P26。";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[14][0]=Textbox_Selection_C(x(2),y(yLevel),"安排晚上如何打发时间","5",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"安排晚上如何打发时间",0);
line[line.length]=Link(box[14][0],box[13][0]);
box[14][1]=Textbox_Condition(x(4),y(yLevel),"美佐枝线完全进入");
box[14][1].addTitle("点击转到第26页");
box[14][1].addClick(function(){gotopage(26)});
line[line.length]=Link(box[14][1],box[13][1]);
//----------
box[15]=new Array();
yLevel+=3;
box[15][0]=Textbox_Option(x(1),y(yLevel),"还是去美佐枝的房间","l|美佐枝|-杏|-椋|-智代|-芽衣|-有纪宁");
line[line.length]=Link(box[15][0],box[14][0]);
box[15][1]=Textbox_Option(x(3),y(yLevel),"不去了","r|-智代|-芽衣|-有纪宁|美佐枝|-杏|-椋");
line[line.length]=Link(box[15][1],box[14][0]);
//----------
box[16]=new Array();
yLevel+=2;
box[16][0]=Textbox_Condition(x(1),y(yLevel),"美佐枝线完全进入");
box[16][0].addTitle("点击转到第26页");
box[16][0].addClick(function(){gotopage(26)});
line[line.length]=Link(box[16][0],box[15][0]);

line[line.length]=Link(Point(linx(3),liny(0)),box[15][1]);
line[line.length]=Link(Point(linx(3),liny(0)),Point(linx(5),liny(0)),box[11][1]);
line[line.length]=Link(Point(linx(4),liny(0)),Point(linx(4),liny(0)));

hdft["footer"]=Footer(liny(1),14);