// CVG HTML Data Page26 Done By Shakugan_No_Kaluote 2008.4.16
hdft['header'] = Header('misae', '相乐 美佐枝', 'Misae Sagara', '4月21日', 'April 21st')

let yLevel = 0
//----------
box[0] = new Array()
yLevel += 3
box[0][0] = Textbox_Date(x(3), y(yLevel), '4月21日', 'top')
//----------
box[1] = new Array()
yLevel += 2
CmtSummery = '朋也再次造访美佐枝的房间，他决定正视自己的感情。'
CmtSelect =
  '此处连续三个分支，一共有五个不同的选择项：[严厉]、[战斗力很高]、[温柔]、[为我操心]、[被窝中的味道很香]。与图中流程的表达不同的是，在{喜欢美佐枝的理由（一）}和{喜欢美佐枝的理由（一）}选择了[战斗力很高]或[温柔]，接下来的分支都会出现而不是直接Bad Ending。在下一个分支中，上一次选择了的选项将被[为我操心]、[被窝中的味道很香]依次替代。三个分支只有按顺序选择[严厉]、[为我操心]、[被窝中的味道很香]才能达成美佐枝Good Ending，否则，将在三个分支结束后，进入Bad Ending。'
CmtCaution = ''
CmtOption = ''
CmtEvents = ''
CmtEvntIru = ''
box[1][0] = Textbox_Selection_C(
  x(3),
  y(yLevel),
  '喜欢美佐枝的理由（一）',
  '1',
  CmtSummery,
  CmtSelect,
  CmtCaution,
  CmtOption,
  CmtEvents,
  CmtEvntIru,
  '喜欢美佐枝的理由（一）～（三）',
  0,
)
line[line.length] = Link(box[1][0], box[0][0])
//----------
box[2] = new Array()
yLevel += 3
box[2][0] = Textbox_Option(x(1), y(yLevel), '严厉', 'l|美佐枝')
line[line.length] = Link(box[2][0], box[1][0])
box[2][1] = Textbox_Option(x(3), y(yLevel), '战斗力很高', 'l|-美佐枝')
line[line.length] = Link(box[2][1], box[1][0])
box[2][2] = Textbox_Option(x(5), y(yLevel), '温柔', 'r|美佐枝')
line[line.length] = Link(box[2][2], box[1][0])
//----------
box[3] = new Array()
yLevel += 3
box[3][0] = Textbox_Quit(x(4), y(yLevel), '公共 Bad Ending')
line[line.length] = Link(box[3][0], box[2][1])
line[line.length] = Link(box[3][0], box[2][2])
//----------
box[4] = new Array()
yLevel += 1
box[4][0] = Textbox_Selection(x(1), y(yLevel), '喜欢美佐枝的理由（二）')
line[line.length] = Link(box[4][0], box[2][0])
//----------
box[5] = new Array()
yLevel += 3
box[5][0] = Textbox_Option(x(1), y(yLevel), '为我操心', 'l|美佐枝')
line[line.length] = Link(box[5][0], box[4][0])
box[5][1] = Textbox_Option(x(3), y(yLevel), '战斗力很高', 'l|-美佐枝')
line[line.length] = Link(box[5][1], box[4][0])
box[5][2] = Textbox_Option(x(5), y(yLevel), '温柔', 'r|美佐枝')
line[line.length] = Link(box[5][2], box[4][0])
//----------
box[6] = new Array()
yLevel += 3
box[6][0] = Textbox_Quit(x(4), y(yLevel), '公共 Bad Ending')
line[line.length] = Link(box[6][0], box[5][1])
line[line.length] = Link(box[6][0], box[5][2])
//----------
box[7] = new Array()
yLevel += 1
box[7][0] = Textbox_Selection(x(1), y(yLevel), '喜欢美佐枝的理由（三）')
line[line.length] = Link(box[7][0], box[5][0])
//----------
box[8] = new Array()
yLevel += 3
box[8][0] = Textbox_Option(x(1), y(yLevel), '被窝中的味道很香', 'l|美佐枝')
line[line.length] = Link(box[8][0], box[7][0])
box[8][1] = Textbox_Option(x(3), y(yLevel), '战斗力很高', 'l|-美佐枝')
line[line.length] = Link(box[8][1], box[7][0])
box[8][2] = Textbox_Option(x(5), y(yLevel), '温柔', 'r|美佐枝')
line[line.length] = Link(box[8][2], box[7][0])
//----------
box[9] = new Array()
yLevel += 2
box[9][0] = Textbox_Quit(x(1), y(yLevel), '美佐枝 Good Ending')
line[line.length] = Link(box[9][0], box[8][0])
//----------
box[10] = new Array()
yLevel += 1
box[10][0] = Textbox_Quit(x(4), y(yLevel), '公共 Bad Ending')
line[line.length] = Link(box[10][0], box[8][1])
line[line.length] = Link(box[10][0], box[8][2])

hdft['footer'] = Footer(liny(1), 26)
