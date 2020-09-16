<template>
  <div
    class="pa-2 topMenu"
    :class="[{ searchMode: $route.matched[0].path === '/:room/search' },{parametersMode: $route.matched[0].path === '/:room/parameters'}]"
  >
    <div class="leftMenu">
      <v-icon class="backIcon" @click="$router.go(-1)">
        fa-arrow-left
      </v-icon>

      <v-icon class="searchIcon" @click="$router.push('search')">
        fa-search
      </v-icon>
    </div>

    <span class="appTitle">
      Sharly
    </span>

    <div class="rightMenu">
      <v-icon @click="$router.push('parameters')">
        fa-bars
      </v-icon>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      // isSearchbarOpen: false
    }
  },
  created () {
    console.log(this.$route)
  }
}
</script>

<style lang="scss">
.topMenu {
  background-color: #1e1e1e;
  text-align: center;
  * {
    transition: all 800ms;
  }

  .leftMenu {
    float: left;
    .searchIcon {
      position: absolute;
      transform: translateX(0);
    }

    .backIcon {
      position: absolute;
      transform: translateX(-100px);
    }
  }

  .appTitle {

    font-size: 20px;
  }

  .rightMenu {
    float: right;
  }

  &.searchMode {
    .appTitle {
        opacity: 0.6;
    }

    .leftMenu {
      .searchIcon {
        transform: translateX(200px);
        opacity: 0;
      }

      .backIcon {
        transform: translateX(0);
      }
    }

    .rightMenu{
       transform: translateX(100px);
    }
  }

  &.parametersMode {
    .leftMenu {
      .searchIcon {
        transform: translateX(-100px);
        opacity: 0;
      }

      .backIcon {
        transform: translateX(0);
      }
    }

    .rightMenu{
       transform: translateX(50px);
    }
  }
}
</style>
