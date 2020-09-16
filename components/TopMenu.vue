<template>
  <div class="pa-2 d-flex justify-space-between topMenu">
    <div>
      <v-icon @click="$router.push('search')">
        fa-search
      </v-icon>
    </div>

    <span class="appTitle">
      Sharly
    </span>

    <div class="text-right">
      <v-icon>
        fa-bars
      </v-icon>
    </div>
  </div>
</template>

<script>

export default {
  components: {

  },
  data () {
    return {
      // isSearchbarOpen: false
    }
  }
}
</script>

<style lang="scss">

.topMenu{
    background-color: #1E1E1E;
  .appTitle{
    font-size: 20px;
  }
}
</style>
