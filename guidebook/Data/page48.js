// CVG HTML Data Page48 Done By Ligueston 2008.4.21
hdft["header"]=Header("fuuko","���� ����","Fuuko Ibuki","���Ӵ�ʦ��һ��","Fuuko Master~Part 1");

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
box[0][0]=Textbox_Option(x(0),y(yLevel),"���Ӵ�ʦ��һ��");
box[0][0].addLink("p48_KFMT1");
box[0][0].addClick(function(){gotopage(13,"p13_retKFMT1")});
CmtSummery="�����ź��ǵĿɰ��������������˻���������С���Ҳ��������һ����Ȥ�����⡣";
CmtSelect="��һ�ν�����Ӵ�ʦ����ʱ��ֻ�����[�÷����ñ��Ӻȹ�֭һ��]��";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[0][1]=Textbox_Selection_C(x(3),y(yLevel),"����������루һ��","1",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"����������루һ��",0);
line[line.length]=Link(Point(linx(3),liny(0)-LINEBASEHEIGHT/2),Point(linx(3),liny(0)-LINEBASEHEIGHT/2));
//----------
box[1]=new Array();
yLevel+=3;
box[1][0]=Textbox_Option(x(2),y(yLevel),"̫�����ˣ������ñ��Ӻȹ�֭����");
line[line.length]=Link(box[1][0],box[0][1]);
box[1][1]=Textbox_Option(x(4),y(yLevel),"һֱ����ȥ");
line[line.length]=Link(box[1][1],box[0][1]);
//----------
box[2]=new Array();
yLevel+=2;
box[2][0]=Textbox_Option(x(2),y(yLevel),"�÷����ñ��Ӻȹ�֭����");
line[line.length]=Link(box[2][0],box[1][0]);

yLevel+=2;
line[line.length]=Link(Point(linx(2),liny(0)),box[1][0]);
line[line.length]=Link(Point(linx(2),liny(0)),Point(linx(4),liny(0)),box[1][1]);
line[line.length]=Link(Point(linx(3),liny(0)),Point(linx(3),liny(0)));
//----------
box[3]=new Array();
yLevel+=4;
box[3][0]=Textbox_Option(x(0),y(yLevel),"���Ӵ�ʦ������");
box[3][0].addLink("p48_KFMT2");
box[3][0].addClick(function(){gotopage(17,"p17_retKFMT2")});
box[3][1]=Textbox_Selection(x(3),y(yLevel),"����������루����");
line[line.length]=Link(Point(linx(3),liny(0)-LINEBASEHEIGHT/2),Point(linx(3),liny(0)-LINEBASEHEIGHT/2));
//----------
box[4]=new Array();
yLevel+=3;
box[4][0]=Textbox_Option(x(1.5),y(yLevel),"������");
line[line.length]=Link(box[4][0],Point(linx(2.5),liny(-1)));
box[4][1]=Textbox_Option(x(4.5),y(yLevel),"���ĵ���ȥ");
line[line.length]=Link(box[4][1],Point(linx(2.5),liny(-1)));
line[line.length]=Link(Point(linx(3),liny(-1)),box[3][1]);
//----------
box[5]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="���Ӵ�ʦһ����4�������磺[�÷����ñ��Ӻȹ�֭]��[�ѷ��Ӵ�����ȥ]��22�տ�ʼ���֣���[�ұ�����װ���Լ�]��23�տ�ʼ���֣���[͵�������ӻ���ĵ��]��24�տ�ʼ���֣���һ�����������[�����ӳ���������]��29�ճ��֣���һ�����ض�������顣����һ�����������������κ󼴿ɴﵽ���Ƿ��켫������ɣ����������������ѡ���Ѿ���ɵ���Ŀ���������������ѡ����ɵ���Ŀ���������µľ��顣";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[5][0]=Textbox_Selection_C(x(1.5),y(yLevel),"���Ӷ����磨һ��","2",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"���Ӷ����磨һ��",0);
line[line.length]=Link(box[5][0],box[4][0]);
//----------
box[6]=new Array();
yLevel+=2;
box[6][0]=Textbox_Option(x(1.5),y(yLevel),"�÷����ñ��Ӻȹ�֭");
line[line.length]=Link(box[6][0],box[5][0]);
box[6][1]=Textbox_Option(x(3)+BUTTONASIDEADJUST,y(yLevel),"���÷����ñ��Ӻȹ�֭������/���");
//----------
box[7]=new Array();
yLevel+=2;
box[7][0]=Textbox_Option(x(1.5),y(yLevel),"�ѷ��Ӵ�����ȥ");
line[line.length]=Link(box[7][0],box[6][0]);
box[7][1]=Textbox_Option(x(3)+BUTTONASIDEADJUST,y(yLevel),"���ѷ��Ӵ�����ȥ������");

