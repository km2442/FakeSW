<template>
  <div>
    <Table :loading="loading" :headers="headers" :data="vehicles" :items="5"/>
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
          text: "Klasa pojazdu",
          value: "vehicle_class"
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
          text: "Pojemność ladunku",
          value: "cargo_capacity"
      }
    ]
  }),
  created() {
    this.getVehicles();
  },
  computed: {
      vehicles() {
          return this.$store.getters.vehicles;
      }
  },
  methods: {
    async getVehicles() {
      let data = [];
      let next = "https://swapi.co/api/vehicles/";

      while (next) {
        const res = await this.getNextData(next);
        next = res.next;
        for (let i = 0; i < res.data.length; i++) {
          data.push(res.data[i]);
        }
      }
      this.$store.commit("setVehiclesData", data);
      this.loading = false;
    }
  }
};
</script>