<template>
  <v-main>
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
    const pizzly = new Pizzly({ host: 'https://camaradio-auth.herokuapp.com', publishableKey: 'publish' }).integration('spotify')

    this.$store.commit('spotify/initPizzly', { pizzly })

    this.savedAuthIds = this.$store.state.spotify.savedAuthIds
  },
  methods: {
    spotifyConnection () {
      this.loading = true

      this.$store.dispatch('spotify/login')
        .then(({ authId, name }) => {
          this.$store.commit('spotify/setAuthId', { authId, name })

          this.$router.push('/playlist')
        })
        .catch(this.connectError)
    },
    restoreSpotifySession (authId) {
      this.$store.dispatch('spotify/restoreSession', { authId })
        .then((name) => {
          this.$store.commit('spotify/setAuthId', { authId, name })
          this.$router.push('/playlist')
        })
        .catch(this.connectError)
    },
    connectError (err) {
      this.loading = false
      console.error(err)
    }
  }

}
</script>
