import querystring from 'querystring'
import Pizzly from 'pizzly-js/dist/index.mjs'

import config from '../config/config'

export const state = () => ({
  pizzly: null,
  savedAuthIds: null,
  authId: null
})

export const getters = {
  getStoredAuthId: (state) => { return getAuthId() }
}

export const actions = {
  login ({ commit, state }) {
    return new Promise((resolve, reject) => {
      state.pizzly
        .connect()
        .then((data) => {
          const authId = data.authId
          state.pizzly
            .auth(authId)
            .get('/me')
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
  },
  disconnect ({ commit, state }) {
    clearAuthId()
  },
  getMe ({ commit, state }) {
    return state.pizzly
      .auth(state.authId)
      .get('/me')
      .then(response => response.json())
      .then(data => data)
  },
  getTracksFromSearch ({ commit, state }, { query }) {
    return state.pizzly
      .auth(state.authId)
      .get('/search?' + querystring.stringify({
        q: query,
        type: 'artist,track'
      }))
      .then(response => response.json())
      .then(data => data.tracks.items)
      .catch(console.log)
  },
  changeTrack ({ commit, state }, { trackUri, position_ms }) {
    const data = {
      uris: [trackUri],
      position_ms
    }

    return state.pizzly
      .auth(state.authId)
      .put('/me/player/play', { body: JSON.stringify(data) })
      .then(response => response.json())
      .then(console.log)
      .catch(console.log)
  }
}

export const mutations = {
  initPizzly (state, data) {
    if (getAuthId()) {
      state.authId = getAuthId()
    }
    state.savedAuthIds = getSavedAuthIds()

    state.pizzly = new Pizzly({ host: 'https://camaradio-auth.herokuapp.com' }).integration('spotify')
  },
  setAuthId (state, { authId, name }) {
    addAuthIdInStorage({ authId, name }, state.savedAuthIds.map(id => id))
    setAuthId(authId)
    state.authId = authId
  },
  deleteAuthId (state, { authId, name }) {
    state.savedAuthIds = state.savedAuthIds.filter(id => id.authId !== authId)
    setSavedAuthIds(state.savedAuthIds.map(id => id))
  }
}

function addAuthIdInStorage (authId, savedAuthIds) {
  if (!savedAuthIds.some(auth => auth.authId === authId.authId) && !savedAuthIds.some(auth => auth.name === authId.name)) {
    savedAuthIds.push(authId)
    localStorage.setItem('savedAuthIds', JSON.stringify(savedAuthIds))
  }
}

function clearAuthId () {
  localStorage.removeItem('authId')
}

function getAuthId () {
  return localStorage.getItem('authId')
}

function setAuthId (authId) {
  localStorage.setItem('authId', authId)
}

function setSavedAuthIds (savedAuthIds) {
  localStorage.setItem('savedAuthIds', JSON.stringify(savedAuthIds))
}

function getSavedAuthIds () {
  const savedIds = localStorage.getItem('savedAuthIds')
  let result = []
  if (savedIds !== null && savedIds !== '') {
    result = JSON.parse(savedIds)
  }
  return result
}

// function test () {
//   this.$pizzly
//     .auth(authId)
//     .get('/me')
//     .then(response => response.json())
//     .then(data => console.log(data)) // do something with the JSON payload (aka data)
//     .catch(console.error)
// }
