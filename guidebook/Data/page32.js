// CVG HTML Data Page32 Done By Shakugan_No_Kaluote 2008.4.18
hdft["header"]=Header("yukine","���� �м���","Yukine Miyazawa","�м���������","Yukine's Spells");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Option(x(0),y(yLevel),"�м���������");
box[0][0].addLink("p32_YNSP");
box[0][0].addClick(function(){gotopage(19,"p19_retYNSP")});
box[0][1]=Textbox_Condition(x(2.5),y(yLevel),"18�գ����Ե�̵ķ���");
line[line.length]=Link(Point(linx(2.5),liny(0)-LINEBASEHEIGHT/2),Point(linx(2.5),liny(0)-LINEBASEHEIGHT/2));
//----------
box[1]=new Array();
yLevel+=3;
box[1][0]=Textbox_Selection(x(1.5),y(yLevel),"�ٿ�һ���");
line[line.length]=Link(box[1][0],box[0][1]);
box[1][1]=Textbox_Selection(x(3.5),y(yLevel),"�뿪","r|+δ����");
line[line.length]=Link(box[1][1],box[0][1]);
//----------
box[2]=new Array();
yLevel+=2;
box[2][0]=Textbox_Option(x(1.5),y(yLevel),"������Ϸ����������");
line[line.length]=Link(box[2][0],box[1][0]);
//----------
box[3]=new Array();
yLevel+=3;
box[3][0]=Textbox_Condition(x(2.5),y(yLevel),"18�գ��������ѵ��Ǵ�");
line[line.length]=Link(box[3][0],box[2][0]);
line[line.length]=Link(box[3][0],box[1][1]);
//----------
box[4]=new Array();
yLevel+=3;
box[4][0]=Textbox_Selection(x(1),y(yLevel),"��æ");
line[line.length]=Link(box[4][0],Point(linx(2),liny(-1)));
box[4][1]=Textbox_Selection(x(4),y(yLevel),"˦��������","r|+δ����");
line[line.length]=Link(box[4][1],Point(linx(2),liny(-1)));
line[line.length]=Link(Point(linx(2.5),liny(-1)),box[3][0]);
//----------
box[5]=new Array();
yLevel+=2;
box[5][0]=Textbox_Condition(x(1),y(yLevel),"22�գ��ش����Ǵ���ѯ��");
line[line.length]=Link(box[5][0],box[4][0]);
//----------
box[6]=new Array();
yLevel+=3;
box[6][0]=Textbox_Selection(x(1),y(yLevel),"���鷳��","l|+δ����");
line[line.length]=Link(box[6][0],box[5][0]);
box[6][1]=Textbox_Selection(x(3),y(yLevel),"�������������˼");
line[line.length]=Link(box[6][1],box[5][0]);
//----------
box[7]=new Array();
yLevel+=2;
box[7][0]=Textbox_Option(x(1),y(yLevel),"������Ϸ�������Ǵ�");
line[line.length]=Link(box[7][0],box[6][0]);
//----------
box[8]=new Array();
yLevel+=1;
box[8][0]=Textbox_Condition(x(4),y(yLevel),"15�գ�����������ͥԺ�е�Ů��");
line[line.length]=Link(box[8][0],box[6][1]);
line[line.length]=Link(box[8][0],box[4][1]);
//----------
box[9]=new Array();
yLevel+=3;
box[9][0]=Textbox_Selection(x(3),y(yLevel),"������","l|+δ����");
line[line.length]=Link(box[9][0],box[8][0]);
box[9][1]=Textbox_Selection(x(5),y(yLevel),"����");
line[line.length]=Link(box[9][1],box[8][0]);
//----------
box[10]=new Array();
yLevel+=2;
box[10][0]=Textbox_Condition(x(3),y(yLevel),"18�գ�����������������֦");
line[line.length]=Link(box[10][0],box[9][0]);
box[10][1]=Textbox_Option(x(5),y(yLevel),"������Ϸ�������");
line[line.length]=Link(box[10][1],box[9][1]);
//----------
box[11]=new Array();
yLevel+=3;
box[11][0]=Textbox_Selection(x(2),y(yLevel),"�����");
line[line.length]=Link(box[11][0],box[10][0]);
box[11][1]=Textbox_Selection(x(4),y(yLevel),"Ŀ������ȥ","r|+δ����");
line[line.length]=Link(box[11][1],box[10][0]);
//----------
box[12]=new Array();
yLevel+=2;
box[12][0]=Textbox_Option(x(2),y(yLevel),"������Ϸ����������֦");
line[line.length]=Link(box[12][0],box[11][0]);
box[12][1]=Textbox_Option(x(4),y(yLevel),"������Ϸ�������ӡ��");
line[line.length]=Link(box[12][1],box[11][1]);

yLevel+=4;
line[line.length]=Link(Point(linx(4),liny(0)),Point(linx(3),liny(-1)),box[12][0]);
line[line.length]=Link(Point(linx(4),liny(0)),Point(linx(3),liny(-1)),box[12][1]);
line[line.length]=Link(Point(linx(4),liny(0)),box[10][1]);
line[line.length]=Link(Point(linx(4),liny(0)),Point(linx(1),liny(0)),box[7][0]);
line[line.length]=Link(Point(linx(2.5),liny(0)),Point(linx(2.5),liny(0)));

hdft["footer"]=Footer(liny(1),32);