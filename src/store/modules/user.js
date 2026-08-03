/*
 * @Description: 
 * @Autor: Dai YueLin
 * @Date: 2021-07-06 14:16:15
 * @LastEditors: Edison Chen
 * @LastEditTime: 2021-07-26 10:52:20
 */
import { getToken } from '@/utils/system'

const state = {
  token: getToken(),
  name: '',
  avatar: '',
  introduction: '',
  roles: []
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {
  loginByToken({ commit }, token) {
    commit('SET_TOKEN', token)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
