// CVG HTML Data Page50 Done By Ligueston 2008.4.21
hdft["header"]=Header("fuuko","���� ����","Fuuko Ibuki","���Ӵ�ʦ������","Fuuko Master~Part 2");

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
box[0][0]=Textbox_Option(x(0),y(yLevel),"���Ӵ�ʦ���ߣ�");
box[0][0].addLink("p50_KFMT7");
box[0][0].addClick(function(){gotopage(44,"p44_retKFMT7")});
box[0][1]=Textbox_Condition(x(3.5),y(yLevel),"24�գ�����������루�ģ�");
line[line.length]=Link(Point(linx(3.5),liny(0)-LINEBASEHEIGHT/2),Point(linx(3.5),liny(0)-LINEBASEHEIGHT/2));
//----------
box[1]=new Array();
yLevel+=3;
box[1][0]=Textbox_Selection(x(2),y(yLevel),"������");
line[line.length]=Link(box[1][0],Point(linx(3),liny(-1)));
box[1][1]=Textbox_Selection(x(5),y(yLevel),"��ȥ����","r|+δ����");
line[line.length]=Link(box[1][1],Point(linx(3),liny(-1)));
line[line.length]=Link(Point(linx(3.5),liny(-1)),box[0][1]);
//----------
box[2]=new Array();
yLevel+=2;
box[2][0]=Textbox_Selection(x(2),y(yLevel),"����������루�壩");
line[line.length]=Link(box[2][0],box[1][0]);
//----------
box[3]=new Array();
yLevel+=3;
box[3][0]=Textbox_Option(x(0.5),y(yLevel),"������");
line[line.length]=Link(box[3][0],Point(linx(1.5),liny(-1)));
box[3][1]=Textbox_Option(x(3.5),y(yLevel),"����");
line[line.length]=Link(box[3][1],Point(linx(1.5),liny(-1)));
line[line.length]=Link(Point(linx(2),liny(-1)),box[2][0]);
//----------
box[4]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="���գ���ѡ��[�ѷ��Ӵ�����ȥ]��[�ұ���װ���Լ�]��������������ѡ������������籾���޷���ɡ�";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[4][0]=Textbox_Selection_C(x(0.5),y(yLevel),"���Ӷ����磨����","5",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"���Ӷ����磨����",0);
line[line.length]=Link(box[4][0],box[3][0]);
//----------
box[5]=new Array();
yLevel+=2;
box[5][0]=Textbox_Option(x(0.5),y(yLevel),"�÷����ñ��Ӻȹ�֭");
line[line.length]=Link(box[5][0],box[4][0]);
box[5][1]=Textbox_Option(x(2)+BUTTONASIDEADJUST,y(yLevel),"���÷����ñ��Ӻȹ�֭������/���");
//----------
box[6]=new Array();
yLevel+=2;
box[6][0]=Textbox_Option(x(0.5),y(yLevel),"�ѷ��Ӵ�����ȥ");
line[line.length]=Link(box[6][0],box[5][0]);
box[6][1]=Textbox_Option(x(2)+BUTTONASIDEADJUST,y(yLevel),"����ѡ��");
//----------
box[7]=new Array();
yLevel+=2;
box[7][0]=Textbox_Option(x(0.5),y(yLevel),"������װ���Լ�");
line[line.length]=Link(box[7][0],box[6][0]);
box[7][1]=Textbox_Option(x(2)+BUTTONASIDEADJUST,y(yLevel),"����ѡ��");
//----------
box[8]=new Array();
yLevel+=2;
box[8][0]=Textbox_Option(x(0.5),y(yLevel),"͵�������ӻ���ĵ��");
line[line.length]=Link(box[8][0],box[7][0]);
box[8][1]=Textbox_Option(x(2)+BUTTONASIDEADJUST,y(yLevel),"��͵�������ӻ���ĵ�̡�����/���");
//----------
box[9]=new Array();
yLevel+=2;
box[9][0]=Textbox_Option(x(0.5),y(yLevel),"����");
line[line.length]=Link(box[9][0],box[8][0]);

