// CVG HTML Data Page56 Done By Ligueston 2008.4.19
hdft['header'] = Header(
  'nagisa',
  '古河 渚/幸村 俊夫',
  'Nagisa Furukawa / Toshio Yukimura',
  '3对3篮球赛(一)',
  '3 on 3 Basketball Match - Part1',
)

let yLevel = 0
//----------
box[0] = new Array()
yLevel += 3
box[0][0] = Textbox_Option(x(0), y(yLevel), '3对3篮球赛（一）')
box[0][0].addLink('p56_33BB')
box[0][0].addClick(() => {
  gotopage(52, 'p52_ret33BB')
})
CmtSummery = ''
CmtSelect = ''
CmtCaution = ''
CmtOption = `+在新校舍寻找</div></td><td width="${COMMENTBARWIDTH}" height="${COMMENTBARHEIGHT}" valign="bottom" background="${src_commentbase_option_B}" align="center"><div class="cmtopt${sizestr}">去二楼寻找</div></td><td width="${COMMENTBARWIDTH}" height="${COMMENTBARHEIGHT}" valign="bottom" align="center"></td><td width="${COMMENTBASESPACING}"></td></tr></table></td></tr><tr><td background="${src_commentbase_base}"><table border=0 cellpadding=0 cellspacing=0 width="${COMMENTWIDTH}"><tr><td width="${COMMENTBASESPACING}"></td><td width="${
  8 * COMMENTBUTTONSIZE - COMMENTBASESPACING
}" height="${COMMENTBUTTONSIZE}" valign="bottom" align="left" class="comment${sizestr}"><img src="${
  src_comment_mark_un[0]
}" style="margin-right:0px;"><img src="${
  src_comment_mark_un[1]
}" style="margin-right:0px;"><img src="${
  src_comment_mark_un[2]
}" style="margin-right:0px;"><img src="${
  src_comment_mark_un[3]
}" style="margin-right:0px;"><img src="${
  src_comment_mark_un[4]
}" style="margin-right:0px;"><img src="${
  src_comment_mark_un[5]
}" style="margin-right:0px;"><img src="${
  src_comment_mark_un[6]
}" style="margin-right:0px;"><img src="${
  src_comment_mark_en[7]
}" style="margin-right:0px;"></td><td width="${
  COMMENTWIDTH - COMMENTBASESPACING - 8 * COMMENTBUTTONSIZE
}"><table border=0 cellpadding=0 cellspacing=0 height=${COMMENTEVENTHEIGHT} background="${src_commentbase_event}"><tr><td height=${COMMENTEVENTHEIGHT} valign="middle" class="cmtEvnt${sizestr}" width="${
  COMMENTWIDTH - 2 * COMMENTBASESPACING - 8 * COMMENTBUTTONSIZE
}">智代有条件参与毕业典礼</td></tr></table></td><td width="${COMMENTBASESPACING}"></td></tr></table></td></tr><tr><td background="${src_commentbase_base}" height="${
  COMMENTBASESPACING / 2
}"></td></tr><tr><td background="${src_commentbase_base}"><table border=0 cellpadding=0 cellspacing=0 width="${COMMENTWIDTH}"><tr><td width="${COMMENTBASESPACING}"></td><td width="${COMMENTBARWIDTH}" height="${COMMENTBARHEIGHT}" background="${src_commentbase_option_A}" valign="bottom" align="center"><div class="cmtopt${sizestr}">在旧校舍寻找|-去资料室找找`
CmtEvents = '00000001'
CmtEvntIru =
  '美佐枝有条件参与毕业典礼。如果26日在分支前来探亲的芽衣选择好的，则美佐枝已确定出席毕业典礼，此处的选择没有影响'
