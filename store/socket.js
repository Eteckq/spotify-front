export const state = () => ({
  room: null
})

export const getters = {}

export const actions = {
  sendTrack ({ state, commit }, track) {
    console.log(track)
  }
}

export const mutations = {
  setRoom (state, room) {
    state.room = room
  }
}
