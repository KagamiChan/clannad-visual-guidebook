// CVG HTML Data Page22 Done By Ligueston 2008.4.16
hdft["header"]=Header("public","公共路线","Public Route","4月24日（二）","April 24th~Part 2");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Block(x(0),y(yLevel),"B");
box[0][0].addLink("p22_B");
box[0][0].addClick(function(){gotopage(21,"p21_retB")});
box[0][1]=Textbox_Condition(x(3.5),y(yLevel),"23日，杏抓朋也跟她出去谈话");
line[line.length]=Link(Point(linx(3.5),liny(0)-LINEBASEHEIGHT/2),Point(linx(3.5),liny(0)-LINEBASEHEIGHT/2));
board[board.length]=Board(liny(0),liny(47));
//----------
box[1]=new Array();
yLevel+=3;
box[1][0]=Textbox_Selection(x(2.5),y(yLevel),"跟着去");
line[line.length]=Link(box[1][0],box[0][1]);
box[1][1]=Textbox_Selection(x(4.5),y(yLevel),"逃跑","r|+未触发");
line[line.length]=Link(box[1][1],box[0][1]);
//----------
box[2]=new Array();
yLevel+=2;
CmtSummery="在杏的鼓动下，朋也与椋在中庭享用了杏做的午餐。杏提出下次再为朋也做饭。";
CmtSelect="选择[真的？真的可以吗？]，则完全进入杏、椋线。藤林杏、藤林椋角色剧情攻略请参见P34～P36。";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[2][0]=Textbox_Selection_C(x(2.5),y(yLevel),"杏提出再帮忙做饭","5",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"杏提出再帮忙做饭",0);
line[line.length]=Link(box[2][0],box[1][0]);
//----------
box[3]=new Array();
yLevel+=3;
box[3][0]=Textbox_Option(x(1.5),y(yLevel),"真的？真的可以吗？","l|杏|椋|-芽衣|-有纪宁");
line[line.length]=Link(box[3][0],box[2][0]);
box[3][1]=Textbox_Option(x(3.5),y(yLevel),"不，不用了","r|-有纪宁|-芽衣|杏|椋");
line[line.length]=Link(box[3][1],box[2][0]);
//----------
box[4]=new Array();
yLevel+=2;
box[4][0]=Textbox_Condition(x(1.5),y(yLevel),"杏、椋线完全进入");
box[4][0].addTitle("点击转到第34页");
box[4][0].addClick(function(){gotopage(34)});
line[line.length]=Link(box[4][0],box[3][0]);
//----------
box[5]=new Array();
yLevel+=1;
box[5][0]=Textbox_Condition(x(3.5),y(yLevel),"23日，春原的妹妹打来电话");
line[line.length]=Link(box[5][0],box[3][1]);
//----------
box[6]=new Array();
yLevel+=3;
box[6][0]=Textbox_Selection(x(2.5),y(yLevel),"代春原接听");
line[line.length]=Link(box[6][0],box[5][0]);
box[6][1]=Textbox_Selection(x(4.5),y(yLevel),"不代他接听","r|+未触发");
line[line.length]=Link(box[6][1],box[5][0]);
//----------
box[7]=new Array();
yLevel+=2;
CmtSummery="昨晚与朋也在电话中的聊天让芽衣决定前来宿舍探望自己的哥哥。春原不想让妹妹看到自己颓废的样子。";
CmtSelect="选择[受理]，则完全进入春原兄妹线。春原阳平、春原芽衣角色剧情攻略请参见P38。";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[7][0]=Textbox_Selection_C(x(2.5),y(yLevel),"应对芽衣的方案","6",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"应对芽衣的方案",0);
line[line.length]=Link(box[7][0],box[6][0]);
//----------
box[8]=new Array();
yLevel+=3;
box[8][0]=Textbox_Option(x(1.5),y(yLevel),"受理","l|芽衣|-有纪宁|-胜平");
line[line.length]=Link(box[8][0],box[7][0]);
box[8][1]=Textbox_Option(x(3.5),y(yLevel),"逃掉","r|-有纪宁|-胜平|芽衣");
line[line.length]=Link(box[8][1],box[7][0]);
//----------
box[9]=new Array();
yLevel+=2;
box[9][0]=Textbox_Condition(x(1.5),y(yLevel),"兄妹线完全进入");
box[9][0].addTitle("点击转到第38页");
box[9][0].addClick(function(){gotopage(38)});
line[line.length]=Link(box[9][0],box[8][0]);
//----------
box[10]=new Array();
yLevel+=1;
CmtSummery="";
CmtSelect="{21日或22日，春原认识有纪宁}即在没有{进入渚、风子线}（具体请参见公共线路22日注释1）和{18日或19日，在资料室认识有纪宁}（具体请参见公共线路22日注释4）的前提下，如果在20日的分支{芳野寻求帮手}中选择[拒绝]或者未触发这个分支，则21日午后会触发一段没有分支的有纪宁的剧情，在此春原认识了有纪宁，并且22日午后可触发另一段有分支的有纪宁剧情。如果20日的分支中选择了[帮助]，并且在22日的分支{回答智代的询问}中选择[添麻烦了]或者未触发这个分支，那么21日春原认识有纪宁的剧情会延迟到22日发生，22日本来的剧情被替代（参考公共线路22日注释4）；如果在分支{回答智代的询问}中选择选择[不，不是这个意思]，则春原不会认识有纪宁。<br>只要触发了这段春原认识了有纪宁的剧情，就符合是的条件。（同公共线路23日注释3）<br>宫泽有纪宁角色剧情攻略请参见P31。";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[10][0]=Textbox_Condition_C(x(3.5),y(yLevel),"21日或22日，春原认识有纪宁","7",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"21日或22日，春原认识有纪宁",0);
line[line.length]=Link(box[10][0],box[8][1]);
line[line.length]=Link(box[10][0],box[6][1]);
//----------
box[11]=new Array();
yLevel+=3;
box[11][0]=Textbox_Selection(x(2.5),y(yLevel),"是");
line[line.length]=Link(box[11][0],box[10][0]);
box[11][1]=Textbox_Selection(x(4.5),y(yLevel),"否");
line[line.length]=Link(box[11][1],box[10][0]);
//----------
box[12]=new Array();
yLevel+=2;
box[12][0]=Textbox_Condition(x(2.5),y(yLevel),"22日，春原去见有纪宁，朋也陪同");
line[line.length]=Link(box[12][0],box[11][0]);
//----------
box[13]=new Array();
yLevel+=3;
box[13][0]=Textbox_Selection(x(1.5),y(yLevel),"去","l|+未触发");
line[line.length]=Link(box[13][0],box[12][0]);
box[13][1]=Textbox_Selection(x(3.5),y(yLevel),"不去");
line[line.length]=Link(box[13][1],box[12][0]);
//----------
box[14]=new Array();
yLevel+=2;
box[14][0]=Textbox_Condition(x(1.5),y(yLevel),"有纪宁线完全进入");
box[14][0].addTitle("点击转到第31页");
box[14][0].addClick(function(){gotopage(31)});
line[line.length]=Link(box[14][0],box[13][0]);
//----------
box[15]=new Array();
yLevel+=1;
box[15][0]=Textbox_Condition(x(3.5),y(yLevel),"23日，无聊的午后时光");
line[line.length]=Link(box[15][0],box[13][1]);
line[line.length]=Link(box[15][0],box[11][1]);
//----------
box[16]=new Array();
yLevel+=3;
box[16][0]=Textbox_Selection(x(2.5),y(yLevel),"转换下心情");
line[line.length]=Link(box[16][0],box[15][0]);
box[16][1]=Textbox_Selection(x(4.5),y(yLevel),"睡觉","r|+未触发");
line[line.length]=Link(box[16][1],box[15][0]);
//----------
box[17]=new Array();
yLevel+=2;
box[17][0]=Textbox_Selection(x(2.5),y(yLevel),"午后，走廊上又碰见风子");
line[line.length]=Link(box[17][0],box[16][0]);
//----------
box[18]=new Array();
yLevel+=3;
box[18][0]=Textbox_Option(x(1.5),y(yLevel),"叫住她");
line[line.length]=Link(box[18][0],box[17][0]);
box[18][1]=Textbox_Option(x(3.5),y(yLevel),"不管她");
line[line.length]=Link(box[18][1],box[17][0]);
//----------
box[19]=new Array();
yLevel+=2;
box[19][0]=Textbox_Option(x(1.5),y(yLevel),"风子大师（四）");
box[19][0].addLink("p22_retKFMT4");
box[19][0].addClick(function(){gotopage(49,"p49_KFMT4")});
line[line.length]=Link(box[19][0],box[18][0]);

line[line.length]=Link(Point(linx(2.5),liny(3)),box[19][0]);
line[line.length]=Link(Point(linx(2.5),liny(3)),box[18][1]);
line[line.length]=Link(Point(linx(2.5),liny(3)),Point(linx(4.5),liny(3)),box[16][1]);
line[line.length]=Link(Point(linx(3.5),liny(3)),Point(linx(3.5),liny(3)));

hdft["footer"]=Footer(liny(4),22);