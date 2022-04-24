// CVG HTML Data Page35 Done By goodbest 2008.4.18
hdft['header'] = Header(
  'fujibayashi',
  '藤林 杏/藤林 椋',
  'Kyou Fujibayashi/Ryou Fujibayashi',
  '5月3日～5月5日',
  'May 3rd~May 5th',
)

let yLevel = 0
//----------
box[0] = new Array()
yLevel += 3
box[0][0] = Textbox_Date(x(3), y(yLevel), '5月3日', 'top')
//----------
box[1] = new Array()
yLevel += 2
box[1][0] = Textbox_Selection(x(3), y(yLevel), '杏的唐突提议')
line[line.length] = Link(box[1][0], box[0][0])
//----------
box[2] = new Array()
yLevel += 3
box[2][0] = Textbox_Option(x(2), y(yLevel), '练习试试看', 'l|杏')
line[line.length] = Link(box[2][0], box[1][0])
box[2][1] = Textbox_Option(x(4), y(yLevel), '默不作声地看着杏', 'r|杏')
line[line.length] = Link(box[2][1], box[1][0])
//----------
box[3] = new Array()
yLevel += 3
box[3][0] = Textbox_Date(x(3), y(yLevel), '5月4日', 'bottom')
line[line.length] = Link(box[3][0], box[2][0])
line[line.length] = Link(box[3][0], box[2][1])
//----------
box[4] = new Array()
yLevel += 5
box[4][0] = Textbox_Date(x(3), y(yLevel), '5月4日', 'top')
//----------
box[5] = new Array()
yLevel += 2
box[5][0] = Textbox_Selection(x(3), y(yLevel), '回忆当时椋的选择')
line[line.length] = Link(box[5][0], box[4][0])
//----------
box[6] = new Array()
yLevel += 3
box[6][0] = Textbox_Option(x(2), y(yLevel), '紫水晶', 'l|杏|-椋')
line[line.length] = Link(box[6][0], box[5][0])
box[6][1] = Textbox_Option(x(4), y(yLevel), '坦桑蓝', 'r|-椋|杏')
line[line.length] = Link(box[6][1], box[5][0])
//----------
box[7] = new Array()
yLevel += 3
box[7][0] = Textbox_Date(x(3), y(yLevel), '5月5日', 'bottom')
line[line.length] = Link(box[7][0], box[6][0])
line[line.length] = Link(box[7][0], box[6][1])
//----------
box[8] = new Array()
yLevel += 5
box[8][0] = Textbox_Date(x(3), y(yLevel), '5月5日', 'top')
//----------
box[9] = new Array()
yLevel += 2
box[9][0] = Textbox_Selection(x(3), y(yLevel), '朋也和椋的关系（二）')
line[line.length] = Link(box[9][0], box[8][0])
//----------
box[10] = new Array()
yLevel += 3
box[10][0] = Textbox_Option(x(1), y(yLevel), '朋友')
line[line.length] = Link(box[10][0], box[9][0])
box[10][1] = Textbox_Option(x(3), y(yLevel), '恋人')
line[line.length] = Link(box[10][1], box[9][0])
box[10][2] = Textbox_Option(x(5), y(yLevel), '夫妇')
line[line.length] = Link(box[10][2], box[9][0])
//----------
box[11] = new Array()
yLevel += 3
box[11][0] = Textbox_Selection(x(3), y(yLevel), '近距离面对着椋')
line[line.length] = Link(box[11][0], box[10][0])
line[line.length] = Link(box[11][0], box[10][1])
line[line.length] = Link(box[11][0], box[10][2])
//----------
box[12] = new Array()
yLevel += 3
box[12][0] = Textbox_Option(x(2), y(yLevel), '接吻', 'l|杏|椋')
line[line.length] = Link(box[12][0], box[11][0])
box[12][1] = Textbox_Option(x(4), y(yLevel), '不接吻', 'r|杏|椋')
line[line.length] = Link(box[12][1], box[11][0])
//----------
box[13] = new Array()
yLevel += 2
box[13][0] = Textbox_Condition(x(2), y(yLevel), '28日，喜欢女孩的类型')
line[line.length] = Link(box[13][0], box[12][0])
//----------
box[14] = new Array()
yLevel += 3
box[14][0] = Textbox_Selection(x(1), y(yLevel), '喜欢短头发')
line[line.length] = Link(box[14][0], box[13][0])
box[14][1] = Textbox_Selection(x(3), y(yLevel), '喜欢长头发')
line[line.length] = Link(box[14][1], box[13][0])
//----------
box[15] = new Array()
yLevel += 2
box[15][0] = Textbox_Condition(x(1), y(yLevel), '4日，回忆当时椋的选择')
line[line.length] = Link(box[15][0], box[14][0])
//----------
box[16] = new Array()
yLevel += 3
box[16][0] = Textbox_Selection(x(1), y(yLevel), '坦桑蓝')
line[line.length] = Link(box[16][0], box[15][0])
box[16][1] = Textbox_Selection(x(3), y(yLevel), '紫水晶')
line[line.length] = Link(box[16][1], box[15][0])
//----------
box[17] = new Array()
yLevel += 2
box[17][0] = Textbox_Quit(x(1), y(yLevel), '椋 GOOD ENDING')
line[line.length] = Link(box[17][0], box[16][0])
//----------
box[18] = new Array()
yLevel += 1
box[18][0] = Textbox_Date(x(3), y(yLevel), '5月7日', 'bottom')
line[line.length] = Link(box[18][0], box[16][1])
line[line.length] = Link(box[18][0], Point(linx(4), liny(-5)), box[14][1])
line[line.length] = Link(box[18][0], box[12][1])

hdft['footer'] = Footer(liny(1), 35)
