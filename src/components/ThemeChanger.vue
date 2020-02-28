<template>
  <div>
    <v-hover v-slot:default="{ hover }">
      <v-btn
        :light="$vuetify.theme.dark ? false : true"
        :dark="$vuetify.theme.dark ? true : false"
        :outlined="hover ? false : true"
        :color="$vuetify.theme.dark ? 'white' : 'black'"
        fab
        fixed
        depressed
        bottom
        right
        @click="$vuetify.theme.dark = !$vuetify.theme.dark"
      >
        <v-icon
          x-large
          :color="hover ? $vuetify.theme.dark ? 'black' : 'white' : $vuetify.theme.dark ? 'white' : 'black'"
        >mdi-brightness-6</v-icon>
      </v-btn>
    </v-hover>
  </div>
</template>