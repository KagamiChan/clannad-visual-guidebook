// CVG HTML Data Page46 Done By Shakugan_No_Kaluote 2008.4.20
hdft["header"]=Header("fuuko","伊吹 风子","Fuuko Ibuki","风子","Fuuko");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(3),y(yLevel),"风子","top");
//----------
box[1]=new Array();
yLevel+=2;
box[1][0]=Textbox_Condition(x(3),y(yLevel),"24日，朋也面对哭泣的渚");
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Selection(x(1),y(yLevel),"就这样注视着她","l|+未触发");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Selection(x(5),y(yLevel),"紧紧抱住她");
line[line.length]=Link(box[2][1],box[1][0]);
//----------
box[3]=new Array();
yLevel+=2;
box[3][0]=Textbox_Selection(x(1),y(yLevel),"夜晚的宿舍（一）");
line[line.length]=Link(box[3][0],box[2][0]);
box[3][1]=Textbox_Selection(x(5),y(yLevel),"夜晚的宿舍（二）");
line[line.length]=Link(box[3][1],box[2][1]);
//----------
box[4]=new Array();
yLevel+=3;
box[4][0]=Textbox_Option(x(0),y(yLevel),"可以接吻吗？");
line[line.length]=Link(box[4][0],box[3][0]);
box[4][1]=Textbox_Option(x(2),y(yLevel),"可以继续这么待着吗？");
line[line.length]=Link(box[4][1],box[3][0]);
box[4][2]=Textbox_Option(x(4),y(yLevel),"快点给我闪开","l|-风子");
line[line.length]=Link(box[4][2],box[3][1]);
box[4][3]=Textbox_Option(x(6),y(yLevel),"可以继续这么待着吗？","r|-风子");
line[line.length]=Link(box[4][3],box[3][1]);
//----------
box[5]=new Array();
yLevel+=2;
box[5][0]=Textbox_Quit(x(4),y(yLevel),"风子 BAD ENDING");
line[line.length]=Link(box[5][0],box[4][2]);
//----------
box[6]=new Array();
yLevel+=1;
box[6][0]=Textbox_Condition(x(1),y(yLevel),"11日，熟睡的风子");
line[line.length]=Link(box[6][0],box[4][0]);
line[line.length]=Link(box[6][0],box[4][1]);
box[6][1]=Textbox_Condition(x(6),y(yLevel),"11日，熟睡的风子");
line[line.length]=Link(box[6][1],box[4][3]);
//----------
box[7]=new Array();
yLevel+=3;
box[7][0]=Textbox_Selection(x(0),y(yLevel),"代替他");
line[line.length]=Link(box[7][0],box[6][0]);
box[7][1]=Textbox_Selection(x(2),y(yLevel),"交给大叔");
line[line.length]=Link(box[7][1],box[6][0]);
box[7][2]=Textbox_Selection(x(4),y(yLevel),"交给大叔");
line[line.length]=Link(box[7][2],box[6][1]);
box[7][3]=Textbox_Selection(x(6),y(yLevel),"代替他");
line[line.length]=Link(box[7][3],box[6][1]);
//----------
box[8]=new Array();
yLevel+=3;
box[8][0]=Textbox_Condition(x(0),y(yLevel),"风子，夜晚的宿舍（一）");
line[line.length]=Link(box[8][0],box[7][0]);
box[8][1]=Textbox_Quit(x(3),y(yLevel),"风子 BAD ENDING");
line[line.length]=Link(box[8][1],box[7][1]);
line[line.length]=Link(box[8][1],box[7][2]);
//----------
box[9]=new Array();
yLevel+=3;
box[9][0]=Textbox_Selection(x(0),y(yLevel),"可以继续这么待着吗？");
line[line.length]=Link(box[9][0],box[8][0]);
box[9][1]=Textbox_Selection(x(2),y(yLevel),"可以接吻吗？");
line[line.length]=Link(box[9][1],box[8][0]);
//----------
box[10]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="如果在24日的分支{朋也面对哭泣得渚}中选择[紧紧抱住她]（和渚成为恋人），就只能达成风子GOOD ENDING（参考公共线路24日注释4）。这种情况下，23日至25日最多可能3次在校舍走廊遇见风子（23日，{走廊中看到风子}；24日，{午后，走廊上又碰见风子}；25日，{走廊上第N次遇见风子}），3次中至少有一次选择[叫住她]，是达成风子GOOD ENDING的必要条件，如果一次也没有叫住她，则进入风子BAD ENDING。<br>如果在24日的分支{朋也面对哭泣得渚}中选择[就这样注视着她]（没有和渚成为恋人），则可以达成风子TRUE ENDING（在风子一章的分支{夜晚的校舍（一）}选择[可以接吻吗？]）。这种情况下23日至25日就只有2次在校舍走廊遇见风子的可能（25日的机会消失）。同样，两次至少有一次选择[叫住她]，才能达成风子TRUE ENDING/GOOD ENDING。";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[10][0]=Textbox_Condition_C(x(2),y(yLevel),"23日，走廊中看到风子","1",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"23日，走廊中看到风子",0);
line[line.length]=Link(box[10][0],box[9][1]);
//----------
box[11]=new Array();
yLevel+=3;
box[11][0]=Textbox_Selection(x(2),y(yLevel),"不管她","l|+未触发");
line[line.length]=Link(box[11][0],box[10][0]);
box[11][1]=Textbox_Selection(x(4),y(yLevel),"叫住她");
line[line.length]=Link(box[11][1],box[10][0]);
//----------
box[12]=new Array();
yLevel+=2;
box[12][0]=Textbox_Condition(x(2),y(yLevel),"24日，午后，走廊上又碰见风子");
line[line.length]=Link(box[12][0],box[11][0]);
box[12][1]=Textbox_Quit(x(4),y(yLevel),"风子 TRUE ENDING");
line[line.length]=Link(box[12][1],box[11][1]);
//----------
box[13]=new Array();
yLevel+=3;
box[13][0]=Textbox_Selection(x(2),y(yLevel),"不管她","l|+未触发");
line[line.length]=Link(box[13][0],box[12][0]);
box[13][1]=Textbox_Selection(x(4),y(yLevel),"叫住她");
line[line.length]=Link(box[13][1],box[12][0]);
//----------
box[14]=new Array();
yLevel+=2;
box[14][0]=Textbox_Condition(x(2),y(yLevel),"25日，走廊中第N次遇到风子");
line[line.length]=Link(box[14][0],box[13][0]);
box[14][1]=Textbox_Quit(x(4),y(yLevel),"风子 TRUE ENDING");
line[line.length]=Link(box[14][1],box[13][1]);
//----------
box[15]=new Array();
yLevel+=3;
box[15][0]=Textbox_Selection(x(2),y(yLevel),"暂时不管她");
line[line.length]=Link(box[15][0],box[14][0]);
box[15][1]=Textbox_Selection(x(4),y(yLevel),"叫住她");
line[line.length]=Link(box[15][1],box[14][0]);
//----------
box[16]=new Array();
yLevel+=2;
box[16][0]=Textbox_Condition(x(0),y(yLevel),"23日，走廊中看到风子");
line[line.length]=Link(box[16][0],box[8][0]);
box[16][1]=Textbox_Quit(x(2),y(yLevel),"风子 BAD ENDING");
line[line.length]=Link(box[16][1],box[15][0]);
box[16][2]=Textbox_Quit(x(4),y(yLevel),"风子 TRUE ENDING");
line[line.length]=Link(box[16][2],box[15][1]);
box[16][3]=Textbox_Condition(x(6),y(yLevel),"23日，走廊中看到风子");
line[line.length]=Link(box[16][3],box[7][3]);
//----------
box[17]=new Array();
yLevel+=3;
box[17][0]=Textbox_Selection(x(0),y(yLevel),"不管她","l|+未触发");
line[line.length]=Link(box[17][0],box[16][0]);
box[17][1]=Textbox_Selection(x(2),y(yLevel),"叫住她");
line[line.length]=Link(box[17][1],box[16][0]);
box[17][2]=Textbox_Selection(x(4),y(yLevel),"叫住她");
line[line.length]=Link(box[17][2],box[16][3]);
box[17][3]=Textbox_Selection(x(6),y(yLevel),"不管她","r|+未触发");
line[line.length]=Link(box[17][3],box[16][3]);
//----------
box[18]=new Array();
yLevel+=3;
box[18][0]=Textbox_Condition(x(0),y(yLevel),"24日，午后，走廊上又碰见风子");
line[line.length]=Link(box[18][0],box[17][0]);
box[18][1]=Textbox_Quit(x(3),y(yLevel),"风子 GOOD ENDING");
line[line.length]=Link(box[18][1],box[17][1]);
line[line.length]=Link(box[18][1],box[17][2]);
box[18][2]=Textbox_Condition(x(6),y(yLevel),"24日，午后，走廊上又碰见风子");
line[line.length]=Link(box[18][2],box[17][3]);
//----------
box[19]=new Array();
yLevel+=3;
box[19][0]=Textbox_Selection(x(0),y(yLevel),"不管她","l|+未触发");
line[line.length]=Link(box[19][0],box[18][0]);
box[19][1]=Textbox_Selection(x(2),y(yLevel),"叫住她");
line[line.length]=Link(box[19][1],box[18][0]);
box[19][2]=Textbox_Selection(x(4),y(yLevel),"叫住她");
line[line.length]=Link(box[19][2],box[18][2]);
box[19][3]=Textbox_Selection(x(6),y(yLevel),"不管她","r|+未触发");
line[line.length]=Link(box[19][3],box[18][2]);
//----------
box[20]=new Array();
yLevel+=2;
box[20][0]=Textbox_Quit(x(6),y(yLevel),"风子 BAD ENDING");
line[line.length]=Link(box[20][0],box[19][3]);
//----------
box[21]=new Array();
yLevel+=1;
box[21][0]=Textbox_Condition(x(0),y(yLevel),"25日，走廊中第N次遇到风子");
line[line.length]=Link(box[21][0],box[19][0]);
box[21][1]=Textbox_Quit(x(3),y(yLevel),"风子 GOOD ENDING");
line[line.length]=Link(box[21][1],box[19][1]);
line[line.length]=Link(box[21][1],box[19][2]);
//----------
box[22]=new Array();
yLevel+=3;
box[22][0]=Textbox_Selection(x(0),y(yLevel),"暂时不管她");
line[line.length]=Link(box[22][0],box[21][0]);
box[22][1]=Textbox_Selection(x(2),y(yLevel),"叫住她");
line[line.length]=Link(box[22][1],box[21][0]);
//----------
box[23]=new Array();
yLevel+=2;
box[23][0]=Textbox_Quit(x(0),y(yLevel),"风子 BAD ENDING");
line[line.length]=Link(box[23][0],box[22][0]);
box[23][1]=Textbox_Quit(x(2),y(yLevel),"风子 GOOD ENDING");
line[line.length]=Link(box[23][1],box[22][1]);

hdft["footer"]=Footer(liny(1),46);