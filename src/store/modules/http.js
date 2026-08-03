const http = {
  namespaced: true,
  state: {
    requests: []
  },
  mutations: {
    SET_REQUESTS: (state, request) => {
      state.requests.push(request)
    },
    CLEAR_REQUESTS: (state) => {
      state.requests.forEach(cancel => {
        cancel && cancel()
      })
      state.requests = []
    }
  },
  actions: {
    saveRequestQueue ({ commit }, request) {
      return new Promise((resolve) => {
        commit('SET_REQUESTS', request)
        resolve()
      })
    },
    clearRequests ({ commit }) {
      commit('CLEAR_REQUESTS')
    }
  }
}

export default http
