<template>
  <div>
    <v-container>
      <v-row class="col-12">
        <v-text-field label="Search . . ." v-model="res"></v-text-field>
        <p>{{res}}</p>
        <button @click="getSearchResults(res)"></button>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      res: '',
      
    }
  },
  computed: {
    ...mapGetters(['searchResult']),
  },

  methods: {
    ...mapActions(['getSearchResults']),
    
  },
}
</script>

<style lang="scss" scoped></style>
