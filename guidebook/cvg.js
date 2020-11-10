// CVG Main Script \Written By Ligueston@Kamikey

//Version Info
	/*v1.0	04.14	增加Comment的EventIllustration*/
	/*v1.05	04.17	增加半条竖线的addClick方法*/
	/*v1.1	04.17	增加Blink方法*/
	/*v1.11	04.21	修改标题*/
	/*v1.2  04.24	支持对IE6的透明png*/

//函数说明
	/*function Point(x,y)
		生成并且返回一个点.用于Link函数.
			x->int/x坐标
			y->int/y坐标
	function Header(route,routeC,routeE,dateC,dateE)
		生成并且返回标头.
			route->str/标头指向的路线图片,可用列表"public"|"misae"|"tomoyo"|"yukine"|"fujibayashi"|"kappei"|"sunohara"|"kotomi"|"fuuko"|"nagisa"|"gunfight"
			routeC->str/标头路线中文内容
			routeE->str/标头路线英文内容
			dateC->str/标头日期中文内容
			dateE->str/标头日期英文内容
	function Footer(height,page)
		生成并返回右边栏
			height->int/高度
			page->int/页数
	function Textbox_Condition(x,y,text,route)
	function Textbox_Option(x,y,text,route)
	function Textbox_Selection(x,y,text,route)
	function Textbox_Jump(x,y,text,route)
	function Textbox_Block(x,y,text,route)
	function Textbox_Quit(x,y,text,route)
		生成并且返回相应的按钮
			x->int/x坐标,一般使用x()函数确定
			y->int/y坐标,一般使用y()函数确定
			text->str/按钮中显示文字
			route->str/角标,格式"[方向]|[控制样式][文字]|[控制样式][文字]|...",方向可为"r"或"l","l"时控制样式为空时绿色,为"-"时红色,"r"时相反.控制样式为"+"时都为蓝色...举例"l|琴美|-风子|+未触发"
	function Textbox_Date(x,y,text,type)
		生成并且返回相应的日期按钮
			x->int/x坐标,一般使用x()函数确定
			y->int/y坐标,一般使用y()函数确定
			text->str/按钮中显示文字
			type->str/在上面时设置为"top",以修正位置,在下时可以留空
	function Textbox_Condition_C(x,y,text,number,Summery,Select,Caution,Option,Events,EventIllu,Title,yAdjust,route)
	function Textbox_Option_C(x,y,text,number,Summery,Select,Caution,Option,Events,EventIllu,Title,yAdjust,route)
	function Textbox_Selection_C(x,y,text,number,Summery,Select,Caution,Option,Events,EventIllu,Title,yAdjust,route)
		生成并且返回相应带注释的按钮
			x->int/x坐标,一般使用x()函数确定
			y->int/y坐标,一般使用y()函数确定
			text->str/按钮中显示文字
			number->str/注释索引号
			Summery->str/总结行,对应[A]
			Select->str/注释行,也就是颜色稍深的那行,对应[B],对于蓝色高亮请用"{"和"}"环绕,红色高亮请用"["和"]"环绕
			Caution->str/提示行,也就是有叹号标志的那行,对应[C].
			Option->str/选项行,样式"[控制样式][文字]|..."最多三个,控制样式为"+"时箭头向右,"-"时向下
			Events->str/事件行,样式"[事件1]...[事件8]",蓝色的图标请用"1",灰色用"0"...举例"01001100"
			EventIllu->str/事件附加说明
			Title->str/副标题,如果为空的话使用text内容,否则用此处的
			yAdjust->int/注释栏y坐标偏移
			route->str/同普通按钮的route
	function Link()
		生成并且返回连线
			参数第一个和最后一个可以为按钮对象,其余的必须为点对象.位置在前的参数的y坐标不得小于在位置在后的.
	function Board(y,y2)
		生成并返回一个底板
			y->int/起始y坐标
			y2->int/终止y坐标*/

//Basic Function

const documentWrite = html => $('body').append($(html))

	function GetRequest()
	{
		var url = location.search; //获取url中"?"符后的字串
		var theRequest = new Object();
		if(url.indexOf("?") != -1){
			var str = url.substr(1);
			strs = str.split("&");
			for(var i = 0; i < strs.length; i ++){
				theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
			}
		}
		return theRequest;
	}
	function include_css(css_file) {//Copied from http://www.sloppy.cn/blog/article.asp?id=167 with Modification
		var html_doc = document.getElementsByTagName('head')[0];
		css = document.createElement('link');
		css.setAttribute('rel', 'stylesheet');
		css.setAttribute('type', 'text/css');
		css.setAttribute('href', css_file);
		html_doc.appendChild(css);
		return false;
	}
	function setScrollLeft(left){// Copied from http://hi.baidu.com/elseif/blog/item/1b55f17ecc38c73a0dd7da65.html with Modification
		if (typeof window.pageXOffset != 'undefined') {
			window.pageXOffset=left;
		}
		else if (typeof document.compatMode != 'undefined' && document.compatMode != 'BackCompat') {
			document.documentElement.scrollLeft=left;
		}
		else if (typeof document.body != 'undefined') {
			document.body.scrollLeft=left;
		}
	}

	function lib_bwcheck(){ //Browsercheck (needed)
		this.ver=navigator.appVersion;
		this.agent=navigator.userAgent;
		this.opera5=this.agent.indexOf("Opera 5")>-1;
		this.ie7=(this.ver.indexOf("MSIE 7")>-1 && !this.opera5)?1:0;
		this.ie6=(this.ver.indexOf("MSIE 6")>-1 && !this.opera5)?1:0;
		this.safari=navigator.userAgent.indexOf("Safari")>-1;
		return this;
	}
	var bw=new lib_bwcheck();

	var objArr=new Array(); //对象引用存储数组,名字引用

	function getObjectRef(name) { //照id取对象
	  if(document.getElementById) return document.getElementById(name);
	  else if(document.all) return document.all[name];
	  else return null;
	}
	function show(name){ //显示对象if hidden
		var obj = getObjectRef(name);
		if(obj){
			if(blockshow)obj.style.display = "block";
			else obj.style.visibility = "visible";
		}
	}
	function hide(name){ //隐藏对象if visible
		var obj = getObjectRef(name);
		if(obj){
			if(blockshow)obj.style.display = "none";
			else obj.style.visibility = "hidden";
		}
	}
	function moveMeTo(name,x,y){ //移动对象if possible
		var obj = getObjectRef(name);
		if(obj){ obj.style.top = parseInt(y); obj.style.left = parseInt(x); }
	}
	function moveMeBy(name,x,y){ //移动对象if possible
		var obj = getObjectRef(name);
		if(obj){ obj.style.top = parseInt(obj.style.top)+parseInt(y); obj.style.left=parseInt(obj.style.left)+parseInt(x); }
	}
	function addMouseClick(name,func){ //给对象增加onclick事件
		var obj = getObjectRef(name);
		var ret=obj.onclick;
		if(obj){ obj.onclick=func; obj.style.cursor="hand";}
		return ret;
	}
	function remMouseClick(name){ //删去对象onclick事件
		var obj = getObjectRef(name);
		if(obj){ obj.onclick=null; obj.style.cursor="";}
	}
	function addMouseOver(name,func){ //给对象增加onmouseover事件
		var obj = getObjectRef(name);
		var ret=obj.onmouseover;
		if(obj){ obj.onmouseover=func; }
		return ret;
	}
	function remMouseOver(name){ //删去对象onmouseover事件
		var obj = getObjectRef(name);
		if(obj){ obj.onmouseover=null; }
	}
	function addMouseOut(name,func){ //给对象增加onmouseover事件
		var obj = getObjectRef(name);
		var ret=obj.onmouseout;
		if(obj){ obj.onmouseout=func; }
		return ret;
	}
	function remMouseOut(name){ //删去对象onmouseover事件
		var obj = getObjectRef(name);
		if(obj){ obj.onmouseout=null; }
	}
	function addTitle(name,title){
		var obj = getObjectRef(name);
		if(obj){ obj.title=title; }
	}
	function remTitle(name){
		var obj = getObjectRef(name);
		if(obj){ obj.title=""; }
	}
	function addLink(name,linkname){
		var obj = getObjectRef(name);
		if(obj){ $(obj).append($("<a name=\""+linkname+"\"/>")); }
	}

