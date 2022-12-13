import { excludeKeys } from 'filter-obj'

export const parseOpts = (yargs) => {
  const {
    _: [versionRange],
    ...opts
  } = yargs.parse()
  const versionRangeA = parseVersionRange(versionRange)
  const optsA = excludeKeys(opts, isInternalOpt)
  return { ...optsA, versionRange: versionRangeA }
}

// `yargs` parses major releases (e.g. `8`) as numbers
const parseVersionRange = (versionRange) => {
  if (!Number.isInteger(versionRange)) {
    return versionRange
  }

  return String(versionRange)
}

// Remove `yargs`-specific options, shortcuts and dash-cased
const isInternalOpt = (key, value) =>
  value === undefined ||
  INTERNAL_KEYS.has(key) ||
  key.length === 1 ||
  key.includes('-')

const INTERNAL_KEYS = new Set(['help', 'version', '_', '$0'])
