<template>
  <div id="player">
    <v-progress-linear
      class="progressBar"
      height="4px"
      color="white"
      top
      :value="timeline"
      opacity="0.5"
    />
    {{ timeline }}

    <div v-if="queueItem" class="content d-flex justify-space-between">
      <v-img height="64" width="64" max-height="64" max-width="64" :src="queueItem.track.album.images[2].url" />

      <div class="d-flex flex-column align-center justify-space-between pt-2">
        <div class="titleInfos d-flex flex-inline align-center">
          <span class="title">{{ queueItem.track.name }} </span>
          <span class="dot" />
          <span class="author">{{ queueItem.track.artists[0].name }}</span>
        </div>

        <span class="adder">by Yoyo</span>
      </div>

      <v-icon class="iconHate">
        fa-angry
      </v-icon>
    </div>
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
