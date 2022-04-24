// CVG HTML Data Page45 Done By Shakugan_No_Kaluote 2008.4.20
hdft['header'] = Header('fuuko', '伊吹 风子', 'Fuuko Ibuki', '5月2日～5月11日', 'May 2nd~May 11th')

let yLevel = 0
//----------
box[0] = new Array()
yLevel += 3
box[0][0] = Textbox_Date(x(3), y(yLevel), '5月2日', 'top')
//----------
box[1] = new Array()
yLevel += 2
box[1][0] = Textbox_Selection(x(3), y(yLevel), '老师的选择')
line[line.length] = Link(box[1][0], box[0][0])
//----------
box[2] = new Array()
yLevel += 3
box[2][0] = Textbox_Option(x(2), y(yLevel), '去找别人')
line[line.length] = Link(box[2][0], box[1][0])
box[2][1] = Textbox_Option(x(4), y(yLevel), '继续说服')
line[line.length] = Link(box[2][1], box[1][0])
//----------
box[3] = new Array()
yLevel += 3
box[3][0] = Textbox_Date(x(3), y(yLevel), '5月3日', 'bottom')
line[line.length] = Link(box[3][0], box[2][0])
line[line.length] = Link(box[3][0], box[2][1])
//----------
box[4] = new Array()
yLevel += 5
box[4][0] = Textbox_Date(x(3), y(yLevel), '5月3日', 'top')
//----------
box[5] = new Array()
yLevel += 2
box[5][0] = Textbox_Condition(x(3), y(yLevel), '2日，老师的选择')
line[line.length] = Link(box[5][0], box[4][0])
//----------
box[6] = new Array()
yLevel += 3
box[6][0] = Textbox_Selection(x(2), y(yLevel), '去找别人')
line[line.length] = Link(box[6][0], box[5][0])
box[6][1] = Textbox_Selection(x(4), y(yLevel), '继续说服')
line[line.length] = Link(box[6][1], box[5][0])
//----------
box[7] = new Array()
yLevel += 2
CmtSummery = ''
CmtSelect = ''
CmtCaution =
  '伊吹风子线路中期特殊剧情。发生于3日上午，触发条件与2日风子线分支的选择有关。所有选项均不影响剧情发展。特别授课教师推选相关攻略请参见P47。'
CmtOption = ''
CmtEvents = ''
CmtEvntIru = ''
box[7][0] = Textbox_Option_C(
  x(2),
  y(yLevel),
  '特别授课教师推选',
  '1',
  CmtSummery,
  CmtSelect,
  CmtCaution,
  CmtOption,
  CmtEvents,
  CmtEvntIru,
  '特别授课教师推选',
  0,
)
box[7][0].addLink('p45_retSTCHR')
box[7][0].addClick(() => {
  gotopage(47, 'p47_STCHR')
})
line[line.length] = Link(box[7][0], box[6][0])
//----------
box[8] = new Array()
yLevel += 3
box[8][0] = Textbox_Date(x(3), y(yLevel), '5月11日', 'bottom')
line[line.length] = Link(box[8][0], box[7][0])
line[line.length] = Link(box[8][0], box[6][1])
//----------
box[9] = new Array()
yLevel += 5
box[9][0] = Textbox_Date(x(3), y(yLevel), '5月11日', 'top')
//----------
box[10] = new Array()
yLevel += 2
box[10][0] = Textbox_Selection(x(3), y(yLevel), '熟睡的风子')
line[line.length] = Link(box[10][0], box[9][0])
//----------
box[11] = new Array()
yLevel += 3
box[11][0] = Textbox_Option(x(2), y(yLevel), '代替他', 'l|风子')
line[line.length] = Link(box[11][0], box[10][0])
box[11][1] = Textbox_Option(x(4), y(yLevel), '交给大叔', 'r|风子')
line[line.length] = Link(box[11][1], box[10][0])
//----------
box[12] = new Array()
yLevel += 3
box[12][0] = Textbox_Date(x(3), y(yLevel), '风子', 'bottom')
box[12][0].addTitle('点击转到第46页')
box[12][0].addClick(() => {
  gotopage(46)
})
line[line.length] = Link(box[12][0], box[11][0])
line[line.length] = Link(box[12][0], box[11][1])

hdft['footer'] = Footer(liny(1), 45)
