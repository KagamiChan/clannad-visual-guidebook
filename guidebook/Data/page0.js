// CVG HTML Data Page0 Done By Ligueston 2008.4.2

var src_strip_bg=sizestr+"/Misc/Misc_Shape_01"+appendix;
if(sizeSet==0){
	var STRIPWIDTH=500;
	var STRIPHEIGHT=60;
}
else{
	var STRIPWIDTH=300;
	var STRIPHEIGHT=36;
}
var src_logo_kami=sizestr+"/Misc/Misc_Logo_01"+appendix;
var src_logo_keyfc=sizestr+"/Misc/Misc_Logo_02"+appendix;
var src_logo_clnd=sizestr+"/Misc/Misc_Logo_03"+appendix;
hdft["header"]=Header("public","目录","Content","","");
var yLevel=2;

var moveBoard=Board(liny(11),liny(12));
tempFuncOver=function(){moveBoard.moveTo(moveBoard.leftx,objArr[this.ref].topy-BOARDREAPETHEIGHT*1.5);moveBoard.show();}
tempFuncOut=function(){moveBoard.hide();}
//----------
box[0]=new Array();
yLevel+=3;
tempString="<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"90%\">\
<tr><td width=\"12%\" align=\"left\">"+getImgStr(src_route_public,2*TITLEMARKSIZE/3,2*TITLEMARKSIZE/3)+"</td><td width=\"33%\" align=\"left\"><div class=\"menuL"+sizestr+"\" style=\"height:"+STRIPHEIGHT+"px; width:"+STRIPWIDTH+"px; "+getBgStr(src_strip_bg)+"\">　使用指南</div></td><td width=\"55%\" align=\"right\">"+getImgStr(src_footer_page[0],NUMBERWIDTH,NUMBERHEIGHT)+getImgStr(src_footer_page[1],NUMBERWIDTH,NUMBERHEIGHT)+"</td></tr>\
</table>";
box[0][0]=new ButtonBase(x(0),y(yLevel),"text",tempString,"btn",HEADERWIDTH-YSCALE);
board[board.length]=Board(liny(0.5),liny(2.5));
box[0][0].addClick(function(){gotopage(1)});
box[0][0].addTitle("点击转到第1页");
//----------
box[1]=new Array();
yLevel+=4;
tempString="<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"90%\">\
<tr><td width=\"12%\" align=\"left\">"+getImgStr(src_route_public,2*TITLEMARKSIZE/3,2*TITLEMARKSIZE/3)+"</td><td width=\"33%\" align=\"left\"><div class=\"menuL"+sizestr+"\" style=\"height:"+STRIPHEIGHT+"px; width:"+STRIPWIDTH+"px; "+getBgStr(src_strip_bg)+"\">　公共线路</div></td><td width=\"55%\" align=\"right\">"+getImgStr(src_footer_page[0],NUMBERWIDTH,NUMBERHEIGHT)+getImgStr(src_footer_page[1],NUMBERWIDTH,NUMBERHEIGHT)+"</td></tr>\
</table>";
box[1][0]=new ButtonBase(x(0),y(yLevel),"text",tempString,"btn",HEADERWIDTH-YSCALE);
board[board.length]=Board(liny(0.5),liny(2.5));
box[1][0].addClick(function(){gotopage(1,"p1_header2")});
box[1][0].addTitle("点击转到第1页");
//----------
box[2]=new Array();
yLevel+=3;
tempString="<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"90%\">\
<tr><td width=\"12%\" align=\"center\">"+getImgStr(src_route_public,TITLEMARKSIZE/2,TITLEMARKSIZE/2)+"</td><td width=\"84%\" align=\"left\" valign=\"bottom\"><span class=\"menuSC"+sizestr+"\">心跳☆高中</span><span class=\"menuSE"+sizestr+"\">Heartbeat ☆ High School</span></td><td width=\"4%\" align=\"left\" valign=\"bottom\" class=\"menuN"+sizestr+"\">24</td></tr>\
</table>";
box[2][0]=new ButtonBase(x(0),y(yLevel),"text",tempString,"btn",HEADERWIDTH-YSCALE);
box[2][0].addClick(function(){gotopage(24)});
box[2][0].addTitle("点击转到第24页");
box[2][0].addOver(tempFuncOver);
box[2][0].addOut(tempFuncOut);
//----------
box[3]=new Array();
yLevel+=2;
tempString="<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"90%\">\
<tr><td width=\"12%\" align=\"center\">"+getImgStr(src_route_public,TITLEMARKSIZE/2,TITLEMARKSIZE/2)+"</td><td width=\"84%\" align=\"left\" valign=\"bottom\"><span class=\"menuSC"+sizestr+"\">春原的玩笑</span><span class=\"menuSE"+sizestr+"\">Sunohara's Joke</span></td><td width=\"4%\" align=\"left\" valign=\"bottom\" class=\"menuN"+sizestr+"\">25</td></tr>\
</table>";
box[3][0]=new ButtonBase(x(0),y(yLevel),"text",tempString,"btn",HEADERWIDTH-YSCALE);
box[3][0].addClick(function(){gotopage(25)});
box[3][0].addTitle("点击转到第25页");
box[3][0].addOver(tempFuncOver);
box[3][0].addOut(tempFuncOut);
//----------
box[4]=new Array();
yLevel+=3;
tempString="<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"90%\">\
<tr><td width=\"12%\" align=\"left\">"+getImgStr(src_route_public,TITLEMARKSIZE/2,TITLEMARKSIZE/2)+"</td><td width=\"33%\" align=\"left\"><div class=\"menuL"+sizestr+"\" style=\"height:"+STRIPHEIGHT+"px; width:"+STRIPWIDTH+"px; "+getBgStr(src_strip_bg)+"\">　角色线路</div></td><td width=\"55%\" align=\"right\">"+getImgStr(src_footer_page[2],NUMBERWIDTH,NUMBERHEIGHT)+getImgStr(src_footer_page[6],NUMBERWIDTH,NUMBERHEIGHT)+"</td></tr>\
</table>";
box[4][0]=new ButtonBase(x(0),y(yLevel),"text",tempString,"btn",HEADERWIDTH-YSCALE);
board[board.length]=Board(liny(0.5),liny(2.5));
box[4][0].addClick(function(){gotopage(26)});
box[4][0].addTitle("点击转到第26页");
//----------
box[5]=new Array();
yLevel+=3;
tempString="<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"90%\">\
<tr><td width=\"12%\" align=\"center\">"+getImgStr(src_route_misae,TITLEMARKSIZE/2,TITLEMARKSIZE/2)+"</td><td width=\"84%\" align=\"left\" valign=\"bottom\"><span class=\"menuSC"+sizestr+"\">相乐 美佐枝</span><span class=\"menuSE"+sizestr+"\">Misae Sagara</span></td><td width=\"4%\" align=\"left\" valign=\"bottom\" class=\"menuN"+sizestr+"\">26</td></tr>\
</table>";
box[5][0]=new ButtonBase(x(0),y(yLevel),"text",tempString,"btn",HEADERWIDTH-YSCALE);
box[5][0].addClick(function(){gotopage(26)});
box[5][0].addTitle("点击转到第26页");
box[5][0].addOver(tempFuncOver);
box[5][0].addOut(tempFuncOut);
//----------
box[6]=new Array();
yLevel+=2;
tempString="<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"90%\">\
<tr><td width=\"12%\" align=\"center\">"+getImgStr(src_route_tomoyo,TITLEMARKSIZE/2,TITLEMARKSIZE/2)+"</td><td width=\"84%\" align=\"left\" valign=\"bottom\"><span class=\"menuSC"+sizestr+"\">坂上 智代</span><span class=\"menuSE"+sizestr+"\">Tomoyo Sakagami</span></td><td width=\"4%\" align=\"left\" valign=\"bottom\" class=\"menuN"+sizestr+"\">27</td></tr>\
</table>";
box[6][0]=new ButtonBase(x(0),y(yLevel),"text",tempString,"btn",HEADERWIDTH-YSCALE);
box[6][0].addClick(function(){gotopage(27)});
box[6][0].addTitle("点击转到第27页");
box[6][0].addOver(tempFuncOver);
box[6][0].addOut(tempFuncOut);
//----------
box[7]=new Array();
yLevel+=2;
tempString="<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"90%\">\
<tr><td width=\"14%\" align=\"center\" height=\""+TITLEMARKSIZE/2+"\"></td><td width=\"82%\" align=\"left\" valign=\"bottom\"><span class=\"menuSC"+sizestr+"\" style=\"color:gray;\">智代64HIT</span><span class=\"menuSE"+sizestr+"\" style=\"color:gray;\">Tomoyo's 64Hit</span></td><td width=\"4%\" align=\"left\" valign=\"bottom\" class=\"menuN"+sizestr+"\">30</td></tr>\
</table>";
box[7][0]=new ButtonBase(x(0),y(yLevel),"text",tempString,"btn",HEADERWIDTH-YSCALE);
box[7][0].addClick(function(){gotopage(30)});
box[7][0].addTitle("点击转到第30页");
box[7][0].addOver(tempFuncOver);
box[7][0].addOut(tempFuncOut);
//----------
box[8]=new Array();
yLevel+=2;
tempString="<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"90%\">\
<tr><td width=\"12%\" align=\"center\">"+getImgStr(src_route_yukine,TITLEMARKSIZE/2,TITLEMARKSIZE/2)+"</td><td width=\"84%\" align=\"left\" valign=\"bottom\"><span class=\"menuSC"+sizestr+"\">宫泽 有纪宁</span><span class=\"menuSE"+sizestr+"\">Yukine Miyazawa</span></td><td width=\"4%\" align=\"left\" valign=\"bottom\" class=\"menuN"+sizestr+"\">31</td></tr>\
</table>";
box[8][0]=new ButtonBase(x(0),y(yLevel),"text",tempString,"btn",HEADERWIDTH-YSCALE);
box[8][0].addClick(function(){gotopage(31)});
box[8][0].addTitle("点击转到第31页");
box[8][0].addOver(tempFuncOver);
box[8][0].addOut(tempFuncOut);
//----------
box[9]=new Array();
yLevel+=2;
tempString="<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"90%\">\
<tr><td width=\"14%\" align=\"center\" height=\""+TITLEMARKSIZE/2+"\"></td><td width=\"82%\" align=\"left\" valign=\"bottom\"><span class=\"menuSC"+sizestr+"\" style=\"color:gray;\">有纪宁的咒语</span><span class=\"menuSE"+sizestr+"\" style=\"color:gray;\">Yukine's Spells</span></td><td width=\"4%\" align=\"left\" valign=\"bottom\" class=\"menuN"+sizestr+"\">32</td></tr>\
</table>";
box[9][0]=new ButtonBase(x(0),y(yLevel),"text",tempString,"btn",HEADERWIDTH-YSCALE);
box[9][0].addClick(function(){gotopage(32)});
box[9][0].addTitle("点击转到第32页");
box[9][0].addOver(tempFuncOver);
box[9][0].addOut(tempFuncOut);
//----------
box[10]=new Array();
yLevel+=2;
tempString="<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"90%\">\
<tr><td width=\"14%\" align=\"center\" height=\""+TITLEMARKSIZE/2+"\"></td><td width=\"82%\" align=\"left\" valign=\"bottom\"><span class=\"menuSC"+sizestr+"\" style=\"color:gray;\">体育仓库事件</span><span class=\"menuSE"+sizestr+"\" style=\"color:gray;\">Gym Warehouse Event</span></td><td width=\"4%\" align=\"left\" valign=\"bottom\" class=\"menuN"+sizestr+"\">33</td></tr>\
</table>";
box[10][0]=new ButtonBase(x(0),y(yLevel),"text",tempString,"btn",HEADERWIDTH-YSCALE);
box[10][0].addClick(function(){gotopage(33)});
box[10][0].addTitle("点击转到第33页");
box[10][0].addOver(tempFuncOver);
box[10][0].addOut(tempFuncOut);
//----------
box[11]=new Array();
yLevel+=2;
tempString="<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"90%\">\
<tr><td width=\"12%\" align=\"center\">"+getImgStr(src_route_fujibayashi,TITLEMARKSIZE/2,TITLEMARKSIZE/2)+"</td><td width=\"84%\" align=\"left\" valign=\"bottom\"><span class=\"menuSC"+sizestr+"\">藤林 杏/藤林 椋</span><span class=\"menuSE"+sizestr+"\">Kyou Fujibayashi / Ryou Fujibayashi</span></td><td width=\"4%\" align=\"left\" valign=\"bottom\" class=\"menuN"+sizestr+"\">34</td></tr>\
</table>";
box[11][0]=new ButtonBase(x(0),y(yLevel),"text",tempString,"btn",HEADERWIDTH-YSCALE);
box[11][0].addClick(function(){gotopage(34)});
box[11][0].addTitle("点击转到第34页");
box[11][0].addOver(tempFuncOver);
box[11][0].addOut(tempFuncOut);
//----------
box[12]=new Array();
yLevel+=2;
tempString="<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"90%\">\
<tr><td width=\"12%\" align=\"center\">"+getImgStr(src_route_kappei,TITLEMARKSIZE/2,TITLEMARKSIZE/2)+"</td><td width=\"84%\" align=\"left\" valign=\"bottom\"><span class=\"menuSC"+sizestr+"\">柊 胜平</span><span class=\"menuSE"+sizestr+"\">Kappei Hiiragi</span></td><td width=\"4%\" align=\"left\" valign=\"bottom\" class=\"menuN"+sizestr+"\">37</td></tr>\
</table>";
box[12][0]=new ButtonBase(x(0),y(yLevel),"text",tempString,"btn",HEADERWIDTH-YSCALE);
box[12][0].addClick(function(){gotopage(37)});
box[12][0].addTitle("点击转到第37页");
box[12][0].addOver(tempFuncOver);
box[12][0].addOut(tempFuncOut);
//----------
box[13]=new Array();
yLevel+=2;
tempString="<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"90%\">\
<tr><td width=\"12%\" align=\"center\">"+getImgStr(src_route_sunohara,TITLEMARKSIZE/2,TITLEMARKSIZE/2)+"</td><td width=\"84%\" align=\"left\" valign=\"bottom\"><span class=\"menuSC"+sizestr+"\">春原 阳平/春原 芽衣</span><span class=\"menuSE"+sizestr+"\">Youhei Sunohara / Mei Sunohara</span></td><td width=\"4%\" align=\"left\" valign=\"bottom\" class=\"menuN"+sizestr+"\">38</td></tr>\
</table>";
box[13][0]=new ButtonBase(x(0),y(yLevel),"text",tempString,"btn",HEADERWIDTH-YSCALE);
box[13][0].addClick(function(){gotopage(38)});
box[13][0].addTitle("点击转到第38页");
box[13][0].addOver(tempFuncOver);
box[13][0].addOut(tempFuncOut);
//----------
box[14]=new Array();
yLevel+=2;
tempString="<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"90%\">\
<tr><td width=\"14%\" align=\"center\" height=\""+TITLEMARKSIZE/2+"\"></td><td width=\"82%\" align=\"left\" valign=\"bottom\"><span class=\"menuSC"+sizestr+"\" style=\"color:gray;\">伪女友事件</span><span class=\"menuSE"+sizestr+"\" style=\"color:gray;\">Fake Girlfriend Event</span></td><td width=\"4%\" align=\"left\" valign=\"bottom\" class=\"menuN"+sizestr+"\">39</td></tr>\
</table>";
box[14][0]=new ButtonBase(x(0),y(yLevel),"text",tempString,"btn",HEADERWIDTH-YSCALE);
box[14][0].addClick(function(){gotopage(39)});
box[14][0].addTitle("点击转到第39页");
box[14][0].addOver(tempFuncOver);
box[14][0].addOut(tempFuncOut);
//----------
box[15]=new Array();
yLevel+=2;
tempString="<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"90%\">\
<tr><td width=\"12%\" align=\"center\">"+getImgStr(src_route_kotomi,TITLEMARKSIZE/2,TITLEMARKSIZE/2)+"</td><td width=\"84%\" align=\"left\" valign=\"bottom\"><span class=\"menuSC"+sizestr+"\">一之濑 琴美</span><span class=\"menuSE"+sizestr+"\">Kotomi Ichinose</span></td><td width=\"4%\" align=\"left\" valign=\"bottom\" class=\"menuN"+sizestr+"\">40</td></tr>\
</table>";
box[15][0]=new ButtonBase(x(0),y(yLevel),"text",tempString,"btn",HEADERWIDTH-YSCALE);
box[15][0].addClick(function(){gotopage(40)});
box[15][0].addTitle("点击转到第40页");
box[15][0].addOver(tempFuncOver);
box[15][0].addOut(tempFuncOut);
//----------
box[16]=new Array();
yLevel+=2;
tempString="<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"90%\">\
<tr><td width=\"12%\" align=\"center\">"+getImgStr(src_route_fuuko,TITLEMARKSIZE/2,TITLEMARKSIZE/2)+"</td><td width=\"84%\" align=\"left\" valign=\"bottom\"><span class=\"menuSC"+sizestr+"\">伊吹 风子</span><span class=\"menuSE"+sizestr+"\">Fuuko Ibuki</span></td><td width=\"4%\" align=\"left\" valign=\"bottom\" class=\"menuN"+sizestr+"\">43</td></tr>\
</table>";
box[16][0]=new ButtonBase(x(0),y(yLevel),"text",tempString,"btn",HEADERWIDTH-YSCALE);
box[16][0].addClick(function(){gotopage(43)});
box[16][0].addTitle("点击转到第43页");
box[16][0].addOver(tempFuncOver);
box[16][0].addOut(tempFuncOut);
//----------
box[17]=new Array();
yLevel+=2;
tempString="<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"90%\">\
<tr><td width=\"14%\" align=\"center\" height=\""+TITLEMARKSIZE/2+"\"></td><td width=\"82%\" align=\"left\" valign=\"bottom\"><span class=\"menuSC"+sizestr+"\" style=\"color:gray;\">特别授课教师推选</span><span class=\"menuSE"+sizestr+"\" style=\"color:gray;\">Election for Teacher of Special Class</span></td><td width=\"4%\" align=\"left\" valign=\"bottom\" class=\"menuN"+sizestr+"\">47</td></tr>\
</table>";
box[17][0]=new ButtonBase(x(0),y(yLevel),"text",tempString,"btn",HEADERWIDTH-YSCALE);
box[17][0].addClick(function(){gotopage(47)});
box[17][0].addTitle("点击转到第47页");
box[17][0].addOver(tempFuncOver);
box[17][0].addOut(tempFuncOut);
//----------
box[18]=new Array();
yLevel+=2;
tempString="<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"90%\">\
<tr><td width=\"14%\" align=\"center\" height=\""+TITLEMARKSIZE/2+"\"></td><td width=\"82%\" align=\"left\" valign=\"bottom\"><span class=\"menuSC"+sizestr+"\" style=\"color:gray;\">风子大师</span><span class=\"menuSE"+sizestr+"\" style=\"color:gray;\">Fukko Master</span></td><td width=\"4%\" align=\"left\" valign=\"bottom\" class=\"menuN"+sizestr+"\">48</td></tr>\
</table>";
box[18][0]=new ButtonBase(x(0),y(yLevel),"text",tempString,"btn",HEADERWIDTH-YSCALE);
box[18][0].addClick(function(){gotopage(48)});
box[18][0].addTitle("点击转到第48页");
box[18][0].addOver(tempFuncOver);
box[18][0].addOut(tempFuncOut);
//----------
box[19]=new Array();
yLevel+=2;
tempString="<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"90%\">\
<tr><td width=\"12%\" align=\"center\">"+getImgStr(src_route_nagisa,TITLEMARKSIZE/2,TITLEMARKSIZE/2)+"</td><td width=\"84%\" align=\"left\" valign=\"bottom\"><span class=\"menuSC"+sizestr+"\">古河 渚/幸村 俊夫</span><span class=\"menuSE"+sizestr+"\">Nagisa Furukawa / Toshio Yukimura</span></td><td width=\"4%\" align=\"left\" valign=\"bottom\" class=\"menuN"+sizestr+"\">51</td></tr>\
</table>";
box[19][0]=new ButtonBase(x(0),y(yLevel),"text",tempString,"btn",HEADERWIDTH-YSCALE);
box[19][0].addClick(function(){gotopage(51)});
box[19][0].addTitle("点击转到第51页");
box[19][0].addOver(tempFuncOver);
box[19][0].addOut(tempFuncOut);
//----------
box[20]=new Array();
yLevel+=2;
tempString="<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"90%\">\
<tr><td width=\"14%\" align=\"center\" height=\""+TITLEMARKSIZE/2+"\"></td><td width=\"82%\" align=\"left\" valign=\"bottom\"><span class=\"menuSC"+sizestr+"\" style=\"color:gray;\">3对3篮球赛</span><span class=\"menuSE"+sizestr+"\" style=\"color:gray;\">3 on 3 Basketball Match</span></td><td width=\"4%\" align=\"left\" valign=\"bottom\" class=\"menuN"+sizestr+"\">56</td></tr>\
</table>";
box[20][0]=new ButtonBase(x(0),y(yLevel),"text",tempString,"btn",HEADERWIDTH-YSCALE);
box[20][0].addClick(function(){gotopage(56)});
box[20][0].addTitle("点击转到第56页");
box[20][0].addOver(tempFuncOver);
box[20][0].addOut(tempFuncOut);
//----------
box[21]=new Array();
yLevel+=2;
tempString="<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"90%\">\
<tr><td width=\"12%\" align=\"center\">"+getImgStr(src_route_gunfight,TITLEMARKSIZE/2,TITLEMARKSIZE/2)+"</td><td width=\"84%\" align=\"left\" valign=\"bottom\"><span class=\"menuSC"+sizestr+"\">枪战游戏/业余棒球</span><span class=\"menuSE"+sizestr+"\">Gunfight Game / Amateur Baseball</span></td><td width=\"4%\" align=\"left\" valign=\"bottom\" class=\"menuN"+sizestr+"\">59</td></tr>\
</table>";
box[21][0]=new ButtonBase(x(0),y(yLevel),"text",tempString,"btn",HEADERWIDTH-YSCALE);
box[21][0].addClick(function(){gotopage(59)});
box[21][0].addTitle("点击转到第59页");
box[21][0].addOver(tempFuncOver);
box[21][0].addOut(tempFuncOut);
//----------
box[22]=new Array();
yLevel+=3;
tempString="<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"90%\">\
<tr><td width=\"12%\" align=\"left\">"+getImgStr(src_route_public,2*TITLEMARKSIZE/3,2*TITLEMARKSIZE/3)+"</td><td width=\"33%\" align=\"left\"><div class=\"menuL"+sizestr+"\" style=\"height:"+STRIPHEIGHT+"px; width:"+STRIPWIDTH+"px; "+getBgStr(src_strip_bg)+"\">　AFTER STORY</div></td><td width=\"55%\" align=\"right\">"+getImgStr(src_footer_page[6],NUMBERWIDTH,NUMBERHEIGHT)+getImgStr(src_footer_page[2],NUMBERWIDTH,NUMBERHEIGHT)+"</td></tr>\
</table>";
box[22][0]=new ButtonBase(x(0),y(yLevel),"text",tempString,"btn",HEADERWIDTH-YSCALE);
board[board.length]=Board(liny(0.5),liny(2.5));
box[22][0].addClick(function(){gotopage(62)});
box[22][0].addTitle("点击转到第62页");
//----------
box[23]=new Array();
yLevel+=3;
tempString="<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"90%\">\
<tr><td width=\"14%\" align=\"center\" height=\""+TITLEMARKSIZE/2+"\"></td><td width=\"82%\" align=\"left\" valign=\"bottom\"><span class=\"menuSC"+sizestr+"\" style=\"color:gray;\">毕业典礼</span><span class=\"menuSE"+sizestr+"\" style=\"color:gray;\">Graduation Ceremony</span></td><td width=\"4%\" align=\"left\" valign=\"bottom\" class=\"menuN"+sizestr+"\">68</td></tr>\
</table>";
box[23][0]=new ButtonBase(x(0),y(yLevel),"text",tempString,"btn",HEADERWIDTH-YSCALE);
box[23][0].addClick(function(){gotopage(68)});
box[23][0].addTitle("点击转到第68页");
box[23][0].addOver(tempFuncOver);
box[23][0].addOut(tempFuncOut);
//----------
box[24]=new Array();
yLevel+=3;
tempString="<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"90%\">\
<tr><td width=\"12%\" align=\"left\">"+getImgStr(src_route_public,TITLEMARKSIZE/2,TITLEMARKSIZE/2)+"</td><td width=\"40%\" align=\"left\"></td><td width=\"55%\" align=\"right\">"+getImgStr(src_footer_page["FIN"],NUMBERWIDTH*3,NUMBERHEIGHT)+"</td></tr>\
</table>";
box[24][0]=new ButtonBase(x(0),y(yLevel),"text",tempString,"btn",HEADERWIDTH-YSCALE);
board[board.length]=Board(liny(0.5),liny(2.5));
//----------
box[25]=new Array();
yLevel+=3;
include_css("CSS/page0.css");
if(sizeSet==0){
	var COPYRIGHTWIDTH=710;
	var COPYRIGHTMONJIHEIGHT=20;
	var COPYRIGHTPADDINGHEIGHT=30;
	var COPYRIGHTLOGOHEIGHT=50;
	var COPYRIGHTLOGOWIDTH1=460;
	var COPYRIGHTLOGOWIDTH2=200;
	var COPYRIGHTLOGOWIDTH3=250;
	var COPYRIGHTITEMNAMEWIDTH=225;
	var COPYRIGHTPADDINGWIDTH=25;
	var COPYRIGHTITEMCONTWIDTH=460;
	var TITLELOGOHEIGHT=100;
	var TITLELOGOWIDTH=600;
}
else if(sizeSet==1){
	var COPYRIGHTWIDTH=426;
	var COPYRIGHTMONJIHEIGHT=12;
	var COPYRIGHTPADDINGHEIGHT=18;
	var COPYRIGHTLOGOHEIGHT=30;
	var COPYRIGHTLOGOWIDTH1=276;
	var COPYRIGHTLOGOWIDTH2=120;
	var COPYRIGHTLOGOWIDTH3=150;
	var COPYRIGHTITEMNAMEWIDTH=135;
	var COPYRIGHTPADDINGWIDTH=15;
	var COPYRIGHTITEMCONTWIDTH=276;
	var TITLELOGOHEIGHT=60;
	var TITLELOGOWIDTH=360;
}
	var src_copyright_title=sizestr+"/"+folder[0]+"Background_Logo"+appendix;
	var src_copyright_bg=sizestr+"/"+folder[2]+"Comment_Option[A]"+appendix;
