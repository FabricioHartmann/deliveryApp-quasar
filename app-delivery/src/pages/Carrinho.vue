<template>
  <q-page class="q-pa-sm">
    <span style="color:white" class="text-weight-bold text-subtitle1"
      >Carrinho</span
    >
    <div class="column">
      <q-card flat style="max-height:calc(100vh - 218px); overflow-y:auto" class="transparent">
        <div class="col">
          <q-card
            v-for="(item, index) in getCart"
            :key="index"
            class="row q-mb-sm"
          >
            <q-card-section  style="margin:-5px">
              <div class="text-weight-bold">{{ item.name }}</div>
              <div class="text-weight-bold">{{ item.price }}</div>
            </q-card-section>
            <q-space />
            <q-card-actions class="absolute-right">
              <q-btn
                @click="addToCart(item)"
                flat
                icon="mdi-plus-circle-outline"
              />
              <q-btn
                @click="deleteFromCart(item)"
                flat
                icon="mdi-delete-outline"
              />
            </q-card-actions>
          </q-card>
        </div>
      </q-card>

      <finish-cart />
    </div>
  </q-page>
</template>

<script>
import finishCart from "components/finishCart";
export default {
  name: "PageCarrinho",
  data() {
    return {};
  },
  computed: {
    getCart() {
      return this.$store.getters["delivery/getCart"];
    }
  },
  methods: {
    deleteFromCart(item) {
      this.$store.commit("delivery/DELETE_FROM_CART", item);
      this.$q.notify({
        message: "Produto retirado do Carrinho",
        color: "red",
        position: "top",
        timeout: 400
      });
    },
    addToCart(item) {
      this.$store.commit("delivery/ADD_TO_CART", item);
      this.$q.notify({
        message: "Produto adicionado ao Carrinho",
        color: "green",
        position: "top",
        timeout: 400
      });
    }
  },
  components: {
    finishCart
  }
};
</script>
