/*
 * @Author: your name
 * @Date: 2021-07-23 17:45:32
 * @LastEditTime: 2021-11-12 10:09:15
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /o-chat-app/src/utils/localStorage.js
 */
import { isJson } from '@/utils/baseTool'

if (!window.localStorage) {
  alert('浏览器不支持本系统数据存储')
}

let storage = window.localStorage

export function storeSet (key, value) {
  value = typeof value === 'string' ? value : JSON.stringify(value)
  storage.setItem(key, value)
}

export function storeGet (key) {
  let result = storage.getItem(key)
  return isJson(result) ? JSON.parse(result) || result : result
}

export function storeRemove (key) {
  storage.removeItem(key)
}

export function storeClear () {
  storage.clear()
}
