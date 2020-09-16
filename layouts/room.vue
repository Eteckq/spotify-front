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
import TopMenu from '../components/TopMenu.vue'
import Player from '../components/Player'

export default {
  name: 'RoomLayout',
  components: {
    Player,
    TopMenu
  },
  data () {
    return {
      socket: null
    }
  },
  mounted () {
    if (!this.$store.state.spotify.authId) {
      this.$router.push('/')
    }

    if (!this.socket) {
      this.socket = this.$nuxtSocket({})
      console.log('INIT SOCKET IO')
    }

    if (!this.$store.state.socket.room) {
      this.$store.commit('socket/setRoom', this.$route.params.room)
    }
  }
}
</script>

<style lang="scss">
.body{
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
    background: linear-gradient(180deg, #1D1D1D 8.85%, rgba(255, 255, 255, 0.034) 100%), #1D1D1D;
  }

  .footer{
    // position: absolute;
    // overflow: hidden;
    // bottom: 0px;
    // left: 0;
    // right: 0;
    // height: 68px;
  }
}
// Sharly
// friendio
</style>
