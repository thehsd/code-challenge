<template>
  <div>
    <v-container>
      <v-row class="col-12">
        <v-text-field label="Search . . ." v-model="input" :input="search()"></v-text-field>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
data() {
  return {
    input:''
  }

},

methods:{
  search(){
    this.$store.dispatch('updatePosts' , this.input)
    this.$store.commit('setPostUpdate' , this.input)
  }
}
}
</script>
