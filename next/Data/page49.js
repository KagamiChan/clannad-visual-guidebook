// CVG HTML Data Page49 Done By Ligueston 2008.4.21
hdft["header"]=Header("fuuko","伊吹 风子","Fuuko Ibuki","风子大师（二）","Fuuko Master~Part 2");

if(sizeSet==0){
	var BUTTONASIDEADJUST=50;
}
else{
	var BUTTONASIDEADJUST=30;
}

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Option(x(0),y(yLevel),"风子大师（四）");
box[0][0].addLink("p49_KFMT4");
box[0][0].addClick(function(){gotopage(21,"p21_retKFMT4")});
box[0][1]=Textbox_Condition(x(3.5),y(yLevel),"23日，风子陷入幻想（三）");
line[line.length]=Link(Point(linx(3.5),liny(0)-LINEBASEHEIGHT/2),Point(linx(3.5),liny(0)-LINEBASEHEIGHT/2));
//----------
box[1]=new Array();
yLevel+=3;
box[1][0]=Textbox_Selection(x(2),y(yLevel),"恶作剧");
line[line.length]=Link(box[1][0],Point(linx(3),liny(-1)));
box[1][1]=Textbox_Selection(x(5),y(yLevel),"不去管她");
line[line.length]=Link(box[1][1],Point(linx(3),liny(-1)));
line[line.length]=Link(Point(linx(3.5),liny(-1)),box[0][1]);
//----------
box[2]=new Array();
yLevel+=2;
box[2][0]=Textbox_Selection(x(2),y(yLevel),"风子陷入幻想（四）");
line[line.length]=Link(box[2][0],box[1][0]);
//----------
box[3]=new Array();
yLevel+=3;
box[3][0]=Textbox_Option(x(0.5),y(yLevel),"恶作剧");
line[line.length]=Link(box[3][0],Point(linx(1.5),liny(-1)));
box[3][1]=Textbox_Option(x(3.5),y(yLevel),"不去管她");
line[line.length]=Link(box[3][1],Point(linx(1.5),liny(-1)));
line[line.length]=Link(Point(linx(2),liny(-1)),box[2][0]);
//----------
box[4]=new Array();
yLevel+=2;
box[4][0]=Textbox_Selection(x(0.5),y(yLevel),"风子恶作剧（三）");
line[line.length]=Link(box[4][0],box[3][0]);
//----------
box[5]=new Array();
yLevel+=2;
box[5][0]=Textbox_Option(x(0.5),y(yLevel),"让风子用鼻子喝果汁");
line[line.length]=Link(box[5][0],box[4][0]);
box[5][1]=Textbox_Option(x(2)+BUTTONASIDEADJUST,y(yLevel),"“让风子用鼻子喝果汁”升级/达成");
//----------
box[6]=new Array();
yLevel+=2;
box[6][0]=Textbox_Option(x(0.5),y(yLevel),"把风子带到别处去");
line[line.length]=Link(box[6][0],box[5][0]);
box[6][1]=Textbox_Option(x(2)+BUTTONASIDEADJUST,y(yLevel),"“把风子带到别处去”升级/达成");
//----------
box[7]=new Array();
yLevel+=2;
box[7][0]=Textbox_Option(x(0.5),y(yLevel),"找人来装扮自己");
line[line.length]=Link(box[7][0],box[6][0]);
box[7][1]=Textbox_Option(x(2)+BUTTONASIDEADJUST,y(yLevel),"“找人来装扮自己”升级/达成");
//----------
box[8]=new Array();
yLevel+=2;
box[8][0]=Textbox_Option(x(0.5),y(yLevel),"偷换掉风子怀里的雕刻");
line[line.length]=Link(box[8][0],box[7][0]);
box[8][1]=Textbox_Option(x(2)+BUTTONASIDEADJUST,y(yLevel),"“偷换掉风子怀里的雕刻”升级");

yLevel+=2;
line[line.length]=Link(Point(linx(0.5),liny(0)),box[8][0]);
line[line.length]=Link(Point(linx(0.5),liny(0)),Point(linx(3.5),liny(0)),box[3][1]);

