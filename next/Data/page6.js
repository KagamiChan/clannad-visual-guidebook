// CVG HTML Data Page6 Done By Ligueston 2008.4.5
hdft['header'] = Header('public', '公共路线', 'Public Route', '4月17日（二）', 'April 17th~Part 2')

let yLevel = 0
//----------
box[0] = new Array()
yLevel += 3
box[0][0] = Textbox_Condition(x(3.5), y(yLevel), '16日，古河重新创立话剧社')
line[line.length] = Link(
  Point(linx(3.5), liny(0) - LINEBASEHEIGHT / 2),
  Point(linx(3.5), liny(0) - LINEBASEHEIGHT / 2),
)
line[line.length - 1].addTitle('点击转回第5页')
line[line.length - 1].addClick(() => {
  gotopage(5)
})
//----------
box[1] = new Array()
yLevel += 3
box[1][0] = Textbox_Selection(x(2), y(yLevel), '帮忙')
box[1][1] = Textbox_Selection(x(5), y(yLevel), '让她一个人做', 'r|+未触发')
line[line.length] = Link(box[1][0], Point(linx(3), liny(-1)))
line[line.length] = Link(box[1][1], Point(linx(3), liny(-1)))
line[line.length] = Link(Point(linx(3.5), liny(-1)), box[0][0])
//----------
box[2] = new Array()
yLevel += 2
box[2][0] = Textbox_Selection(x(2), y(yLevel), '宣传海报缺少的东西')
line[line.length] = Link(box[2][0], box[1][0])
box[2][1] = Textbox_Block(x(5), y(yLevel), 'B')
box[2][1].addLink('p6_retB')
box[2][1].addClick(() => {
  gotolink('p6_B')
})
line[line.length] = Link(box[2][1], box[1][1])
//----------
box[3] = new Array()
yLevel += 3
box[3][0] = Textbox_Option(x(0), y(yLevel), '诱惑力')
line[line.length] = Link(box[3][0], box[2][0])
box[3][1] = Textbox_Option(x(2), y(yLevel), '插图')
line[line.length] = Link(box[3][1], box[2][0])
box[3][2] = Textbox_Option(x(4), y(yLevel), '合作伙伴')
line[line.length] = Link(box[3][2], box[2][0])
//----------
box[4] = new Array()
yLevel += 3
box[4][0] = Textbox_Block(x(2), y(yLevel), 'A')
box[4][0].addLink('p6_retA')
box[4][0].addClick(() => {
  gotolink('p6_A')
})
line[line.length] = Link(box[4][0], box[3][0])
line[line.length] = Link(box[4][0], box[3][1])
line[line.length] = Link(box[4][0], box[3][2])
CmtSummery = ''
CmtSelect = ''
CmtCaution = ''
CmtOption = '-向她搭话'
CmtEvents = '10000000'
CmtEvntIru = '美佐枝参与64HIT'
box[4][1] = Textbox_Selection_C(
  x(5),
  y(yLevel),
  '宿舍走廊遇见美佐枝',
  '3',
  CmtSummery,
  CmtSelect,
  CmtCaution,
  CmtOption,
  CmtEvents,
  CmtEvntIru,
  '宿舍走廊遇见美佐枝',
  0,
)
line[line.length] = Link(box[4][1], box[2][1])
//----------
box[5] = new Array()
yLevel += 3
box[5][0] = Textbox_Option(x(4), y(yLevel), '向她搭话', 'l|美佐枝')
line[line.length] = Link(box[5][0], box[4][1])
box[5][1] = Textbox_Option(x(6), y(yLevel), '目送她离去', 'r|美佐枝')
line[line.length] = Link(box[5][1], box[4][1])
//----------
box[6] = new Array()
yLevel += 4
box[6][0] = Textbox_Option(x(3.5), y(yLevel), '幻想世界（二）')
line[line.length] = Link(box[6][0], Point(linx(3.5), liny(-1)))
line[line.length] = Link(Point(linx(5), liny(-1)), box[5][0])
line[line.length] = Link(Point(linx(5), liny(-1)), box[5][1])
line[line.length] = Link(Point(linx(5), liny(-1)), Point(linx(2), liny(-1)), box[4][0])
//----------
box[7] = new Array()
yLevel += 2
box[7][0] = Textbox_Date(x(3.5), y(yLevel), '4月18日', 'bottom')
line[line.length] = Link(box[7][0], box[6][0])
box[7][0].addTitle('点击转到第7页')
box[7][0].addClick(() => {
  gotopage(7)
})
//----------
box[8] = new Array()
yLevel += 4
box[8][0] = Textbox_Block(x(0), y(yLevel), 'A')
box[8][0].addLink('p6_A')
box[8][0].addClick(() => {
  gotolink('p6_retA')
})
CmtSummery =
  '等候做值日生的古河许久，朋也决定出去找她。走过隔壁教室，朋也推开门，发现窗边独自坐着一个陌生的女生，正在认真地用手中的木片雕刻着什么。'
