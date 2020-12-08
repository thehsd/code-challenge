<template>
  <div>
          <v-card class="mx-auto" max-width="344" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="headline mb-1">
                  {{ title }}
                </v-list-item-title>
                <v-list-item-subtitle> {{ body }} </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-card-actions>
              <Nuxt-Link :to="'/posts/' + id">
                <v-btn outlined rounded text> Continuation </v-btn>
              </Nuxt-Link>
            </v-card-actions>
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
