<template>
  <v-app dark>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <v-footer>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'ApplicationLayout',
  mounted () {
    if (!this.$store.state.spotify.authId) {
      this.$router.push('/')
    }
  }
}
</script>
