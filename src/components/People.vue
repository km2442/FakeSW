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
          text: "Wzrost",
          value: "height"
      },
      {
          text: "Waga",
          value: "mass"
      },
      {
          text: "Kolor włosów",
          value: "hair_color"
      },
      {
          text: "Kolor skóry",
          value: "skin_color"
      },
      {
          text: "Kolor oczu",
          value: "eye_color"
      }
    ]
  }),
  created() {
    this.getPeople();
  },
  computed: {
      planets() {
          return this.$store.getters.people;
      }
  },
  methods: {
    async getPeople() {
      let data = [];
      let next = "https://swapi.co/api/people/";

      while (next) {
        const res = await this.getNextData(next);
        next = res.next;
        for (let i = 0; i < res.data.length; i++) {
          data.push(res.data[i]);
        }
      }
      this.$store.commit("setPeopleData", data);
      this.loading = false;
    }
  }
};
</script>