CmtSelect =
  '若在16日的分支{古河重新创立话剧社}中选择[帮助]，就会以这样的剧情安排与风子相遇。在以下连续的三个分支中，选择出去[找找她]、[去隔壁的教室看一下]、[向她搭话]（即不跳出风子线），则18日您才可能认识风子（同样，即使进入风子线，朋也仍不知道风子的姓名）。'
CmtCaution = ''
CmtOption = '+出去找找她|+去隔壁的教室看一下|-向她搭话'
CmtEvents = '11111010'
CmtEvntIru =
  '风子有条件参与64HIT、有纪宁的咒语、体育仓库事件、3对3篮球赛、伪女友事件和业余棒球；风子大师进入必选'
box[8][1] = Textbox_Selection_C(
  x(4),
  y(yLevel),
  '等候做值日生的古河',
  '4',
  CmtSummery,
  CmtSelect,
  CmtCaution,
  CmtOption,
  CmtEvents,
  CmtEvntIru,
  '与风子相遇（风子线已进入版）',
  0,
)
line[line.length] = Link(
  Point(linx(4), liny(0) - LINEBASEHEIGHT / 2),
  Point(linx(4), liny(0) - LINEBASEHEIGHT / 2),
)
board[board.length] = Board(liny(0), liny(18))
//----------
box[9] = new Array()
yLevel += 3
box[9][0] = Textbox_Option(x(3), y(yLevel), '出去找找她', 'l|风子')
line[line.length] = Link(box[9][0], box[8][1])
box[9][1] = Textbox_Option(x(5), y(yLevel), '继续等下去', 'r|风子')
line[line.length] = Link(box[9][1], box[8][1])
//----------
box[10] = new Array()
yLevel += 2
box[10][0] = Textbox_Selection(x(3), y(yLevel), '出去寻找古河')
line[line.length] = Link(box[10][0], box[9][0])
//----------
box[11] = new Array()
yLevel += 3
box[11][0] = Textbox_Option(x(2), y(yLevel), '去隔壁的教室看一下', 'l|风子')
line[line.length] = Link(box[11][0], box[10][0])
box[11][1] = Textbox_Option(x(4), y(yLevel), '到其他的地方找找看', 'r|风子')
line[line.length] = Link(box[11][1], box[10][0])
//----------
box[12] = new Array()
yLevel += 2
box[12][0] = Textbox_Selection(x(2), y(yLevel), '隔壁教室里的陌生女孩')
line[line.length] = Link(box[12][0], box[11][0])
//----------
box[13] = new Array()
yLevel += 3
box[13][0] = Textbox_Option(x(1), y(yLevel), '向她搭话', 'l|风子')
line[line.length] = Link(box[13][0], box[12][0])
box[13][1] = Textbox_Option(x(3), y(yLevel), '离开', 'r|风子')
line[line.length] = Link(box[13][1], box[12][0])
yLevel += 4
line[line.length] = Link(Point(linx(3), liny(0)), Point(linx(2), liny(-1)), box[13][0])
line[line.length] = Link(Point(linx(3), liny(0)), Point(linx(2), liny(-1)), box[13][1])
line[line.length] = Link(Point(linx(3), liny(0)), box[11][1])
line[line.length] = Link(Point(linx(3), liny(0)), Point(linx(5), liny(0)), box[9][1])
line[line.length] = Link(Point(linx(4), liny(0)), Point(linx(4), liny(0)))
//----------
box[14] = new Array()
yLevel += 3
box[14][0] = Textbox_Block(x(0), y(yLevel), 'B')
box[14][0].addLink('p6_B')
box[14][0].addClick(() => {
  gotolink('p6_retB')
})
CmtSummery =
  '春原仍然没有从打击中恢复，朋也决定独自打发放学后的时光。来到旧校舍，走进本以为没人的空教室，朋也发现原来窗边独自坐着一个女生，正在认真地用手中的木片雕刻着什么。'
