// CVG HTML Data Page65 Done By kyrios 2008.4.16
hdft["header"]=Header("public","AFTER STORY","After Story","ͬ��ƪ������","Chapter of Conhabitation Life~Part 2");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Selection(x(3.5),y(yLevel),"����̽�����׵�Ҫ��");
line[line.length]=Link(Point(linx(3.5),liny(0)-LINEBASEHEIGHT/2),Point(linx(3.5),liny(0)-LINEBASEHEIGHT/2));
line[line.length-1].addTitle("���ת����ʮ��ҳ");
line[line.length-1].addClick(function(){gotopage(64)});
//----------
box[1]=new Array();
yLevel+=3;
box[1][0]=Textbox_Option(x(2.5),y(yLevel),"������","l|ֱ��|ϫ|����|����");
line[line.length]=Link(box[1][0],box[0][0]);
box[1][1]=Textbox_Option(x(4.5),y(yLevel),"��ȥ����","r|����|ֱ��|ϫ|����");
line[line.length]=Link(box[1][1],box[0][0]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Selection(x(2.5),y(yLevel),"�Ը��׷�Ӧ�Ĳ���");
line[line.length]=Link(box[2][0],box[1][0]);
//----------
box[3]=new Array();
yLevel+=3;
box[3][0]=Textbox_Option(x(1.5),y(yLevel),"Ź����","l|-����|-ֱ��-|-ϫ|-����");
line[line.length]=Link(box[3][0],box[2][0]);
box[3][1]=Textbox_Option(x(3.5),y(yLevel),"����","r|-����|-����|-ֱ��|-ϫ");
line[line.length]=Link(box[3][1],box[2][0]);
//----------
box[4]=new Array();
yLevel+=4;
box[4][0]=Textbox_Selection(x(3.5),y(yLevel),"��������ҵ��侣�һ��");
line[line.length]=Link(box[4][0],Point(linx(2.5),liny(-1)),box[3][0]);
line[line.length]=Link(box[4][0],Point(linx(2.5),liny(-1)),box[3][1]);
line[line.length]=Link(box[4][0],box[1][1]);
//----------
box[5]=new Array();
yLevel+=3;
box[5][0]=Textbox_Option(x(2.5),y(yLevel),"�Ӻ��汧ס��");
line[line.length]=Link(box[5][0],box[4][0]);
box[5][1]=Textbox_Option(x(4.5),y(yLevel),"��ʵ������");
line[line.length]=Link(box[5][1],box[4][0]);
//----------
box[6]=new Array();
yLevel+=2;
box[6][0]=Textbox_Selection(x(2.5),y(yLevel),"��������ҵ��侣�����");
line[line.length]=Link(box[6][0],box[5][0]);
//----------
box[7]=new Array();
yLevel+=3;
box[7][0]=Textbox_Option(x(1.5),y(yLevel),"���ĸ���һЩ");
line[line.length]=Link(box[7][0],box[6][0]);
box[7][1]=Textbox_Option(x(3.5),y(yLevel),"������������İ�,���������ͺ���");
line[line.length]=Link(box[7][1],box[6][0]);
//----------
box[8]=new Array();
yLevel+=2;
box[8][0]=Textbox_Selection(x(1.5),y(yLevel),"��������ҵ��侣�����");
line[line.length]=Link(box[8][0],box[7][0]);
//----------
box[9]=new Array();
yLevel+=3;
box[9][0]=Textbox_Option(x(0.5),y(yLevel),"����һ��");
line[line.length]=Link(box[9][0],box[8][0]);
box[9][1]=Textbox_Option(x(2.5),y(yLevel),"������̫ʧ����");
line[line.length]=Link(box[9][1],box[8][0]);
//----------
box[10]=new Array();
yLevel+=5;
box[10][0]=Textbox_Condition(x(3.5),y(yLevel),"ͬ��ƪ������Ұ̸�Լ��Ĺ�ȥ");
line[line.length]=Link(box[10][0],Point(linx(2.5),liny(-1)),Point(linx(1.5),liny(-2)),box[9][0]);
line[line.length]=Link(box[10][0],Point(linx(2.5),liny(-1)),Point(linx(1.5),liny(-2)),box[9][1]);
line[line.length]=Link(box[10][0],Point(linx(2.5),liny(-1)),box[7][1]);
line[line.length]=Link(box[10][0],box[5][1]);
//----------
box[11]=new Array();
yLevel+=3;
box[11][0]=Textbox_Selection(x(2.5),y(yLevel),"�ټ�������ȥ");
line[line.length]=Link(box[11][0],box[10][0]);
box[11][1]=Textbox_Selection(x(4.5),y(yLevel),"ͬ��","r|+δ����");
line[line.length]=Link(box[11][1],box[10][0]);
//----------
box[12]=new Array();
yLevel+=2;
box[12][0]=Textbox_Option(x(2.5),y(yLevel),"��Ұ���⡱���");
line[line.length]=Link(box[12][0],box[11][0]);
//----------
box[13]=new Array();
yLevel+=3;
box[13][0]=Textbox_Selection(x(3.5),y(yLevel),"�����ջ�����ѡ��");
line[line.length]=Link(box[13][0],box[12][0]);
line[line.length]=Link(box[13][0],box[11][1]);

//----------
box[14]=new Array();
yLevel+=3;
box[14][0]=Textbox_Option(x(1.5),y(yLevel),"����˽�ص�H��");
line[line.length]=Link(box[14][0],box[13][0]);
box[14][1]=Textbox_Option(x(3.5),y(yLevel),"���������");
line[line.length]=Link(box[14][1],box[13][0]);
box[14][2]=Textbox_Option(x(5.5),y(yLevel),"ʲô����Ҫ");
line[line.length]=Link(box[14][2],box[13][0]);
//----------
box[15]=new Array();
yLevel+=2;
box[15][0]=Textbox_Condition(x(1.5),y(yLevel),"�����һ����˷�");
line[line.length]=Link(box[15][0],box[14][0]);
//----------
box[16]=new Array();
yLevel+=3;
box[16][0]=Textbox_Selection(x(0.5),y(yLevel),"����¶��û��ϵ");
line[line.length]=Link(box[16][0],box[15][0]);
box[16][1]=Textbox_Selection(x(2.5),y(yLevel),"�Լ��侲����");
line[line.length]=Link(box[16][1],box[15][0]);
//----------
box[17]=new Array();
yLevel+=2;
box[17][0]=Textbox_Condition(x(0.5),y(yLevel),"��ף��ʽ��ѡ��");
line[line.length]=Link(box[17][0],box[16][0]);
//----------
box[18]=new Array();
yLevel+=3;
box[18][0]=Textbox_Selection(x(0.5),y(yLevel),"H������");
line[line.length]=Link(box[18][0],box[17][0]);
box[18][1]=Textbox_Selection(x(2.5),y(yLevel),"����,����Ϳ�����","r|+δ����");
line[line.length]=Link(box[18][1],box[17][0]);
//----------
box[19]=new Array();
yLevel+=2;
box[19][0]=Textbox_Condition(x(0.5),y(yLevel),"6��5��,���Դ���Ͼʱ��");
line[line.length]=Link(box[19][0],box[18][0]);
//----------
box[20]=new Array();
yLevel+=3;
box[20][0]=Textbox_Selection(x(0.5),y(yLevel),"������");
line[line.length]=Link(box[20][0],box[19][0]);
box[20][1]=Textbox_Selection(x(2.5),y(yLevel),"������");
line[line.length]=Link(box[20][1],box[19][0]);
//----------
box[21]=new Array();
yLevel+=2;
box[21][0]=Textbox_Selection(x(0.5),y(yLevel),"���侵������ò�");
line[line.length]=Link(box[21][0],box[20][0]);
//----------
box[22]=new Array();
yLevel+=3;
box[22][0]=Textbox_Option(x(0.5),y(yLevel),"˵�뿴");
line[line.length]=Link(box[22][0],box[21][0]);
box[22][1]=Textbox_Option(x(2.5),y(yLevel),"����ͣ�ְ�");
line[line.length]=Link(box[22][1],box[21][0]);
//----------
line[line.length]=Link(Point(linx(1.5),liny(3)),box[22][0]);
line[line.length]=Link(Point(linx(1.5),liny(3)),box[22][1]);
line[line.length]=Link(Point(linx(1.5),liny(3)),Point(linx(3.5),liny(3)),Point(linx(3.5),liny(-2)),box[20][1]);
line[line.length]=Link(Point(linx(1.5),liny(3)),Point(linx(3.5),liny(3)),Point(linx(3.5),liny(-7)),box[18][1]);
line[line.length]=Link(Point(linx(1.5),liny(3)),Point(linx(3.5),liny(3)),Point(linx(3.5),liny(-12)),box[16][1]);
line[line.length]=Link(Point(linx(1.5),liny(3)),Point(linx(3.5),liny(3)),Point(linx(3.5),liny(-14)),box[14][1]);
line[line.length]=Link(Point(linx(1.5),liny(3)),Point(linx(3.5),liny(3)),Point(linx(3.5),liny(-17)),box[14][2]);
line[line.length]=Link(Point(linx(3.5),liny(3)),Point(linx(3.5),liny(3)));
line[line.length-1].addTitle("���ת����ʮ��ҳ");
line[line.length-1].addClick(function(){gotopage(66)});

hdft["footer"]=Footer(liny(4),(65));
