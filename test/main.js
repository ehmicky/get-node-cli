import { promisify } from 'util'
import { tmpdir } from 'os'

import test from 'ava'
import pathExists from 'path-exists'
import execa from 'execa'
import { each } from 'test-each'
import del from 'del'

import { TEST_VERSION, TEST_VERSION_RANGE, getNodeCli } from './helpers/main.js'

const pSetTimeout = promisify(setTimeout)

each([TEST_VERSION, TEST_VERSION_RANGE], ({ title }, versionInput) => {
  test(`Downloads node | ${title}`, async t => {
    const id = String(Math.random()).replace('.', '')
    const output = `${tmpdir()}/test-get-node-cli-${id}`

    const { path, version } = await getNodeCli(
      `--output=${output} ${versionInput}`,
    )

    t.true(await pathExists(path))
    const { stdout } = await execa(path, ['--version'])
    t.is(stdout, `v${version}`)

    await pSetTimeout(REMOVE_TIMEOUT)
    await del(output, { force: true })
  })
})

// We need to wait a little for Windows to release the lock on the `node`
// executable before cleaning it
const REMOVE_TIMEOUT = 1e3

const INVALID_MIRROR = 'https://example.com'

each(
  ['invalid_version', `--mirror=${INVALID_MIRROR} ${TEST_VERSION}`],
  ({ title }, flags) => {
    test(`Invalid arguments | ${title}`, async t => {
      await t.throwsAsync(getNodeCli(flags))
    })
  },
)