yLevel+=2;
line[line.length]=Link(Point(linx(0.5),liny(0)),box[8][0]);
line[line.length]=Link(Point(linx(0.5),liny(0)),Point(linx(3.5),liny(0)),box[3][1]);

yLevel+=1;
line[line.length]=Link(Point(linx(2),liny(0)),Point(linx(2),liny(-1)));
line[line.length]=Link(Point(linx(2),liny(0)),Point(linx(5),liny(0)),box[1][1]);
line[line.length]=Link(Point(linx(3.5),liny(0)),Point(linx(3.5),liny(0)));

//----------
box[10]=new Array();
yLevel+=4;
box[10][0]=Textbox_Option(x(0),y(yLevel),"���Ӵ�ʦ���ˣ�");
box[10][0].addLink("p50_KFMT8");
box[10][0].addClick(function(){gotopage(44,"p44_retKFMT8")});
box[10][1]=Textbox_Selection(x(3.5),y(yLevel),"����������루����");
line[line.length]=Link(Point(linx(3.5),liny(0)-LINEBASEHEIGHT/2),Point(linx(3.5),liny(0)-LINEBASEHEIGHT/2));
//----------
box[11]=new Array();
yLevel+=3;
box[11][0]=Textbox_Option(x(2),y(yLevel),"������");
line[line.length]=Link(box[11][0],Point(linx(3),liny(-1)));
box[11][1]=Textbox_Option(x(5),y(yLevel),"��ȥ����");
line[line.length]=Link(box[11][1],Point(linx(3),liny(-1)));
line[line.length]=Link(Point(linx(3.5),liny(-1)),box[10][1]);
//----------
box[12]=new Array();
yLevel+=2;
box[12][0]=Textbox_Condition(x(2),y(yLevel),"24�գ�����������루�ģ�");
line[line.length]=Link(box[12][0],box[11][0]);
//----------
box[13]=new Array();
yLevel+=3;
box[13][0]=Textbox_Selection(x(0.5),y(yLevel),"������");
line[line.length]=Link(box[13][0],Point(linx(1.5),liny(-1)));
box[13][1]=Textbox_Selection(x(3.5),y(yLevel),"��ȥ����","r|+δ����");
line[line.length]=Link(box[13][1],Point(linx(1.5),liny(-1)));
line[line.length]=Link(Point(linx(2),liny(-1)),box[12][0]);
//----------
box[14]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="���գ���ѡ��[�ұ�����װ���Լ�]��������������ѡ����������籾���޷���ɡ����տ�ѡ���������[�����ӳ���������]�����һ�μ��ɴﵽ���Ƿ��켫������24���ڷ�֧{����������루�ģ�}ѡ��[��ȥ����]����δ���������֧��ֱ�ӽ���[�����ӳ���������]���顣<br>���գ�[�ѷ��Ӵ�����ȥ]�����Ƿ��Ѿ���ɣ�ѡ������������ķ���ľ��顣�����������ɣ�ѡ��󲻻�����������ѡ��<br>���4��������ȫ����ɣ����Ϊ�����Ӵ�ʦ����";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[14][0]=Textbox_Selection_C(x(0.5),y(yLevel),"���Ӷ����磨�ߣ�","6",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"���Ӷ����磨�ߣ�",0);
line[line.length]=Link(box[14][0],box[13][0]);
box[14][1]=Textbox_Option(x(3.5),y(yLevel),"���������������������");
line[line.length]=Link(box[14][1],box[13][1]);
//----------
box[15]=new Array();
yLevel+=2;
box[15][0]=Textbox_Option(x(0.5),y(yLevel),"�÷����ñ��Ӻȹ�֭");
line[line.length]=Link(box[15][0],box[14][0]);
box[15][1]=Textbox_Option(x(2)+BUTTONASIDEADJUST,y(yLevel),"���÷����ñ��Ӻȹ�֭������/���");
//----------
box[16]=new Array();
yLevel+=2;
box[16][0]=Textbox_Option(x(0.5),y(yLevel),"�ѷ��Ӵ�����ȥ");
line[line.length]=Link(box[16][0],box[15][0]);
box[16][1]=Textbox_Option(x(2)+BUTTONASIDEADJUST,y(yLevel),"���ѷ��Ӵ�����ȥ������/���");
//----------
box[17]=new Array();
yLevel+=2;
box[17][0]=Textbox_Option(x(0.5),y(yLevel),"������װ���Լ�");
line[line.length]=Link(box[17][0],box[16][0]);
box[17][1]=Textbox_Option(x(2)+BUTTONASIDEADJUST,y(yLevel),"����ѡ��");
//----------
box[18]=new Array();
yLevel+=2;
box[18][0]=Textbox_Option(x(0.5),y(yLevel),"͵�������ӻ���ĵ��");
line[line.length]=Link(box[18][0],box[17][0]);
box[18][1]=Textbox_Option(x(2)+BUTTONASIDEADJUST,y(yLevel),"��͵�������ӻ���ĵ�̡�����/���");
//----------
box[19]=new Array();
yLevel+=2;
box[19][0]=Textbox_Option(x(0.5),y(yLevel),"��������������");
line[line.length]=Link(box[19][0],box[18][0]);
box[19][1]=Textbox_Option(x(2)+BUTTONASIDEADJUST,y(yLevel),"���������������������");

