// CVG HTML Data Page66 Done By kyrios 2008.4.17
hdft["header"]=Header("nagisa","AFTER STORY","After Story","同栖篇（三）","Chapter of Conhabitation Life~Part 3");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Condition(x(3.5),y(yLevel),"同栖篇,对父亲反映的不解");
line[line.length]=Link(Point(linx(3.5),liny(0)-LINEBASEHEIGHT/2),Point(linx(3.5),liny(0)-LINEBASEHEIGHT/2));
line[line.length-1].addTitle("点击转回六十五页");
line[line.length-1].addClick(function(){gotopage(65)});
//----------
box[1]=new Array();
yLevel+=3;
box[1][0]=Textbox_Selection(x(1.5),y(yLevel),"殴打他","l|+未触发");
line[line.length]=Link(box[1][0],box[0][0]);
box[1][1]=Textbox_Selection(x(3.5),y(yLevel),"忍耐");
line[line.length]=Link(box[1][1],box[0][0]);
//----------
box[2]=new Array();
yLevel+=2;
box[2][0]=Textbox_Quit(x(1.5),y(yLevel),"AFTER STORY BAD ENDING");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Selection(x(3.5),y(yLevel),"新年中已经成年的渚");
line[line.length]=Link(box[2][1],box[1][1]);
//----------
box[3]=new Array();
yLevel+=3;
box[3][0]=Textbox_Option(x(2.5),y(yLevel),"看看再说吧");
line[line.length]=Link(box[3][0],box[2][1]);
box[3][1]=Textbox_Option(x(4.5),y(yLevel),"是时候制止了");
line[line.length]=Link(box[3][1],box[2][1]);
//----------
box[4]=new Array();
yLevel+=2;
box[4][0]=Textbox_Selection(x(2.5),y(yLevel),"无法抉择的质问");
line[line.length]=Link(box[4][0],box[3][0]);
//----------
box[5]=new Array();
yLevel+=3;
box[5][0]=Textbox_Option(x(1.5),y(yLevel),"在意");
line[line.length]=Link(box[5][0],box[4][0]);
box[5][1]=Textbox_Option(x(3.5),y(yLevel),"不在意");
line[line.length]=Link(box[5][1],box[4][0]);
//----------
box[6]=new Array();
yLevel+=4;
box[6][0]=Textbox_Option(x(3.5),y(yLevel),"毕业典礼");
line[line.length]=Link(box[6][0],Point(linx(2.5),liny(-1)),box[5][0]);
line[line.length]=Link(box[6][0],Point(linx(2.5),liny(-1)),box[5][1]);
line[line.length]=Link(box[6][0],box[3][1]);
//----------
box[7]=new Array();
yLevel+=2;
box[7][0]=Textbox_Selection(x(3.5),y(yLevel),"对付秋生的纠缠");
line[line.length]=Link(box[7][0],box[6][0]);
//----------
box[8]=new Array();
yLevel+=3;
box[8][0]=Textbox_Option(x(2.5),y(yLevel),"帮忙");
line[line.length]=Link(box[8][0],box[7][0]);
box[8][1]=Textbox_Option(x(4.5),y(yLevel),"逃跑");
line[line.length]=Link(box[8][1],box[7][0]);
//----------
box[9]=new Array();
yLevel+=3;
box[9][0]=Textbox_Date(x(3.5),y(yLevel),"诞生篇","bottom");
line[line.length]=Link(box[9][0],box[8][0]);
line[line.length]=Link(box[9][0],box[8][1]);
box[9][0].addTitle("点击转到第67页");
box[9][0].addClick(function(){gotopage(67)});

hdft["footer"]=Footer(liny(1),(66));