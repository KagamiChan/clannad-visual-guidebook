// CVG HTML Data Page1 Done By Ligueston 2008.3.31

include_css("CSS/page1.css");
BasicX+=XSCALE/2;
hdft["header"]=Header("public","使用指南","User Manual","图例","Lenged");
hdft["header"].addLink("p1_header");

var yLevel=0;
//----------
yLevel+=5;
box[0]=new Array();
box[0][0]=Textbox_Option(x(0),y(yLevel),"文字","l|文字|-文字");
line[line.length]=new vmlline(linx(0),liny(0)-YSCALE/2,0,0);
line[line.length]=new vmlline(linx(0),liny(1),0,0);
box[0][1]=new ButtonBase(x(2.5),y(yLevel)-YSCALE/2,"text","<span class=hilight0"+sizestr+">一般选择项</span>（简称选项）以及<span class=hilight0"+sizestr+">事件</span>。绿色<span class=hilight0"+sizestr+">角标</span>表示此选项为进入相应角色的线路的必选选项；红色角标表示选择此选项退出相应角色的线路。","btn0414",HEADERWIDTH-x(3));

//----------
box[1]=new Array();
yLevel+=3;
CmtSummery="<span class=hilight0414"+sizestr+">剧情描述</span>。对注释所在分支前的剧情的简要概括。";
CmtSelect="<span class=hilight0414"+sizestr+">注释内容</span>。包括选项的一些特殊影响，条件选择分支的具体定义，以及一些线路的走向指导。{蓝色}字为条件选择分支、一般选择分支或事件的引用，[红色]字为一般选择项的引用。";
CmtCaution="<span class=hilight0414"+sizestr+">说明</span>。一般为对特殊事件的介绍，以及线路或游戏特点的说明。";
CmtOption="+特殊选项触发选项路径|-特殊选项触发选项路径";
CmtEvents="11111111";
CmtEvntIru="<span class=hilight0414"+sizestr+">特殊事件注释</span>。简要说明特殊事件影响。";
box[1][0]=Textbox_Selection_C(x(0),y(yLevel),"文字","0",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"标题",-YSCALE*4,"l|+文字");
line[line.length]=new vmlline(linx(0),liny(0)-YSCALE/2,0,0);
line[line.length]=new vmlline(linx(0),liny(1),0,0);
box[1][1]=new ButtonBase(x(2.5),y(yLevel)-YSCALE,"text","<span class=hilight0"+sizestr+">一般选择分支</span>（简称分支）以及<span class=hilight0"+sizestr+">条件选择性</span>。蓝色的<span class=hilight0"+sizestr+">注释标志</span>表示此选项分支有相应注释说明，内容请参见注释栏与之同号的注释。蓝色角标表示条件选择分支中的分支没有触发时的等同路线走向。","btn0414",HEADERWIDTH-x(3));
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Condition(x(0),y(yLevel),"文字");
line[line.length]=new vmlline(linx(0),liny(0)-YSCALE/2,0,0);
line[line.length]=new vmlline(linx(0),liny(1),0,0);
box[2][1]=new ButtonBase(x(2.5),y(yLevel),"text","<span class=hilight0"+sizestr+">条件选择分支</span>（简称条件分支）。用于判断剧情转向导致选择分支产生变化的条件。","btn0414",HEADERWIDTH-x(3));
//----------
box[3]=new Array();
yLevel+=3;
box[3][0]=Textbox_Block(x(0),y(yLevel),"文字");
line[line.length]=new vmlline(linx(0),liny(0)-YSCALE/2,0,0);
line[line.length]=new vmlline(linx(0),liny(1),0,0);
box[3][1]=new ButtonBase(x(2.5),y(yLevel)-YSCALE/2,"text","<span class=hilight0"+sizestr+">区块提示</span>。由于选择分支复杂导致流程宽度过大。将一部分流程从主流程中提取出来，并在这部分的位置上用区块提示代替。","btn0414",HEADERWIDTH-x(3));
//----------
box[4]=new Array();
yLevel+=3;
box[4][0]=Textbox_Quit(x(0),y(yLevel),"文字");
line[line.length]=new vmlline(linx(0),liny(0)-YSCALE/2,0,0);
box[4][1]=new ButtonBase(x(2.5),y(yLevel),"text","<span class=hilight0"+sizestr+">流程终止提示</span>。由公共剧情完全进入相应角色剧情时，公共流程相应终结的提示；剧情完结的提示，包括Good Ending和Bad Ending；以及事件流程完结回到原流程的提示。","btn0414",HEADERWIDTH-x(3));
//----------
box[5]=new Array();
yLevel+=3;
box[5][0]=Textbox_Date(x(0.5),y(yLevel),"X月XX日","top");
line[line.length]=new vmlline(box[5][0].lowercenter.leftx,box[5][0].lowercenter.topy,0,0);
box[5][1]=Textbox_Date(x(0.5),y(yLevel),"X月XX日","bottom");
line[line.length]=new vmlline(box[5][1].upcenter.leftx,box[5][1].upcenter.topy-YSCALE/2,0,0);
box[5][2]=new ButtonBase(x(2.5),y(yLevel),"text","<span class=hilight0"+sizestr+">日期／剧情段起讫提示</span>。","btn0414",HEADERWIDTH-x(3));

