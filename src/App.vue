<template>
  <v-app>
    <Navbar />
    <v-content>
      <router-view />
    </v-content>
    <ThemeChanger />
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import ThemeChanger from "./components/ThemeChanger";
export default {
  name: "App",
  components: { ThemeChanger, Navbar },
  data: () => ({
    //
  })
};
</script>
