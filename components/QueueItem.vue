<template>
  <div class="trackView">
    <div class="leftInfos">
      <div class="haters">
        <v-icon class="iconHate" @click="hateTrack">
          fa-angry
        </v-icon>
        <span v-if="queueitem.haters.length > 0" class="hatesCount">{{ queueitem.haters.length }}</span>
      </div>
      <div class="name sliceText">
        {{ queueitem.track.name }}
      </div>
      <div class="dot" />
      <div class="author sliceText">
        {{ queueitem.track.artists[0].name }}
      </div>
    </div>
    <div class="adder sliceText">
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

    .haters {
      position: relative;
      .iconHate {
        padding-left: 5px;
      }

      .hatesCount{
        background-color: rgb(158, 0, 0);
        min-width: 10px;
        font-size: 7px;
        text-align: center;
        border-radius: 100%;
        position: absolute;
        bottom: -3px;
        right: -2px;
      }
    }

    .name {
      padding-left: 10px;
      font-size: 15px;
      font-weight: bold;

      max-width: 45vw;
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
      max-width: 20vw;
    }
  }

  .adder {
    font-size: 8px;
    color: $grey01;
      max-width: 15vw;
  }
}
</style>
