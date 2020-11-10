// CVG HTML Data Page10 Done By Ligueston 2008.4.10
hdft["header"]=Header("public","公共路线","Public Route","4月19日（一）","April 19th~Part 1");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(3),y(yLevel),"4月19日","top");
//----------
box[1]=new Array();
yLevel+=2;
box[1][0]=Textbox_Condition(x(3),y(yLevel),"18日，遇到困难的智代");
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Selection(x(2),y(yLevel),"帮忙");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Selection(x(4),y(yLevel),"甩开她的手","r|+未触发");
line[line.length]=Link(box[2][1],box[1][0]);
//----------
box[3]=new Array();
yLevel+=2;
box[3][0]=Textbox_Selection(x(2),y(yLevel),"春原准备威胁智代");
line[line.length]=Link(box[3][0],box[2][0]);
//----------
box[4]=new Array();
yLevel+=3;
box[4][0]=Textbox_Option(x(1),y(yLevel),"劝他放弃","l|智代");
line[line.length]=Link(box[4][0],box[3][0]);
box[4][1]=Textbox_Option(x(3),y(yLevel),"不管他","r|智代");
line[line.length]=Link(box[4][1],box[3][0]);
//----------
box[5]=new Array();
yLevel+=4;
CmtSummery="";
CmtSelect="此处{渚线进入}即16日，在分支{古河重新创立话剧社}选择[帮忙]；18日，在分支{琴美的邀请与古河的约定}选择[今天还是和以前一样与渚一起吃]或者未触发这个分支。没有选择相应选项或者没有触发前一分支的情况均属于否；前一分支选择正确但没有触发后一分支的情况属于是。<br>{风子线进入}即16日，在分支{古河重新创立话剧社}选择[帮忙]；18日，在分支{独自雕刻的风子}选择[再看一会儿]。两次选择都正确才满足风子线进入的条件。";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[5][0]=Textbox_Condition_C(x(3),y(yLevel),"渚线或者风子线进入","1",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"渚线或者风子线进入",0);
line[line.length]=Link(box[5][0],Point(linx(2),liny(-1)),box[4][0]);
line[line.length]=Link(box[5][0],Point(linx(2),liny(-1)),box[4][1]);
line[line.length]=Link(box[5][0],box[2][1]);
//----------
box[6]=new Array();
yLevel+=3;
box[6][0]=Textbox_Selection(x(1),y(yLevel),"是");
line[line.length]=Link(box[6][0],box[5][0]);
box[6][1]=Textbox_Selection(x(5),y(yLevel),"否");
line[line.length]=Link(box[6][1],box[5][0]);
//----------
box[7]=new Array();
yLevel+=2;
box[7][0]=Textbox_Selection(x(1),y(yLevel),"想起在操场的渚");
line[line.length]=Link(box[7][0],box[6][0]);
CmtSummery="";
CmtSelect="";
CmtCaution="";
CmtOption="-去旧校舍";
CmtEvents="10000000";
CmtEvntIru="有纪宁参与64HIT。如果18日在分支逃课选择睡觉的地方选择到那里去睡，则此处的选择没有影响";
box[7][1]=Textbox_Selection_C(x(5),y(yLevel),"快下雨的放学后","2",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"快下雨的放学后",0);
line[line.length]=Link(box[7][1],box[6][1]);
//----------
box[8]=new Array();
yLevel+=3;
box[8][0]=Textbox_Option(x(0),y(yLevel),"不出去");
line[line.length]=Link(box[8][0],box[7][0]);
box[8][1]=Textbox_Option(x(2),y(yLevel),"去看看情况");
line[line.length]=Link(box[8][1],box[7][0]);
box[8][2]=Textbox_Option(x(4),y(yLevel),"去旧校舍");
line[line.length]=Link(box[8][2],box[7][1]);
box[8][3]=Textbox_Option(x(6),y(yLevel),"直接回家");
line[line.length]=Link(box[8][3],box[7][1]);
//----------
box[9]=new Array();
yLevel+=2;
box[9][0]=Textbox_Block(x(4),y(yLevel),"A");
line[line.length]=Link(box[9][0],box[8][2]);
box[9][0].addLink("p10_retA");
box[9][0].addClick(function(){gotopage(11,"p11_A")});
//----------
box[10]=new Array();
yLevel+=4;
CmtSummery="";
CmtSelect="{18日，和琴美一起吃午饭}包括18日，在分支{琴美的邀请与古河的约定}选择[在这里和琴美一起吃]；或者虽然没有出现这个分支，但是发生了和琴美一起吃午饭的剧情内容（18日渚、风子线未进入，即16日在分支{古河重新创立话剧社}选择[让她一个人做]或者未触发这个分支的话，在分支{寻找春原}和{朋也内心的思索}分别选择[图书馆]和[不能就这样不理她]，就会发生和琴美一起吃午饭的剧情内容）。不符合以上条件的情况均属于否。";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[10][0]=Textbox_Condition_C(x(3),y(yLevel),"18日，和琴美一起吃午饭","3",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"18日，和琴美一起吃午饭",0);
line[line.length]=Link(box[10][0],Point(linx(1),liny(-3)),box[8][0]);
line[line.length]=Link(box[10][0],Point(linx(1),liny(-3)),box[8][1]);
line[line.length]=Link(box[10][0],Point(linx(5),liny(-1)),box[9][0]);
line[line.length]=Link(box[10][0],Point(linx(5),liny(-1)),box[8][3]);
//----------
box[11]=new Array();
yLevel+=3;
box[11][0]=Textbox_Selection(x(2),y(yLevel),"是");
line[line.length]=Link(box[11][0],box[10][0]);
box[11][1]=Textbox_Selection(x(4),y(yLevel),"否");
line[line.length]=Link(box[11][1],box[10][0]);
//----------
box[12]=new Array();
yLevel+=3;
box[12][0]=Textbox_Selection(x(1),y(yLevel),"看她剪过这本书没有");
line[line.length]=Link(box[12][0],box[11][0]);
box[12][1]=Textbox_Selection(x(3),y(yLevel),"还是不要管好了");
line[line.length]=Link(box[12][1],box[11][0]);
//----------
box[13]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="";
CmtOption="-跟在她后面进入书店";
CmtEvents="00000100";
CmtEvntIru="琴美好感度上升1点";
box[13][0]=Textbox_Selection_C(x(1),y(yLevel),"发现琴美进入书店","4",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"发现琴美进入书店",0);
line[line.length]=Link(box[13][0],box[12][0]);
//----------
box[14]=new Array();
yLevel+=3;
box[14][0]=Textbox_Option(x(0),y(yLevel),"跟在她后面进入书店");
line[line.length]=Link(box[14][0],box[13][0]);
box[14][1]=Textbox_Option(x(2),y(yLevel),"不管她");
line[line.length]=Link(box[14][1],box[13][0]);
//----------
box[15]=new Array();
yLevel+=4;
CmtSummery="";
CmtSelect="";
CmtCaution="";
CmtOption="-提出送她回家";
CmtEvents="00000100";
CmtEvntIru="琴美好感度上升1点";
box[15][0]=Textbox_Selection_C(x(2),y(yLevel),"和琴美离开书店","5",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"和琴美离开书店",0);
line[line.length]=Link(box[15][0],Point(linx(1),liny(-1)),box[14][0]);
line[line.length]=Link(box[15][0],Point(linx(1),liny(-1)),box[14][1]);
line[line.length]=Link(box[15][0],box[12][1]);
//----------
box[16]=new Array();
yLevel+=3;
box[16][0]=Textbox_Option(x(1),y(yLevel),"提出送她回家");
line[line.length]=Link(box[16][0],box[15][0]);
box[16][1]=Textbox_Option(x(3),y(yLevel),"就在这里告别");
line[line.length]=Link(box[16][1],box[15][0]);
//----------
box[17]=new Array();
yLevel+=4;
box[17][0]=Textbox_Option(x(3),y(yLevel),"幻想世界（三）");
line[line.length]=Link(box[17][0],Point(linx(2),liny(-1)),box[16][0]);
line[line.length]=Link(box[17][0],Point(linx(2),liny(-1)),box[16][1]);
line[line.length]=Link(box[17][0],box[11][1]);
//----------
box[18]=new Array();
yLevel+=2;
box[18][0]=Textbox_Date(x(3),y(yLevel),"4月20日","bottom");
line[line.length]=Link(box[18][0],box[17][0]);
box[18][0].addTitle("点击转到第12页");
box[18][0].addClick(function(){gotopage(12)});

hdft["footer"]=Footer(liny(1),10);