yLevel+=1;
line[line.length]=Link(Point(linx(2),liny(0)),Point(linx(2),liny(-1)));
line[line.length]=Link(Point(linx(2),liny(0)),Point(linx(5),liny(0)),box[1][1]);
line[line.length]=Link(Point(linx(3.5),liny(0)),Point(linx(3.5),liny(0)));
//----------
box[9]=new Array();
yLevel+=4;
box[9][0]=Textbox_Option(x(0),y(yLevel),"风子大师（五）");
box[9][0].addLink("p49_KFMT5");
box[9][0].addClick(function(){gotopage(23,"p23_retKFMT5")});
box[9][1]=Textbox_Condition(x(3),y(yLevel),"23日，风子陷入幻想（四）");
line[line.length]=Link(Point(linx(3),liny(0)-LINEBASEHEIGHT/2),Point(linx(3),liny(0)-LINEBASEHEIGHT/2));
//----------
box[10]=new Array();
yLevel+=3;
box[10][0]=Textbox_Selection(x(1.5),y(yLevel),"恶作剧");
line[line.length]=Link(box[10][0],Point(linx(2.5),liny(-1)));
box[10][1]=Textbox_Selection(x(4.5),y(yLevel),"不去管她","r|+未触发");
line[line.length]=Link(box[10][1],Point(linx(2.5),liny(-1)));
line[line.length]=Link(Point(linx(3),liny(-1)),box[9][1]);
//----------
box[11]=new Array();
yLevel+=2;
box[11][0]=Textbox_Selection(x(1.5),y(yLevel),"风子恶作剧（四）");
line[line.length]=Link(box[11][0],box[10][0]);
//----------
box[12]=new Array();
yLevel+=2;
box[12][0]=Textbox_Option(x(1.5),y(yLevel),"让风子用鼻子喝果汁");
line[line.length]=Link(box[12][0],box[11][0]);
box[12][1]=Textbox_Option(x(3)+BUTTONASIDEADJUST,y(yLevel),"“让风子用鼻子喝果汁”升级/达成");
//----------
box[13]=new Array();
yLevel+=2;
box[13][0]=Textbox_Option(x(1.5),y(yLevel),"把风子带到别处去");
line[line.length]=Link(box[13][0],box[12][0]);
box[13][1]=Textbox_Option(x(3)+BUTTONASIDEADJUST,y(yLevel),"“把风子带到别处去”升级/达成");
//----------
box[14]=new Array();
yLevel+=2;
box[14][0]=Textbox_Option(x(1.5),y(yLevel),"找人来装扮自己");
line[line.length]=Link(box[14][0],box[13][0]);
box[14][1]=Textbox_Option(x(3)+BUTTONASIDEADJUST,y(yLevel),"“找人来装扮自己”升级/达成");
//----------
box[15]=new Array();
yLevel+=2;
box[15][0]=Textbox_Option(x(1.5),y(yLevel),"偷换掉风子怀里的雕刻");
line[line.length]=Link(box[15][0],box[14][0]);
box[15][1]=Textbox_Option(x(3)+BUTTONASIDEADJUST,y(yLevel),"“偷换掉风子怀里的雕刻”升级/达成");

yLevel+=2;
line[line.length]=Link(Point(linx(1.5),liny(0)),box[15][0]);
line[line.length]=Link(Point(linx(1.5),liny(0)),Point(linx(4.5),liny(0)),box[10][1]);
line[line.length]=Link(Point(linx(3),liny(0)),Point(linx(3),liny(0)));

//----------
box[16]=new Array();
yLevel+=4;
box[16][0]=Textbox_Option(x(0),y(yLevel),"风子大师（六）");
box[16][0].addLink("p49_KFMT6");
box[16][0].addClick(function(){gotopage(43,"p43_retKFMT6")});
box[16][1]=Textbox_Condition(x(3),y(yLevel),"23日，风子陷入幻想（四）");
line[line.length]=Link(Point(linx(3),liny(0)-LINEBASEHEIGHT/2),Point(linx(3),liny(0)-LINEBASEHEIGHT/2));
//----------
box[17]=new Array();
yLevel+=3;
box[17][0]=Textbox_Selection(x(1.5),y(yLevel),"恶作剧");
line[line.length]=Link(box[17][0],Point(linx(2.5),liny(-1)));
box[17][1]=Textbox_Selection(x(4.5),y(yLevel),"不去管她","r|+未触发");
line[line.length]=Link(box[17][1],Point(linx(2.5),liny(-1)));
line[line.length]=Link(Point(linx(3),liny(-1)),box[16][1]);
//----------
box[18]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="本日，若选择[找别人来装扮自己]或[偷换掉风子怀里的雕刻]，会跳回重新作选择，这两项恶作剧本日无法完成。";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[18][0]=Textbox_Selection_C(x(1.5),y(yLevel),"风子恶作剧（五）","4",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"风子恶作剧（五）",0);
line[line.length]=Link(box[18][0],box[17][0]);
//----------
box[19]=new Array();
yLevel+=2;
box[19][0]=Textbox_Option(x(1.5),y(yLevel),"让风子用鼻子喝果汁");
line[line.length]=Link(box[19][0],box[18][0]);
box[19][1]=Textbox_Option(x(3)+BUTTONASIDEADJUST,y(yLevel),"“让风子用鼻子喝果汁”升级/达成");
//----------
box[20]=new Array();
yLevel+=2;
box[20][0]=Textbox_Option(x(1.5),y(yLevel),"把风子带到别处去");
line[line.length]=Link(box[20][0],box[19][0]);
box[20][1]=Textbox_Option(x(3)+BUTTONASIDEADJUST,y(yLevel),"“把风子带到别处去”升级/达成");
//----------
box[21]=new Array();
yLevel+=2;
box[21][0]=Textbox_Option(x(1.5),y(yLevel),"找人来装扮自己");
line[line.length]=Link(box[21][0],box[20][0]);
box[21][1]=Textbox_Option(x(3)+BUTTONASIDEADJUST,y(yLevel),"“找人来装扮自己”升级/达成");
//----------
box[22]=new Array();
yLevel+=2;
box[22][0]=Textbox_Option(x(1.5),y(yLevel),"偷换掉风子怀里的雕刻");
line[line.length]=Link(box[22][0],box[21][0]);
box[22][1]=Textbox_Option(x(3)+BUTTONASIDEADJUST,y(yLevel),"“偷换掉风子怀里的雕刻”升级/达成");

yLevel+=2;
line[line.length]=Link(Point(linx(1.5),liny(0)),box[22][0]);
line[line.length]=Link(Point(linx(1.5),liny(0)),Point(linx(4.5),liny(0)),box[17][1]);
line[line.length]=Link(Point(linx(3),liny(0)),Point(linx(3),liny(0)));

hdft["footer"]=Footer(liny(1),49);