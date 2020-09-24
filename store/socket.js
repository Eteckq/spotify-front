export const state = () => ({
  room: null,
  users: [],
  queueItems: [],
  currentQueueItem: null,
  position_ms: 0
})

export const getters = {
  getQueueItems: (state) => { return state.queueItems },
  getUsers: (state) => { return state.users },
  getCurrentQueueItem: (state) => { return state.currentQueueItem },
  getTimeline: (state) => {
    return state.position_ms
  }
}

export const actions = {
  sendTrack ({ state, commit }, track) {
    console.log(track)
  },
  sendCurrentQueueItem ({ state, commit }, { queueItem, position_ms }) {
    commit('setTimeline', position_ms)
    commit('setCurrentQueueItem', queueItem)
    startTimeline(position_ms, queueItem.track.duration_ms, commit)
  }
}

export const mutations = {
  setRoom (state, room) {
    state.room = room
  },
  setQueueItems (state, { queueItems }) {
    state.queueItems = queueItems
  },
  setCurrentQueueItem (state, queueItem) {
    state.currentQueueItem = queueItem
  },
  setTimeline (state, timeline) {
    state.position_ms = timeline
  },
  setConnectedUsers (state, users) {
    state.users = users
  }
}

let timelineInterval = null

function startTimeline (positionMs, durationMs, commit) {
  clearInterval(timelineInterval)

  const started = Date.now()
  let timeline = positionMs

  timelineInterval = setInterval(() => {
    timeline = positionMs + Date.now() - started
    if (timeline > durationMs) {
      clearInterval(timelineInterval)
    }

    commit('setTimeline', timeline)
  }, 300)
}
