// CVG HTML Data Page61 Done By Ligueston 2008.4.18
hdft['header'] = Header(
  'gunfight',
  '枪战游戏/业余棒球',
  'Gunfight Game / Amateur BaseBall',
  '4月28日～4月29日',
  'April 28th~April 29th',
)

let yLevel = 0
//----------
box[0] = new Array()
yLevel += 3
box[0][0] = Textbox_Date(x(4), y(yLevel), '4月28日', 'top')
//----------
box[1] = new Array()
yLevel += 2
box[1][0] = Textbox_Condition(x(4), y(yLevel), '18日，独自雕刻的风子')
line[line.length] = Link(box[1][0], box[0][0])
//----------
box[2] = new Array()
yLevel += 3
box[2][0] = Textbox_Selection(x(3), y(yLevel), '再看一会儿')
line[line.length] = Link(box[2][0], box[1][0])
box[2][1] = Textbox_Selection(x(5), y(yLevel), '离开', 'r|+未触发')
line[line.length] = Link(box[2][1], box[1][0])
//----------
box[3] = new Array()
yLevel += 2
box[3][0] = Textbox_Selection(x(3), y(yLevel), '考虑邀请风子')
line[line.length] = Link(box[3][0], box[3][0])
//----------
box[4] = new Array()
yLevel += 3
box[4][0] = Textbox_Option(x(2), y(yLevel), '能行')
line[line.length] = Link(box[4][0], box[3][0])
box[4][1] = Textbox_Option(x(4), y(yLevel), '否决')
line[line.length] = Link(box[4][1], box[3][0])
//----------
box[5] = new Array()
yLevel += 2
box[5][0] = Textbox_Selection(x(2), y(yLevel), '春原强迫风子加入')
line[line.length] = Link(box[5][0], box[4][0])
//----------
box[6] = new Array()
yLevel += 3
box[6][0] = Textbox_Option(x(1), y(yLevel), '阻止')
line[line.length] = Link(box[6][0], box[5][0])
box[6][1] = Textbox_Option(x(3), y(yLevel), '看着不管')
line[line.length] = Link(box[6][1], box[5][0])
//----------
box[7] = new Array()
yLevel += 5
box[7][0] = Textbox_Condition(x(4), y(yLevel), '20日，芳野寻求帮手')
line[line.length] = Link(box[7][0], Point(linx(3), liny(-1)), Point(linx(2), liny(-2)), box[6][0])
line[line.length] = Link(box[7][0], Point(linx(3), liny(-1)), Point(linx(2), liny(-2)), box[6][1])
line[line.length] = Link(box[7][0], Point(linx(3), liny(-1)), box[4][1])
line[line.length] = Link(box[7][0], box[2][1])
//----------
box[8] = new Array()
yLevel += 3
box[8][0] = Textbox_Selection(x(3), y(yLevel), '帮忙')
line[line.length] = Link(box[8][0], box[7][0])
box[8][1] = Textbox_Selection(x(5), y(yLevel), '拒绝', 'r|+未触发')
line[line.length] = Link(box[8][1], box[7][0])
//----------
box[9] = new Array()
yLevel += 2
box[9][0] = Textbox_Selection(x(3), y(yLevel), '考虑邀请芳野')
line[line.length] = Link(box[9][0], box[8][0])
//----------
box[10] = new Array()
yLevel += 3
box[10][0] = Textbox_Option(x(2), y(yLevel), '骗他加入')
line[line.length] = Link(box[10][0], box[9][0])
box[10][1] = Textbox_Option(x(4), y(yLevel), '目送')
line[line.length] = Link(box[10][1], box[9][0])
//----------
box[11] = new Array()
yLevel += 4
box[11][0] = Textbox_Date(x(4), y(yLevel), '4月29日', 'bottom')
line[line.length] = Link(box[11][0], Point(linx(3), liny(-1)), box[10][0])
line[line.length] = Link(box[11][0], Point(linx(3), liny(-1)), box[10][1])
line[line.length] = Link(box[11][0], box[8][1])
//----------
box[12] = new Array()
yLevel += 5
box[12][0] = Textbox_Date(x(3), y(yLevel), '4月29日', 'top')
//----------
box[13] = new Array()
yLevel += 2
box[13][0] = Textbox_Condition(x(3), y(yLevel), '28日，春园强迫风子加入')
line[line.length] = Link(box[13][0], box[12][0])
//----------
box[14] = new Array()
yLevel += 3
box[14][0] = Textbox_Selection(x(1), y(yLevel), '阻止')
line[line.length] = Link(box[14][0], box[13][0])
box[14][1] = Textbox_Selection(x(5), y(yLevel), '看着不管', 'r|+未触发')
line[line.length] = Link(box[14][1], box[13][0])
//----------
box[15] = new Array()
yLevel += 2
box[15][0] = Textbox_Condition(x(1), y(yLevel), '28日，考虑邀请芳野')
line[line.length] = Link(box[15][0], box[14][0])
box[15][1] = Textbox_Condition(x(5), y(yLevel), '28日，考虑邀请芳野')
line[line.length] = Link(box[15][1], box[14][1])
//----------
box[16] = new Array()
yLevel += 3
box[16][0] = Textbox_Selection(x(0), y(yLevel), '骗他加入')
line[line.length] = Link(box[16][0], box[15][0])
box[16][1] = Textbox_Selection(x(2), y(yLevel), '目送', 'r|+未触发')
line[line.length] = Link(box[16][1], box[15][0])
box[16][2] = Textbox_Selection(x(4), y(yLevel), '骗他加入')
line[line.length] = Link(box[16][2], box[15][1])
box[16][3] = Textbox_Selection(x(6), y(yLevel), '目送', 'r|+未触发')
line[line.length] = Link(box[16][3], box[15][1])
//----------
box[17] = new Array()
yLevel += 2
box[17][0] = Textbox_Condition(x(0), y(yLevel), '业余棒球 GOOD ENDING')
line[line.length] = Link(box[17][0], box[16][0])
box[17][1] = Textbox_Condition(x(2), y(yLevel), '2分败北（业余棒球 BAD ENDING）')
line[line.length] = Link(box[17][1], box[16][1])
box[17][2] = Textbox_Condition(x(4), y(yLevel), '1分败北（业余棒球 BAD ENDING）')
line[line.length] = Link(box[17][2], box[16][2])
box[17][3] = Textbox_Condition(x(6), y(yLevel), '比赛中断（业余棒球 BAD ENDING）')
line[line.length] = Link(box[17][3], box[16][3])

hdft['footer'] = Footer(liny(1), 61)
