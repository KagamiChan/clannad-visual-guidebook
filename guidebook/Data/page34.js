// CVG HTML Data Page34 Done By goodbest 2008.4.17
hdft["header"]=Header("fujibayashi","藤林 杏/藤林 椋","Kyou Fujibayashi/Ryou Fujibayashi","4月25日～5月1日","April 25th~May 1st");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(3),y(yLevel),"4月25日","top");
//----------
box[1]=new Array();
yLevel+=2;
box[1][0]=Textbox_Selection(x(3),y(yLevel),"校门口的约定");
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Option(x(3),y(yLevel),"老老实实地去校门口","l|杏|椋");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Option(x(5),y(yLevel),"找个地方消磨时间","r|杏|椋");
line[line.length]=Link(box[2][1],box[1][0]);
//----------
box[3]=new Array();
yLevel+=2;
box[3][0]=Textbox_Selection(x(3),y(yLevel),"朋也和椋的关系（一）");
line[line.length]=Link(box[3][0],box[2][0]);
box[3][1]=Textbox_Quit(x(5),y(yLevel),"公共 BAD ENDING");
line[line.length]=Link(box[3][1],box[2][1]);
//----------
box[4]=new Array();
yLevel+=3;
box[4][0]=Textbox_Option(x(1),y(yLevel),"朋友");
line[line.length]=Link(box[4][0],box[3][0]);
box[4][1]=Textbox_Option(x(3),y(yLevel),"恋人");
line[line.length]=Link(box[4][1],box[3][0]);
box[4][2]=Textbox_Option(x(5),y(yLevel),"夫妇");
line[line.length]=Link(box[4][2],box[3][0]);
//----------
box[5]=new Array();
yLevel+=3;
box[5][0]=Textbox_Date(x(3),y(yLevel),"4月26日","bottom");
line[line.length]=Link(box[5][0],box[4][0]);
line[line.length]=Link(box[5][0],box[4][1]);
line[line.length]=Link(box[5][0],box[4][2]);
//----------
box[6]=new Array();
yLevel+=5;
box[6][0]=Textbox_Date(x(3),y(yLevel),"4月26日","top");
//----------
box[7]=new Array();
yLevel+=2;
box[7][0]=Textbox_Selection(x(3),y(yLevel),"面对椋的主动告白");
line[line.length]=Link(box[7][0],box[6][0]);
//----------
box[8]=new Array();
yLevel+=3;
box[8][0]=Textbox_Option(x(2),y(yLevel),"如果这样也没关系的话...","l|杏|椋");
line[line.length]=Link(box[8][0],box[7][0]);
box[8][1]=Textbox_Option(x(4),y(yLevel),"所以交往的事还是...","r|杏|椋");
line[line.length]=Link(box[8][1],box[7][0]);
//----------
box[9]=new Array();
yLevel+=2;
box[9][0]=Textbox_Date(x(2),y(yLevel),"4月28日","bottom");
line[line.length]=Link(box[9][0],box[8][0]);
box[9][1]=Textbox_Quit(x(4),y(yLevel),"公共 BAD ENDING","bottom");
line[line.length]=Link(box[9][1],box[8][1]);
//----------
box[10]=new Array();
yLevel+=5;
box[10][0]=Textbox_Date(x(3),y(yLevel),"4月28日","top");
//----------
box[11]=new Array();
yLevel+=2;
box[11][0]=Textbox_Selection(x(3),y(yLevel),"通学路上碰见牡丹");
line[line.length]=Link(box[11][0],box[10][0]);
//----------
box[12]=new Array();
yLevel+=3;
box[12][0]=Textbox_Option(x(1),y(yLevel),"就这样离开");
line[line.length]=Link(box[12][0],box[11][0]);
box[12][1]=Textbox_Option(x(3),y(yLevel),"还是抱到学校去吧");
line[line.length]=Link(box[12][1],box[11][0]);
box[12][2]=Textbox_Option(x(5),y(yLevel),"把这当作悲剧来演");
line[line.length]=Link(box[12][2],box[11][0]);
//----------
box[13]=new Array();
yLevel+=3;
box[13][0]=Textbox_Selection(x(3),y(yLevel),"喜欢女孩的类型");
line[line.length]=Link(box[13][0],box[12][0]);
line[line.length]=Link(box[13][0],box[12][1]);
line[line.length]=Link(box[13][0],box[12][2]);
//----------
box[14]=new Array();
yLevel+=3;
box[14][0]=Textbox_Option(x(2),y(yLevel),"喜欢长头发","l|杏|-椋");
line[line.length]=Link(box[14][0],box[13][0]);
box[14][1]=Textbox_Option(x(4),y(yLevel),"喜欢短头发","r|-椋|杏");
line[line.length]=Link(box[14][1],box[13][0]);
//----------
box[15]=new Array();
yLevel+=3;
box[15][0]=Textbox_Date(x(3),y(yLevel),"5月1日","bottom");
line[line.length]=Link(box[15][0],box[14][0]);
line[line.length]=Link(box[15][0],box[14][1]);
//----------
box[16]=new Array();
yLevel+=5;
box[16][0]=Textbox_Date(x(3),y(yLevel),"5月1日","top");
//----------
box[17]=new Array();
yLevel+=2;
box[17][0]=Textbox_Selection(x(3),y(yLevel),"椋做的便当");
line[line.length]=Link(box[17][0],box[16][0]);
//----------
box[18]=new Array();
yLevel+=3;
box[18][0]=Textbox_Option(x(2),y(yLevel),"很好吃啊...");
line[line.length]=Link(box[18][0],box[17][0]);
box[18][1]=Textbox_Option(x(4),y(yLevel),"很难吃啊...");
line[line.length]=Link(box[18][1],box[17][0]);
//----------
box[19]=new Array();
yLevel+=3;
box[19][0]=Textbox_Date(x(3),y(yLevel),"5月3日","bottom");
line[line.length]=Link(box[19][0],box[18][0]);
line[line.length]=Link(box[19][0],box[18][1]);

hdft["footer"]=Footer(liny(2),34);