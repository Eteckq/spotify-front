<template>
  <v-main>
    <div class="ma-auto mx-sm-13 text-center">
      <v-btn color="#1DB954" x-large class="my-2" :disabled="loading" @click="spotifyConnection">
        {{ $t("CONNECT_WITH_SPOTIFY") }}
      </v-btn>
    </div>

    <v-card v-if="savedAuthIds && savedAuthIds.length > 0" class="ma-sm-13 ma-3 pa-3">
      <v-card-title>Saved session</v-card-title>
      <v-card
        v-for="(id, index) in savedAuthIds"
        :key="index"
        :disabled="loading"
        class="ma-2"
        elevation="2"
        @click="restoreSpotifySession(id.authId)"
      >
        <v-card-actions>
          {{ id.name }}
          <v-spacer />
          <v-btn
            icon
          >
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-card>
  </v-main>
</template>

<script>

export default {
  name: 'IndexPage',
  layout: 'empty',
  data () {
    return {
      loading: true,
      savedAuthIds: null
    }
  },
  mounted () {
    this.loading = false
    this.savedAuthIds = this.$store.state.spotify.savedAuthIds
  },
  methods: {
    spotifyConnection () {
      this.loading = true

      this.$store.dispatch('spotify/login')
        .then(({ authId, name }) => {
          this.$store.commit('spotify/setAuthId', { authId, name })
          this.$router.push('default')
        })
        .catch(this.connectError)
    },
    restoreSpotifySession (authId) {
      this.loading = true
      this.$store.dispatch('spotify/restoreSession', { authId })
        .then((name) => {
          if (!name) {
            this.$store.commit('spotify/deleteAuthId', { authId, name })
            this.savedAuthIds = this.$store.state.spotify.savedAuthIds
          } else {
            this.$store.commit('spotify/setAuthId', { authId, name })
            this.$router.push('default/')
          }
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