tempString="<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"96%\">\
<tr><td colspan=2 style=\"line-height:200%;\" align=\"left\"><span class=hilight0414"+sizestr+">特殊事件图标</span>提示该分支所影响的特殊事件。共有8个特殊事件。</td></tr>\
<tr><td width=25% align=\"left\">"+getImgStr(src_comment_mark_en[0],COMMENTMARKSIZE,COMMENTMARKSIZE)+getImgStr(src_comment_mark_un[0],COMMENTMARKSIZE,COMMENTMARKSIZE)+"</td><td style=\"line-height:200%;\" align=\"left\"><span class=hilight0414"+sizestr+">智代64HIT</span>相关/无关标志。</td></tr>\
<tr><td width=25% align=\"left\">"+getImgStr(src_comment_mark_en[1],COMMENTMARKSIZE,COMMENTMARKSIZE)+getImgStr(src_comment_mark_un[1],COMMENTMARKSIZE,COMMENTMARKSIZE)+"</td><td style=\"line-height:200%;\" align=\"left\"><span class=hilight0414"+sizestr+">有纪宁的咒语/体育仓库事件</span>相关/无关标志。</td></tr>\
<tr><td width=25% align=\"left\">"+getImgStr(src_comment_mark_en[2],COMMENTMARKSIZE,COMMENTMARKSIZE)+getImgStr(src_comment_mark_un[2],COMMENTMARKSIZE,COMMENTMARKSIZE)+"</td><td style=\"line-height:200%;\" align=\"left\"><span class=hilight0414"+sizestr+">3对3篮球赛</span>相关/无关标志。</td></tr>\
<tr><td width=25% align=\"left\">"+getImgStr(src_comment_mark_en[3],COMMENTMARKSIZE,COMMENTMARKSIZE)+getImgStr(src_comment_mark_un[3],COMMENTMARKSIZE,COMMENTMARKSIZE)+"</td><td style=\"line-height:200%;\" align=\"left\"><span class=hilight0414"+sizestr+">伪女友事件</span>相关/无关标志。</td></tr>\
<tr><td width=25% align=\"left\">"+getImgStr(src_comment_mark_en[4],COMMENTMARKSIZE,COMMENTMARKSIZE)+getImgStr(src_comment_mark_un[4],COMMENTMARKSIZE,COMMENTMARKSIZE)+"</td><td style=\"line-height:200%;\" align=\"left\"><span class=hilight0414"+sizestr+">风子大师</span>相关/无关标志。</td></tr>\
<tr><td width=25% align=\"left\">"+getImgStr(src_comment_mark_en[5],COMMENTMARKSIZE,COMMENTMARKSIZE)+getImgStr(src_comment_mark_un[5],COMMENTMARKSIZE,COMMENTMARKSIZE)+"</td><td style=\"line-height:200%;\" align=\"left\"><span class=hilight0414"+sizestr+">琴美好感度</span>相关/无关标志。</td></tr>\
<tr><td width=25% align=\"left\">"+getImgStr(src_comment_mark_en[6],COMMENTMARKSIZE,COMMENTMARKSIZE)+getImgStr(src_comment_mark_un[6],COMMENTMARKSIZE,COMMENTMARKSIZE)+"</td><td style=\"line-height:200%;\" align=\"left\"><span class=hilight0414"+sizestr+">枪战游戏/业余棒球</span>相关/无关标志。</td></tr>\
<tr><td width=25% align=\"left\">"+getImgStr(src_comment_mark_en[7],COMMENTMARKSIZE,COMMENTMARKSIZE)+getImgStr(src_comment_mark_un[7],COMMENTMARKSIZE,COMMENTMARKSIZE)+"</td><td style=\"line-height:200%;\" align=\"left\"><span class=hilight0414"+sizestr+">毕业典礼（AFTER STORY）</span>相关/无关标志。</td></tr>\
</table>";
box[5][3]=new ButtonBase(COMMENTLEFT,commentTop,"text",tempString,"comment",COMMENTWIDTH);
comment[comment.length]=box[5][3];
BasicX-=XSCALE/2;
//----------
box[6]=new Array();
yLevel+=6;
box[5][4]=new HeaderBase(0,y(yLevel),"public","公共路线","Public Route","序章～4月14日","Prologue ~ April 14th","headerC","headerE");
box[5][4].addLink("p1_header2");
yLevel+=6;
box[6][0]=Textbox_Date(x(4),y(yLevel),"4月14日","top");
//----------
box[7]=new Array();
yLevel+=2;
CmtSummery="春原有事离开，朋也一个人在寝室里。录音机里的磁带放出老掉牙的摇滚，朋也决定……";
CmtSelect="选择[录点什么上去]，若您是第一次开始此游戏，接下来的分支将不会出现。";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[7][0]=Textbox_Selection_C(x(4),y(yLevel),"插着磁带的录音机","1",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"献给挚友春原的说唱（一）",0);
line[line.length]=Link(box[7][0],box[6][0]);
//----------
box[8]=new Array();
yLevel+=3;
box[8][0]=Textbox_Option(x(3),y(yLevel),"录点什么上去");
line[line.length]=Link(box[8][0],box[7][0]);
box[8][1]=Textbox_Option(x(5),y(yLevel),"不理他");
line[line.length]=Link(box[8][1],box[7][0]);
//----------
box[9]=new Array();
yLevel+=2;
box[9][0]=Textbox_Condition(x(3),y(yLevel),"第一次开始游戏");
line[line.length]=Link(box[9][0],box[8][0]);
//----------
box[10]=new Array();
yLevel+=3;
box[10][0]=Textbox_Option(x(2),y(yLevel),"否");
line[line.length]=Link(box[10][0],box[9][0]);
box[10][1]=Textbox_Option(x(4),y(yLevel),"是");
line[line.length]=Link(box[10][1],box[9][0]);
//----------
box[11]=new Array();
yLevel+=2;
CmtSummery="朋也决定先给春原一首即兴说唱，他按下了录音键。";
CmtSelect="当您再次开始此游戏，并在前面的分支选择[录点什么上去]，紧接着就会出现这个分支。选择[随便说几句]，就能欣赏到“献给挚友春原的说唱”，第二天课前春原会因此而抱怨。";
CmtCaution="“说唱”一共有七个版本内容，当一个版本剧情触发后，将游戏进行到15日中午左右（即听完春原的抱怨后），则下次重新开始游戏时，您就会听到不同版本的“说唱”。七个版本全部触发后，下次重新开始游戏则回到第一个版本，如此循环……";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[11][0]=Textbox_Selection_C(x(2),y(yLevel),"献给春原的说唱","2",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"献给挚友春原的说唱（二）",0);
line[line.length]=Link(box[11][0],box[10][0]);
//----------
box[12]=new Array();
yLevel+=3;
box[12][0]=Textbox_Option(x(1),y(yLevel),"不玩了，太傻");
line[line.length]=Link(box[12][0],box[11][0]);
box[12][1]=Textbox_Option(x(3),y(yLevel),"随便说几句");
line[line.length]=Link(box[12][1],box[11][0]);
//----------
box[13]=new Array();
yLevel+=5;
box[13][0]=Textbox_Date(x(4),y(yLevel),"4月15日","bottom");
line[line.length]=Link(box[13][0],Point(linx(3),liny(-1)),Point(linx(2),liny(-2)),box[12][0]);
line[line.length]=Link(box[13][0],Point(linx(3),liny(-1)),Point(linx(2),liny(-2)),box[12][1]);
line[line.length]=Link(box[13][0],Point(linx(3),liny(-1)),box[10][1]);
line[line.length]=Link(box[13][0],box[8][1]);
box[13][0].addClick(function(){gotopage(2)});

hdft["footer"]=Footer(liny(3),1);