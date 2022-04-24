// CVG HTML Data Page4 Done By Ligueston 2008.4.5
hdft['header'] = Header('public', '公共路线', 'Public Route', '4月16日（二）', 'April 16th~Part 2')

let yLevel = 0
//----------
box[0] = new Array()
yLevel += 3
box[0][0] = Textbox_Condition(x(4), y(yLevel), '15日，回想起庭院中的少女')
line[line.length] = Link(
  Point(linx(4), liny(0) - LINEBASEHEIGHT / 2),
  Point(linx(4), liny(0) - LINEBASEHEIGHT / 2),
)
line[line.length - 1].addTitle('点击转回第3页')
line[line.length - 1].addClick(() => {
  gotopage(3)
})
//----------
box[1] = new Array()
yLevel += 3
box[1][0] = Textbox_Selection(x(2.5), y(yLevel), '在意')
line[line.length] = Link(box[1][0], Point(linx(3.5), liny(-1)))
box[1][1] = Textbox_Selection(x(5.5), y(yLevel), '不在意', 'r|+未触发')
line[line.length] = Link(box[1][1], Point(linx(3.5), liny(-1)))
line[line.length] = Link(Point(linx(4), liny(-1)), box[0][0])
//----------
box[2] = new Array()
yLevel += 2
box[2][0] = Textbox_Condition(x(2.5), y(yLevel), '15日，面对泪水打转的椋')
line[line.length] = Link(box[2][0], box[1][0])
//----------
box[3] = new Array()
yLevel += 3
box[3][0] = Textbox_Selection(x(1.5), y(yLevel), '道歉')
line[line.length] = Link(box[3][0], box[2][0])
box[3][1] = Textbox_Selection(x(3.5), y(yLevel), '无视')
line[line.length] = Link(box[3][1], box[2][0])
//----------
box[4] = new Array()
yLevel += 2
box[4][0] = Textbox_Selection(x(3.5), y(yLevel), '早晨对古河的约定')
line[line.length] = Link(box[4][0], box[3][1])
//----------
box[5] = new Array()
yLevel += 3
box[5][0] = Textbox_Option(x(2.5), y(yLevel), '跑去买', 'l|渚|风子')
line[line.length] = Link(box[5][0], box[4][0])
box[5][1] = Textbox_Option(x(4.5), y(yLevel), '用不着那么做', 'r|渚|风子')
line[line.length] = Link(box[5][1], box[4][0])
//----------
box[6] = new Array()
yLevel += 3
CmtSummery = '渚下定决心振作起来去实现自己的梦想，重建废弃的话剧社，但她需要朋也的帮助。'
CmtSelect =
  '这是学院篇前期重要节点。选择[帮忙]则继续进行渚线和风子线；选择[让她一个人做]则有可能进入美佐枝线、胜平线和智代线的角色剧情，分支对此三条路线的影响要等到学院篇后期才会显现出来。'
CmtCaution = ''
CmtOption = '-帮忙'
CmtEvents = '01000000'
CmtEvntIru = '渚参与体育仓库事件'
box[6][0] = Textbox_Selection_C(
  x(1.5),
  y(yLevel),
  '古河重新创立话剧社',
  '3',
  CmtSummery,
  CmtSelect,
  CmtCaution,
  CmtOption,
  CmtEvents,
  CmtEvntIru,
  '古河重新创立话剧社',
  0,
)
line[line.length] = Link(box[6][0], box[5][0])
line[line.length] = Link(box[6][0], box[3][0])
//----------
box[7] = new Array()
yLevel += 3
box[7][0] = Textbox_Option(x(0.5), y(yLevel), '让她一个人做', 'l|智代|胜平|美佐枝|-渚|-风子')
line[line.length] = Link(box[7][0], box[6][0])
box[7][1] = Textbox_Option(x(2.5), y(yLevel), '帮忙', 'r|-渚|-风子|智代|胜平|美佐枝')
line[line.length] = Link(box[7][1], box[6][0])
//----------
box[8] = new Array()
yLevel += 2
box[8][0] = Textbox_Selection(x(2.5), y(yLevel), '古河的提议「住到我家来」')
line[line.length] = Link(box[8][0], box[7][1])
//----------
box[9] = new Array()
yLevel += 3
box[9][0] = Textbox_Option(x(1.5), y(yLevel), '怎么可以这样')
line[line.length] = Link(box[9][0], box[8][0])
box[9][1] = Textbox_Option(x(3.5), y(yLevel), '想这么做')
line[line.length] = Link(box[9][1], box[8][0])
//----------
box[10] = new Array()
yLevel += 5
box[10][0] = Textbox_Date(x(4), y(yLevel), '4月17日', 'bottom')
line[line.length] = Link(box[10][0], Point(linx(4), liny(-1)))
box[10][0].addClick(() => {
  gotopage(5)
})
line[line.length] = Link(Point(linx(2.5), liny(-1)), Point(linx(0.5), liny(-2)), box[7][0])
line[line.length] = Link(Point(linx(2.5), liny(-2)), box[9][0])
line[line.length] = Link(Point(linx(2.5), liny(-2)), box[9][1])
line[line.length] = Link(Point(linx(2.5), liny(-1)), Point(linx(4.5), liny(-2)), box[5][1])
line[line.length] = Link(Point(linx(2.5), liny(-1)), Point(linx(5.5), liny(-1)), box[1][1])

hdft['footer'] = Footer(liny(1), 4)
