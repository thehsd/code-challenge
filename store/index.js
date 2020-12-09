import Vuex from 'vuex'

const store = () => {
  return new Vuex.Store({
    state: {
      posts: [],
      post: [],
      comments: [],
      postListUpd: [],
    },

    mutations: {
      //NOTE: update the state(posts)
      getPosts(state, posts) {
        state.posts = posts
      },

      getPost(state, post) {
        state.post = post
      },

      getComments(state, comments) {
        state.comments = comments
      },

      updatePosts(state, payload) {
        state.postListUpd = payload
      },

      sortbyValue(state, { value, userId }) {
        state.posts.find(post=>userId===userId)
      },
    },

    actions: {
      //NOTE: commit to mutation getPosts
      async getPosts({ commit }) {
        const posts = await this.$axios.$get(
          'https://jsonplaceholder.typicode.com/posts?_limit=24'
        )
        commit('getPosts', posts)
      },

      async getPost({ commit }, id) {
        const post = await this.$axios.$get(
          'https://jsonplaceholder.typicode.com/posts/' + id
        )

        commit('getPost', post)
      },

      async getComments({ commit }, id) {
        const comments = await this.$axios.$get(
          'https://jsonplaceholder.typicode.com/posts/' + id + '/comments'
        )

        commit('getComments', comments)
      },
      updatePosts({ commit }, input) {
        let resSearch = this.state.posts.filter((post) => {
          return post.title.includes(input)
        })
        commit('updatePosts', resSearch)
      },
      sortBy({ commit }, { value, userId }) {
        commit('sortbyValue', { value, userId })
      },
    },

    getters: {
      getPosts(state) {
        return state.posts
      },

      getPost(state) {
        return state.post
      },

      getComments(state) {
        return state.comments
      },
      postListUpd(state) {
        if (!state.postListUpd.length === '') {
          return state.posts
        } else if (state.postListUpd.length !== '') {
          return state.postListUpd
        }
      },
    },
  })
}
export default store
