// CVG HTML Data Page60 Done By Ligueston 2008.4.18
hdft["header"]=Header("gunfight","ǹս��Ϸ/ҵ�����","Gunfight Game / Amateur BaseBall","4��26�ա�4��27��","April 26th~April 27th");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(4),y(yLevel),"4��26��","top");
//----------
box[1]=new Array();
yLevel+=2;
box[1][0]=Textbox_Selection(x(4),y(yLevel),"��������Ļ���");
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Option(x(3),y(yLevel),"���ʿ�");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Option(x(5),y(yLevel),"û��Ȥ");
line[line.length]=Link(box[2][1],box[1][0]);
//----------
box[3]=new Array();
yLevel+=3;
box[3][0]=Textbox_Condition(x(4),y(yLevel),"23�գ���ԭ�����ô����绰");
line[line.length]=Link(box[3][0],box[2][0]);
line[line.length]=Link(box[3][0],box[2][1]);
//----------
box[4]=new Array();
yLevel+=3;
box[4][0]=Textbox_Selection(x(3),y(yLevel),"����������");
line[line.length]=Link(box[4][0],box[3][0]);
box[4][1]=Textbox_Selection(x(5),y(yLevel),"����ԭ����");
line[line.length]=Link(box[4][1],box[3][0]);
//----------
box[5]=new Array();
yLevel+=2;
box[5][0]=Textbox_Condition(x(3),y(yLevel),"25�գ��Ǵ������ĶԲ�");
line[line.length]=Link(box[5][0],box[4][0]);
//----------
box[6]=new Array();
yLevel+=3;
box[6][0]=Textbox_Selection(x(2),y(yLevel),"������Ҹ�");
line[line.length]=Link(box[6][0],box[5][0]);
box[6][1]=Textbox_Selection(x(4),y(yLevel),"�����˰��","r|+δ����");
line[line.length]=Link(box[6][1],box[5][0]);
//----------
box[7]=new Array();
yLevel+=2;
box[7][0]=Textbox_Condition(x(2),y(yLevel),"ǹսƽ��");
line[line.length]=Link(box[7][0],box[6][0]);
//----------
box[8]=new Array();
yLevel+=3;
box[8][0]=Textbox_Selection(x(1),y(yLevel),"��");
line[line.length]=Link(box[8][0],box[7][0]);
box[8][1]=Textbox_Selection(x(3),y(yLevel),"��");
line[line.length]=Link(box[8][1],box[7][0]);
//----------
box[9]=new Array();
yLevel+=2;
box[9][0]=Textbox_Date(x(1),y(yLevel),"4��27��","bottom");
line[line.length]=Link(box[9][0],box[8][0]);
//----------
box[10]=new Array();
yLevel+=1;
box[10][0]=Textbox_Condition(x(4),y(yLevel),"���� BAD ENDING");
line[line.length]=Link(box[10][0],box[8][1]);
line[line.length]=Link(box[10][0],Point(linx(5),liny(-5)),box[6][1]);
line[line.length]=Link(box[10][0],box[4][1]);
//----------
box[11]=new Array();
yLevel+=5;
box[11][0]=Textbox_Date(x(3),y(yLevel),"4��27��","top");
//----------
box[12]=new Array();
yLevel+=2;
box[12][0]=Textbox_Option(x(3),y(yLevel),"�������磨�ߣ�");
line[line.length]=Link(box[12][0],box[11][0]);
//----------
box[13]=new Array();
yLevel+=2;
box[13][0]=Textbox_Date(x(3),y(yLevel),"4��28��","bottom");
box[13][0].addTitle("���ת����61ҳ");
box[13][0].addClick(function(){gotopage(61)});
line[line.length]=Link(box[13][0],box[12][0]);

hdft["footer"]=Footer(liny(2),60);