// CVG HTML Data Page59 Done By Ligueston 2008.4.18
hdft["header"]=Header("gunfight","枪战游戏/业余棒球","Gunfight Game / Amateur BaseBall","4月25日","April 25th");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(3.5),y(yLevel),"4月25日","top");
//----------
box[1]=new Array();
yLevel+=2;
box[1][0]=Textbox_Condition(x(3.5),y(yLevel),"17日，春原挑战智代（四回目）");
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Selection(x(1.5),y(yLevel),"跟着他去");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Selection(x(3.5),y(yLevel),"不去管他","r|+未触发");
line[line.length]=Link(box[2][1],box[1][0]);
//----------
box[3]=new Array();
yLevel+=2;
box[3][0]=Textbox_Condition(x(1.5),y(yLevel),"22日，回答智代的询问");
line[line.length]=Link(box[3][0],box[2][0]);
//----------
box[4]=new Array();
yLevel+=3;
box[4][0]=Textbox_Selection(x(0.5),y(yLevel),"添麻烦了","l|+未触发");
line[line.length]=Link(box[4][0],box[3][0]);
box[4][1]=Textbox_Selection(x(2.5),y(yLevel),"不，不是这个意思");
line[line.length]=Link(box[4][1],box[4][0]);
//----------
box[5]=new Array();
yLevel+=2;
box[5][0]=Textbox_Selection(x(0.5),y(yLevel),"智代攻击的对策");
line[line.length]=Link(box[5][0],box[4][0]);
//----------
box[6]=new Array();
yLevel+=3;
box[6][0]=Textbox_Option(x(0.5),y(yLevel),"扣下了扳机");
line[line.length]=Link(box[6][0],box[5][0]);
box[6][1]=Textbox_Option(x(2.5),y(yLevel),"提出了忠告");
line[line.length]=Link(box[6][1],box[5][0]);
//----------
box[7]=new Array();
yLevel+=3;
box[7][0]=Textbox_Selection(x(3.5),y(yLevel),"对待椋的手段");
line[line.length]=Link(box[7][0],box[6][1]);
line[line.length]=Link(box[7][0],Point(linx(3.5),liny(-5)),box[4][1]);
line[line.length]=Link(box[7][0],box[2][1]);
//----------
box[8]=new Array();
yLevel+=3;
box[8][0]=Textbox_Option(x(1.5),y(yLevel),"比赛时要彻底地冷酷");
line[line.length]=Link(box[8][0],box[7][0]);
box[8][1]=Textbox_Option(x(3.5),y(yLevel),"真可怜，去阻止春原吧");
line[line.length]=Link(box[8][1],box[7][0]);
//----------
box[9]=new Array();
yLevel+=2;
box[9][0]=Textbox_Selection(x(3.5),y(yLevel),"午饭的解决方式");
line[line.length]=Link(box[9][0],box[8][1]);
//----------
box[10]=new Array();
yLevel+=3;
box[10][0]=Textbox_Option(x(1.5),y(yLevel),"两个人一起去食堂吃饭");
line[line.length]=Link(box[10][0],box[9][0]);
box[10][1]=Textbox_Option(x(3.5),y(yLevel),"不吃午饭");
line[line.length]=Link(box[10][1],box[9][0]);
box[10][2]=Textbox_Option(x(5.5),y(yLevel),"让春原去买饭");
line[line.length]=Link(box[10][2],box[9][0]);
//----------
box[11]=new Array();
yLevel+=3;
CmtSummery="朋也和春原揣摩着“敌人”的心理，他们在寻找难以被偷袭的决战场所……";
CmtSelect="此处只有选择[操场]或仅剩这个选项时候才能通过：若选择[体育馆]或[办公室]，则一段剧情过后会再次回到这个分支，这时您刚才选择的那个选项会消失，变成二项选择。若您还是不选择[操场]，则会再次回到这里，这时只剩下一个选项，但是不用您再做出选择了（仅剩的选项不会出现）。";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[11][0]=Textbox_Selection_C(x(3.5),y(yLevel),"前往的决战地点","1",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"前往决战地点",0);
line[line.length]=Link(box[11][0],box[10][0]);
line[line.length]=Link(box[11][0],box[10][1]);
line[line.length]=Link(box[11][0],box[10][2]);
//----------
box[12]=new Array();
yLevel+=3;
box[12][0]=Textbox_Option(x(1.5),y(yLevel),"体育馆");
line[line.length]=Link(box[12][0],box[11][0]);
box[12][1]=Textbox_Option(x(3.5),y(yLevel),"操场");
line[line.length]=Link(box[12][1],box[11][0]);
box[12][2]=Textbox_Option(x(5.5),y(yLevel),"办公室");
line[line.length]=Link(box[12][2],box[11][0]);
//----------
box[13]=new Array();
yLevel+=3;
box[13][0]=Textbox_Condition(x(3.5),y(yLevel),"今日，午饭的解决方式");
line[line.length]=Link(box[13][0],box[12][0]);
line[line.length]=Link(box[13][0],box[12][1]);
line[line.length]=Link(box[13][0],box[12][2]);
//----------
box[14]=new Array();
yLevel+=3;
box[14][0]=Textbox_Selection(x(1.5),y(yLevel),"两个人一起去食堂吃饭");
line[line.length]=Link(box[14][0],box[13][0]);
box[14][1]=Textbox_Selection(x(3.5),y(yLevel),"不吃午饭");
line[line.length]=Link(box[14][1],box[13][0]);
box[14][2]=Textbox_Selection(x(5.5),y(yLevel),"让春原去买饭");
line[line.length]=Link(box[14][2],box[13][0]);
//----------
box[15]=new Array();
yLevel+=4;
box[15][0]=Textbox_Option(x(1.5),y(yLevel),"枪战败北");
line[line.length]=Link(box[15][0],Point(linx(2.5),liny(-1)),box[14][0]);
line[line.length]=Link(box[15][0],Point(linx(2.5),liny(-1)),box[14][1]);
line[line.length]=Link(box[15][0],Point(linx(0.5),liny(-18)),box[8][0]);
line[line.length]=Link(box[15][0],box[6][0]);
box[15][1]=Textbox_Option(x(5.5),y(yLevel),"枪战平手");
line[line.length]=Link(box[15][1],box[14][2]);
//----------
box[16]=new Array();
yLevel+=3;
box[16][0]=Textbox_Option(x(3.5),y(yLevel),"幻想世界（六）");
line[line.length]=Link(box[16][0],box[15][0]);
line[line.length]=Link(box[16][0],box[15][1]);
//----------
box[17]=new Array();
yLevel+=2;
box[17][0]=Textbox_Date(x(3.5),y(yLevel),"4月26日","bottom");
box[17][0].addTitle("点击转到第60页");
box[17][0].addClick(function(){gotopage(60)});
line[line.length]=Link(box[17][0],box[16][0]);

hdft["footer"]=Footer(liny(2),59);