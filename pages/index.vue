<template>
  <div>
    <v-container>
      <v-row no-gutters>
        <v-col>
          <search />
        </v-col>
       
      </v-row>
    </v-container>
    <post-list :posts="postListUpd"   />
  </div>
</template>

<script>

import PostList from '~/components/PostList.vue'
import Search from '~/components/Search.vue'
import { mapGetters , mapActions } from 'vuex'

export default {
  components: { PostList, Search },

// NOTE: dispatch action getPosts
 async mounted() {
    await this.$store.dispatch('getPosts')
    },

  computed: {
    ...mapGetters(['postListUpd']),
  },
}
</script>

<style lang="scss" scoped></style>
