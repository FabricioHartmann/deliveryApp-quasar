<template>
  <div>
    <q-tabs
      v-model="tab"
      indicator-color="secondary"
      active-color="white"
      class="text-grey-10"
    >
      <q-route-tab exact to="/" name="home" icon="mdi-home" />
      <q-route-tab exact to="/cardapio" name="cardapio" icon="mdi-food" />
      <q-route-tab exact to="/carrinho" name="movies" icon="mdi-cart">
        <q-badge v-show="cart.length" color="red" floating>{{
          cart.length
        }}</q-badge>
      </q-route-tab>
    </q-tabs>
  </div>
</template>
<script>
export default {
  name: "navTabs",
  data() {
    return {
      tab: "home"
    };
  },
  computed: {
    cart() {
      return this.$store.getters["delivery/getCart"];
    }
  }
};
</script>
