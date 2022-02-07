// import { rmSync, renameSync, mkdirSync, accessSync } from 'fs'
import { ensureDirSync, remove, move } from 'fs-extra'
import path from 'path'
import { CONSTANT } from '../config/constant.js'
import responseInfo from '../model/responseInfo.js'
import { ErrorModel, SuccessModel } from '../model/ResultModel.js'

function createFileDir() {
  ensureDirSync(CONSTANT.DIST_FOLDER_PATH, (err) => {
    console.log('没有该文件夹,现在立刻去创建', err)
  })
  // try {
  //   accessSync(CONSTANT.DIST_FOLDER_PATH)
  //   console.log('文件夹已经存在不用再次创建')
  // } catch (error) {
  //   console.log('没有该文件夹,现在立刻去创建', error)
  //   mkdirSync(CONSTANT.DIST_FOLDER_PATH)
  // }
}
createFileDir()

export async function saveFile({ name, type, size, filePath }) {
  if (size > CONSTANT.FILE_MAX_SIZE) {
    try {
      await remove(filePath)
    } catch (error) {
      console.error('文件删除失败', error.message)
    }
    return new ErrorModel(responseInfo.uploadFileSizeFailedInfo)
  }
  const fileName = `${Date.now()}.${name}`
  const distFilePath = path.join(CONSTANT.DIST_FOLDER_PATH, fileName)
  try {
    await move(filePath, distFilePath)
  } catch (error) {
    console.error('文件移动失败', error.message)
    return new ErrorModel(responseInfo.uploadFileFailedInfo)
  }
  return new SuccessModel({
    ...responseInfo.uploadFileSuccessInfo,
    data: { url: `http://${CONSTANT.ip}:${CONSTANT.port}/${fileName}` },
  })
}
