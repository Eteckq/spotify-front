<template>
  <div>
    <span class="nextTrackText">
      <span v-if="tracks.length > 0">À venir...</span>
      <span v-else>Pas de musique en attente</span>
    </span>

    <v-divider />

    <div class="trackList">
      <div v-for="(track, id) in tracks" :key="id" class="track">
        <queue-item :queueitem="track" />
      </div>
    </div>
  </div>
</template>

<script>

import QueueItem from '../../components/QueueItem.vue'

export default {
  name: 'PlaylistPage',
  layout: 'room',
  components: {
    QueueItem
  },
  data () {
    return {
      tracks: []
    }
  },
  created () {
    setTimeout(() => {
      this.tracks = [JSON.parse('{"album":{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/2h93pZq0e7k5yf4dywlkpM"},"href":"https://api.spotify.com/v1/artists/2h93pZq0e7k5yf4dywlkpM","id":"2h93pZq0e7k5yf4dywlkpM","name":"Frank Ocean","type":"artist","uri":"spotify:artist:2h93pZq0e7k5yf4dywlkpM"}],"available_markets":["AD","AE","AL","AR","AT","AU","BA","BE","BG","BH","BO","BR","BY","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HR","HU","ID","IE","IL","IN","IS","IT","JO","JP","KW","KZ","LB","LI","LT","LU","LV","MA","MC","MD","ME","MK","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","RS","RU","SA","SE","SG","SI","SK","SV","TH","TN","TR","TW","UA","US","UY","VN","XK","ZA"],"external_urls":{"spotify":"https://open.spotify.com/album/3mH6qwIy9crq0I9YQbOuDf"},"href":"https://api.spotify.com/v1/albums/3mH6qwIy9crq0I9YQbOuDf","id":"3mH6qwIy9crq0I9YQbOuDf","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b273c5649add07ed3720be9d5526","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e02c5649add07ed3720be9d5526","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d00004851c5649add07ed3720be9d5526","width":64}],"name":"Blonde","release_date":"2016-08-20","release_date_precision":"day","total_tracks":17,"type":"album","uri":"spotify:album:3mH6qwIy9crq0I9YQbOuDf"},"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/2h93pZq0e7k5yf4dywlkpM"},"href":"https://api.spotify.com/v1/artists/2h93pZq0e7k5yf4dywlkpM","id":"2h93pZq0e7k5yf4dywlkpM","name":"Frank Ocean","type":"artist","uri":"spotify:artist:2h93pZq0e7k5yf4dywlkpM"}],"available_markets":["AD","AE","AL","AR","AT","AU","BA","BE","BG","BH","BO","BR","BY","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HR","HU","ID","IE","IL","IN","IS","IT","JO","JP","KW","KZ","LB","LI","LT","LU","LV","MA","MC","MD","ME","MK","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","RS","RU","SA","SE","SG","SI","SK","SV","TH","TN","TR","TW","UA","US","UY","VN","XK","ZA"],"disc_number":1,"duration_ms":184516,"explicit":false,"external_ids":{"isrc":"QZ5C81600003"},"external_urls":{"spotify":"https://open.spotify.com/track/3xKsf9qdS1CyvXSMEid6g8"},"href":"https://api.spotify.com/v1/tracks/3xKsf9qdS1CyvXSMEid6g8","id":"3xKsf9qdS1CyvXSMEid6g8","is_local":false,"name":"Pink + White","popularity":78,"preview_url":"https://p.scdn.co/mp3-preview/3ebaac6d4686eea331d448a290941364b047b985?cid=b37d57048fef48e7a7ff9427ed54f5d8","track_number":3,"type":"track","uri":"spotify:track:3xKsf9qdS1CyvXSMEid6g8"}'), JSON.parse('{"album":{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/2h93pZq0e7k5yf4dywlkpM"},"href":"https://api.spotify.com/v1/artists/2h93pZq0e7k5yf4dywlkpM","id":"2h93pZq0e7k5yf4dywlkpM","name":"Frank Ocean","type":"artist","uri":"spotify:artist:2h93pZq0e7k5yf4dywlkpM"}],"available_markets":["AD","AE","AL","AR","AT","AU","BA","BE","BG","BH","BO","BR","BY","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HR","HU","ID","IE","IL","IN","IS","IT","JO","JP","KW","KZ","LB","LI","LT","LU","LV","MA","MC","MD","ME","MK","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","RS","RU","SA","SE","SG","SI","SK","SV","TH","TN","TR","TW","UA","US","UY","VN","XK","ZA"],"external_urls":{"spotify":"https://open.spotify.com/album/3mH6qwIy9crq0I9YQbOuDf"},"href":"https://api.spotify.com/v1/albums/3mH6qwIy9crq0I9YQbOuDf","id":"3mH6qwIy9crq0I9YQbOuDf","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b273c5649add07ed3720be9d5526","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e02c5649add07ed3720be9d5526","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d00004851c5649add07ed3720be9d5526","width":64}],"name":"Blonde","release_date":"2016-08-20","release_date_precision":"day","total_tracks":17,"type":"album","uri":"spotify:album:3mH6qwIy9crq0I9YQbOuDf"},"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/2h93pZq0e7k5yf4dywlkpM"},"href":"https://api.spotify.com/v1/artists/2h93pZq0e7k5yf4dywlkpM","id":"2h93pZq0e7k5yf4dywlkpM","name":"Frank Ocean","type":"artist","uri":"spotify:artist:2h93pZq0e7k5yf4dywlkpM"}],"available_markets":["AD","AE","AL","AR","AT","AU","BA","BE","BG","BH","BO","BR","BY","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HR","HU","ID","IE","IL","IN","IS","IT","JO","JP","KW","KZ","LB","LI","LT","LU","LV","MA","MC","MD","ME","MK","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","RS","RU","SA","SE","SG","SI","SK","SV","TH","TN","TR","TW","UA","US","UY","VN","XK","ZA"],"disc_number":1,"duration_ms":184516,"explicit":false,"external_ids":{"isrc":"QZ5C81600003"},"external_urls":{"spotify":"https://open.spotify.com/track/3xKsf9qdS1CyvXSMEid6g8"},"href":"https://api.spotify.com/v1/tracks/3xKsf9qdS1CyvXSMEid6g8","id":"3xKsf9qdS1CyvXSMEid6g8","is_local":false,"name":"Pink + White","popularity":78,"preview_url":"https://p.scdn.co/mp3-preview/3ebaac6d4686eea331d448a290941364b047b985?cid=b37d57048fef48e7a7ff9427ed54f5d8","track_number":3,"type":"track","uri":"spotify:track:3xKsf9qdS1CyvXSMEid6g8"}')]
    }, 3500)
  }
}
</script>

<style lang="scss">
.nextTrackText{
  padding: 10px;
  padding-left: 20px;
  font-weight: bold;
font-size: 24px;
}

.trackList{

  .track {
    padding: 10px;
    border-bottom: 1px solid $grey03;
  }

}
</style>
