[![Codecov](https://img.shields.io/codecov/c/github/ehmicky/get-node-cli.svg?label=tested&logo=codecov)](https://codecov.io/gh/ehmicky/get-node-cli)
[![Twitter](https://img.shields.io/badge/%E2%80%8B-twitter-brightgreen.svg?logo=twitter)](https://twitter.com/intent/follow?screen_name=ehmicky)
[![Medium](https://img.shields.io/badge/%E2%80%8B-medium-brightgreen.svg?logo=medium)](https://medium.com/@ehmicky)

Download a specific version of Node.js (CLI).

The Node.js release is downloaded, uncompressed and untared to an executable
file ready to run.

Fast:

- the download is cached
- the best compression algorithm available on your machine is used
- everything is streamed

Reliable:

- the binary is checked against
  [official checksums](https://github.com/nodejs/node#verifying-binaries)
- can be safely run concurrently
- atomic writes

Features include:

- Linux/Mac/Windows support
- works with old Node.js versions
- [progress bar](#--progress)
- using [version ranges](#usage)
- specifying [a mirror website](#--mirror) for nodejs.org
- helpful error messages
- can guess the current project's version using its
  [`.nvmrc` or `package.json` (`engines.node` field)](#usage)

# Example

```bash
# Download Node.js latest release
$ get-node
/home/user/.cache/nve/16.3.0/x64/bin/node

$ /home/user/.cache/nve/16.3.0/x64/bin/node
Welcome to Node.js v16.3.0.
Type ".help" for more information.
> .exit

# Download a specific Node.js release
$ get-node 8
/home/user/.cache/nve/8.17.0/x64/bin/node

$ /home/user/.cache/nve/8.17.0/x64/bin/node
> process.version
'v8.17.0'
> .exit

# Any version range can be used
$ get-node 8.12.0
$ get-node "<7"

# Download latest Node.js version
$ get-node latest

# Download latest LTS Node.js version
$ get-node lts

# Download Node.js version from `~/.nvmrc` or the current process version
$ get-node global

# Download current directory's Node.js version using its `.nvmrc` or `package.json` (`engines.node` field)
$ get-node local

# Specify the output directory
$ get-node --output=/home/user/.cache/node_releases/ 8
/home/user/.cache/node_releases/8.17.0/x64/bin/node

$ /home/user/.cache/node_releases/8.17.0/x64/bin/node --version
v8.17.0

# Use a mirror website
$ get-node --mirror=https://npmmirror.com/mirrors/node 8
/home/user/.cache/nve/8.17.0/x64/bin/node

# Do not use the cached list of available Node.js versions
$ get-node --fetch

# Always use the cached list of available Node.js versions even if it's more
# than one hour old
$ get-node --no-fetch

# Specify the CPU architecture
$ get-node --arch=s390x 8
/home/user/.cache/nve/8.17.0/s390x/bin/node
```

# Install

```bash
npm install -g get-node-cli
```

`node >=14.18.0` must be globally installed. However any Node version can be
downloaded.

To use this programmatically (from Node.js) instead, please check
[`get-node`](https://github.com/ehmicky/get-node).

# Usage

```bash
get-node [OPTIONS] [VERSION]
```

`VERSION` can be any [version range](https://github.com/npm/node-semver) such as
`12`, `12.6.0` or `<12`, or one of the following aliases:

- `latest`: Latest available Node version
- `lts`: Latest LTS Node version
- `global`: Global Node version
  - Using the home directory [`.nvmrc`](https://github.com/nvm-sh/nvm#nvmrc) or
    [`package.json` (`engines.node` field)](https://docs.npmjs.com/files/package.json#engines)
  - [Some additional files](https://github.com/ehmicky/preferred-node-version/blob/main/README.md)
    used by other Node.js version managers are also searched for
  - If nothing is found, defaults to the current process's Node version
- `local`: Current directory's Node version
  - Using the current directory or parent directories
    [`.nvmrc`](https://github.com/nvm-sh/nvm#nvmrc),
    [`package.json` (`engines.node` field)](https://docs.npmjs.com/files/package.json#engines)
    (or
    [additional files](https://github.com/ehmicky/preferred-node-version/blob/main/README.md))
  - Defaults to the `global` version

## Options

### --output

_Alias_: `-o`\
_Type_: `string`\
_Default_: [global cache directory](https://github.com/ehmicky/global-cache-dir)
such as `/home/user/.cache/nve/`.

Output directory for the `node` executable.

It the directory already has a `node` executable, no download is performed. This
enables caching.

### --progress

_Alias_: `-p`\
_Type_: `boolean`\
_Default_: `true`

Whether to show a progress bar.

### --mirror

_Alias_: `-m`\
_Type_: `string`\
_Default_: `https://nodejs.org/dist`

Base URL to retrieve Node.js binaries. Can be customized (for example
`https://npmmirror.com/mirrors/node`).

The following environment variables can also be used: `NODE_MIRROR`,
`NVM_NODEJS_ORG_MIRROR`, `N_NODE_MIRROR` or `NODIST_NODE_MIRROR`.

### --fetch

_Alias_: `-f`\
_Type_: `boolean`\
_Default_: `undefined`

The list of available Node.js versions is cached for one hour by default. With:

- `--fetch`: the cache will not be used
- `--no-fetch`: the cache will be used even if it's older than one hour

### --arch

_Alias_: `-a`\
_Type_: `string`\
_Default_:
[`process.arch`](https://nodejs.org/api/process.html#process_process_arch)

Node.js binary's CPU architecture. This is useful for example when you're on x64
but would like to run Node.js x32.

All the values from
[`process.arch`](https://nodejs.org/api/process.html#process_process_arch) are
allowed except mips and mipsel.

#### --cwd

_Alias_: `-c`\
_Type_: `string`\
_Default_: `process.cwd()`

When using the [`local` alias](#usage), start looking for a Node.js version file
from this directory.

# See also

- [`get-node`](https://github.com/ehmicky/get-node): Like `get-node-cli` but
  programmatically (from Node.js)
- [`nve`](https://github.com/ehmicky/nve): Run a specific Node.js version (CLI)
- [`nvexeca`](https://github.com/ehmicky/nve): Run a specific Node.js version
  (programmatic)
- [`preferred-node-version`](https://github.com/ehmicky/preferred-node-version):
  Get the preferred Node.js version of a project or user
- [`node-version-alias`](https://github.com/ehmicky/node-version-alias): Resolve
  Node.js version aliases like `latest`, `lts` or `erbium`
- [`normalize-node-version`](https://github.com/ehmicky/normalize-node-version):
  Normalize and validate Node.js versions
- [`all-node-versions`](https://github.com/ehmicky/all-node-versions): List all
  available Node.js versions
- [`fetch-node-website`](https://github.com/ehmicky/fetch-node-website): Fetch
  releases on nodejs.org
- [`global-cache-dir`](https://github.com/ehmicky/global-cache-dir): Get the
  global cache directory

# Support

For any question, _don't hesitate_ to [submit an issue on GitHub](../../issues).

Everyone is welcome regardless of personal background. We enforce a
[Code of conduct](CODE_OF_CONDUCT.md) in order to promote a positive and
inclusive environment.

# Contributing

This project was made with ❤️. The simplest way to give back is by starring and
sharing it online.

If the documentation is unclear or has a typo, please click on the page's `Edit`
button (pencil icon) and suggest a correction.

If you would like to help us fix a bug or add a new feature, please check our
[guidelines](CONTRIBUTING.md). Pull requests are welcome!

<!-- Thanks go to our wonderful contributors: -->

<!-- ALL-CONTRIBUTORS-LIST:START -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="https://twitter.com/ehmicky"><img src="https://avatars2.githubusercontent.com/u/8136211?v=4" width="100px;" alt="ehmicky"/><br /><sub><b>ehmicky</b></sub></a><br /><a href="https://github.com/ehmicky/get-node-cli/commits?author=ehmicky" title="Code">💻</a> <a href="#design-ehmicky" title="Design">🎨</a> <a href="#ideas-ehmicky" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/ehmicky/get-node-cli/commits?author=ehmicky" title="Documentation">📖</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->
