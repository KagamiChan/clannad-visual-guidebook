// CVG HTML Data Page13 Done By Ligueston 2008.4.15
hdft["header"]=Header("public","公共路线","Public Route","4月21日（一）","April 21st~Part 1");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(3.5),y(yLevel),"4月21日","top");
//----------
box[1]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="此处{渚线进入}即16日，在分支{古河重新创立话剧社}选择[帮忙]；18日，在分支{琴美的邀请与古河的约定}选择[今天还是和以前一样与渚一起吃]或者未触发这个分支。没有选择相应选项或者没有触发前一分支的情况均属于否；前一分支选择正确但没有触发后一分支的情况属于是。<br>{风子线进入}即16日，在分支{古河重新创立话剧社}选择[帮忙]；18日，在分支{独自雕刻的风子}选择[再看一会儿]。两次选择都正确才满足风子线进入的条件。";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[1][0]=Textbox_Condition_C(x(3.5),y(yLevel),"渚线或风子线进入","1",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"渚线或风子线进入",0);
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Selection(x(2.5),y(yLevel),"是");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Selection(x(4.5),y(yLevel),"否");
line[line.length]=Link(box[2][1],box[1][0]);
//----------
box[3]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="";
CmtOption="-赶去学生食堂";
CmtEvents="00100000";
CmtEvntIru="如果21日前未退出渚线也未能使渚参与伪女友事件，此处选择赶去学生食堂，渚仍然有条件参与伪女友事件";
box[3][0]=Textbox_Selection_C(x(2.5),y(yLevel),"迟到后的午间","2",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"迟到后的午间",0);
line[line.length]=Link(box[3][0],box[2][0]);
box[3][1]=Textbox_Block(x(4.5),y(yLevel),"A");
line[line.length]=Link(box[3][1],box[2][1]);
box[3][1].addLink("p13_retA");
box[3][1].addClick(function(){gotopage(14,"p14_A")});
//----------
box[4]=new Array();
yLevel+=3;
box[4][0]=Textbox_Option(x(1.5),y(yLevel),"赶去学生食堂","l|杏|椋|芽衣|有纪宁|-渚|-风子");
line[line.length]=Link(box[4][0],box[3][0]);
box[4][1]=Textbox_Option(x(3.5),y(yLevel),"看看窗外","r|-渚|-风子|有纪宁|杏|椋|芽衣");
line[line.length]=Link(box[4][1],box[3][0]);
//----------
box[5]=new Array();
yLevel+=4;
box[5][0]=Textbox_Condition(x(3.5),y(yLevel),"18日，独自雕刻的风子");
line[line.length]=Link(box[5][0],Point(linx(2.5),liny(-1)),box[4][0]);
line[line.length]=Link(box[5][0],Point(linx(2.5),liny(-1)),box[4][1]);
line[line.length]=Link(box[5][0],box[3][1]);
//----------
box[6]=new Array();
yLevel+=3;
box[6][0]=Textbox_Selection(x(2.5),y(yLevel),"再看一会儿");
line[line.length]=Link(box[6][0],box[5][0]);
box[6][1]=Textbox_Selection(x(4.5),y(yLevel),"离开");
line[line.length]=Link(box[6][1],box[5][0]);
//----------
box[7]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="公共线路前期至伊吹风子线路前期特殊剧情。发生在21日至30日的十天内，共9部分。选择分支的变化与仅与事件内部的分支选择有关，但9部分内容是否都能触发以及剧情变化仍受公共线路中的走向以及某些分支选择的影响，这些相关分支的风子大师图标都高亮显示。风子大师相关攻略请参见P48～P50。";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[7][0]=Textbox_Option_C(x(2.5),y(yLevel),"风子大师","3",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"风子大师 / 风子召唤使",0);
box[7][0].addLink("p13_retKFMT1");
box[7][0].addClick(function(){gotopage(48,"p48_KFMT1")});
line[line.length]=Link(box[7][0],box[6][0]);
//----------
box[8]=new Array();
yLevel+=3;
box[8][0]=Textbox_Condition(x(3.5),y(yLevel),"中午，迟到后的午间");
line[line.length]=Link(box[8][0],box[7][0]);
line[line.length]=Link(box[8][0],box[6][1]);
//----------
box[9]=new Array();
yLevel+=3;
box[9][0]=Textbox_Selection(x(2),y(yLevel),"看看窗外");
line[line.length]=Link(box[9][0],Point(linx(3),liny(-1)));
box[9][1]=Textbox_Selection(x(5),y(yLevel),"赶去学生食堂","r|+未触发");
line[line.length]=Link(box[9][1],Point(linx(3),liny(-1)));
line[line.length]=Link(Point(linx(3.5),liny(-1)),box[8][0]);
//----------
box[10]=new Array();
yLevel+=2;
box[10][0]=Textbox_Selection(x(2),y(yLevel),"与学生会谈判");
line[line.length]=Link(box[10][0],box[9][0]);
//----------
box[11]=new Array();
yLevel+=3;
box[11][0]=Textbox_Option(x(1),y(yLevel),"再让古河去一次");
line[line.length]=Link(box[11][0],box[10][0]);
box[11][1]=Textbox_Option(x(3),y(yLevel),"代替她去谈判");
line[line.length]=Link(box[11][1],box[10][0]);
//----------
box[12]=new Array();
yLevel+=2;
box[12][0]=Textbox_Selection(x(1),y(yLevel),"代替古河谈判");
line[line.length]=Link(box[12][0],box[11][0]);
box[12][1]=Textbox_Condition(x(5),y(yLevel),"上午，坂道上遇到呆望樱花中的智代");
line[line.length]=Link(box[12][1],box[9][1]);
//----------
box[13]=new Array();
yLevel+=3;
box[13][0]=Textbox_Option(x(0),y(yLevel),"再让她去试试");
line[line.length]=Link(box[13][0],box[12][0]);
box[13][1]=Textbox_Option(x(2),y(yLevel),"代替她去");
line[line.length]=Link(box[13][1],box[12][0]);
box[13][2]=Textbox_Selection(x(4),y(yLevel),"打招呼");
line[line.length]=Link(box[13][2],box[12][1]);
box[13][3]=Textbox_Selection(x(6),y(yLevel),"不理她","r|+未触发");
line[line.length]=Link(box[13][3],box[12][1]);
//----------
box[14]=new Array();
yLevel+=2;
box[14][0]=Textbox_Selection(x(4),y(yLevel),"有智代的陪同");
line[line.length]=Link(box[14][0],box[13][2]);
//----------
box[15]=new Array();
yLevel+=3;
box[15][0]=Textbox_Option(x(3),y(yLevel),"的确不错","l|智代");
line[line.length]=Link(box[15][0],box[14][0]);
box[15][1]=Textbox_Option(x(5),y(yLevel),"是这样吗","r|智代");
line[line.length]=Link(box[15][1],box[14][0]);
//----------
box[16]=new Array();
yLevel+=2;
box[16][0]=Textbox_Selection(x(3),y(yLevel),"午饭的解决");
line[line.length]=Link(box[16][0],box[15][0]);
//----------
box[17]=new Array();
yLevel+=3;
box[17][0]=Textbox_Option(x(3),y(yLevel),"忍耐");
line[line.length]=Link(box[17][0],box[16][0]);
box[17][1]=Textbox_Option(x(5),y(yLevel),"硬要吃");
line[line.length]=Link(box[17][1],box[16][0]);
//----------
box[18]=new Array();
yLevel+=4;
box[18][0]=Textbox_Block(x(5),y(yLevel),"B");
box[18][0].addLink("p13_retB");
box[18][0].addClick(function(){gotopage(14,"p14_B")});
line[line.length]=Link(box[18][0],Point(linx(4),liny(-1)),box[17][0]);
line[line.length]=Link(box[18][0],Point(linx(4),liny(-1)),box[17][1]);
line[line.length]=Link(box[18][0],Point(linx(6),liny(-6)),box[15][1]);
line[line.length]=Link(box[18][0],box[13][3]);
//----------
box[19]=new Array();
yLevel+=3;
box[19][0]=Textbox_Selection(x(3.5),y(yLevel),"幻想世界（四）");
line[line.length]=Link(box[19][0],Point(linx(3.5),liny(-1)));
line[line.length]=Link(Point(linx(2),liny(-1)),Point(linx(5),liny(-1)),box[18][0]);
line[line.length]=Link(Point(linx(2),liny(-1)),Point(linx(2),liny(-13)),Point(linx(1),liny(-14)),box[13][0]);
line[line.length]=Link(Point(linx(2),liny(-1)),Point(linx(2),liny(-13)),Point(linx(1),liny(-14)),box[13][1]);
line[line.length]=Link(Point(linx(2),liny(-1)),Point(linx(2),liny(-13)),box[11][1]);
//----------
box[20]=new Array();
yLevel+=2;
box[20][0]=Textbox_Date(x(3.5),y(yLevel),"4月22日","bottom");
line[line.length]=Link(box[20][0],box[19][0]);
box[20][0].addTitle("点击转到15页");
box[20][0].addClick(function(){gotopage(15)});

hdft["footer"]=Footer(liny(1),13);