yLevel+=2;
line[line.length]=Link(Point(linx(0.5),liny(0)),box[18][0]);
line[line.length]=Link(Point(linx(0.5),liny(0)),Point(linx(3.5),liny(0)),box[13][1]);

yLevel+=1;
line[line.length]=Link(Point(linx(2),liny(0)),Point(linx(2),liny(-1)));
line[line.length]=Link(Point(linx(2),liny(0)),Point(linx(5),liny(0)),box[11][1]);
line[line.length]=Link(Point(linx(3.5),liny(0)),Point(linx(3.5),liny(0)));
//----------
box[20]=new Array();
yLevel+=4;
box[20][0]=Textbox_Option(x(0),y(yLevel),"���Ӵ�ʦ���ţ�");
box[20][0].addLink("p50_KFMT9");
box[20][0].addClick(function(){gotopage(44,"p44_retKFMT9")});
CmtSummery="";
CmtSelect="4�������磺[�÷����ñ��Ӻȹ�֭]��[�ѷ��Ӵ�����ȥ]��[�ұ�����װ���Լ�]��[͵�������ӻ���ĵ��]��ȫ���ﵽ���Ƿ��켫����MAX�ȼ����󣨼���Ϊ�����Ӵ�ʦ������30���ڷ�֧{���˵ķ���}ѡ��[�����]�������������ض�������飬��Ϊ�������ٻ�ʹ����";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[20][1]=Textbox_Condition_C(x(3),y(yLevel),"4��������ȫ�����","7",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"4��������ȫ�����",0);
line[line.length]=Link(Point(linx(3),liny(0)-LINEBASEHEIGHT/2),Point(linx(3),liny(0)-LINEBASEHEIGHT/2));
//----------
box[21]=new Array();
yLevel+=3;
box[21][0]=Textbox_Selection(x(2),y(yLevel),"��");
line[line.length]=Link(box[21][0],box[20][1]);
box[21][1]=Textbox_Selection(x(4),y(yLevel),"��");
line[line.length]=Link(box[21][1],box[20][1]);
//----------
box[22]=new Array();
yLevel+=2;
box[22][0]=Textbox_Option(x(2),y(yLevel),"�������ٻ�ʹ�����");
line[line.length]=Link(box[22][0],box[21][0]);

yLevel+=2;
line[line.length]=Link(Point(linx(2),liny(0)),box[22][0]);
line[line.length]=Link(Point(linx(2),liny(0)),Point(linx(4),liny(0)),box[21][1]);
line[line.length]=Link(Point(linx(3),liny(0)),Point(linx(3),liny(0)));

hdft["footer"]=Footer(liny(1),50);