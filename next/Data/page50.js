// CVG HTML Data Page50 Done By Ligueston 2008.4.21
hdft['header'] = Header(
  'fuuko',
  '伊吹 风子',
  'Fuuko Ibuki',
  '风子大师（二）',
  'Fuuko Master~Part 2',
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
box[0][0] = Textbox_Option(x(0), y(yLevel), '风子大师（七）')
box[0][0].addLink('p50_KFMT7')
box[0][0].addClick(() => {
  gotopage(44, 'p44_retKFMT7')
})
box[0][1] = Textbox_Condition(x(3.5), y(yLevel), '24日，风子陷入幻想（四）')
line[line.length] = Link(
  Point(linx(3.5), liny(0) - LINEBASEHEIGHT / 2),
  Point(linx(3.5), liny(0) - LINEBASEHEIGHT / 2),
)
//----------
box[1] = new Array()
yLevel += 3
box[1][0] = Textbox_Selection(x(2), y(yLevel), '恶作剧')
line[line.length] = Link(box[1][0], Point(linx(3), liny(-1)))
box[1][1] = Textbox_Selection(x(5), y(yLevel), '不去管她', 'r|+未触发')
line[line.length] = Link(box[1][1], Point(linx(3), liny(-1)))
line[line.length] = Link(Point(linx(3.5), liny(-1)), box[0][1])
//----------
box[2] = new Array()
yLevel += 2
box[2][0] = Textbox_Selection(x(2), y(yLevel), '风子陷入幻想（五）')
line[line.length] = Link(box[2][0], box[1][0])
//----------
box[3] = new Array()
yLevel += 3
box[3][0] = Textbox_Option(x(0.5), y(yLevel), '恶作剧')
line[line.length] = Link(box[3][0], Point(linx(1.5), liny(-1)))
box[3][1] = Textbox_Option(x(3.5), y(yLevel), '算了')
line[line.length] = Link(box[3][1], Point(linx(1.5), liny(-1)))
line[line.length] = Link(Point(linx(2), liny(-1)), box[2][0])
//----------
box[4] = new Array()
yLevel += 2
CmtSummery = ''
CmtSelect =
  '本日，若选择[把风子带到别处去]或[找别人装扮自己]，会跳回重新作选择，这两项恶作剧本日无法完成。'
CmtCaution = ''
CmtOption = ''
CmtEvents = ''
CmtEvntIru = ''
box[4][0] = Textbox_Selection_C(
  x(0.5),
  y(yLevel),
  '风子恶作剧（六）',
  '5',
  CmtSummery,
  CmtSelect,
  CmtCaution,
  CmtOption,
  CmtEvents,
  CmtEvntIru,
  '风子恶作剧（六）',
  0,
)
line[line.length] = Link(box[4][0], box[3][0])
//----------
box[5] = new Array()
yLevel += 2
box[5][0] = Textbox_Option(x(0.5), y(yLevel), '让风子用鼻子喝果汁')
line[line.length] = Link(box[5][0], box[4][0])
box[5][1] = Textbox_Option(x(2) + BUTTONASIDEADJUST, y(yLevel), '“让风子用鼻子喝果汁”升级/达成')
//----------
box[6] = new Array()
yLevel += 2
box[6][0] = Textbox_Option(x(0.5), y(yLevel), '把风子带到别处去')
line[line.length] = Link(box[6][0], box[5][0])
box[6][1] = Textbox_Option(x(2) + BUTTONASIDEADJUST, y(yLevel), '重新选择')
//----------
box[7] = new Array()
yLevel += 2
box[7][0] = Textbox_Option(x(0.5), y(yLevel), '找人来装扮自己')
line[line.length] = Link(box[7][0], box[6][0])
box[7][1] = Textbox_Option(x(2) + BUTTONASIDEADJUST, y(yLevel), '重新选择')
//----------
box[8] = new Array()
yLevel += 2
box[8][0] = Textbox_Option(x(0.5), y(yLevel), '偷换掉风子怀里的雕刻')
line[line.length] = Link(box[8][0], box[7][0])
box[8][1] = Textbox_Option(x(2) + BUTTONASIDEADJUST, y(yLevel), '“偷换掉风子怀里的雕刻”升级/达成')
//----------
box[9] = new Array()
yLevel += 2
box[9][0] = Textbox_Option(x(0.5), y(yLevel), '算了')
line[line.length] = Link(box[9][0], box[8][0])

yLevel += 2
line[line.length] = Link(Point(linx(0.5), liny(0)), box[8][0])
line[line.length] = Link(Point(linx(0.5), liny(0)), Point(linx(3.5), liny(0)), box[3][1])

yLevel += 1
line[line.length] = Link(Point(linx(2), liny(0)), Point(linx(2), liny(-1)))
line[line.length] = Link(Point(linx(2), liny(0)), Point(linx(5), liny(0)), box[1][1])
line[line.length] = Link(Point(linx(3.5), liny(0)), Point(linx(3.5), liny(0)))

//----------
box[10] = new Array()
yLevel += 4
box[10][0] = Textbox_Option(x(0), y(yLevel), '风子大师（八）')
box[10][0].addLink('p50_KFMT8')
box[10][0].addClick(() => {
  gotopage(44, 'p44_retKFMT8')
})
box[10][1] = Textbox_Selection(x(3.5), y(yLevel), '风子陷入幻想（六）')
line[line.length] = Link(
  Point(linx(3.5), liny(0) - LINEBASEHEIGHT / 2),
  Point(linx(3.5), liny(0) - LINEBASEHEIGHT / 2),
)
//----------
box[11] = new Array()
yLevel += 3
box[11][0] = Textbox_Option(x(2), y(yLevel), '恶作剧')
line[line.length] = Link(box[11][0], Point(linx(3), liny(-1)))
box[11][1] = Textbox_Option(x(5), y(yLevel), '不去管她')
line[line.length] = Link(box[11][1], Point(linx(3), liny(-1)))
line[line.length] = Link(Point(linx(3.5), liny(-1)), box[10][1])
//----------
box[12] = new Array()
yLevel += 2
box[12][0] = Textbox_Condition(x(2), y(yLevel), '24日，风子陷入幻想（四）')
line[line.length] = Link(box[12][0], box[11][0])
//----------
box[13] = new Array()
yLevel += 3
box[13][0] = Textbox_Selection(x(0.5), y(yLevel), '恶作剧')
line[line.length] = Link(box[13][0], Point(linx(1.5), liny(-1)))
box[13][1] = Textbox_Selection(x(3.5), y(yLevel), '不去管她', 'r|+未触发')
line[line.length] = Link(box[13][1], Point(linx(1.5), liny(-1)))
line[line.length] = Link(Point(linx(2), liny(-1)), box[12][0])
//----------
box[14] = new Array()
yLevel += 2
CmtSummery = ''
CmtSelect =
  '本日，若选择[找别人来装扮自己]，会跳回重新作选择，这项恶作剧本日无法完成。本日可选特殊恶作剧[给风子吃早苗的面包]，完成一次即可达到“登峰造极”。若24日在分支{风子陷入幻想（四）}选择[不去管她]或者未触发这个分支，直接进入[给风子吃早苗的面包]剧情。<br>本日，[把风子带到别处去]不论是否已经达成，选择后发生在秋生的房间的剧情。（即如果已完成，选择后不会跳回重新作选择）<br>如果4项常规恶作剧全部达成，则成为“风子大师”。'
CmtCaution = ''
CmtOption = ''
CmtEvents = ''
CmtEvntIru = ''
box[14][0] = Textbox_Selection_C(
  x(0.5),
  y(yLevel),
  '风子恶作剧（七）',
  '6',
  CmtSummery,
  CmtSelect,
  CmtCaution,
  CmtOption,
  CmtEvents,
  CmtEvntIru,
  '风子恶作剧（七）',
  0,
)
line[line.length] = Link(box[14][0], box[13][0])
box[14][1] = Textbox_Option(x(3.5), y(yLevel), '“给她吃早苗的面包”达成')
line[line.length] = Link(box[14][1], box[13][1])
//----------
box[15] = new Array()
yLevel += 2
box[15][0] = Textbox_Option(x(0.5), y(yLevel), '让风子用鼻子喝果汁')
line[line.length] = Link(box[15][0], box[14][0])
box[15][1] = Textbox_Option(x(2) + BUTTONASIDEADJUST, y(yLevel), '“让风子用鼻子喝果汁”升级/达成')
//----------
box[16] = new Array()
yLevel += 2
box[16][0] = Textbox_Option(x(0.5), y(yLevel), '把风子带到别处去')
line[line.length] = Link(box[16][0], box[15][0])
box[16][1] = Textbox_Option(x(2) + BUTTONASIDEADJUST, y(yLevel), '“把风子带到别处去”升级/达成')
//----------
box[17] = new Array()
yLevel += 2
box[17][0] = Textbox_Option(x(0.5), y(yLevel), '找人来装扮自己')
line[line.length] = Link(box[17][0], box[16][0])
box[17][1] = Textbox_Option(x(2) + BUTTONASIDEADJUST, y(yLevel), '重新选择')
//----------
box[18] = new Array()
yLevel += 2
box[18][0] = Textbox_Option(x(0.5), y(yLevel), '偷换掉风子怀里的雕刻')
line[line.length] = Link(box[18][0], box[17][0])
box[18][1] = Textbox_Option(x(2) + BUTTONASIDEADJUST, y(yLevel), '“偷换掉风子怀里的雕刻”升级/达成')
//----------
box[19] = new Array()
yLevel += 2
box[19][0] = Textbox_Option(x(0.5), y(yLevel), '给她吃早苗的面包')
line[line.length] = Link(box[19][0], box[18][0])
box[19][1] = Textbox_Option(x(2) + BUTTONASIDEADJUST, y(yLevel), '“给她吃早苗的面包”达成')

yLevel += 2
line[line.length] = Link(Point(linx(0.5), liny(0)), box[18][0])
line[line.length] = Link(Point(linx(0.5), liny(0)), Point(linx(3.5), liny(0)), box[13][1])

yLevel += 1
line[line.length] = Link(Point(linx(2), liny(0)), Point(linx(2), liny(-1)))
line[line.length] = Link(Point(linx(2), liny(0)), Point(linx(5), liny(0)), box[11][1])
line[line.length] = Link(Point(linx(3.5), liny(0)), Point(linx(3.5), liny(0)))
//----------
box[20] = new Array()
yLevel += 4
box[20][0] = Textbox_Option(x(0), y(yLevel), '风子大师（九）')
box[20][0].addLink('p50_KFMT9')
box[20][0].addClick(() => {
  gotopage(44, 'p44_retKFMT9')
})
CmtSummery = ''
CmtSelect =
  '4项常规恶作剧：[让风子用鼻子喝果汁]、[把风子带到别处去]、[找别人来装扮自己]、[偷换掉风子怀里的雕刻]，全部达到“登峰造极”（MAX等级）后（即成为“风子大师”），30日在分支{累了的风子}选择[揉鼻子]，触发最后的隐藏恶作剧剧情，成为“风子召唤使”。'
CmtCaution = ''
CmtOption = ''
CmtEvents = ''
CmtEvntIru = ''
box[20][1] = Textbox_Condition_C(
  x(3),
  y(yLevel),
  '4项常规恶作剧全部达成',
  '7',
  CmtSummery,
  CmtSelect,
  CmtCaution,
  CmtOption,
  CmtEvents,
  CmtEvntIru,
  '4项常规恶作剧全部达成',
  0,
)
line[line.length] = Link(
  Point(linx(3), liny(0) - LINEBASEHEIGHT / 2),
  Point(linx(3), liny(0) - LINEBASEHEIGHT / 2),
)
//----------
box[21] = new Array()
yLevel += 3
box[21][0] = Textbox_Selection(x(2), y(yLevel), '是')
line[line.length] = Link(box[21][0], box[20][1])
box[21][1] = Textbox_Selection(x(4), y(yLevel), '否')
line[line.length] = Link(box[21][1], box[20][1])
//----------
box[22] = new Array()
yLevel += 2
box[22][0] = Textbox_Option(x(2), y(yLevel), '“风子召唤使”达成')
line[line.length] = Link(box[22][0], box[21][0])

yLevel += 2
line[line.length] = Link(Point(linx(2), liny(0)), box[22][0])
line[line.length] = Link(Point(linx(2), liny(0)), Point(linx(4), liny(0)), box[21][1])
line[line.length] = Link(Point(linx(3), liny(0)), Point(linx(3), liny(0)))

hdft['footer'] = Footer(liny(1), 50)
