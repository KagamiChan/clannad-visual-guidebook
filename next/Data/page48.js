// CVG HTML Data Page48 Done By Ligueston 2008.4.21
hdft['header'] = Header(
  'fuuko',
  '伊吹 风子',
  'Fuuko Ibuki',
  '风子大师（一）',
  'Fuuko Master~Part 1',
)

if (sizeSet == 0) {
  var BUTTONASIDEADJUST = 50
} else {
  var BUTTONASIDEADJUST = 30
}

let yLevel = 0
//----------
box[0] = new Array()
yLevel += 3
box[0][0] = Textbox_Option(x(0), y(yLevel), '风子大师（一）')
box[0][0].addLink('p48_KFMT1')
box[0][0].addClick(() => {
  gotopage(13, 'p13_retKFMT1')
})
CmtSummery = '争论着海星的可爱，风子又陷入了幻想和陶醉中。朋也脑中闪过一个有趣的主意。'
CmtSelect = '第一次进入风子大师剧情时，只能完成[让风子用鼻子喝果汁一级]。'
CmtCaution = ''
CmtOption = ''
CmtEvents = ''
CmtEvntIru = ''
box[0][1] = Textbox_Selection_C(
  x(3),
  y(yLevel),
  '风子陷入幻想（一）',
  '1',
  CmtSummery,
  CmtSelect,
  CmtCaution,
  CmtOption,
  CmtEvents,
  CmtEvntIru,
  '风子陷入幻想（一）',
  0,
)
line[line.length] = Link(
  Point(linx(3), liny(0) - LINEBASEHEIGHT / 2),
  Point(linx(3), liny(0) - LINEBASEHEIGHT / 2),
)
//----------
box[1] = new Array()
yLevel += 3
box[1][0] = Textbox_Option(x(2), y(yLevel), '太无聊了，让她用鼻子喝果汁玩玩')
line[line.length] = Link(box[1][0], box[0][1])
box[1][1] = Textbox_Option(x(4), y(yLevel), '一直等下去')
line[line.length] = Link(box[1][1], box[0][1])
//----------
box[2] = new Array()
yLevel += 2
box[2][0] = Textbox_Option(x(2), y(yLevel), '让风子用鼻子喝果汁升级')
line[line.length] = Link(box[2][0], box[1][0])

yLevel += 2
line[line.length] = Link(Point(linx(2), liny(0)), box[1][0])
line[line.length] = Link(Point(linx(2), liny(0)), Point(linx(4), liny(0)), box[1][1])
line[line.length] = Link(Point(linx(3), liny(0)), Point(linx(3), liny(0)))
//----------
box[3] = new Array()
yLevel += 4
box[3][0] = Textbox_Option(x(0), y(yLevel), '风子大师（二）')
box[3][0].addLink('p48_KFMT2')
box[3][0].addClick(() => {
  gotopage(17, 'p17_retKFMT2')
})
box[3][1] = Textbox_Selection(x(3), y(yLevel), '风子陷入幻想（二）')
line[line.length] = Link(
  Point(linx(3), liny(0) - LINEBASEHEIGHT / 2),
  Point(linx(3), liny(0) - LINEBASEHEIGHT / 2),
)
//----------
box[4] = new Array()
yLevel += 3
box[4][0] = Textbox_Option(x(1.5), y(yLevel), '恶作剧')
line[line.length] = Link(box[4][0], Point(linx(2.5), liny(-1)))
box[4][1] = Textbox_Option(x(4.5), y(yLevel), '耐心等下去')
line[line.length] = Link(box[4][1], Point(linx(2.5), liny(-1)))
line[line.length] = Link(Point(linx(3), liny(-1)), box[3][1])
//----------
box[5] = new Array()
yLevel += 2
CmtSummery = ''
CmtSelect =
  '风子大师一共有4项常规恶作剧：[让风子用鼻子喝果汁]、[把风子带到别处去]（22日开始出现）、[找别人来装扮自己]（23日开始出现）、[偷换掉风子怀里的雕刻]（24日开始出现），一项特殊恶作剧[给风子吃早苗的面包]（29日出现）和一个隐藏恶作剧剧情。任意一个常规恶作剧完成两次后即可达到“登峰造极”（达成），恶作剧中如果再选择已经达成的项目，则会跳回重新作选择，完成的项目不会再有新的剧情。'
CmtCaution = ''
CmtOption = ''
CmtEvents = ''
CmtEvntIru = ''
box[5][0] = Textbox_Selection_C(
  x(1.5),
  y(yLevel),
  '风子恶作剧（一）',
  '2',
  CmtSummery,
  CmtSelect,
  CmtCaution,
  CmtOption,
  CmtEvents,
  CmtEvntIru,
  '风子恶作剧（一）',
  0,
)
line[line.length] = Link(box[5][0], box[4][0])
//----------
box[6] = new Array()
yLevel += 2
box[6][0] = Textbox_Option(x(1.5), y(yLevel), '让风子用鼻子喝果汁')
line[line.length] = Link(box[6][0], box[5][0])
box[6][1] = Textbox_Option(x(3) + BUTTONASIDEADJUST, y(yLevel), '“让风子用鼻子喝果汁”升级/达成')
//----------
box[7] = new Array()
yLevel += 2
box[7][0] = Textbox_Option(x(1.5), y(yLevel), '把风子带到别处去')
line[line.length] = Link(box[7][0], box[6][0])
box[7][1] = Textbox_Option(x(3) + BUTTONASIDEADJUST, y(yLevel), '“把风子带到别处去”升级')

