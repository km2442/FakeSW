<template>
  <div>
    <v-tabs v-model="tab" background-color="secondary" centered dark icons-and-text>
      <v-tabs-slider></v-tabs-slider>
      <v-tab href="#tab-1">
        Planety
        <v-icon large>mdi-earth</v-icon>
      </v-tab>
      <v-tab href="#tab-2">
        Osoby
        <v-icon large>mdi-account-group</v-icon>
      </v-tab>
    </v-tabs>

    <v-tabs-items class="ma-2" v-model="tab">
      <v-tab-item value="tab-1">
        <Planets />
      </v-tab-item>
      <v-tab-item value="tab-2">
        <People />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
var Planets = () => import(/* webpackChunkName: "Planets" */ './Planets')
var People = () => import(/* webpackChunkName: "People" */ './People')
export default {
  components: { Planets, People },
  data: () => ({
    tab: null
  })
};
</script>