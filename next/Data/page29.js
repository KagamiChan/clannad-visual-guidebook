// CVG HTML Data Page29 Done By Shakugan_No_Kaluote 2008.4.17
hdft['header'] = Header(
  'tomoyo',
  '坂上 智代',
  'Tomoyo Sakagami',
  '5月6日～5月11日',
  'May 6th~May 11th',
)

let yLevel = 0
//----------
box[0] = new Array()
yLevel += 3
box[0][0] = Textbox_Date(x(3.5), y(yLevel), '5月6日', 'top')
//----------
box[1] = new Array()
yLevel += 2
CmtSummery = ''
CmtSelect = ''
CmtCaution = ''
CmtOption = '-插嘴说话'
CmtEvents = '10000000'
CmtEvntIru = '杏参与64HIT'
box[1][0] = Textbox_Selection_C(
  x(3.5),
  y(yLevel),
  '纷争之间的处理',
  '1',
  CmtSummery,
  CmtSelect,
  CmtCaution,
  CmtOption,
  CmtEvents,
  CmtEvntIru,
  '纷争之间的处理',
  0,
)
line[line.length] = Link(box[1][0], box[0][0])
//----------
box[2] = new Array()
yLevel += 3
box[2][0] = Textbox_Option(x(2.5), y(yLevel), '插嘴说话')
line[line.length] = Link(box[2][0], box[1][0])
box[2][1] = Textbox_Option(x(4.5), y(yLevel), '保持沉默，交给智代处理')
line[line.length] = Link(box[2][1], box[1][0])
//----------
box[3] = new Array()
yLevel += 3
box[3][0] = Textbox_Condition(x(3.5), y(yLevel), '6日，希望和智代的快乐能持续下去')
line[line.length] = Link(box[3][0], box[2][0])
line[line.length] = Link(box[3][0], box[2][1])
//----------
box[4] = new Array()
yLevel += 3
box[4][0] = Textbox_Selection(x(2.5), y(yLevel), '这样下去是不行的')
line[line.length] = Link(box[4][0], box[3][0])
box[4][1] = Textbox_Selection(x(4.5), y(yLevel), '就这样继续下去')
line[line.length] = Link(box[4][1], box[3][0])
//----------
box[5] = new Array()
yLevel += 2
box[5][0] = Textbox_Selection(x(2.5), y(yLevel), '代替春原的要求')
line[line.length] = Link(box[5][0], box[4][0])
//----------
box[6] = new Array()
yLevel += 3
box[6][0] = Textbox_Option(x(1.5), y(yLevel), '不行', 'l|智代')
line[line.length] = Link(box[6][0], box[5][0])
box[6][1] = Textbox_Option(x(3.5), y(yLevel), '好的', 'r|智代')
line[line.length] = Link(box[6][1], box[5][0])
//----------
box[7] = new Array()
yLevel += 2
box[7][0] = Textbox_Date(x(1.5), y(yLevel), '5月11日', 'bottom')
line[line.length] = Link(box[7][0], box[6][0])
//----------
box[8] = new Array()
yLevel += 1
box[8][0] = Textbox_Quit(x(3.5), y(yLevel), '智代 Bad Ending')
line[line.length] = Link(box[8][0], box[6][1])
line[line.length] = Link(box[8][0], box[4][1])
box[9] = new Array()
yLevel += 5
box[9][0] = Textbox_Date(x(4), y(yLevel), '5月11日', 'top')
//----------
box[10] = new Array()
yLevel += 2
CmtSummery = '春原再次被智代踢飞在空中，向朋也飞来。'
CmtSelect = '选择[踢回去]，触发智代线特殊剧情64HIT。'
CmtCaution = ''
CmtOption = '-踢回去'
CmtEvents = '10000000'
CmtEvntIru = '64HIT进入必选'
box[10][0] = Textbox_Selection_C(
  x(4),
  y(yLevel),
  '被踢飞过来的春原',
  '1',
  CmtSummery,
  CmtSelect,
  CmtCaution,
  CmtOption,
  CmtEvents,
  CmtEvntIru,
  '被踢飞过来的春原',
  0,
)
line[line.length] = Link(box[10][0], box[9][0])
//----------
box[11] = new Array()
yLevel += 3
box[11][0] = Textbox_Option(x(3), y(yLevel), '踢回去')
line[line.length] = Link(box[11][0], box[10][0])
box[11][1] = Textbox_Option(x(5), y(yLevel), '避开')
line[line.length] = Link(box[11][1], box[10][0])
//----------
box[12] = new Array()
yLevel += 2
CmtSummery = ''
CmtSelect = ''
CmtCaution =
  '坂上智代线路后期特殊剧情。发生在11日午前，没有选择分支。内容变化与公共线路和智代线众多分支的选择有关，这些相关分支的智代64HIT图标都高亮显示。智代64HIT相关攻略请参见P30。'
