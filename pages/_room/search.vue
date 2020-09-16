<template>
  <div>
    <div class="header d-flex pa-2">
      <v-icon class="pr-2" @click="$router.go(-1)">
        fa-arrow-left
      </v-icon>
      <v-text-field
        v-model="query"
        light
        class="searchBar"
        hide-details
        solo
        dense
        rounded
        @keydown.enter="search"
      />
    </div>
    <div class="tracks">
      <div v-for="(track, id) in tracks" :key="id">
        <trackSearch class="track" :track="track" />
        <hr class="separator">
      </div>
    </div>
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
      tracks: []
    }
  },
  methods: {
    search () {
      this.$store.dispatch('spotify/getTracksFromSearch', { query: this.query }).then((tracks) => {
        this.tracks = tracks
      })
    }
  }
}
</script>

<style lang="scss">

.header {

  .searchBar{
      // width: 50%;
  }

  .v-text-field.v-text-field--solo.v-input--dense > .v-input__control {
      min-height: 0;
  }
}

.tracks {
overflow: scroll;
position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  bottom: 0;
  .track{
    padding: 10px 20px;
  }

  .separator {
    border: 1px solid #545454;
  }

}

</style>
