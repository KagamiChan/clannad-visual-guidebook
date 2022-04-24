import pMap from 'p-map'
import path from 'path'
import glob from 'glob'
import { transform } from 'lebab'
import { readFile, writeFile } from 'fs-extra'


const transforms = [
  'class',
  'template',
  'arrow',
  'arrow-return',
  'let',
  'default-param',
  'destruct-param',
  'arg-spread',
  'arg-rest',
  'obj-method',
  'obj-shorthand',
  'no-strict',
  'commonjs',
  'exponent',
  'multi-var',
  'for-of',
  'for-each',
  'includes',
]

const main = async () => {
  const files = glob.sync(path.resolve(__dirname, '../next/Data/*.js').replaceAll('\\', '/'))

  await pMap(files, async (f) => {
    const content = await readFile(f, 'utf8')

    const { code } = transform(content, transforms)

    return writeFile(f, code)
  })
}


main()
