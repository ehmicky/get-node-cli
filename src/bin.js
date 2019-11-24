#!/usr/bin/env node
import { exit, env } from 'process'

import getNode from 'get-node'
import UpdateNotifier from 'update-notifier'
import readPkgUp from 'read-pkg-up'

import { defineCli } from './top.js'
import { parseOpts } from './parse.js'

// Download the Node.js binary for a specific `versionRange`
const runCli = async function() {
  try {
    await checkUpdate()

    const yargs = defineCli()
    const { versionRange, ...opts } = parseOpts(yargs)
    const { path } = await getNode(versionRange, { progress: true, ...opts })
    console.log(path)
  } catch (error) {
    console.error(error.message)
    exit(1)
  }
}

const checkUpdate = async function() {
  const { packageJson } = await readPkgUp({ cwd: __dirname, normalize: false })
  const disabled = env.NODE_ENV === 'test'
  UpdateNotifier({ pkg: packageJson, disabled }).notify()
}

runCli()
