// CVG HTML Data Page1 Done By Ligueston 2008.3.31

include_css("CSS/page1.css");
BasicX+=XSCALE/2;
hdft["header"]=Header("public","ʹ��ָ��","User Manual","ͼ��","Lenged");
hdft["header"].addLink("p1_header");

var yLevel=0;
//----------
yLevel+=5;
box[0]=new Array();
box[0][0]=Textbox_Option(x(0),y(yLevel),"����","l|����|-����");
line[line.length]=new vmlline(linx(0),liny(0)-YSCALE/2,0,0);
line[line.length]=new vmlline(linx(0),liny(1),0,0);
box[0][1]=new ButtonBase(x(2.5),y(yLevel)-YSCALE/2,"text","<span class=hilight0"+sizestr+">һ��ѡ����</span>�����ѡ��Լ�<span class=hilight0"+sizestr+">�¼�</span>����ɫ<span class=hilight0"+sizestr+">�Ǳ�</span>��ʾ��ѡ��Ϊ������Ӧ��ɫ����·�ı�ѡѡ���ɫ�Ǳ��ʾѡ���ѡ���˳���Ӧ��ɫ����·��","btn0414",HEADERWIDTH-x(3));

//----------
box[1]=new Array();
yLevel+=3;
CmtSummery="<span class=hilight0414"+sizestr+">��������</span>����ע�����ڷ�֧ǰ�ľ���ļ�Ҫ������";
CmtSelect="<span class=hilight0414"+sizestr+">ע������</span>������ѡ���һЩ����Ӱ�죬����ѡ���֧�ľ��嶨�壬�Լ�һЩ��·������ָ����{��ɫ}��Ϊ����ѡ���֧��һ��ѡ���֧���¼������ã�[��ɫ]��Ϊһ��ѡ��������á�";
CmtCaution="<span class=hilight0414"+sizestr+">˵��</span>��һ��Ϊ�������¼��Ľ��ܣ��Լ���·����Ϸ�ص��˵����";
CmtOption="+����ѡ���ѡ��·��|-����ѡ���ѡ��·��";
CmtEvents="11111111";
CmtEvntIru="<span class=hilight0414"+sizestr+">�����¼�ע��</span>����Ҫ˵�������¼�Ӱ�졣";
box[1][0]=Textbox_Selection_C(x(0),y(yLevel),"����","0",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"����",-YSCALE*4,"l|+����");
line[line.length]=new vmlline(linx(0),liny(0)-YSCALE/2,0,0);
line[line.length]=new vmlline(linx(0),liny(1),0,0);
box[1][1]=new ButtonBase(x(2.5),y(yLevel)-YSCALE,"text","<span class=hilight0"+sizestr+">һ��ѡ���֧</span>����Ʒ�֧���Լ�<span class=hilight0"+sizestr+">����ѡ����</span>����ɫ��<span class=hilight0"+sizestr+">ע�ͱ�־</span>��ʾ��ѡ���֧����Ӧע��˵����������μ�ע������֮ͬ�ŵ�ע�͡���ɫ�Ǳ��ʾ����ѡ���֧�еķ�֧û�д���ʱ�ĵ�ͬ·������","btn0414",HEADERWIDTH-x(3));
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Condition(x(0),y(yLevel),"����");
line[line.length]=new vmlline(linx(0),liny(0)-YSCALE/2,0,0);
line[line.length]=new vmlline(linx(0),liny(1),0,0);
box[2][1]=new ButtonBase(x(2.5),y(yLevel),"text","<span class=hilight0"+sizestr+">����ѡ���֧</span>�����������֧���������жϾ���ת����ѡ���֧�����仯��������","btn0414",HEADERWIDTH-x(3));
//----------
box[3]=new Array();
yLevel+=3;
box[3][0]=Textbox_Block(x(0),y(yLevel),"����");
line[line.length]=new vmlline(linx(0),liny(0)-YSCALE/2,0,0);
line[line.length]=new vmlline(linx(0),liny(1),0,0);
box[3][1]=new ButtonBase(x(2.5),y(yLevel)-YSCALE/2,"text","<span class=hilight0"+sizestr+">������ʾ</span>������ѡ���֧���ӵ������̿�ȹ��󡣽�һ�������̴�����������ȡ�����������ⲿ�ֵ�λ������������ʾ���档","btn0414",HEADERWIDTH-x(3));
//----------
box[4]=new Array();
yLevel+=3;
box[4][0]=Textbox_Quit(x(0),y(yLevel),"����");
line[line.length]=new vmlline(linx(0),liny(0)-YSCALE/2,0,0);
box[4][1]=new ButtonBase(x(2.5),y(yLevel),"text","<span class=hilight0"+sizestr+">������ֹ��ʾ</span>���ɹ���������ȫ������Ӧ��ɫ����ʱ������������Ӧ�ս����ʾ������������ʾ������Good Ending��Bad Ending���Լ��¼��������ص�ԭ���̵���ʾ��","btn0414",HEADERWIDTH-x(3));
//----------
box[5]=new Array();
yLevel+=3;
box[5][0]=Textbox_Date(x(0.5),y(yLevel),"X��XX��","top");
line[line.length]=new vmlline(box[5][0].lowercenter.leftx,box[5][0].lowercenter.topy,0,0);
box[5][1]=Textbox_Date(x(0.5),y(yLevel),"X��XX��","bottom");
line[line.length]=new vmlline(box[5][1].upcenter.leftx,box[5][1].upcenter.topy-YSCALE/2,0,0);
box[5][2]=new ButtonBase(x(2.5),y(yLevel),"text","<span class=hilight0"+sizestr+">���ڣ������������ʾ</span>��","btn0414",HEADERWIDTH-x(3));

