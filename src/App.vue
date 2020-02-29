<template>
  <v-app>
    <v-content>
      <router-view />
    </v-content>
    <ThemeChanger />
  </v-app>
</template>

<script>
import ThemeChanger from "./components/ThemeChanger";
export default {
  name: "App",
  components: { ThemeChanger },
  data: () => ({
    //
  })
};
</script>
