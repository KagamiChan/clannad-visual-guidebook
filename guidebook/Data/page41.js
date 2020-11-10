// CVG HTML Data Page41 Done By Ligueston 2008.4.17
hdft["header"]=Header("kotomi","一之濑 琴美","Kotomi Ichinose","4月25日～5月4日","April 25th~May 4th");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(3),y(yLevel),"4月25日","top");
//----------
box[1]=new Array();
yLevel+=2;
box[1][0]=Textbox_Selection(x(3),y(yLevel),"杏的邀请");
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Option(x(2),y(yLevel),"老实地呆在这里");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Option(x(4),y(yLevel),"当然要逃走");
line[line.length]=Link(box[2][1],box[1][0]);
//----------
box[3]=new Array();
yLevel+=3;
box[3][0]=Textbox_Date(x(3),y(yLevel),"4月29日","bottom");
line[line.length]=Link(box[3][0],box[2][0]);
line[line.length]=Link(box[3][0],box[2][1]);
//----------
box[4]=new Array();
yLevel+=5;
box[4][0]=Textbox_Date(x(3),y(yLevel),"4月29日","top");
//----------
box[5]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="";
CmtOption="-外出";
CmtEvents="00000100";
CmtEvntIru="琴美好感度上升1点";
box[5][0]=Textbox_Selection_C(x(3),y(yLevel),"假日中的安排","1",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"假日中的安排",0);
line[line.length]=Link(box[5][0],box[4][0]);
//----------
box[6]=new Array();
yLevel+=3;
box[6][0]=Textbox_Option(x(2),y(yLevel),"就这样在家呆着");
line[line.length]=Link(box[6][0],box[5][0]);
box[6][1]=Textbox_Option(x(4),y(yLevel),"外出");
line[line.length]=Link(box[6][1],box[5][0]);
//----------
box[7]=new Array();
yLevel+=3;
box[7][0]=Textbox_Date(x(3),y(yLevel),"4月30日","bottom");
line[line.length]=Link(box[7][0],box[6][0]);
line[line.length]=Link(box[7][0],box[6][1]);
//----------
box[8]=new Array();
yLevel+=5;
box[8][0]=Textbox_Date(x(3),y(yLevel),"4月30日","top");
//----------
box[9]=new Array();
yLevel+=2;
box[9][0]=Textbox_Selection(x(3),y(yLevel),"琴美的危机");
line[line.length]=Link(box[9][0],box[8][0]);
//----------
box[10]=new Array();
yLevel+=3;
box[10][0]=Textbox_Option(x(2),y(yLevel),"去帮助琴美","l|琴美");
line[line.length]=Link(box[10][0],box[9][0]);
box[10][1]=Textbox_Option(x(4),y(yLevel),"先看看情况","r|琴美");
line[line.length]=Link(box[10][1],box[9][0]);
//----------
box[11]=new Array();
yLevel+=2;
box[11][0]=Textbox_Date(x(2),y(yLevel),"5月3日","bottom");
line[line.length]=Link(box[11][0],box[10][0]);
box[11][1]=Textbox_Quit(x(4),y(yLevel),"琴美 BAD ENDDING");
line[line.length]=Link(box[11][1],box[10][1]);
//----------
box[12]=new Array();
yLevel+=5;
box[12][0]=Textbox_Date(x(3),y(yLevel),"5月3日","top");
//----------
box[13]=new Array();
yLevel+=2;
box[13][0]=Textbox_Selection(x(3),y(yLevel),"绅士的询问");
line[line.length]=Link(box[13][0],box[12][0]);
//----------
box[14]=new Array();
yLevel+=3;
box[14][0]=Textbox_Option(x(2),y(yLevel),"虽然现在还算不上…","l|琴美");
line[line.length]=Link(box[14][0],box[13][0]);
box[14][1]=Textbox_Option(x(4),y(yLevel),"仅仅是朋友","r|琴美");
line[line.length]=Link(box[14][1],box[13][0]);
//----------
box[15]=new Array();
yLevel+=2;
box[15][0]=Textbox_Date(x(2),y(yLevel),"5月4日","bottom");
line[line.length]=Link(box[15][0],box[14][0]);
box[15][1]=Textbox_Quit(x(4),y(yLevel),"琴美 BAD ENDDING");
line[line.length]=Link(box[15][1],box[14][1]);
//----------
box[16]=new Array();
yLevel+=5;
box[16][0]=Textbox_Date(x(3.5),y(yLevel),"5月4日","top");
//----------
box[17]=new Array();
yLevel+=2;
box[17][0]=Textbox_Selection(x(3.5),y(yLevel),"杏的吐槽搅乱了约会");
line[line.length]=Link(box[17][0],box[16][0]);
//----------
box[18]=new Array();
yLevel+=3;
box[18][0]=Textbox_Option(x(2.5),y(yLevel),"把多余的人赶走");
line[line.length]=Link(box[18][0],box[17][0]);
box[18][1]=Textbox_Option(x(4.5),y(yLevel),"这样或许也还不错");
line[line.length]=Link(box[18][1],box[17][0]);
//----------
box[19]=new Array();
yLevel+=2;
box[19][0]=Textbox_Selection(x(2.5),y(yLevel),"对付杏一行人的突然出现");
line[line.length]=Link(box[19][0],box[18][0]);
//----------
box[20]=new Array();
yLevel+=3;
box[20][0]=Textbox_Option(x(1.5),y(yLevel),"这是两人的约会啊","l|-琴美");
line[line.length]=Link(box[20][0],box[19][0]);
box[20][1]=Textbox_Option(x(3.5),y(yLevel),"这样或许也还不错","r|-琴美");
line[line.length]=Link(box[20][1],box[19][0]);
//----------
box[21]=new Array();
yLevel+=2;
box[21][0]=Textbox_Quit(x(1.5),y(yLevel),"琴美 BAD ENDDING");
line[line.length]=Link(box[21][0],box[20][0]);
//----------
box[22]=new Array();
yLevel+=1;
box[22][0]=Textbox_Date(x(3.5),y(yLevel),"5月5日","bottom");
line[line.length]=Link(box[22][0],box[20][1]);
line[line.length]=Link(box[22][0],box[18][1]);
box[22][0].addTitle("点击转到第42页");
box[22][0].addClick(function(){gotopage(42)});

hdft["footer"]=Footer(liny(2),41);