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
    <q-page-container class="bg-grey-4" >
      <router-view />
      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-fab icon="add" direction="up" color="primary">
          <q-fab-action @click="alert()" color="primary" icon="person_add" />
          <q-fab-action @click="alert()" color="primary" icon="person_add" />
          <q-fab-action @click="alert()" color="primary" icon="mail" />
        </q-fab>
      </q-page-sticky>
    </q-page-container>
    <q-footer>
      <nav-tabs />
    </q-footer>
  </q-layout>
</template>
<script>
import navDrawer from "components/navDrawer.vue";
import navTabs from "components/navTabs.vue";

export default {
  name: "MainLayout",
  components: { navDrawer, navTabs },
  data() {
    return {};
  },
  methods: {
    alert(){
      window.alert('TESTE')
    }
  }
};
</script>
<style >

</style>
