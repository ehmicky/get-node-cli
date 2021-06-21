# 7.0.0

## Breaking changes

- Minimal supported Node.js version is now `12.20.0`

# 6.0.2

## Bug fixes

- Fix issue with `SIGINT` handling

# 6.0.1

## Bug fixes

- Fix crash when downloading several Node.js binaries in parallel

# 6.0.0

## Breaking changes

- Rename the [alias `here`](/README.md#usage) to `local`

## Features

- Add the [alias `global`](/README.md#usage) to target the global Node version,
  regardless of the current directory

# 5.0.0

## Breaking changes

- Rename the [alias `now`](/README.md#usage) to `here`

# 4.0.0

## Breaking changes

- Aliases `c` and `current` renamed to `now`
- The [alias `now`](/README.md#usage) now takes into account `package.json`
  `engines.node` field and
  [additional files](https://github.com/ehmicky/preferred-node-version/blob/main/README.md)
  used by other Node.js version managers.
- Alias `l` removed: please use `latest` instead

## Features

- Added [alias `lts`](/README.md#usage) to target the latest LTS version

# 3.0.1

## Bug fixes

- Fix aliases shortcuts `l` and `c`

# 3.0.0

## Breaking changes

- Rename `*` alias to [`latest` or `l`](/README.md#usage)
- Rename `.` alias to [`current` or `c`](/README.md#usage)
- Remove `_` alias

# 2.3.1

## Dependencies

- Fix removing `core-js`

# 2.3.0

## Features

- Add the [`--fetch` CLI flag](/README#--fetch) to control caching

## Dependencies

- Remove `core-js`

# 2.2.0

## Features

- Can use the `_` alias to refer to the
  [current process's Node.js version](/README.md#usage)
- Can use the `.` alias to refer to the
  [current project's Node.js version](/README.md#usage) using its `.nvmrc`,
  `.node-version` or `.naverc`. The current directory can be changed using the
  [`--cwd` CLI flag](/README.md#--cwd).

# 2.1.2

## Bug fixes

- Fix terminal color changing on Windows

# 2.1.1

## Bug fixes

- Fix [`arch` option](https://github.com/ehmicky/get-node-cli#--arch)

# 2.1.0

## Features

- Add [`--arch` CLI flag](https://github.com/ehmicky/get-node-cli#--arch) to
  specify the CPU architecture.

# 2.0.0

## Breaking changes

- Minimal supported Node.js version is now `10.17.0`

# 1.8.0

## Features

- Node.js binary download is now 50% faster on Windows

## Bug fixes

- Fix crash when Node.js binary URL is invalid

# 1.7.0

## Features

- Node.js binary download is now twice faster on Windows

## Bug fixes

- Fix ARM, PowerPC, S390 support

# 1.6.0

## Features

- Warn when a new version is available

# 1.5.0

## Features

- Improve the internal directory structure used to cache the Node.js binary
- Cleanup temporary files when Node.js download fails

# 1.4.0

## Features

- Improve the appearance of the progress bar

# 1.3.0

## Features

- Ensure Node.js binaries are not corrupted by checking their
  [checksums](https://github.com/nodejs/node#verifying-binaries)
- Use cache when offline (no network connection)

# 1.2.0

## Features

- Make Node.js binary download twice faster on Linux and MacOS
- Improve error messages
