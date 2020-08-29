<template>
  <q-layout view="lHh Lpr lFf">
    <!-- <q-header elevated>
      <q-toolbar>
        <nav-drawer/>
        <q-toolbar-title>
          DeliveryApp
        </q-toolbar-title>
      </q-toolbar>
    </q-header> -->
    <q-page-container style="overflow-x: hidden; background-image: linear-gradient(#383838, black)">
      <!-- <q-img
        spinner-color="primary"
        src="~assets/home-bg.jpg"
        style="height:100vh; "
      > -->
        <router-view />
      <!-- </q-img> -->
      <!-- <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-fab icon="add" direction="up" color="primary">
          <q-fab-action @click="alert()" color="primary" icon="mdi-logout" />
          <q-fab-action @click="alert()" color="primary" icon="mdi-mail" />
          <q-fab-action @click="alert()" color="primary" icon="mdi-account" />
        </q-fab>
      </q-page-sticky> -->
    </q-page-container>
  </q-layout>
</template>
<script>
import navTabs from "components/navTabs.vue";

export default {
  name: "MainLayout",
  components: { navTabs },
  data() {
    return {};
  },
  methods: {
  }
};
</script>

