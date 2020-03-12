<template>
  <div>
    <Table :loading="loading" :headers="headers" :data="dataGetter" :items="5" />
  </div>
</template>

<script>
import Table from "./TableView";
import axios from "axios";
export default {
  components: { Table },
  props: ["headers", "dataName"],
  data: () => ({
    loading: true
  }),
  created() {
    this.getData();
  },
  computed: {
    dataGetter() {
      return this.$store.getters[ this.dataName ];
    }
  },
  methods: {
    async getData() {
      let data = [];
      let next = "https://swapi.co/api/" + this.dataName.toLowerCase() + "/";

      while (next) {
        const res = await this.getNextData(next);
        next = res.next;
        for (let i = 0; i < res.data.length; i++) {
          data.push(res.data[i]);
        }
      }
      this.$store.commit("set" + this.dataName + "Data", data);
      this.loading = false;
    },
    async getNextData(next) {
      let data = [];
      let newNext = null;
      const res = await axios.get(next).catch(error => {
        console.log(error);
      });

      data = res.data.results;
      newNext = res.data.next;

      return { data: data, next: newNext };
    }
  }
};
</script>