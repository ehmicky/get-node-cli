#!/usr/bin/env node
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import getNode from 'get-node'
import handleCliError from 'handle-cli-error'
import { readPackageUp } from 'read-pkg-up'
import updateNotifier from 'update-notifier'

import { parseOpts } from './parse.js'
import { defineCli } from './top.js'

// Download the Node.js binary for a specific `versionRange`
const runCli = async function () {
  try {
    await checkUpdate()

    const yargs = defineCli()
    const { versionRange, ...opts } = parseOpts(yargs)
    const { path } = await getNode(versionRange, { progress: true, ...opts })
    console.log(path)
  } catch (error) {
    handleCliError(error, { stack: false })
  }
}

// TODO: use static JSON imports once those are possible
const checkUpdate = async function () {
  const cwd = dirname(fileURLToPath(import.meta.url))
  const { packageJson } = await readPackageUp({ cwd, normalize: false })
  updateNotifier({ pkg: packageJson }).notify()
}

await runCli()
