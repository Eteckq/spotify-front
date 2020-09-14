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
  created () {
    const authId = localStorage.getItem('authId')
    if (authId === null) {
      this.$router.push('/')
    }
  }
}
</script>