CmtOption = ''
CmtEvents = ''
CmtEvntIru = ''
box[12][0] = Textbox_Option_C(
  x(3),
  y(yLevel),
  '智代64HIT',
  '2',
  CmtSummery,
  CmtSelect,
  CmtCaution,
  CmtOption,
  CmtEvents,
  CmtEvntIru,
  '智代64HIT',
  0,
)
box[12][0].addLink('p29_retTY64')
box[12][0].addClick(() => {
  gotopage(30, 'p30_TY64')
})
line[line.length] = Link(box[12][0], box[11][0])
//----------
box[13] = new Array()
yLevel += 3
box[13][0] = Textbox_Condition(x(4), y(yLevel), '16日，宿舍走廊遇见美佐枝')
line[line.length] = Link(box[13][0], box[12][0])
line[line.length] = Link(box[13][0], box[11][1])
//----------
box[14] = new Array()
yLevel += 3
box[14][0] = Textbox_Selection(x(3), y(yLevel), '向她搭话')
line[line.length] = Link(box[14][0], box[13][0])
box[14][1] = Textbox_Selection(x(5), y(yLevel), '目送她离去', 'r|+未触发')
line[line.length] = Link(box[14][1], box[13][0])
//----------
box[15] = new Array()
yLevel += 2
CmtSummery = '美佐枝的猫不见了并请求朋也帮助寻找，但难得抛开工作的智代却等在一旁。'
CmtSelect =
  '如果之前完成过美佐枝线（达成GOOD ENDING），并在18日的分支{宿舍走廊遇见美佐枝}中选择[向她搭话]，该选择分支就会出现。选则[帮忙]，可以得到美佐枝的“光”。'
CmtCaution = ''
CmtOption = ''
CmtEvents = ''
CmtEvntIru = ''
box[15][0] = Textbox_Selection_C(
  x(3),
  y(yLevel),
  '帮美佐枝找她的猫',
  '3',
  CmtSummery,
  CmtSelect,
  CmtCaution,
  CmtOption,
  CmtEvents,
  CmtEvntIru,
  '帮美佐枝找她的猫',
  0,
)
line[line.length] = Link(box[15][0], box[14][0])
//----------
box[16] = new Array()
yLevel += 3
box[16][0] = Textbox_Option(x(2), y(yLevel), '帮忙')
line[line.length] = Link(box[16][0], box[15][0])
box[16][1] = Textbox_Option(x(4), y(yLevel), '拒绝')
line[line.length] = Link(box[16][1], box[15][0])
//----------
box[17] = new Array()
yLevel += 2
box[17][0] = Textbox_Condition(x(2), y(yLevel), '完成过美佐枝线')
line[line.length] = Link(box[17][0], box[16][0])
//----------
box[18] = new Array()
yLevel += 3
box[18][0] = Textbox_Selection(x(1), y(yLevel), '是')
line[line.length] = Link(box[18][0], box[17][0])
box[18][1] = Textbox_Selection(x(3), y(yLevel), '否')
line[line.length] = Link(box[18][1], box[17][0])
//----------
box[19] = new Array()
yLevel += 2
box[19][0] = Textbox_Option(x(1), y(yLevel), '美佐枝“光”获得')
line[line.length] = Link(box[19][0], box[18][0])
//----------
box[20] = new Array()
yLevel += 5
box[20][0] = Textbox_Option(x(4), y(yLevel), '智代“光”获得')
line[line.length] = Link(box[20][0], Point(linx(3), liny(-1)), Point(linx(2), liny(-2)), box[19][0])
line[line.length] = Link(box[20][0], Point(linx(3), liny(-1)), Point(linx(2), liny(-2)), box[18][1])
line[line.length] = Link(box[20][0], Point(linx(3), liny(-1)), box[16][1])
line[line.length] = Link(box[20][0], box[14][1])
//----------
box[21] = new Array()
yLevel += 2
box[21][0] = Textbox_Quit(x(4), y(yLevel), '智代 Good Ending')
line[line.length] = Link(box[21][0], box[20][0])

hdft['footer'] = Footer(liny(1), 29)
