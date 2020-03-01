<template>
  <div>
    <v-app-bar color="primary">
      <v-toolbar-title class="display-1 font-weight-black">Fake Star wars</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text v-if="isAuth" @click="logout()">
          <v-icon left>mdi-logout</v-icon>
          Wyloguj
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
    computed: {
        isAuth() {
            return this.$store.getters.isUserAuthenticated;
        }
    },
    methods: {
        logout() {
            this.$store.dispatch('logout');
        }
    }
}
</script>