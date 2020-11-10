// CVG HTML Data Page19 Done By Shakugan_No_Kaluote 2008.4.3
hdft["header"]=Header("public","公共路线","Public Route","4月23日（二）","April 23th~Part 2");

var yLevel=0;

//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Condition(x(4),y(yLevel),"22日，被春原利用，智代陷入窘境");
line[line.length]=Link(Point(linx(4),liny(0)-LINEBASEHEIGHT/2),Point(linx(4),liny(0)-LINEBASEHEIGHT/2));
line[line.length-1].addTitle("点击转回第18页");
line[line.length-1].addClick(function(){gotopage(18)});
//----------
box[1]=new Array();
yLevel+=3;
box[1][0]=Textbox_Selection(x(3),y(yLevel),"和春原一起享受","l|+未触发");
line[line.length]=Link(box[1][0],box[0][0]);
box[1][1]=Textbox_Selection(x(5),y(yLevel),"该阻止他了");
line[line.length]=Link(box[1][1],box[0][0]);
//----------
box[2]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="{符合禁断关系线进入条件}包括15日，在分支{面对泪水打转的椋}选择[无视]，在分支{宿舍走廊遇见美佐枝}选择[不去管她]（以上为在朋也开始就认识杏、椋、美佐枝的前提上退出她们的线路）；16日,在分支{古河重新创立话剧社}中选择[帮忙]（进入渚线）；17日，在分支{出去寻找古河渚}选择[去教室看一下]并且在接下来的分支{隔壁教室里的陌生女孩}选择[离开]，或者同一天在分支{经过旧校舍的空教室}选择[去睡一觉]并且在接下来的分支{空教室里的陌生女孩}选择[离开]（以上为17日进入风子线后退出）；18日，在分支琴美的邀请和古河的约定选择在这里和琴美一起吃（退出自16日进入的渚线，同时进入琴美线）；19日,在分支{来到旧校舍后的去向（一）}选择去资料室，并且在接下来的分支{下课后,走进资料室的女孩}选择[离开]（以上为进入有纪宁线后退出，在18日同样有进入有纪宁线的机会，但不能触发，否则无法进入琴美线）；20日,在分支{周末、图书馆中的琴美}选择[离开图书室]（退出琴美线）；21日，在分支{有智代的陪同}选择[的确不错]；22日,在分支{回答智代的询问}中选择[添麻烦了]，或者22日，在分支{回答智代的询问}中选择[不，不是这个意思]，在分支{被春原利用，智代陷入窘境}选择[和春原一起享受]（以上两种情况均为21日仍然在智代线并于22日退出）。符合上述所有条件，并在这之后的分支{春原想到个新的打工点子}中选择[是啊]，即可进入禁断关系线。";
CmtCaution="禁断关系线是CLANNAD中判定最为复杂的线路。其攻略要点就是在规定的时候进入或者退出学院篇中每个女主角的线路。";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[2][0]=Textbox_Condition_C(x(3),y(yLevel),"符合禁断关系线进入条件","2",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"符合禁断关系线进入条件",0);
line[line.length]=Link(box[2][0],box[1][0]);
//----------
box[3]=new Array();
yLevel+=3;
box[3][0]=Textbox_Selection(x(2),y(yLevel),"是");
line[line.length]=Link(box[3][0],box[2][0]);
box[3][1]=Textbox_Selection(x(4),y(yLevel),"否");
line[line.length]=Link(box[3][1],box[2][0]);
//----------
box[4]=new Array();
yLevel+=2;
box[4][0]=Textbox_Selection(x(2),y(yLevel),"春原想到个新点子");
line[line.length]=Link(box[4][0],box[3][0]);
//----------
box[5]=new Array();
yLevel+=3;
box[5][0]=Textbox_Option(x(1),y(yLevel),"是啊");
line[line.length]=Link(box[5][0],box[4][0]);
box[5][1]=Textbox_Option(x(3),y(yLevel),"抱歉，不是这样");
line[line.length]=Link(box[5][1],box[4][0]);
//----------
box[6]=new Array();
yLevel+=2;
box[6][0]=Textbox_Quit(x(1),y(yLevel),"禁断线完全进入");
line[line.length]=Link(box[6][0],box[5][0]);
//----------
box[7]=new Array();
yLevel+=1;
CmtSummery="";
CmtSelect="{21日或22日，春原认识有纪宁}即在没有{进入渚、风子线}（具体请参见公共线路22日的注释1）和{18日或19日，在资料室认识有纪宁}（具体请参见公共线路22日注释4）的前提下，如果在20日的分支{芳野寻求帮手}中选择[拒绝]或者未触发这个分支，则21日午后会触发另一端有分支的有纪宁剧情。如果20日的分支中选择了[帮助]，并且在22日的分支{回答智代的询问}中选择[添麻烦了]或者未触发这个分支，那么21日春原认识有纪宁的剧情会延迟到22日发生，22日本来的剧情被替代（参考公共线路22日注释4）；如果在分支{回答智代的询问}中选择了[不，不是这个意思]，则春原不会认识有纪宁。<br>只要触发了这段春原认识了有纪宁的剧情，就符合是的条件";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[7][0]=Textbox_Condition_C(x(3),y(yLevel),"21日或22日，春原认识有纪宁","3",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"21日或22日，春原认识有纪宁",0);
line[line.length]=Link(box[7][0],box[5][1]);
line[line.length]=Link(box[7][0],box[3][1]);
//----------
box[8]=new Array();
yLevel+=3;
box[8][0]=Textbox_Selection(x(2),y(yLevel),"是");
line[line.length]=Link(box[8][0],box[7][0]);
box[8][1]=Textbox_Selection(x(4),y(yLevel),"否");
line[line.length]=Link(box[8][1],box[7][0]);
//----------
box[9]=new Array();
yLevel+=2;
box[9][0]=Textbox_Condition(x(2),y(yLevel),"22日，春原去见有纪宁，朋也陪同");
line[line.length]=Link(box[9][0],box[8][0]);
//----------
box[10]=new Array();
yLevel+=3;
box[10][0]=Textbox_Selection(x(2),y(yLevel),"去","l|+未触发");
line[line.length]=Link(box[10][0],box[9][0]);
box[10][1]=Textbox_Selection(x(4),y(yLevel),"不去");
line[line.length]=Link(box[10][1],box[9][0]);
//----------
box[11]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="";
CmtOption="-试试看";
CmtEvents="00010000";
CmtEvntIru="如果21日在分支迟到后的午间选择赶去学生食堂而退出渚线，在此选择试试看，则渚同样可参与伪女友事件";
box[11][0]=Textbox_Selection_C(x(2),y(yLevel),"测试暗恋对象","4",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"测试暗恋对象",0);
line[line.length]=Link(box[11][0],box[10][0]);
//----------
box[12]=new Array();
yLevel+=3;
box[12][0]=Textbox_Option(x(2),y(yLevel),"试试看");
line[line.length]=Link(box[12][0],box[11][0]);
box[12][1]=Textbox_Option(x(4),y(yLevel),"不干");
line[line.length]=Link(box[12][1],box[11][0]);
//----------
box[13]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="公共线路后期（宫泽有纪宁线路前期）特殊剧情。发生在23日午后，没有选择分支。内容变化与公共线路的走向和某些分支选择有关，这些相关分支的有纪宁咒语/体育仓库事件图标都高亮显示。有纪宁的咒语攻略参见P32。";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[13][0]=Textbox_Option_C(x(2),y(yLevel),"有纪宁的咒语","5",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"有纪宁的咒语",0);
box[13][0].addLink("p19_retYNSP");
box[13][0].addClick(function(){gotopage(32,"p32_YNSP")});
line[line.length]=Link(box[13][0],box[12][0]);
//----------
box[14]=new Array();
yLevel+=4;
box[14][0]=Textbox_Condition(x(4),y(yLevel),"18日，独自雕刻的风子");
line[line.length]=Link(box[14][0],Point(linx(3),liny(-1)),box[13][0]);
line[line.length]=Link(box[14][0],Point(linx(3),liny(-1)),box[12][1]);
line[line.length]=Link(box[14][0],Point(linx(5),liny(-8)),box[10][1]);
line[line.length]=Link(box[14][0],Point(linx(5),liny(-13)),box[8][1]);
line[line.length]=Link(box[14][0],box[1][1]);
//----------
box[15]=new Array();
yLevel+=3;
box[15][0]=Textbox_Selection(x(3),y(yLevel),"在看一会儿");
line[line.length]=Link(box[15][0],box[14][0]);
box[15][1]=Textbox_Selection(x(5),y(yLevel),"离开","r|+未触发");
line[line.length]=Link(box[15][1],box[14][0]);
//----------
box[16]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="";
CmtOption="-转换一下心情";
CmtEvents="00001000";
CmtEvntIru="风子大师继续必选";
box[16][0]=Textbox_Selection_C(x(3),y(yLevel),"无聊的午后时光","6",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"无聊的午后时光",0);
line[line.length]=Link(box[16][0],box[15][0]);
//----------
box[17]=new Array();
yLevel+=3;
box[17][0]=Textbox_Option(x(2),y(yLevel),"转换一下心情");
line[line.length]=Link(box[17][0],box[16][0]);
box[17][1]=Textbox_Option(x(4),y(yLevel),"睡觉");
line[line.length]=Link(box[17][1],box[16][0]);
//----------
box[18]=new Array();
yLevel+=2;
box[18][0]=Textbox_Selection(x(2),y(yLevel),"走廊中看到风子");
line[line.length]=Link(box[18][0],box[17][0]);
//----------
box[19]=new Array();
yLevel+=3;
box[19][0]=Textbox_Option(x(1),y(yLevel),"叫住她");
line[line.length]=Link(box[19][0],box[18][0]);
box[19][1]=Textbox_Option(x(3),y(yLevel),"不去管她");
line[line.length]=Link(box[19][1],box[18][0]);
//----------
box[20]=new Array();
yLevel+=2;
box[20][0]=Textbox_Option(x(1),y(yLevel),"风子大师（三）");
box[20][0].addLink("p19_retKFMT3");
box[20][0].addClick(function(){gotopage(48,"p48_KFMT3")});
line[line.length]=Link(box[20][0],box[19][0]);

line[line.length]=Link(Point(linx(4),liny(4)),Point(linx(3),liny(4)),Point(linx(2),liny(3)),box[20][0]);
line[line.length]=Link(Point(linx(4),liny(4)),Point(linx(3),liny(4)),Point(linx(2),liny(3)),box[19][1]);
line[line.length]=Link(Point(linx(4),liny(4)),Point(linx(3),liny(4)),box[17][1]);
line[line.length]=Link(Point(linx(4),liny(4)),Point(linx(5),liny(4)),box[15][1]);
line[line.length]=Link(Point(linx(4),liny(4)),Point(linx(4),liny(4)));
line[line.length-1].addTitle("点击转到第19页");
line[line.length-1].addClick(function(){gotopage(20)});

hdft["footer"]=Footer(liny(5),19);