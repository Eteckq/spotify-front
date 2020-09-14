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
    this.$store.commit('spotify/initPizzly')
  }

}
</script>
