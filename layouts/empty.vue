<template>
  <v-app dark>
    <script src="https://cdn.jsdelivr.net/npm/pizzly-js@v0.2.7/dist/index.umd.min.js" />
    <v-container class="fill-height">
      <nuxt />
    </v-container>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'login',
          to: '/login'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Playlist',
          to: '/playlist'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
