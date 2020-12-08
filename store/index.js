import Vuex from 'vuex'

const store = () => {
  return new Vuex.Store({
    state: {
     // loadedPosts: [],
      posts: [],
    },

    mutations: {
    //   setPosts(state, posts) {
    //     state.loadedPosts = posts
    //   },

      getPosts(state, posts) {
        state.posts = posts
      },
    },
    actions: {
    //   nuxtServerInit(vuexContext, context) {
    //     return new Promise((resolve) => {
    //       vuexContext.commit('setPosts', data)
    //       resolve()
    //     })
    //   },
    //   setPosts({ commit }, posts) {
    //     commit('setPosts', posts)
    //   },

      async getPosts({ commit }) {
        const poosts = await this.$axios.$get(
          'https://jsonplaceholder.typicode.com/posts?_limit=10'
        )
        commit('getPosts', poosts)
      },
    },

    getters: {
    
    },
  })
}
export default store
