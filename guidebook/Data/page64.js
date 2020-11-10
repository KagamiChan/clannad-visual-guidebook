// CVG HTML Data Page64 Done By kyrios 2008.4.15
hdft["header"]=Header("nagisa","AFTER STORY","After Story","同栖篇（一）","Chapter of Conhabitation Life~Part 1");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(3),y(yLevel),"同栖篇","top");
//----------
box[1]=new Array();
yLevel+=2;
box[1][0]=Textbox_Selection(x(3),y(yLevel),"被拜托面包店的事情");
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Option(x(2),y(yLevel),"没有办法只能帮忙","l|秋生");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Option(x(4),y(yLevel),"不是不行是根本办不到","r|秋生");
line[line.length]=Link(box[2][1],box[1][0]);
//----------
box[3]=new Array();
yLevel+=2;
box[3][0]=Textbox_Condition(x(2),y(yLevel),"“光”获得数大于11");
line[line.length]=Link(box[3][0],box[2][0]);         
//----------
box[4]=new Array();
yLevel+=3;
box[4][0]=Textbox_Selection(x(1),y(yLevel),"是");
line[line.length]=Link(box[4][0],box[3][0]);
box[4][1]=Textbox_Selection(x(3),y(yLevel),"否");
line[line.length]=Link(box[4][1],box[3][0]);
//----------
box[5]=new Array();
yLevel+=2;
box[5][0]=Textbox_Selection(x(1),y(yLevel),"思考的事情");
line[line.length]=Link(box[5][0],box[4][0]);
//----------
box[6]=new Array();
yLevel+=3;
box[6][0]=Textbox_Option(x(0),y(yLevel),"秋生的事情");
line[line.length]=Link(box[6][0],box[5][0]);
box[6][1]=Textbox_Option(x(2),y(yLevel),"H的事情");
line[line.length]=Link(box[6][1],box[5][0]);
//----------
box[7]=new Array();
yLevel+=3;
box[7][0]=Textbox_Selection(x(1),y(yLevel),"清晨的问候");
line[line.length]=Link(box[7][0],box[6][0]);
line[line.length]=Link(box[7][0],box[6][1]);
//----------
box[8]=new Array();
yLevel+=3;
box[8][0]=Textbox_Option(x(0),y(yLevel),"回答说早上好");
line[line.length]=Link(box[8][0],box[7][0]);
box[8][1]=Textbox_Option(x(2),y(yLevel),"抱住");
line[line.length]=Link(box[8][1],box[7][0]);
CmtSummery="";
CmtSelect="";
CmtCaution="AFTER STORY继承古河渚学院篇线路的分支选择记录继续游戏,因此,在AFTER STORY中牵涉到学院篇的选择分支,都是最近一次完成渚线并保存记录的过程中,在相应分支做出的选择来判断的.";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[8][2]=Textbox_Condition_C(x(4),y(yLevel),"学院篇2日,对待早苗的心情","1",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"条件选择分支 AFTER STORY",0);
line[line.length]=Link(box[8][2],box[2][1]);
line[line.length]=Link(box[8][2],Point(linx(4),liny(-8)),box[4][1]);
//----------
box[9]=new Array();
yLevel+=3;
box[9][0]=Textbox_Option(x(1),y(yLevel),"秋生“光”获得");
line[line.length]=Link(box[9][0],box[8][0]);
line[line.length]=Link(box[9][0],box[8][1]);
box[9][1]=Textbox_Selection(x(3),y(yLevel),"喜欢");
line[line.length]=Link(box[9][1],box[8][2]);
box[9][2]=Textbox_Selection(x(5),y(yLevel),"我已经有渚了");
line[line.length]=Link(box[9][2],box[8][2]);
//----------
box[10]=new Array();
yLevel+=2;
box[10][0]=Textbox_Quit(x(1),y(yLevel),"秋生  Good Ending");
line[line.length]=Link(box[10][0],box[9][0]);
box[10][1]=Textbox_Selection(x(3),y(yLevel),"早苗询问的回答");
line[line.length]=Link(box[10][1],box[9][1]);
//----------
box[11]=new Array();
yLevel+=3;
box[11][0]=Textbox_Option(x(2),y(yLevel),"喜欢");
line[line.length]=Link(box[11][0],box[10][1]);
box[11][1]=Textbox_Option(x(4),y(yLevel),"不是那样的");
line[line.length]=Link(box[11][1],box[10][1]);
//----------
box[12]=new Array();
yLevel+=3;
box[12][0]=Textbox_Option(x(3),y(yLevel),"早苗“光”获得");
line[line.length]=Link(box[12][0],box[11][0]);
line[line.length]=Link(box[12][0],box[11][1]);
//----------
box[13]=new Array();
yLevel+=3;
box[13][0]=Textbox_Condition(x(3),y(yLevel),"学院篇20日，芳野寻找助手");
line[line.length]=Link(box[13][0],box[12][0]);
line[line.length]=Link(box[13][0],box[9][2]);
//----------
box[14]=new Array();
yLevel+=3;
box[14][0]=Textbox_Selection(x(2),y(yLevel),"帮忙");
line[line.length]=Link(box[14][0],box[13][0]);
box[14][1]=Textbox_Selection(x(4),y(yLevel),"拒绝");
line[line.length]=Link(box[14][1],box[13][0]);
//----------
box[15]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="";
CmtOption="+老实回答|+唱歌|-继续问下去";
CmtEvents="00000001";
CmtEvntIru="公子有条件参与毕业典礼。如果学园篇29日满足在古河面包店前遇见公子，则公子已确定出席毕业典礼，此处的选择没有影响";
box[15][0]=Textbox_Selection_C(x(2),y(yLevel),"芳野对往事的追问","2",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"芳野对往事的追问",0);
line[line.length]=Link(box[15][0],box[14][0]);
//----------
box[16]=new Array();
yLevel+=3;
box[16][0]=Textbox_Option(x(1),y(yLevel),"老实回答","l|芳野");
line[line.length]=Link(box[16][0],box[14][0]);
box[16][1]=Textbox_Option(x(3),y(yLevel),"随意糊弄过去","r|芳野");
line[line.length]=Link(box[16][1],box[14][0]);
//----------
box[17]=new Array();
yLevel+=2;
box[17][0]=Textbox_Selection(x(1),y(yLevel),"糟糕的谈话气氛");
line[line.length]=Link(box[17][0],box[16][0]);
//----------
box[18]=new Array();
yLevel+=3;
box[18][0]=Textbox_Option(x(1),y(yLevel),"唱歌","l|芳野");
line[line.length]=Link(box[18][0],box[17][0]);
box[18][1]=Textbox_Option(x(3),y(yLevel),"换个频道","r|芳野");
line[line.length]=Link(box[18][1],box[17][0]);
//----------
box[19]=new Array();
yLevel+=2;
box[19][0]=Textbox_Selection(x(1),y(yLevel),"听芳野谈自己的过去");
line[line.length]=Link(box[19][0],box[18][0]);
//----------
box[20]=new Array();
yLevel+=3;
box[20][0]=Textbox_Option(x(1),y(yLevel),"再继续问下去","l|芳野");
line[line.length]=Link(box[20][0],box[19][0]);
box[20][1]=Textbox_Option(x(3),y(yLevel),"同意","r|芳野");
line[line.length]=Link(box[20][1],box[19][0]);
//----------
box[21]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="";
CmtOption="-等到后天一起去";
CmtEvents="00000001";
CmtEvntIru="公子参与毕业典礼。如果学园篇29日满足在古河面包店前遇见公子，则公子已确定出席毕业典礼，此处的选择没有影响";
box[21][0]=Textbox_Selection_C(x(1),y(yLevel),"探望伊吹老师","3",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"探望伊吹老师",0);
line[line.length]=Link(box[21][0],box[20][0]);
//----------
box[22]=new Array();
yLevel+=3;
box[22][0]=Textbox_Option(x(1),y(yLevel),"等后天一起去");
line[line.length]=Link(box[22][0],box[21][0]);
box[22][1]=Textbox_Option(x(3),y(yLevel),"让渚一个人去");
line[line.length]=Link(box[22][1],box[21][0]);
//----------
line[line.length]=Link(Point(linx(2),liny(3)),box[22][0]);
line[line.length]=Link(Point(linx(2),liny(3)),box[22][1]);
line[line.length]=Link(Point(linx(2),liny(3)),Point(linx(4),liny(3)),Point(linx(4),liny(-2)),box[20][1]);
line[line.length]=Link(Point(linx(2),liny(3)),Point(linx(4),liny(3)),Point(linx(4),liny(-7)),box[18][1]);
line[line.length]=Link(Point(linx(2),liny(3)),Point(linx(4),liny(3)),Point(linx(4),liny(-12)),box[16][1]);
line[line.length]=Link(Point(linx(2),liny(3)),Point(linx(4),liny(3)),box[14][1]);
line[line.length]=Link(Point(linx(3),liny(3)),Point(linx(3),liny(3)));
line[line.length-1].addTitle("点击转到六十五页");
line[line.length-1].addClick(function(){gotopage(65)});

hdft["footer"]=Footer(liny(1),64);