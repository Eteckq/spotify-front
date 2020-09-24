<template>
  <div v-if="queueItem" id="player">
    <v-progress-linear
      class="progressBar"
      height="4px"
      color="white"
      top
      :value="(timeline / queueItem.track.duration_ms) * 100"
      opacity="0.5"
    />

    <div class="content d-flex justify-space-between">
      <v-img height="64" width="64" max-height="64" max-width="64" :src="queueItem.track.album.images[2].url" />

      <div class="d-flex flex-column align-center justify-space-between pt-2">
        <div class="titleInfos d-flex flex-inline align-center">
          <span class="title sliceText">{{ queueItem.track.name }} </span>
          <span class="dot" />
          <span class="author sliceText">{{ queueItem.track.artists[0].name }}</span>
        </div>

        <span class="adder">by {{ queueItem.user.display_name }}</span>
      </div>

      <v-icon class="iconHate" @click="voteSkip">
        fa-angry
      </v-icon>
    </div>
    <script src="https://sdk.scdn.co/spotify-player.js" />
  </div>
</template>

<script>
export default {
  computed: {
    queueItem () {
      return this.$store.getters['socket/getCurrentQueueItem']
    },
    timeline () {
      return this.$store.getters['socket/getTimeline']
    }
  },
  watch: {
    queueItem () {
      this.changeTrack()
    }
  },
  created () {
    // eslint-disable-next-line no-undef
    /* new Spotify.Player({
      name: 'Sharly',
      getOAuthToken: (callback) => {
        callback('access token here')
      },
      volume: 0.5
    }) */
  },
  methods: {
    voteSkip () {
      this.$socket.emit('voteSkipTrack')
    },
    changeTrack () {
      this.$store.dispatch('spotify/changeTrack', { trackUri: this.queueItem.track.uri, position_ms: this.timeline })
    }
  }
}
</script>

<style lang="scss">

#player{
  width: 100%;

  .content{
    font-family: $font-montserrat;
    .titleInfos{
      .title{
        font-family: $font-roboto;
        font-size: 40px;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        font-weight: bold;
        max-width: 40vw;
      }
      .dot{
        background-color: $grey02;
        width: 3px;
        height: 3px;
        border-radius: 100%;
        margin: 0 5px;
      }
      .author{
        font-size: 10px;
        color: $grey01;
        max-width: 10vw;
      }
    }

    .adder{
      font-size: 10px;
        color: $grey01;
    }

    .iconHate{
      font-size: 35px;
      padding-right: 8px;
    }
  }

}

</style>>