CmtSelect =
  '16日无论是否帮助了渚重建话剧社，您都可能在17日遇到风子。<br>如果在16日分支{古河重新创立话剧社}中选择让她一个人做或者未触发这个选项（即没有进入进入风子线和渚线），则17日午后，在以下连续的三个分支中，选择[在校内闲逛]、[睡一觉]、[向她搭话]，则18日您仍有机会认识风子。和风子线进入版不同的是，这之后即使认识了风子也不能进入风子角色剧情。'
CmtCaution =
  '风子是CLANNAD中最为活跃的角色。除琴美好感度以外，所有的特殊事件都有风子参与，而18日认识风子是风子参与这些事件的关键节点，因此“认识风子”很重要。'
CmtOption = '+在校内闲逛|+向她搭话|-睡一觉'
CmtEvents = '11111010'
CmtEvntIru =
  '风子有条件参与64HIT、有纪宁的咒语、体育仓库事件、3对3篮球赛、伪女友事件和业余棒球；风子大师进入必选'
box[14][1] = Textbox_Selection_C(
  x(4),
  y(yLevel),
  '放学后，一个人的朋也',
  '5',
  CmtSummery,
  CmtSelect,
  CmtCaution,
  CmtOption,
  CmtEvents,
  CmtEvntIru,
  '与风子相遇（风子线未进入版）',
  0,
)
line[line.length] = Link(
  Point(linx(4), liny(0) - LINEBASEHEIGHT / 2),
  Point(linx(4), liny(0) - LINEBASEHEIGHT / 2),
)
board[board.length] = Board(liny(0), liny(18))
//----------
box[15] = new Array()
yLevel += 3
box[15][0] = Textbox_Option(x(3), y(yLevel), '在校内闲逛')
line[line.length] = Link(box[15][0], box[14][1])
box[15][1] = Textbox_Option(x(5), y(yLevel), '在校外闲逛')
line[line.length] = Link(box[15][1], box[14][1])
//----------
box[16] = new Array()
yLevel += 2
box[16][0] = Textbox_Selection(x(3), y(yLevel), '经过旧校舍的空教室')
line[line.length] = Link(box[16][0], box[15][0])
//----------
box[17] = new Array()
yLevel += 3
box[17][0] = Textbox_Option(x(2), y(yLevel), '睡一觉')
line[line.length] = Link(box[17][0], box[16][0])
box[17][1] = Textbox_Option(x(4), y(yLevel), '在校外闲逛')
line[line.length] = Link(box[17][1], box[16][0])
//----------
box[18] = new Array()
yLevel += 2
box[18][0] = Textbox_Selection(x(2), y(yLevel), '空教室里的陌生女孩')
line[line.length] = Link(box[18][0], box[17][0])
//----------
box[19] = new Array()
yLevel += 3
box[19][0] = Textbox_Option(x(1), y(yLevel), '向她搭话')
line[line.length] = Link(box[19][0], box[18][0])
box[19][1] = Textbox_Option(x(3), y(yLevel), '离开')
line[line.length] = Link(box[19][1], box[18][0])
yLevel += 4
line[line.length] = Link(Point(linx(3), liny(0)), Point(linx(2), liny(-1)), box[19][0])
line[line.length] = Link(Point(linx(3), liny(0)), Point(linx(2), liny(-1)), box[19][1])
line[line.length] = Link(Point(linx(3), liny(0)), box[17][1])
line[line.length] = Link(Point(linx(3), liny(0)), Point(linx(5), liny(0)), box[15][1])
line[line.length] = Link(Point(linx(4), liny(0)), Point(linx(4), liny(0)))

hdft['footer'] = Footer(liny(1), 6)
