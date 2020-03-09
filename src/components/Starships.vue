<template>
  <div>
    <Table :loading="loading" :headers="headers" :data="starships" :items="5"/>
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
          value: "model"
      },
      {
          text: "Klasa statku",
          value: "starship_class"
      },
      {
          text: "Producent",
          value: "manufacturer"
      },
      {
          text: "Koszt w kredytach",
          value: "cost_in_credits"
      },
      {
          text: "Długość",
          value: "length"
      },
      {
          text: "Załoga",
          value: "crew"
      },
      {
          text: "Pasażerowie",
          value: "passengers"
      },
      {
          text: "Prędkość w atmosferze",
          value: "max_atmosphering_speed"
      },
      {
          text: "Klasa napędu nadświetlnego",
          value: "hyperdrive_rating"
      },
      {
          text: "Pojemność ladunku",
          value: "cargo_capacity"
      }
    ]
  }),
  created() {
    this.getStarships();
  },
  computed: {
      starships() {
          return this.$store.getters.starships;
      }
  },
  methods: {
    async getStarships() {
      let data = [];
      let next = "https://swapi.co/api/starships/";

      while (next) {
        const res = await this.getNextData(next);
        next = res.next;
        for (let i = 0; i < res.data.length; i++) {
          data.push(res.data[i]);
        }
      }
      this.$store.commit("setStarshipsData", data);
      this.loading = false;
    }
  }
};
</script>