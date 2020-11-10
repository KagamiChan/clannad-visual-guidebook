// CVG HTML Data Page58 Done By Ligueston 2008.4.19
hdft["header"]=Header("nagisa","古河 渚/幸村 俊夫","Nagisa Furukawa / Toshio Yukimura","3对3篮球赛(三)","3 on 3 Basketball Match - Part3");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Block(x(0),y(yLevel),"D");
box[0][0].addLink("p58_D");
box[0][0].addClick(function(){gotopage(56,"p56_retD")});
box[0][1]=Textbox_Condition(x(3.5),y(yLevel),"已经来过旧校舍资料室");
line[line.length]=Link(Point(linx(3.5),liny(0)-LINEBASEHEIGHT/2),Point(linx(3.5),liny(0)-LINEBASEHEIGHT/2));
board[board.length]=Board(liny(0),liny(23));
//----------
box[1]=new Array();
yLevel+=3;
box[1][0]=Textbox_Selection(x(2),y(yLevel),"否");
line[line.length]=Link(box[1][0],Point(linx(3),liny(-1)));
box[1][1]=Textbox_Selection(x(5),y(yLevel),"是");
line[line.length]=Link(box[1][1],Point(linx(3),liny(-1)));
line[line.length]=Link(Point(linx(3.5),liny(-1)),box[0][1]);
//----------
box[2]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="";
CmtOption="+不邀请她|-去找美佐枝小姐";
CmtEvents="00000001";
CmtEvntIru="美佐枝参与毕业典礼。如果26日在分支前来探亲的芽衣选择好的，则美佐枝已确定出席毕业典礼，此处的选择没有影响";
box[2][0]=Textbox_Selection_C(x(2),y(yLevel),"考虑邀请有纪宁","5",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"考虑邀请有纪宁",0);
line[line.length]=Link(box[2][0],box[1][0]);
//----------
box[3]=new Array();
yLevel+=3;
box[3][0]=Textbox_Option(x(1),y(yLevel),"说明");
line[line.length]=Link(box[3][0],box[2][0]);
box[3][1]=Textbox_Option(x(3),y(yLevel),"不邀请她");
line[line.length]=Link(box[3][1],box[2][0]);
//----------
box[4]=new Array();
yLevel+=2;
box[4][0]=Textbox_Option(x(1),y(yLevel),"有纪宁成为参赛伙伴");
line[line.length]=Link(box[4][0],box[3][0]);
box[4][1]=Textbox_Condition(x(3),y(yLevel),"15日，宿舍走廊与美佐枝相遇");
line[line.length]=Link(box[4][1],box[3][1]);
//----------
box[5]=new Array();
yLevel+=3;
box[5][0]=Textbox_Selection(x(2),y(yLevel),"向她搭话");
line[line.length]=Link(box[5][0],box[4][1]);
box[5][1]=Textbox_Selection(x(4),y(yLevel),"不去管她");
line[line.length]=Link(box[5][1],box[4][1]);
//----------
box[6]=new Array();
yLevel+=2;
box[6][0]=Textbox_Selection(x(2),y(yLevel),"考虑邀请美佐枝");
line[line.length]=Link(box[6][0],box[5][0]);
//----------
box[7]=new Array();
yLevel+=3;
box[7][0]=Textbox_Option(x(2),y(yLevel),"去找美佐枝小姐");
line[line.length]=Link(box[7][0],box[6][0]);
box[7][1]=Textbox_Option(x(4),y(yLevel),"这也不行");
line[line.length]=Link(box[7][1],box[6][0]);
//----------
box[8]=new Array();
yLevel+=2;
box[8][0]=Textbox_Option(x(2),y(yLevel),"美佐枝成为参赛伙伴");
line[line.length]=Link(box[8][0],box[7][0]);
line[line.length]=Link(Point(linx(2),liny(2)),box[8][0]);
line[line.length]=Link(Point(linx(2),liny(2)),Point(linx(1),liny(2)),box[4][0]);
line[line.length]=Link(Point(linx(2),liny(2)),Point(linx(2),liny(2)));
//----------
box[9]=new Array();
yLevel+=1;
box[9][0]=Textbox_Option(x(4),y(yLevel),"3对3篮球赛（一）");
box[9][0].addClick(function(){gotopage(56,"p56_33BB")});
line[line.length]=Link(box[9][0],box[7][1]);
line[line.length]=Link(box[9][0],Point(linx(5),liny(-5)),box[5][1]);
line[line.length]=Link(box[9][0],box[1][1]);
line[line.length]=Link(Point(linx(4),liny(1)),Point(linx(4),liny(1)));
//----------
box[10]=new Array();
yLevel+=5;
box[10][0]=Textbox_Option(x(0),y(yLevel),"3对3篮球赛（二）");
box[10][0].addLink("p58_33BB2");
box[10][0].addClick(function(){gotopage(53,"p53_ret33BB2")});
box[10][1]=Textbox_Condition(x(4),y(yLevel),"28日，没有找到参赛伙伴");
line[line.length]=Link(Point(linx(4),liny(0)-LINEBASEHEIGHT/2),Point(linx(4),liny(0)-LINEBASEHEIGHT/2));
//----------
box[11]=new Array();
yLevel+=3;
box[11][0]=Textbox_Selection(x(2.5),y(yLevel),"是");
line[line.length]=Link(box[11][0],Point(linx(3.5),liny(-1)));
box[11][1]=Textbox_Selection(x(5.5),y(yLevel),"否");
line[line.length]=Link(box[11][1],Point(linx(3.5),liny(-1)));
line[line.length]=Link(Point(linx(4),liny(-1)),box[10][1]);
//----------
box[12]=new Array();
yLevel+=2;
box[12][0]=Textbox_Condition(x(2.5),y(yLevel),"20日，芳野寻求帮手");
line[line.length]=Link(box[12][0],box[11][0]);
//----------
box[13]=new Array();
yLevel+=3;
box[13][0]=Textbox_Selection(x(1.5),y(yLevel),"帮忙");
line[line.length]=Link(box[13][0],box[12][0]);
box[13][1]=Textbox_Selection(x(3.5),y(yLevel),"拒绝","r|+未触发");
line[line.length]=Link(box[13][1],box[12][0]);
//----------
box[14]=new Array();
yLevel+=2;
box[14][0]=Textbox_Condition(x(1.5),y(yLevel),"26日，在走廊遇到幸村");
line[line.length]=Link(box[14][0],box[13][0]);
//----------
box[15]=new Array();
yLevel+=3;
box[15][0]=Textbox_Selection(x(0.5),y(yLevel),"让幸村加入队伍");
line[line.length]=Link(box[15][0],box[14][0]);
box[15][1]=Textbox_Selection(x(2.5),y(yLevel),"不要他加入","r|+未触发");
line[line.length]=Link(box[15][1],box[14][0]);
//----------
box[16]=new Array();
yLevel+=2;
box[16][0]=Textbox_Option(x(0.5),y(yLevel),"芳野成为参赛伙伴");
line[line.length]=Link(box[16][0],box[15][0]);
//----------
box[17]=new Array();
yLevel+=1;
box[17][0]=Textbox_Condition(x(3.5),y(yLevel),"26日，前来探亲的芽衣");
line[line.length]=Link(box[17][0],box[15][1]);
line[line.length]=Link(box[17][0],box[13][1]);
//----------
box[18]=new Array();
yLevel+=3;
box[18][0]=Textbox_Selection(x(2.5),y(yLevel),"好的");
line[line.length]=Link(box[18][0],box[17][0]);
box[18][1]=Textbox_Selection(x(4.5),y(yLevel),"自己一个人去吧");
line[line.length]=Link(box[18][1],box[17][0]);
//----------
box[19]=new Array();
yLevel+=2;
box[19][0]=Textbox_Condition(x(2.5),y(yLevel),"28日，明天的计划安排");
line[line.length]=Link(box[19][0],box[18][0]);
//----------
box[20]=new Array();
yLevel+=3;
box[20][0]=Textbox_Selection(x(1.5),y(yLevel),"让她和芽衣玩");
line[line.length]=Link(box[20][0],box[19][0]);
box[20][1]=Textbox_Selection(x(3.5),y(yLevel),"让她练习");
line[line.length]=Link(box[20][1],box[19][0]);
//----------
box[21]=new Array();
yLevel+=2;
box[21][0]=Textbox_Option(x(1.5),y(yLevel),"秋生成为参赛伙伴");
line[line.length]=Link(box[21][0],box[20][0]);
//----------
box[22]=new Array();
yLevel+=1;
box[22][0]=Textbox_Option(x(3.5),y(yLevel),"渚成为队员");
line[line.length]=Link(box[22][0],box[20][1]);
line[line.length]=Link(box[22][0],box[18][1]);

yLevel+=3;
line[line.length]=Link(Point(linx(2.5),liny(0)),Point(linx(1.5),liny(-1)),box[16][0]);
line[line.length]=Link(Point(linx(2.5),liny(0)),box[21][0]);
line[line.length]=Link(Point(linx(2.5),liny(0)),box[22][0]);
line[line.length]=Link(Point(linx(2.5),liny(0)),Point(linx(5.5),liny(0)),box[11][1]);
line[line.length]=Link(Point(linx(4),liny(0)),Point(linx(4),liny(0)));

hdft["footer"]=Footer(liny(1),58);