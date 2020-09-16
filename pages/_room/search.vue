<template>
  <div>
    <div class="header">
      <v-text-field
        v-model="query"
        light
        class="searchBar"
        hide-details
        solo
        dense
        rounded
        @keyup="search"
      />
    </div>
    <div class="tracks">
      <div v-for="(track, id) in tracks" :key="id">
        <v-list-item :key="id" @click="selectTrack(id)">
          <trackSearch class="track" :track="track" />
        </v-list-item>
        <v-divider />
      </div>
    </div>

    <!-- <v-tabs
      fixed-tabs
      color="white"
      right
    >
      <v-tab>Musiques</v-tab>
      <v-tab>Aristes</v-tab>

      <v-tab-item
        v-for="n in 2"
        :key="n"
      >
        <v-container fluid>
          <div class="tracks">
            <div v-for="(track, id) in artists" :key="id">
              <trackSearch class="track" :track="track" />
              <hr class="separator">
            </div>
          </div>
        </v-container>
      </v-tab-item>
    </v-tabs> -->
  </div>
</template>

<script>
import TrackSearch from '../../components/TrackSearch'

export default {
  name: 'SearchPage',
  layout: 'application',
  components: {
    TrackSearch
  },
  data () {
    return {
      query: '',
      tab: null,
      tracks: []
    }
  },
  methods: {
    search () {
      if (this.query === '') {
        return
      }
      this.$store.dispatch('spotify/getTracksFromSearch', { query: this.query }).then((tracks) => {
        this.tracks = tracks
      })
    },
    selectTrack (id) {
      this.$store.dispatch('socket/sendTrack', this.tracks.splice(id, 1))
    }
  }
}
</script>

<style lang="scss">

.header {

  .searchBar{
      width: 70%;
      margin: auto;
  }

  .v-text-field.v-text-field--solo.v-input--dense > .v-input__control {
      min-height: 30px;
  }

  .v-input__slot{
    padding: 0 0px;
  }

  .v-tab:before {
    background-color: inherit;
  }
}

.tracks {
overflow: scroll;
position: absolute;
  top: 96px;
  left: 0;
  right: 0;
  bottom: 0;
  .track{
    padding: 10px 20px;
  }

}

</style>
