// CVG HTML Data Page5 Done By Ligueston 2008.4.5
hdft['header'] = Header('public', '公共路线', 'Public Route', '4月17日（一）', 'April 17th~Part 1')

let yLevel = 0
//----------
box[0] = new Array()
yLevel += 3
box[0][0] = Textbox_Date(x(3.5), y(yLevel), '4月17日', 'top')
//----------
box[1] = new Array()
yLevel += 2
box[1][0] = Textbox_Condition(x(3.5), y(yLevel), '16日，春原挑战智代（一回目）')
line[line.length] = Link(box[1][0], box[0][0])
//----------
box[2] = new Array()
yLevel += 3
box[2][0] = Textbox_Selection(x(2.5), y(yLevel), '去')
line[line.length] = Link(box[2][0], box[1][0])
box[2][1] = Textbox_Selection(x(4.5), y(yLevel), '不去', 'r|+未触发')
line[line.length] = Link(box[2][1], box[1][0])
//----------
box[3] = new Array()
yLevel += 2
box[3][0] = Textbox_Selection(x(2.5), y(yLevel), '春原挑战智代（二回目）')
line[line.length] = Link(box[3][0], box[2][0])
//----------
box[4] = new Array()
yLevel += 3
box[4][0] = Textbox_Option(x(1.5), y(yLevel), '跟去看看')
line[line.length] = Link(box[4][0], box[3][0])
box[4][1] = Textbox_Option(x(3.5), y(yLevel), '留在教室里')
line[line.length] = Link(box[4][1], box[3][0])
//----------
box[5] = new Array()
yLevel += 3
box[5][0] = Textbox_Selection(x(2.5), y(yLevel), '春原挑战智代（三回目）')
line[line.length] = Link(box[5][0], box[4][0])
line[line.length] = Link(box[5][0], box[4][1])
//----------
box[6] = new Array()
yLevel += 3
box[6][0] = Textbox_Selection(x(1.5), y(yLevel), '跟着他去')
line[line.length] = Link(box[6][0], box[5][0])
box[6][1] = Textbox_Selection(x(3.5), y(yLevel), '不去管他')
line[line.length] = Link(box[6][1], box[5][0])
//----------
box[7] = new Array()
yLevel += 3
CmtSummery =
  '遭受到沉重打击春原仍然坚信：智代之所以强大是因为她是个男的。为了验证自己想法，下课后，他第三次叫上朋也，向智代发起挑战……'
CmtSelect = '17日上午春原三次挑战智代只有第三次的选择是关键。若选择[不去管他]，则跳出智代线。'
CmtCaution = ''
CmtOption = '-跟着他去'
CmtEvents = '01110011'
CmtEvntIru =
  '智代成为3对3篮球赛成员候选，参与伪女友事件，有条件参与有纪宁的咒语、体育仓库事件和毕业典礼；业余棒球进入必选'
box[7][0] = Textbox_Selection_C(
  x(2.5),
  y(yLevel),
  '春园挑战智代（四回目）',
  '1',
  CmtSummery,
  CmtSelect,
  CmtCaution,
  CmtOption,
  CmtEvents,
  CmtEvntIru,
  '春园挑战智代',
  0,
)
line[line.length] = Link(box[7][0], box[6][0])
line[line.length] = Link(box[7][0], box[6][1])
//----------
box[8] = new Array()
yLevel += 3
box[8][0] = Textbox_Option(x(1.5), y(yLevel), '跟着他去', 'l|智代')
line[line.length] = Link(box[8][0], box[7][0])
box[8][1] = Textbox_Option(x(3.5), y(yLevel), '不去管他', 'r|智代')
line[line.length] = Link(box[8][1], box[7][0])
//----------
box[9] = new Array()
yLevel += 4
CmtSummery = ''
CmtSelect =
  '{15或16日，逃课遇见琴美}包括15日在分支{上午、英语语法课}选择[逃课]以及在16日的分支{上午、课上}选择[逃课]，触发其一（只可能触发其一）就满足逃课遇见琴美的条件。'
