// CVG HTML Data Page63 Done By Ligueston 2008.4.18
hdft["header"]=Header("nagisa","AFTER STORY","After Story","5��12�ա�5��16��","May 12th~May 16th");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(3),y(yLevel),"5��12��","top");
//----------
box[1]=new Array();
yLevel+=2;
box[1][0]=Textbox_Selection(x(3),y(yLevel),"���Դ���Ͼʱ��");
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Option(x(2),y(yLevel),"������");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Option(x(4),y(yLevel),"������");
line[line.length]=Link(box[2][1],box[1][0]);
//----------
box[3]=new Array();
yLevel+=3;
box[3][0]=Textbox_Date(x(3),y(yLevel),"5��13��","bottom");
line[line.length]=Link(box[3][0],box[2][0]);
line[line.length]=Link(box[3][0],box[2][1]);
//----------
box[4]=new Array();
yLevel+=5;
box[4][0]=Textbox_Date(x(3),y(yLevel),"5��13��","top");
//----------
box[5]=new Array();
yLevel+=2;
box[5][0]=Textbox_Selection(x(3),y(yLevel),"����ʱ��̸�����ݣ�һ��");
line[line.length]=Link(box[5][0],box[4][0]);
//----------
box[6]=new Array();
yLevel+=3;
box[6][0]=Textbox_Option(x(1),y(yLevel),"У��������");
line[line.length]=Link(box[6][0],box[5][0]);
box[6][1]=Textbox_Option(x(3),y(yLevel),"׷ţ��");
line[line.length]=Link(box[6][1],box[5][0]);
box[6][2]=Textbox_Option(x(5),y(yLevel),"����Χȹ��");
line[line.length]=Link(box[6][2],box[5][0]);
//----------
box[7]=new Array();
yLevel+=2;
box[7][0]=Textbox_Block(x(1),y(yLevel),"A");
box[7][0].addLink("p63_retA");
box[7][0].addClick(function(){gotolink("p63_A")});
line[line.length]=Link(box[7][0],box[6][0]);
box[7][1]=Textbox_Block(x(3),y(yLevel),"B");
box[7][1].addLink("p63_retB");
box[7][1].addClick(function(){gotolink("p63_B")});
line[line.length]=Link(box[7][1],box[6][1]);
//----------
box[8]=new Array();
yLevel+=3;
box[8][0]=Textbox_Date(x(3),y(yLevel),"5��16��","bottom");
line[line.length]=Link(box[8][0],box[7][0]);
line[line.length]=Link(box[8][0],box[7][1]);
line[line.length]=Link(box[8][0],box[6][2]);
//----------
box[9]=new Array();
yLevel+=4;
box[9][0]=Textbox_Block(x(0),y(yLevel),"A");
box[9][0].addLink("p63_A");
box[9][0].addClick(function(){gotolink("p63_retA")});
box[9][1]=Textbox_Selection(x(3),y(yLevel),"����ʱ��̸�����ݣ�����");
line[line.length]=Link(Point(linx(3),liny(0)-LINEBASEHEIGHT/2),Point(linx(3),liny(0)-LINEBASEHEIGHT/2));
board[board.length]=Board(liny(0),liny(6));
//----------
box[10]=new Array();
yLevel+=3;
box[10][0]=Textbox_Option(x(1),y(yLevel),"ģ�⿼��");
line[line.length]=Link(box[10][0],box[9][1]);
box[10][1]=Textbox_Option(x(3),y(yLevel),"׷ţ��");
line[line.length]=Link(box[10][1],box[9][1]);
box[10][2]=Textbox_Option(x(5),y(yLevel),"����Χȹ��");
line[line.length]=Link(box[10][2],box[9][1]);

line[line.length]=Link(Point(linx(3),liny(2)),Point(linx(1),liny(2)),box[10][0]);
line[line.length]=Link(Point(linx(3),liny(2)),box[10][1]);
line[line.length]=Link(Point(linx(3),liny(2)),Point(linx(5),liny(2)),box[10][2]);
line[line.length]=Link(Point(linx(3),liny(2)),Point(linx(3),liny(2)));

//----------
box[11]=new Array();
yLevel+=6;
box[11][0]=Textbox_Block(x(0),y(yLevel),"B");
box[11][0].addLink("p63_B");
box[11][0].addClick(function(){gotolink("p63_retB")});
box[11][1]=Textbox_Selection(x(3),y(yLevel),"����ʱ��̸�����ݣ�����");
line[line.length]=Link(Point(linx(3),liny(0)-LINEBASEHEIGHT/2),Point(linx(3),liny(0)-LINEBASEHEIGHT/2));
board[board.length]=Board(liny(0),liny(6));
//----------
box[12]=new Array();
yLevel+=3;
box[12][0]=Textbox_Option(x(1),y(yLevel),"ģ�⿼��");
line[line.length]=Link(box[12][0],box[11][1]);
box[12][1]=Textbox_Option(x(3),y(yLevel),"�����ӽ�");
line[line.length]=Link(box[12][1],box[11][1]);
box[12][2]=Textbox_Option(x(5),y(yLevel),"����Χȹ��");
line[line.length]=Link(box[12][2],box[11][1]);

line[line.length]=Link(Point(linx(3),liny(2)),Point(linx(1),liny(2)),box[12][0]);
line[line.length]=Link(Point(linx(3),liny(2)),box[12][1]);
line[line.length]=Link(Point(linx(3),liny(2)),Point(linx(5),liny(2)),box[12][2]);
line[line.length]=Link(Point(linx(3),liny(2)),Point(linx(3),liny(2)));

//----------
box[13]=new Array();
yLevel+=6;
box[13][0]=Textbox_Date(x(3),y(yLevel),"5��16��","top");
//----------
box[14]=new Array();
yLevel+=2;
box[14][0]=Textbox_Selection(x(3),y(yLevel),"��������ս�ƻ�");
line[line.length]=Link(box[14][0],box[13][0]);
//----------
box[15]=new Array();
yLevel+=3;
box[15][0]=Textbox_Option(x(2),y(yLevel),"����ûʲô");
line[line.length]=Link(box[15][0],box[14][0]);
box[15][1]=Textbox_Option(x(4),y(yLevel),"����");
line[line.length]=Link(box[15][1],box[14][0]);
//----------
box[16]=new Array();
yLevel+=3;
box[16][0]=Textbox_Date(x(3),y(yLevel),"ͬ��ƪ","bottom");
box[16][0].addTitle("���ת����64ҳ");
box[16][0].addClick(function(){gotopage(64)});
line[line.length]=Link(box[16][0],box[15][0]);
line[line.length]=Link(box[16][0],box[15][1]);

hdft["footer"]=Footer(liny(1),63);