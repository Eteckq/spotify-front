<template>
  <div>
    <h1 @click="$router.push('/searchTrack')">
      Searchbar
    </h1>

    <h2>Bouton menu</h2>

    <h2>Liste des musiques</h2>
  </div>
</template>

<script>
export default {
  name: 'PlaylistPage',
  layout: 'application'
}
</script>
