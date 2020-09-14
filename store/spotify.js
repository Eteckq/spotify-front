import { resolve } from 'path'
import querystring from 'querystring'

export const state = () => ({
  pizzly: null,
  savedAuthIds: null,
  authId: null
})

export const getters = {}

export const actions = {
  login ({ commit, state }) {
    return new Promise((resolve, reject) => {
      state.pizzly
        .connect()
        .then((data) => {
          const authId = data.authId
          state.pizzly
            .auth(authId)
            .get('me')
            .then(response => response.json())
            .then((data) => { console.log(data); resolve({ authId, name: data.display_name }) })
            .catch(reject)
        })
    })
  },
  restoreSession ({ commit, state }, { authId }) {
    return state.pizzly
      .auth(authId)
      .get('/me')
      .then(response => response.json())
      .then(data => data.display_name)

    // return state.pizzly
    //   .auth(authId)
    //   .connect()
  },
  getMe ({ commit, state }) {
    return state.pizzly
      .get('/me')
      .then(response => response.json())
  },
  // this.$store.dispatch('spotify/getTracksFromSearch', { query: 'nf ' }).then((tracks) => {
  //   console.log(tracks)
  // })
  getTracksFromSearch ({ commit, state }, { query }) {
    return state.pizzly
      .auth(state.authId)
      .get('/search?' + querystring.stringify({
        q: query,
        type: 'track'
      }))
      .then(response => response.json())
      .then(data => data.tracks.items)
  }
}

export const mutations = {
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
  setAuthId (state, { authId, name }) {
    addIdInStorage({ authId, name }, state.savedAuthIds.map(id => id))
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
