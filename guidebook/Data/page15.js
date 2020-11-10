// CVG HTML Data Page15 Done By Ligueston 2008.4.15
hdft["header"]=Header("public","公共路线","Public Route","4月22日（一）","April 22nd~Part 1");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(3),y(yLevel),"4月22日","top");
//----------
box[1]=new Array();
yLevel+=2;
box[1][0]=Textbox_Condition(x(3),y(yLevel),"21日，迟到后的午间");
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Selection(x(3),y(yLevel),"赶去学生食堂","l|+未触发");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Selection(x(5),y(yLevel),"看看窗外");
line[line.length]=Link(box[2][1],box[1][0]);
//----------
box[3]=new Array();
yLevel+=2;
box[3][0]=Textbox_Condition(x(3),y(yLevel),"21日，有智代的陪同");
line[line.length]=Link(box[3][0],box[2][0]);
box[3][1]=Textbox_Block(x(5),y(yLevel),"A");
line[line.length]=Link(box[3][1],box[2][1]);
box[3][1].addLink("p15_retA");
box[3][1].addClick(function(){gotopage(16,"p16_A")});
//----------
box[4]=new Array();
yLevel+=3;
box[4][0]=Textbox_Selection(x(2),y(yLevel),"的确不错");
line[line.length]=Link(box[4][0],box[3][0]);
box[4][1]=Textbox_Selection(x(4),y(yLevel),"是这样吗？","r|+未触发");
line[line.length]=Link(box[4][1],box[3][0]);
//----------
box[5]=new Array();
yLevel+=2;
box[5][0]=Textbox_Selection(x(2),y(yLevel),"迟到的朋也遇见智代");
line[line.length]=Link(box[5][0],box[4][0]);
CmtSummery="";
CmtSelect="";
CmtCaution="公共线路后期搞笑剧情。发生在22日至24日的三天内，内容变化与智代线21日、22日的选择有关，所有选项均不影响剧情发展。春原的玩笑相关攻略请参见P25。";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[5][1]=Textbox_Selection_C(x(4),y(yLevel),"春原的玩笑","1",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"春原的玩笑",0);
box[5][1].addLink("p15_retSNJK1");
box[5][1].addClick(function(){gotopage(25,"p25_SNJK1");})
line[line.length]=Link(box[5][1],box[4][1]);
//----------
box[6]=new Array();
yLevel+=3;
box[6][0]=Textbox_Option(x(1),y(yLevel),"沉默");
line[line.length]=Link(box[6][0],box[5][0]);
box[6][1]=Textbox_Option(x(3),y(yLevel),"现在正准备回去");
line[line.length]=Link(box[6][1],box[5][0]);
//----------
box[7]=new Array();
yLevel+=3;
CmtSummery="";
CmtSelect="";
CmtCaution="";
CmtOption="-添麻烦了";
CmtEvents="01000010";
CmtEvntIru="智代参与有纪宁的咒语、体育仓库事件；业余棒球进入必选（或者不触发这个分支）";
box[7][0]=Textbox_Selection_C(x(2),y(yLevel),"回答智代的询问","2",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"回答智代的询问",0);
line[line.length]=Link(box[7][0],box[6][0]);
line[line.length]=Link(box[7][0],box[6][1]);
//----------
box[8]=new Array();
yLevel+=3;
box[8][0]=Textbox_Option(x(1),y(yLevel),"不，不是这个意思","l|智代");
line[line.length]=Link(box[8][0],box[7][0]);
box[8][1]=Textbox_Option(x(3),y(yLevel),"添麻烦了","r|智代");
line[line.length]=Link(box[8][1],box[7][0]);
//----------
box[9]=new Array();
yLevel+=3;
box[9][0]=Textbox_Block(x(3),y(yLevel),"B");
line[line.length]=Link(box[9][0],box[8][1]);
line[line.length]=Link(box[9][0],box[5][1]);
box[9][0].addLink("p15_retB");
box[9][0].addClick(function(){gotopage(17,"p17_B")});
//----------
box[10]=new Array();
yLevel+=3;
box[10][0]=Textbox_Condition(x(3),y(yLevel),"16日，杏没有迟到的原因");
line[line.length]=Link(box[10][0],box[9][0]);
line[line.length]=Link(box[10][0],box[8][0]);
//----------
box[11]=new Array();
yLevel+=3;
box[11][0]=Textbox_Selection(x(2),y(yLevel),"试着追问下去");
line[line.length]=Link(box[11][0],box[10][0]);
box[11][1]=Textbox_Selection(x(4),y(yLevel),"没什么好介意的","r|+未触发");
line[line.length]=Link(box[11][1],box[10][0]);
//----------
box[12]=new Array();
yLevel+=2;
box[12][0]=Textbox_Selection(x(2),y(yLevel),"课前，牡丹的处理问题");
line[line.length]=Link(box[12][0],box[11][0]);
//----------
box[13]=new Array();
yLevel+=3;
box[13][0]=Textbox_Option(x(1),y(yLevel),"拿回去好了","l|杏|椋|胜平");
line[line.length]=Link(box[13][0],box[12][0]);
box[13][1]=Textbox_Option(x(3),y(yLevel),"把牡丹丢还给杏","r|-胜平|杏|椋");
line[line.length]=Link(box[13][1],box[12][0]);
//----------
box[14]=new Array();
yLevel+=4;
box[14][0]=Textbox_Condition(x(3),y(yLevel),"上午，回答智代的询问");
line[line.length]=Link(box[14][0],Point(linx(2),liny(-1)),box[13][0]);
line[line.length]=Link(box[14][0],Point(linx(2),liny(-1)),box[13][1]);
line[line.length]=Link(box[14][0],box[11][1]);
//----------
box[15]=new Array();
yLevel+=3;
box[15][0]=Textbox_Selection(x(2),y(yLevel),"不，不是这个意思");
line[line.length]=Link(box[15][0],box[14][0]);
box[15][1]=Textbox_Selection(x(4),y(yLevel),"添麻烦了","r|+未触发");
line[line.length]=Link(box[15][1],box[14][0]);
//----------
box[16]=new Array();
yLevel+=2;
box[16][0]=Textbox_Selection(x(2),y(yLevel),"被春原利用，智代陷入窘境");
line[line.length]=Link(box[16][0],box[15][0]);
//----------
box[17]=new Array();
yLevel+=3;
box[17][0]=Textbox_Option(x(1),y(yLevel),"该阻止他了","l|智代|-杏|-椋|-芽衣|-有纪宁");
line[line.length]=Link(box[17][0],box[16][0]);
box[17][1]=Textbox_Option(x(3),y(yLevel),"和他一起享受","r|-芽衣|-有纪宁|-杏|-椋|智代");
line[line.length]=Link(box[17][1],box[16][0]);
//----------
box[18]=new Array();
yLevel+=3;
box[18][0]=Textbox_Block(x(4),y(yLevel),"C");
line[line.length]=Link(box[18][0],box[15][1]);
line[line.length]=Link(box[18][0],Point(linx(4),liny(-5)),box[3][1]);
box[18][0].addLink("p15_retC");
box[18][0].addClick(function(){gotopage(17,"p17_C")});
//----------
box[19]=new Array();
yLevel+=3;
box[19][0]=Textbox_Date(x(3),y(yLevel),"4月23日","bottom");
line[line.length]=Link(box[19][0],box[18][0]);
line[line.length]=Link(box[19][0],Point(linx(2),liny(-2)),box[17][0]);
line[line.length]=Link(box[19][0],Point(linx(2),liny(-2)),box[17][1]);
box[19][0].addTitle("点击转到18页");
box[19][0].addClick(function(){gotopage(18)});

hdft["footer"]=Footer(liny(1),15);