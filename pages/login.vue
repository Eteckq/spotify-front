<template>
  <v-main>
    <v-card
      class="ma-auto mx-sm-13 text-center"
      :loading="loading"
    >
      <v-card-text>
        <div class="ma-auto">
          <div v-if="state == stateList.WAIT_SPOTIFY">
            <v-btn x-large class="my-2" color="green" :disabled="loading" @click="spotifyConnection">
              {{ $t("CONNECT_WITH_SPOTIFY") }}
            </v-btn>

            <v-btn class="my-2" :disabled="loading" @click="annonymousConnection">
              {{ $t("CONNECT_WITHOUT_SPOTIFY") }}
            </v-btn>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </v-main>
</template>

<script>
import Pizzly from 'pizzly-js'

export default {
  layout: 'empty',
  data () {
    return {
      stateList: {
        WAIT_SOCKET: 'WAITING_SERVER',
        WAIT_SPOTIFY: 'WAITING_SPOTIFY'
      },
      loading: false,
      state: null
    }
  },
  mounted () {
    // this.socket = this.$nuxtSocket({})

  },
  created () {
    this.state = this.stateList.WAIT_SPOTIFY
  },
  methods: {
    spotifyConnection () {
      this.loading = true
      this.$pizzly = new Pizzly({ host: 'pizzly.example.org' })
      this.$pizzly
        .integration('spotify')
        .connect()
        .then(this.connectSuccess)
        .catch(this.connectError)
    },
    annonymousConnection () {

    },
    serverSocketConnected () {

    },
    connectSuccess (data) {
      // On success, we update the user object
      console.log('Successfully logged in!', data)
    },
    connectError (err) {
      console.error(err)
      alert('Something went wrong. Look at the logs.')
    }
  }

}
</script>
