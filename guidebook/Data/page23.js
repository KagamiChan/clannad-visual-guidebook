// CVG HTML Data Page23 Done By Shakugan_No_Kaluote 2008.4.9
hdft["header"]=Header("public","公共路线","Public Route","4月25日～4月26日","April 25th~April 26th");

var yLevel=0;

//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(4),y(yLevel),"4月25日","top");
//----------
box[1]=new Array();
yLevel+=2;
box[1][0]=Textbox_Condition(x(4),y(yLevel),"24日，朋也面对哭泣的渚");
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Selection(x(3),y(yLevel),"就这样注视着她","l|+未触发");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Selection(x(5),y(yLevel),"紧紧抱住她");
line[line.length]=Link(box[2][1],box[1][0]);
//----------
box[3]=new Array();
yLevel+=2;
box[3][0]=Textbox_Condition(x(3),y(yLevel),"18日，独自雕刻的风子");
line[line.length]=Link(box[3][0],box[2][0]);
//----------
box[4]=new Array();
yLevel+=3;
box[4][0]=Textbox_Selection(x(2),y(yLevel),"在看一会儿");
line[line.length]=Link(box[4][0],box[3][0]);
box[4][1]=Textbox_Selection(x(4),y(yLevel),"离开","r|+未触发");
line[line.length]=Link(box[4][1],box[3][0]);
//----------
box[5]=new Array();
yLevel+=2;
box[5][0]=Textbox_Selection(x(2),y(yLevel),"走廊中第N次遇到风子");
line[line.length]=Link(box[5][0],box[4][0]);
//----------
box[6]=new Array();
yLevel+=3;
box[6][0]=Textbox_Option(x(1),y(yLevel),"叫住她");
line[line.length]=Link(box[6][0],box[5][0]);
box[6][1]=Textbox_Option(x(3),y(yLevel),"暂时不管她");
line[line.length]=Link(box[6][1],box[5][0]);
//----------
box[7]=new Array();
yLevel+=2;
box[7][0]=Textbox_Option(x(1),y(yLevel),"风子大师（五）");
box[7][0].addLink("p23_retKFMT5");
box[7][0].addClick(function(){gotopage(49,"p49_KFMT5")});
line[line.length]=Link(box[7][0],box[6][0]);
//----------
box[8]=new Array();
yLevel+=5;
box[8][0]=Textbox_Selection(x(4),y(yLevel),"幻想世界（六）");
line[line.length]=Link(box[8][0],Point(linx(3),liny(-1)),Point(linx(2),liny(-2)),box[7][0]);
line[line.length]=Link(box[8][0],Point(linx(3),liny(-1)),Point(linx(2),liny(-2)),box[6][1]);
line[line.length]=Link(box[8][0],Point(linx(3),liny(-1)),box[4][1]);
line[line.length]=Link(box[8][0],box[2][1]);
//----------
box[9]=new Array();
yLevel+=2;
box[9][0]=Textbox_Date(x(4),y(yLevel),"4月26日","botton");
line[line.length]=Link(box[9][0],box[8][0]);
//----------
box[10]=new Array();
yLevel+=4;
box[10][0]=Textbox_Date(x(3),y(yLevel),"4月26日","top");
//----------
box[11]=new Array();
yLevel+=2;
box[11][0]=Textbox_Condition(x(3),y(yLevel),"24日，朋也面对哭泣的渚");
line[line.length]=Link(box[11][0],box[10][0]);
//----------
box[12]=new Array();
yLevel+=3;
box[12][0]=Textbox_Selection(x(1),y(yLevel),"紧紧抱住她");
line[line.length]=Link(box[12][0],box[11][0]);
box[12][1]=Textbox_Selection(x(5),y(yLevel),"就这样注视着她","r|+未触发");
line[line.length]=Link(box[12][1],box[11][0]);
//----------
box[13]=new Array();
yLevel+=2;
box[13][0]=Textbox_Condition(x(1),y(yLevel),"18日，独自雕刻的风子");
line[line.length]=Link(box[13][0],box[12][0]);
box[13][1]=Textbox_Condition(x(5),y(yLevel),"18日，独自雕刻的风子");
line[line.length]=Link(box[13][1],box[12][1]);
//----------
box[14]=new Array();
yLevel+=3;
box[14][0]=Textbox_Selection(x(0),y(yLevel),"再看一会儿");
line[line.length]=Link(box[14][0],box[13][0]);
box[14][1]=Textbox_Selection(x(2),y(yLevel),"离开","r|+未触发");
line[line.length]=Link(box[14][1],box[13][0]);
box[14][2]=Textbox_Selection(x(4),y(yLevel),"再看一会儿");
line[line.length]=Link(box[14][2],box[13][1]);
box[14][3]=Textbox_Selection(x(6),y(yLevel),"离开","r|+未触发");
line[line.length]=Link(box[14][3],box[13][1]);
//----------
box[15]=new Array();
yLevel+=2;
CmtSummery="朋也带着渚想要逃脱春原的纠缠，这时他在走廊里发现几个男生在远处看着他们这里。";
CmtSelect="选择[赶路要紧]，则完全进入渚线；选择[问问看他们]，则完全进入风子线，但不能达成风子TRUE ENDING。进入渚线后，可以选择攻略古河渚或者幸村俊夫。古河渚/幸村俊夫角色剧情攻略请参见P51～P55；伊吹风子角色剧情攻略请参见P43～P45。";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[15][0]=Textbox_Selection_C(x(0),y(yLevel),"男生们关于幽灵的话题（一）","1",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"男生们关于幽灵的话题（一）",0);
line[line.length]=Link(box[15][0],box[14][0]);
box[15][1]=Textbox_Condition(x(2),y(yLevel),"渚线完全进入");
box[15][1].addTitle("点击转到第51页");
box[15][1].addClick(function(){gotopage(51)});
line[line.length]=Link(box[15][1],box[14][1]);
CmtSummery="放学后，朋也回家的途中，发现在走廊里有几个男生在远处看着这里。";
CmtSelect="若24日在分支{朋也面对哭泣的渚}选择[就这样注视着她]，满足18日在分支{独自雕刻的风子}选择了[再看一会儿]的条件，同样会出现这个场景，但剧情和选项均有变化。选择[问问看他们]，则可完全进入风子线，并有机会达成风子TRUE ENDING或者风子GOOD ENDING，否则进入渚BAD ENDING。伊吹风子角色剧情攻略请参见P43～P45。";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[15][2]=Textbox_Selection_C(x(4),y(yLevel),"男生们关于幽灵的话题（二）","2",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"男生们关于幽灵的话题（二）",0);
line[line.length]=Link(box[15][2],box[14][2]);
box[15][3]=Textbox_Condition(x(6),y(yLevel),"渚 BAD ENDING");
line[line.length]=Link(box[15][3],box[14][3]);
//----------
box[16]=new Array();
yLevel+=3;
box[16][0]=Textbox_Option(x(0),y(yLevel),"问问看他们","l|风子|-渚");
line[line.length]=Link(box[16][0],box[15][0]);
box[16][1]=Textbox_Option(x(2),y(yLevel),"赶路要紧","r|-渚|风子");
line[line.length]=Link(box[16][1],box[15][0]);
box[16][2]=Textbox_Option(x(4),y(yLevel),"问问看他们","l|风子");
line[line.length]=Link(box[16][2],box[15][2]);
box[16][3]=Textbox_Option(x(6),y(yLevel),"不感兴趣","r|风子");
line[line.length]=Link(box[16][3],box[15][2]);
//----------
box[17]=new Array();
yLevel+=2;
box[17][0]=Textbox_Condition(x(0),y(yLevel),"风子线完全进入");
box[17][0].addTitle("点击转到第43页");
box[17][0].addClick(function(){gotopage(43)});
line[line.length]=Link(box[17][0],box[16][0]);
box[17][1]=Textbox_Condition(x(2),y(yLevel),"渚线完全进入");
box[17][1].addTitle("点击转到第51页");
box[17][1].addClick(function(){gotopage(51)});
line[line.length]=Link(box[17][1],box[16][1]);
box[17][2]=Textbox_Condition(x(4),y(yLevel),"风子线完全进入");
box[17][2].addTitle("点击转到第43页");
box[17][2].addClick(function(){gotopage(43)});
line[line.length]=Link(box[17][2],box[16][2]);
box[17][3]=Textbox_Condition(x(6),y(yLevel),"渚线完全进入");
box[17][3].addTitle("点击转到第51页");
box[17][3].addClick(function(){gotopage(51)});
line[line.length]=Link(box[17][3],box[16][3]);

new TextboxBase(linx(0),liny(7),"text","Padding","","btn");

hdft["footer"]=Footer(liny(3),23);