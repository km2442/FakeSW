<template>
  <div>
    <Table :loading="loading" :headers="headers" :data="planets" :items="5"/>
  </div>
</template>

<script>
import Table from "./TableView";
import getData from '../mixins/getData'
export default {
  components: { Table },
  mixins: [ getData ],
  data: () => ({
    loading: true,
    headers: [
      {
        text: "Nazwa",
        align: "start",
        sortable: true,
        value: "name"
      },
      {
          text: "Średnica",
          value: "diameter"
      },
      {
          text: "Czas obiegu wokół słońca",
          value: "orbital_period"
      },
      {
          text: "Czas obrotu wokół własnej osi",
          value: "rotation_period"
      },
      {
          text: "Populacja",
          value: "population"
      }
    ]
  }),
  created() {
    this.getPlanets();
  },
  computed: {
      planets() {
          return this.$store.getters.planets;
      }
  },
  methods: {
    async getPlanets() {
      let data = [];
      let next = "https://swapi.co/api/planets/";

      while (next) {
        const res = await this.getNextData(next);
        next = res.next;
        for (let i = 0; i < res.data.length; i++) {
          data.push(res.data[i]);
        }
      }
      this.$store.commit("setPlanetsData", data);
      this.loading = false;
    }
  }
};
</script>