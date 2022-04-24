// CVG HTML Data Page38 Done By goodbest 2008.4.18
hdft['header'] = Header(
  'sunohara',
  '春原  阳平/春原 芽衣',
  'Youhei Sunohara / Mei Sunohara',
  '4月24日～芽衣',
  'April 24th~Mei',
)

let yLevel = 0
//----------
box[0] = new Array()
yLevel += 3
box[0][0] = Textbox_Date(x(3), y(yLevel), '4月24日', 'top')
//----------
box[1] = new Array()
yLevel += 2
CmtSummery = ''
CmtSelect = ''
CmtCaution =
  '春原兄妹路线前期特殊剧情。发生在24日一天之内，内容及选择分支出现的变化与公共路线的走向和某些分支选择有关，同时也和有纪宁的骤雨中部分剧情内容有关，这些相关分支的伪女友事件图标都高亮显示。伪女友事件相关攻略请参见P39'
CmtOption = ''
CmtEvents = ''
CmtEvntIru = ''
box[1][0] = Textbox_Option_C(
  x(3),
  y(yLevel),
  '伪女友事件',
  '1',
  CmtSummery,
  CmtSelect,
  CmtCaution,
  CmtOption,
  CmtEvents,
  CmtEvntIru,
  '伪女友事件',
  0,
)
box[1][0].addLink('p38_retFAKEGF')
box[1][0].addClick(() => {
  gotopage(39, 'p39_FAKEGF')
})
line[line.length] = Link(box[1][0], box[0][0])
//----------
box[2] = new Array()
yLevel += 2
box[2][0] = Textbox_Date(x(3), y(yLevel), '芽衣', 'bottom')
line[line.length] = Link(box[2][0], box[1][0])
//----------
box[3] = new Array()
yLevel += 5
box[3][0] = Textbox_Date(x(3.5), y(yLevel), '芽衣', 'top')
//----------
box[4] = new Array()
yLevel += 2
box[4][0] = Textbox_Condition(x(3.5), y(yLevel), '20日，野芳寻求帮手')
line[line.length] = Link(box[4][0], box[3][0])
//----------
box[5] = new Array()
yLevel += 3
box[5][0] = Textbox_Selection(x(2.5), y(yLevel), '帮助')
line[line.length] = Link(box[5][0], box[4][0])
box[5][1] = Textbox_Selection(x(4.5), y(yLevel), '拒绝')
line[line.length] = Link(box[5][1], box[4][0])
//----------
box[6] = new Array()
yLevel += 2
box[6][0] = Textbox_Selection(x(2.5), y(yLevel), '憧憬野芳的芽衣')
line[line.length] = Link(box[6][0], box[5][0])
//----------
box[7] = new Array()
yLevel += 3
box[7][0] = Textbox_Option(x(1.5), y(yLevel), '从远处看看他会怎么样')
line[line.length] = Link(box[7][0], box[6][0])
box[7][1] = Textbox_Option(x(3.5), y(yLevel), '那就算了')
line[line.length] = Link(box[7][1], box[6][0])
//----------
box[8] = new Array()
yLevel += 4
box[8][0] = Textbox_Option(x(3.5), y(yLevel), '春原兄妹“光”获得')
line[line.length] = Link(box[8][0], Point(linx(2.5), liny(-1)), box[7][0])
line[line.length] = Link(box[8][0], Point(linx(2.5), liny(-1)), box[7][1])
line[line.length] = Link(box[8][0], box[5][1])
//----------
box[9] = new Array()
yLevel += 2
box[9][0] = Textbox_Quit(x(3.5), y(yLevel), '春原兄妹 GOOD ENDING')
line[line.length] = Link(box[9][0], box[8][0])

hdft['footer'] = Footer(liny(1), 38)
