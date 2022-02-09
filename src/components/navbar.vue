<template>
  <v-list>
    <v-list-item v-for="item in items" :key="item.title" :to="item.route">
      <v-list-item-icon>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      items: [{ title: "Home", icon: "fas fa-home", route: "/" }],
    };
  },
};
</script>
