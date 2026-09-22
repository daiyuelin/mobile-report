/*
 * @Description: 
 * @Autor: Dai YueLin
 * @Date: 2021-07-13 14:43:28
 * @LastEditors: Dai YueLin
 * @LastEditTime: 2026-09-04 16:06:49
 */
const webConfig = {
  // 接口地址
  apiUrl: '/api',
  client_id:'pJSCb37o6SL3iKNM5Z',
  client_secret:'8sFd2kP9vR7nQz5bG1x9'
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = webConfig
} else {
  window.webConfig = webConfig
}

