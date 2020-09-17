<template>
  <div class="trackResult">
    <v-img
      class="image"
      :src="track.album.images[2].url"
      height="64"
      width="64"
      max-height="64"
      max-width="64"
    />
    <div class="infos">
      <div class="name">
        {{ track.name | slice(25) }}
      </div>
      <div class="author">
        {{ track.artists[0].name | slice(20) }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['track'],
  methods: {

  }
}
</script>

<style lang="scss">

.trackResult{
  font-family: $font-montserrat;
  display: flex;
  flex-direction: row;

  .infos {
    padding-left: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .name {
      font-size: 14px;
      font-weight: bold;
    }

    .author {
      font-size: 11px;
      color: $grey01;
      font-weight: 600;
    }
  }
}

</style>
