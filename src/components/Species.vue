<template>
  <div>
    <Table :loading="loading" :headers="headers" :data="species" :items="5"/>
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
          text: "Typ",
          value: "classification"
      },
      {
          text: "Średnia wysokość",
          value: "average_height"
      },
      {
          text: "Średnia długość życia",
          value: "average_lifespan"
      },
      {
          text: "Kolor oczu",
          value: "eye_colors"
      },
      {
          text: "Kolor włosów",
          value: "hair_colors"
      },
      {
          text: "Kolor skóry",
          value: "skin_colors"
      },
      {
          text: "Język",
          value: "language"
      }
    ]
  }),
  created() {
    this.getSpecies();
  },
  computed: {
      species() {
          return this.$store.getters.species;
      }
  },
  methods: {
    async getSpecies() {
      let data = [];
      let next = "https://swapi.co/api/species/";

      while (next) {
        const res = await this.getNextData(next);
        next = res.next;
        for (let i = 0; i < res.data.length; i++) {
          data.push(res.data[i]);
        }
      }
      this.$store.commit("setSpeciesData", data);
      this.loading = false;
    }
  }
};
</script>