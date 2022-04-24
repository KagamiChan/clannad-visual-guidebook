// CVG HTML Data Page42 Done By Ligueston 2008.4.17
hdft["header"]=Header("kotomi","一之濑 琴美","Kotomi Ichinose","5月5日～琴美","May 5th~Kotomi");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(4),y(yLevel),"5月5日","top");
//----------
box[1]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="";
CmtOption="-告白";
CmtEvents="00000100";
CmtEvntIru="琴美好感度上升1点";
box[1][0]=Textbox_Selection_C(x(4),y(yLevel),"两个人的假日","1",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"两个人的假日",0);
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Option(x(3),y(yLevel),"还是算了");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Option(x(5),y(yLevel),"告白");
line[line.length]=Link(box[2][1],box[1][0]);
//----------
box[3]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="琴美线中一共有7次提升好感度的机会：15日或16日，在分支{图书馆，被奇怪的女孩邀请吃便当}选择[吃]（两次只能触发一次）；19日，分支{发现琴美进入书店}选择[跟在她后面进入书店]，分支{和琴美离开书店}选择[提出送她回家]；20日，分支{读书的邀请}选择[读书]；21日，分支{介意的琴美}选择[稍稍逗她玩一下]；29日，分支{假日中的安排}选择[外出]；今日，分支{两个人的假日}选择[告白]。<br>此处实际参与判定的只有6次，即除了最后一次以外，抓住了所有提升好感度的机会的话，就不会出现下面可能导致BAD ENDING的分支。";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[3][0]=Textbox_Condition_C(x(3),y(yLevel),"好感度大于5","2",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"好感度大于5",0);
line[line.length]=Link(box[3][0],box[2][0]);
//----------
box[4]=new Array();
yLevel+=3;
box[4][0]=Textbox_Selection(x(2),y(yLevel),"否");
line[line.length]=Link(box[4][0],box[3][0]);
box[4][1]=Textbox_Selection(x(4),y(yLevel),"是");
line[line.length]=Link(box[4][1],box[3][0]);
//----------
box[5]=new Array();
yLevel+=2;
box[5][0]=Textbox_Selection(x(2),y(yLevel),"绅士的嘱托");
line[line.length]=Link(box[5][0],box[4][0]);
//----------
box[6]=new Array();
yLevel+=3;
box[6][0]=Textbox_Selection(x(1),y(yLevel),"把绅士说的话告诉她","l|-琴美");
line[line.length]=Link(box[6][0],box[5][0]);
box[6][1]=Textbox_Selection(x(3),y(yLevel),"现在还是保持沉默吧","r|-琴美");
line[line.length]=Link(box[6][1],box[5][0]);
//----------
box[7]=new Array();
yLevel+=2;
box[7][0]=Textbox_Quit(x(1),y(yLevel),"琴美 BAD ENDDING");
line[line.length]=Link(box[7][0],box[6][0]);
//----------
box[8]=new Array();
yLevel+=1;
box[8][0]=Textbox_Date(x(4),y(yLevel),"5月8日","bottom");
line[line.length]=Link(box[8][0],box[6][1]);

