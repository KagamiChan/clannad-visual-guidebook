// CVG HTML Data Page53 Done By Shakugan_No_Kaluote 2008.4.19
hdft["header"]=Header("nagisa","古河 渚/幸村 俊夫","Nagisa Furukawa / Toshio Yukimura","5月1日～5月10日","May 1st~May 10th");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(3),y(yLevel),"4月29日","top");
//----------
box[1]=new Array();
yLevel+=2;
box[1][0]=Textbox_Condition(x(3),y(yLevel),"26日，前来探亲的芽衣");
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Selection(x(1),y(yLevel),"好的");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Selection(x(5),y(yLevel),"自己一个人去吧","r|+未触发");
line[line.length]=Link(box[2][1],box[1][0]);
//----------
box[3]=new Array();
yLevel+=2;
box[3][0]=Textbox_Condition(x(1),y(yLevel),"28日，明天的计划安排");
line[line.length]=Link(box[3][0],box[2][0]);
box[3][1]=Textbox_Condition(x(5),y(yLevel),"28日，面对练习的想法");
line[line.length]=Link(box[3][1],box[2][1]);
//----------
box[4]=new Array();
yLevel+=3;
box[4][0]=Textbox_Selection(x(0),y(yLevel),"让她和芽衣玩","l|+未触发");
line[line.length]=Link(box[4][0],box[3][0]);
box[4][1]=Textbox_Selection(x(2),y(yLevel),"让她练习");
line[line.length]=Link(box[4][1],box[3][0]);
box[4][2]=Textbox_Selection(x(4),y(yLevel),"练习","l|+未触发");
line[line.length]=Link(box[4][2],box[3][1]);
box[4][3]=Textbox_Selection(x(6),y(yLevel),"想对策");
line[line.length]=Link(box[4][3],box[3][1]);
//----------
box[5]=new Array();
yLevel+=2;
box[5][0]=Textbox_Condition(x(0),y(yLevel),"27日，帮忙打理店铺");
line[line.length]=Link(box[5][0],box[4][0]);
CmtSummery="";
CmtSelect="{风子“光”消失事件触发条件}包括完成过风子线（达成风子TRUE ENDING或者风子GOOD ENDING）并且至少获得一颗“光”，以及之前没有触发过风子“光”消失事件（即该事件只能触发一次）。";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[5][1]=Textbox_Condition_C(x(6),y(yLevel),"符合风子“光”消失事件触发条件","1",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"符合风子“光”消失事件触发条件",0);
line[line.length]=Link(box[5][1],box[4][3]);
//----------
box[6]=new Array();
yLevel+=3;
box[6][0]=Textbox_Selection(x(0),y(yLevel),"可以");
line[line.length]=Link(box[6][0],box[5][0]);
box[6][1]=Textbox_Selection(x(2),y(yLevel),"不好");
line[line.length]=Link(box[6][1],box[5][0]);
box[6][2]=Textbox_Selection(x(4),y(yLevel),"否");
line[line.length]=Link(box[6][2],box[5][1]);
box[6][3]=Textbox_Selection(x(6),y(yLevel),"是");
line[line.length]=Link(box[6][3],box[5][1]);
//----------
box[7]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[7][0]=Textbox_Condition_C(x(0),y(yLevel),"符合风子“光”消失事件触发条件","1",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"",0);
line[line.length]=Link(box[7][0],box[6][0]);
CmtSummery="";
CmtSelect="";
CmtCaution="古河渚线中期特殊事件。发生于29日下午，对AFTER STORY产生重大影响。用得到的一颗“光”为沉睡中风子许愿，“光”的数量会减少1，并且是AFTER STORY中获得风子和公子的“光”，从而达成TRUE ENDING的必要条件。";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[7][1]=Textbox_Option_C(x(6),y(yLevel),"风子“光”消失事件","2",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"风子“光”消失事件",0);
line[line.length]=Link(box[7][1],box[6][3]);
//----------
box[8]=new Array();
yLevel+=3;
box[8][0]=Textbox_Selection(x(0),y(yLevel),"是");
line[line.length]=Link(box[8][0],box[7][0]);
box[8][1]=Textbox_Selection(x(2),y(yLevel),"否");
line[line.length]=Link(box[8][1],box[7][0]);
//----------
box[9]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[9][0]=Textbox_Option_C(x(0),y(yLevel),"风子“光”消失事件","2",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"",0);
line[line.length]=Link(box[9][0],box[8][0]);
//----------
box[10]=new Array();
yLevel+=3;
box[10][0]=Textbox_Selection(x(1),y(yLevel),"渚奇怪的举动");
line[line.length]=Link(box[10][0],box[9][0]);
line[line.length]=Link(box[10][0],box[8][1]);
//----------
box[11]=new Array();
yLevel+=3;
box[11][0]=Textbox_Option(x(0),y(yLevel),"问她到底怎么回事");
line[line.length]=Link(box[11][0],box[10][0]);
box[11][1]=Textbox_Option(x(2),y(yLevel),"拜托再来一次");
line[line.length]=Link(box[11][1],box[10][0]);
//----------
box[12]=new Array();
yLevel+=4;
box[12][0]=Textbox_Date(x(3),y(yLevel),"4月30日","bottom");
line[line.length]=Link(box[12][0],Point(linx(1),liny(-1)),box[11][0]);
line[line.length]=Link(box[12][0],Point(linx(1),liny(-1)),box[11][1]);
line[line.length]=Link(box[12][0],Point(linx(3),liny(-14)),box[6][1]);
line[line.length]=Link(box[12][0],Point(linx(5),liny(-12)),box[6][2]);
line[line.length]=Link(box[12][0],Point(linx(5),liny(-12)),box[7][1]);
line[line.length]=Link(box[12][0],Point(linx(3),liny(-19)),box[4][1]);
line[line.length]=Link(box[12][0],Point(linx(3),liny(-19)),box[4][2]);
//----------
box[13]=new Array();
yLevel+=5;
box[13][0]=Textbox_Date(x(3.5),y(yLevel),"4月30日","top");
//----------
box[14]=new Array();
yLevel+=2;
box[14][0]=Textbox_Option(x(3.5),y(yLevel),"3对3篮球赛（二）");
box[14][0].addLink("p53_ret33BB2");
box[14][0].addClick(function(){gotopage(58,"p58_33BB2")});
line[line.length]=Link(box[14][0],box[13][0]);
//----------
box[15]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="{篮球赛可以获胜的条件}即3对3篮球赛（一）和（二）中邀请到杏、智代、美佐枝、秋生、芳野当中的一位成为参赛伙伴。3对3篮球赛相关攻略请参见P56～P58。<br>邀请到杏为参赛伙伴后，接下来的分支{最后一球的配合}出现的选项为[最后一球给我]和[最后一球给杏]，[最后一球给我]总是不变的而另一个选项因具体参赛伙伴而不同（[最后一球给智代/美佐枝/大叔/芳野先生]）。";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[15][0]=Textbox_Condition_C(x(3.5),y(yLevel),"符合篮球赛可能获胜的条件","1",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"符合篮球赛可能获胜的条件",0);
line[line.length]=Link(box[15][0],box[14][0]);
//----------
box[16]=new Array();
yLevel+=3;
box[16][0]=Textbox_Selection(x(2.5),y(yLevel),"是");
line[line.length]=Link(box[16][0],box[15][0]);
box[16][1]=Textbox_Selection(x(4.5),y(yLevel),"否");
line[line.length]=Link(box[16][1],box[15][0]);
//----------
box[17]=new Array();
yLevel+=2;
box[17][0]=Textbox_Selection(x(2.5),y(yLevel),"最后一球的配合");
line[line.length]=Link(box[17][0],box[16][0]);
//----------
box[18]=new Array();
yLevel+=3;
box[18][0]=Textbox_Option(x(1.5),y(yLevel),"最后一球给我","l|渚|-幸村");
line[line.length]=Link(box[18][0],box[17][0]);
box[18][1]=Textbox_Option(x(3.5),y(yLevel),"最后一球给杏","r|-幸村|渚");
line[line.length]=Link(box[18][1],box[17][0]);
//----------
box[19]=new Array();
yLevel+=2;
box[19][0]=Textbox_Date(x(1.5),y(yLevel),"5月1日","bottom");
line[line.length]=Link(box[19][0],box[18][0]);
//----------
box[20]=new Array();
yLevel+=1;
CmtSummery="";
CmtSelect="{29日，在古河面包店遇见公子}包括26日，在分支{前来探亲的芽衣}选择[好的]；27日，在分支{帮忙打理店铺}选择[可以]以及在29日的分支{明天的计划安排}中选择[让她和芽衣玩]或者未触发这个分支，就能在29日下午的古河面包店遇见公子。也可以在{前来探亲的芽衣}选择[自己一个人去吧]或者未触发这个分支，并且在28日的分支{面对练习的想法}中选择[想对策]，同符合是的条件。";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[20][0]=Textbox_Condition_C(x(4.5),y(yLevel),"29日，古河面包店前遇见公子","2",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"29日，古河面包店前遇见公子",0);
line[line.length]=Link(box[20][0],box[16][1]);
line[line.length]=Link(box[20][0],box[18][1]);
//----------
box[21]=new Array();
yLevel+=3;
box[21][0]=Textbox_Selection(x(2.5),y(yLevel),"是");
line[line.length]=Link(box[21][0],box[20][0]);
box[21][1]=Textbox_Selection(x(4.5),y(yLevel),"否");
line[line.length]=Link(box[21][1],box[20][0]);
//----------
box[22]=new Array();
yLevel+=2;
box[22][0]=Textbox_Option(x(2.5),y(yLevel),"幸村“光”获得");
line[line.length]=Link(box[22][0],box[21][0]);
box[22][1]=Textbox_Quit(x(4.5),y(yLevel),"渚 Bad Ending");
line[line.length]=Link(box[22][1],box[21][1]);
//----------
box[23]=new Array();
yLevel+=2;
box[23][0]=Textbox_Quit(x(2.5),y(yLevel),"幸村 Good Ending");
line[line.length]=Link(box[23][0],box[22][0]);























hdft["footer"]=Footer(liny(1),53);