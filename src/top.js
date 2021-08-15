import { argv } from 'process'

import yargs from 'yargs'
// eslint-disable-next-line node/file-extension-in-import
import { hideBin } from 'yargs/helpers'

export const defineCli = function () {
  return yargs(hideBin(argv)).options(CONFIG).usage(USAGE).strictOptions()
}

const CONFIG = {
  output: {
    alias: 'o',
    string: true,
    requiresArg: true,
    describe: `Output directory for the 'node' executable.
Defaults to a global cache directory such as /home/user/.cache/nve/.`,
  },
  progress: {
    alias: 'p',
    boolean: true,
    describe: `Show a progress bar. Default: true`,
  },
  mirror: {
    alias: 'm',
    string: true,
    requiresArg: true,
    describe: `Base URL. Defaults to 'https://nodejs.org/dist'.
Can be customized (for example "https://npm.taobao.org/mirrors/node").

The following environment variables can also be used: NODE_MIRROR, NVM_NODEJS_ORG_MIRROR, N_NODE_MIRROR or NODIST_NODE_MIRROR.`,
  },
  fetch: {
    alias: 'f',
    boolean: true,
    describe: `The list of available Node.js versions is cached for one hour by default. With:
- --fetch: the cache will not be used
- --no-fetch: the cache will be used even if it's older than one hour`,
  },
  arch: {
    alias: 'a',
    string: true,
    requiresArg: true,
    describe: `Node.js binary's CPU architecture. This is useful for example when you're on x64 but would like to run Node.js x32.
All the values from process.arch are allowed except mips and mipsel.
Default: process.arch`,
  },
  cwd: {
    alias: 'c',
    string: true,
    requiresArg: true,
    describe: `When using the 'local' alias, start looking for a Node.js version file from this directory.
Defaults to the current directory.`,
  },
}

const USAGE = `$0 [OPTIONS...] [VERSION]

Download a specific version of Node.js.
The path to the Node.js executable is printed on stdout.`
