<template>
  <div class="col">
    <q-card class="absolute-bottom" v-if="getCart.length" square>
      <q-card-section class="row q-mx-md q-mt-xs">
        <div class="absolute-left text-h6 text-weight-bold">
          Total: R$
          {{ totalValue }}
        </div>
        <div class="q-mt-xs text-subtitle1 absolute-right text-weight-bold">
          {{ getCart.length }} {{ getCart.length | plural }}
        </div>
      </q-card-section>
      <q-card-actions class="q-mb-xs" align="center">
        <q-slide-item @left="onLeft">
          <template v-slot:left>
            <q-icon name="done"></q-icon>
          </template>
          <q-item class="dragtobuy">
            <q-item-section avatar>
              <q-avatar
                color="positive"
                text-color="white"
                icon="mdi-arrow-right-bold"
              />
            </q-item-section>
            <q-item-section class="text-weight-bold"
              >ARRASTE PARA FINALIZAR</q-item-section
            >
          </q-item>
        </q-slide-item>
      </q-card-actions>
    </q-card>
    <div v-else class=" items-center absolute-center">
      <div style="font-size:6.9vw; color:white; opacity:0.2" class="col">
        Carrinho vazio...
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "finishCart",
  data() {
    return {};
  },
  computed: {
    getCart() {
      return this.$store.getters["delivery/getCart"];
    },
    totalValue() {
      return this.getCart
        .map(i => parseFloat(i.price))
        .reduce((t, current) => t + current)
        .toFixed(2);
    }
  },
  filters: {
    plural(value) {
      if (value > 1) return "Itens";
      else return "Item";
    }
  },
  methods: {
    onLeft({ reset }) {
      this.$q.notify({
        message: "Carregando página de Pagamento...",
        color: "green",
        position: "top"
      });
      this.finalize(reset);
    },
    finalize(reset) {
      this.timer = setTimeout(() => {
        reset();
      }, 1000);
    },
    beforeDestroy() {
      clearTimeout(this.timer);
    }
  }
};
</script>
