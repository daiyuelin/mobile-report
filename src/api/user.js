/*
 * @Description: 
 * @Autor: Dai YueLin
 * @Date: 2021-12-06 14:06:44
 */
import Http from '@/utils/http'

const webConfig = window.webConfig

// 登录接口
export function login(data) {
  return Http.post(webConfig.apiUrl + '/api/v1/sso/bba',data)
}

// 文本消息接口
export function pushText(data) {
  return Http.post(webConfig.apiUrl + '/api/v1/message/pushText',data)
}

//图片推送接口
export function pushImage(data) {
  return Http.post(webConfig.apiUrl + '/api/v1/message/pushImage', data,{
    headers: { "Content-Type": "multipart/form-data; boundary=<calculated when request is sent>",}
  })
}

//form新增
export function addForm(data) {
  return Http.post(webConfig.apiUrl + '/api/v1/form/add', data)
}

//form查询
export function queryForm(data) {
  return Http.get(webConfig.apiUrl + '/api/v1/form/query',data)
}

//form更新
export function updateForm(data) {
  return Http.post(webConfig.apiUrl + '/api/v1/form/update',data)
}

//form更新
export function deleteForm(data) {
  return Http.get(webConfig.apiUrl + '/api/v1/form/delete/'+data)
}

//文件上传接口
export function upload(data) {
  return Http.post(webConfig.apiUrl + '/api/v1/file/upload', data,{
    headers: { "Content-Type": "multipart/form-data; boundary=<calculated when request is sent>",}
  })
}

// base64 图片上传
export function uploadImageBase64(data) {
  return Http.post(webConfig.apiUrl + '/api/v1/file/uploadImageBase64',data)
}

//文件下载
export function download() {
  return Http.getFile(webConfig.apiUrl + '/api/v1/file/download')
}

//采集调阅
export function ghzZdQueryData(data) {
  return Http.post(webConfig.apiUrl + '/ghzZd/queryData',data)
}

//查询报告信息
export function queryReport(data) {
  return Http.post(webConfig.apiUrl + '/api/analysis_url',data)
}

//二维码分享接口
export function shareUrl(data) {
  return Http.post(webConfig.apiUrl + '/api/obtain_url',data)
}

// 身份校验接口
export function verifypwd(data) {
  return Http.post(webConfig.apiUrl + '/api/verifypwd',data)
}// 获取token

export function getToken(data) {
  return Http.post(webConfig.apiUrl + '/api/get_token',data)
}