yLevel += 2
line[line.length] = Link(Point(linx(1.5), liny(0)), box[7][0])
line[line.length] = Link(Point(linx(1.5), liny(0)), Point(linx(4.5), liny(0)), box[4][1])
line[line.length] = Link(Point(linx(3), liny(0)), Point(linx(3), liny(0)))
//----------
box[8] = new Array()
yLevel += 4
box[8][0] = Textbox_Option(x(0), y(yLevel), '风子大师（三）')
box[8][0].addLink('p48_KFMT3')
box[8][0].addClick(() => {
  gotopage(19, 'p19_retKFMT3')
})
box[8][1] = Textbox_Condition(x(3.5), y(yLevel), '22日，风子陷入幻想（二）')
line[line.length] = Link(
  Point(linx(3.5), liny(0) - LINEBASEHEIGHT / 2),
  Point(linx(3.5), liny(0) - LINEBASEHEIGHT / 2),
)
//----------
box[9] = new Array()
yLevel += 3
box[9][0] = Textbox_Selection(x(2), y(yLevel), '恶作剧')
line[line.length] = Link(box[9][0], Point(linx(3), liny(-1)))
box[9][1] = Textbox_Selection(x(5), y(yLevel), '耐心等下去')
line[line.length] = Link(box[9][1], Point(linx(3), liny(-1)))
line[line.length] = Link(Point(linx(3.5), liny(-1)), box[8][1])
//----------
box[10] = new Array()
yLevel += 2
box[10][0] = Textbox_Selection(x(2), y(yLevel), '风子陷入幻想（三）')
line[line.length] = Link(box[10][0], box[9][0])
//----------
box[11] = new Array()
yLevel += 3
box[11][0] = Textbox_Option(x(0.5), y(yLevel), '恶作剧')
line[line.length] = Link(box[11][0], Point(linx(1.5), liny(-1)))
box[11][1] = Textbox_Option(x(3.5), y(yLevel), '不去管她')
line[line.length] = Link(box[11][1], Point(linx(1.5), liny(-1)))
line[line.length] = Link(Point(linx(2), liny(-1)), box[10][0])
//----------
box[12] = new Array()
yLevel += 2
CmtSummery = ''
CmtSelect =
  '23日至26日，二级的[把风子带到别处去]剧情根据公共线路的选择有变化：若在18日的分支{有纪宁离开后}选择[睡觉]，则[把风子带到别处去]剧情发生在资料室，否则发生在校长室。'
CmtCaution = ''
CmtOption = ''
CmtEvents = ''
CmtEvntIru = ''
box[12][0] = Textbox_Selection_C(
  x(0.5),
  y(yLevel),
  '风子恶作剧（二）',
  '3',
  CmtSummery,
  CmtSelect,
  CmtCaution,
  CmtOption,
  CmtEvents,
  CmtEvntIru,
  '风子恶作剧（二）',
  0,
)
line[line.length] = Link(box[12][0], box[11][0])
//----------
box[13] = new Array()
yLevel += 2
box[13][0] = Textbox_Option(x(0.5), y(yLevel), '让风子用鼻子喝果汁')
line[line.length] = Link(box[13][0], box[12][0])
box[13][1] = Textbox_Option(x(2) + BUTTONASIDEADJUST, y(yLevel), '“让风子用鼻子喝果汁”升级/达成')
//----------
box[14] = new Array()
yLevel += 2
box[14][0] = Textbox_Option(x(0.5), y(yLevel), '把风子带到别处去')
line[line.length] = Link(box[14][0], box[13][0])
box[14][1] = Textbox_Option(x(2) + BUTTONASIDEADJUST, y(yLevel), '“把风子带到别处去”升级/达成')
//----------
box[15] = new Array()
yLevel += 2
box[15][0] = Textbox_Option(x(0.5), y(yLevel), '找人来装扮自己')
line[line.length] = Link(box[15][0], box[14][0])
box[15][1] = Textbox_Option(x(2) + BUTTONASIDEADJUST, y(yLevel), '“找人来装扮自己”升级')

yLevel += 3
line[line.length] = Link(Point(linx(0.5), liny(-1)), box[15][0])
line[line.length] = Link(Point(linx(0.5), liny(-1)), Point(linx(3.5), liny(-1)), box[11][1])
line[line.length] = Link(Point(linx(2), liny(0)), Point(linx(2), liny(-1)))
line[line.length] = Link(Point(linx(2), liny(0)), Point(linx(5), liny(0)), box[9][1])
line[line.length] = Link(Point(linx(3.5), liny(0)), Point(linx(3.5), liny(0)))

hdft['footer'] = Footer(liny(1), 48)