//Basic Vaiable
	var objCount=0; //对象计数
	var commentTop=0; //评论部分当前高度
	var checkImg=false; //标记是否进行图片缓存
	var appendix=bw.ie6&&false?".gif":".png"; //图片后缀
	var sizeSet;//大小设置
	sizeSet=GetRequest()["size"];
	if(isNaN(sizeSet))sizeSet=0;
	else sizeSet=parseInt(sizeSet);
	var lineRecord=new Array();
	var rqst=GetRequest();

	var box=new Array();
	var line=new Array();
	var comment=new Array();
	var commentShown=true;
	var board=new Array();
	var blockshow=false;
	var hdft=new Array();

	var COMMENTBGZINDEX=5;
	var BOARDZINDEX=5;
	var LINEZINDEX=6;
	var COMMENTZINDEX=7;
	var BUTTONZINDEX=8;
	var CHECKZINDEX=9;

	if(sizeSet==0){
		sizestr="Ori";
		outersize=6;
		var BGREPEATHEIGHT=30;

		var BUTTONWRAPWIDTH=400;
		var BUTTONWIDTH=350+2*outersize;
		var BUTTONHEIGHT=30+2*outersize;
		var BUBBLEWIDTH=50+2*outersize;
		var BUBBLEHEIGHT=20+2*outersize;
		var CHECKSIZE=30+2*outersize;
		var TEXTHEIGHT=30;
		var DATEWIDTH=100+2*outersize;
		var DATEHEIGHT=45+2*outersize;

		var BUBBLEOFFSETHEIGHT=-25;
		var BUBBLESPACING=3;
		var BUBBLEOFFSETHEIGHT2=7;

		var HEADERHEIGHT=130;
		var HEADERWIDTH=1600;
		var TITLEMARKSIZE=100;

		var COMMENTBGWIDTH=825;
		var COMMENTBGTOPHEIGHT=200;
		var COMMENTBGBOTTOMHEIGHT=100;
		var COMMENTBGPADDINGRIGHT=50;
		var COMMENTBGMARGINTOP=40;
		var COMMENTBGLEFT=HEADERWIDTH-25;
		var COMMENTMARKSIZE=40;

		var COMMENTWIDTH=750;
		var COMMENTLEFT=COMMENTBGLEFT+50;
		var COMMENTSPACING=20;
		var COMMENTTITLEHEIGHT=40;
		var COMMENTBASESPACING=10;
		var COMMENTBUTTONSIZE=42;
		var COMMENTEVENTHEIGHT=35;
		var COMMENTEVENTWIDTH=405;
		var COMMENTBARWIDTH=243;
		var COMMENTBARHEIGHT=20;

		var LINESIZE=12;
		var LINEBASEHEIGHT=30;
		var LINEBASELENGTH=200;
		var HALFDOTSIZE=3;
		var LINEADJUSTX=-4;
		var LINEOUTERSIZEADJUST=0;
		var LINEVERTICALADJUST=3;
		var LINEHORIZONALADJUST=3;

		var BOARDWIDTH=1600;
		var BORADFOOTERHEIGHT=45;
		var BOARDREAPETHEIGHT=10;

		var NUMBERWIDTH=40;
		var NUMBERHEIGHT=60;

		var BasicX=25;
		var XSCALE=200;
		var BasicY=100;
		var YSCALE=30;
	}
	else if(sizeSet==1){
		sizestr="Screen";
		outersize=4;
		var BGREPEATHEIGHT=18;

		var BUTTONWRAPWIDTH=240;
		var BUTTONWIDTH=210+2*outersize;
		var BUTTONHEIGHT=18+2*outersize;
		var BUBBLEWIDTH=30+2*outersize;
		var BUBBLEHEIGHT=12+2*outersize;
		var CHECKSIZE=18+2*outersize;
		var TEXTHEIGHT=18;
		var DATEWIDTH=60+2*outersize;
		var DATEHEIGHT=27+2*outersize;

		var BUBBLEOFFSETHEIGHT=-15;
		var BUBBLESPACING=2;
		var BUBBLEOFFSETHEIGHT2=5;

		var HEADERHEIGHT=78;
		var HEADERWIDTH=960;
		var TITLEMARKSIZE=60;

		var COMMENTBGWIDTH=495;
		var COMMENTBGTOPHEIGHT=120;
		var COMMENTBGBOTTOMHEIGHT=60;
		var COMMENTBGPADDINGRIGHT=30;
		var COMMENTBGMARGINTOP=24;
		var COMMENTBGLEFT=HEADERWIDTH-15;
		var COMMENTMARKSIZE=24;

		var COMMENTWIDTH=450;
		var COMMENTLEFT=COMMENTBGLEFT+30;
		var COMMENTSPACING=12;
		var COMMENTTITLEHEIGHT=24;
		var COMMENTBASESPACING=6;
		var COMMENTBUTTONSIZE=25;
		var COMMENTEVENTHEIGHT=21;
		var COMMENTEVENTWIDTH=243;
		var COMMENTBARWIDTH=146;
		var COMMENTBARHEIGHT=12;

		var LINESIZE=7;
		var LINEBASEHEIGHT=18;
		var LINEBASELENGTH=120;
		var HALFDOTSIZE=2;
		var LINEADJUSTX=-2;
		var LINEOUTERSIZEADJUST=-1;
		var LINEVERTICALADJUST=2;
		var LINEHORIZONALADJUST=3;

		var BOARDWIDTH=960;
		var BORADFOOTERHEIGHT=27;
		var BOARDREAPETHEIGHT=6;

		var NUMBERWIDTH=24;
		var NUMBERHEIGHT=36;

		var BasicX=15;
		var XSCALE=120;
		var BasicY=60;
		var YSCALE=18;
	}

//Image Source
var folder=new Array("Background/","Bubble/","Comment/","Title/","Line/","Textbox/","Board/","Number/","Misc/"); //图片前缀文件夹名
	var src_background=			sizestr+"/"+folder[0]+"Background_Pattern"		+appendix;

	var src_Textbox_Block=		sizestr+"/"+folder[5]+"Textbox_Block"			+appendix;
	var src_Textbox_Condition=	sizestr+"/"+folder[5]+"Textbox_Condition"		+appendix;
	var src_Textbox_Selection=	sizestr+"/"+folder[5]+"Textbox_Selection"		+appendix;
	//var src_Textbox_Jump=		sizestr+"/"+folder[5]+"Textbox_Jump"			+appendix;
	var src_Textbox_Option=		sizestr+"/"+folder[5]+"Textbox_Option"			+appendix;
	var src_Textbox_Date=		sizestr+"/"+folder[5]+"Textbox_Date"			+appendix;
	var src_bubble_enter=		sizestr+"/"+folder[1]+"Bubble_Enter"			+appendix;
	var src_bubble_exit=		sizestr+"/"+folder[1]+"Bubble_Exit"				+appendix;
	var src_bubble_untrigger=	sizestr+"/"+folder[1]+"Bubble_Untrigger"		+appendix;

	var src_route_public=		sizestr+"/"+folder[3]+"Title_Mark_public"		+appendix;
	var src_route_misae=		sizestr+"/"+folder[3]+"Title_Mark_misae"		+appendix;
	var src_route_tomoyo=		sizestr+"/"+folder[3]+"Title_Mark_tomoyo"		+appendix;
	var src_route_yukine=		sizestr+"/"+folder[3]+"Title_Mark_yukine"		+appendix;
	var src_route_fujibayashi=	sizestr+"/"+folder[3]+"Title_Mark_fujibayashi"	+appendix;
	var src_route_kappei=		sizestr+"/"+folder[3]+"Title_Mark_kappei"		+appendix;
	var src_route_sunohara=		sizestr+"/"+folder[3]+"Title_Mark_sunohara"		+appendix;
	var src_route_kotomi=		sizestr+"/"+folder[3]+"Title_Mark_kotomi"		+appendix;
	var src_route_fuuko=		sizestr+"/"+folder[3]+"Title_Mark_fuuko"		+appendix;
	var src_route_nagisa=		sizestr+"/"+folder[3]+"Title_Mark_nagisa"		+appendix;
	var src_route_gunfight=		sizestr+"/"+folder[3]+"Title_Mark_gunfight"		+appendix;
	var src_header_bg=			sizestr+"/"+folder[3]+"Title_Frame"				+appendix;

	var src_footer_top=			sizestr+"/"+folder[0]+"Background_Frame[A]"		+appendix;
	var src_footer_mid=			sizestr+"/"+folder[0]+"Background_Frame[B]"		+appendix;
	var src_footer_bottom=		sizestr+"/"+folder[0]+"Background_Frame[C]"		+appendix;
	var num0=					sizestr+"/"+folder[7]+"Number_0"					+appendix;
	var num1=					sizestr+"/"+folder[7]+"Number_1"					+appendix;
	var num2=					sizestr+"/"+folder[7]+"Number_2"					+appendix;
	var num3=					sizestr+"/"+folder[7]+"Number_3"					+appendix;
	var num4=					sizestr+"/"+folder[7]+"Number_4"					+appendix;
	var num5=					sizestr+"/"+folder[7]+"Number_5"					+appendix;
	var num6=					sizestr+"/"+folder[7]+"Number_6"					+appendix;
	var num7=					sizestr+"/"+folder[7]+"Number_7"					+appendix;
	var num8=					sizestr+"/"+folder[7]+"Number_8"					+appendix;
	var num9=					sizestr+"/"+folder[7]+"Number_9"					+appendix;
	var num0_s=					sizestr+"/"+folder[7]+"Number_0"					+appendix;
	var num1_s=					sizestr+"/"+folder[7]+"Number_1"					+appendix;
	var num2_s=					sizestr+"/"+folder[7]+"Number_2"					+appendix;
	var num3_s=					sizestr+"/"+folder[7]+"Number_3"					+appendix;
	var num4_s=					sizestr+"/"+folder[7]+"Number_4"					+appendix;
	var num5_s=					sizestr+"/"+folder[7]+"Number_5"					+appendix;
	var num6_s=					sizestr+"/"+folder[7]+"Number_6"					+appendix;
	var num7_s=					sizestr+"/"+folder[7]+"Number_7"					+appendix;
	var num8_s=					sizestr+"/"+folder[7]+"Number_8"					+appendix;
	var num9_s=					sizestr+"/"+folder[7]+"Number_9"					+appendix;
	var src_footer_page=		new Array(num0,num1,num2,num3,num4,num5,num6,num7,num8,num9);
	src_footer_page["FIN"]=		sizestr+"/"+folder[7]+"Number_Fin"						+appendix;
	var src_footer_page_select=	new Array(num0_s,num1_s,num2_s,num3_s,num4_s,num5_s,num6_s,num7_s,num8_s,num9_s);

	var src_commentbase_check=	sizestr+"/"+folder[2]+"Comment_Check"				+appendix;
	var src_commentbase_title=	sizestr+"/"+folder[2]+"Comment_Frame_Title"			+appendix;
	var src_commentbase_base=	sizestr+"/"+folder[2]+"Comment_Frame_Description"	+appendix;
	var src_commentbase_comment=sizestr+"/"+folder[2]+"Comment_Frame_Comment"		+appendix;
	var src_commentbase_hint=	sizestr+"/"+folder[2]+"Comment_Mark_Hint"			+appendix;
	var src_commentbase_option_A=sizestr+"/"+folder[2]+"Comment_Option_A"			+appendix;
	var src_commentbase_option_B=sizestr+"/"+folder[2]+"Comment_Option_B"			+appendix;
	var src_commentbase_event=	sizestr+"/"+folder[2]+"Comment_Tips"				+appendix;

	var jien1=					sizestr+"/"+folder[2]+"Comment_Mark_64HIT[A]"		+appendix;
	var jien2=					sizestr+"/"+folder[2]+"Comment_Mark_Spell[A]"		+appendix;
	var jien3=					sizestr+"/"+folder[2]+"Comment_Mark_Basketball[A]"	+appendix;
	var jien4=					sizestr+"/"+folder[2]+"Comment_Mark_FakeGF[A]"		+appendix;
	var jien5=					sizestr+"/"+folder[2]+"Comment_Mark_Master[A]"		+appendix;
	var jien6=					sizestr+"/"+folder[2]+"Comment_Mark_Impression[A]"	+appendix;
	var jien7=					sizestr+"/"+folder[2]+"Comment_Mark_Baseball[A]"	+appendix;
	var jien8=					sizestr+"/"+folder[2]+"Comment_Mark_Graduation[A]"	+appendix;
	var src_comment_mark_en=	new Array(jien1,jien2,jien3,jien4,jien5,jien6,jien7,jien8);

	var jiun1=					sizestr+"/"+folder[2]+"Comment_Mark_64HIT[B]"		+appendix;
	var jiun2=					sizestr+"/"+folder[2]+"Comment_Mark_Spell[B]"		+appendix;
	var jiun3=					sizestr+"/"+folder[2]+"Comment_Mark_Basketball[B]"	+appendix;
	var jiun4=					sizestr+"/"+folder[2]+"Comment_Mark_FakeGF[B]"		+appendix;
	var jiun5=					sizestr+"/"+folder[2]+"Comment_Mark_Master[B]"		+appendix;
	var jiun6=					sizestr+"/"+folder[2]+"Comment_Mark_Impression[B]"	+appendix;
	var jiun7=					sizestr+"/"+folder[2]+"Comment_Mark_Baseball[B]"	+appendix;
	var jiun8=					sizestr+"/"+folder[2]+"Comment_Mark_Graduation[B]"	+appendix;
	var src_comment_mark_un=	new Array(jiun1,jiun2,jiun3,jiun4,jiun5,jiun6,jiun7,jiun8);

	var src_dot_v=				sizestr+"/"+folder[4]+"Line_1"						+appendix;
	var src_dot_hv=				sizestr+"/"+folder[4]+"Line_2"						+appendix;
	var src_dot_h=				sizestr+"/"+folder[4]+"Line_3"						+appendix;

	var src_board_top=			sizestr+"/"+folder[6]+"Board_Frame_Top"				+appendix;
	var src_board_mid=			sizestr+"/"+folder[6]+"Board_Frame_Body"			+appendix;
	var src_board_bottom=		sizestr+"/"+folder[6]+"Board_Frame_Bottom"			+appendix;

	document.body.background=src_background;