yLevel+=2;
line[line.length]=Link(Point(linx(1.5),liny(0)),box[7][0]);
line[line.length]=Link(Point(linx(1.5),liny(0)),Point(linx(4.5),liny(0)),box[4][1]);
line[line.length]=Link(Point(linx(3),liny(0)),Point(linx(3),liny(0)));
//----------
box[8]=new Array();
yLevel+=4;
box[8][0]=Textbox_Option(x(0),y(yLevel),"���Ӵ�ʦ������");
box[8][0].addLink("p48_KFMT3");
box[8][0].addClick(function(){gotopage(19,"p19_retKFMT3")});
box[8][1]=Textbox_Condition(x(3.5),y(yLevel),"22�գ�����������루����");
line[line.length]=Link(Point(linx(3.5),liny(0)-LINEBASEHEIGHT/2),Point(linx(3.5),liny(0)-LINEBASEHEIGHT/2));
//----------
box[9]=new Array();
yLevel+=3;
box[9][0]=Textbox_Selection(x(2),y(yLevel),"������");
line[line.length]=Link(box[9][0],Point(linx(3),liny(-1)));
box[9][1]=Textbox_Selection(x(5),y(yLevel),"���ĵ���ȥ");
line[line.length]=Link(box[9][1],Point(linx(3),liny(-1)));
line[line.length]=Link(Point(linx(3.5),liny(-1)),box[8][1]);
//----------
box[10]=new Array();
yLevel+=2;
box[10][0]=Textbox_Selection(x(2),y(yLevel),"����������루����");
line[line.length]=Link(box[10][0],box[9][0]);
//----------
box[11]=new Array();
yLevel+=3;
box[11][0]=Textbox_Option(x(0.5),y(yLevel),"������");
line[line.length]=Link(box[11][0],Point(linx(1.5),liny(-1)));
box[11][1]=Textbox_Option(x(3.5),y(yLevel),"��ȥ����");
line[line.length]=Link(box[11][1],Point(linx(1.5),liny(-1)));
line[line.length]=Link(Point(linx(2),liny(-1)),box[10][0]);
//----------
box[12]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="23����26�գ�������[�ѷ��Ӵ�����ȥ]������ݹ�����·��ѡ���б仯������18�յķ�֧{�м����뿪��}ѡ��[˯��]����[�ѷ��Ӵ�����ȥ]���鷢���������ң���������У���ҡ�";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[12][0]=Textbox_Selection_C(x(0.5),y(yLevel),"���Ӷ����磨����","3",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"���Ӷ����磨����",0);
line[line.length]=Link(box[12][0],box[11][0]);
//----------
box[13]=new Array();
yLevel+=2;
box[13][0]=Textbox_Option(x(0.5),y(yLevel),"�÷����ñ��Ӻȹ�֭");
line[line.length]=Link(box[13][0],box[12][0]);
box[13][1]=Textbox_Option(x(2)+BUTTONASIDEADJUST,y(yLevel),"���÷����ñ��Ӻȹ�֭������/���");
//----------
box[14]=new Array();
yLevel+=2;
box[14][0]=Textbox_Option(x(0.5),y(yLevel),"�ѷ��Ӵ�����ȥ");
line[line.length]=Link(box[14][0],box[13][0]);
box[14][1]=Textbox_Option(x(2)+BUTTONASIDEADJUST,y(yLevel),"���ѷ��Ӵ�����ȥ������/���");
//----------
box[15]=new Array();
yLevel+=2;
box[15][0]=Textbox_Option(x(0.5),y(yLevel),"������װ���Լ�");
line[line.length]=Link(box[15][0],box[14][0]);
box[15][1]=Textbox_Option(x(2)+BUTTONASIDEADJUST,y(yLevel),"��������װ���Լ�������");

yLevel+=3;
line[line.length]=Link(Point(linx(0.5),liny(-1)),box[15][0]);
line[line.length]=Link(Point(linx(0.5),liny(-1)),Point(linx(3.5),liny(-1)),box[11][1]);
line[line.length]=Link(Point(linx(2),liny(0)),Point(linx(2),liny(-1)));
line[line.length]=Link(Point(linx(2),liny(0)),Point(linx(5),liny(0)),box[9][1]);
line[line.length]=Link(Point(linx(3.5),liny(0)),Point(linx(3.5),liny(0)));

hdft["footer"]=Footer(liny(1),48);