<template>
  <div class="parameters">
    <div class="header">
      <div class="roomName">
        Room - Default
      </div>
      <div class="connectedUsers">
        3 utilisateurs connectés
      </div>
    </div>
    <div v-if="users.length == 0">
      <div>Vous êtes le seul membre de cette salle</div>
      <div>Code de la salle : {{ $route.params.room }}</div>
    </div>

    <div v-for="(user, id) in users" v-else :key="id" class="userList">
      {{ user.display_name }}
    </div>

    <div class="joinRoomBtns text-center">
      <v-btn
        rounded
      >
        Rejoindre une room
      </v-btn>
      <v-btn
        rounded
      >
        Créer une room
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ParametersPage',
  layout: 'room',

  data () {
    return {
      users: [
        {
          display_name: 'yoyo'
        },
        {
          display_name: 'tom'
        },
        {
          display_name: 'jd'
        }
      ]
    }
  },
  computed: {
    /* users () {
      return this.$store.getters['socket/getUsers']
    } */
  }
}
</script>

<style lang="scss">
.parameters {
  // height: 100vh;
  .header {
    text-align: center;
    font-size: 24px;
    .roomName {
    font-weight: bold;
      color: $grey03;
    }
    .connectedUsers {
      font-weight: 500;
      color: white;
    }

    .joinRoomBtns {
      position: absolute;
      bottom: 0;
    }
  }

  .userList {
    text-align: center;
    font-size: 22px;
    color: $grey01;
    font-weight: 600;
  }
}
</style>
