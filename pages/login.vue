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

            <v-btn class="my-2" :disabled="loading" @click="annonymousConnection">
              {{ $t("CONNECT_WITHOUT_SPOTIFY") }}
            </v-btn>
          </div>
        </div>
      </v-card-text>
    </v-card>

    <v-card v-if="savedAuthIds && savedAuthIds.length > 0" class="ma-sm-13">
      <p v-for="(id, index) in savedAuthIds" :key="index">
        {{ id }}
      </p>
    </v-card>
  </v-main>
</template>

<script>
// import Pizzly from 'pizzly-js'
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
  created () {
    this.state = this.stateList.WAIT_SPOTIFY
  },
  mounted () {
    this.$pizzly = new Pizzly({ host: 'https://camaradio-auth.herokuapp.com', publishableKey: 'publish' }).integration('spotify')
    const savedIds = localStorage.getItem('savedAuthIds')

    if (savedIds !== null) {
      this.savedAuthIds = JSON.parse(savedIds)
      if (this.savedAuthIds === null) {
        this.savedAuthIds = []
      }
    } else {
      this.savedAuthIds = []
    }
  },
  methods: {
    spotifyConnection () {
      this.loading = true

      this.$pizzly
        .auth(localStorage.getItem('authId'))
        .connect()
        .then(this.connectSuccess)
        .catch(this.connectError)
    },
    annonymousConnection () {

    },
    serverSocketConnected () {

    },
    addIdInStorage (authId) {
      this.savedAuthIds.push(authId)
      this.savedAuthIds = [...new Set(this.savedAuthIds)]

      localStorage.setItem('savedAuthIds', JSON.stringify(this.savedAuthIds))
      localStorage.setItem('authId', authId)
    },
    connectSuccess (data) {
      // On success, we update the user object
      const authId = data.authId

      this.addIdInStorage(authId)

      this.$pizzly
        .auth(authId)
        .get('/me')
        .then(response => response.json())
        .then(data => console.log(data)) // do something with the JSON payload (aka data)
        .catch(console.error)
    },
    connectError (err) {
      this.loading = false
      console.error(err)
    }
  }

}
</script>
