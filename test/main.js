import { tmpdir } from 'os'

import test from 'ava'
import del from 'del'
import execa from 'execa'
import { pathExists } from 'path-exists'
import { each } from 'test-each'

import { getNodeCli } from './helpers/main.js'
import {
  FULL_VERSION,
  VERSION_RANGE,
  VERSION_ALIAS,
  VERSION_LOCAL,
  VERSION_GLOBAL,
  INVALID_VERSION,
} from './helpers/versions.js'

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
        await del(output, { force: true })
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