//Object Definition
	//Point
	function PointBase(x,y){
		this.leftx=x;
		this.topy=y;
		this.toString=function(){return "("+this.leftx+","+this.topy+")";}
	}

	//Header
	function HeaderBase(x,y,route,routeC,routeE,dateC,dateE,titlecss,contentcss){
		switch(route){
			case "public":{this.headsrc=src_route_public;break;}
			case "misae":{this.headsrc=src_route_misae;break;}
			case "tomoyo":{this.headsrc=src_route_tomoyo;break;}
			case "yukine":{this.headsrc=src_route_yukine;break;}
			case "fujibayashi":{this.headsrc=src_route_fujibayashi;break;}
			case "kappei":{this.headsrc=src_route_kappei;break;}
			case "sunohara":{this.headsrc=src_route_sunohara;break;}
			case "kotomi":{this.headsrc=src_route_kotomi;break;}
			case "fuuko":{this.headsrc=src_route_fuuko;break;}
			case "nagisa":{this.headsrc=src_route_nagisa;break;}
			case "gunfight":{this.headsrc=src_route_gunfight;break;}
		}
		this.routeC=routeC;
		this.routeE=routeE;
		this.dateC=dateC;
		this.dateE=dateE;
		this.leftx=x;
		this.topy=y;
		this.height=HEADERHEIGHT;
		this.width=HEADERWIDTH;
		this.titlecss=titlecss;
		this.contentcss=contentcss;
		this.HTML="";
		this.ref = "divHd" + objCount;
		objCount++;

		this.HTML+="<div id=\""+this.ref+"Wrap\" style=\"position:absolute; width:0px; left:"+this.leftx+"px; top:"+this.topy+"px; height:0px; z-index:2; overflow:visible; visibility:hidden;\"><div id=\""+this.ref+"Link\"></div>";
		this.HTML+="<table id=\""+this.ref+"Table\" height="+this.height+" width="+this.width+" border=0 cellpadding=0 cellspacing=0 ref=\""+this.ref+"\" style=\""+getBgStr(src_header_bg)+"\">";
		this.HTML+="<tr>\
<td width=\"5%\"></td>\
<td align=\"left\" width=\"8%\" id=\""+this.ref+"Img\" valign=\"middle\">"+getImgStr(this.headsrc,TITLEMARKSIZE,TITLEMARKSIZE)+"</td>\
<td width=\"40%\" align=\"left\" valign=\"middle\"><div id=\""+this.ref+"routeC\" class=\""+this.titlecss+sizestr+"\">"+this.routeC+"</div><br><div id=\""+this.ref+"routeE\" class=\""+this.contentcss+sizestr+"\">"+this.routeE+"</div></td>\
<td width=\"42%\" align=\"left\" valign=\"middle\"><div id=\""+this.ref+"dateC\" class=\""+this.titlecss+sizestr+"\">"+this.dateC+"</div><br><div id=\""+this.ref+"dateE\" class=\""+this.contentcss+sizestr+"\">"+this.dateE+"</div></td>\
<td width=\"5%\"></td>\
</tr>";
		this.HTML+="</table>";
		this.HTML+="</div>";
		documentWrite(this.HTML);

		this.show=			function()			{show(this.ref+"Wrap");}
		this.hide=			function()			{hide(this.ref+"Wrap");}
		this.moveTo=		function(x,y)		{moveMeTo(this.ref+"Wrap",x,y);}
		this.moveBy=		function(x,y)		{moveMeBy(this.ref+"Wrap",x,y);}
		this.addClick=		function(func)		{return addMouseClick(this.ref+"Table",func);}
		this.remClick=		function()			{remMouseClick(this.ref+"Table");}
		this.addOver=		function(func)		{return addMouseOver(this.ref+"Table",func);}
		this.remOver=		function()			{remMouseOver(this.ref+"Table");}
		this.addOut=		function(func)		{return addMouseOut(this.ref+"Table",func);}
		this.remOut=		function()			{remMouseOut(this.ref+"Table");}
		this.addTitle=		function(title)	{addTitle(this.ref+"Wrap",title);}
		this.remTitle=		function()			{remTitle(this.ref+"Wrap");}
		this.addLink=		function(name)		{addLink(this.ref+"Link",name);}

		objArr[this.ref]=this;
	}

	//Footer
	function FooterBase(x,y,height,page){
		this.leftx=x;
		this.topy=y;
		this.page=page;
		document.title+=" → Page"+page;
		this.HTML="";
		this.zindex=COMMENTBGZINDEX;
		this.times=Math.ceil((height-COMMENTBGTOPHEIGHT-COMMENTBGBOTTOMHEIGHT)/BGREPEATHEIGHT);
		this.height=this.times*BGREPEATHEIGHT+COMMENTBGTOPHEIGHT+COMMENTBGBOTTOMHEIGHT;
		this.ref="divFt"+objCount;
		objCount++;
		this.width=COMMENTBGWIDTH;

		this.HTML+="<div id=\""+this.ref+"Wrap\" style=\"position:absolute; width:0px; left:"+this.leftx+"px; top:"+this.topy+"px; height:0px; z-index:"+this.zindex+"; overflow:visible; visibility:hidden;\">";
		this.HTML+="<table id=\""+this.ref+"Table\" width="+this.width+" border=0 cellpadding=0 cellspacing=0 ref=\""+this.ref+"\">";
		this.HTML+="<tr><td height=\""+COMMENTBGTOPHEIGHT+"\" align=\"right\" valign=\"top\" style=\"padding-right:"+COMMENTBGPADDINGRIGHT+"px;"+getBgStr(src_footer_top)+"\""+(bw.ie6?" ondblclick=\"jumpPage()\" onmousewheel=\"mouseWheel(false);\" onmouseover=\"cancelWheel(true);cancelRightClick(true);\" onmouseout=\"cancelWheel(false);cancelRightClick(false);\"":"")+">";
		if(page!=null){
			if(bw.ie6)this.HTML+="<div style=\"margin-top:"+COMMENTBGMARGINTOP+"px;\">"+getImgStr(src_footer_page[Math.floor(this.page/10)],NUMBERWIDTH,NUMBERHEIGHT,"pgImg1")+""+getImgStr(src_footer_page[Math.floor(this.page%10)],NUMBERWIDTH,NUMBERHEIGHT,"pgImg2")+"</div>";
			else this.HTML+="<div style=\"margin-top:"+COMMENTBGMARGINTOP+"px;\"><img id=\"pgImg1\" ondblclick=\"jumpPage()\" onmousewheel=\"mouseWheel(true);\" onmouseover=\"cancelWheel(true);cancelRightClick(true);\" onmouseout=\"cancelWheel(false);cancelRightClick(false);\" src=\""+src_footer_page[Math.floor(this.page/10)]+"\"><img id=\"pgImg2\" ondblclick=\"jumpPage()\" onmousewheel=\"mouseWheel(false);\" onmouseover=\"cancelWheel(true);cancelRightClick(true);\" onmouseout=\"cancelWheel(false);cancelRightClick(false);\" src=\""+src_footer_page[Math.floor(this.page%10)]+"\"></div>";
		}
		this.HTML+="</td></tr>";
		for(i=0;i<this.times;i++){
			this.HTML+="<tr><td height=\""+BGREPEATHEIGHT+"\" style=\""+getBgStr(src_footer_mid)+"\"></td></tr>";
		}
		this.HTML+="<tr><td height=\""+COMMENTBGBOTTOMHEIGHT+"\" style=\""+getBgStr(src_footer_bottom)+"\"></td></tr>";
		this.HTML+="</table>";
		this.HTML+="</div>";
		times=getYlevel(height);
		this.HTML+="<div id=\""+this.ref+"LevelWrap\" style=\"position:absolute; width:0px; left:0px; top:"+BasicY+"px; height:0px; z-index:"+this.zindex+"; overflow:visible; visibility:visible;\">";
		this.HTML+="<table id=\""+this.ref+"Table\" width="+this.width+" border=0 cellpadding=0 cellspacing=0 ref=\""+this.ref+"\">";
		for(i=0;i<times;i++){
			this.HTML+="<tr><td height=\""+YSCALE+"\"><a name=\"yLeveL"+i+"\"></a></td></tr>";
		}
		this.HTML+="</table>";
		this.HTML+="</div>";
		documentWrite(this.HTML);

		this.show=			function()			{show(this.ref+"Wrap");}
		this.hide=			function()			{hide(this.ref+"Wrap");}
		this.moveTo=		function(x,y)		{moveMeTo(this.ref+"Wrap",x,y);}
		this.moveBy=		function(x,y)		{moveMeBy(this.ref+"Wrap",x,y);}
		this.addOver=		function(func)		{return addMouseOver(this.ref+"Table",func);}
		this.remOver=		function()			{remMouseOver(this.ref+"Table");}
		this.addOut=		function(func)		{return addMouseOut(this.ref+"Table",func);}
		this.remOut=		function()			{remMouseOut(this.ref+"Table");}
		this.addClick=		function(func)		{return addMouseClick(this.ref+"Table",func);}
		this.remClick=		function()			{remMouseClick(this.ref+"Table");}
		this.addTitle=		function(title)	{addTitle(this.ref+"Wrap",title);}
		this.remTitle=		function()			{remTitle(this.ref+"Wrap");}

		objArr[this.ref]=this;
	}

	//Button
	function ButtonBase(x,y,type,text,css,adjustw){
		this.leftx=x-outersize;
		this.topy=y-outersize;
		this.type=type;
		switch(this.type){
			case "enter":{this.bgsrc=src_bubble_enter;this.width=BUBBLEWIDTH;this.height=BUBBLEHEIGHT;this.zindex=BUTTONZINDEX;break;}
			case "exit":{this.bgsrc=src_bubble_exit;this.width=BUBBLEWIDTH;this.height=BUBBLEHEIGHT;this.zindex=BUTTONZINDEX;break;}
			case "untrigger":{this.bgsrc=src_bubble_untrigger;this.width=BUBBLEWIDTH;this.height=BUBBLEHEIGHT;this.zindex=BUTTONZINDEX;break;}
			case "option":{this.bgsrc=src_Textbox_Option;this.width=BUTTONWIDTH;this.height=BUTTONHEIGHT;this.zindex=BUTTONZINDEX;break;}
			case "condition":{this.bgsrc=src_Textbox_Condition;this.width=BUTTONWIDTH;this.height=BUTTONHEIGHT;this.zindex=BUTTONZINDEX;break;}
			case "selection":{this.bgsrc=src_Textbox_Selection;this.width=BUTTONWIDTH;this.height=BUTTONHEIGHT;this.zindex=BUTTONZINDEX;break;}
			case "jump":{this.bgsrc=src_Textbox_Jump;this.width=BUTTONWIDTH;this.height=BUTTONHEIGHT;this.zindex=BUTTONZINDEX;break;}
			case "block":{this.bgsrc=src_Textbox_Block;this.width=BUTTONWIDTH;this.height=BUTTONHEIGHT;this.zindex=BUTTONZINDEX;break;}
			case "date":{this.bgsrc=src_Textbox_Date;this.width=DATEWIDTH;this.height=DATEHEIGHT;this.zindex=BUTTONZINDEX;break;}
			case "ccheck":{this.bgsrc=src_commentbase_check;this.width=CHECKSIZE;this.height=CHECKSIZE;this.zindex=CHECKZINDEX;break;}
			case "gcheck":{this.bgsrc=src_graphbase_check;this.width=CHECKSIZE;this.height=CHECKSIZE;this.zindex=CHECKZINDEX;break;}
			case "text":{this.bgsrc="";this.width=adjustw;this.height=TEXTHEIGHT;this.zindex=BUTTONZINDEX;break;}
		}
		this.upcenter=Point(this.leftx+this.width/2,y);
		this.lowercenter=Point(this.leftx+this.width/2,this.topy+this.height-outersize);
		this.title=text;
		this.css=css;

		this.HTML="";
		this.ref = "divBtn" + objCount;
		objCount++;

		this.HTML+="<div id=\""+this.ref+"Wrap\" style=\"position:absolute; width:0px; left:"+this.leftx+"px; top:"+this.topy+"px; height:0px; z-index:"+this.zindex+"; overflow:visible; visibility:hidden;\"><div id=\""+this.ref+"Link\"></div>";
		this.HTML+="<table id=\""+this.ref+"Table\" height="+this.height+" width="+this.width+" border=0 cellpadding=0 cellspacing=0 style=\""+getBgStr(this.bgsrc)+"\" ref=\""+this.ref+"\"><tr><td width="+this.width+" align=\"center\" valign=\"middle\"><div id=\""+this.ref+"Content\" class=\""+this.css+sizestr+"\">"+this.title+"</div></td></tr></table>";
		this.HTML+="</div>";
		documentWrite(this.HTML);

		this.show=			function()			{show(this.ref+"Wrap");}
		this.hide=			function()			{hide(this.ref+"Wrap");}
		this.moveTo=		function(x,y)		{moveMeTo(this.ref+"Wrap",x,y);}
		this.moveBy=		function(x,y)		{moveMeBy(this.ref+"Wrap",x,y);}
		this.addOver=		function(func)		{return addMouseOver(this.ref+"Table",func);}
		this.remOver=		function()			{remMouseOver(this.ref+"Table");}
		this.addOut=		function(func)		{return addMouseOut(this.ref+"Table",func);}
		this.remOut=		function()			{remMouseOut(this.ref+"Table");}
		this.addClick=		function(func,move){if(move){this.addOver(function(){objArr[this.ref].moveBy(-1,-1)});this.addOut(function(){objArr[this.ref].moveBy(1,1)});}return addMouseClick(this.ref+"Table",func);}
		this.remClick=		function()			{remMouseClick(this.ref+"Table");this.remOver();this.remOut();}
		this.addTitle=		function(title)	{addTitle(this.ref+"Wrap",title);}
		this.remTitle=		function()			{remTitle(this.ref+"Wrap");}
		this.addLink=		function(name)		{addLink(this.ref+"Link",name);}

		objArr[this.ref]=this;
	}

	//TextBox
	function TextboxBase(x,y,type,text,route,css){
		this.title=text;
		this.leftx=x;
		this.topy=y;
		this.height=BUTTONHEIGHT;
		this.width=BUTTONWIDTH;
		this.route=route;
		this.type=type;
		this.css=css;
		this.numObj=null;
		this.commentObj=null;
		if(this.route!=null)this.route=this.route.split("|");

		this.ref = "divTxtBtn" + objCount;
		objCount++;

		this.btn=new ButtonBase(this.leftx,this.topy,this.type,this.title,this.css);
		this.upcenter=this.btn.upcenter;
		this.lowercenter=this.btn.lowercenter;
		if(this.route){
			if(this.route[0]=="l"){
				currentOffWidth=0;
				currentTop=this.topy+BUBBLEOFFSETHEIGHT;
				for(i=1;i<this.route.length;i++){
					tempType="enter";
					if(this.route[i].charAt(0)=="-"){
						tempType="exit";
						this.route[i]=this.route[i].substr(1);
					}
					else if(this.route[i].charAt(0)=="+"){
						tempType="untrigger";
						this.route[i]=this.route[i].substr(1);
					}
					this.route[i]=new ButtonBase(this.leftx+currentOffWidth,currentTop,tempType,this.route[i],"routebtn");
					currentOffWidth+=(BUBBLEWIDTH-2*outersize+BUBBLESPACING);
					if(i==3){currentOffWidth=0;currentTop=this.topy+this.height-BUBBLEOFFSETHEIGHT2;}
				}
			}
			else{
				currentOffWidth=(BUTTONWIDTH-BUBBLEWIDTH);
				currentTop=this.topy+BUBBLEOFFSETHEIGHT;
				for(i=this.route.length-1;i>0;i--){
					tempType="exit";
					if(this.route[i].charAt(0)=="-"){
						tempType="enter";
						this.route[i]=this.route[i].substr(1);
					}
					else if(this.route[i].charAt(0)=="+"){
						tempType="untrigger";
						this.route[i]=this.route[i].substr(1);
					}
					this.route[i]=new ButtonBase(this.leftx+currentOffWidth,currentTop,tempType,this.route[i],"routebtn");
					currentOffWidth-=(BUBBLEWIDTH-2*outersize+BUBBLESPACING);
					if(this.route.length-i==3){currentOffWidth=(BUTTONWIDTH-BUBBLEWIDTH);currentTop=this.topy+this.height-BUBBLEOFFSETHEIGHT2;}
				}
			}
		}
		this.show=function(){
			this.btn.show();
			if(this.numObj)this.numObj.show();
			if(this.commentObj)this.commentObj.show();
			if(this.route){
				for(i=1;i<this.route.length;i++){
					this.route[i].show();
				}
			}
		}
		this.hide=function(){
			this.btn.hide();
			if(this.numObj)this.numObj.hide();
			if(this.commentObj)this.commentObj.hide();
			if(this.route){
				for(i=1;i<this.route.length;i++){
					this.route[i].hide();
				}
			}
		}
		this.moveTo=function(x,y){
			this.moveBy(x-this.leftx,y-this.topy);
		}
		this.moveBy=function(x,y){
			this.btn.moveBy(x,y);
			if(this.numObj)this.numObj.moveBy(x,y);
			if(this.commentObj)this.commentObj.moveBy(x,y);
			if(this.route){
				for(i=1;i<this.route.length;i++){
					this.route[i].moveBy(x,y);
				}
			}
		}
		this.addClick=function(func,move){
			this.btn.addClick(func,move);
		}
		this.remClick=function(){
			this.btn.remClick();
			this.btn.remOver();
			this.btn.remOut();
		}
		this.addNumClick=function(func,move){
			this.numObj.addClick(func,move);
		}
		this.remNumClick=function(){
			this.numObj.remClick();
			this.numObj.remOver();
			this.numObj.remOut();
		}
		this.addOver=function(func){
			this.btn.addOver(func);
		}
		this.remOver=function(){
			this.btn.remOver();
		}
		this.addOut=function(func){
			this.btn.addOut(func);
		}
		this.remOut=function(){
			this.btn.remOut();
		}

		this.init=function(numObj,commentObj){
			this.numObj=(numObj==null)?null:numObj;
			this.commentObj=(commentObj==null)?null:commentObj;
		}
		this.addTitle=function(title){
			this.btn.addTitle(title);
		}
		this.remTitle=function(){
			this.btn.remTitle(title);
		}
		this.addNumTitle=function(title){
			this.numObj.addTitle(title);
		}
		this.remNumTitle=function(){
			this.numObj.remTitle(title);
		}
		this.addLink=function(name){
			this.btn.addLink(name);
		}

		objArr[this.ref]=this;
	}

	//Comment
	function CommentBase(x,y,text,num,summary,hint,setsumei,option,icon,iconillu,titlecss,contentcss,optioncss,eventcss){
		this.num=num;
		this.title=text;
		if(y>commentTop){this.topy=y;commentTop=y;}
		else this.topy=commentTop;
		this.leftx=x;
		this.width=COMMENTWIDTH;
		this.summary=summary;
		this.hint=hint;
		this.hint=this.hint.replace(/\[/g,"<span class=hilight1>");
		this.hint=this.hint.replace(/\]/g,"</span>");
		this.hint=this.hint.replace(/\{/g,"<span class=hilight2>");
		this.hint=this.hint.replace(/\}/g,"</span>");
		this.setsumei=setsumei;
		this.option=option;
		this.icon=icon;
		this.iconillu=(iconillu==null?"":iconillu);
		this.ref = "divCmt" + objCount;
		objCount++;
		this.HTML="";
		this.zindex=COMMENTZINDEX;
		this.titlebgsrc=src_commentbase_title;
		this.basebgsrc=src_commentbase_base;
		this.commentbgsrc=src_commentbase_comment;
		this.eventsrc=src_commentbase_event;

		this.HTML+="<div id=\""+this.ref+"Wrap\" style=\"position:absolute; width:0px; left:"+this.leftx+"px; top:"+this.topy+"px; height:0px; z-index:"+this.zindex+"; overflow:visible; visibility:hidden;\"><div id=\""+this.ref+"Link\"></div>";
		this.HTML+="<table id=\""+this.ref+"Face\" width=\""+this.width+"\" border=0 cellpadding=0 cellspacing=0 ref=\""+this.ref+"\">";
		this.HTML+="<tr><td background=\""+this.titlebgsrc+"\"><table border=0 cellpadding=0 cellspacing=0 height=\""+COMMENTTITLEHEIGHT+"\" width=\""+this.width+"\"><tr><td width=\""+(COMMENTBASESPACING)+"\"></td><td width=\""+(CHECKSIZE-2*outersize)+"\" align=\"center\" class=\""+titlecss+sizestr+"\">"+this.num+"</td><td width=\""+(COMMENTBASESPACING)+"\"></td><td width=\""+(this.width-(CHECKSIZE-2*outersize)-4*COMMENTBASESPACING)+"\" align=\"left\" class=\""+titlecss+sizestr+"\">"+this.title+"</td><td width=\""+(2*COMMENTBASESPACING)+"\"></td></tr></table></td></tr>";
		if(this.summary!="")this.HTML+="<tr><td  background=\""+this.basebgsrc+"\"><table border=0 cellpadding=0 cellspacing=0 width=\""+this.width+"\"><tr><td width=\""+(2*COMMENTBASESPACING)+"\"></td><td width=\""+(this.width-4*COMMENTBASESPACING)+"\" align=\"left\" class=\""+contentcss+sizestr+"\" colspan=2>"+this.summary+"</td><td width=\""+(2*COMMENTBASESPACING)+"\"></td></tr></table></td></tr>";
		if(this.hint!="")this.HTML+="<tr><td background=\""+this.commentbgsrc+"\"><table border=0 cellpadding=0 cellspacing=0 width=\""+this.width+"\"><tr><td width=\""+(2*COMMENTBASESPACING)+"\"></td><td width=\""+(this.width-4*COMMENTBASESPACING)+"\" align=\"left\" class=\""+contentcss+sizestr+"\" colspan=2>"+this.hint+"</td><td width=\""+(2*COMMENTBASESPACING)+"\"></td></tr></table></td></tr>";
		if(this.setsumei!="")this.HTML+="<tr><td background=\""+this.basebgsrc+"\"><table border=0 cellpadding=0 cellspacing=0 width=\""+this.width+"\"><tr><td width=\""+(COMMENTBASESPACING)+"\"></td><td width=\""+(COMMENTBUTTONSIZE+COMMENTBASESPACING/2)+"\" align=\"left\" valign=\"top\">"+getImgStr(src_commentbase_hint,COMMENTMARKSIZE,COMMENTMARKSIZE)+"</td><td width=\""+(this.width-4*COMMENTBASESPACING-COMMENTBASESPACING/2)+"\" align=\"left\" valign=\"top\" class=\""+contentcss+sizestr+"\">"+this.setsumei+"</td><td width=\""+(2*COMMENTBASESPACING)+"\"></td></tr></table></td></tr>";
		this.HTML+="<tr><td background=\""+this.basebgsrc+"\" height=\""+(COMMENTBASESPACING/2)+"\"></td></tr>";
		if(this.option!=""){
			this.HTML+="<tr><td background=\""+this.basebgsrc+"\"><table border=0 cellpadding=0 cellspacing=0 width=\""+this.width+"\"><tr><td width=\""+(COMMENTBASESPACING)+"\"></td>";
			tempString=this.option.split("|");
			for(i=0;i<tempString.length&&i<3;i++){
				if(tempString[i].charAt(0)=="-")this.HTML+="<td width=\""+(COMMENTBARWIDTH)+"\" height=\""+COMMENTBARHEIGHT+"\" style=\""+getBgStr(src_commentbase_option_B)+"\" valign=\"bottom\" align=\"center\"><div class=\""+optioncss+sizestr+"\">"+tempString[i].substring(1)+"</div></td>";
				else this.HTML+="<td width=\""+(COMMENTBARWIDTH)+"\" height=\""+COMMENTBARHEIGHT+"\" style=\""+getBgStr(src_commentbase_option_A)+"\" valign=\"bottom\" align=\"center\"><div class=\""+optioncss+sizestr+"\">"+tempString[i].substring(1)+"</div></td>";
			}
			for(;i<3;i++){
				this.HTML+="<td width=\""+(COMMENTBARWIDTH)+"\" height=\""+COMMENTBARHEIGHT+"\" valign=\"bottom\" align=\"center\"></td>";
			}
			this.HTML+="<td width=\""+(COMMENTBASESPACING)+"\"></td></tr></table></td></tr>";
		}
		if(this.icon!=""){
			this.HTML+="<tr><td background=\""+this.basebgsrc+"\"><table border=0 cellpadding=0 cellspacing=0 width=\""+this.width+"\"><tr><td width=\""+(COMMENTBASESPACING)+"\"></td><td width=\""+(8*COMMENTBUTTONSIZE-COMMENTBASESPACING)+"\" height=\""+COMMENTBUTTONSIZE+"\" valign=\"bottom\" align=\"left\" class=\""+contentcss+sizestr+"\">";
			this.HTML+=getImgStr(((this.icon.charAt(0)=="1")?src_comment_mark_en[0]:src_comment_mark_un[0]),COMMENTMARKSIZE,COMMENTMARKSIZE);
			this.HTML+=getImgStr(((this.icon.charAt(1)=="1")?src_comment_mark_en[1]:src_comment_mark_un[1]),COMMENTMARKSIZE,COMMENTMARKSIZE);
			this.HTML+=getImgStr(((this.icon.charAt(2)=="1")?src_comment_mark_en[2]:src_comment_mark_un[2]),COMMENTMARKSIZE,COMMENTMARKSIZE);
			this.HTML+=getImgStr(((this.icon.charAt(3)=="1")?src_comment_mark_en[3]:src_comment_mark_un[3]),COMMENTMARKSIZE,COMMENTMARKSIZE);
			this.HTML+=getImgStr(((this.icon.charAt(4)=="1")?src_comment_mark_en[4]:src_comment_mark_un[4]),COMMENTMARKSIZE,COMMENTMARKSIZE);
			this.HTML+=getImgStr(((this.icon.charAt(5)=="1")?src_comment_mark_en[5]:src_comment_mark_un[5]),COMMENTMARKSIZE,COMMENTMARKSIZE);
			this.HTML+=getImgStr(((this.icon.charAt(6)=="1")?src_comment_mark_en[6]:src_comment_mark_un[6]),COMMENTMARKSIZE,COMMENTMARKSIZE);
			this.HTML+=getImgStr(((this.icon.charAt(7)=="1")?src_comment_mark_en[7]:src_comment_mark_un[7]),COMMENTMARKSIZE,COMMENTMARKSIZE);
			this.HTML+="</td><td width=\""+(this.width-COMMENTBASESPACING-8*COMMENTBUTTONSIZE)+"\"><table border=0 cellpadding=0 cellspacing=0 height="+COMMENTEVENTHEIGHT+" width="+COMMENTEVENTWIDTH+" style=\""+getBgStr(this.eventsrc)+"\"><tr><td height="+COMMENTEVENTHEIGHT+" valign=\"middle\" class=\""+eventcss+sizestr+"\" width=\""+(this.width-2*COMMENTBASESPACING-8*COMMENTBUTTONSIZE)+"\">"+this.iconillu+"</td></tr></table></td><td width=\""+(COMMENTBASESPACING)+"\"></td></tr></table></td></tr>";
		}
		this.HTML+="<tr><td background=\""+this.basebgsrc+"\" height=\""+(COMMENTBASESPACING/2)+"\"></td></tr>";
		this.HTML+="</table>";
		this.HTML+="</div>";
		this.HTML+="<script>";
		this.HTML+="tempHeight=getObjectRef(\""+this.ref+"Face\").clientHeight;"
		//if(bw.safari&&this.icon!="")this.HTML+="tempHeight+=40;";
		this.HTML+="commentTop=commentTop+tempHeight+"+COMMENTSPACING+";";
		this.HTML+="<\/script>";
		documentWrite(this.HTML);

		this.show=			function()			{show(this.ref+"Wrap");}
		this.hide=			function()			{hide(this.ref+"Wrap");}
		this.moveTo=		function(x,y)		{moveMeTo(this.ref+"Wrap",x,y);}
		this.moveBy=		function(x,y)		{moveMeBy(this.ref+"Wrap",x,y);}
		this.addOver=		function(func)		{return addMouseOver(this.ref+"Face",func);}
		this.remOver=		function()			{remMouseOver(this.ref+"Face");}
		this.addOut=		function(func)		{return addMouseOut(this.ref+"Face",func);}
		this.remOut=		function()			{remMouseOut(this.ref+"Face");}
		this.addClick=		function(func,move){if(move){this.addOver(function(){objArr[this.ref].moveBy(-1,-1)});this.addOut(function(){objArr[this.ref].moveBy(1,1)});}return addMouseClick(this.ref+"Face",func);}
		this.remClick=		function()			{remMouseClick(this.ref+"Face");this.remOver();this.remOut();}
		this.addTitle=		function(title)	{addTitle(this.ref+"Wrap",title);}
		this.remTitle=		function()			{remTitle(this.ref+"Wrap");}
		this.addLink=		function(name)		{addLink(this.ref+"Link",name);}

		objArr[this.ref]=this;
		comment[comment.length]=this;
	}

	//vmlLine
	function vmlline(x,y,l,h){
		this.width=LINESIZE;
		this.leftx=x;
		this.topy=y;
		this.length=l;
		this.height=h;
		this.zindex=LINEZINDEX;
		this.ref = "divLine" + objCount;
		objCount++;
		this.type= "";this.type+=(h==0)?"h":"";this.type+=(l==0)?"v":"";
		if(this.type=="v"){
			this.bgsrc=src_dot_v;
			this.times=Math.round(h/LINEBASEHEIGHT);
		}
		else if(this.type=="h"){
			this.bgsrc=src_dot_h;
			this.times=Math.round(l/LINEBASELENGTH);
		}
		else if(this.type=="hv"){
			this.bgsrc=src_dot_hv;
			this.times=1;
		}
		else {
			this.bgsrc="hkuclion";
			this.times=0;
		}
		this.HTML= "";

		this.HTML+="<div id=\""+this.ref+"Wrap\" style=\"position:absolute; width:0px; left:"+this.leftx+"px; top:"+this.topy+"px; height:0px; z-index:"+this.zindex+"; overflow:visible; visibility:hidden; padding-top:"+(2*outersize)+"px; margin-left:"+(LINEADJUSTX)+"px;\"><div id=\""+this.ref+"Link\"></div>";
		for(i=0;i<this.times;i++){
			if(this.type=="v"){
				if(lineRecord[this.leftx+"|"+(this.topy+i*LINEBASEHEIGHT)+"|"+this.type]!=true){
					lineRecord[this.leftx+"|"+(this.topy+i*LINEBASEHEIGHT)+"|"+this.type]=true;
					this.HTML+="<div style=\" width:"+LINESIZE+"px; height:"+(LINEBASEHEIGHT+2*outersize)+"px; margin-top:-"+(2*outersize)+"px;\"><table border=0 cellpadding=0 cellspacing=0 height=\""+(LINEBASEHEIGHT+2*outersize)+"\" width=\""+(LINESIZE)+"\" style=\""+getBgStr(this.bgsrc)+"\"><tr><td></td></tr></table></div>";
				}
				else{
					this.HTML+="<div style=\" width:"+LINESIZE+"px; height:"+(LINEBASEHEIGHT+2*outersize)+"px; margin-top:-"+(2*outersize)+"px;\"><table border=0 cellpadding=0 cellspacing=0 height=\""+(LINEBASEHEIGHT+2*outersize)+"\" width=\""+(LINESIZE)+"\"><tr><td></td></tr></table></div>";
				}
			}
			else if(this.type=="h"){
				if(lineRecord[(this.leftx+i*LINEBASELENGTH)+"|"+this.topy+"|"+this.type]!=true){
					lineRecord[(this.leftx+i*LINEBASELENGTH)+"|"+this.topy+"|"+this.type]=true;
					this.HTML+="<div style=\" width:"+(LINEBASELENGTH+2*outersize)+"px; height:"+LINESIZE+"px; margin-top:-"+(2*outersize+LINEOUTERSIZEADJUST)+"px; margin-left:"+(i*LINEBASELENGTH)+"px;\"><table border=0 cellpadding=0 cellspacing=0 height=\""+LINESIZE+"\" width=\""+(LINEBASELENGTH+2*outersize)+"\" style=\""+getBgStr(this.bgsrc)+"\"><tr><td></td></tr></table></div>";
				}
				else{
					this.HTML+="<div style=\" width:"+(LINEBASELENGTH+2*outersize)+"px; height:"+LINESIZE+"px; margin-top:-"+(2*outersize+LINEOUTERSIZEADJUST)+"px; margin-left:"+(i*LINEBASELENGTH)+"px;\"><table border=0 cellpadding=0 cellspacing=0 height=\""+LINESIZE+"\" width=\""+(LINEBASELENGTH+2*outersize)+"\"><tr><td></td></tr></table></div>";
				}
			}
			else if(this.type=="hv")
				this.HTML+="<div id=\""+this.ref+"Face\" style=\" width:"+LINESIZE+"px; height:"+(LINEBASEHEIGHT/2+2*outersize)+"px;"+getBgStr(this.bgsrc)+" margin-top:-"+(2*outersize)+"px;\"></div>";
		}
		this.HTML+="</div>";

		documentWrite(this.HTML);

		this.show=			function()			{show(this.ref+"Wrap");}
		this.hide=			function()			{hide(this.ref+"Wrap");}
		this.moveTo=		function(x,y)		{moveMeTo(this.ref+"Wrap",x,y);}
		this.moveBy=		function(x,y)		{moveMeBy(this.ref+"Wrap",x,y);}
		this.addClick=		function(func)		{if(this.type=="hv")return addMouseClick(this.ref+"Face",func);}
		this.remClick=		function()			{if(this.type=="hv")remMouseClick(this.ref+"Face");}
		this.addTitle=		function(title)	{if(this.type=="hv")addTitle(this.ref+"Wrap",title);}
		this.remTitle=		function()			{if(this.type=="hv")remTitle(this.ref+"Wrap");}

		objArr[this.ref]=this;
	}

	//LinkLine
	function Linkline(){
		this.ref="linkLine"+objCount;
		objCount++;
		this.Points=new Array();
		args=Linkline.arguments;
		if(args[1]=="Ligueston")args=args[0];

		if(args[0].upcenter!=null)this.Points[this.Points.length]=args[0].upcenter;
		else this.Points[this.Points.length]=args[0];
		for(i=1;i<args.length-1;i++)this.Points[this.Points.length]=args[i];
		if(args[args.length-1].lowercenter!=null)this.Points[this.Points.length]=args[args.length-1].lowercenter;
		else this.Points[this.Points.length]=args[args.length-1];
		this.Lines=new Array();

		for(j=0;j<this.Points.length-1;j++){
			if(this.Points[j].leftx!=this.Points[j+1].leftx&&this.Points[j].topy!=this.Points[j+1].topy){
				this.Lines[this.Lines.length]=new vmlline(this.Points[j].leftx,this.Points[j].topy-LINEBASEHEIGHT-outersize+HALFDOTSIZE,0,LINEBASEHEIGHT);
				this.Lines[this.Lines.length]=new vmlline(Math.min(this.Points[j].leftx,this.Points[j+1].leftx),this.Points[j].topy-LINEBASEHEIGHT-outersize+HALFDOTSIZE+LINEOUTERSIZEADJUST,Math.abs(this.Points[j].leftx-this.Points[j+1].leftx),0);
				if(this.Points[j].topy-this.Points[j+1].topy>LINEBASEHEIGHT)this.Lines[this.Lines.length]=new vmlline(this.Points[j+1].leftx,this.Points[j+1].topy-HALFDOTSIZE,0,this.Points[j].topy-this.Points[j+1].topy-LINEBASEHEIGHT);
			}
			else if(this.Points[j].leftx==this.Points[j+1].leftx){
				this.Lines[this.Lines.length]=new vmlline(this.Points[j].leftx,this.Points[j+1].topy-LINEVERTICALADJUST,0,this.Points[j].topy-this.Points[j+1].topy);
			}
			else if(this.Points[j].topy==this.Points[j+1].topy){
				this.Lines[this.Lines.length]=new vmlline(Math.min(this.Points[j].leftx,this.Points[j+1].leftx),this.Points[j].topy-LINEHORIZONALADJUST,Math.abs(this.Points[j].leftx-this.Points[j+1].leftx),0);
			}
		}

		this.show=function(){
			for(i=0;i<this.Lines.length;i++){
				this.Lines[i].show();
			}
		}
		this.hide=function(){
			for(i=0;i<this.Lines.length;i++){
				this.Lines[i].hide();
			}
		}
		this.moveTo=function(x,y){
			this.moveBy(x-this.leftx,y-this.topy);
		}
		this.moveBy=function(x,y){
			for(i=0;i<this.Lines.length;i++){
				this.Lines[i].moveBy(x,y);
			}
		}
		this.addClick=		function(func,move){this.Lines[0].addClick(func,move);}
		this.remClick=		function()			{this.Lines[0].remClick();}
		this.addTitle=		function(title)	{this.Lines[0].addTitle(title);}
		this.remTitle=		function()			{this.Lines[0].remTitle();}
	}

	//Board
	function BoardBase(x,y,height){
		this.leftx=x;
		this.topy=y-BOARDREAPETHEIGHT/2;
		this.width=BOARDWIDTH;
		this.times=Math.ceil((height-BORADFOOTERHEIGHT-BORADFOOTERHEIGHT)/BOARDREAPETHEIGHT);
		this.height=this.times*BOARDREAPETHEIGHT+BORADFOOTERHEIGHT+BORADFOOTERHEIGHT;
		this.zindex=BOARDZINDEX;
		this.ref = "divBoard" + objCount;
		objCount++;
		this.HTML="";

		this.HTML+="<div id=\""+this.ref+"Wrap\" style=\"position:absolute; width:0px; left:"+this.leftx+"px; top:"+this.topy+"px; height:0px; z-index:"+this.zindex+"; overflow:visible; visibility:hidden;\">";
		this.HTML+="<table id=\""+this.ref+"Table\" width="+this.width+" border=0 cellpadding=0 cellspacing=0 ref=\""+this.ref+"\">";
		this.HTML+="<tr><td height="+BORADFOOTERHEIGHT+" align=\"center\" style=\""+getBgStr(src_board_top)+"\" valign=\"middle\"></td></tr>";
		for(i=0;i<this.times;i++){
			this.HTML+="<tr><td height="+BOARDREAPETHEIGHT+" align=\"center\" style=\""+getBgStr(src_board_mid)+"\" valign=\"middle\"></td></tr>";
		}
		this.HTML+="<tr><td height="+BORADFOOTERHEIGHT+" align=\"center\" style=\""+getBgStr(src_board_bottom)+"\" valign=\"middle\"></td></tr>";
		this.HTML+="</table>";
		this.HTML+="</div>";




		documentWrite(this.HTML);

		this.show=			function()			{show(this.ref+"Wrap");}
		this.hide=			function()			{hide(this.ref+"Wrap");}
		this.moveTo=		function(x,y)		{moveMeTo(this.ref+"Wrap",x,y);}
		this.moveBy=		function(x,y)		{moveMeBy(this.ref+"Wrap",x,y);}
		this.addOver=		function(func)		{return addMouseOver(this.ref+"Table",func);}
		this.remOver=		function()			{remMouseOver(this.ref+"Table");}
		this.addOut=		function(func)		{return addMouseOut(this.ref+"Table",func);}
		this.remOut=		function()			{remMouseOut(this.ref+"Table");}
		this.addClick=		function(func,move){if(move){this.addOver(function(){objArr[this.ref].moveBy(-1,-1)});this.addOut(function(){objArr[this.ref].moveBy(1,1)});}return addMouseClick(this.ref+"Table",func);}
		this.remClick=		function()			{remMouseClick(this.ref+"Table");this.remOver();this.remOut();}
		this.addTitle=		function(title)	{addTitle(this.ref+"Wrap",title);}
		this.remTitle=		function()			{remTitle(this.ref+"Wrap");}

		objArr[this.ref]=this;
	}

