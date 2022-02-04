import { rm, rename } from 'fs/promises'
import { mkdirSync, accessSync } from 'fs'
import path from 'path'
import { CONSTANT } from '../config/constant.js'
import responseInfo from '../model/responseInfo.js'
import { ErrorModel, SuccessModel } from '../model/ResultModel.js'

function createFileDir() {
  try {
    accessSync(CONSTANT.DIST_FOLDER_PATH)
    console.log('文件夹已经存在不用再次创建')
  } catch (error) {
    console.log('没有该文件夹,现在立刻去创建', error)
    mkdirSync(CONSTANT.DIST_FOLDER_PATH)
  }
}
createFileDir()

export async function saveFile({ name, type, size, filePath }) {
  if (size > CONSTANT.FILE_MAX_SIZE) {
    try {
      await rm(filePath)
    } catch (error) {
      console.error('文件删除失败', error.message)
    }
    return new ErrorModel(responseInfo.uploadFileSizeFailedInfo)
  }
  const fileName = `${Date.now()}.${name}`
  const distFilePath = path.join(CONSTANT.DIST_FOLDER_PATH, fileName)
  try {
    await rename(filePath, distFilePath)
  } catch (error) {
    console.error('文件移动失败', error.message)
    return new ErrorModel(responseInfo.uploadFileFailedInfo)
  }
  return new SuccessModel({
    ...responseInfo.uploadFileSuccessInfo,
    data: { url: `/${fileName}` },
  })
}
