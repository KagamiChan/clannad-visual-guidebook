// CVG HTML Data Page62 Done By Ligueston 2008.4.18
hdft["header"]=Header("nagisa","AFTER STORY","After Story","価����ա�5��9��","Nagisa��Some Day After~May 9th");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(3),y(yLevel),"価�����","top");
//----------
box[1]=new Array();
yLevel+=2;
box[1][0]=Textbox_Option(x(3),y(yLevel),"�������磨ʮһ��");
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=2;
box[2][0]=Textbox_Date(x(3),y(yLevel),"5��5��","bottom");
line[line.length]=Link(box[2][0],box[1][0]);
//----------
box[3]=new Array();
yLevel+=5;
box[3][0]=Textbox_Date(x(3),y(yLevel),"5��5��","top");
//----------
box[4]=new Array();
yLevel+=2;
box[4][0]=Textbox_Selection(x(3),y(yLevel),"�����һ����˷�");
line[line.length]=Link(box[4][0],box[3][0]);
//----------
box[5]=new Array();
yLevel+=3;
box[5][0]=Textbox_Option(x(2),y(yLevel),"�Լ��侲����");
line[line.length]=Link(box[5][0],box[4][0]);
box[5][1]=Textbox_Option(x(4),y(yLevel),"����¶��û��ϵ");
line[line.length]=Link(box[5][1],box[4][0]);
//----------
box[6]=new Array();
yLevel+=3;
box[6][0]=Textbox_Date(x(3),y(yLevel),"5��6��","bottom");
line[line.length]=Link(box[6][0],box[5][0]);
line[line.length]=Link(box[6][0],box[5][1]);
//----------
box[7]=new Array();
yLevel+=5;
box[7][0]=Textbox_Date(x(3.5),y(yLevel),"5��6��","top");
//----------
box[8]=new Array();
yLevel+=2;
box[8][0]=Textbox_Selection(x(3.5),y(yLevel),"���������յ���ף");
line[line.length]=Link(box[8][0],box[7][0]);
//----------
box[9]=new Array();
yLevel+=3;
box[9][0]=Textbox_Option(x(2.5),y(yLevel),"������������ġ�");
line[line.length]=Link(box[9][0],box[8][0]);
box[9][1]=Textbox_Option(x(4.5),y(yLevel),"����");
line[line.length]=Link(box[9][1],box[8][0]);
//----------
box[10]=new Array();
yLevel+=2;
box[10][0]=Textbox_Selection(x(2.5),y(yLevel),"��ף��ʽ��ѡ��");
line[line.length]=Link(box[10][0],box[9][0]);
//----------
box[11]=new Array();
yLevel+=3;
box[11][0]=Textbox_Option(x(1.5),y(yLevel),"H�����顭");
line[line.length]=Link(box[11][0],box[10][0]);
box[11][1]=Textbox_Option(x(3.5),y(yLevel),"���ˣ�����Ϳ�����");
line[line.length]=Link(box[11][1],box[10][0]);
//----------
box[12]=new Array();
yLevel+=4;
box[12][0]=Textbox_Date(x(3.5),y(yLevel),"5��9��","bottom");
line[line.length]=Link(box[12][0],Point(linx(2.5),liny(-1)),box[11][0]);
line[line.length]=Link(box[12][0],Point(linx(2.5),liny(-1)),box[11][1]);
line[line.length]=Link(box[12][0],box[9][1]);
//----------
box[13]=new Array();
yLevel+=5;
box[13][0]=Textbox_Date(x(3),y(yLevel),"5��9��","top");
//----------
box[14]=new Array();
yLevel+=2;
box[14][0]=Textbox_Selection(x(3),y(yLevel),"�������ε����");
line[line.length]=Link(box[14][0],box[13][0]);
//----------
box[15]=new Array();
yLevel+=3;
box[15][0]=Textbox_Option(x(2),y(yLevel),"�⿪���");
line[line.length]=Link(box[15][0],box[14][0]);
box[15][1]=Textbox_Option(x(4),y(yLevel),"��������ô��");
line[line.length]=Link(box[15][1],box[14][0]);
//----------
box[16]=new Array();
yLevel+=3;
box[16][0]=Textbox_Selection(x(3),y(yLevel),"侵���ͨ����");
line[line.length]=Link(box[16][0],box[15][0]);
line[line.length]=Link(box[16][0],box[15][1]);
//----------
box[17]=new Array();
yLevel+=3;
box[17][0]=Textbox_Option(x(2),y(yLevel),"��Ĭ");
line[line.length]=Link(box[17][0],box[16][0]);
box[17][1]=Textbox_Option(x(4),y(yLevel),"�ܾ�");
line[line.length]=Link(box[17][1],box[16][0]);
//----------
box[18]=new Array();
yLevel+=3;
box[18][0]=Textbox_Date(x(3),y(yLevel),"5��12��","bottom");
box[18][0].addTitle("���ת����63ҳ");
box[18][0].addClick(function(){gotopage(63)});
line[line.length]=Link(box[18][0],box[17][0]);
line[line.length]=Link(box[18][0],box[17][1]);

hdft["footer"]=Footer(liny(2),62);