tempString="<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"96%\">\
<tr><td colspan=2 style=\"line-height:200%;\" align=\"left\"><span class=hilight0414"+sizestr+">�����¼�ͼ��</span>��ʾ�÷�֧��Ӱ��������¼�������8�������¼���</td></tr>\
<tr><td width=25% align=\"left\">"+getImgStr(src_comment_mark_en[0],COMMENTMARKSIZE,COMMENTMARKSIZE)+getImgStr(src_comment_mark_un[0],COMMENTMARKSIZE,COMMENTMARKSIZE)+"</td><td style=\"line-height:200%;\" align=\"left\"><span class=hilight0414"+sizestr+">�Ǵ�64HIT</span>���/�޹ر�־��</td></tr>\
<tr><td width=25% align=\"left\">"+getImgStr(src_comment_mark_en[1],COMMENTMARKSIZE,COMMENTMARKSIZE)+getImgStr(src_comment_mark_un[1],COMMENTMARKSIZE,COMMENTMARKSIZE)+"</td><td style=\"line-height:200%;\" align=\"left\"><span class=hilight0414"+sizestr+">�м���������/�����ֿ��¼�</span>���/�޹ر�־��</td></tr>\
<tr><td width=25% align=\"left\">"+getImgStr(src_comment_mark_en[2],COMMENTMARKSIZE,COMMENTMARKSIZE)+getImgStr(src_comment_mark_un[2],COMMENTMARKSIZE,COMMENTMARKSIZE)+"</td><td style=\"line-height:200%;\" align=\"left\"><span class=hilight0414"+sizestr+">3��3������</span>���/�޹ر�־��</td></tr>\
<tr><td width=25% align=\"left\">"+getImgStr(src_comment_mark_en[3],COMMENTMARKSIZE,COMMENTMARKSIZE)+getImgStr(src_comment_mark_un[3],COMMENTMARKSIZE,COMMENTMARKSIZE)+"</td><td style=\"line-height:200%;\" align=\"left\"><span class=hilight0414"+sizestr+">αŮ���¼�</span>���/�޹ر�־��</td></tr>\
<tr><td width=25% align=\"left\">"+getImgStr(src_comment_mark_en[4],COMMENTMARKSIZE,COMMENTMARKSIZE)+getImgStr(src_comment_mark_un[4],COMMENTMARKSIZE,COMMENTMARKSIZE)+"</td><td style=\"line-height:200%;\" align=\"left\"><span class=hilight0414"+sizestr+">���Ӵ�ʦ</span>���/�޹ر�־��</td></tr>\
<tr><td width=25% align=\"left\">"+getImgStr(src_comment_mark_en[5],COMMENTMARKSIZE,COMMENTMARKSIZE)+getImgStr(src_comment_mark_un[5],COMMENTMARKSIZE,COMMENTMARKSIZE)+"</td><td style=\"line-height:200%;\" align=\"left\"><span class=hilight0414"+sizestr+">�����øж�</span>���/�޹ر�־��</td></tr>\
<tr><td width=25% align=\"left\">"+getImgStr(src_comment_mark_en[6],COMMENTMARKSIZE,COMMENTMARKSIZE)+getImgStr(src_comment_mark_un[6],COMMENTMARKSIZE,COMMENTMARKSIZE)+"</td><td style=\"line-height:200%;\" align=\"left\"><span class=hilight0414"+sizestr+">ǹս��Ϸ/ҵ�����</span>���/�޹ر�־��</td></tr>\
<tr><td width=25% align=\"left\">"+getImgStr(src_comment_mark_en[7],COMMENTMARKSIZE,COMMENTMARKSIZE)+getImgStr(src_comment_mark_un[7],COMMENTMARKSIZE,COMMENTMARKSIZE)+"</td><td style=\"line-height:200%;\" align=\"left\"><span class=hilight0414"+sizestr+">��ҵ����AFTER STORY��</span>���/�޹ر�־��</td></tr>\
</table>";
box[5][3]=new ButtonBase(COMMENTLEFT,commentTop,"text",tempString,"comment",COMMENTWIDTH);
comment[comment.length]=box[5][3];
BasicX-=XSCALE/2;
//----------
box[6]=new Array();
yLevel+=6;
box[5][4]=new HeaderBase(0,y(yLevel),"public","����·��","Public Route","���¡�4��14��","Prologue ~ April 14th","headerC","headerE");
box[5][4].addLink("p1_header2");
yLevel+=6;
box[6][0]=Textbox_Date(x(4),y(yLevel),"4��14��","top");
//----------
box[7]=new Array();
yLevel+=2;
CmtSummery="��ԭ�����뿪����Ҳһ�����������¼������ĴŴ��ų��ϵ�����ҡ������Ҳ��������";
CmtSelect="ѡ��[¼��ʲô��ȥ]�������ǵ�һ�ο�ʼ����Ϸ���������ķ�֧��������֡�";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[7][0]=Textbox_Selection_C(x(4),y(yLevel),"���ŴŴ���¼����","1",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"�׸�ֿ�Ѵ�ԭ��˵����һ��",0);
line[line.length]=Link(box[7][0],box[6][0]);
//----------
box[8]=new Array();
yLevel+=3;
box[8][0]=Textbox_Option(x(3),y(yLevel),"¼��ʲô��ȥ");
line[line.length]=Link(box[8][0],box[7][0]);
box[8][1]=Textbox_Option(x(5),y(yLevel),"������");
line[line.length]=Link(box[8][1],box[7][0]);
//----------
box[9]=new Array();
yLevel+=2;
box[9][0]=Textbox_Condition(x(3),y(yLevel),"��һ�ο�ʼ��Ϸ");
line[line.length]=Link(box[9][0],box[8][0]);
//----------
box[10]=new Array();
yLevel+=3;
box[10][0]=Textbox_Option(x(2),y(yLevel),"��");
line[line.length]=Link(box[10][0],box[9][0]);
box[10][1]=Textbox_Option(x(4),y(yLevel),"��");
line[line.length]=Link(box[10][1],box[9][0]);
//----------
box[11]=new Array();
yLevel+=2;
CmtSummery="��Ҳ�����ȸ���ԭһ�׼���˵������������¼������";
CmtSelect="�����ٴο�ʼ����Ϸ������ǰ��ķ�֧ѡ��[¼��ʲô��ȥ]�������žͻ���������֧��ѡ��[���˵����]���������͵����׸�ֿ�Ѵ�ԭ��˵�������ڶ����ǰ��ԭ����˶���Թ��";
CmtCaution="��˵����һ�����߸��汾���ݣ���һ���汾���鴥���󣬽���Ϸ���е�15���������ң������괺ԭ�ı�Թ�󣩣����´����¿�ʼ��Ϸʱ�����ͻ�������ͬ�汾�ġ�˵�������߸��汾ȫ���������´����¿�ʼ��Ϸ��ص���һ���汾�����ѭ������";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[11][0]=Textbox_Selection_C(x(2),y(yLevel),"�׸���ԭ��˵��","2",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"�׸�ֿ�Ѵ�ԭ��˵��������",0);
line[line.length]=Link(box[11][0],box[10][0]);
//----------
box[12]=new Array();
yLevel+=3;
box[12][0]=Textbox_Option(x(1),y(yLevel),"�����ˣ�̫ɵ");
line[line.length]=Link(box[12][0],box[11][0]);
box[12][1]=Textbox_Option(x(3),y(yLevel),"���˵����");
line[line.length]=Link(box[12][1],box[11][0]);
//----------
box[13]=new Array();
yLevel+=5;
box[13][0]=Textbox_Date(x(4),y(yLevel),"4��15��","bottom");
line[line.length]=Link(box[13][0],Point(linx(3),liny(-1)),Point(linx(2),liny(-2)),box[12][0]);
line[line.length]=Link(box[13][0],Point(linx(3),liny(-1)),Point(linx(2),liny(-2)),box[12][1]);
line[line.length]=Link(box[13][0],Point(linx(3),liny(-1)),box[10][1]);
line[line.length]=Link(box[13][0],box[8][1]);
box[13][0].addClick(function(){gotopage(2)});

hdft["footer"]=Footer(liny(3),1);