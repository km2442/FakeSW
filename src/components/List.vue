<template>
  <div>
    <v-tabs v-model="tab" centered icons-and-text>
      <v-tabs-slider></v-tabs-slider>
      <v-tab href="#tab-1">
        Filmy
        <v-icon large>mdi-movie-open</v-icon>
      </v-tab>
      <v-tab href="#tab-2">
        Planety
        <v-icon large>mdi-earth</v-icon>
      </v-tab>
      <v-tab href="#tab-3">
        Osoby
        <v-icon large>mdi-account-group</v-icon>
      </v-tab>
      <v-tab href="#tab-4">
        Gatunki
        <v-icon large>mdi-paw</v-icon>
      </v-tab>
      <v-tab href="#tab-5">
        Statki kosmiczne
        <v-icon large>mdi-airplane-takeoff</v-icon>
      </v-tab>
      <v-tab href="#tab-6">
        Pojazdy
        <v-icon large>mdi-car-sports</v-icon>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item value="tab-1">
        <TabList :headers="headers.moviesHeaders" data-name="Films" />
      </v-tab-item>
      <v-tab-item value="tab-2">
        <TabList :headers="headers.planetsHeaders" data-name="Planets" />
      </v-tab-item>
      <v-tab-item value="tab-3">
        <TabList :headers="headers.peopleHeaders" data-name="People" />
      </v-tab-item>
      <v-tab-item value="tab-4">
        <TabList :headers="headers.speciesHeaders" data-name="Species" />
      </v-tab-item>
      <v-tab-item value="tab-5">
        <TabList :headers="headers.starshipsHeaders" data-name="Starships" />
      </v-tab-item>
      <v-tab-item value="tab-6">
        <TabList :headers="headers.vehiclesHeaders" data-name="Vehicles" />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import TabList from "./TabList";
export default {
  components: { TabList },
  data: () => ({
    tab: null,
    headers: {
      moviesHeaders: [
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
      ],
      planetsHeaders: [
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
      ],
      peopleHeaders: [
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
      ],
      speciesHeaders: [
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
      ],
      starshipsHeaders: [
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
      ],
      vehiclesHeaders: [
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
    }
  })
};
</script>