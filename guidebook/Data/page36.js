// CVG HTML Data Page36 Done By goodbest 2008.4.18
hdft["header"]=Header("fujibayashi","藤林 杏/藤林 椋","Kyou Fujibayashi/Ryou Fujibayashi","5月7日","May 7th");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(3.5),y(yLevel),"5月7日","top");
//----------
box[1]=new Array();
yLevel+=2;
CmtSummery="感觉奇怪的朋也在放学后前去中庭看看情况，发现杏正在向春原告白。";
CmtSelect="选择[飞奔出去]，通过一系列条件分支后，进入杏GOOD ENDING；选择[走开]或者未通过任一项条件分支，将在13日进入BAD ENDING。";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[1][0]=Textbox_Selection_C(x(3.5),y(yLevel),"杏向春原告白","1",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"杏向春原告白",0);
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Option(x(2.5),y(yLevel),"飞奔出去","l|杏");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Option(x(4.5),y(yLevel),"走开","r|杏");
line[line.length]=Link(box[2][1],box[1][0]);
//----------
box[3]=new Array();
yLevel+=2;
box[3][0]=Textbox_Condition(x(2.5),y(yLevel),"28日，喜欢女孩的类型");
line[line.length]=Link(box[3][0],box[2][0]);
//----------
box[4]=new Array();
yLevel+=3;
box[4][0]=Textbox_Selection(x(1.5),y(yLevel),"喜欢长头发");
line[line.length]=Link(box[4][0],box[3][0]);
box[4][1]=Textbox_Selection(x(3.5),y(yLevel),"喜欢短头发");
line[line.length]=Link(box[4][1],box[3][0]);
//----------
box[5]=new Array();
yLevel+=2;
box[5][0]=Textbox_Condition(x(1.5),y(yLevel),"3日，杏的唐突建议");
line[line.length]=Link(box[5][0],box[4][0]);
//----------
box[6]=new Array();
yLevel+=3;
box[6][0]=Textbox_Selection(x(1.5),y(yLevel),"练习试试看");
line[line.length]=Link(box[6][0],box[5][0]);
box[6][1]=Textbox_Selection(x(3.5),y(yLevel),"默不作声地看着杏");
line[line.length]=Link(box[6][1],box[5][0]);
//----------
box[7]=new Array();
yLevel+=2;
box[7][0]=Textbox_Condition(x(1.5),y(yLevel),"4日，回忆当时椋的选择");
line[line.length]=Link(box[7][0],box[6][0]);
//----------
box[8]=new Array();
yLevel+=3;
box[8][0]=Textbox_Selection(x(1.5),y(yLevel),"紫水晶");
line[line.length]=Link(box[8][0],box[7][0]);
box[8][1]=Textbox_Selection(x(3.5),y(yLevel),"坦桑蓝");
line[line.length]=Link(box[8][1],box[7][0]);
//----------
box[9]=new Array();
yLevel+=2;
box[9][0]=Textbox_Condition(x(1.5),y(yLevel),"5日，近距离面对着椋");
line[line.length]=Link(box[9][0],box[8][0]);
//----------
box[10]=new Array();
yLevel+=3;
box[10][0]=Textbox_Selection(x(1.5),y(yLevel),"接吻");
line[line.length]=Link(box[10][0],box[9][0]);
box[10][1]=Textbox_Selection(x(3.5),y(yLevel),"不接吻");
line[line.length]=Link(box[10][1],box[9][0]);
//----------
box[11]=new Array();
yLevel+=2;
box[11][0]=Textbox_Option(x(1.5),y(yLevel),"杏“光”获得");
line[line.length]=Link(box[11][0],box[10][0]);
//----------
box[12]=new Array();
yLevel+=1;
box[12][0]=Textbox_Quit(x(3.5),y(yLevel),"公共 BAD ENDING");
line[line.length]=Link(box[12][0],box[10][1]);
line[line.length]=Link(box[12][0],Point(linx(4.5),liny(-5)),box[8][1]);
line[line.length]=Link(box[12][0],Point(linx(4.5),liny(-10)),box[6][1]);
line[line.length]=Link(box[12][0],Point(linx(4.5),liny(-15)),box[4][1]);
line[line.length]=Link(box[12][0],box[2][1]);
//----------
box[13]=new Array();
yLevel+=1;
box[13][0]=Textbox_Quit(x(1.5),y(yLevel),"杏 GOOD ENDING");
line[line.length]=Link(box[13][0],box[11][0]);

hdft["footer"]=Footer(liny(1),36);