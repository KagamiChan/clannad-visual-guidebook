// CVG HTML Data Page40 Done By Ligueston 2008.4.17
hdft['header'] = Header(
  'kotomi',
  '一之濑 琴美',
  'Kotomi Ichinose',
  '4月20日～4月23日',
  'April 20th~April 23rd',
)

let yLevel = 0
//----------
box[0] = new Array()
yLevel += 3
box[0][0] = Textbox_Date(x(3), y(yLevel), '4月20日', 'top')
//----------
box[1] = new Array()
yLevel += 2
CmtSummery = ''
CmtSelect = ''
CmtCaution = ''
CmtOption = '-读书'
CmtEvents = '00000100'
CmtEvntIru = '琴美好感度上升1点'
box[1][0] = Textbox_Selection_C(
  x(3),
  y(yLevel),
  '读书的邀请',
  '1',
  CmtSummery,
  CmtSelect,
  CmtCaution,
  CmtOption,
  CmtEvents,
  CmtEvntIru,
  '读书的邀请',
  0,
)
line[line.length] = Link(box[1][0], box[0][0])
//----------
box[2] = new Array()
yLevel += 3
box[2][0] = Textbox_Option(x(2), y(yLevel), '读书')
line[line.length] = Link(box[2][0], box[1][0])
box[2][1] = Textbox_Option(x(4), y(yLevel), '不读')
line[line.length] = Link(box[2][1], box[1][0])
//----------
box[3] = new Array()
yLevel += 3
box[3][0] = Textbox_Date(x(3), y(yLevel), '4月21日', 'bottom')
line[line.length] = Link(box[3][0], box[2][0])
line[line.length] = Link(box[3][0], box[2][1])
//----------
box[4] = new Array()
yLevel += 5
box[4][0] = Textbox_Date(x(3.5), y(yLevel), '4月21日', 'top')
//----------
box[5] = new Array()
yLevel += 2
box[5][0] = Textbox_Selection(x(3.5), y(yLevel), '难得早起的朋也决定该做的事')
line[line.length] = Link(box[5][0], box[4][0])
//----------
box[6] = new Array()
yLevel += 3
box[6][0] = Textbox_Option(x(2), y(yLevel), '迟点再去吧')
line[line.length] = Link(box[6][0], Point(linx(3), liny(-1)))
box[6][1] = Textbox_Option(x(5), y(yLevel), '认认真真起床上学')
line[line.length] = Link(box[6][1], Point(linx(3), liny(-1)))
line[line.length] = Link(Point(linx(3.5), liny(-1)), box[5][0])
//----------
box[7] = new Array()
yLevel += 2
box[7][0] = Textbox_Selection(x(2), y(yLevel), '通学路上，身后传来引擎声')
line[line.length] = Link(box[7][0], box[6][0])
//----------
box[8] = new Array()
yLevel += 3
box[8][0] = Textbox_Option(x(0), y(yLevel), '向右跳')
line[line.length] = Link(box[8][0], box[7][0])
box[8][1] = Textbox_Option(x(2), y(yLevel), '站稳等着它')
line[line.length] = Link(box[8][1], box[7][0])
box[8][2] = Textbox_Option(x(4), y(yLevel), '向左跳')
line[line.length] = Link(box[8][2], box[7][0])
//----------
box[9] = new Array()
yLevel += 2
box[9][0] = Textbox_Selection(x(0), y(yLevel), '事发现场，某路人成为受害者')
line[line.length] = Link(box[9][0], box[8][0])
//----------
box[10] = new Array()
yLevel += 3
box[10][0] = Textbox_Option(x(0), y(yLevel), '离开这里')
line[line.length] = Link(box[10][0], box[9][0])
box[10][1] = Textbox_Option(x(2), y(yLevel), '摇一摇他')
line[line.length] = Link(box[10][1], box[9][0])
//----------
box[11] = new Array()
yLevel += 3
box[11][0] = Textbox_Selection(x(0), y(yLevel), '受害者遗忘的简历')
line[line.length] = Link(box[11][0], box[10][0])
line[line.length] = Link(box[11][0], box[10][1])
box[11][1] = Textbox_Condition(x(5), y(yLevel), '19日，春原准备威胁智代')
line[line.length] = Link(box[11][1], box[6][1])
//----------
box[12] = new Array()
yLevel += 3
box[12][0] = Textbox_Option(x(0), y(yLevel), '查清地址后送给他')
line[line.length] = Link(box[12][0], box[11][0])
box[12][1] = Textbox_Option(x(2), y(yLevel), '撕了扔掉')
line[line.length] = Link(box[12][1], box[11][0])
box[12][2] = Textbox_Selection(x(4), y(yLevel), '劝他放弃')
line[line.length] = Link(box[12][2], box[11][1])
box[12][3] = Textbox_Selection(x(6), y(yLevel), '不去管他', 'r|+未触发')
line[line.length] = Link(box[12][3], box[11][1])
//----------
box[13] = new Array()
yLevel += 2
box[13][0] = Textbox_Selection(x(4), y(yLevel), '坂道上遇到呆望樱花中的智代')
line[line.length] = Link(box[13][0], box[12][2])
//----------
box[14] = new Array()
yLevel += 3
box[14][0] = Textbox_Option(x(3), y(yLevel), '打招呼')
line[line.length] = Link(box[14][0], box[13][0])
box[14][1] = Textbox_Option(x(5), y(yLevel), '不理她')
line[line.length] = Link(box[14][1], box[13][0])

