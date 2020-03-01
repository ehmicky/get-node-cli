[![Codecov](https://img.shields.io/codecov/c/github/ehmicky/get-node-cli.svg?label=tested&logo=codecov)](https://codecov.io/gh/ehmicky/get-node-cli)
[![Travis](https://img.shields.io/badge/cross-platform-4cc61e.svg?logo=travis)](https://travis-ci.org/ehmicky/get-node-cli)
[![Gitter](https://img.shields.io/gitter/room/ehmicky/get-node-cli.svg?logo=gitter)](https://gitter.im/ehmicky/get-node-cli)
[![Twitter](https://img.shields.io/badge/%E2%80%8B-twitter-4cc61e.svg?logo=twitter)](https://twitter.com/intent/follow?screen_name=ehmicky)
[![Medium](https://img.shields.io/badge/%E2%80%8B-medium-4cc61e.svg?logo=medium)](https://medium.com/@ehmicky)

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

# Example

```bash
# Download Node.js latest release
$ get-node
/home/user/.cache/nve/12.10.0/x64/bin/node

$ /home/user/.cache/nve/12.10.0/x64/bin/node
Welcome to Node.js v12.10.0.
Type ".help" for more information.
> .exit

# Download a specific Node.js release
$ get-node 8
/home/user/.cache/nve/8.16.1/x64/bin/node

$ /home/user/.cache/nve/8.16.1/x64/bin/node
> process.version
'v8.16.1'
> .exit

# Any version range can be used
$ get-node 8.12.0
$ get-node '<7'

# Specify the output directory
$ get-node --output=/home/user/.cache/node_releases/ 8
/home/user/.cache/node_releases/8.16.1/x64/bin/node

$ /home/user/.cache/node_releases/8.16.1/x64/bin/node --version
v8.16.1

# Use a mirror website
$ get-node --mirror=https://npm.taobao.org/mirrors/node 8
/home/user/.cache/nve/8.16.1/x64/bin/node

# Specify the CPU architecture
$ get-node --arch=s390x 8
/home/user/.cache/nve/8.16.1/s390x/bin/node
```

# Install

```bash
npm install -g get-node-cli
```

`node >=10.17.0` must be globally installed. However any Node version can be
downloaded.

To use this programmatically (from Node.js) instead, please check
[`get-node`](https://github.com/ehmicky/get-node).

# Usage

```bash
get-node [OPTIONS] [VERSION]
```

`VERSION` can be any [version range](https://github.com/npm/node-semver) such as
`12`, `12.6.0` or `<12`.

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

Base URL. Can be overridden (for example `https://npm.taobao.org/mirrors/node`).

The following environment variables can also be used: `NODE_MIRROR`,
`NVM_NODEJS_ORG_MIRROR`, `N_NODE_MIRROR` or `NODIST_NODE_MIRROR`.

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

# See also

- [`get-node`](https://github.com/ehmicky/get-node): Like `get-node-cli` but
  programmatically (from Node.js)
- [`nve`](https://github.com/ehmicky/nve): Run a specific Node.js version (CLI)
- [`nvexeca`](https://github.com/ehmicky/nve): Run a specific Node.js version
  (programmatic)
- [`normalize-node-version`](https://github.com/ehmicky/normalize-node-version):
  Normalize and validate Node.js versions
- [`all-node-versions`](https://github.com/ehmicky/all-node-versions): List all
  available Node.js versions
- [`fetch-node-website`](https://github.com/ehmicky/fetch-node-website): Fetch
  releases on nodejs.org
- [`global-cache-dir`](https://github.com/ehmicky/global-cache-dir): Get the
  global cache directory

# Support

If you found a bug or would like a new feature, _don't hesitate_ to
[submit an issue on GitHub](../../issues).

For other questions, feel free to
[chat with us on Gitter](https://gitter.im/ehmicky/get-node-cli).

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
