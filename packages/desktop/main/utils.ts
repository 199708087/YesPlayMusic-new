import fs from 'fs'
import path from 'path'
import os from 'os'
import pkg from '../../../package.json'

export const isDev = process.env.NODE_ENV === 'development'
export const isProd = process.env.NODE_ENV === 'production'
export const isWindows = process.platform === 'win32'
export const isMac = process.platform === 'darwin'
export const isLinux = process.platform === 'linux'
export const dirname = isDev ? process.cwd() : __dirname
export const devUserDataPath = path.resolve(process.cwd(), '../../tmp/userData')
export const portableUserDataPath = path.resolve(
  process.env.PORTABLE_EXECUTABLE_DIR || '',
  './YesPlayMusic-UserData'
)
export const logsPath = {
  linux: `~/.config/${pkg.productName}/logs`,
  darwin: `~/Library/Logs/${pkg.productName}/`,
  win32: `%USERPROFILE%\\AppData\\Roaming\\${pkg.productName}\\logs`,
}[process.platform as 'darwin' | 'win32' | 'linux']

export const createDirIfNotExist = (dir: string) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

export const createFileIfNotExist = (file: string) => {
  createDirIfNotExist(path.dirname(file))
  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, '')
  }
}

export const getNetworkInfo = () => {
  return os.networkInterfaces().en0?.find(n => n.family === 'IPv4')
}

export const sleep = (ms: number) => new Promise(r => setTimeout(r, ms))