box[0][1] = Textbox_Selection_C(
  x(3),
  y(yLevel),
  '寻找范围的确定（一）',
  '1',
  CmtSummery,
  CmtSelect,
  CmtCaution,
  CmtOption,
  CmtEvents,
  CmtEvntIru,
  '寻找范围的确定',
  0,
)
line[line.length] = Link(
  Point(linx(3), liny(0) - LINEBASEHEIGHT / 2),
  Point(linx(3), liny(0) - LINEBASEHEIGHT / 2),
)
//----------
box[1] = new Array()
yLevel += 3
box[1][0] = Textbox_Option(x(1), y(yLevel), '在新校舍寻找')
line[line.length] = Link(box[1][0], box[0][1])
box[1][1] = Textbox_Option(x(5), y(yLevel), '在旧校舍寻找')
line[line.length] = Link(box[1][1], box[0][1])
//----------
box[2] = new Array()
yLevel += 2
box[2][0] = Textbox_Selection(x(1), y(yLevel), '寻找范围的确定（二）')
line[line.length] = Link(box[2][0], box[1][0])
box[2][1] = Textbox_Selection(x(5), y(yLevel), '寻找范围的确定（三）')
line[line.length] = Link(box[2][1], box[1][1])
//----------
box[3] = new Array()
yLevel += 3
box[3][0] = Textbox_Option(x(0), y(yLevel), '去二楼寻找')
line[line.length] = Link(box[3][0], box[2][0])
box[3][1] = Textbox_Option(x(2), y(yLevel), '去三楼寻找')
line[line.length] = Link(box[3][1], box[2][0])
box[3][2] = Textbox_Option(x(4), y(yLevel), '去空教室找找')
line[line.length] = Link(box[3][2], box[2][1])
box[3][3] = Textbox_Option(x(6), y(yLevel), '去资料室找找')
line[line.length] = Link(box[3][3], box[2][1])
//----------
box[4] = new Array()
yLevel += 2
box[4][0] = Textbox_Block(x(0), y(yLevel), 'A')
box[4][0].addLink('p56_retA')
box[4][0].addClick(() => {
  gotolink('p56_A')
})
line[line.length] = Link(box[4][0], box[3][0])
box[4][1] = Textbox_Block(x(2), y(yLevel), 'B')
box[4][1].addLink('p56_retB')
box[4][1].addClick(() => {
  gotopage(57, 'p57_B')
})
line[line.length] = Link(box[4][1], box[3][1])
box[4][2] = Textbox_Block(x(4), y(yLevel), 'C')
box[4][2].addLink('p56_retC')
box[4][2].addClick(() => {
  gotopage(57, 'p57_C')
})
line[line.length] = Link(box[4][2], box[3][2])
box[4][3] = Textbox_Block(x(6), y(yLevel), 'D')
box[4][3].addLink('p56_retD')
box[4][3].addClick(() => {
  gotopage(58, 'p58_D')
})
line[line.length] = Link(box[4][3], box[3][3])

yLevel += 3
line[line.length] = Link(Point(linx(1), liny(0)), box[4][0])
line[line.length] = Link(Point(linx(1), liny(0)), box[4][1])
line[line.length] = Link(Point(linx(1), liny(0)), Point(linx(5), liny(0)), box[4][2])
line[line.length] = Link(Point(linx(1), liny(0)), Point(linx(5), liny(0)), box[4][3])
line[line.length] = Link(Point(linx(3), liny(0)), Point(linx(3), liny(0)))
//----------
box[5] = new Array()
yLevel += 4
box[5][0] = Textbox_Block(x(0), y(yLevel), 'A')
box[5][0].addLink('p56_A')
box[5][0].addClick(() => {
  gotolink('p56_retA')
})
CmtSummery = ''
CmtSelect =
  '{已经来过新校舍二楼}即今日在3对3篮球赛（一）中触发过分支{寻找范围的确定（二）}并且选择了[去二楼寻找]。分支{寻找范围的确定（二）和（三）}的四个选项[去二楼寻找]、[去三楼寻找]、[去空教室找找]、[去资料室找找]只有第一次选择时才会发生剧情。'
