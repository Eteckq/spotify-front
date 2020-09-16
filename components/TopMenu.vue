<template>
  <div class="pa-2 d-flex justify-space-between topMenu">
    <div>
      <v-icon v-if="$route.matched[0].path !== '/:room/search'" @click="$router.push('search')">
        fa-search
      </v-icon>
      <v-icon v-else @click="$router.go(-1)">
        fa-arrow-left
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
  },
  created () {

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
