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
  computed: {
    tracks () {
      return this.$store.getters['socket/getQueueItems']
    }
  },
  created () {

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
  overflow-y: scroll;
  overflow-x: hidden;
  position: absolute;
  top: 36px;
  left: 0;
  right: 0;
  bottom: 0;
  .track {
    padding: 10px;
    border-bottom: 1px solid $grey03;
  }

}
</style>
