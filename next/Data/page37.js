// CVG HTML Data Page37 Done By goodbest 2008.4.18
hdft['header'] = Header(
  'kappei',
  '柊　胜平',
  'KappeiHiiragii',
  '4月25日～胜平',
  'April 25th~Kappei',
)

let yLevel = 0
//----------
box[0] = new Array()
yLevel += 3
box[0][0] = Textbox_Date(x(3.5), y(yLevel), '4月25日', 'top')
//----------
box[1] = new Array()
yLevel += 2
box[1][0] = Textbox_Condition(x(3.5), y(yLevel), '23日，无聊的午后时光')
line[line.length] = Link(box[1][0], box[0][0])
//----------
box[2] = new Array()
yLevel += 3
box[2][0] = Textbox_Selection(x(2.5), y(yLevel), '转换一下心情')
line[line.length] = Link(box[2][0], box[1][0])
box[2][1] = Textbox_Selection(x(4.5), y(yLevel), '睡觉', 'r|+未触发')
line[line.length] = Link(box[2][1], box[1][0])
//----------
box[3] = new Array()
yLevel += 2
box[3][0] = Textbox_Selection(x(2.5), y(yLevel), '走廊中第N次遇到风子')
line[line.length] = Link(box[3][0], box[2][0])
//----------
box[4] = new Array()
yLevel += 3
box[4][0] = Textbox_Option(x(1.5), y(yLevel), '叫住她')
line[line.length] = Link(box[4][0], box[3][0])
box[4][1] = Textbox_Option(x(3.5), y(yLevel), '暂时不管她')
line[line.length] = Link(box[4][1], box[3][0])
//----------
box[5] = new Array()
yLevel += 2
box[5][0] = Textbox_Option(x(1.5), y(yLevel), '风子大师（五）')
box[5][0].addLink('p37_retKFMT5')
box[5][0].addClick(() => {
  gotopage(49, 'p49_KFMT5')
})
line[line.length] = Link(box[5][0], box[4][0])
//----------
box[6] = new Array()
yLevel += 4
box[6][0] = Textbox_Date(x(3.5), y(yLevel), '胜平', 'bottom')
line[line.length] = Link(box[6][0], Point(linx(2.5), liny(-1)), box[5][0])
line[line.length] = Link(box[6][0], Point(linx(2.5), liny(-1)), box[4][1])
line[line.length] = Link(box[6][0], box[2][1])
//----------
box[7] = new Array()
yLevel += 5
box[7][0] = Textbox_Date(x(3.5), y(yLevel), '胜平', 'top')
//----------
box[8] = new Array()
yLevel += 2
box[8][0] = Textbox_Selection(x(3.5), y(yLevel), '无处可归的胜平')
line[line.length] = Link(box[8][0], box[7][0])
//----------
box[9] = new Array()
yLevel += 3
box[9][0] = Textbox_Option(x(2.5), y(yLevel), '给他介绍住处', 'l|胜平')
line[line.length] = Link(box[9][0], box[8][0])
box[9][1] = Textbox_Option(x(4.5), y(yLevel), '的确...是没有办法啊...', 'r|胜平')
line[line.length] = Link(box[9][1], box[8][0])
//----------
box[10] = new Array()
yLevel += 2
box[10][0] = Textbox_Condition(x(2.5), y(yLevel), '20日，野芳寻求帮手')
line[line.length] = Link(box[10][0], box[9][0])
//----------
box[11] = new Array()
yLevel += 3
box[11][0] = Textbox_Selection(x(1.5), y(yLevel), '帮忙')
line[line.length] = Link(box[11][0], box[10][0])
box[11][1] = Textbox_Selection(x(3.5), y(yLevel), '拒绝', 'r|+未触发')
line[line.length] = Link(box[11][1], box[10][0])
//----------
box[12] = new Array()
yLevel += 2
box[12][0] = Textbox_Option(x(1.5), y(yLevel), '胜平“光”获得')
line[line.length] = Link(box[12][0], box[11][0])
//----------
box[13] = new Array()
yLevel += 1
box[13][0] = Textbox_Quit(x(3.5), y(yLevel), '公共 BAD ENDING')
line[line.length] = Link(box[13][0], box[11][1])
line[line.length] = Link(box[13][0], box[9][1])
//----------
box[14] = new Array()
yLevel += 1
box[14][0] = Textbox_Quit(x(1.5), y(yLevel), '胜平 GOOD ENDING')
line[line.length] = Link(box[14][0], box[12][0])

hdft['footer'] = Footer(liny(1), 37)
