// CVG HTML Data Page2 Done By Shakugan_No_Kaluote 2008.4.11
hdft["header"]=Header("public","����·��","Public Route","4��15��","April 15th");

var yLevel=0;

//----------
box[0]=new Array();
yLevel+=3;
box[0][0]=Textbox_Date(x(3.5),y(yLevel),"4��15��","top");
//----------
box[1]=new Array();
yLevel+=2;
CmtSummery="�糿�����鲻ˬ����Ҳ��ǰ����֪ͨ�����������ѵİ೤�����˵�˹��ֵĻ�����";
CmtSelect="ѡ��[��Ǹ]����������ֽ��õ���·����17���ӿκ󲻻ᴥ��һ֮�������ľ�����޷����������ߡ���ˣ�����������ʱ��ѡ��[����]��";
CmtCaution="��CLANNAD�У�ѡ���֧ÿ��ѡ�����պ��������ݲ�����ͬ��Ӱ�죬����һ�����ı���������";
CmtOption="-����";
CmtEvents="00100000";
CmtEvntIru="飳�Ϊ3��3��������ѡ";
box[1][0]=Textbox_Selection_C(x(3.5),y(yLevel),"�����ˮ��ת���","1",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"�����ˮ��ת���",0);
line[line.length]=Link(box[1][0],box[0][0]);
//----------
box[2]=new Array();
yLevel+=3;
box[2][0]=Textbox_Option(x(2.5),y(yLevel),"��Ǹ","l|��|�|-����");
line[line.length]=Link(box[2][0],box[1][0]);
box[2][1]=Textbox_Option(x(4.5),y(yLevel),"����","r|��|�|-����");
line[line.length]=Link(box[2][1],box[1][0]);
//----------
box[3]=new Array();
yLevel+=3;
CmtSummery="���ĵ�ѧϰ�������ڼ�������һ��Ӣ���﷨�Σ���Ҳ�����Ƿ��ӿ�����ʱ�䡣";
CmtSelect="ѡ��[�ӿ�]����15��˳������һ֮�������ľ��飻��ѡ��[���������Ͽ�]����16�ջ������һ����ʶ�����Ļ��ᡣ15���ӿκ�16�յĻ���ͻ���ʧ�������֮�����λ�����ֻ�ܰ���һ�Ρ�����֮ǰ�ķ�֧{�����ˮ��ת���}ѡ��[��Ǹ]��17�ռ�ǿ���˳������ߡ�";
CmtCaution="";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[3][0]=Textbox_Selection_C(x(3.5),y(yLevel),"���硢Ӣ���﷨��","2",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"���硢Ӣ���﷨��",0);
line[line.length]=Link(box[3][0],box[2][0]);
line[line.length]=Link(box[3][0],box[2][1]);
//----------
box[4]=new Array();
yLevel+=3;
box[4][0]=Textbox_Option(x(2.5),y(yLevel),"�ӿ�","l|����");
line[line.length]=Link(box[4][0],box[3][0]);
box[4][1]=Textbox_Option(x(4.5),y(yLevel),"���������Ͽ�");
line[line.length]=Link(box[4][1],box[3][0]);
//----------
box[5]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="��������CLANNAD��Ψһ�кøж�ϵͳ����·����ע�ⲻҪ�úøжȹ��ͣ�����������������һЩ���ܵ���BAD ENDING��ѡ���֧��ÿ��ѡ������ȷ��ѡ��֮����ʹ�øж�����1�㡣";
CmtOption="-��";
CmtEvents="00000100";
CmtEvntIru="�����øж�����1��";
box[5][0]=Textbox_Selection_C(x(2.5),y(yLevel),"����ֵ�Ů������Ա㵱","3",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"ͼ��ݣ�����ֵ�Ů������Ա㵱",0);
line[line.length]=Link(box[5][0],box[4][0]);
//----------
box[6]=new Array();
yLevel+=3;
box[6][0]=Textbox_Option(x(1.5),y(yLevel),"��");
line[line.length]=Link(box[6][0],box[5][0]);
box[6][1]=Textbox_Option(x(3.5),y(yLevel),"����");
line[line.length]=Link(box[6][1],box[5][0]);
//----------
box[7]=new Array();
yLevel+=4;
CmtSummery="����ʱ�䣬��Ҳ�������ϣ�����ͥԺ�ж���һ�����ŵ���Ů��û�����������������µ����������Ǹ�Ů�����µ���������û�����ѵ���顭��";
CmtSelect="ѡ��[��ͥԺȥ]���ҽ������ķ�֧ѡ��[�ټ���̸��]�������ź�侺��������ӵ���·��ͬʱ�����������ߵı�ѡ����ܹ�����Ǵ���GOOD ENDING�ı�Ҫǰ�ᡣ";
CmtCaution="CLANNAD�У���ߺͷ������ڹ����������ص�������Ը�����������·֮��Ҫ��ܶࡣ�����ǹ�ϵ�ȽϽ��ܵ������ߡ�����֮�⣬�������ֽ����ߺ͖�ʤƽ�ߣ������Ǵ��ߺ���������֦�ߡ�";
CmtOption="+��ͥԺȥ|-�ټ���̸��";
CmtEvents="11010000";
CmtEvntIru="�����������64HIT���м�������������ֿ��¼���αŮ���¼����������������������ֿ��¼���";
box[7][0]=Textbox_Selection_C(x(3.5),y(yLevel),"���磬ͥԺ�е���Ů","4",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"ͥԺ�йµ�����Ů",0);
line[line.length]=Link(box[7][0],Point(linx(2.5),liny(-1)),box[6][0]);
line[line.length]=Link(box[7][0],Point(linx(2.5),liny(-1)),box[6][1]);
line[line.length]=Link(box[7][0],box[4][1]);
//----------
box[8]=new Array();
yLevel+=3;
box[8][0]=Textbox_Option(x(2.5),y(yLevel),"��ͥԺȥ","l|�|����|����|�Ǵ�");
line[line.length]=Link(box[8][0],box[7][0]);
box[8][1]=Textbox_Option(x(4.5),y(yLevel),"��ȥ����","r|�Ǵ�|�|����|����");
line[line.length]=Link(box[8][1],box[7][0]);
//----------
box[9]=new Array();
yLevel+=2;
box[9][0]=Textbox_Selection(x(2.5),y(yLevel),"ͥԺ������Ů��̸��");
line[line.length]=Link(box[9][0],box[8][0]);
//----------
box[10]=new Array();
yLevel+=3;
box[10][0]=Textbox_Option(x(1.5),y(yLevel),"�ټ���̸��","l|�|����|����|�Ǵ�");
line[line.length]=Link(box[10][0],box[9][0]);
box[10][1]=Textbox_Option(x(3.5),y(yLevel),"��ʱ���뿪��","r|�Ǵ�|�|����|����");
line[line.length]=Link(box[10][1],box[9][0]);
//----------
box[11]=new Array();
yLevel+=4;
CmtSummery="���磬У�ſڴ������������ǹ�ҵѧУ��ѧ�����������ơ���ʱ��һλ����Ů�������˵�ע���³����ˣ�����Ƭ�̼�ƽϢ��ɧ�������µĴ�ԭ��������һ�ᡭ��";
CmtSelect="ѡ��[��������ȥ]���ڽ������ķ�֧ѡ��[��Ҳ�Դ��ĸ���Ȥ]������������Ǵ��ߡ�����֮ǰ�ķ�֧{���硢ͥԺ�е���Ů}ѡ��[��ȥ����]��֮���޷�����Ǵ���GOOD ENDING��";
CmtCaution="";
CmtOption="+��������ȥ|-�ҶԴ�Ҳ�ĸ���Ȥ";
CmtEvents="01110011";
CmtEvntIru="�Ǵ������������м�������������ֿ��¼���3��3��������αŮ���¼��ͱ�ҵ����ҵ���������ѡ";
box[11][0]=Textbox_Selection_C(x(3.5),y(yLevel),"У�Ÿ�����ɧ��","5",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"У��ǰ��ɧ����ƽϢɧ��������Ů��",0);
line[line.length]=Link(box[11][0],Point(linx(2.5),liny(-1)),box[10][0]);
line[line.length]=Link(box[11][0],Point(linx(2.5),liny(-1)),box[10][1]);
line[line.length]=Link(box[11][0],box[8][1]);
//----------
box[12]=new Array();
yLevel+=3;
box[12][0]=Textbox_Option(x(2.5),y(yLevel),"��������ȥ","l|�Ǵ�");
line[line.length]=Link(box[12][0],box[11][0]);
box[12][1]=Textbox_Option(x(4.5),y(yLevel),"��ȥ����","r|�Ǵ�");
line[line.length]=Link(box[12][1],box[11][0]);
//----------
box[13]=new Array();
yLevel+=2;
box[13][0]=Textbox_Selection(x(2.5),y(yLevel),"ƽϢɧ��������Ů��");
line[line.length]=Link(box[13][0],box[12][0]);
//----------
box[14]=new Array();
yLevel+=3;
box[14][0]=Textbox_Option(x(1.5),y(yLevel),"�ҶԴ�Ҳ�ĸ���Ȥ","l|�Ǵ�");
line[line.length]=Link(box[14][0],box[13][0]);
box[14][1]=Textbox_Option(x(3.5),y(yLevel),"�ҶԴ˺�����Ȥ","r|�Ǵ�");
line[line.length]=Link(box[14][1],box[13][0]);
//----------
box[15]=new Array();
yLevel+=4;
CmtSummery="";
CmtSelect="";
CmtCaution="������Ϸ�е�һ����������ѡ���֧�ĵط������������£��������Ƿ����ĳ����·��Ϊ�ж�������CLANNAD�У���������Ǻ��ձ�ġ�����ĳЩ����£�ֻ�����ض����ڵ��ض�ѡ�������������ڹ���ʱ��Ӧ��ע��ÿ��ѡ�������������ĽǱ���ʾ�������ʵ���¼����ȷ��Ŀǰ������Щ��ɫ����·֮���Է�ֹ����";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[15][0]=Textbox_Condition_C(x(3.5),y(yLevel),"���磬ͥԺ������Ů��̸��","6",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"����ѡ���֧",0);
line[line.length]=Link(box[15][0],Point(linx(2.5),liny(-1)),box[14][0]);
line[line.length]=Link(box[15][0],Point(linx(2.5),liny(-1)),box[14][1]);
line[line.length]=Link(box[15][0],box[12][1]);
//----------
box[16]=new Array();
yLevel+=3;
box[16][0]=Textbox_Selection(x(2.5),y(yLevel),"�ټ���̸��");
line[line.length]=Link(box[16][0],box[15][0]);
box[16][1]=Textbox_Selection(x(4.5),y(yLevel),"��ʱ���뿪��");
line[line.length]=Link(box[16][1],box[15][0]);
//----------
box[17]=new Array();
yLevel+=2;
CmtSummery="";
CmtSelect="";
CmtCaution="";
CmtOption="-����";
CmtEvents="01100001";
CmtEvntIru="侲���64HIT���м�����������������������ֿ��¼���αŮ���¼����������������ֿ��¼�";
box[17][0]=Textbox_Selection_C(x(2.5),y(yLevel),"����������ͥԺ�е�Ů��","7",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"����������ͥԺ�е�Ů��",0);
line[line.length]=Link(box[17][0],box[16][0]);
//----------
box[18]=new Array();
yLevel+=3;
box[18][0]=Textbox_Option(x(1.5),y(yLevel),"����","l|�|����");
line[line.length]=Link(box[18][0],box[17][0]);
box[18][1]=Textbox_Option(x(3.5),y(yLevel),"������","r|�|����");
line[line.length]=Link(box[18][1],box[17][0]);
//----------
box[19]=new Array();
yLevel+=4;
CmtSummery="��ѧ������������ԭ����¥����Ҳ������������������׷�ϵ���ѧ�����������Ա������������֦��";
CmtSelect="ѡ��[�����]���������������֦�ߡ�";
CmtCaution="";
CmtOption="-�����";
CmtEvents="01100001";
CmtEvntIru="����֦�����������м��������3��3�������ͱ�ҵ����";
box[19][0]=Textbox_Selection_C(x(3.5),y(yLevel),"����������������֦","8",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"����������������֦",-YSCALE*2);
line[line.length]=Link(box[19][0],Point(linx(2.5),liny(-1)),box[18][0]);
line[line.length]=Link(box[19][0],Point(linx(2.5),liny(-1)),box[18][1]);
line[line.length]=Link(box[19][0],box[16][1]);
//----------
box[20]=new Array();
yLevel+=3;
box[20][0]=Textbox_Option(x(2.5),y(yLevel),"�����","l|����֦");
line[line.length]=Link(box[20][0],box[19][0]);
box[20][1]=Textbox_Option(x(4.5),y(yLevel),"��ȥ����","r|����֦");
line[line.length]=Link(box[20][1],box[19][0]);
//----------
box[21]=new Array();
yLevel+=3;
CmtSummery="";
CmtSelect="";
CmtCaution="��CLANNAD�У�����������һ��������ľ��顣��������������CLANNAD�ı�������ۣ����б�����Ϸ����ʵ�������һ�����磬�������·�н��ܵ���ϵ����������ȫƪ��ʮ���£�������ѧ԰ƪ������ʮ�£������½���AFTER STORY�У������ý���AFTER STORYʱ�õ����֡�ֻ���ڹ������ʱ�������ܿ��������Ļ�������ѧ԰ƪ���֡�����������û��ѡ���֧��";
CmtOption="";
CmtEvents="";
CmtEvntIru="";
box[21][0]=Textbox_Option_C(x(3.5),y(yLevel),"�������磨һ��","9",CmtSummery,CmtSelect,CmtCaution,CmtOption,CmtEvents,CmtEvntIru,"��������",-YSCALE*2);
line[line.length]=Link(box[21][0],box[20][0]);
line[line.length]=Link(box[21][0],box[20][1]);
//----------
box[22]=new Array();
yLevel+=2;
box[22][0]=Textbox_Date(x(3.5),y(yLevel),"4��16��","bottom");
line[line.length]=Link(box[22][0],box[21][0]);
box[22][0].addTitle("���ת����3ҳ");
box[22][0].addClick(function(){gotopage(3)});

hdft["footer"]=Footer(liny(3),2);