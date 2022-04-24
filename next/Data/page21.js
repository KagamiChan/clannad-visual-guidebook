// CVG HTML Data Page21 Done By Shakugan_No_Kaluote 2008.4.6
hdft["header"]=Header("public","公共路线","Public Route","4月24日（一）","April 24th~Part 1");

var yLevel=0;

//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(3),y(yLevel),"4月24日","top");
//----------
box[1]=new Array();
yLevel+=2;
box[1][0]=Textbox_Condition(x(3),y(yLevel),"21日，迟到后的午间");
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Selection(x(0),y(yLevel),"看看窗外");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Selection(x(6),y(yLevel),"赶去学生食堂","r|+未触发");
line[line.length]=Link(box[2][1],box[1][0]);
//----------
box[3]=new Array();
yLevel+=2;
box[3][0]=Textbox_Block(x(0),y(yLevel),"A");
line[line.length]=Link(box[3][0],box[2][0]);
box[3][0].addLink("p21_retA");
box[3][0].addClick(function(){gotolink("p21_A")});
box[3][1]=Textbox_Condition(x(6),y(yLevel),"22日，被春原利用，智代陷入窘境");
line[line.length]=Link(box[3][1],box[2][1]);
//----------
box[4]=new Array();
yLevel+=3;
box[4][0]=Textbox_Selection(x(3),y(yLevel),"该阻止他了");
line[line.length]=Link(box[4][0],box[3][1]);
box[4][1]=Textbox_Selection(x(6),y(yLevel),"和春原一起享受","r|+未触发");
line[line.length]=Link(box[4][1],box[3][1]);
//----------
box[5]=new Array();
yLevel+=2;
box[5][0]=Textbox_Condition(x(3),y(yLevel),"23日，打架的借口");
line[line.length]=Link(box[5][0],box[4][0]);
box[5][1]=Textbox_Option(x(6),y(yLevel),"春原的玩笑（三）");
box[5][1].addLink("p21_retSNJK3");
box[5][1].addClick(function(){gotopage(25,"p25_SNJK3");})
line[line.length]=Link(box[5][1],box[4][1]);
//----------
box[6]=new Array();
yLevel+=3;
box[6][0]=Textbox_Selection(x(1),y(yLevel),"那家伙以话剧社为目标");
line[line.length]=Link(box[6][0],box[5][0]);
box[6][1]=Textbox_Selection(x(3),y(yLevel),"那家伙休学了很长时间");
line[line.length]=Link(box[6][1],box[5][0]);
box[6][2]=Textbox_Selection(x(5),y(yLevel),"那家伙吃过豆沙包","r|+未触发");
line[line.length]=Link(box[6][2],box[5][0]);
//----------
box[7]=new Array();
yLevel+=2;
CmtSummery="智代并没有在午饭时来到教室，有些迷茫的朋也思考着智代对自己的意义";
CmtSelect="选择[说不定只是想和智代在一起]，则完全进入智代线，坂上智代角色剧情攻略参见P27～P51。";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[7][0]=Textbox_Selection_C(x(1),y(yLevel),"对智代的想法","1",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"对智代的想法",0);
line[line.length]=Link(box[7][0],box[6][0]);
//----------
box[8]=new Array();
yLevel+=3;
box[8][0]=Textbox_Option(x(1),y(yLevel),"说不定只是想和智代在一起","l|智代");
line[line.length]=Link(box[8][0],box[7][0]);
box[8][1]=Textbox_Option(x(3),y(yLevel),"说不定只是把她当作解闷的人罢了","r|智代");
line[line.length]=Link(box[8][1],box[7][0]);
//----------
box[9]=new Array();
yLevel+=1
box[9][0]=Textbox_Block(x(6),y(yLevel),"B");
box[9][0].addLink("p21_retB");
box[9][0].addClick(function(){gotopage(22,"p22_B")});
line[line.length]=Link(box[9][0],box[5][1]);
//----------
box[10]=new Array();
yLevel+=1
box[10][0]=Textbox_Condition(x(1),y(yLevel),"智代线完全进入");
box[10][0].addTitle("点击转到第27页");
box[10][0].addClick(function(){gotopage(27)});
line[line.length]=Link(box[10][0],box[8][0]);
//----------
box[11]=new Array();
yLevel+=2;
CmtSummery="春原在玩具店门口被神秘男子拉去参加枪战游戏，春原邀请朋也一起参加。";
CmtSelect="选择[参加]，则进入枪战游戏/业余棒球线。枪战游戏/业余棒球剧情攻略请参见P59～P61。";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[11][0]=Textbox_Selection_C(x(3),y(yLevel),"红色闪电佐利恩","2",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"红色闪电佐利恩",0);
line[line.length]=Link(box[11][0],box[8][1]);
line[line.length]=Link(box[11][0],box[9][0]);
line[line.length]=Link(box[11][0],Point(linx(3),liny(-1)),Point(linx(4),liny(-6)),box[6][1]);
line[line.length]=Link(box[11][0],Point(linx(3),liny(-1)),Point(linx(4),liny(-6)),box[6][2]);
//----------
box[12]=new Array();
yLevel+=3;
box[12][0]=Textbox_Option(x(3),y(yLevel),"不参加","l|胜平");
line[line.length]=Link(box[12][0],box[11][0]);
box[12][1]=Textbox_Option(x(5),y(yLevel),"参加","r|胜平");
line[line.length]=Link(box[12][1],box[11][0]);
//----------
box[13]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="此处{胜平线进入}即21日，在分支{受害者遗忘的简历}选择[查清地址后送给他]；22日，在分支{课前，牡丹的处理问题}选择[把牡丹丢还给杏]或者未触发这个分支，在分支{春原求朋也帮忙装备寝室}选择[不帮忙]。没有选择相应选项或者没有触发上述第一、三个分支的情况均属于否；第一、三个分支选择正确但没有触发第二个分支的情况属于是。<br>柊胜平角色剧情攻略请参见P37。";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[13][0]=Textbox_Condition_C(x(3),y(yLevel),"胜平线进入","3",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"胜平线进入",0);
line[line.length]=Link(box[13][0],box[12][0]);
box[13][1]=Textbox_Condition(x(5),y(yLevel),"枪战游戏/业余棒球线完全进入");
box[13][1].addTitle("点击转到第59页");
box[13][1].addClick(function(){gotopage(59)});
line[line.length]=Link(box[13][1],box[12][1]);
//----------
box[14]=new Array();
yLevel+=3;
box[14][0]=Textbox_Condition(x(0),y(yLevel),"23日，面对渚时的困惑");
line[line.length]=Link(box[14][0],box[3][0]);
box[14][1]=Textbox_Selection(x(3),y(yLevel),"否");
line[line.length]=Link(box[14][1],box[13][0]);
box[14][2]=Textbox_Selection(x(5),y(yLevel),"是");
line[line.length]=Link(box[14][2],box[13][0]);
//----------
box[15]=new Array();
yLevel+=2;
box[15][0]=Textbox_Condition(x(5),y(yLevel),"胜平线完全进入");
box[15][0].addTitle("点击转到第37页");
box[15][0].addClick(function(){gotopage(37)});
line[line.length]=Link(box[15][0],box[14][2]);
//----------
box[16]=new Array();
yLevel+=1;
box[16][0]=Textbox_Selection(x(0),y(yLevel),"不是的");
line[line.length]=Link(box[16][0],box[14][0]);
box[16][1]=Textbox_Selection(x(2),y(yLevel),"大概是这样吧");
line[line.length]=Link(box[16][1],box[14][0]);
//----------
box[17]=new Array();
yLevel+=2;
CmtSummery="渚因为话剧社的事遭搁浅而再次受到了打击，站在身边的朋也应该做些什么呢？";
CmtSelect="选择[紧紧抱住她]则继续渚线，否则退出渚线。风子线的攻略中，选择[就这样注视着她]，是达成TRUE ENDING的必要条件之一。";
CmtCaution="";
CmtOption="-就这样注视着她";
CmtEvents="00001000";
CmtEvntIru="风子大师达成必选";
box[17][0]=Textbox_Selection_C(x(0),y(yLevel),"朋也面对哭泣的渚","4",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"朋也面对哭泣的渚",0);
line[line.length]=Link(box[17][0],box[16][0]);
//----------
box[18]=new Array();
yLevel+=3;
box[18][0]=Textbox_Option(x(0),y(yLevel),"就这样注视着她","l|-渚");
line[line.length]=Link(box[18][0],box[17][0]);
box[18][1]=Textbox_Option(x(2),y(yLevel),"紧紧抱住她","r|-渚");
line[line.length]=Link(box[18][1],box[17][0]);
//----------
box[19]=new Array();
yLevel+=4;
box[19][0]=Textbox_Date(x(3),y(yLevel),"4月25日","bottom");
line[line.length]=Link(box[19][0],Point(linx(1),liny(-1)),box[18][0]);
line[line.length]=Link(box[19][0],Point(linx(1),liny(-1)),box[18][1]);
line[line.length]=Link(box[19][0],box[14][1]);
box[19][0].addTitle("点击转到第23页");
box[19][0].addClick(function(){gotopage(23)});
//----------
box[20]=new Array();
yLevel+=5;
box[20][0]=Textbox_Block(x(0),y(yLevel),"A");
box[20][0].addLink("p21_A");
box[20][0].addClick(function(){gotolink("p21_retA")});
box[20][1]=Textbox_Condition(x(3.5),y(yLevel),"23日，无聊的午后时光");
line[line.length]=Link(Point(linx(3.5),liny(0)-LINEBASEHEIGHT/2),Point(linx(3.5),liny(0)-LINEBASEHEIGHT/2));
board[board.length]=Board(liny(0),liny(14));
//----------
box[21]=new Array();
yLevel+=3;
box[21][0]=Textbox_Selection(x(2.5),y(yLevel),"转换一下心情");
line[line.length]=Link(box[21][0],box[20][1]);
box[21][1]=Textbox_Selection(x(4.5),y(yLevel),"睡觉","r|+未触发");
line[line.length]=Link(box[21][1],box[20][1]);
//----------
box[22]=new Array();
yLevel+=2;
box[22][0]=Textbox_Selection(x(2.5),y(yLevel),"午后，走廊上又碰见风子");
line[line.length]=Link(box[22][0],box[21][0]);
//----------
box[23]=new Array();
yLevel+=3;
box[23][0]=Textbox_Option(x(1.5),y(yLevel),"叫住她");
line[line.length]=Link(box[23][0],box[22][0]);
box[23][1]=Textbox_Option(x(3.5),y(yLevel),"不管她");
line[line.length]=Link(box[23][1],box[22][0]);
//----------
box[24]=new Array();
yLevel+=2;
box[24][0]=Textbox_Option(x(1.5),y(yLevel),"风子大师（四）");
box[24][0].addLink("p21_retKFMT4");
box[24][0].addClick(function(){gotopage(49,"p49_KFMT4")});
line[line.length]=Link(box[24][0],box[23][0]);

line[line.length]=Link(Point(linx(2.5),liny(3)),box[24][0]);
line[line.length]=Link(Point(linx(2.5),liny(3)),box[23][1]);
line[line.length]=Link(Point(linx(2.5),liny(3)),Point(linx(4.5),liny(3)),box[21][1]);
line[line.length]=Link(Point(linx(3.5),liny(3)),Point(linx(3.5),liny(3)));

hdft["footer"]=Footer(liny(5),21);