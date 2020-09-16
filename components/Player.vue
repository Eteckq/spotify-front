<template>
  <div id="player">
    <v-progress-linear
      class="progressBar"
      height="4px"
      color="white"
      top
      :value="50"
      opacity="0.5"
    />

    <div class="content d-flex justify-space-between">
      <v-img height="64" width="64" max-height="64" max-width="64" src="https://i.scdn.co/image/ab67616d000048518863bc11d2aa12b54f5aeb36" />

      <div class="d-flex flex-column align-center justify-space-between pt-2">
        <div class="titleInfos d-flex flex-inline align-center">
          <span class="title">Là-Haut</span>
          <span class="dot" />
          <span class="author">Hugo TSR</span>
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
  data () {
    return {

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
