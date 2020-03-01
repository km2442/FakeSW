<template>
  <div>
    <v-card v-if="!loading" class="my-2">
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Filtruj tabelę"
        single-line
        clearable
        hide-details
        class="mx-3 my-2 py-2"
      ></v-text-field>
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