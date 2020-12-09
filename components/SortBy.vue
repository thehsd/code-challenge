<template>

  <v-row align="center">
    <v-col >
        
      <v-select
        :items="items"
        label="Sort"
      ></v-select>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      items: [1,2,3,4],
    }),
  }
</script>
