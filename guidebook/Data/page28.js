// CVG HTML Data Page28 Done By Shakugan_No_Kaluote 2008.4.17
hdft["header"]=Header("tomoyo","���� �Ǵ�","Tomoyo Sakagami","5��3�ա�5��5��","May 3rd~May 5th");

var yLevel=0;
//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(3.5),y(yLevel),"5��3��","top");
//----------
box[1]=new Array();
yLevel+=2;
box[1][0]=Textbox_Selection(x(3.5),y(yLevel),"��Ҳ���Ǵ��Ļ��루����");
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Option(x(2.5),y(yLevel),"����һ��");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Option(x(4.5),y(yLevel),"���˰�");
line[line.length]=Link(box[2][1],box[1][0]);
//----------
box[3]=new Array();
yLevel+=2;
box[3][0]=Textbox_Selection(x(2.5),y(yLevel),"��Ҳ���Ǵ��Ļ��루����");
line[line.length]=Link(box[3][0],box[2][0]);
//----------
box[4]=new Array();
yLevel+=3;
box[4][0]=Textbox_Option(x(1.5),y(yLevel),"����һ��");
line[line.length]=Link(box[4][0],box[3][0]);
box[4][1]=Textbox_Option(x(3.5),y(yLevel),"���˰�");
line[line.length]=Link(box[4][1],box[3][0]);
//----------
box[5]=new Array();
yLevel+=4;
box[5][0]=Textbox_Selection(x(3.5),y(yLevel),"ģ�µ����еĳ���");
line[line.length]=Link(box[5][0],Point(linx(2.5),liny(-1)),box[4][0]);
line[line.length]=Link(box[5][0],Point(linx(2.5),liny(-1)),box[4][1]);
line[line.length]=Link(box[5][0],box[2][1]);
//----------
box[6]=new Array();
yLevel+=3;
box[6][0]=Textbox_Option(x(2.5),y(yLevel),"��������");
line[line.length]=Link(box[6][0],box[5][0]);
box[6][1]=Textbox_Option(x(4.5),y(yLevel),"������������");
line[line.length]=Link(box[6][1],box[5][0]);
//----------
box[7]=new Array();
yLevel+=3;
box[7][0]=Textbox_Date(x(3.5),y(yLevel),"5��4��","bottom");
line[line.length]=Link(box[7][0],box[6][0]);
line[line.length]=Link(box[7][0],box[6][1]);
//----------
box[8]=new Array();
yLevel+=5;
box[8][0]=Textbox_Date(x(3.5),y(yLevel),"5��4��","top");
//----------
box[9]=new Array();
yLevel+=2;
box[9][0]=Textbox_Condition(x(3.5),y(yLevel),"3�գ���Ҳ���Ǵ��Ļ��루����");
line[line.length]=Link(box[9][0],box[8][0]);
//----------
box[10]=new Array();
yLevel+=3;
box[10][0]=Textbox_Selection(x(2.5),y(yLevel),"����һ��");
line[line.length]=Link(box[10][0],box[9][0]);
box[10][1]=Textbox_Selection(x(4.5),y(yLevel),"���˰�");
line[line.length]=Link(box[10][1],box[9][0]);
//----------
box[11]=new Array();
yLevel+=2;
box[11][0]=Textbox_Selection(x(2.5),y(yLevel),"��Ҳ���Ǵ��Ļ��루�ģ�");
line[line.length]=Link(box[11][0],box[10][0]);
//----------
box[12]=new Array();
yLevel+=3;
box[12][0]=Textbox_Option(x(1.5),y(yLevel),"��ʼ���ֵĻ���");
line[line.length]=Link(box[12][0],box[11][0]);
box[12][1]=Textbox_Option(x(3.5),y(yLevel),"˵�ټ�Ȼ���뿪");
line[line.length]=Link(box[12][1],box[11][0]);
//----------
box[13]=new Array();
yLevel+=4;
box[13][0]=Textbox_Date(x(3.5),y(yLevel),"5��5��","bottom");
line[line.length]=Link(box[13][0],Point(linx(2.5),liny(-1)),box[12][0]);
line[line.length]=Link(box[13][0],Point(linx(2.5),liny(-1)),box[12][1]);
line[line.length]=Link(box[13][0],box[10][1]);
//----------
box[14]=new Array();
yLevel+=5;
box[14][0]=Textbox_Date(x(3),y(yLevel),"5��5��","top");
//----------
box[15]=new Array();
yLevel+=2;
box[15][0]=Textbox_Selection(x(3),y(yLevel),"ϣ�����Ǵ��Ŀ����ܳ�����ȥ");
line[line.length]=Link(box[15][0],box[14][0]);
//----------
box[16]=new Array();
yLevel+=3;
box[16][0]=Textbox_Option(x(2),y(yLevel),"������ȥ�ǲ��е�","l|�Ǵ�");
line[line.length]=Link(box[16][0],box[15][0]);
box[16][1]=Textbox_Option(x(4),y(yLevel),"��������ȥ","r|�Ǵ�");
line[line.length]=Link(box[16][1],box[15][0]);
//----------
box[17]=new Array();
yLevel+=3;
box[17][0]=Textbox_Date(x(3),y(yLevel),"5��6��","bottom");
box[17][0].addTitle("���ת����29ҳ");
box[17][0].addClick(function(){gotopage(29)});
line[line.length]=Link(box[17][0],box[16][0]);
line[line.length]=Link(box[17][0],box[16][1]);

hdft["footer"]=Footer(liny(1),28);