import { rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'

import test from 'ava'
import { execa, execaCommand } from 'execa'
import { getBinPath } from 'get-bin-path'
import { pathExists } from 'path-exists'
import { each } from 'test-each'

const getNodeCli = async (flags) => {
  const binPath = await BIN_PATH
  const { stdout: path } = await execaCommand(
    `node ${binPath} --no-progress ${flags}`,
  )
  const [, version] = PATH_TO_VERSION_REGEXP.exec(path)
  return { path, version }
}

const BIN_PATH = getBinPath()
const PATH_TO_VERSION_REGEXP = /[/\\/](\d+\.\d+\.\d+)[\\/]/u

const FULL_VERSION = '6.2.1'
const VERSION_RANGE = '6'
const VERSION_ALIAS = 'lts'
const VERSION_LOCAL = 'local'
const VERSION_GLOBAL = 'global'
const INVALID_VERSION = 'invalid_version'

each(
  [FULL_VERSION, VERSION_RANGE, VERSION_ALIAS, VERSION_LOCAL, VERSION_GLOBAL],
  ({ title }, versionInput) => {
    test(`Downloads node | ${title}`, async (t) => {
      const id = String(Math.random()).replace('.', '')
      const output = `${tmpdir()}/test-get-node-cli-${id}`

      const { path, version } = await getNodeCli(
        `--output=${output} ${versionInput}`,
      )

      t.true(await pathExists(path))
      const { stdout } = await execa(path, ['--version'])
      t.is(stdout, `v${version}`)

      try {
        await rm(output, { recursive: true })
        // Windows sometimes fails due to lock files
      } catch {}
    })
  },
)

each([INVALID_VERSION], ({ title }, flags) => {
  test(`Invalid arguments | ${title}`, async (t) => {
    await t.throwsAsync(getNodeCli(flags))
  })
})
