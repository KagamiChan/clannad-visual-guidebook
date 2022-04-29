import pMap from 'p-map'
import path from 'path'
import glob from 'glob'
import { outputJson, readJSON, writeFile } from 'fs-extra'

const main = async () => {
  const files = glob.sync(path.resolve(__dirname, '../extracted/*.json').replaceAll('\\', '/'))

  let box: any[] = []
  let line: any[] = []
  let comment: any[] = []
  let header: any[] = []
  let footer: any[] = []
  let board: any[] = []

  await pMap(files, async (f) => {
    const content = await readJSON(f, 'utf8')

    box = box.concat(content.box)
    line = line.concat(content.line)
    comment = comment.concat(content.comment)
    header = header.concat(content.header)
    footer = footer.concat(content.footer)
    board = board.concat(content.board)
  })

  await outputJson(path.resolve(__dirname, '../merged.json'), { box, line, comment, header, footer, board }, { spaces: 2 })
}


main()