//Object Instant
	function Point(x,y){
		return new PointBase(x,y);
	}

	function Header(route,routeC,routeE,dateC,dateE){
		tempObj=new HeaderBase(0,0,route,routeC,routeE,dateC,dateE,"headerC","headerE");
		return tempObj;
	}

	function Textbox_Condition(x,y,text,route){
		tempObj=new TextboxBase(x,y,"condition",text,route,"btn");
		return tempObj;
	}
	function Textbox_Option(x,y,text,route){
		tempObj=new TextboxBase(x,y,"option",text,route,"btn");
		return tempObj;
	}
	function Textbox_Selection(x,y,text,route){
		tempObj=new TextboxBase(x,y,"selection",text,route,"btn");
		return tempObj;
	}
	function Textbox_Jump(x,y,text,route){
		tempObj=new TextboxBase(x,y,"jump",text,route,"btn");
		return tempObj;
	}
	function Textbox_Block(x,y,text,route){
		tempObj=new TextboxBase(x,y,"block",text,route,"btn");
		return tempObj;
	}
	function Textbox_Quit(x,y,text,route){
		tempObj=new TextboxBase(x,y,"condition",text,route,"btn");
		return tempObj;
	}
	function Textbox_Date(x,y,text,type){
		if(type=="top")tempObj=new ButtonBase(x+(BUTTONWIDTH-DATEWIDTH)/2,y-(DATEHEIGHT-BUTTONHEIGHT),"date",text,"date");
		else tempObj=new ButtonBase(x+(BUTTONWIDTH-DATEWIDTH)/2,y,"date",text,"date");
		return tempObj;
	}

	function Footer(height,page){
		height=(height>commentTop)?height:commentTop;
		tempObj=new FooterBase(COMMENTBGLEFT,0,height,page);
		return tempObj;
	}

	function Textbox_Condition_C(x,y,text,number,Summery,Select,Caution,Option,Events,EventIllu,Title,yAdjust,route){
		if(typeof(yAdjust)=="undefined")yAdjust=0;
		yAdjust=parseInt(yAdjust);
		tempObj=new TextboxBase(x,y,"condition",text,route,"btn");
		if(Summery==""&&Select==""&&Caution==""&&Option==""&&Events==""&&EventIllu==""&&Title=="")tempObj.init((new ButtonBase(x-(CHECKSIZE-2*outersize)/2,y,"ccheck",number,"check")),null);
		else tempObj.init((new ButtonBase(x-(CHECKSIZE-2*outersize)/2,y,"ccheck",number,"check")),(new CommentBase(COMMENTLEFT,parseInt(y)-COMMENTBASESPACING+yAdjust,Title,number,Summery,Select,Caution,Option,Events,EventIllu,"cmtbtn","comment","cmtopt","cmtEvnt")));
		tempObj.addNumClick(function(){if(!commentShown)rightClick();setScrollLeft(COMMENTLEFT)},true);
		tempObj.numObj.addTitle("点击转到注释");
		return tempObj;
	}
	function Textbox_Option_C(x,y,text,number,Summery,Select,Caution,Option,Events,EventIllu,Title,yAdjust,route){
		if(typeof(yAdjust)=="undefined")yAdjust=0;
		yAdjust=parseInt(yAdjust);
		tempObj=new TextboxBase(x,y,"option",text,route,"btn");
		if(Summery==""&&Select==""&&Caution==""&&Option==""&&Events==""&&EventIllu==""&&Title=="")tempObj.init((new ButtonBase(x-(CHECKSIZE-2*outersize)/2,y,"ccheck",number,"check")),null);
		else tempObj.init((new ButtonBase(x-(CHECKSIZE-2*outersize)/2,y,"ccheck",number,"check")),(new CommentBase(COMMENTLEFT,parseInt(y)-COMMENTBASESPACING+yAdjust,Title,number,Summery,Select,Caution,Option,Events,EventIllu,"cmtbtn","comment","cmtopt","cmtEvnt")));
		tempObj.addNumClick(function(){if(!commentShown)rightClick();setScrollLeft(COMMENTLEFT)},true);
		tempObj.numObj.addTitle("点击转到注释");
		return tempObj;
	}
	function Textbox_Selection_C(x,y,text,number,Summery,Select,Caution,Option,Events,EventIllu,Title,yAdjust,route){
		if(typeof(yAdjust)=="undefined")yAdjust=0;
		yAdjust=parseInt(yAdjust);
		tempObj=new TextboxBase(x,y,"selection",text,route,"btn");
		if(Summery==""&&Select==""&&Caution==""&&Option==""&&Events==""&&EventIllu==""&&Title=="")tempObj.init((new ButtonBase(x-(CHECKSIZE-2*outersize)/2,y,"ccheck",number,"check")),null);
		else tempObj.init((new ButtonBase(x-(CHECKSIZE-2*outersize)/2,y,"ccheck",number,"check")),(new CommentBase(COMMENTLEFT,parseInt(y)-COMMENTBASESPACING+yAdjust,Title,number,Summery,Select,Caution,Option,Events,EventIllu,"cmtbtn","comment","cmtopt","cmtEvnt")));
		tempObj.addNumClick(function(){if(!commentShown)rightClick();setScrollLeft(COMMENTLEFT)},true);
		tempObj.numObj.addTitle("点击转到注释");
		return tempObj;
	}

	function Link(){
		args=Link.arguments;
		tempObj=new Linkline(args,"Ligueston");
		return tempObj;
	}

	function Board(y,y2){
		tempObj=new BoardBase(0,y-BOARDREAPETHEIGHT*2.5-YSCALE/2,y2-y+BOARDREAPETHEIGHT*6);
		return tempObj;
	}

