<template>
  <v-app dark>
    <v-container class="fill-height">
      <nuxt />
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
    }
  },

  beforeMount () {
    if (!this.$store.state.spotify.pizzly) {
      this.$store.commit('spotify/initPizzly')
    }
  }

}
</script>
