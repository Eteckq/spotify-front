<template>
  <div class="parameters">
    <div v-if="users.length == 0">
      <div>Vous êtes le seul membre de cette salle</div>
      <div>Code de la salle : {{ $route.params.room }}</div>
    </div>

    <div v-for="(user, id) in users" v-else :key="id">
      {{ user.display_name }}
    </div>
  </div>
</template>

<script>

export default {
  name: 'ParametersPage',
  layout: 'room',

  data () {
    return {

    }
  },
  computed: {
    users () {
      return this.$store.getters['socket/getUsers']
    }
  },
  methods: {

  }
}
</script>

<style lang="scss">

.parameters {

}

</style>
