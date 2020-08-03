<template>
  <div class="">
    
    <q-btn
      flat
      dense
      round
      icon="menu"
      aria-label="Menu"
      @click="leftDrawerOpen = !leftDrawerOpen"
    />
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <!-- <q-item-label header class="">
        Links Rápidos
      </q-item-label>
      <q-separator spaced />
      <q-list class="text-black">
        <q-item to="/home">
          <q-item-section avatar>
            <q-icon name="deck" />
          </q-item-section>
          <q-item-section>Home</q-item-section>
        </q-item>
        <q-item to="/cardapio" >
          <q-item-section avatar>
            <q-icon name="fastfood" />
          </q-item-section>
          <q-item-section>Cardápio</q-item-section>
        </q-item>
        <q-item to="/contato" >
          <q-item-section avatar>
            <q-icon name="forum" />
          </q-item-section>
          <q-item-section>Contato</q-item-section>
        </q-item>
      </q-list> -->
    </q-drawer>
  </div>
</template>

<script>

export default {
  name: "MainLayout",
  components: {  },
  data() {
    return {
      leftDrawerOpen: false
    };
  }
};
</script>
