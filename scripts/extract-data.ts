import { chromium } from 'playwright-chromium'

const HOST = 'http://127.0.0.1:5000'

const main = async () => {
  const browser = await chromium.launch({ headless: false })

  const page = await browser.newPage()

  await page.goto(`${HOST}/cvg.htm?page=2`)

  await page.waitForLoadState('networkidle')

  const content = await page.evaluate('window.hdft["header"]')

  console.log(content)

  await browser.close()
}

main()
