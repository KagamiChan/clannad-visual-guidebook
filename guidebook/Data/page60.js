// CVG HTML Data Page60 Done By Ligueston 2008.4.18
hdft["header"]=Header("gunfight","枪战游戏/业余棒球","Gunfight Game / Amateur BaseBall","4月26日～4月27日","April 26th~April 27th");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(4),y(yLevel),"4月26日","top");
//----------
box[1]=new Array();
yLevel+=2;
box[1][0]=Textbox_Selection(x(4),y(yLevel),"关于幽灵的话题");
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Option(x(3),y(yLevel),"问问看");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Option(x(5),y(yLevel),"没兴趣");
line[line.length]=Link(box[2][1],box[1][0]);
//----------
box[3]=new Array();
yLevel+=3;
box[3][0]=Textbox_Condition(x(4),y(yLevel),"23日，春原的妹妹打来电话");
line[line.length]=Link(box[3][0],box[2][0]);
line[line.length]=Link(box[3][0],box[2][1]);
//----------
box[4]=new Array();
yLevel+=3;
box[4][0]=Textbox_Selection(x(3),y(yLevel),"不代他接听");
line[line.length]=Link(box[4][0],box[3][0]);
box[4][1]=Textbox_Selection(x(5),y(yLevel),"代春原接听");
line[line.length]=Link(box[4][1],box[3][0]);
//----------
box[5]=new Array();
yLevel+=2;
box[5][0]=Textbox_Condition(x(3),y(yLevel),"25日，智代攻击的对策");
line[line.length]=Link(box[5][0],box[4][0]);
//----------
box[6]=new Array();
yLevel+=3;
box[6][0]=Textbox_Selection(x(2),y(yLevel),"提出了忠告");
line[line.length]=Link(box[6][0],box[5][0]);
box[6][1]=Textbox_Selection(x(4),y(yLevel),"扣下了扳机","r|+未触发");
line[line.length]=Link(box[6][1],box[5][0]);
//----------
box[7]=new Array();
yLevel+=2;
box[7][0]=Textbox_Condition(x(2),y(yLevel),"枪战平手");
line[line.length]=Link(box[7][0],box[6][0]);
//----------
box[8]=new Array();
yLevel+=3;
box[8][0]=Textbox_Selection(x(1),y(yLevel),"是");
line[line.length]=Link(box[8][0],box[7][0]);
box[8][1]=Textbox_Selection(x(3),y(yLevel),"否");
line[line.length]=Link(box[8][1],box[7][0]);
//----------
box[9]=new Array();
yLevel+=2;
box[9][0]=Textbox_Date(x(1),y(yLevel),"4月27日","bottom");
line[line.length]=Link(box[9][0],box[8][0]);
//----------
box[10]=new Array();
yLevel+=1;
box[10][0]=Textbox_Condition(x(4),y(yLevel),"公共 BAD ENDING");
line[line.length]=Link(box[10][0],box[8][1]);
line[line.length]=Link(box[10][0],Point(linx(5),liny(-5)),box[6][1]);
line[line.length]=Link(box[10][0],box[4][1]);
//----------
box[11]=new Array();
yLevel+=5;
box[11][0]=Textbox_Date(x(3),y(yLevel),"4月27日","top");
//----------
box[12]=new Array();
yLevel+=2;
box[12][0]=Textbox_Option(x(3),y(yLevel),"幻想世界（七）");
line[line.length]=Link(box[12][0],box[11][0]);
//----------
box[13]=new Array();
yLevel+=2;
box[13][0]=Textbox_Date(x(3),y(yLevel),"4月28日","bottom");
box[13][0].addTitle("点击转到第61页");
box[13][0].addClick(function(){gotopage(61)});
line[line.length]=Link(box[13][0],box[12][0]);

hdft["footer"]=Footer(liny(2),60);