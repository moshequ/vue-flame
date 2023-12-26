<template>
  <v-card :flat="true">
    <v-card-title class="d-flex align-center pe-2">
      <v-icon :icon="mdiVideoInputComponent"></v-icon> &nbsp; Find a Members

      <v-spacer></v-spacer>

      <v-text-field
        v-model="search"
        :prepend-inner-icon="mdiMagnify"
        density="compact"
        label="Search"
        single-line
        :flat="true"
        hide-details
        variant="solo-filled"
      ></v-text-field>
    </v-card-title>

    <v-divider></v-divider>
    <v-data-table v-model:search="search" :items="items">
      <template v-slot:header.stock>
        <div class="text-end">Stock</div>
      </template>

      <template v-slot:item.image="{ item }">
        <v-card class="my-2" elevation="2" rounded>
          <v-img
            :src="`https://cdn.vuetifyjs.com/docs/images/graphics/gpus/${item.image}`"
            height="64"
            :cover="true"
          />
        </v-card>
      </template>

      <template v-slot:item.rating="{ item }">
        <v-rating
          :model-value="item.rating"
          color="orange-darken-2"
          density="compact"
          size="small"
          :readonly="true"
        ></v-rating>
      </template>

      <template v-slot:item.stock="{ item }">
        <div class="text-end">
          <v-chip
            :color="item.stock ? 'green' : 'red'"
            :text="item.stock ? 'In stock' : 'Out of stock'"
            class="text-uppercase"
            :label="true"
            size="small"
          ></v-chip>
        </div>
      </template>
    </v-data-table>
  </v-card>
</template>

<script setup lang="ts">
import { mdiMagnify, mdiVideoInputComponent } from '@mdi/js'
import { ref } from 'vue'

const search = ref('')

const items = ref([
  { name: 'Nebula GTX 3080', image: '1.png', price: 699.99, rating: 5, stock: true }
])
</script>

<i18n>
{
  "en": {
  },
  "he": {
  }
}
</i18n>
