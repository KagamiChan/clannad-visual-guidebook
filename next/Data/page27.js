// CVG HTML Data Page27 Done By Shakugan_No_Kaluote 2008.4.17
hdft["header"]=Header("tomoyo","坂上 智代","Tomoyo Sakagami","4月25日～5月2日","April 25st~May 2nd");

var yLevel=0;

//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(3),y(yLevel),"4月25日","top");
//----------
box[1]=new Array();
yLevel+=2;
box[1][0]=Textbox_Selection(x(3),y(yLevel),"早晨朋也被智代唤醒");
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Option(x(2),y(yLevel),"开始准备");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Option(x(4),y(yLevel),"坚持要求接吻");
line[line.length]=Link(box[2][1],box[1][0]);
//----------
box[3]=new Array();
yLevel+=3;
box[3][0]=Textbox_Date(x(3),y(yLevel),"4月26日","bottom");
line[line.length]=Link(box[3][0],box[2][0]);
line[line.length]=Link(box[3][0],box[2][1]);
//----------
box[4]=new Array();
yLevel+=5;
box[4][0]=Textbox_Date(x(3),y(yLevel),"4月26日","top");
//----------
box[5]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="";
CmtOption="-在食堂里吃";
CmtEvents="10000000";
CmtEvntIru="幸村参与64HIT（前提为已完成过幸村线）";
box[5][0]=Textbox_Selection_C(x(3),y(yLevel),"选择约会吃饭的地方","1",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"选择约会吃饭的地方",0);
line[line.length]=Link(box[5][0],box[4][0]);
//----------
box[6]=new Array();
yLevel+=3;
box[6][0]=Textbox_Option(x(2),y(yLevel),"去外面吃");
line[line.length]=Link(box[6][0],box[5][0]);
box[6][1]=Textbox_Option(x(4),y(yLevel),"在食堂里吃");
line[line.length]=Link(box[6][1],box[5][0]);
//----------
box[7]=new Array();
yLevel+=3;
box[7][0]=Textbox_Date(x(3),y(yLevel),"5月2日","bottom");
line[line.length]=Link(box[7][0],box[6][0]);
line[line.length]=Link(box[7][0],box[6][1]);
//----------
box[8]=new Array();
yLevel+=5;
box[8][0]=Textbox_Date(x(3.5),y(yLevel),"5月2日","top");
//----------
box[9]=new Array();
yLevel+=2;
box[9][0]=Textbox_Selection(x(3.5),y(yLevel),"朋也对智代的幻想（一）");
line[line.length]=Link(box[9][0],box[8][0]);
//----------
box[10]=new Array();
yLevel+=3;
box[10][0]=Textbox_Option(x(2.5),y(yLevel),"那么，不如现在…");
line[line.length]=Link(box[10][0],box[9][0]);
box[10][1]=Textbox_Option(x(4.5),y(yLevel),"那你也想象一下吧");
line[line.length]=Link(box[10][1],box[9][0]);
//----------
box[11]=new Array();
yLevel+=2;
box[11][0]=Textbox_Selection(x(2.5),y(yLevel),"奇怪的要求");
line[line.length]=Link(box[11][0],box[10][0]);
//----------
box[12]=new Array();
yLevel+=3;
box[12][0]=Textbox_Option(x(1.5),y(yLevel),"做色色的事情");
line[line.length]=Link(box[12][0],box[11][0]);
box[12][1]=Textbox_Option(x(3.5),y(yLevel),"做柔软体操");
line[line.length]=Link(box[12][1],box[11][0]);
//----------
box[13]=new Array();
yLevel+=4;
box[13][0]=Textbox_Date(x(3.5),y(yLevel),"5月3日","bottom");
box[13][0].addTitle("点击转到第28页");
box[13][0].addClick(function(){gotopage(28)});
line[line.length]=Link(box[13][0],Point(linx(2.5),liny(-1)),box[12][0]);
line[line.length]=Link(box[13][0],Point(linx(2.5),liny(-1)),box[12][1]);
line[line.length]=Link(box[13][0],box[10][1]);

hdft["footer"]=Footer(liny(1),27);