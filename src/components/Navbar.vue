<template>
  <div>
    <v-app-bar color="primary">
      <v-toolbar-title class="display-1 font-weight-black">Fake SW</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text v-if="isAuth" @click="logout()">
        <v-icon left>mdi-logout</v-icon>Wyloguj
      </v-btn>
      <v-hover v-slot:default="{ hover }">
        <v-btn
          :light="$vuetify.theme.dark ? false : true"
          :dark="$vuetify.theme.dark ? true : false"
          :outlined="hover ? false : true"
          :color="$vuetify.theme.dark ? 'white' : 'black'"
          icon
          depressed
          @click="$vuetify.theme.dark = !$vuetify.theme.dark"
        >
          <v-icon
            :color="hover ? $vuetify.theme.dark ? 'black' : 'white' : $vuetify.theme.dark ? 'white' : 'black'"
          >mdi-brightness-6</v-icon>
        </v-btn>
      </v-hover>
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
      this.$store.dispatch("logout");
    }
  }
};
</script>