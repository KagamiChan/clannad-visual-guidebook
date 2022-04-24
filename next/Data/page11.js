// CVG HTML Data Page11 Done By Ligueston 2008.4.10
hdft['header'] = Header('public', '公共路线', 'Public Route', '4月19日（二）', 'April 19th~Part 2')

let yLevel = 0
//----------
box[0] = new Array()
yLevel += 3
box[0][0] = Textbox_Block(x(0), y(yLevel), 'A')
box[0][0].addLink('p11_A')
box[0][0].addClick(() => {
  gotopage(10, 'p10_retA')
})
box[0][1] = Textbox_Condition(x(4), y(yLevel), '18日，逃课选择睡觉的地方')
line[line.length] = Link(
  Point(linx(4), liny(0) - LINEBASEHEIGHT / 2),
  Point(linx(4), liny(0) - LINEBASEHEIGHT / 2),
)
board[board.length] = Board(liny(0), liny(36))
//----------
box[1] = new Array()
yLevel += 3
box[1][0] = Textbox_Selection(x(2), y(yLevel), '还是回教室吧', 'l|+未触发')
line[line.length] = Link(box[1][0], box[0][1])
box[1][1] = Textbox_Selection(x(4), y(yLevel), '去那里睡')
line[line.length] = Link(box[1][1], box[0][1])
//----------
box[2] = new Array()
yLevel += 2
box[2][0] = Textbox_Condition(x(4), y(yLevel), '18日，下课后走进资料室的女孩')
line[line.length] = Link(box[2][0], box[1][1])
//----------
box[3] = new Array()
yLevel += 3
box[3][0] = Textbox_Selection(x(4), y(yLevel), '再说几句话')
line[line.length] = Link(box[3][0], box[2][0])
box[3][1] = Textbox_Selection(x(6), y(yLevel), '离开')
line[line.length] = Link(box[3][1], box[2][0])
//----------
box[4] = new Array()
yLevel += 3
CmtSummery = '放学后，无聊的朋也正在决定着之后的去处。'
CmtSelect =
  '18日遇见有纪宁后马上就离开了资料室，退出有纪宁线，出现的三个选择项为[去社团活动室]、[去图书室]、[回家]，否则[回家]选项将被替换成[去资料室]。若18日未进入有纪宁线，选择[去资料室]如果您要进入有纪宁线，这是最后的机会。'
CmtCaution = ''
CmtOption = '-去资料室'
CmtEvents = '10000000'
CmtEvntIru = '有纪宁参与64HIT。如果18日在分支逃课选择睡觉的地方选择到那里去睡，则此处的选择没有影响'
box[4][0] = Textbox_Selection_C(
  x(2),
  y(yLevel),
  '来到旧校舍后的去向（一）',
  '6',
  CmtSummery,
  CmtSelect,
  CmtCaution,
  CmtOption,
  CmtEvents,
  CmtEvntIru,
  '来到旧校舍后的去向',
  0,
)
line[line.length] = Link(box[4][0], box[3][0])
line[line.length] = Link(box[4][0], box[1][0])
//----------
box[5] = new Array()
yLevel += 3
box[5][0] = Textbox_Option(x(0), y(yLevel), '去社团活动室')
line[line.length] = Link(box[5][0], box[4][0])
box[5][1] = Textbox_Option(x(2), y(yLevel), '去图书馆')
line[line.length] = Link(box[5][1], box[4][0])
box[5][2] = Textbox_Option(x(4), y(yLevel), '去资料室')
line[line.length] = Link(box[5][2], box[4][0])
//----------
box[6] = new Array()
yLevel += 2
box[6][0] = Textbox_Condition(x(4), y(yLevel), '18日，逃课选择睡觉的地方')
line[line.length] = Link(box[6][0], box[5][2])
//----------
box[7] = new Array()
yLevel += 3
box[7][0] = Textbox_Selection(x(3), y(yLevel), '还是回教室吧', 'l|+未触发')
line[line.length] = Link(box[7][0], box[6][0])
box[7][1] = Textbox_Selection(x(5), y(yLevel), '去那里睡')
line[line.length] = Link(box[7][1], box[6][0])
//----------
box[8] = new Array()
yLevel += 2
box[8][0] = Textbox_Selection(x(3), y(yLevel), '下课后走进资料室的女孩')
line[line.length] = Link(box[8][0], box[7][0])
//----------
box[9] = new Array()
yLevel += 3
box[9][0] = Textbox_Option(x(2), y(yLevel), '再说几句话', 'l|有纪宁|-胜平')
line[line.length] = Link(box[9][0], box[8][0])
box[9][1] = Textbox_Option(x(4), y(yLevel), '离开', 'r|-胜平|有纪宁')
line[line.length] = Link(box[9][1], box[8][0])
//----------
box[10] = new Array()
yLevel += 5
box[10][0] = Textbox_Selection(x(6), y(yLevel), '来到校舍后的去向（二）')
line[line.length] = Link(box[10][0], box[3][1])
//----------
box[11] = new Array()
yLevel += 3
box[11][0] = Textbox_Option(x(2), y(yLevel), '去社团活动室')
line[line.length] = Link(box[11][0], box[10][0])
box[11][1] = Textbox_Option(x(4), y(yLevel), '去图书馆')
line[line.length] = Link(box[11][1], box[10][0])
box[11][2] = Textbox_Option(x(6), y(yLevel), '去资料室')
line[line.length] = Link(box[11][2], box[10][0])

yLevel += 3
line[line.length] = Link(Point(linx(4), liny(0)), box[11][0])
line[line.length] = Link(Point(linx(4), liny(0)), box[11][1])
line[line.length] = Link(Point(linx(4), liny(0)), box[11][2])

line[line.length] = Link(
  Point(linx(4), liny(0)),
  Point(linx(1), liny(0)),
  Point(linx(1), liny(-6)),
  Point(linx(4), liny(-7)),
  Point(linx(3), liny(-8)),
  box[9][0],
)
line[line.length] = Link(
  Point(linx(4), liny(0)),
  Point(linx(1), liny(0)),
  Point(linx(1), liny(-6)),
  Point(linx(4), liny(-7)),
  Point(linx(3), liny(-8)),
  box[9][1],
)
line[line.length] = Link(
  Point(linx(4), liny(0)),
  Point(linx(1), liny(0)),
  Point(linx(1), liny(-6)),
  Point(linx(4), liny(-7)),
  box[7][1],
)

line[line.length] = Link(
  Point(linx(4), liny(0)),
  Point(linx(1), liny(0)),
  Point(linx(1), liny(-18)),
  box[5][0],
)
line[line.length] = Link(
  Point(linx(4), liny(0)),
  Point(linx(1), liny(0)),
  Point(linx(1), liny(-18)),
  box[5][1],
)
line[line.length] = Link(Point(linx(4), liny(0)), Point(linx(4), liny(0)))

hdft['footer'] = Footer(liny(1), 11)
