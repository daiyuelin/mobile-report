/*
 * @Description: 
 * @Autor: Dai YueLin
 * @Date: 2021-07-13 14:43:28
 * @LastEditors: Dai YueLin
 * @LastEditTime: 2025-10-24 16:44:46
 */
const webConfig = {
  // 接口地址
  apiUrl: 'http://10.40.7.166:8000',
  client_id:'X9kLm2nPq7rSt4uVwZ',
  client_secret:'B5cD8eFg1hJk3mNp6qRs9tUv'
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = webConfig
} else {
  window.webConfig = webConfig
}