CmtCaution = ''
CmtOption = ''
CmtEvents = ''
CmtEvntIru = ''
box[9][0] = Textbox_Condition_C(
  x(3.5),
  y(yLevel),
  '15日或16日，逃课遇见琴美',
  '2',
  CmtSummery,
  CmtSelect,
  CmtCaution,
  CmtOption,
  CmtEvents,
  CmtEvntIru,
  '15日或16日，逃课遇见琴美',
  0,
)
line[line.length] = Link(box[9][0], Point(linx(2.5), liny(-1)), box[8][0])
line[line.length] = Link(box[9][0], Point(linx(2.5), liny(-1)), box[8][1])
line[line.length] = Link(box[9][0], box[2][1])
//----------
box[10] = new Array()
yLevel += 3
box[10][0] = Textbox_Selection(x(2.5), y(yLevel), '是')
line[line.length] = Link(box[10][0], box[9][0])
box[10][1] = Textbox_Selection(x(4.5), y(yLevel), '否')
line[line.length] = Link(box[10][1], box[9][0])
//----------
box[11] = new Array()
yLevel += 2
box[11][0] = Textbox_Selection(x(2.5), y(yLevel), '英语课前的休息')
line[line.length] = Link(box[11][0], box[10][0])
//----------
box[12] = new Array()
yLevel += 3
box[12][0] = Textbox_Option(x(1.5), y(yLevel), '逃课', 'l|琴美')
line[line.length] = Link(box[12][0], box[11][0])
box[12][1] = Textbox_Option(x(3.5), y(yLevel), '还是算了吧', 'r|琴美')
line[line.length] = Link(box[12][1], box[11][0])
//----------
box[13] = new Array()
yLevel += 2
box[13][0] = Textbox_Condition(x(1.5), y(yLevel), '15日，面对泪水打转的椋')
line[line.length] = Link(box[13][0], box[12][0])
//----------
box[14] = new Array()
yLevel += 3
box[14][0] = Textbox_Selection(x(1.5), y(yLevel), '无视')
line[line.length] = Link(box[14][0], box[13][0])
box[14][1] = Textbox_Selection(x(3.5), y(yLevel), '道歉')
line[line.length] = Link(box[14][1], box[13][0])
//----------
box[15] = new Array()
yLevel += 2
box[15][0] = Textbox_Selection(x(1.5), y(yLevel), '走廊上遇到琴美')
line[line.length] = Link(box[15][0], box[14][0])
//----------
box[16] = new Array()
yLevel += 3
box[16][0] = Textbox_Option(x(1.5), y(yLevel), '跟着她去', 'l|琴美')
line[line.length] = Link(box[16][0], box[15][0])
box[16][1] = Textbox_Option(x(3.5), y(yLevel), '一个人走', 'r|琴美')
line[line.length] = Link(box[16][1], box[15][0])
//----------
box[17] = new Array()
yLevel += 2
box[17][0] = Textbox_Selection(x(1.5), y(yLevel), '发现琴美拿起剪刀')
line[line.length] = Link(box[17][0], box[16][0])
//----------
box[18] = new Array()
yLevel += 3
box[18][0] = Textbox_Selection(x(1.5), y(yLevel), '看她剪过这本书没有')
line[line.length] = Link(box[18][0], box[17][0])
box[18][1] = Textbox_Selection(x(3.5), y(yLevel), '还是不要管好了')
line[line.length] = Link(box[18][1], box[17][0])

line[line.length] = Link(Point(linx(4.5), liny(3)), Point(linx(2.5), liny(3)), box[18][0])
line[line.length] = Link(Point(linx(4.5), liny(3)), Point(linx(2.5), liny(3)), box[18][1])
line[line.length] = Link(Point(linx(4.5), liny(3)), Point(linx(4.5), liny(-2)), box[16][1])
line[line.length] = Link(Point(linx(4.5), liny(3)), Point(linx(4.5), liny(-7)), box[14][1])
line[line.length] = Link(Point(linx(4.5), liny(3)), Point(linx(4.5), liny(-12)), box[12][1])
line[line.length] = Link(Point(linx(4.5), liny(3)), box[10][1])
line[line.length] = Link(Point(linx(3.5), liny(3)), Point(linx(3.5), liny(3)))
line[line.length - 1].addTitle('点击转到第6页')
line[line.length - 1].addClick(() => {
  gotopage(6)
})

hdft['footer'] = Footer(liny(4), 5)
