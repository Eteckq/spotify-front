<template>
  <div class="trackView d-flex align-center">
    <v-icon class="iconHate">
      fa-angry
    </v-icon>

    <div class="name">
      {{ track.name }}
    </div>
    <div class="dot" />
    <div class="author">
      {{ track.artists[0].name }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['track']
}
</script>

<style lang="scss" scoped>

.trackView{
  display: flex;
  flex-direction: row;
  font-family: $font-montserrat;

  .iconHate {
    padding: 0 7px;
  }

  .name{
      font-size: 15px;
      font-weight: bold;
  }

  .dot {
    background-color: $grey03;
    width: 4px;
    height: 4px;
    border-radius: 100%;
    margin: 0 7px;
  }

  .author{
      font-size: 11px;
      color: $grey02;
  }
}

</style>
