<template>
  <div>
    <v-card class="mx-auto" max-width="344" outlined elevation="2">
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">
            {{ title }}
          </v-list-item-title>
          <v-list-item-subtitle> {{ body }} </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-btn outlined depressed text color="secondary" elevation="2">
        <Nuxt-Link :to="'/posts/' + id"> Continuation </Nuxt-Link>
      </v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    userId: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped></style>
