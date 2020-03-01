import { getBinPath } from 'get-bin-path'
import execa from 'execa'

const BIN_PATH = getBinPath()

export const TEST_VERSION = '6.2.1'
export const TEST_VERSION_RANGE = '6'

export const getNodeCli = async function(flags) {
  const binPath = await BIN_PATH
  const { stdout: path } = await execa.command(
    `node ${binPath} --no-progress ${flags}`,
  )
  const [, version] = PATH_TO_VERSION_REGEXP.exec(path)
  return { path, version }
}

const PATH_TO_VERSION_REGEXP = /\/(\d+\.\d+\.\d+)\//u
