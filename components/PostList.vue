<template>
  <div>
    <v-container>
      <v-row>
        <v-col v-for="(post, index) in posts" :key="index" cols="12" sm="4" elevation="9">
          <Post
            :id="post.id"
            :userId="post.userId"
            :title="post.title"
            :body="post.body"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {


  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
}
</script>




<style lang="scss" scoped></style>
