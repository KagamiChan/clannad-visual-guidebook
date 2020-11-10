// CVG HTML Data Page31 Done By Shakugan_No_Kaluote 2008.4.18
hdft["header"]=Header("yukine","宫泽 有纪宁","Yukine Miyazawa","4月24日～有纪宁","April 24th~Yukine");

var yLevel=0;

//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(3),y(yLevel),"4月24日","top");
//----------
box[1]=new Array();
yLevel+=2;
box[1][0]=Textbox_Selection(x(3),y(yLevel),"有纪宁的仓库咒语");
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Option(x(2),y(yLevel),"玩");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Option(x(4),y(yLevel),"不玩");
line[line.length]=Link(box[2][1],box[1][0]);
//----------
box[3]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="宫泽有纪宁线路中期特殊剧情。发生在24日中午，内容及选择分支出现的变化与公共线路的走向和某些分支选择有关，同时也和有纪宁的咒语中剧情内容有关，这些相关分支的有纪宁的咒语/体育仓库事件图标都高亮显示。体育仓库事件相关攻略请参见P33。";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[3][0]=Textbox_Option_C(x(2),y(yLevel),"体育仓库事件","1",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"体育仓库事件",0);
box[3][0].addLink("p31_retGYM");
box[3][0].addClick(function(){gotopage(33,"p33_GYM")});
line[line.length]=Link(box[3][0],box[2][0]);
//----------
box[4]=new Array();
yLevel+=3;
box[4][0]=Textbox_Date(x(3),y(yLevel),"有纪宁","bottom");
line[line.length]=Link(box[4][0],box[3][0]);
line[line.length]=Link(box[4][0],box[2][1]);
//----------
box[5]=new Array();
yLevel+=5;
box[5][0]=Textbox_Date(x(4),y(yLevel),"有纪宁","top");
//----------
box[6]=new Array();
yLevel+=2;
box[6][0]=Textbox_Selection(x(4),y(yLevel),"消除疲劳的咒语");
line[line.length]=Link(box[6][0],box[5][0]);
//----------
box[7]=new Array();
yLevel+=3;
box[7][0]=Textbox_Option(x(3),y(yLevel),"就这样吧","l|有纪宁");
line[line.length]=Link(box[7][0],box[6][0]);
box[7][1]=Textbox_Option(x(5),y(yLevel),"叫醒她","r|有纪宁");
line[line.length]=Link(box[7][1],box[6][0]);
//----------
box[8]=new Array();
yLevel+=2;
box[8][0]=Textbox_Selection(x(3),y(yLevel),"能够依靠的场所");
line[line.length]=Link(box[8][0],box[7][0]);
//----------
box[9]=new Array();
yLevel+=3;
box[9][0]=Textbox_Option(x(2),y(yLevel),"好","l|有纪宁");
line[line.length]=Link(box[9][0],box[8][0]);
box[9][1]=Textbox_Option(x(4),y(yLevel),"不好","r|有纪宁");
line[line.length]=Link(box[9][1],box[8][0]);
//----------
box[10]=new Array();
yLevel+=2;
box[10][0]=Textbox_Selection(x(2),y(yLevel),"复杂的心情");
line[line.length]=Link(box[10][0],box[9][0]);
//----------
box[11]=new Array();
yLevel+=3;
box[11][0]=Textbox_Option(x(1),y(yLevel),"让她继续睡下去","l|有纪宁");
line[line.length]=Link(box[11][0],box[10][0]);
box[11][1]=Textbox_Option(x(3),y(yLevel),"叫醒她","r|有纪宁");
line[line.length]=Link(box[11][1],box[10][0]);
//----------
box[12]=new Array();
yLevel+=2;
box[12][0]=Textbox_Option(x(1),y(yLevel),"有纪宁“光”获得");
line[line.length]=Link(box[12][0],box[11][0]);
//----------
box[13]=new Array();
yLevel+=1;
box[13][0]=Textbox_Quit(x(4),y(yLevel),"公共 Bad Ending");
line[line.length]=Link(box[13][0],box[11][1]);
line[line.length]=Link(box[13][0],Point(linx(5),liny(-5)),box[9][1]);
line[line.length]=Link(box[13][0],box[7][1]);
//----------
box[14]=new Array();
yLevel+=1;
box[14][0]=Textbox_Quit(x(1),y(yLevel),"有纪宁 Good Ending");
line[line.length]=Link(box[14][0],box[12][0]);

hdft["footer"]=Footer(liny(1),31);