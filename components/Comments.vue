<template>
  <div>
    <v-list elevation="3">
      <v-list-item-group>
        <div v-for="(comment, index) in comments" :key="index">
          <v-list-item>
            <template>
              <v-list-item-content>
                <span>{{ index + 1 }}.</span>
                <v-list-item-title v-text="comment.email"></v-list-item-title>

                <v-list-item-subtitle
                  class="text--primary"
                  v-text="comment.name"
                ></v-list-item-subtitle>

                <v-list-item-subtitle
                  v-text="comment.body"
                ></v-list-item-subtitle>
              </v-list-item-content>
            </template>
          </v-list-item>
        </div>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
export default {
  props: {
    comments: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped></style>