line[line.length] = Link(
  Point(linx(2), liny(4)),
  Point(linx(2), liny(-1)),
  Point(linx(1), liny(-2)),
  box[12][0],
)
line[line.length] = Link(
  Point(linx(2), liny(4)),
  Point(linx(2), liny(-1)),
  Point(linx(1), liny(-2)),
  box[12][1],
)
line[line.length] = Link(
  Point(linx(2), liny(4)),
  Point(linx(2), liny(-1)),
  Point(linx(3), liny(-13)),
  box[8][1],
)
line[line.length] = Link(
  Point(linx(2), liny(4)),
  Point(linx(2), liny(-1)),
  Point(linx(3), liny(-13)),
  box[8][2],
)

line[line.length] = Link(
  Point(linx(2), liny(4)),
  Point(linx(5), liny(4)),
  Point(linx(4), liny(3)),
  box[14][0],
)
line[line.length] = Link(
  Point(linx(2), liny(4)),
  Point(linx(5), liny(4)),
  Point(linx(4), liny(3)),
  box[14][1],
)
line[line.length] = Link(Point(linx(2), liny(4)), Point(linx(5), liny(4)), box[12][3])
//----------
box[15] = new Array()
yLevel += 5
CmtSummery = ''
CmtSelect = ''
CmtCaution = ''
CmtOption = '-稍稍逗她玩一下'
CmtEvents = '00000100'
CmtEvntIru = '琴美好感度上升1点'
box[15][0] = Textbox_Selection_C(
  x(3.5),
  y(yLevel),
  '介意的琴美',
  '1',
  CmtSummery,
  CmtSelect,
  CmtCaution,
  CmtOption,
  CmtEvents,
  CmtEvntIru,
  '介意的琴美',
  0,
)
line[line.length] = Link(box[15][0], Point(linx(3.5), liny(-1)))
//----------
box[16] = new Array()
yLevel += 3
box[16][0] = Textbox_Option(x(2.5), y(yLevel), '回答说『不是』')
line[line.length] = Link(box[16][0], box[15][0])
box[16][1] = Textbox_Option(x(4.5), y(yLevel), '稍稍逗她玩一下')
line[line.length] = Link(box[16][1], box[15][0])
//----------
box[17] = new Array()
yLevel += 3
box[17][0] = Textbox_Date(x(3.5), y(yLevel), '4月23日', 'bottom')
line[line.length] = Link(box[17][0], box[16][0])
line[line.length] = Link(box[17][0], box[16][1])
//----------
box[18] = new Array()
yLevel += 5
box[18][0] = Textbox_Date(x(3), y(yLevel), '4月23日', 'top')
//----------
box[19] = new Array()
yLevel += 2
box[19][0] = Textbox_Selection(x(3), y(yLevel), '学校的广播')
line[line.length] = Link(box[19][0], box[18][0])
//----------
box[20] = new Array()
yLevel += 3
box[20][0] = Textbox_Option(x(2), y(yLevel), '去办公室看看')
line[line.length] = Link(box[20][0], box[19][0])
box[20][1] = Textbox_Option(x(4), y(yLevel), '再等一会儿')
line[line.length] = Link(box[20][1], box[19][0])
//----------
box[21] = new Array()
yLevel += 3
box[21][0] = Textbox_Date(x(3), y(yLevel), '4月25日', 'bottom')
line[line.length] = Link(box[21][0], box[20][0])
line[line.length] = Link(box[21][0], box[20][1])
box[21][0].addTitle('点击转到第41页')
box[21][0].addClick(() => {
  gotopage(41)
})

hdft['footer'] = Footer(liny(2), 40)
