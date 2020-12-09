<template>
  <v-toolbar dark color="blue">
    <v-btn to="/" icon>
      <v-icon>mdi-facebook</v-icon>
    </v-btn>
    <v-btn to="/" icon>
      <v-icon>mdi-instagram</v-icon>
    </v-btn>
    <v-btn to="/" icon>
      <v-icon>mdi-linkedin</v-icon>
    </v-btn>
    <v-toolbar-title class="white--text"> </v-toolbar-title>
    <v-spacer></v-spacer> <nuxt-link class="title" to="/">LOGO</nuxt-link>
  </v-toolbar>
</template>
<script></script>
<style scoped>
.title {
  text-decoration: none !important;
}
.title:visited {
  color: white;
}
</style>
