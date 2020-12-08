<template>
  <div>
     <v-container>
    <v-row no-gutters>
      <v-col  >
        <search />
      </v-col>
      <v-col  >
        <search />
      </v-col>
    </v-row>
     </v-container>
    <post-list />
  </div>
</template>

<script>
import PostList from '~/components/PostList.vue'
import Search from '~/components/Search.vue'
export default {
  components: { PostList, Search },
}
</script>

<style lang="scss" scoped></style>
