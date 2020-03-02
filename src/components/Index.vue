<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6 lg4>
        <v-card outlined>
          <v-card-title>Zaloguj się</v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field label="Login" prepend-icon="mdi-account" type="text" v-model="login"></v-text-field>
              <v-text-field
                label="Hasło"
                prepend-icon="mdi-lock"
                type="password"
                v-model="password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-alert
            type="error"
            dense
            outlined
            prominent
            class="mx-2 my-0"
            :value="isError"
            transition="scale-transition"
          >
            <v-row align="center">
              <v-col class="grow">Nieprawidłowy login lub hasło</v-col>
              <v-col class="shrink">
                <v-btn @click="dismisLoginError()">Ok</v-btn>
              </v-col>
            </v-row>
          </v-alert>
          <v-card-actions>
            <v-hover v-slot:default="{ hover }">
              <v-btn large block :color="hover ? 'success' : 'primary'" @click="loginUser()">Wyślij</v-btn>
            </v-hover>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    login: null,
    password: null
  }),
  computed: {
    isError() {
      return this.$store.getters.isLoginError;
    }
  },
  methods: {
    loginUser() {
      this.$store.dispatch("login", { login: this.login, pass: this.password });
    },
    dismisLoginError() {
      this.$store.commit("resetLoginError");
    }
  }
};
</script>