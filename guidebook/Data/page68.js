// CVG HTML Data Page68 Done By kyrios 2008.4.17
hdft["header"]=Header("nagisa","AFTER STORY","After Story","毕业典礼","Graduation Ceremony");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Condition(x(3),y(yLevel),"学院篇22日，坂道上遇到智代");
line[line.length]=Link(Point(linx(3),liny(0)-LINEBASEHEIGHT/2),Point(linx(3),liny(0)-LINEBASEHEIGHT/2));
//----------
box[1]=new Array();
yLevel+=3;
box[1][0]=Textbox_Selection(x(2),y(yLevel),"向智代搭话");
line[line.length]=Link(box[1][0],box[0][0]);
box[1][1]=Textbox_Selection(x(4),y(yLevel),"装做没看见","r|+未触发");
line[line.length]=Link(box[1][1],box[0][0]);
//----------
box[2]=new Array();
yLevel+=2;
box[2][0]=Textbox_Condition(x(2),y(yLevel),"学院篇28日,智代成为参赛伙伴");
line[line.length]=Link(box[2][0],box[1][0]);
//----------
box[3]=new Array();
yLevel+=3;
box[3][0]=Textbox_Selection(x(1),y(yLevel),"是");
line[line.length]=Link(box[3][0],box[2][0]);
box[3][1]=Textbox_Selection(x(3),y(yLevel),"否");
line[line.length]=Link(box[3][1],box[2][0]);
//----------
box[4]=new Array();
yLevel+=2;
box[4][0]=Textbox_Option(x(1),y(yLevel),"智代出席毕业典礼");
line[line.length]=Link(box[4][0],box[3][0]);
//----------
box[5]=new Array();
yLevel+=4;
box[5][0]=Textbox_Condition(x(3),y(yLevel),"学院篇22日,咨询指导老师的问题");
line[line.length]=Link(box[5][0],Point(linx(2),liny(-1)),box[3][1]);
line[line.length]=Link(box[5][0],Point(linx(2),liny(-1)),box[4][0]);
line[line.length]=Link(box[5][0],box[1][1]);
//----------
box[6]=new Array();
yLevel+=3;
box[6][0]=Textbox_Selection(x(2),y(yLevel),"和藤林姐妹商量");
line[line.length]=Link(box[6][0],box[5][0]);
box[6][1]=Textbox_Selection(x(4),y(yLevel),"和班主任商量");
line[line.length]=Link(box[6][1],box[5][0]);
//----------
box[7]=new Array();
yLevel+=2;
box[7][0]=Textbox_Option(x(2),y(yLevel),"杏,椋出席毕业典礼");
line[line.length]=Link(box[7][0],box[6][0]);
//----------
box[8]=new Array();
yLevel+=3;
box[8][0]=Textbox_Condition(x(3),y(yLevel),"学院篇23日，春原的妹妹打来电话");
line[line.length]=Link(box[8][0],box[7][0]);
line[line.length]=Link(box[8][0],box[6][1]);
//----------
box[9]=new Array();
yLevel+=3;
box[9][0]=Textbox_Selection(x(2),y(yLevel),"代春原接听");
line[line.length]=Link(box[9][0],box[8][0]);
box[9][1]=Textbox_Selection(x(4),y(yLevel),"不代他接听","r|+未触发");
line[line.length]=Link(box[9][1],box[8][0]);
//----------
box[10]=new Array();
yLevel+=2;
box[10][0]=Textbox_Condition(x(2),y(yLevel),"学院篇26日,前来探亲的芽衣");
line[line.length]=Link(box[10][0],box[9][0]);
//----------
box[11]=new Array();
yLevel+=3;
box[11][0]=Textbox_Selection(x(1),y(yLevel),"好的");
line[line.length]=Link(box[11][0],box[10][0]);
box[11][1]=Textbox_Selection(x(3),y(yLevel),"自己一个人去吧");
line[line.length]=Link(box[11][1],box[10][0]);
//----------
box[12]=new Array();
yLevel+=2;
box[12][0]=Textbox_Option(x(1),y(yLevel),"芽衣参加毕业典礼");
line[line.length]=Link(box[12][0],box[11][0]);
//----------
box[13]=new Array();
yLevel+=4;
box[13][0]=Textbox_Condition(x(3),y(yLevel),"学院篇26日,前来探亲的芽衣");
line[line.length]=Link(box[13][0],Point(linx(2),liny(-1)),box[12][0]);
line[line.length]=Link(box[13][0],Point(linx(2),liny(-1)),box[11][1]);
line[line.length]=Link(box[13][0],box[9][1]);
//----------
box[14]=new Array();
yLevel+=3;
box[14][0]=Textbox_Selection(x(2),y(yLevel),"好的");
line[line.length]=Link(box[14][0],box[13][0]);
box[14][1]=Textbox_Selection(x(4),y(yLevel),"自己一个人去吧","r|+未触发");
line[line.length]=Link(box[14][1],box[13][0]);
//----------
box[15]=new Array();
yLevel+=2;
box[15][0]=Textbox_Condition(x(4),y(yLevel),"学院篇28日,美佐枝成为参赛伙伴");
line[line.length]=Link(box[15][0],box[14][1]);
//----------
box[16]=new Array();
yLevel+=3;
box[16][0]=Textbox_Selection(x(3),y(yLevel),"是");
line[line.length]=Link(box[16][0],box[15][0]);
box[16][1]=Textbox_Selection(x(5),y(yLevel),"否");
line[line.length]=Link(box[16][1],box[15][0]);
//----------
box[17]=new Array();
yLevel+=3;
box[17][0]=Textbox_Option(x(3),y(yLevel),"美佐枝出席毕业典礼");
line[line.length]=Link(box[17][0],box[16][0]);
line[line.length]=Link(box[17][0],box[14][0]);
//----------
box[18]=new Array();
yLevel+=3;
box[18][0]=Textbox_Condition(x(3),y(yLevel),"同栖篇,探望伊吹老师");
line[line.length]=Link(box[18][0],box[17][0]);
line[line.length]=Link(box[18][0],box[16][1]);
//----------
box[19]=new Array();
yLevel+=3;
box[19][0]=Textbox_Selection(x(2),y(yLevel),"等到后天一起去");
line[line.length]=Link(box[19][0],box[18][0]);
box[19][1]=Textbox_Selection(x(4),y(yLevel),"让渚一起去","r|+未触发");
line[line.length]=Link(box[19][1],box[18][0]);
//----------
box[20]=new Array();
yLevel+=2;
box[20][0]=Textbox_Condition(x(4),y(yLevel),"学院篇29日,在古河面包店遇见公子");
line[line.length]=Link(box[20][0],box[19][1]);
//----------
box[21]=new Array();
yLevel+=3;
box[21][0]=Textbox_Selection(x(3),y(yLevel),"是");
line[line.length]=Link(box[21][0],box[20][0]);
box[21][1]=Textbox_Selection(x(5),y(yLevel),"否");
line[line.length]=Link(box[21][1],box[20][0]);
//----------
box[22]=new Array();
yLevel+=3;
box[22][0]=Textbox_Option(x(3),y(yLevel),"公子出席毕业典礼");
line[line.length]=Link(box[22][0],box[21][0]);
line[line.length]=Link(box[22][0],box[19][0]);
line[line.length]=Link(Point(linx(3),liny(2)),Point(linx(5),liny(2)),box[21][1]);
line[line.length]=Link(Point(linx(3),liny(2)),box[22][0]);
line[line.length]=Link(Point(linx(3),liny(2)),Point(linx(3),liny(2)));

hdft["footer"]=Footer(liny(1),68);