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
hdft["header"]=Header("public","Ŀ¼","Content","","");
var yLevel=2;

var moveBoard=Board(liny(11),liny(12));
tempFuncOver=function(){moveBoard.moveTo(moveBoard.leftx,objArr[this.ref].topy-BOARDREAPETHEIGHT*1.5);moveBoard.show();}
tempFuncOut=function(){moveBoard.hide();}
//----------
box[0]=new Array();
yLevel+=3;
tempString="<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"90%\">\
<tr><td width=\"12%\" align=\"left\">"+getImgStr(src_route_public,2*TITLEMARKSIZE/3,2*TITLEMARKSIZE/3)+"</td><td width=\"33%\" align=\"left\"><div class=\"menuL"+sizestr+"\" style=\"height:"+STRIPHEIGHT+"px; width:"+STRIPWIDTH+"px; "+getBgStr(src_strip_bg)+"\">��ʹ��ָ��</div></td><td width=\"55%\" align=\"right\">"+getImgStr(src_footer_page[0],NUMBERWIDTH,NUMBERHEIGHT)+getImgStr(src_footer_page[1],NUMBERWIDTH,NUMBERHEIGHT)+"</td></tr>\
</table>";
box[0][0]=new ButtonBase(x(0),y(yLevel),"text",tempString,"btn",HEADERWIDTH-YSCALE);
board[board.length]=Board(liny(0.5),liny(2.5));
box[0][0].addClick(function(){gotopage(1)});
box[0][0].addTitle("���ת����1ҳ");
//----------
box[1]=new Array();
yLevel+=4;
tempString="<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"90%\">\
<tr><td width=\"12%\" align=\"left\">"+getImgStr(src_route_public,2*TITLEMARKSIZE/3,2*TITLEMARKSIZE/3)+"</td><td width=\"33%\" align=\"left\"><div class=\"menuL"+sizestr+"\" style=\"height:"+STRIPHEIGHT+"px; width:"+STRIPWIDTH+"px; "+getBgStr(src_strip_bg)+"\">��������·</div></td><td width=\"55%\" align=\"right\">"+getImgStr(src_footer_page[0],NUMBERWIDTH,NUMBERHEIGHT)+getImgStr(src_footer_page[1],NUMBERWIDTH,NUMBERHEIGHT)+"</td></tr>\
</table>";
box[1][0]=new ButtonBase(x(0),y(yLevel),"text",tempString,"btn",HEADERWIDTH-YSCALE);
board[board.length]=Board(liny(0.5),liny(2.5));
box[1][0].addClick(function(){gotopage(1,"p1_header2")});
box[1][0].addTitle("���ת����1ҳ");
//----------
box[2]=new Array();
yLevel+=3;
tempString="<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"90%\">\
<tr><td width=\"12%\" align=\"center\">"+getImgStr(src_route_public,TITLEMARKSIZE/2,TITLEMARKSIZE/2)+"</td><td width=\"84%\" align=\"left\" valign=\"bottom\"><span class=\"menuSC"+sizestr+"\">���������</span><span class=\"menuSE"+sizestr+"\">Heartbeat �� High School</span></td><td width=\"4%\" align=\"left\" valign=\"bottom\" class=\"menuN"+sizestr+"\">24</td></tr>\
</table>";
box[2][0]=new ButtonBase(x(0),y(yLevel),"text",tempString,"btn",HEADERWIDTH-YSCALE);
box[2][0].addClick(function(){gotopage(24)});
box[2][0].addTitle("���ת����24ҳ");
box[2][0].addOver(tempFuncOver);
box[2][0].addOut(tempFuncOut);
//----------
box[3]=new Array();
yLevel+=2;
tempString="<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"90%\">\
<tr><td width=\"12%\" align=\"center\">"+getImgStr(src_route_public,TITLEMARKSIZE/2,TITLEMARKSIZE/2)+"</td><td width=\"84%\" align=\"left\" valign=\"bottom\"><span class=\"menuSC"+sizestr+"\">��ԭ����Ц</span><span class=\"menuSE"+sizestr+"\">Sunohara's Joke</span></td><td width=\"4%\" align=\"left\" valign=\"bottom\" class=\"menuN"+sizestr+"\">25</td></tr>\
</table>";
box[3][0]=new ButtonBase(x(0),y(yLevel),"text",tempString,"btn",HEADERWIDTH-YSCALE);
box[3][0].addClick(function(){gotopage(25)});
box[3][0].addTitle("���ת����25ҳ");
box[3][0].addOver(tempFuncOver);
box[3][0].addOut(tempFuncOut);
//----------
box[4]=new Array();
yLevel+=3;
tempString="<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"90%\">\
<tr><td width=\"12%\" align=\"left\">"+getImgStr(src_route_public,TITLEMARKSIZE/2,TITLEMARKSIZE/2)+"</td><td width=\"33%\" align=\"left\"><div class=\"menuL"+sizestr+"\" style=\"height:"+STRIPHEIGHT+"px; width:"+STRIPWIDTH+"px; "+getBgStr(src_strip_bg)+"\">����ɫ��·</div></td><td width=\"55%\" align=\"right\">"+getImgStr(src_footer_page[2],NUMBERWIDTH,NUMBERHEIGHT)+getImgStr(src_footer_page[6],NUMBERWIDTH,NUMBERHEIGHT)+"</td></tr>\
</table>";
box[4][0]=new ButtonBase(x(0),y(yLevel),"text",tempString,"btn",HEADERWIDTH-YSCALE);
board[board.length]=Board(liny(0.5),liny(2.5));
box[4][0].addClick(function(){gotopage(26)});
box[4][0].addTitle("���ת����26ҳ");
//----------
box[5]=new Array();
yLevel+=3;
tempString="<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"90%\">\
<tr><td width=\"12%\" align=\"center\">"+getImgStr(src_route_misae,TITLEMARKSIZE/2,TITLEMARKSIZE/2)+"</td><td width=\"84%\" align=\"left\" valign=\"bottom\"><span class=\"menuSC"+sizestr+"\">���� ����֦</span><span class=\"menuSE"+sizestr+"\">Misae Sagara</span></td><td width=\"4%\" align=\"left\" valign=\"bottom\" class=\"menuN"+sizestr+"\">26</td></tr>\
</table>";
box[5][0]=new ButtonBase(x(0),y(yLevel),"text",tempString,"btn",HEADERWIDTH-YSCALE);
box[5][0].addClick(function(){gotopage(26)});
box[5][0].addTitle("���ת����26ҳ");
box[5][0].addOver(tempFuncOver);
box[5][0].addOut(tempFuncOut);
//----------
box[6]=new Array();
yLevel+=2;
tempString="<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"90%\">\
<tr><td width=\"12%\" align=\"center\">"+getImgStr(src_route_tomoyo,TITLEMARKSIZE/2,TITLEMARKSIZE/2)+"</td><td width=\"84%\" align=\"left\" valign=\"bottom\"><span class=\"menuSC"+sizestr+"\">���� �Ǵ�</span><span class=\"menuSE"+sizestr+"\">Tomoyo Sakagami</span></td><td width=\"4%\" align=\"left\" valign=\"bottom\" class=\"menuN"+sizestr+"\">27</td></tr>\
</table>";
box[6][0]=new ButtonBase(x(0),y(yLevel),"text",tempString,"btn",HEADERWIDTH-YSCALE);
box[6][0].addClick(function(){gotopage(27)});
box[6][0].addTitle("���ת����27ҳ");
box[6][0].addOver(tempFuncOver);
box[6][0].addOut(tempFuncOut);
//----------
box[7]=new Array();
yLevel+=2;
tempString="<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"90%\">\
<tr><td width=\"14%\" align=\"center\" height=\""+TITLEMARKSIZE/2+"\"></td><td width=\"82%\" align=\"left\" valign=\"bottom\"><span class=\"menuSC"+sizestr+"\" style=\"color:gray;\">�Ǵ�64HIT</span><span class=\"menuSE"+sizestr+"\" style=\"color:gray;\">Tomoyo's 64Hit</span></td><td width=\"4%\" align=\"left\" valign=\"bottom\" class=\"menuN"+sizestr+"\">30</td></tr>\
</table>";
box[7][0]=new ButtonBase(x(0),y(yLevel),"text",tempString,"btn",HEADERWIDTH-YSCALE);
box[7][0].addClick(function(){gotopage(30)});
box[7][0].addTitle("���ת����30ҳ");
box[7][0].addOver(tempFuncOver);
box[7][0].addOut(tempFuncOut);
//----------
box[8]=new Array();
yLevel+=2;
tempString="<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"90%\">\
<tr><td width=\"12%\" align=\"center\">"+getImgStr(src_route_yukine,TITLEMARKSIZE/2,TITLEMARKSIZE/2)+"</td><td width=\"84%\" align=\"left\" valign=\"bottom\"><span class=\"menuSC"+sizestr+"\">���� �м���</span><span class=\"menuSE"+sizestr+"\">Yukine Miyazawa</span></td><td width=\"4%\" align=\"left\" valign=\"bottom\" class=\"menuN"+sizestr+"\">31</td></tr>\
</table>";
box[8][0]=new ButtonBase(x(0),y(yLevel),"text",tempString,"btn",HEADERWIDTH-YSCALE);
box[8][0].addClick(function(){gotopage(31)});
box[8][0].addTitle("���ת����31ҳ");
box[8][0].addOver(tempFuncOver);
box[8][0].addOut(tempFuncOut);
//----------
box[9]=new Array();
yLevel+=2;
tempString="<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"90%\">\
<tr><td width=\"14%\" align=\"center\" height=\""+TITLEMARKSIZE/2+"\"></td><td width=\"82%\" align=\"left\" valign=\"bottom\"><span class=\"menuSC"+sizestr+"\" style=\"color:gray;\">�м���������</span><span class=\"menuSE"+sizestr+"\" style=\"color:gray;\">Yukine's Spells</span></td><td width=\"4%\" align=\"left\" valign=\"bottom\" class=\"menuN"+sizestr+"\">32</td></tr>\
</table>";
box[9][0]=new ButtonBase(x(0),y(yLevel),"text",tempString,"btn",HEADERWIDTH-YSCALE);
box[9][0].addClick(function(){gotopage(32)});
box[9][0].addTitle("���ת����32ҳ");
box[9][0].addOver(tempFuncOver);
box[9][0].addOut(tempFuncOut);
//----------
box[10]=new Array();
yLevel+=2;
tempString="<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"90%\">\
<tr><td width=\"14%\" align=\"center\" height=\""+TITLEMARKSIZE/2+"\"></td><td width=\"82%\" align=\"left\" valign=\"bottom\"><span class=\"menuSC"+sizestr+"\" style=\"color:gray;\">�����ֿ��¼�</span><span class=\"menuSE"+sizestr+"\" style=\"color:gray;\">Gym Warehouse Event</span></td><td width=\"4%\" align=\"left\" valign=\"bottom\" class=\"menuN"+sizestr+"\">33</td></tr>\
</table>";
box[10][0]=new ButtonBase(x(0),y(yLevel),"text",tempString,"btn",HEADERWIDTH-YSCALE);
box[10][0].addClick(function(){gotopage(33)});
box[10][0].addTitle("���ת����33ҳ");
box[10][0].addOver(tempFuncOver);
box[10][0].addOut(tempFuncOut);
//----------
box[11]=new Array();
yLevel+=2;
tempString="<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"90%\">\
<tr><td width=\"12%\" align=\"center\">"+getImgStr(src_route_fujibayashi,TITLEMARKSIZE/2,TITLEMARKSIZE/2)+"</td><td width=\"84%\" align=\"left\" valign=\"bottom\"><span class=\"menuSC"+sizestr+"\">���� ��/���� �</span><span class=\"menuSE"+sizestr+"\">Kyou Fujibayashi / Ryou Fujibayashi</span></td><td width=\"4%\" align=\"left\" valign=\"bottom\" class=\"menuN"+sizestr+"\">34</td></tr>\
</table>";
box[11][0]=new ButtonBase(x(0),y(yLevel),"text",tempString,"btn",HEADERWIDTH-YSCALE);
box[11][0].addClick(function(){gotopage(34)});
box[11][0].addTitle("���ת����34ҳ");
box[11][0].addOver(tempFuncOver);
box[11][0].addOut(tempFuncOut);
//----------
box[12]=new Array();
yLevel+=2;
tempString="<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"90%\">\
<tr><td width=\"12%\" align=\"center\">"+getImgStr(src_route_kappei,TITLEMARKSIZE/2,TITLEMARKSIZE/2)+"</td><td width=\"84%\" align=\"left\" valign=\"bottom\"><span class=\"menuSC"+sizestr+"\">�� ʤƽ</span><span class=\"menuSE"+sizestr+"\">Kappei Hiiragi</span></td><td width=\"4%\" align=\"left\" valign=\"bottom\" class=\"menuN"+sizestr+"\">37</td></tr>\
</table>";
box[12][0]=new ButtonBase(x(0),y(yLevel),"text",tempString,"btn",HEADERWIDTH-YSCALE);
box[12][0].addClick(function(){gotopage(37)});
box[12][0].addTitle("���ת����37ҳ");
box[12][0].addOver(tempFuncOver);
box[12][0].addOut(tempFuncOut);
//----------
box[13]=new Array();
yLevel+=2;
tempString="<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"90%\">\
<tr><td width=\"12%\" align=\"center\">"+getImgStr(src_route_sunohara,TITLEMARKSIZE/2,TITLEMARKSIZE/2)+"</td><td width=\"84%\" align=\"left\" valign=\"bottom\"><span class=\"menuSC"+sizestr+"\">��ԭ ��ƽ/��ԭ ѿ��</span><span class=\"menuSE"+sizestr+"\">Youhei Sunohara / Mei Sunohara</span></td><td width=\"4%\" align=\"left\" valign=\"bottom\" class=\"menuN"+sizestr+"\">38</td></tr>\
</table>";
box[13][0]=new ButtonBase(x(0),y(yLevel),"text",tempString,"btn",HEADERWIDTH-YSCALE);
box[13][0].addClick(function(){gotopage(38)});
box[13][0].addTitle("���ת����38ҳ");
box[13][0].addOver(tempFuncOver);
box[13][0].addOut(tempFuncOut);
//----------
box[14]=new Array();
yLevel+=2;
tempString="<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"90%\">\
<tr><td width=\"14%\" align=\"center\" height=\""+TITLEMARKSIZE/2+"\"></td><td width=\"82%\" align=\"left\" valign=\"bottom\"><span class=\"menuSC"+sizestr+"\" style=\"color:gray;\">αŮ���¼�</span><span class=\"menuSE"+sizestr+"\" style=\"color:gray;\">Fake Girlfriend Event</span></td><td width=\"4%\" align=\"left\" valign=\"bottom\" class=\"menuN"+sizestr+"\">39</td></tr>\
</table>";
box[14][0]=new ButtonBase(x(0),y(yLevel),"text",tempString,"btn",HEADERWIDTH-YSCALE);
box[14][0].addClick(function(){gotopage(39)});
box[14][0].addTitle("���ת����39ҳ");
box[14][0].addOver(tempFuncOver);
box[14][0].addOut(tempFuncOut);
//----------
box[15]=new Array();
yLevel+=2;
tempString="<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"90%\">\
<tr><td width=\"12%\" align=\"center\">"+getImgStr(src_route_kotomi,TITLEMARKSIZE/2,TITLEMARKSIZE/2)+"</td><td width=\"84%\" align=\"left\" valign=\"bottom\"><span class=\"menuSC"+sizestr+"\">һ֮�� ����</span><span class=\"menuSE"+sizestr+"\">Kotomi Ichinose</span></td><td width=\"4%\" align=\"left\" valign=\"bottom\" class=\"menuN"+sizestr+"\">40</td></tr>\
</table>";
box[15][0]=new ButtonBase(x(0),y(yLevel),"text",tempString,"btn",HEADERWIDTH-YSCALE);
box[15][0].addClick(function(){gotopage(40)});
box[15][0].addTitle("���ת����40ҳ");
box[15][0].addOver(tempFuncOver);
box[15][0].addOut(tempFuncOut);
//----------
box[16]=new Array();
yLevel+=2;
tempString="<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"90%\">\
<tr><td width=\"12%\" align=\"center\">"+getImgStr(src_route_fuuko,TITLEMARKSIZE/2,TITLEMARKSIZE/2)+"</td><td width=\"84%\" align=\"left\" valign=\"bottom\"><span class=\"menuSC"+sizestr+"\">���� ����</span><span class=\"menuSE"+sizestr+"\">Fuuko Ibuki</span></td><td width=\"4%\" align=\"left\" valign=\"bottom\" class=\"menuN"+sizestr+"\">43</td></tr>\
</table>";
box[16][0]=new ButtonBase(x(0),y(yLevel),"text",tempString,"btn",HEADERWIDTH-YSCALE);
box[16][0].addClick(function(){gotopage(43)});
box[16][0].addTitle("���ת����43ҳ");
box[16][0].addOver(tempFuncOver);
box[16][0].addOut(tempFuncOut);
//----------
box[17]=new Array();
yLevel+=2;
tempString="<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"90%\">\
<tr><td width=\"14%\" align=\"center\" height=\""+TITLEMARKSIZE/2+"\"></td><td width=\"82%\" align=\"left\" valign=\"bottom\"><span class=\"menuSC"+sizestr+"\" style=\"color:gray;\">�ر��ڿν�ʦ��ѡ</span><span class=\"menuSE"+sizestr+"\" style=\"color:gray;\">Election for Teacher of Special Class</span></td><td width=\"4%\" align=\"left\" valign=\"bottom\" class=\"menuN"+sizestr+"\">47</td></tr>\
</table>";
box[17][0]=new ButtonBase(x(0),y(yLevel),"text",tempString,"btn",HEADERWIDTH-YSCALE);
box[17][0].addClick(function(){gotopage(47)});
box[17][0].addTitle("���ת����47ҳ");
box[17][0].addOver(tempFuncOver);
box[17][0].addOut(tempFuncOut);
//----------
box[18]=new Array();
yLevel+=2;
tempString="<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"90%\">\
<tr><td width=\"14%\" align=\"center\" height=\""+TITLEMARKSIZE/2+"\"></td><td width=\"82%\" align=\"left\" valign=\"bottom\"><span class=\"menuSC"+sizestr+"\" style=\"color:gray;\">���Ӵ�ʦ</span><span class=\"menuSE"+sizestr+"\" style=\"color:gray;\">Fukko Master</span></td><td width=\"4%\" align=\"left\" valign=\"bottom\" class=\"menuN"+sizestr+"\">48</td></tr>\
</table>";
box[18][0]=new ButtonBase(x(0),y(yLevel),"text",tempString,"btn",HEADERWIDTH-YSCALE);
box[18][0].addClick(function(){gotopage(48)});
box[18][0].addTitle("���ת����48ҳ");
box[18][0].addOver(tempFuncOver);
box[18][0].addOut(tempFuncOut);
//----------
box[19]=new Array();
yLevel+=2;
tempString="<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"90%\">\
<tr><td width=\"12%\" align=\"center\">"+getImgStr(src_route_nagisa,TITLEMARKSIZE/2,TITLEMARKSIZE/2)+"</td><td width=\"84%\" align=\"left\" valign=\"bottom\"><span class=\"menuSC"+sizestr+"\">�ź� �/�Ҵ� ����</span><span class=\"menuSE"+sizestr+"\">Nagisa Furukawa / Toshio Yukimura</span></td><td width=\"4%\" align=\"left\" valign=\"bottom\" class=\"menuN"+sizestr+"\">51</td></tr>\
</table>";
box[19][0]=new ButtonBase(x(0),y(yLevel),"text",tempString,"btn",HEADERWIDTH-YSCALE);
box[19][0].addClick(function(){gotopage(51)});
box[19][0].addTitle("���ת����51ҳ");
box[19][0].addOver(tempFuncOver);
box[19][0].addOut(tempFuncOut);
//----------
box[20]=new Array();
yLevel+=2;
tempString="<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"90%\">\
<tr><td width=\"14%\" align=\"center\" height=\""+TITLEMARKSIZE/2+"\"></td><td width=\"82%\" align=\"left\" valign=\"bottom\"><span class=\"menuSC"+sizestr+"\" style=\"color:gray;\">3��3������</span><span class=\"menuSE"+sizestr+"\" style=\"color:gray;\">3 on 3 Basketball Match</span></td><td width=\"4%\" align=\"left\" valign=\"bottom\" class=\"menuN"+sizestr+"\">56</td></tr>\
</table>";
box[20][0]=new ButtonBase(x(0),y(yLevel),"text",tempString,"btn",HEADERWIDTH-YSCALE);
box[20][0].addClick(function(){gotopage(56)});
box[20][0].addTitle("���ת����56ҳ");
box[20][0].addOver(tempFuncOver);
box[20][0].addOut(tempFuncOut);
//----------
box[21]=new Array();
yLevel+=2;
tempString="<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"90%\">\
<tr><td width=\"12%\" align=\"center\">"+getImgStr(src_route_gunfight,TITLEMARKSIZE/2,TITLEMARKSIZE/2)+"</td><td width=\"84%\" align=\"left\" valign=\"bottom\"><span class=\"menuSC"+sizestr+"\">ǹս��Ϸ/ҵ�����</span><span class=\"menuSE"+sizestr+"\">Gunfight Game / Amateur Baseball</span></td><td width=\"4%\" align=\"left\" valign=\"bottom\" class=\"menuN"+sizestr+"\">59</td></tr>\
</table>";
box[21][0]=new ButtonBase(x(0),y(yLevel),"text",tempString,"btn",HEADERWIDTH-YSCALE);
box[21][0].addClick(function(){gotopage(59)});
box[21][0].addTitle("���ת����59ҳ");
box[21][0].addOver(tempFuncOver);
box[21][0].addOut(tempFuncOut);
//----------
box[22]=new Array();
yLevel+=3;
tempString="<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"90%\">\
<tr><td width=\"12%\" align=\"left\">"+getImgStr(src_route_public,2*TITLEMARKSIZE/3,2*TITLEMARKSIZE/3)+"</td><td width=\"33%\" align=\"left\"><div class=\"menuL"+sizestr+"\" style=\"height:"+STRIPHEIGHT+"px; width:"+STRIPWIDTH+"px; "+getBgStr(src_strip_bg)+"\">��AFTER STORY</div></td><td width=\"55%\" align=\"right\">"+getImgStr(src_footer_page[6],NUMBERWIDTH,NUMBERHEIGHT)+getImgStr(src_footer_page[2],NUMBERWIDTH,NUMBERHEIGHT)+"</td></tr>\
</table>";
box[22][0]=new ButtonBase(x(0),y(yLevel),"text",tempString,"btn",HEADERWIDTH-YSCALE);
board[board.length]=Board(liny(0.5),liny(2.5));
box[22][0].addClick(function(){gotopage(62)});
box[22][0].addTitle("���ת����62ҳ");
//----------
box[23]=new Array();
yLevel+=3;
tempString="<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"90%\">\
<tr><td width=\"14%\" align=\"center\" height=\""+TITLEMARKSIZE/2+"\"></td><td width=\"82%\" align=\"left\" valign=\"bottom\"><span class=\"menuSC"+sizestr+"\" style=\"color:gray;\">��ҵ����</span><span class=\"menuSE"+sizestr+"\" style=\"color:gray;\">Graduation Ceremony</span></td><td width=\"4%\" align=\"left\" valign=\"bottom\" class=\"menuN"+sizestr+"\">68</td></tr>\
</table>";
box[23][0]=new ButtonBase(x(0),y(yLevel),"text",tempString,"btn",HEADERWIDTH-YSCALE);
box[23][0].addClick(function(){gotopage(68)});
box[23][0].addTitle("���ת����68ҳ");
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
	  <table width=\""+COPYRIGHTWIDTH+"\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td width=\""+COPYRIGHTITEMNAMEWIDTH+"\" height=\""+COPYRIGHTMONJIHEIGHT+"\" style=\""+getBgStr(src_copyright_bg)+"\" class=\"menuItemName"+sizestr+"\">���淢��</td><td width=\""+COPYRIGHTPADDINGWIDTH+"\"></td><td width=\""+COPYRIGHTITEMCONTWIDTH+"\" class=\"menuItemCont"+sizestr+"\">2008��4��14��</td></tr></table>\
	  <table width=\""+COPYRIGHTWIDTH+"\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td height=\""+COPYRIGHTPADDINGHEIGHT+"\"></td></tr></table>\
	  <table width=\""+COPYRIGHTWIDTH+"\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td width=\""+COPYRIGHTITEMNAMEWIDTH+"\" height=\""+COPYRIGHTMONJIHEIGHT+"\" style=\""+getBgStr(src_copyright_bg)+"\" class=\"menuItemName"+sizestr+"\">�ߡ�����</td><td width=\""+COPYRIGHTPADDINGWIDTH+"\"></td><td width=\""+COPYRIGHTITEMCONTWIDTH+"\" class=\"menuItemCont"+sizestr+"\">��������{(Kamikey)}</td></tr></table>\
	  <table width=\""+COPYRIGHTWIDTH+"\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td height=\""+COPYRIGHTPADDINGHEIGHT+"\"></td></tr></table>\
	  <table width=\""+COPYRIGHTWIDTH+"\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td width=\""+COPYRIGHTITEMNAMEWIDTH+"\" height=\""+COPYRIGHTMONJIHEIGHT+"\" style=\""+getBgStr(src_copyright_bg)+"\" class=\"menuItemName"+sizestr+"\">ԭ������</td><td width=\""+COPYRIGHTPADDINGWIDTH+"\"></td><td width=\""+COPYRIGHTITEMCONTWIDTH+"\" class=\"menuItemCont"+sizestr+"\">{Roc-Dark(KeyFC/Kamikey)}</td></tr></table>\
	  <table width=\""+COPYRIGHTWIDTH+"\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td height=\""+COPYRIGHTPADDINGHEIGHT+"\"></td></tr></table>\
	  <table width=\""+COPYRIGHTWIDTH+"\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td width=\""+COPYRIGHTITEMNAMEWIDTH+"\" height=\""+COPYRIGHTMONJIHEIGHT+"\" style=\""+getBgStr(src_copyright_bg)+"\" class=\"menuItemName"+sizestr+"\">��������</td><td width=\""+COPYRIGHTPADDINGWIDTH+"\"></td><td width=\""+COPYRIGHTITEMCONTWIDTH+"\" class=\"menuItemCont"+sizestr+"\">{Nagao Kagetora(Kamikey)}</td></tr></table>\
	  <table width=\""+COPYRIGHTWIDTH+"\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td height=\""+COPYRIGHTPADDINGHEIGHT+"\"></td></tr></table>\
	  <table width=\""+COPYRIGHTWIDTH+"\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td width=\""+COPYRIGHTITEMNAMEWIDTH+"\" height=\""+COPYRIGHTMONJIHEIGHT+"\" style=\""+getBgStr(src_copyright_bg)+"\" class=\"menuItemName"+sizestr+"\">��ϯ����</td><td width=\""+COPYRIGHTPADDINGWIDTH+"\"></td><td width=\""+COPYRIGHTITEMCONTWIDTH+"\" class=\"menuItemCont"+sizestr+"\">{Roc-Dark(KeyFC/Kamikey)}</td></tr></table>\
	  <table width=\""+COPYRIGHTWIDTH+"\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td height=\""+COPYRIGHTPADDINGHEIGHT+"\"></td></tr></table>\
	  <table width=\""+COPYRIGHTWIDTH+"\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td width=\""+COPYRIGHTITEMNAMEWIDTH+"\" height=\""+COPYRIGHTMONJIHEIGHT+"\" style=\""+getBgStr(src_copyright_bg)+"\" class=\"menuItemName"+sizestr+"\">�⡡����</td><td width=\""+COPYRIGHTPADDINGWIDTH+"\"></td><td width=\""+COPYRIGHTITEMCONTWIDTH+"\" class=\"menuItemCont"+sizestr+"\">{goodbest(KeyFC/Kamikey)}</td></tr><tr><td height=\""+COPYRIGHTMONJIHEIGHT+"\"></td><td></td><td class=\"menuItemCont"+sizestr+"\">{zero4(KeyFC/Kamikey)}</td></tr><tr><td height=\""+COPYRIGHTMONJIHEIGHT+"\"></td><td></td><td class=\"menuItemCont"+sizestr+"\">�����ʹħ{(Kamikey)}</td></tr><tr><td height=\""+COPYRIGHTMONJIHEIGHT+"\"></td><td></td><td class=\"menuItemCont"+sizestr+"\">����¤΁��h{(Kamikey)}</td></tr><tr><td height=\""+COPYRIGHTMONJIHEIGHT+"\"></td><td></td><td class=\"menuItemCont"+sizestr+"\">���۵Ŀ��_��{(Kamikey)}</td></tr></table>\
	  <table width=\""+COPYRIGHTWIDTH+"\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td height=\""+COPYRIGHTPADDINGHEIGHT+"\"></td></tr></table>\
	  <table width=\""+COPYRIGHTWIDTH+"\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td width=\""+COPYRIGHTITEMNAMEWIDTH+"\" height=\""+COPYRIGHTMONJIHEIGHT+"\" style=\""+getBgStr(src_copyright_bg)+"\" class=\"menuItemName"+sizestr+"\">У������</td><td width=\""+COPYRIGHTPADDINGWIDTH+"\"></td><td width=\""+COPYRIGHTITEMCONTWIDTH+"\" class=\"menuItemCont"+sizestr+"\">{Ligueston(Kamikey)}</td></tr><tr><td height=\""+COPYRIGHTMONJIHEIGHT+"\"></td><td></td><td class=\"menuItemCont"+sizestr+"\">{Nagao Kagetora(Kamikey)}</td></tr></table>\
	  <table width=\""+COPYRIGHTWIDTH+"\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td height=\""+COPYRIGHTPADDINGHEIGHT+"\"></td></tr></table>\
	  <table width=\""+COPYRIGHTWIDTH+"\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td width=\""+COPYRIGHTITEMNAMEWIDTH+"\" height=\""+COPYRIGHTMONJIHEIGHT+"\" style=\""+getBgStr(src_copyright_bg)+"\" class=\"menuItemName"+sizestr+"\">ƽ�����</td><td width=\""+COPYRIGHTPADDINGWIDTH+"\"></td><td width=\""+COPYRIGHTITEMCONTWIDTH+"\" class=\"menuItemCont"+sizestr+"\">{Nagao Kagetora(Kamikey)}</td></tr><tr><td height=\""+COPYRIGHTMONJIHEIGHT+"\"></td><td></td><td class=\"menuItemCont"+sizestr+"\">{Roc-Dark(KeyFC/Kamikey)}</td></tr><tr><td height=\""+COPYRIGHTMONJIHEIGHT+"\"></td><td></td><td class=\"menuItemCont"+sizestr+"\">��������{(Kamikey)}</td></tr><tr><td height=\""+COPYRIGHTMONJIHEIGHT+"\"></td><td></td><td class=\"menuItemCont"+sizestr+"\">���۵Ŀ��_��{(Kamikey)}</td></tr></table>\
	  <table width=\""+COPYRIGHTWIDTH+"\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td height=\""+COPYRIGHTPADDINGHEIGHT+"\"></td></tr></table>\
	  <table width=\""+COPYRIGHTWIDTH+"\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td width=\""+COPYRIGHTITEMNAMEWIDTH+"\" height=\""+COPYRIGHTMONJIHEIGHT+"\" style=\""+getBgStr(src_copyright_bg)+"\" class=\"menuItemName"+sizestr+"\">��ҳ���</td><td width=\""+COPYRIGHTPADDINGWIDTH+"\"></td><td width=\""+COPYRIGHTITEMCONTWIDTH+"\" class=\"menuItemCont"+sizestr+"\">{Ligueston(Kamikey)}</td></tr></table><table width=\""+COPYRIGHTWIDTH+"\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td height=\""+COPYRIGHTPADDINGHEIGHT+"\"></td></tr></table><table width=\""+COPYRIGHTWIDTH+"\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td width=\""+COPYRIGHTITEMNAMEWIDTH+"\" height=\""+COPYRIGHTMONJIHEIGHT+"\" style=\""+getBgStr(src_copyright_bg)+"\" class=\"menuItemName"+sizestr+"\">�ơ�����</td><td width=\""+COPYRIGHTPADDINGWIDTH+"\"></td><td width=\""+COPYRIGHTITEMCONTWIDTH+"\" rowspan=\"3\" align=\"left\">"+getImgStr(src_logo_kami,COPYRIGHTLOGOWIDTH1,COPYRIGHTLOGOHEIGHT)+"</td></tr><tr><td height=\""+COPYRIGHTMONJIHEIGHT+"\"></td><td></td></tr><tr><td height=\""+COPYRIGHTMONJIHEIGHT/2+"\"></td><td></td></tr><tr><td height=\""+COPYRIGHTMONJIHEIGHT+"\"></td><td></td><td class=\"menuItemCont"+sizestr+"\">�񴴹����� / �������</td></tr><tr><td height=\""+COPYRIGHTMONJIHEIGHT+"\"></td><td></td><td class=\"menuItemCont"+sizestr+"\"><a target=\"_blank\" href=\"http://www.kamikey.com\">{http://www.kamikey.com}</a></td></tr><tr><td height=\""+COPYRIGHTMONJIHEIGHT+"\"></td><td></td><td width=\""+COPYRIGHTITEMCONTWIDTH+"\" rowspan=\"3\" align=\"left\">"+getImgStr(src_logo_keyfc,COPYRIGHTLOGOWIDTH2,COPYRIGHTLOGOHEIGHT)+"</td></tr><tr><td height=\""+COPYRIGHTMONJIHEIGHT+"\"></td><td></td></tr><tr><td height=\""+COPYRIGHTMONJIHEIGHT/2+"\"></td><td></td></tr><tr><td height=\""+COPYRIGHTMONJIHEIGHT+"\"></td><td></td><td class=\"menuItemCont"+sizestr+"\">{Key Fans Club(KFC)}</td></tr><tr><td height=\""+COPYRIGHTMONJIHEIGHT+"\"></td><td></td><td class=\"menuItemCont"+sizestr+"\"><a target=\"_blank\" href=\"http://www.keyfc.net/bbs\">{http://www.keyfc.net/bbs}</a></td></tr></table>\
	  <table width=\""+COPYRIGHTWIDTH+"\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td height=\""+COPYRIGHTPADDINGHEIGHT+"\"></td></tr></table>\
	  <table width=\""+COPYRIGHTWIDTH+"\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td width=\""+COPYRIGHTITEMNAMEWIDTH+"\" height=\""+COPYRIGHTMONJIHEIGHT+"\" style=\""+getBgStr(src_copyright_bg)+"\" class=\"menuItemName"+sizestr+"\">���빩��</td><td width=\""+COPYRIGHTPADDINGWIDTH+"\"></td><td width=\""+COPYRIGHTITEMCONTWIDTH+"\" rowspan=\"3\" align=\"left\">"+getImgStr(src_logo_clnd,COPYRIGHTLOGOWIDTH2,COPYRIGHTLOGOHEIGHT)+"</td></tr><tr><td height=\""+COPYRIGHTMONJIHEIGHT+"\"></td><td></td></tr><tr><td height=\""+COPYRIGHTMONJIHEIGHT/2+"\"></td><td></td></tr><tr><td height=\""+COPYRIGHTMONJIHEIGHT+"\"></td><td></td><td class=\"menuItemCont"+sizestr+"\">{Clannad}���Ļ�{ / Key Fans Club(KFC)}</td></tr><tr><td height=\""+COPYRIGHTMONJIHEIGHT+"\"></td><td></td><td class=\"menuItemCont"+sizestr+"\"><a target=\"_blank\" href=\"http://www.keyfc.net/project/cclannad\">{http://www.keyfc.net/project/cclannad}</a></td></tr><tr><td height=\""+COPYRIGHTMONJIHEIGHT+"\"></td><td></td><td></td></tr><tr><td height=\""+COPYRIGHTMONJIHEIGHT+"\"></td><td></td><td class=\"menuItemCont"+sizestr+"\">�����У���Ĳ� / �ٶ�����{CLANNAD}��</td></tr><tr><td height=\""+COPYRIGHTMONJIHEIGHT+"\"></td><td></td><td class=\"menuItemCont"+sizestr+"\"><a target=\"_blank\" href=\"http://tieba.baidu.com/clannad\">{http://tieba.baidu.com/clannad}</a></td></tr></table>\
	  <table width=\""+COPYRIGHTWIDTH+"\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td height=\""+COPYRIGHTPADDINGHEIGHT+"\"></td></tr></table>\
	  <table width=\""+COPYRIGHTWIDTH+"\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td width=\""+COPYRIGHTITEMNAMEWIDTH*0.97+"\" height=\""+COPYRIGHTMONJIHEIGHT+"\" style=\""+getBgStr(src_copyright_bg)+"\" class=\"menuItemName"+sizestr+"\">��Ȩ����</td><td width=\""+COPYRIGHTPADDINGWIDTH+"\"></td><td width=\""+COPYRIGHTITEMCONTWIDTH+"\" class=\"menuItemCont"+sizestr+"\" style=\"visibility:hidden\"></td></tr>\
<tr><td height=\""+COPYRIGHTMONJIHEIGHT/2+"\" colspan=\"3\"></td></tr>\
<tr><td height=\""+COPYRIGHTMONJIHEIGHT+"\" colspan=\"3\" class=\"menuItemCont"+sizestr+"\" align=\"left\">\
<p style=\"line-height:120%\">����Ʒ���õ�{CLANNAD} <font face=\"΢���ź�,MS Gothic\">-����ʥ�-</font>���ձ�{Visual Art's / Key}��˾����Ʒ��<br>{CLANNAD} <font face=\"΢���ź�,MS Gothic\">-����ʥ�-</font><br>{Copyright &copy; 2004~2007 Visual Art's / Key. All Rights Reserved.}<br><a target=\"_blank\" href=\"http://key.visualarts.gr.jp/\">{http://key.visualarts.gr.jp/}</a></p>\
<p style=\"line-height:120%\">����Ʒ��������������ʹ�����{RLdev}��{H&aelig;leth}����Ʒ��<br>{RLdev}<br>{Copyright &copy; 2006 H&aelig;leth}.<br><a target=\"_blank\" href=\"http://www.haeleth.net/\">{http://www.haeleth.net/}</a></p>\
<p style=\"line-height:120%\">����Ʒ�����߼���Ȩ������Ϊ�񴴹�����{(Researching Center of KamiKey)}��<br>{CLANNAD Visual Guidebook} <font face=\"΢���ź�,MS Gothic\">-����ʥ�- �ӥ��奢�� �����ɥ֥å�</font><br>{Copyright &copy; 2008 Researching Center of KamiKey.}<br><a target=\"_blank\" href=\"http://www.KamiKey.com/\">{http://www.KamiKey.com/}</a></p>\
<p style=\"line-height:120%\">����Ʒ������Ȩ��������δ���񴴹����������������⸴�ơ�ת�أ�����������������������������Լ�����������޸ġ���������ıȡ��ҵ���档<br>�񴴹����鱣���Ա���Ʒ�����ս���Ȩ��</p>\
</td></tr>\
	  </table>\
	  <table width=\""+COPYRIGHTWIDTH+"\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td height=\""+COPYRIGHTPADDINGHEIGHT+"\"></td></tr></table>\
	  <table width=\""+COPYRIGHTWIDTH+"\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td width=\""+COPYRIGHTITEMNAMEWIDTH+"\" height=\""+COPYRIGHTMONJIHEIGHT+"\" style=\""+getBgStr(src_copyright_bg)+"\" class=\"menuItemName"+sizestr+"\">��ϵ����</td><td width=\""+COPYRIGHTPADDINGWIDTH+"\"></td><td width=\""+COPYRIGHTITEMCONTWIDTH+"\" class=\"menuItemCont"+sizestr+"\" style=\"visibility:hidden\"></td></tr>\
<tr><td height=\""+COPYRIGHTMONJIHEIGHT/2+"\" colspan=\"3\"></td></tr>\
<tr><td height=\""+COPYRIGHTMONJIHEIGHT+"\" colspan=\"3\" class=\"menuItemCont"+sizestr+"\" align=\"left\">\
<p style=\"line-height:120%\">����Ʒ������ʽ���������������������������ҳ��<br><a target=\"_blank\" href=\"http://www.kamikey.com/viewthread.php?tid=604\">{http://www.kamikey.com/viewthread.php?tid=604}</a><br><a target=\"_blank\" href=\"http://www.keyfc.net/bbs/showtopic-24990.aspx\">{http://www.keyfc.net/bbs/showtopic-24990.aspx}</a></p>\
<p style=\"line-height:120%\">���߷��͵����ʼ�����<br>{moerurd@gmail.com}<br>{moerurd@hotmail.com}</p>\
<p style=\"line-height:120%\">�񴴹������л���Ĺ�ע��֧�֣�</p>\
</td></tr>\
	  </table>\
</td></tr>\
</table>";
tempString=tempString.replace(/\{/g,"<font face=Arial>");
tempString=tempString.replace(/\}/g,"</font>");
comment[0]=new ButtonBase(COMMENTLEFT,y(5),"text",tempString,"btn",COMMENTWIDTH);
box[25][0]=comment[0];
hdft["footer"]=Footer(liny(3),0);