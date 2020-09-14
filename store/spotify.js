import axios from 'axios'

export const state = () => ({
  pizzly: null,
  savedAuthIds: null,
  authId: null
})

export const getters = {}

export const actions = {
  login ({ commit, state }) {
    // commit('login')
    return state.pizzly
      .connect()
  },
  restoreSession ({ commit, state }, { authId }) {
    // commit('restoreSession', { authId })
    return state.pizzly
      .auth(authId)
      .connect()
  },
  getMe ({ commit, state }) {
    return state.pizzly
      .auth(state.authId)
      .get('/me')
      .then((data) => {
        console.log(data)
      })
  }
}

export const mutations = {
  login (state, data) {
    state.pizzly
      .connect()
  },
  restoreSession (state, { authId }) {
    state.pizzly
      .auth(authId)
      .connect()
  },
  initPizzly (state, data) {
    const savedIds = localStorage.getItem('savedAuthIds')

    if (savedIds !== null && savedIds !== '') {
      state.savedAuthIds = JSON.parse(savedIds)
      if (state.savedAuthIds === null) {
        state.savedAuthIds = []
      }
    } else {
      state.savedAuthIds = []
    }

    localStorage.setItem('savedAuthIds', JSON.stringify(state.savedAuthIds))
    localStorage.removeItem('authId')

    state.pizzly = data.pizzly
  },
  setAuthId (state, { authId }) {
    addIdInStorage({ authId, name: 'yoyo' }, state.savedAuthIds.map(id => id))
    state.authId = authId
  }
}

function addIdInStorage (authId, savedAuthIds) {
  if (!savedAuthIds.some(auth => auth.authId === authId.authId) && !savedAuthIds.some(auth => auth.name === authId.name)) {
    savedAuthIds.push(authId)
    localStorage.setItem('savedAuthIds', JSON.stringify(savedAuthIds))
  }

  localStorage.setItem('authId', authId.authId)
}

// function test () {
//   this.$pizzly
//     .auth(authId)
//     .get('/me')
//     .then(response => response.json())
//     .then(data => console.log(data)) // do something with the JSON payload (aka data)
//     .catch(console.error)
// }
