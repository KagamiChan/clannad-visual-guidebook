// CVG HTML Data Page54 Done By Ligueston 2008.4.19
hdft["header"]=Header("nagisa","古河 渚/幸村 俊夫","Nagisa Furukawa / Toshio Yukimura","5月1日～5月10日","May 1st~May 10th");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(3),y(yLevel),"5月1日","top");
//----------
box[1]=new Array();
yLevel+=2;
box[1][0]=Textbox_Selection(x(3),y(yLevel),"提升好感的方法");
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Option(x(1),y(yLevel),"送礼物");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Option(x(3),y(yLevel),"邀请她约会");
line[line.length]=Link(box[2][1],box[1][0]);
box[2][2]=Textbox_Option(x(5),y(yLevel),"在耳边诉说爱意");
line[line.length]=Link(box[2][2],box[1][0]);
//----------
box[3]=new Array();
yLevel+=3;
box[3][0]=Textbox_Date(x(3),y(yLevel),"5月2日","bottom");
line[line.length]=Link(box[3][0],box[2][0]);
line[line.length]=Link(box[3][0],box[2][1]);
line[line.length]=Link(box[3][0],box[2][2]);
//----------
box[4]=new Array();
yLevel+=5;
box[4][0]=Textbox_Date(x(3),y(yLevel),"5月2日","top");
//----------
box[5]=new Array();
yLevel+=2;
CmtSummery="早苗亲切的问候明显使朋也有些不适应，让朋也很难为情。";
CmtSelect="选择[喜欢]，则进入AFTER STORY后，可得到早苗的“光”。";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[5][0]=Textbox_Selection_C(x(3),y(yLevel),"对待早苗的心情","1",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"对待早苗的心情",0);
line[line.length]=Link(box[5][0],box[4][0]);
//----------
box[6]=new Array();
yLevel+=3;
box[6][0]=Textbox_Option(x(2),y(yLevel),"喜欢");
line[line.length]=Link(box[6][0],box[5][0]);
box[6][1]=Textbox_Option(x(4),y(yLevel),"我已经有渚了");
line[line.length]=Link(box[6][1],box[5][0]);
//----------
box[7]=new Array();
yLevel+=3;
box[7][0]=Textbox_Option(x(3),y(yLevel),"开场动画");
line[line.length]=Link(box[7][0],box[6][0]);
line[line.length]=Link(box[7][0],box[6][1]);
//----------
box[8]=new Array();
yLevel+=2;
box[8][0]=Textbox_Option(x(3),y(yLevel),"幻想世界（八）");
line[line.length]=Link(box[8][0],box[7][0]);
//----------
box[9]=new Array();
yLevel+=2;
box[9][0]=Textbox_Date(x(3),y(yLevel),"5月5日","bottom");
line[line.length]=Link(box[9][0],box[8][0]);
//----------
box[10]=new Array();
yLevel+=5;
box[10][0]=Textbox_Date(x(3),y(yLevel),"5月5日","top");
//----------
box[11]=new Array();
yLevel+=2;
box[11][0]=Textbox_Option(x(3),y(yLevel),"幻想世界（九）");
line[line.length]=Link(box[11][0],box[10][0]);
//----------
box[12]=new Array();
yLevel+=2;
box[12][0]=Textbox_Date(x(3),y(yLevel),"5月6日","bottom");
line[line.length]=Link(box[12][0],box[11][0]);
//----------
box[13]=new Array();
yLevel+=5;
box[13][0]=Textbox_Date(x(3),y(yLevel),"5月10日","top");
//----------
box[14]=new Array();
yLevel+=2;
box[14][0]=Textbox_Selection(x(3),y(yLevel),"陷入剧本中的渚");
line[line.length]=Link(box[14][0],box[13][0]);
//----------
box[15]=new Array();
yLevel+=3;
box[15][0]=Textbox_Option(x(1),y(yLevel),"夺走剧本");
line[line.length]=Link(box[15][0],box[14][0]);
box[15][1]=Textbox_Option(x(3),y(yLevel),"夺走双唇");
line[line.length]=Link(box[15][1],box[14][0]);
box[15][2]=Textbox_Option(x(5),y(yLevel),"夺走心");
line[line.length]=Link(box[15][2],box[14][0]);
//----------
box[16]=new Array();
yLevel+=3;
box[16][0]=Textbox_Date(x(3),y(yLevel),"5月11日","bottom");
box[16][0].addTitle("点击转到55页");
box[16][0].addClick(function(){gotopage(55)});
line[line.length]=Link(box[16][0],box[15][0]);
line[line.length]=Link(box[16][0],box[15][1]);
line[line.length]=Link(box[16][0],box[15][2]);

hdft["footer"]=Footer(liny(1),54);