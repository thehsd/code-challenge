<template>
 <div>
          <v-card class="mx-auto"  outlined elevation="3">
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="headline mb-1">
                  {{ getPost.title }}
                </v-list-item-title>
                <v-list-item-subtitle> {{ getPost.body }} </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-card-actions>
              <Nuxt-Link to='/'>
                <v-btn outlined rounded text> back  </v-btn>
              </Nuxt-Link>
            </v-card-actions>
          </v-card>
          <br>
          <br>
        
          <span>Comments : </span>
          
          <br>
          <Comments :comments="getComments"/>
  </div>

</template>

<script>

import {  mapGetters , mapActions } from 'vuex'

export default {
   async mounted() {
     const id=this.$route.params.id
  
    await this.$store.dispatch('getPost' ,id )
    await this.$store.dispatch('getComments' ,id )

     },
    
  computed: {
    ...mapGetters(['getPost' , 'getComments'])
    
  },
}
</script>