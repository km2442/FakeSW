<template>
  <div>
    <v-tabs v-model="tab" centered icons-and-text>
      <v-tabs-slider></v-tabs-slider>
      <v-tab href="#tab-1">
        Filmy
        <v-icon large>mdi-movie-open</v-icon>
      </v-tab>
      <v-tab href="#tab-2">
        Planety
        <v-icon large>mdi-earth</v-icon>
      </v-tab>
      <v-tab href="#tab-3">
        Osoby
        <v-icon large>mdi-account-group</v-icon>
      </v-tab>
      <v-tab href="#tab-4">
        Gatunki
        <v-icon large>mdi-paw</v-icon>
      </v-tab>
      <v-tab href="#tab-5">
        Statki kosmiczne
        <v-icon large>mdi-airplane-takeoff</v-icon>
      </v-tab>
      <v-tab href="#tab-6">
        Pojazdy
        <v-icon large>mdi-car-sports</v-icon>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item value="tab-1">
        <Movies />
      </v-tab-item>
      <v-tab-item value="tab-2">
        <Planets />
      </v-tab-item>
      <v-tab-item value="tab-3">
        <People />
      </v-tab-item>
      <v-tab-item value="tab-4">
        <Species />
      </v-tab-item>
      <v-tab-item value="tab-5">
        <Starships />
      </v-tab-item>
      <v-tab-item value="tab-6">
        <Vehicles />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
var Movies = () => import(/* webpackChunkName: "Movies" */ './Movies')
var Planets = () => import(/* webpackChunkName: "Planets" */ './Planets')
var People = () => import(/* webpackChunkName: "People" */ './People')
var Species = () => import(/* webpackChunkName: "Species" */ './Species')
var Starships = () => import(/* webpackChunkName: "Starships" */ './Starships')
var Vehicles = () => import(/* webpackChunkName: "Vehicles" */ './Vehicles')
export default {
  components: { Movies, Planets, People, Species, Starships, Vehicles },
  data: () => ({
    tab: null
  })
};
</script>