CmtCaution = ''
CmtOption = ''
CmtEvents = ''
CmtEvntIru = ''
box[5][1] = Textbox_Condition_C(
  x(5),
  y(yLevel),
  '已经来过新校舍二楼',
  '2',
  CmtSummery,
  CmtSelect,
  CmtCaution,
  CmtOption,
  CmtEvents,
  CmtEvntIru,
  '已经来过新校舍二楼',
  0,
)
line[line.length] = Link(
  Point(linx(5), liny(0) - LINEBASEHEIGHT / 2),
  Point(linx(5), liny(0) - LINEBASEHEIGHT / 2),
)
board[board.length] = Board(liny(0), liny(25))
//----------
box[6] = new Array()
yLevel += 3
box[6][0] = Textbox_Selection(x(4), y(yLevel), '否')
line[line.length] = Link(box[6][0], box[5][1])
box[6][1] = Textbox_Selection(x(6), y(yLevel), '是')
line[line.length] = Link(box[6][1], box[5][1])
//----------
box[7] = new Array()
yLevel += 2
box[7][0] = Textbox_Condition(x(4), y(yLevel), '17日，春原挑战智代（四回目）')
line[line.length] = Link(box[7][0], box[6][0])
//----------
box[8] = new Array()
yLevel += 3
box[8][0] = Textbox_Selection(x(3), y(yLevel), '跟着他去')
line[line.length] = Link(box[8][0], box[7][0])
box[8][1] = Textbox_Selection(x(5), y(yLevel), '不去管他', 'r|+未触发')
line[line.length] = Link(box[8][1], box[7][0])
//----------
box[9] = new Array()
yLevel += 2
CmtSummery = ''
CmtSelect = ''
CmtCaution = ''
CmtOption = '+能行|-最后做一次蠢事'
CmtEvents = '00000001'
CmtEvntIru = '智代参与毕业典礼'
box[9][0] = Textbox_Selection_C(
  x(3),
  y(yLevel),
  '考虑邀请智代',
  '3',
  CmtSummery,
  CmtSelect,
  CmtCaution,
  CmtOption,
  CmtEvents,
  CmtEvntIru,
  '考虑邀请智代',
  0,
)
line[line.length] = Link(box[9][0], box[8][0])
//----------
box[10] = new Array()
yLevel += 3
box[10][0] = Textbox_Option(x(2), y(yLevel), '能行')
line[line.length] = Link(box[10][0], box[9][0])
box[10][1] = Textbox_Option(x(4), y(yLevel), '再考虑一下')
line[line.length] = Link(box[10][1], box[9][0])
//----------
box[11] = new Array()
yLevel += 2
box[11][0] = Textbox_Selection(x(2), y(yLevel), '说服智代的理由')
line[line.length] = Link(box[11][0], box[10][0])
//----------
box[12] = new Array()
yLevel += 3
box[12][0] = Textbox_Option(x(0), y(yLevel), '最后做一次蠢事')
line[line.length] = Link(box[12][0], box[11][0])
box[12][1] = Textbox_Option(x(2), y(yLevel), '避免运动不足')
line[line.length] = Link(box[12][1], box[11][0])
box[12][2] = Textbox_Option(x(4), y(yLevel), '卖我们个人情')
line[line.length] = Link(box[12][2], box[11][0])
//----------
box[13] = new Array()
yLevel += 2
box[13][0] = Textbox_Option(x(0), y(yLevel), '智代成为参赛伙伴')
line[line.length] = Link(box[13][0], box[12][0])
line[line.length] = Link(Point(linx(0), liny(1)), Point(linx(0), liny(1)))
//----------
box[14] = new Array()
yLevel += 3
CmtSummery = ''
CmtSelect =
  '再次进入3对3篮球赛（一），即跳回到28日分支{寻找范围的确定（一）}。接下来的{3对3篮球赛（一）}同样是这个意思。'
CmtCaution = ''
CmtOption = ''
CmtEvents = ''
CmtEvntIru = ''
box[14][0] = Textbox_Option_C(
  x(5),
  y(yLevel),
  '3对3篮球赛（一）',
  '4',
  CmtSummery,
  CmtSelect,
  CmtCaution,
  CmtOption,
  CmtEvents,
  CmtEvntIru,
  '3对3篮球赛（一）',
  0,
)
box[14][0].addClick(() => {
  gotolink('p56_33BB')
})
line[line.length] = Link(box[14][0], Point(linx(4), liny(-1)), Point(linx(3), liny(-2)), box[12][1])
line[line.length] = Link(box[14][0], Point(linx(4), liny(-1)), Point(linx(3), liny(-2)), box[12][2])
line[line.length] = Link(box[14][0], Point(linx(4), liny(-1)), Point(linx(5), liny(-7)), box[10][1])
line[line.length] = Link(box[14][0], Point(linx(4), liny(-1)), box[8][1])
line[line.length] = Link(box[14][0], box[6][1])
line[line.length] = Link(Point(linx(5), liny(1)), Point(linx(5), liny(1)))

hdft['footer'] = Footer(liny(2), 56)
