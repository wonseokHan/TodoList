<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app dark src="./assets/star.jpg">
      <navbar />
    </v-navigation-drawer>

    <v-app-bar app color="transparent">
      <v-app-bar-nav-icon @click="drawer = !drawer"
        ><i class="fas fa-bars"></i
      ></v-app-bar-nav-icon>

      <v-toolbar-title>Todolist</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon width="60px">
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-avatar height="40px" min-width="60px" width="3rem">
        <img src="./assets/me.jpg" size="50" />
      </v-avatar>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import navbar from "./components/navbar";

export default {
  data: () => ({
    drawer: true,
  }),
  components: {
    navbar,
  },
};
</script>
<style scoped>
</style>

