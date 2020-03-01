<template>
  <div>
    <v-card v-if="!loading">
      <v-card-title>
        Filtruj tabelę
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Filtruj"
          single-line
          clearable
          hide-details
        ></v-text-field>
      </v-card-title>
    </v-card>
    <v-skeleton-loader :loading="loading" transition="scale-transition" type="table">
      <v-data-table :headers="headers" :items="data" :items-per-page="items" :search="search"></v-data-table>
    </v-skeleton-loader>
  </div>
</template>
<script>
export default {
  props: ["loading", "headers", "data", "items"],
  data: () => ({
      search: null
  })
};
</script>