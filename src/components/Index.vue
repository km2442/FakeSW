<template>
  <div>
    <p class="display-3 font-weight-bold text-center ma-3">Zaloguj się</p>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md6 lg4>
          <v-card outlined>
            <v-card-text>
              <v-form>
                <v-text-field label="Login" prepend-icon="mdi-account" type="text"></v-text-field>
                <v-text-field label="Hasło" prepend-icon="mdi-lock" type="password"></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-hover v-slot:default="{ hover }">
                <v-btn large block color="primary" :outlined="hover ? false : true">Wyślij</v-btn>
              </v-hover>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    //
  })
};
</script>