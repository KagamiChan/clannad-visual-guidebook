// CVG HTML Data Page57 Done By Ligueston 2008.4.19
hdft["header"]=Header("nagisa","�ź� �/�Ҵ� ����","Nagisa Furukawa / Toshio Yukimura","3��3������(��)","3 on 3 Basketball Match - Part3");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Block(x(0),y(yLevel),"B");
box[0][0].addLink("p57_B");
box[0][0].addClick(function(){gotopage(56,"p56_retB")});
box[0][1]=Textbox_Condition(x(3.5),y(yLevel),"�Ѿ�������У����¥");
line[line.length]=Link(Point(linx(3.5),liny(0)-LINEBASEHEIGHT/2),Point(linx(3.5),liny(0)-LINEBASEHEIGHT/2));
board[board.length]=Board(liny(0),liny(23));
//----------
box[1]=new Array();
yLevel+=3;
box[1][0]=Textbox_Selection(x(2),y(yLevel),"��");
line[line.length]=Link(box[1][0],Point(linx(3),liny(-1)));
box[1][1]=Textbox_Selection(x(5),y(yLevel),"��");
line[line.length]=Link(box[1][1],Point(linx(3),liny(-1)));
line[line.length]=Link(Point(linx(3.5),liny(-1)),box[0][1]);
//----------
box[2]=new Array();
yLevel+=2;
box[2][0]=Textbox_Selection(x(2),y(yLevel),"�������������");
line[line.length]=Link(box[2][0],box[1][0]);
//----------
box[3]=new Array();
yLevel+=3;
box[3][0]=Textbox_Option(x(1),y(yLevel),"˵��");
line[line.length]=Link(box[3][0],box[2][0]);
box[3][1]=Textbox_Option(x(3),y(yLevel),"�����鷳����");
line[line.length]=Link(box[3][1],box[2][0]);
//----------
box[4]=new Array();
yLevel+=2;
box[4][0]=Textbox_Option(x(1),y(yLevel),"�ӳ�Ϊ�������");
line[line.length]=Link(box[4][0],box[3][0]);
box[4][1]=Textbox_Condition(x(3),y(yLevel),"15�գ������ˮ��ת���");
line[line.length]=Link(box[4][1],box[3][1]);
//----------
box[5]=new Array();
yLevel+=3;
box[5][0]=Textbox_Selection(x(2),y(yLevel),"����");
line[line.length]=Link(box[5][0],box[4][0]);
box[5][1]=Textbox_Selection(x(4),y(yLevel),"��Ǹ");
line[line.length]=Link(box[5][1],box[4][0]);
//----------
box[6]=new Array();
yLevel+=2;
box[6][0]=Textbox_Selection(x(2),y(yLevel),"����˵��飼���");
line[line.length]=Link(box[6][0],box[5][0]);
//----------
box[7]=new Array();
yLevel+=3;
box[7][0]=Textbox_Option(x(2),y(yLevel),"�������ˣ����Ϊ���ǵ�һԱ��");
line[line.length]=Link(box[7][0],box[6][0]);
box[7][1]=Textbox_Option(x(4),y(yLevel),"�����ر���ǿ�Լ�");
line[line.length]=Link(box[7][1],box[6][0]);
//----------
box[8]=new Array();
yLevel+=2;
box[8][0]=Textbox_Option(x(2),y(yLevel),"飳�Ϊ�������");
line[line.length]=Link(box[8][0],box[7][0]);
line[line.length]=Link(Point(linx(2),liny(2)),box[8][0]);
line[line.length]=Link(Point(linx(2),liny(2)),Point(linx(1),liny(2)),box[4][0]);
line[line.length]=Link(Point(linx(2),liny(2)),Point(linx(2),liny(2)));
//----------
box[9]=new Array();
yLevel+=1;
box[9][0]=Textbox_Option(x(4),y(yLevel),"3��3��������һ��");
box[9][0].addClick(function(){gotopage(56,"p56_33BB")});
line[line.length]=Link(box[9][0],box[7][1]);
line[line.length]=Link(box[9][0],Point(linx(5),liny(-5)),box[5][1]);
line[line.length]=Link(box[9][0],box[1][1]);
line[line.length]=Link(Point(linx(4),liny(1)),Point(linx(4),liny(1)));
//----------
box[10]=new Array();
yLevel+=4;
box[10][0]=Textbox_Block(x(0),y(yLevel),"C");
box[10][0].addLink("p57_C");
box[10][0].addClick(function(){gotopage(56,"p56_retC")});
box[10][1]=Textbox_Condition(x(4),y(yLevel),"�Ѿ�������У��ս���");
line[line.length]=Link(Point(linx(4),liny(0)-LINEBASEHEIGHT/2),Point(linx(4),liny(0)-LINEBASEHEIGHT/2));
board[board.length]=Board(liny(0),liny(19));
//----------
box[11]=new Array();
yLevel+=3;
box[11][0]=Textbox_Selection(x(3),y(yLevel),"��");
line[line.length]=Link(box[11][0],box[10][1]);
box[11][1]=Textbox_Selection(x(5),y(yLevel),"��");
line[line.length]=Link(box[11][1],box[10][1]);
//----------
box[12]=new Array();
yLevel+=2;
box[12][0]=Textbox_Condition(x(3),y(yLevel),"18�գ����Ե�̵ķ���");
line[line.length]=Link(box[12][0],box[11][0]);
//----------
box[13]=new Array();
yLevel+=3;
box[13][0]=Textbox_Selection(x(2),y(yLevel),"�ٿ�һ���");
line[line.length]=Link(box[13][0],box[12][0]);
box[13][1]=Textbox_Selection(x(4),y(yLevel),"�뿪","r|+�뿪");
line[line.length]=Link(box[13][1],box[12][0]);
//----------
box[14]=new Array();
yLevel+=2;
box[14][0]=Textbox_Selection(x(2),y(yLevel),"�����������");
line[line.length]=Link(box[14][0],box[13][0]);
//----------
box[15]=new Array();
yLevel+=3;
box[15][0]=Textbox_Option(x(1),y(yLevel),"����");
line[line.length]=Link(box[15][0],box[14][0]);
box[15][1]=Textbox_Option(x(3),y(yLevel),"�ٿ���һ��");
line[line.length]=Link(box[15][1],box[14][0]);
//----------
box[16]=new Array();
yLevel+=2;
box[16][0]=Textbox_Option(x(1),y(yLevel),"���ӳ�Ϊ�������");
line[line.length]=Link(box[16][0],box[15][0]);
line[line.length]=Link(Point(linx(1),liny(1)),Point(linx(1),liny(1)));
//----------
box[17]=new Array();
yLevel+=2;
box[17][0]=Textbox_Option(x(4),y(yLevel),"3��3��������һ��");
box[17][0].addClick(function(){gotopage(56,"p56_33BB")});
line[line.length]=Link(box[17][0],box[15][1]);
line[line.length]=Link(box[17][0],Point(linx(3),liny(-1)),box[13][1]);
line[line.length]=Link(box[17][0],box[11][1]);
line[line.length]=Link(Point(linx(4),liny(1)),Point(linx(4),liny(1)));

hdft["footer"]=Footer(liny(2),57);