line[line.length]=Link(box[8][0],Point(linx(5),liny(-5)),box[4][1]);
line[line.length]=Link(box[8][0],box[2][1]);
//----------
box[9]=new Array();
yLevel+=5;
box[9][0]=Textbox_Date(x(3.5),y(yLevel),"5月8日","top");
//----------
box[10]=new Array();
yLevel+=2;
box[10][0]=Textbox_Condition(x(3.5),y(yLevel),"23日，学校的广播");
line[line.length]=Link(box[10][0],box[9][0]);
//----------
box[11]=new Array();
yLevel+=3;
box[11][0]=Textbox_Selection(x(2.5),y(yLevel),"去办公室看看");
line[line.length]=Link(box[11][0],box[10][0]);
box[11][1]=Textbox_Selection(x(4.5),y(yLevel),"再等一会儿");
line[line.length]=Link(box[11][1],box[10][0]);
//----------
box[12]=new Array();
yLevel+=2;
box[12][0]=Textbox_Selection(x(2.5),y(yLevel),"老师的询问");
line[line.length]=Link(box[12][0],box[11][0]);
//----------
box[13]=new Array();
yLevel+=3;
box[13][0]=Textbox_Option(x(1.5),y(yLevel),"为什么问这个呢？");
line[line.length]=Link(box[13][0],box[12][0]);
box[13][1]=Textbox_Option(x(3.5),y(yLevel),"与其说是在交往…");
line[line.length]=Link(box[13][1],box[12][0]);
//----------
box[14]=new Array();
yLevel+=4;
box[14][0]=Textbox_Date(x(3.5),y(yLevel),"琴美","bottom");
line[line.length]=Link(box[14][0],Point(linx(2.5),liny(-1)),box[13][0]);
line[line.length]=Link(box[14][0],Point(linx(2.5),liny(-1)),box[13][1]);
line[line.length]=Link(box[14][0],box[11][1]);
//----------
box[15]=new Array();
yLevel+=5;
box[15][0]=Textbox_Date(x(4),y(yLevel),"琴美","top");
//----------
box[16]=new Array();
yLevel+=2;
box[16][0]=Textbox_Selection(x(4),y(yLevel),"放弃的意念");
line[line.length]=Link(box[16][0],box[15][0]);
//----------
box[17]=new Array();
yLevel+=3;
box[17][0]=Textbox_Option(x(3),y(yLevel),"继续","l|琴美");
line[line.length]=Link(box[17][0],box[16][0]);
box[17][1]=Textbox_Option(x(5),y(yLevel),"放弃","r|琴美");
line[line.length]=Link(box[17][1],box[16][0]);
//----------
box[18]=new Array();
yLevel+=2;
box[18][0]=Textbox_Selection(x(3),y(yLevel),"好友的忙碌");
line[line.length]=Link(box[18][0],box[17][0]);
//----------
box[19]=new Array();
yLevel+=3;
box[19][0]=Textbox_Option(x(2),y(yLevel),"安慰说『别放弃啊』","l|琴美");
line[line.length]=Link(box[19][0],box[18][0]);
box[19][1]=Textbox_Option(x(4),y(yLevel),"安慰说『只能放弃了』","r|琴美");
line[line.length]=Link(box[19][1],box[18][0]);
//----------
box[20]=new Array();
yLevel+=2;
box[20][0]=Textbox_Selection(x(2),y(yLevel),"深夜的执著");
line[line.length]=Link(box[20][0],box[19][0]);
//----------
box[21]=new Array();
yLevel+=3;
box[21][0]=Textbox_Option(x(1),y(yLevel),"继续","l|琴美");
line[line.length]=Link(box[21][0],box[20][0]);
box[21][1]=Textbox_Option(x(3),y(yLevel),"放弃","r|琴美");
line[line.length]=Link(box[21][1],box[20][0]);
//----------
box[22]=new Array();
yLevel+=2;
box[22][0]=Textbox_Option(x(1),y(yLevel),"琴美“光”获得");
line[line.length]=Link(box[22][0],box[21][0]);
//----------
box[23]=new Array();
yLevel+=1;
box[23][0]=Textbox_Quit(x(4),y(yLevel),"琴美 BAD ENDDING");
line[line.length]=Link(box[23][0],box[21][1]);
line[line.length]=Link(box[23][0],Point(linx(5),liny(-5)),box[19][1]);
line[line.length]=Link(box[23][0],box[17][1]);
//----------
box[24]=new Array();
yLevel+=1;
box[24][0]=Textbox_Quit(x(1),y(yLevel),"琴美 GOOD ENDDING");
line[line.length]=Link(box[24][0],box[22][0]);

hdft["footer"]=Footer(liny(1),42);