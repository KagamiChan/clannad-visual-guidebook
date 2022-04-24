// CVG HTML Data Page16 Done By Ligueston 2008.4.15
hdft['header'] = Header('public', '公共路线', 'Public Route', '4月22日（二）', 'April 22nd~Part 2')

let yLevel = 0
//----------
box[0] = new Array()
yLevel += 3
box[0][0] = Textbox_Block(x(0), y(yLevel), 'A')
box[0][0].addLink('p16_A')
box[0][0].addClick(() => {
  gotopage(15, 'p15_retA')
})
box[0][1] = Textbox_Condition(x(3), y(yLevel), '17日，春园挑战智代（四回目）')
line[line.length] = Link(
  Point(linx(3), liny(0) - LINEBASEHEIGHT / 2),
  Point(linx(3), liny(0) - LINEBASEHEIGHT / 2),
)
board[board.length] = Board(liny(0), liny(48))
//----------
box[1] = new Array()
yLevel += 3
box[1][0] = Textbox_Selection(x(2), y(yLevel), '跟着他去')
line[line.length] = Link(box[1][0], box[0][1])
box[1][1] = Textbox_Selection(x(4), y(yLevel), '不去管他')
line[line.length] = Link(box[1][1], box[0][1])
//----------
box[2] = new Array()
yLevel += 2
CmtSummery = ''
CmtSelect = ''
CmtCaution = ''
CmtOption = '-和智代搭话'
CmtEvents = '00000001'
CmtEvntIru = '智代有条件参与毕业典礼'
box[2][0] = Textbox_Selection_C(
  x(2),
  y(yLevel),
  '坂道上遇到智代',
  '3',
  CmtSummery,
  CmtSelect,
  CmtCaution,
  CmtOption,
  CmtEvents,
  CmtEvntIru,
  '坂道上遇到智代',
  0,
)
line[line.length] = Link(box[2][0], box[1][0])
//----------
box[3] = new Array()
yLevel += 3
box[3][0] = Textbox_Option(x(1), y(yLevel), '和智代搭话')
line[line.length] = Link(box[3][0], box[2][0])
box[3][1] = Textbox_Option(x(3), y(yLevel), '装作没看见')
line[line.length] = Link(box[3][1], box[2][0])
//----------
box[4] = new Array()
yLevel += 4
box[4][0] = Textbox_Selection(x(3), y(yLevel), '春原加入演剧部，想象他的下场')
line[line.length] = Link(box[4][0], Point(linx(2), liny(-1)), box[3][0])
line[line.length] = Link(box[4][0], Point(linx(2), liny(-1)), box[3][1])
line[line.length] = Link(box[4][0], box[1][1])
//----------
box[5] = new Array()
yLevel += 3
box[5][0] = Textbox_Option(x(1), y(yLevel), '斩杀')
line[line.length] = Link(box[5][0], box[4][0])
box[5][1] = Textbox_Option(x(3), y(yLevel), '偷窃')
line[line.length] = Link(box[5][1], box[4][0])
box[5][2] = Textbox_Option(x(5), y(yLevel), '魔法')
line[line.length] = Link(box[5][2], box[4][0])
//----------
box[6] = new Array()
yLevel += 3
box[6][0] = Textbox_Condition(x(3), y(yLevel), '18日，独自雕刻的风子')
line[line.length] = Link(box[6][0], box[5][0])
line[line.length] = Link(box[6][0], box[5][1])
line[line.length] = Link(box[6][0], box[5][2])
//----------
box[7] = new Array()
yLevel += 3
box[7][0] = Textbox_Selection(x(2), y(yLevel), '再看一会儿')
line[line.length] = Link(box[7][0], box[6][0])
box[7][1] = Textbox_Selection(x(4), y(yLevel), '离开', 'r|+未触发')
line[line.length] = Link(box[7][1], box[6][0])
//----------
box[8] = new Array()
yLevel += 2
box[8][0] = Textbox_Selection(x(2), y(yLevel), '演剧部聘请指导老师，咨询风子')
line[line.length] = Link(box[8][0], box[7][0])
//----------
box[9] = new Array()
yLevel += 3
box[9][0] = Textbox_Option(x(1), y(yLevel), '和风子商量一下')
line[line.length] = Link(box[9][0], box[8][0])
box[9][1] = Textbox_Option(x(3), y(yLevel), '当然不行啦')
line[line.length] = Link(box[9][1], box[8][0])
//----------
box[10] = new Array()
yLevel += 4
CmtSummery = ''
CmtSelect = ''
CmtCaution = ''
CmtOption = '-和藤林姐妹商量'
CmtEvents = '00000001'
CmtEvntIru = '杏、椋参与毕业典礼'
box[10][0] = Textbox_Selection_C(
  x(3),
  y(yLevel),
  '咨询指导老师的问题',
  '4',
  CmtSummery,
  CmtSelect,
  CmtCaution,
  CmtOption,
  CmtEvents,
  CmtEvntIru,
  '咨询指导老师的问题',
  0,
)
line[line.length] = Link(box[10][0], Point(linx(2), liny(-1)), box[9][0])
line[line.length] = Link(box[10][0], Point(linx(2), liny(-1)), box[9][1])
line[line.length] = Link(box[10][0], box[7][1])
//----------
box[11] = new Array()
yLevel += 3
box[11][0] = Textbox_Option(x(2), y(yLevel), '和藤林姐妹商量')
line[line.length] = Link(box[11][0], box[10][0])
box[11][1] = Textbox_Option(x(4), y(yLevel), '和班主任商量')
line[line.length] = Link(box[11][1], box[10][0])
//----------
box[12] = new Array()
yLevel += 3
box[12][0] = Textbox_Condition(x(3), y(yLevel), '16日，杏没有迟到的原因')
line[line.length] = Link(box[12][0], box[11][0])
line[line.length] = Link(box[12][0], box[11][1])
//----------
box[13] = new Array()
yLevel += 3
box[13][0] = Textbox_Selection(x(2), y(yLevel), '试着追问下去')
line[line.length] = Link(box[13][0], box[12][0])
box[13][1] = Textbox_Selection(x(4), y(yLevel), '没什么好介意的', 'r|+未触发')
line[line.length] = Link(box[13][1], box[12][0])
//----------
box[14] = new Array()
yLevel += 2
box[14][0] = Textbox_Selection(x(2), y(yLevel), '课前，牡丹的处理问题')
line[line.length] = Link(box[14][0], box[13][0])
//----------
box[15] = new Array()
yLevel += 3
box[15][0] = Textbox_Option(x(1), y(yLevel), '把牡丹丢还给杏')
line[line.length] = Link(box[15][0], box[14][0])
box[15][1] = Textbox_Option(x(3), y(yLevel), '拿回去好了')
line[line.length] = Link(box[15][1], box[14][0])

line[line.length] = Link(Point(linx(2), liny(3)), box[15][0])
line[line.length] = Link(Point(linx(2), liny(3)), box[15][1])
line[line.length] = Link(Point(linx(2), liny(3)), Point(linx(4), liny(3)), box[13][1])
line[line.length] = Link(Point(linx(3), liny(3)), Point(linx(3), liny(3)))

hdft['footer'] = Footer(liny(1), 16)
