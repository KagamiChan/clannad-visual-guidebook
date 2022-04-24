import { Browser, chromium } from 'playwright-chromium'
import fs from 'fs-extra'
import { range } from 'lodash'
import pMap from 'p-map'
import path from 'path'

const HOST = 'http://localhost:3000'

const main = async () => {
  const browser = await chromium.launch({ headless: false })

  await pMap(range(69), (number) => {
    return snapshotPage(browser, number)
  }, {
    concurrency: 2,
  })

  await browser.close()
}

const snapshotPage = async (browser: Browser, number: number) => {
  const page = await browser.newPage()

  await page.goto(`${HOST}/cvg?page=${number}`)

  await page.waitForLoadState('networkidle')

  await page.isVisible('.btnOri')

  await page.waitForTimeout(1000)

  const content = await page.evaluate(`
    (() => {
      const getProps = input => input.map(i => i.props)
      return ({
        box: box.map(b => getProps(b)),
        line: getProps(line),
        comment: comment.map(c => c.props),
        header: hdft.header.props,
        footer: hdft.footer.props,
        board: board.map(b => b.props),
      })
    })()

  `)

  await fs.outputJSON(path.resolve(__dirname, `../data/${number}.json`), content, { spaces: 2 })

  await page.close()
}

main()