//Utality Function
	//Position Manage
	function x(x){return BasicX+XSCALE*x;}
	function xx(xx){return BasicX+XSCALE*x+XSCALE/2;}
	function y(y){return BasicY+YSCALE*y;}
	function liny(yy){return y(yLevel)+YSCALE*yy;}
	function linx(xx){return x(xx+1)-(XSCALE*2-BUTTONWIDTH)/2-outersize;}
	function getYlevel(y){return Math.floor((y-BasicY)/YSCALE);}

	//Image Check
	function showall(){
		if(rqst["jslink"]){
			gotolink(rqst["jslink"]);
		}
		for(m=0;m<box.length;m++){
			for(j=0;j<box[m].length;j++){
				box[m][j].show();
			}
		}
		for(m=0;m<line.length;m++){
			line[m].show();
		}
		for(m=0;m<board.length;m++){
			board[m].show();
		}
		if(hdft["header"])hdft["header"].show();
		if(hdft["footer"])hdft["footer"].show();
		checkBlink();
	}

	var pic_src=new Array(
		src_background,
		num0_s,num1_s,num1_s,num2_s,num3_s,num4_s,num5_s,num6_s,num7_s,num8_s,num9_s,
		num0,num1,num1,num2,num3,num4,num5,num6,num7,num8,num9,
		src_Textbox_Block,src_Textbox_Condition,src_Textbox_Selection,/*src_Textbox_Jump,*/src_Textbox_Option,src_Textbox_Date,
		src_bubble_enter,src_bubble_exit,src_bubble_untrigger,
		src_route_public,src_route_misae,src_route_tomoyo,src_route_yukine,src_route_fujibayashi,src_route_kappei,src_route_sunohara,src_route_kotomi,src_route_fuuko,src_route_nagisa,src_route_gunfight,
		src_header_bg,
		src_footer_top,src_footer_mid,src_footer_bottom,
		src_commentbase_check,src_commentbase_title,src_commentbase_base,src_commentbase_comment,src_commentbase_hint,src_commentbase_option_A,src_commentbase_option_B,src_commentbase_event,
		jien1,jien2,jien3,jien4,jien5,jien6,jien7,jien8,
		jiun1,jiun2,jiun3,jiun4,jiun5,jiun6,jiun7,jiun8,
		src_dot_v,src_dot_hv,src_dot_h,
		src_board_top,src_board_mid,src_board_bottom
	);
	var checkPicObj=new Array();var picInited=false;
	var checkTimeout;
	function checkPic(i){
		if(i==null)i=0;
		if(i==pic_src.length){showall();return;}
		if(i==0){updateLoadingProcess(0,pic_src.length);}
		if(!picInited){
			checkPicObj[i]=new Image();
			checkPicObj[i].src=pic_src[i];
			picInited=true;
		}
		if(!checkPicObj[i].complete)checkTimeout=window.setTimeout("checkPic("+i+","+pic_src.length+")",10);
		else {picInited=false;updateLoadingProcess(i+1,pic_src.length);checkTimeout=window.setTimeout("checkPic("+(i+1)+","+pic_src.length+")",10);}
	}
	function updateLoadingProcess(i,n){
		if(i==n){getObjectRef("loadingStatusBtn").style.display="none";getObjectRef("loadingStatus").style.display="none";return;}
		getObjectRef("loadingStatus").value="正在缓存图片:"+(i*100/n).toFixed(1)+"%";
		if(i==0){getObjectRef("loadingStatusBtn").style.display="block";getObjectRef("loadingStatus").style.display="block";return;}
	}
	function skipFileCheck(){
		clearTimeout(checkTimeout);
		getObjectRef("loadingStatus").style.display="none";
		getObjectRef("loadingStatusBtn").style.display="none";
		showall();
	}

	//Right Click
	function rightClick(){
		if(commentShown){
			commentShown=false;
			blockshow=true;
			if(hdft["footer"])hdft["footer"].hide();
			for(m=0;m<comment.length;m++){
				comment[m].hide();
			}
			blockshow=false;
		}
		else{
			commentShown=true;
			blockshow=true;
			if(hdft["footer"])hdft["footer"].show();
			for(m=0;m<comment.length;m++){
				comment[m].show();
			}
			blockshow=false;
		}
		selectPage=hdft["footer"].page;
		setPage(selectPage,"jump");
		return false;
	}
	document.oncontextmenu=rightClick;

	//Select Page
	var selectPage=-1;
	function mouseWheel(pre){
		if(event.wheelDelta>=120){
			if(selectPage<0)selectPage=hdft["footer"].page;
			if(pre){
				selectPage=getPage(selectPage,-10);
			}
			else{
				selectPage=getPage(selectPage,-1);
			}
		}
		else if(event.wheelDelta<=-120){
			if(selectPage<0)selectPage=hdft["footer"].page;
			if(pre){
				selectPage=getPage(selectPage,10);
			}
			else{
				selectPage=getPage(selectPage,1);
			}
		}
		setPage(selectPage,"select");
	}
	var totalPage=68;
	function getPage(ori,delta){
		if(Math.abs(delta)>1){
			if(ori+delta==totalPage+10)return 0;
			else if(ori+delta==0-10)return totalPage;
			else if(ori+delta>totalPage)return totalPage;
			else if(ori+delta<0)return 0;
			else return ori+delta;
		}
		else{
			if(ori+delta==totalPage+1)return 0;
			else if(ori+delta==0-1)return totalPage;
			else return ori+delta;
		}
	}
	function setPage(page,type){
		if(type=="select"){
			if(bw.ie6){
				getObjectRef("pgImg1").style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=scale, src="+src_footer_page_select[Math.floor(page/10)]+");"
				getObjectRef("pgImg2").style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=scale, src="+src_footer_page_select[Math.floor(page%10)]+");"
			}
			else{
				getObjectRef("pgImg1").src=src_footer_page_select[Math.floor(page/10)];
				getObjectRef("pgImg2").src=src_footer_page_select[Math.floor(page%10)];
			}
		}
		if(type=="jump"){
			if(bw.ie6){
				getObjectRef("pgImg1").style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=scale, src="+src_footer_page[Math.floor(page/10)]+");"
				getObjectRef("pgImg2").style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=scale, src="+src_footer_page[Math.floor(page%10)]+");"
			}
			else{
				getObjectRef("pgImg1").src=src_footer_page[Math.floor(page/10)];
				getObjectRef("pgImg2").src=src_footer_page[Math.floor(page%10)];
			}
		}
	}
	function jumpPage(){
		if(selectPage!=hdft["footer"].page){
			if(confirm("确实要跳转到所选的第"+selectPage+"页吗？")){
				setPage(selectPage,"jump");
				gotopage(selectPage);
			}
			else{
				selectPage=hdft["footer"].page;
				setPage(selectPage,"jump");
			}
		}
	}
	function cancelWheel(type){
		if(type)document.onmousewheel=function(){return false;}
		else document.onmousewheel=null;
	}
	function cancelRightClick(type){
		if(type)document.oncontextmenu=function(){selectPage=hdft["footer"].page;setPage(selectPage,"jump");return false;}
		else document.oncontextmenu=rightClick;
	}

	//Blink
	var BlinkStop=true;
	var blinkObj;
	var blinkOriFunc;
	function blinkStart(obj){
		blinkObj=obj;
		BlinkStop=false;
		tempFunc=function(){BlinkStop=true};
		blinkOriFunc=blinkObj.addOver(tempFunc);
		if(!blinkOriFunc)blinkOriFunc=function(){return false;};
		blink(blinkObj,false);
	}
	function blink(obj,toShow){
		if(BlinkStop){obj.show();if(obj.type=="ccheck")obj.moveTo(obj.leftx-1,obj.topy-1);obj.addOver(blinkOriFunc);return;}
		if(toShow)obj.show();
		else obj.hide();
		window.setTimeout("blink(blinkObj,"+!toShow+")",500);
	}
	function checkBlink(){
		if(!rqst["hilight"])return;
		tempArr=rqst["hilight"].split("|");
		hkuc1=parseInt(tempArr[0]);
		hkuc2=parseInt(tempArr[1]);
		if(isNaN(hkuc1)||hkuc1>box.length)
			return;
		if(isNaN(hkuc2)||hkuc2>box[hkuc1].length)
			return;
		tempObj=box[hkuc1][hkuc2];
		if(tempArr.length>2&&box[hkuc1][hkuc2].numObj){
			tempObj=box[hkuc1][hkuc2].numObj;
		}
		blinkStart(tempObj);
	}

	//String
	function getBgStr(imgSrc){
		if(bw.ie6)return "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=crop, src="+imgSrc+");"
		else return "background:url("+imgSrc+");"
	}
	function getImgStr(imgSrc,width,height,id){
		if(bw.ie6)return "<table border=0 cellpadding=0 cellspacing=0 style=\"display:inline;\"><tr><td><div"+(id?(" id=\""+id+"\""):"")+" style=\"width:"+width+"px;height:"+height+"px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=scale, src="+imgSrc+");\"></div></td></tr></table>";
		else return "<img"+(id?" id=\""+id+"\"":"")+" src=\""+imgSrc+"\" width=\""+width+"\" height=\""+height+"\">";
	}
