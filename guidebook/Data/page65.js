// CVG HTML Data Page65 Done By kyrios 2008.4.16
hdft["header"]=Header("public","AFTER STORY","After Story","同栖篇（二）","Chapter of Conhabitation Life~Part 2");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Selection(x(3.5),y(yLevel),"渚提出探望父亲的要求");
line[line.length]=Link(Point(linx(3.5),liny(0)-LINEBASEHEIGHT/2),Point(linx(3.5),liny(0)-LINEBASEHEIGHT/2));
line[line.length-1].addTitle("点击转到六十四页");
line[line.length-1].addClick(function(){gotopage(64)});
//----------
box[1]=new Array();
yLevel+=3;
box[1][0]=Textbox_Option(x(2.5),y(yLevel),"……。","l|直幸|汐|风子|公子");
line[line.length]=Link(box[1][0],box[0][0]);
box[1][1]=Textbox_Option(x(4.5),y(yLevel),"不去管她","r|公子|直幸|汐|风子");
line[line.length]=Link(box[1][1],box[0][0]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Selection(x(2.5),y(yLevel),"对父亲反应的不解");
line[line.length]=Link(box[2][0],box[1][0]);
//----------
box[3]=new Array();
yLevel+=3;
box[3][0]=Textbox_Option(x(1.5),y(yLevel),"殴打他","l|-公子|-直幸-|-汐|-风子");
line[line.length]=Link(box[3][0],box[2][0]);
box[3][1]=Textbox_Option(x(3.5),y(yLevel),"忍耐","r|-风子|-公子|-直幸|-汐");
line[line.length]=Link(box[3][1],box[2][0]);
//----------
box[4]=new Array();
yLevel+=4;
box[4][0]=Textbox_Selection(x(3.5),y(yLevel),"正在做作业的渚（一）");
line[line.length]=Link(box[4][0],Point(linx(2.5),liny(-1)),box[3][0]);
line[line.length]=Link(box[4][0],Point(linx(2.5),liny(-1)),box[3][1]);
line[line.length]=Link(box[4][0],box[1][1]);
//----------
box[5]=new Array();
yLevel+=3;
box[5][0]=Textbox_Option(x(2.5),y(yLevel),"从后面抱住她");
line[line.length]=Link(box[5][0],box[4][0]);
box[5][1]=Textbox_Option(x(4.5),y(yLevel),"老实看电视");
line[line.length]=Link(box[5][1],box[4][0]);
//----------
box[6]=new Array();
yLevel+=2;
box[6][0]=Textbox_Selection(x(2.5),y(yLevel),"正在做作业的渚（二）");
line[line.length]=Link(box[6][0],box[5][0]);
//----------
box[7]=new Array();
yLevel+=3;
box[7][0]=Textbox_Option(x(1.5),y(yLevel),"抱的更紧一些");
line[line.length]=Link(box[7][0],box[6][0]);
box[7][1]=Textbox_Option(x(3.5),y(yLevel),"这样会妨碍她的吧,保持这样就好了");
line[line.length]=Link(box[7][1],box[6][0]);
//----------
box[8]=new Array();
yLevel+=2;
box[8][0]=Textbox_Selection(x(1.5),y(yLevel),"正在做作业的渚（三）");
line[line.length]=Link(box[8][0],box[7][0]);
//----------
box[9]=new Array();
yLevel+=3;
box[9][0]=Textbox_Option(x(0.5),y(yLevel),"调查一下");
line[line.length]=Link(box[9][0],box[8][0]);
box[9][1]=Textbox_Option(x(2.5),y(yLevel),"这样做太失礼了");
line[line.length]=Link(box[9][1],box[8][0]);
//----------
box[10]=new Array();
yLevel+=5;
box[10][0]=Textbox_Condition(x(3.5),y(yLevel),"同栖篇，听芳野谈自己的过去");
line[line.length]=Link(box[10][0],Point(linx(2.5),liny(-1)),Point(linx(1.5),liny(-2)),box[9][0]);
line[line.length]=Link(box[10][0],Point(linx(2.5),liny(-1)),Point(linx(1.5),liny(-2)),box[9][1]);
line[line.length]=Link(box[10][0],Point(linx(2.5),liny(-1)),box[7][1]);
line[line.length]=Link(box[10][0],box[5][1]);
//----------
box[11]=new Array();
yLevel+=3;
box[11][0]=Textbox_Selection(x(2.5),y(yLevel),"再继续问下去");
line[line.length]=Link(box[11][0],box[10][0]);
box[11][1]=Textbox_Selection(x(4.5),y(yLevel),"同意","r|+未触发");
line[line.length]=Link(box[11][1],box[10][0]);
//----------
box[12]=new Array();
yLevel+=2;
box[12][0]=Textbox_Option(x(2.5),y(yLevel),"芳野“光”获得");
line[line.length]=Link(box[12][0],box[11][0]);
//----------
box[13]=new Array();
yLevel+=3;
box[13][0]=Textbox_Selection(x(3.5),y(yLevel),"具有诱惑力的选择");
line[line.length]=Link(box[13][0],box[12][0]);
line[line.length]=Link(box[13][0],box[11][1]);

//----------
box[14]=new Array();
yLevel+=3;
box[14][0]=Textbox_Option(x(1.5),y(yLevel),"秋生私藏的H书");
line[line.length]=Link(box[14][0],box[13][0]);
box[14][1]=Textbox_Option(x(3.5),y(yLevel),"早苗的内衣");
line[line.length]=Link(box[14][1],box[13][0]);
box[14][2]=Textbox_Option(x(5.5),y(yLevel),"什么都不要");
line[line.length]=Link(box[14][2],box[13][0]);
//----------
box[15]=new Array();
yLevel+=2;
box[15][0]=Textbox_Condition(x(1.5),y(yLevel),"生活第一天的兴奋");
line[line.length]=Link(box[15][0],box[14][0]);
//----------
box[16]=new Array();
yLevel+=3;
box[16][0]=Textbox_Selection(x(0.5),y(yLevel),"不暴露就没关系");
line[line.length]=Link(box[16][0],box[15][0]);
box[16][1]=Textbox_Selection(x(2.5),y(yLevel),"自己冷静下来");
line[line.length]=Link(box[16][1],box[15][0]);
//----------
box[17]=new Array();
yLevel+=2;
box[17][0]=Textbox_Condition(x(0.5),y(yLevel),"庆祝形式的选择");
line[line.length]=Link(box[17][0],box[16][0]);
//----------
box[18]=new Array();
yLevel+=3;
box[18][0]=Textbox_Selection(x(0.5),y(yLevel),"H的事情");
line[line.length]=Link(box[18][0],box[17][0]);
box[18][1]=Textbox_Selection(x(2.5),y(yLevel),"算了,话语就可以了","r|+未触发");
line[line.length]=Link(box[18][1],box[17][0]);
//----------
box[19]=new Array();
yLevel+=2;
box[19][0]=Textbox_Condition(x(0.5),y(yLevel),"6月5日,独自打发闲暇时间");
line[line.length]=Link(box[19][0],box[18][0]);
//----------
box[20]=new Array();
yLevel+=3;
box[20][0]=Textbox_Selection(x(0.5),y(yLevel),"翻柜子");
line[line.length]=Link(box[20][0],box[19][0]);
box[20][1]=Textbox_Selection(x(2.5),y(yLevel),"看电视");
line[line.length]=Link(box[20][1],box[19][0]);
//----------
box[21]=new Array();
yLevel+=2;
box[21][0]=Textbox_Selection(x(0.5),y(yLevel),"面对渚的主动让步");
line[line.length]=Link(box[21][0],box[20][0]);
//----------
box[22]=new Array();
yLevel+=3;
box[22][0]=Textbox_Option(x(0.5),y(yLevel),"说想看");
line[line.length]=Link(box[22][0],box[21][0]);
box[22][1]=Textbox_Option(x(2.5),y(yLevel),"到这停手吧");
line[line.length]=Link(box[22][1],box[21][0]);
//----------
line[line.length]=Link(Point(linx(1.5),liny(3)),box[22][0]);
line[line.length]=Link(Point(linx(1.5),liny(3)),box[22][1]);
line[line.length]=Link(Point(linx(1.5),liny(3)),Point(linx(3.5),liny(3)),Point(linx(3.5),liny(-2)),box[20][1]);
line[line.length]=Link(Point(linx(1.5),liny(3)),Point(linx(3.5),liny(3)),Point(linx(3.5),liny(-7)),box[18][1]);
line[line.length]=Link(Point(linx(1.5),liny(3)),Point(linx(3.5),liny(3)),Point(linx(3.5),liny(-12)),box[16][1]);
line[line.length]=Link(Point(linx(1.5),liny(3)),Point(linx(3.5),liny(3)),Point(linx(3.5),liny(-14)),box[14][1]);
line[line.length]=Link(Point(linx(1.5),liny(3)),Point(linx(3.5),liny(3)),Point(linx(3.5),liny(-17)),box[14][2]);
line[line.length]=Link(Point(linx(3.5),liny(3)),Point(linx(3.5),liny(3)));
line[line.length-1].addTitle("点击转到六十六页");
line[line.length-1].addClick(function(){gotopage(66)});

hdft["footer"]=Footer(liny(4),(65));
