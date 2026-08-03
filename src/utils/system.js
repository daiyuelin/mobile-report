import { storeSet, storeGet, storeRemove } from '@/utils/localStorage'

/*
* token相关操作
* */

const TokenKey = 'Admin-Token'

export function getToken () {
  return storeGet(TokenKey)
}

export function setToken (token) {
  return storeSet(TokenKey, token)
}

export function removeToken () {
  return storeRemove(TokenKey)
}
