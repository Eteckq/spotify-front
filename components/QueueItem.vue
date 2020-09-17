<template>
  <div class="trackView">
    <div class="leftInfos">
      <v-icon class="iconHate" @click="hateTrack">
        fa-angry
      </v-icon>
      <div class="name">
        {{ queueitem.track.name }}
      </div>
      <div class="dot" />
      <div class="author">
        {{ queueitem.track.artists[0].name }}
      </div>
    </div>
    <div class="adder">
      + {{ queueitem.user.display_name }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['queueitem'],
  methods: {
    hateTrack () {
      this.$socket.emit('hateTrack', { trackId: this.queueitem.track.id })
    }
  }
}
</script>

<style lang="scss" scoped>
.trackView {
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: $font-montserrat;

  .leftInfos {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    .iconHate {
      padding-left: 5px;
    }

    .name {
      padding-left: 10px;
      font-size: 15px;
      font-weight: bold;

      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .dot {
      background-color: $grey03;
      width: 4px;
      height: 4px;
      border-radius: 100%;
      margin: 0 7px;
    }

    .author {
      font-size: 11px;
      color: $grey02;
    }
  }

  .adder {
    font-size: 8px;
    color: $grey01;
  }
}
</style>
