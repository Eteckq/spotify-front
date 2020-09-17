export default {
  url: 'http://localhost:3001',
  vuex: {
    mutations: [{
      updateTrackList: 'socket/setQueueItems'
    }, { updateConnectedUsersList: 'socket/setConnectedUsers' }
    ],
    actions: [
      { currentTrackChange: 'socket/sendCurrentQueueItem' }
    ]

    // emitBacks: [
    //   {
    //     // When "socket/sample2" state changes,
    //     // emit back the event "sample2"
    //     'socket/sample2': 'sample2'
    //   }
    // ]
  }
}
