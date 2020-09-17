<template>
  <v-app dark class="body">
    <top-menu />
    <v-main>
      <div class="bodyContent">
        <nuxt />
      </div>
    </v-main>
    <v-footer class="pa-0 footer">
      <player />
    </v-footer>
  </v-app>
</template>

<script>
import Vue from 'vue'
import TopMenu from '../components/TopMenu.vue'
import Player from '../components/Player'

export default {
  name: 'RoomLayout',
  components: {
    Player,
    TopMenu
  },
  mounted () {
    // Test si:
    // User à un authId en local storage (pour récupérer sa session après un reload par exemple)
    // User est bien connecté à spotify
    // Un socket est relié au serveur
    //

    // console.log('Wait..')
    if (!this.$store.getters['spotify/getStoredAuthId']) {
      this.$router.push('/')
      return
    }

    if (!this.$store.state.spotify.pizzly) {
      this.$store.commit('spotify/initPizzly')
    }

    if (!this.$socket) {
      this.initSocketAndJoinRoom()
    } else {
      if (!this.$store.state.socket.room) {
        this.joinRoom()
      }

      if (this.$store.state.socket.room !== this.$route.params.room) {
        console.log('Room changed')
        this.joinRoom()
      }
    }
  },
  methods: {
    initSocketAndJoinRoom () {
      Vue.prototype.$socket = this.$nuxtSocket({})

      this.$store.dispatch('spotify/getMe').then((user) => {
        this.$socket.emit('hello', { user })
        this.joinRoom()
      })
    },
    joinRoom () {
      this.$store.commit('socket/setRoom', this.$route.params.room)
      this.$socket.emit('joinRoom', { roomId: this.$route.params.room })

      // console.log('DONE')
    }
  }
}
</script>

<style lang="scss">
.body {
  position: relative;
  overflow: hidden;
  .bodyContent {
    // position: absolute;
    // top: 0;
    // bottom: 0px;
    // left: 0;
    // right: 0;
    height: 100%;
    // overflow: scroll;
    background: linear-gradient(
        180deg,
        #1d1d1d 8.85%,
        rgba(255, 255, 255, 0.034) 100%
      ),
      #1d1d1d;
  }

  .footer {
    // position: absolute;
    // overflow: hidden;
    // bottom: 0px;
    // left: 0;
    // right: 0;
    // height: 68px;
  }
}

.sliceText {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
