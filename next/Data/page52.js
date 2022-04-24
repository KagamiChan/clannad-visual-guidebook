// CVG HTML Data Page52 Done By Shakugan_No_Kaluote 2008.4.20
hdft["header"]=Header("nagisa","古河 渚/幸村 俊夫","Nagisa Furukawa/Toshio Yukimura","4月28日","April 28th");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(3.5),y(yLevel),"4月28日","top");
//----------
box[1]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="古河渚线路前期特殊剧情。发生在28日和30日，分成两部分，28日的内容及选择分支出现的变化与公共线路和渚线的走向和某些分支选择有关，30日的内容没有分支，剧情仍然受之前某些分支选择的影响，这些相关分支的3对3篮球赛图标都高亮显示。3对3篮球赛中的表现影响之后渚线的走向（参考古河渚线路30日注释1）以及AFTER STORY中的一些剧情，相关攻略请参见P56～P58。";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[1][0]=Textbox_Option_C(x(3.5),y(yLevel),"3对3篮球赛（一）","1",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"3对3篮球赛",0);
box[1][0].addLink("p52_ret33BB");
box[1][0].addClick(function(){gotopage(56,"p56_33BB")});
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=2;
box[2][0]=Textbox_Condition(x(3.5),y(yLevel),"26日，前来探亲的芽衣");
line[line.length]=Link(box[2][0],box[1][0]);
//----------
box[3]=new Array();
yLevel+=3;
box[3][0]=Textbox_Selection(x(2),y(yLevel),"好的");
line[line.length]=Link(box[3][0],Point(linx(3),liny(-1)));
box[3][1]=Textbox_Selection(x(5),y(yLevel),"自己一个人去吧","r|+未触发");
line[line.length]=Link(box[3][1],Point(linx(3),liny(-1)));
line[line.length]=Link(Point(linx(3.5),liny(-1)),box[2][0]);
//----------
box[4]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="{上午，没有找到参赛伙伴}即在3对3篮球赛（一）中没有邀请到杏、椋、智代、风子、美佐枝、有纪宁中的任何一位成为参赛伙伴。3对3篮球赛相关攻略请参见P56～P58。";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[4][0]=Textbox_Condition_C(x(2),y(yLevel),"上午，没有找到参赛伙伴","2",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"上午，没有找到参赛伙伴",0);
line[line.length]=Link(box[4][0],box[3][0]);
//----------
box[5]=new Array();
yLevel+=3;
box[5][0]=Textbox_Selection(x(1),y(yLevel),"是");
line[line.length]=Link(box[5][0],box[4][0]);
box[5][1]=Textbox_Selection(x(3),y(yLevel),"否");
line[line.length]=Link(box[5][1],box[4][0]);
//----------
box[6]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="";
CmtOption="-让她练习";
CmtEvents="00100000";
CmtEvntIru="让她练习";
box[6][0]=Textbox_Selection_C(x(1),y(yLevel),"明天的计划安排","3",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"明天的计划安排",0);
line[line.length]=Link(box[6][0],box[5][0]);
//----------
box[7]=new Array();
yLevel+=3;
box[7][0]=Textbox_Option(x(0),y(yLevel),"让她练习");
line[line.length]=Link(box[7][0],box[6][0]);
box[7][1]=Textbox_Option(x(2),y(yLevel),"让她和芽衣玩");
line[line.length]=Link(box[7][1],box[6][0]);
//----------
box[8]=new Array();
yLevel+=3;
box[8][0]=Textbox_Condition(x(3),y(yLevel),"27日，帮忙打理店铺");
line[line.length]=Link(box[8][0],box[7][1]);
line[line.length]=Link(box[8][0],box[5][1]);
//----------
box[9]=new Array();
yLevel+=3;
box[9][0]=Textbox_Selection(x(1),y(yLevel),"不好");
line[line.length]=Link(box[9][0],box[8][0]);
box[9][1]=Textbox_Selection(x(3),y(yLevel),"可以");
line[line.length]=Link(box[9][1],box[8][0]);
//----------
box[10]=new Array();
yLevel+=2;
box[10][0]=Textbox_Selection(x(3),y(yLevel),"芽衣莫名的主意");
line[line.length]=Link(box[10][0],box[9][1]);
//----------
box[11]=new Array();
yLevel+=3;
box[11][0]=Textbox_Option(x(1),y(yLevel),"随便她");
line[line.length]=Link(box[11][0],box[10][0]);
box[11][1]=Textbox_Option(x(3),y(yLevel),"阻止她");
line[line.length]=Link(box[11][1],box[10][0]);
box[11][2]=Textbox_Condition(x(5),y(yLevel),"上午，没有找到参赛伙伴");
line[line.length]=Link(box[11][2],box[3][1]);
//----------
box[12]=new Array();
yLevel+=3;
box[12][0]=Textbox_Selection(x(4),y(yLevel),"否");
line[line.length]=Link(box[12][0],box[11][2]);
box[12][1]=Textbox_Selection(x(6),y(yLevel),"是");
line[line.length]=Link(box[12][1],box[11][2]);
//----------
box[13]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="";
CmtOption="-想对策";
CmtEvents="00000001";
CmtEvntIru="公子参与毕业典礼（此为公子参与毕业典礼的另一种途径）";
box[13][0]=Textbox_Selection_C(x(4),y(yLevel),"面对练习的想法","4",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"面对练习的想法",0);
line[line.length]=Link(box[13][0],box[12][0]);
//----------
box[14]=new Array();
yLevel+=3;
box[14][0]=Textbox_Option(x(3),y(yLevel),"想对策");
line[line.length]=Link(box[14][0],box[13][0]);
box[14][1]=Textbox_Option(x(5),y(yLevel),"练习");
line[line.length]=Link(box[14][1],box[13][0]);
//----------
box[15]=new Array();
yLevel+=5;
box[15][0]=Textbox_Date(x(3.5),y(yLevel),"4月29日","bottom");
box[15][0].addTitle("点击转到53页");
box[15][0].addClick(function(){gotopage(53)});
line[line.length]=Link(box[15][0],Point(linx(3.5),liny(-1)))
line[line.length]=Link(Point(linx(5),liny(-1)),Point(linx(4),liny(-2)),box[14][0]);
line[line.length]=Link(Point(linx(5),liny(-1)),Point(linx(4),liny(-2)),box[14][1]);
line[line.length]=Link(Point(linx(5),liny(-1)),box[12][1]);
line[line.length]=Link(Point(linx(5),liny(-1)),Point(linx(2),liny(-1)),Point(linx(2),liny(-10)),box[11][0]);
line[line.length]=Link(Point(linx(5),liny(-1)),Point(linx(2),liny(-1)),Point(linx(2),liny(-10)),box[11][1]);
line[line.length]=Link(Point(linx(5),liny(-1)),Point(linx(2),liny(-1)),Point(linx(2),liny(-9)),Point(linx(0),liny(-15)),box[9][0]);
line[line.length]=Link(Point(linx(5),liny(-1)),Point(linx(2),liny(-1)),Point(linx(2),liny(-9)),box[7][0]);

hdft["footer"]=Footer(liny(2),52);