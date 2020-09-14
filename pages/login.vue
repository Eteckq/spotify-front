<template>
  <v-main>
    <script src="https://cdn.jsdelivr.net/npm/pizzly-js@v0.2.7/dist/index.umd.min.js" />
    <v-card
      class="ma-auto mx-sm-13 text-center"
      :loading="loading"
    >
      <v-card-text>
        <div class="ma-auto">
          <div v-if="state == stateList.WAIT_SPOTIFY">
            <v-btn x-large class="my-2" :disabled="loading" @click="spotifyConnection">
              {{ $t("CONNECT_WITH_SPOTIFY") }}
            </v-btn>

            <!-- <v-btn class="my-2" :disabled="loading" @click="annonymousConnection">
              {{ $t("CONNECT_WITHOUT_SPOTIFY") }}
            </v-btn> -->
          </div>
        </div>
      </v-card-text>
    </v-card>

    <v-card v-if="savedAuthIds && savedAuthIds.length > 0" class="ma-sm-13">
      Saved session
      <p v-for="(id, index) in savedAuthIds" :key="index" @click="restoreSpotifySession(id.authId)">
        {{ id.name }}
      </p>
    </v-card>
  </v-main>
</template>

<script>

export default {
  layout: 'empty',
  data () {
    return {
      stateList: {
        WAIT_SOCKET: 'WAITING_SERVER',
        WAIT_SPOTIFY: 'WAITING_SPOTIFY'
      },
      loading: false,
      state: null,
      savedAuthIds: null
    }
  },
  watch: {
  },
  created () {
    this.state = this.stateList.WAIT_SPOTIFY
  },
  mounted () {
    // eslint-disable-next-line no-undef
    const pizzly = new Pizzly({ host: 'https://camaradio-auth.herokuapp.com', publishableKey: 'publish' })

    this.$store.commit('spotify/initPizzly', { pizzly: pizzly.integration('spotify') })

    // this.savedAuthIds = this.$store.state.spotify.savedAuthIds
  },
  methods: {
    spotifyConnection () {
      this.loading = true

      // this.pizzly
      //   .auth('f38248b0-f680-11ea-8d7c-4bded2f791d5')
      //   .connect()

      // this.pizzly
      //   .auth('f38248b0-f680-11ea-8d7c-4bded2f791d5')
      //   .get('/me')
      //   .then((data) => {
      //     console.log(data)
      //   })

      this.$store.dispatch('spotify/login')
        .then(this.connectSuccess)
        .catch(this.connectError)
    },
    restoreSpotifySession (id) {
      this.$store.dispatch('spotify/restoreSession', { authId: id })
        .then(this.connectSuccess)
        .catch(this.connectError)
    },
    connectSuccess (data) {
      // On success, we update the user object
      const authId = data.authId
      console.log(authId)

      this.$store.dispatch('spotify/getMe').then((data) => {
        console.log(data)
        this.$store.commit('spotify/setAuthId', { authId })
      })
    },
    connectError (err) {
      this.loading = false
      console.error(err)
    }
  }

}
</script>
