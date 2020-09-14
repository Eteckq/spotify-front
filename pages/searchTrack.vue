<template>
  <div>
    <h2 @click="$router.push('/playlist')">
      Back button
    </h2>

    <h1>Input text (search)</h1>

    <h2>Liste des musiques trouvées</h2>
  </div>
</template>

<script>
export default {
  name: 'SearchPage',
  layout: 'application',
  methods: {
    search (query) {
      this.$store.dispatch('spotify/getTracksFromSearch', { query }).then((tracks) => {
        console.log(tracks)
      })
    }
  }
}
</script>
