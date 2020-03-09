<template>
  <div>
    <Table :loading="loading" :headers="headers" :data="movies" :items="5"/>
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
        text: "Część",
        align: "start",
        sortable: true,
        value: "episode_id"
      },
      {
          text: "Tytuł",
          value: "title"
      },
      {
          text: "Reżyser",
          value: "director"
      },
      {
          text: "Producent",
          value: "producer"
      },
      {
          text: "Data premiery",
          value: "release_date"
      }
    ]
  }),
  created() {
    this.getMovies();
  },
  computed: {
      movies() {
          return this.$store.getters.movies;
      }
  },
  methods: {
    async getMovies() {
      let data = [];
      let next = "https://swapi.co/api/films/";

      while (next) {
        const res = await this.getNextData(next);
        next = res.next;
        for (let i = 0; i < res.data.length; i++) {
          data.push(res.data[i]);
        }
      }
      this.$store.commit("setMoviesData", data);
      this.loading = false;
    }
  }
};
</script>