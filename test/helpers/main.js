import execa from 'execa'
import { getBinPath } from 'get-bin-path'

const BIN_PATH = getBinPath()

export const getNodeCli = async function (flags) {
  const binPath = await BIN_PATH
  const { stdout: path } = await execa.command(
    `node ${binPath} --no-progress ${flags}`,
  )
  const [, version] = PATH_TO_VERSION_REGEXP.exec(path)
  return { path, version }
}

const PATH_TO_VERSION_REGEXP = /[/\\/](\d+\.\d+\.\d+)[\\/]/u
