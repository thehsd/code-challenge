<template>
  <div>
    <v-container>
      <v-row>
        <v-col v-for="(post , index) in posts" :key="index" cols="12" sm="4">
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
  data() {
    return {
      posts: [],
    }
  },
  async fetch() {
    this.posts = await fetch(
      'https://jsonplaceholder.typicode.com/posts?_limit=10'
    ).then((res) => res.json())
  },
}
</script>

<style lang="scss" scoped></style>
