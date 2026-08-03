/*
* 判断字符串是否是Json数据格式
* */
export function isJson (str) {
  try {
    JSON.parse(str)
    return true
  } catch (e) {
    return false
  }
}
/*
* 判断链接地址是不是外链
* */
export function isExternal (path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}
/*
* 获取url参数
* */
export function getUrlParam (name, str = window.location.search) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  var r = str.substr(1).match(reg)
  if (r != null) return decodeURIComponent(r[2])
  return null
}
