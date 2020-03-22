import yargs from 'yargs'

export const defineCli = function () {
  return yargs.options(CONFIG).usage(USAGE).help().version().strict()
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
  arch: {
    alias: 'a',
    string: true,
    requiresArg: true,
    describe: `Node.js binary's CPU architecture. This is useful for example when you're on x64 but would like to run Node.js x32.
All the values from process.arch are allowed except mips and mipsel.
Default: process.arch`,
  },
}

const USAGE = `$0 [OPTIONS...] [VERSION]

Download a specific version of Node.js.
The path to the Node.js executable is printed on stdout.`
