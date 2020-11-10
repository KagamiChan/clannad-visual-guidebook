// CVG HTML Data Page9 Done By Ligueston 2008.4.9
hdft["header"]=Header("public","公共路线","Public Route","4月18日（三）","April 18th~Part 3");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Block(x(0),y(yLevel),"A");
box[0][0].addLink("p9_A");
box[0][0].addClick(function(){gotopage(7,"p7_retA")});
box[0][1]=Textbox_Selection(x(2),y(yLevel),"逃课时遇到春原");
line[line.length]=Link(Point(linx(2),liny(0)-LINEBASEHEIGHT/2),Point(linx(2),liny(0)-LINEBASEHEIGHT/2));
board[board.length]=Board(liny(0),liny(35));
//----------
box[1]=new Array();
yLevel+=3;
box[1][0]=Textbox_Option(x(1),y(yLevel),"吓他一下");
line[line.length]=Link(box[1][0],box[0][1]);
box[1][1]=Textbox_Option(x(3),y(yLevel),"躲起来等他");
line[line.length]=Link(box[1][1],box[0][1]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Selection(x(2),y(yLevel),"犹豫是否进入图书馆");
line[line.length]=Link(box[2][0],box[1][0]);
line[line.length]=Link(box[2][0],box[1][1]);
line[line.length]=Link(Point(linx(2),liny(2)),box[2][0]);
//----------
box[3]=new Array();
yLevel+=3;
box[3][0]=Textbox_Option(x(0.5),y(yLevel),"回教室","l|琴美");
line[line.length]=Link(box[3][0],Point(linx(1.5),liny(-1)));
box[3][1]=Textbox_Option(x(3.5),y(yLevel),"进入图书馆","r|琴美");
line[line.length]=Link(box[3][1],Point(linx(1.5),liny(-1)));
//----------
box[4]=new Array();
yLevel+=2;
CmtSummery="正在看书的琴美丝毫没有注意她身边的情况，一副入神的模样。";
CmtSelect="此处只有选择[叫她名字]或仅剩这个选项时候才能通过：若您选择[翻动书页]或[戳她脸蛋]，则一段剧情过后会再次回到这个分支，这时您刚才选择的那个选项会消失，变成二项选择。若您还是不选择[叫她名字]，则会再次回到这里，这时只剩下一个选项，但是不用您再做出选择了（仅剩的选项不会出现）。";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[4][0]=Textbox_Selection_C(x(3.5),y(yLevel),"设法让琴美注意到自己","10",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"设法让琴美注意到自己",0);
line[line.length]=Link(box[4][0],box[3][1]);
//----------
box[5]=new Array();
yLevel+=3;
box[5][0]=Textbox_Option(x(1.5),y(yLevel),"翻动书页");
line[line.length]=Link(box[5][0],box[4][0]);
box[5][1]=Textbox_Option(x(3.5),y(yLevel),"叫她名字");
line[line.length]=Link(box[5][1],box[4][0]);
box[5][2]=Textbox_Option(x(5.5),y(yLevel),"戳她脸蛋");
line[line.length]=Link(box[5][2],box[4][0]);
//----------
box[6]=new Array();
yLevel+=3;
box[6][0]=Textbox_Selection(x(3.5),y(yLevel),"朋也内心的思索");
line[line.length]=Link(box[6][0],box[5][0]);
line[line.length]=Link(box[6][0],box[5][1]);
line[line.length]=Link(box[6][0],box[5][2]);
//----------
box[7]=new Array();
yLevel+=3;
box[7][0]=Textbox_Option(x(2.5),y(yLevel),"不能就这样不理她","l|琴美|-胜平");
line[line.length]=Link(box[7][0],box[6][0]);
box[7][1]=Textbox_Option(x(4.5),y(yLevel),"从此不再与她扯上关系","r|-胜平|琴美");
line[line.length]=Link(box[7][1],box[6][0]);
//----------
box[8]=new Array();
yLevel+=2;
box[8][0]=Textbox_Condition(x(2.5),y(yLevel),"古河重新创立话剧社");
line[line.length]=Link(box[8][0],box[7][0]);
//----------
box[9]=new Array();
yLevel+=3;
box[9][0]=Textbox_Selection(x(1.5),y(yLevel),"帮忙");
line[line.length]=Link(box[9][0],box[8][0]);
box[9][1]=Textbox_Selection(x(3.5),y(yLevel),"让她一个人做","r|+未触发");
line[line.length]=Link(box[9][1],box[8][0]);
//----------
box[10]=new Array();
yLevel+=2;
box[10][0]=Textbox_Selection(x(1.5),y(yLevel),"琴美的邀请和古河的约定");
line[line.length]=Link(box[10][0],box[9][0]);
//----------
box[11]=new Array();
yLevel+=3;
box[11][0]=Textbox_Option(x(1.5),y(yLevel),"今天还和以前一样与渚一起吃","l|渚|-琴美|-智代");
line[line.length]=Link(box[11][0],box[10][0]);
box[11][1]=Textbox_Option(x(3.5),y(yLevel),"在这里和琴美一起吃","r|-琴美|-智代|渚");
line[line.length]=Link(box[11][1],box[10][0]);

yLevel+=4;
line[line.length]=Link(Point(linx(3.5),liny(0)),Point(linx(0.5),liny(0)),box[3][0]);
line[line.length]=Link(Point(linx(3.5),liny(0)),Point(linx(2.5),liny(-1)),box[11][0]);
line[line.length]=Link(Point(linx(3.5),liny(0)),Point(linx(2.5),liny(-1)),box[11][1]);
line[line.length]=Link(Point(linx(3.5),liny(0)),Point(linx(4.5),liny(-6)),box[9][1]);
line[line.length]=Link(Point(linx(3.5),liny(0)),box[7][1]);
line[line.length]=Link(Point(linx(2),liny(0)),Point(linx(2),liny(0)));
//----------
box[12]=new Array();
yLevel+=4;
box[12][0]=Textbox_Block(x(0),y(yLevel),"B");
box[12][0].addLink("p9_B");
box[12][0].addClick(function(){gotopage(7,"p7_retB")});
CmtSummery="朋也想到资料室是个睡觉的好地方，几乎没有人会去那里。";
CmtSelect="若您没有进入渚、风子线的话，选择[还是回教室]吧，则19日还有一段剧情可以触发并由此进入有纪宁线；若已进入渚、风子线，那么这是您进入有纪宁线的唯一机会，选择[到那里去睡]并在之后的分支中选择[再说几句话]，同时19日的剧情降为不含选项且不影响进程（可选择触发）的普通剧情。";
CmtCaution="";
CmtOption="-到那里去睡";
CmtEvents="10000000";
CmtEvntIru="有纪宁参与64HIT";
box[12][1]=Textbox_Option_C(x(4),y(yLevel),"逃课选择睡觉的地方","11",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"逃课选择睡觉的地方",0);
line[line.length]=Link(Point(linx(4),liny(0)-LINEBASEHEIGHT/2),Point(linx(4),liny(0)-LINEBASEHEIGHT/2));
board[board.length]=Board(liny(0),liny(18));
//----------
box[13]=new Array();
yLevel+=3;
box[13][0]=Textbox_Option(x(3),y(yLevel),"到那里去睡","l|有纪宁");
line[line.length]=Link(box[13][0],box[12][1]);
box[13][1]=Textbox_Option(x(5),y(yLevel),"还是回教室吧");
line[line.length]=Link(box[13][1],box[12][1]);
//----------
box[14]=new Array();
yLevel+=2;
box[14][0]=Textbox_Selection(x(3),y(yLevel),"下课后，走进资料室的女孩");
line[line.length]=Link(box[14][0],box[13][0]);
//----------
box[15]=new Array();
yLevel+=3;
box[15][0]=Textbox_Option(x(2),y(yLevel),"再说几句话","l|有纪宁|-胜平");
line[line.length]=Link(box[15][0],box[14][0]);
box[15][1]=Textbox_Option(x(4),y(yLevel),"离开","r|-胜平|有纪宁");
line[line.length]=Link(box[15][1],box[14][0]);
//----------
box[16]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="";
CmtOption="-睡觉";
CmtEvents="00001000";
CmtEvntIru="风子大师内容根据此处选择会有所变化";
box[16][0]=Textbox_Selection_C(x(2),y(yLevel),"有纪宁离开后","12",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"有纪宁离开后",0);
line[line.length]=Link(box[16][0],box[15][0]);
//----------
box[17]=new Array();
yLevel+=3;
box[17][0]=Textbox_Option(x(1),y(yLevel),"睡觉");
line[line.length]=Link(box[17][0],box[16][0]);
box[17][1]=Textbox_Option(x(3),y(yLevel),"回教室");
line[line.length]=Link(box[17][1],box[16][0]);

yLevel+=4;
line[line.length]=Link(Point(linx(3),liny(0)),Point(linx(2),liny(-1)),box[17][0]);
line[line.length]=Link(Point(linx(3),liny(0)),Point(linx(2),liny(-1)),box[17][1]);
line[line.length]=Link(Point(linx(3),liny(0)),box[15][1]);
line[line.length]=Link(Point(linx(3),liny(0)),Point(linx(5),liny(0)),box[13][1]);
line[line.length]=Link(Point(linx(4),liny(0)),Point(linx(4),liny(0)));

hdft["footer"]=Footer(liny(1),9);