tempString="\
<table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\
<tr><td width=\""+COPYRIGHTWIDTH+"\" height=\""+TITLELOGOHEIGHT+"\" align=\"center\">"+getImgStr(src_copyright_title,TITLELOGOWIDTH,TITLELOGOHEIGHT)+"</td></tr>\
<tr><td>\
	  <table width=\""+COPYRIGHTWIDTH+"\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td height=\""+COPYRIGHTPADDINGHEIGHT+"\"></td></tr></table>\
	  <table width=\""+COPYRIGHTWIDTH+"\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td width=\""+COPYRIGHTITEMNAMEWIDTH+"\" height=\""+COPYRIGHTMONJIHEIGHT+"\" style=\""+getBgStr(src_copyright_bg)+"\" class=\"menuItemName"+sizestr+"\">初版发行</td><td width=\""+COPYRIGHTPADDINGWIDTH+"\"></td><td width=\""+COPYRIGHTITEMCONTWIDTH+"\" class=\"menuItemCont"+sizestr+"\">2008年4月14日</td></tr></table>\
	  <table width=\""+COPYRIGHTWIDTH+"\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td height=\""+COPYRIGHTPADDINGHEIGHT+"\"></td></tr></table>\
	  <table width=\""+COPYRIGHTWIDTH+"\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td width=\""+COPYRIGHTITEMNAMEWIDTH+"\" height=\""+COPYRIGHTMONJIHEIGHT+"\" style=\""+getBgStr(src_copyright_bg)+"\" class=\"menuItemName"+sizestr+"\">策　　划</td><td width=\""+COPYRIGHTPADDINGWIDTH+"\"></td><td width=\""+COPYRIGHTITEMCONTWIDTH+"\" class=\"menuItemCont"+sizestr+"\">欢·翔焰{(Kamikey)}</td></tr></table>\
	  <table width=\""+COPYRIGHTWIDTH+"\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td height=\""+COPYRIGHTPADDINGHEIGHT+"\"></td></tr></table>\
	  <table width=\""+COPYRIGHTWIDTH+"\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td width=\""+COPYRIGHTITEMNAMEWIDTH+"\" height=\""+COPYRIGHTMONJIHEIGHT+"\" style=\""+getBgStr(src_copyright_bg)+"\" class=\"menuItemName"+sizestr+"\">原　　稿</td><td width=\""+COPYRIGHTPADDINGWIDTH+"\"></td><td width=\""+COPYRIGHTITEMCONTWIDTH+"\" class=\"menuItemCont"+sizestr+"\">{Roc-Dark(KeyFC/Kamikey)}</td></tr></table>\
	  <table width=\""+COPYRIGHTWIDTH+"\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td height=\""+COPYRIGHTPADDINGHEIGHT+"\"></td></tr></table>\
	  <table width=\""+COPYRIGHTWIDTH+"\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td width=\""+COPYRIGHTITEMNAMEWIDTH+"\" height=\""+COPYRIGHTMONJIHEIGHT+"\" style=\""+getBgStr(src_copyright_bg)+"\" class=\"menuItemName"+sizestr+"\">建　　构</td><td width=\""+COPYRIGHTPADDINGWIDTH+"\"></td><td width=\""+COPYRIGHTITEMCONTWIDTH+"\" class=\"menuItemCont"+sizestr+"\">{Nagao Kagetora(Kamikey)}</td></tr></table>\
	  <table width=\""+COPYRIGHTWIDTH+"\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td height=\""+COPYRIGHTPADDINGHEIGHT+"\"></td></tr></table>\
	  <table width=\""+COPYRIGHTWIDTH+"\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td width=\""+COPYRIGHTITEMNAMEWIDTH+"\" height=\""+COPYRIGHTMONJIHEIGHT+"\" style=\""+getBgStr(src_copyright_bg)+"\" class=\"menuItemName"+sizestr+"\">首席测试</td><td width=\""+COPYRIGHTPADDINGWIDTH+"\"></td><td width=\""+COPYRIGHTITEMCONTWIDTH+"\" class=\"menuItemCont"+sizestr+"\">{Roc-Dark(KeyFC/Kamikey)}</td></tr></table>\
	  <table width=\""+COPYRIGHTWIDTH+"\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td height=\""+COPYRIGHTPADDINGHEIGHT+"\"></td></tr></table>\
	  <table width=\""+COPYRIGHTWIDTH+"\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td width=\""+COPYRIGHTITEMNAMEWIDTH+"\" height=\""+COPYRIGHTMONJIHEIGHT+"\" style=\""+getBgStr(src_copyright_bg)+"\" class=\"menuItemName"+sizestr+"\">测　　试</td><td width=\""+COPYRIGHTPADDINGWIDTH+"\"></td><td width=\""+COPYRIGHTITEMCONTWIDTH+"\" class=\"menuItemCont"+sizestr+"\">{goodbest(KeyFC/Kamikey)}</td></tr><tr><td height=\""+COPYRIGHTMONJIHEIGHT+"\"></td><td></td><td class=\"menuItemCont"+sizestr+"\">{zero4(KeyFC/Kamikey)}</td></tr><tr><td height=\""+COPYRIGHTMONJIHEIGHT+"\"></td><td></td><td class=\"menuItemCont"+sizestr+"\">观铃の使魔{(Kamikey)}</td></tr><tr><td height=\""+COPYRIGHTMONJIHEIGHT+"\"></td><td></td><td class=\"menuItemCont"+sizestr+"\">青空下の伝説{(Kamikey)}</td></tr><tr><td height=\""+COPYRIGHTMONJIHEIGHT+"\"></td><td></td><td class=\"menuItemCont"+sizestr+"\">灼眼的卡羅特{(Kamikey)}</td></tr></table>\
	  <table width=\""+COPYRIGHTWIDTH+"\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td height=\""+COPYRIGHTPADDINGHEIGHT+"\"></td></tr></table>\
	  <table width=\""+COPYRIGHTWIDTH+"\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td width=\""+COPYRIGHTITEMNAMEWIDTH+"\" height=\""+COPYRIGHTMONJIHEIGHT+"\" style=\""+getBgStr(src_copyright_bg)+"\" class=\"menuItemName"+sizestr+"\">校　　对</td><td width=\""+COPYRIGHTPADDINGWIDTH+"\"></td><td width=\""+COPYRIGHTITEMCONTWIDTH+"\" class=\"menuItemCont"+sizestr+"\">{Ligueston(Kamikey)}</td></tr><tr><td height=\""+COPYRIGHTMONJIHEIGHT+"\"></td><td></td><td class=\"menuItemCont"+sizestr+"\">{Nagao Kagetora(Kamikey)}</td></tr></table>\
	  <table width=\""+COPYRIGHTWIDTH+"\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td height=\""+COPYRIGHTPADDINGHEIGHT+"\"></td></tr></table>\
	  <table width=\""+COPYRIGHTWIDTH+"\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td width=\""+COPYRIGHTITEMNAMEWIDTH+"\" height=\""+COPYRIGHTMONJIHEIGHT+"\" style=\""+getBgStr(src_copyright_bg)+"\" class=\"menuItemName"+sizestr+"\">平面设计</td><td width=\""+COPYRIGHTPADDINGWIDTH+"\"></td><td width=\""+COPYRIGHTITEMCONTWIDTH+"\" class=\"menuItemCont"+sizestr+"\">{Nagao Kagetora(Kamikey)}</td></tr><tr><td height=\""+COPYRIGHTMONJIHEIGHT+"\"></td><td></td><td class=\"menuItemCont"+sizestr+"\">{Roc-Dark(KeyFC/Kamikey)}</td></tr><tr><td height=\""+COPYRIGHTMONJIHEIGHT+"\"></td><td></td><td class=\"menuItemCont"+sizestr+"\">欢·翔焰{(Kamikey)}</td></tr><tr><td height=\""+COPYRIGHTMONJIHEIGHT+"\"></td><td></td><td class=\"menuItemCont"+sizestr+"\">灼眼的卡羅特{(Kamikey)}</td></tr></table>\
	  <table width=\""+COPYRIGHTWIDTH+"\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td height=\""+COPYRIGHTPADDINGHEIGHT+"\"></td></tr></table>\
	  <table width=\""+COPYRIGHTWIDTH+"\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td width=\""+COPYRIGHTITEMNAMEWIDTH+"\" height=\""+COPYRIGHTMONJIHEIGHT+"\" style=\""+getBgStr(src_copyright_bg)+"\" class=\"menuItemName"+sizestr+"\">网页设计</td><td width=\""+COPYRIGHTPADDINGWIDTH+"\"></td><td width=\""+COPYRIGHTITEMCONTWIDTH+"\" class=\"menuItemCont"+sizestr+"\">{Ligueston(Kamikey)}</td></tr></table><table width=\""+COPYRIGHTWIDTH+"\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td height=\""+COPYRIGHTPADDINGHEIGHT+"\"></td></tr></table><table width=\""+COPYRIGHTWIDTH+"\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td width=\""+COPYRIGHTITEMNAMEWIDTH+"\" height=\""+COPYRIGHTMONJIHEIGHT+"\" style=\""+getBgStr(src_copyright_bg)+"\" class=\"menuItemName"+sizestr+"\">制　　作</td><td width=\""+COPYRIGHTPADDINGWIDTH+"\"></td><td width=\""+COPYRIGHTITEMCONTWIDTH+"\" rowspan=\"3\" align=\"left\">"+getImgStr(src_logo_kami,COPYRIGHTLOGOWIDTH1,COPYRIGHTLOGOHEIGHT)+"</td></tr><tr><td height=\""+COPYRIGHTMONJIHEIGHT+"\"></td><td></td></tr><tr><td height=\""+COPYRIGHTMONJIHEIGHT/2+"\"></td><td></td></tr><tr><td height=\""+COPYRIGHTMONJIHEIGHT+"\"></td><td></td><td class=\"menuItemCont"+sizestr+"\">神创工程组 / 神创主题馆</td></tr><tr><td height=\""+COPYRIGHTMONJIHEIGHT+"\"></td><td></td><td class=\"menuItemCont"+sizestr+"\"><a target=\"_blank\" href=\"http://www.kamikey.com\">{http://www.kamikey.com}</a></td></tr><tr><td height=\""+COPYRIGHTMONJIHEIGHT+"\"></td><td></td><td width=\""+COPYRIGHTITEMCONTWIDTH+"\" rowspan=\"3\" align=\"left\">"+getImgStr(src_logo_keyfc,COPYRIGHTLOGOWIDTH2,COPYRIGHTLOGOHEIGHT)+"</td></tr><tr><td height=\""+COPYRIGHTMONJIHEIGHT+"\"></td><td></td></tr><tr><td height=\""+COPYRIGHTMONJIHEIGHT/2+"\"></td><td></td></tr><tr><td height=\""+COPYRIGHTMONJIHEIGHT+"\"></td><td></td><td class=\"menuItemCont"+sizestr+"\">{Key Fans Club(KFC)}</td></tr><tr><td height=\""+COPYRIGHTMONJIHEIGHT+"\"></td><td></td><td class=\"menuItemCont"+sizestr+"\"><a target=\"_blank\" href=\"http://www.keyfc.net/bbs\">{http://www.keyfc.net/bbs}</a></td></tr></table>\
	  <table width=\""+COPYRIGHTWIDTH+"\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td height=\""+COPYRIGHTPADDINGHEIGHT+"\"></td></tr></table>\
	  <table width=\""+COPYRIGHTWIDTH+"\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td width=\""+COPYRIGHTITEMNAMEWIDTH+"\" height=\""+COPYRIGHTMONJIHEIGHT+"\" style=\""+getBgStr(src_copyright_bg)+"\" class=\"menuItemName"+sizestr+"\">翻译供稿</td><td width=\""+COPYRIGHTPADDINGWIDTH+"\"></td><td width=\""+COPYRIGHTITEMCONTWIDTH+"\" rowspan=\"3\" align=\"left\">"+getImgStr(src_logo_clnd,COPYRIGHTLOGOWIDTH2,COPYRIGHTLOGOHEIGHT)+"</td></tr><tr><td height=\""+COPYRIGHTMONJIHEIGHT+"\"></td><td></td></tr><tr><td height=\""+COPYRIGHTMONJIHEIGHT/2+"\"></td><td></td></tr><tr><td height=\""+COPYRIGHTMONJIHEIGHT+"\"></td><td></td><td class=\"menuItemCont"+sizestr+"\">{Clannad}中文化{ / Key Fans Club(KFC)}</td></tr><tr><td height=\""+COPYRIGHTMONJIHEIGHT+"\"></td><td></td><td class=\"menuItemCont"+sizestr+"\"><a target=\"_blank\" href=\"http://www.keyfc.net/project/cclannad\">{http://www.keyfc.net/project/cclannad}</a></td></tr><tr><td height=\""+COPYRIGHTMONJIHEIGHT+"\"></td><td></td><td></td></tr><tr><td height=\""+COPYRIGHTMONJIHEIGHT+"\"></td><td></td><td class=\"menuItemCont"+sizestr+"\">光坂高校中文部 / 百度贴吧{CLANNAD}吧</td></tr><tr><td height=\""+COPYRIGHTMONJIHEIGHT+"\"></td><td></td><td class=\"menuItemCont"+sizestr+"\"><a target=\"_blank\" href=\"http://tieba.baidu.com/clannad\">{http://tieba.baidu.com/clannad}</a></td></tr></table>\
	  <table width=\""+COPYRIGHTWIDTH+"\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td height=\""+COPYRIGHTPADDINGHEIGHT+"\"></td></tr></table>\
	  <table width=\""+COPYRIGHTWIDTH+"\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td width=\""+COPYRIGHTITEMNAMEWIDTH*0.97+"\" height=\""+COPYRIGHTMONJIHEIGHT+"\" style=\""+getBgStr(src_copyright_bg)+"\" class=\"menuItemName"+sizestr+"\">版权申明</td><td width=\""+COPYRIGHTPADDINGWIDTH+"\"></td><td width=\""+COPYRIGHTITEMCONTWIDTH+"\" class=\"menuItemCont"+sizestr+"\" style=\"visibility:hidden\"></td></tr>\
<tr><td height=\""+COPYRIGHTMONJIHEIGHT/2+"\" colspan=\"3\"></td></tr>\
<tr><td height=\""+COPYRIGHTMONJIHEIGHT+"\" colspan=\"3\" class=\"menuItemCont"+sizestr+"\" align=\"left\">\
<p style=\"line-height:120%\">本作品适用的{CLANNAD} <font face=\"微软雅黑,MS Gothic\">-クラナド-</font>是日本{Visual Art's / Key}公司的作品。<br>{CLANNAD} <font face=\"微软雅黑,MS Gothic\">-クラナド-</font><br>{Copyright &copy; 2004~2007 Visual Art's / Key. All Rights Reserved.}<br><a target=\"_blank\" href=\"http://key.visualarts.gr.jp/\">{http://key.visualarts.gr.jp/}</a></p>\
<p style=\"line-height:120%\">本作品制作开发过程中使用软件{RLdev}是{H&aelig;leth}的作品。<br>{RLdev}<br>{Copyright &copy; 2006 H&aelig;leth}.<br><a target=\"_blank\" href=\"http://www.haeleth.net/\">{http://www.haeleth.net/}</a></p>\
<p style=\"line-height:120%\">本作品制作者及版权所有者为神创工程组{(Researching Center of KamiKey)}。<br>{CLANNAD Visual Guidebook} <font face=\"微软雅黑,MS Gothic\">-クラナド- ビジュアル ガイドブック</font><br>{Copyright &copy; 2008 Researching Center of KamiKey.}<br><a target=\"_blank\" href=\"http://www.KamiKey.com/\">{http://www.KamiKey.com/}</a></p>\
<p style=\"line-height:120%\">本作品受著作权法保护。未经神创工作组允许，不得随意复制、转载，不得以生产工作组或者其他个人以及团体的名义修改、发布或者谋取商业利益。<br>神创工作组保留对本作品的最终解释权。</p>\
</td></tr>\
	  </table>\
	  <table width=\""+COPYRIGHTWIDTH+"\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td height=\""+COPYRIGHTPADDINGHEIGHT+"\"></td></tr></table>\
	  <table width=\""+COPYRIGHTWIDTH+"\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td width=\""+COPYRIGHTITEMNAMEWIDTH+"\" height=\""+COPYRIGHTMONJIHEIGHT+"\" style=\""+getBgStr(src_copyright_bg)+"\" class=\"menuItemName"+sizestr+"\">联系我们</td><td width=\""+COPYRIGHTPADDINGWIDTH+"\"></td><td width=\""+COPYRIGHTITEMCONTWIDTH+"\" class=\"menuItemCont"+sizestr+"\" style=\"visibility:hidden\"></td></tr>\
<tr><td height=\""+COPYRIGHTMONJIHEIGHT/2+"\" colspan=\"3\"></td></tr>\
<tr><td height=\""+COPYRIGHTMONJIHEIGHT+"\" colspan=\"3\" class=\"menuItemCont"+sizestr+"\" align=\"left\">\
<p style=\"line-height:120%\">本作品相关疑问解答，意见及建议的受理，请访问以下网页：<br><a target=\"_blank\" href=\"http://www.kamikey.com/viewthread.php?tid=604\">{http://www.kamikey.com/viewthread.php?tid=604}</a><br><a target=\"_blank\" href=\"http://www.keyfc.net/bbs/showtopic-24990.aspx\">{http://www.keyfc.net/bbs/showtopic-24990.aspx}</a></p>\
<p style=\"line-height:120%\">或者发送电子邮件至：<br>{moerurd@gmail.com}<br>{moerurd@hotmail.com}</p>\
<p style=\"line-height:120%\">神创工作组感谢您的关注与支持！</p>\
</td></tr>\
	  </table>\
</td></tr>\
</table>";
tempString=tempString.replace(/\{/g,"<font face=Arial>");
tempString=tempString.replace(/\}/g,"</font>");
comment[0]=new ButtonBase(COMMENTLEFT,y(5),"text",tempString,"btn",COMMENTWIDTH);
box[25][0]=comment[0];
hdft["footer"]=Footer(liny(3),0);
