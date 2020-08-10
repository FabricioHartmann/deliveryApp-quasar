<template>
  <q-page class="q-pa-sm">
    <span style="color:white" class="text-weight-bold text-subtitle1"
      >Carrinho</span
    >
    <div class="column">
      <div class="col">
        <q-card
          v-for="(item, index) in getCart"
          :key="index"
          class="row q-mb-sm"
        >
          <q-card-section
            style="margin-left:-5px; margin-top:-8px"
            class="col-10"
          >
            <div class="text-weight-bold">{{ item.name }}</div>
            <div class="text-weight-bold">{{ item.price }}</div>
          </q-card-section>
          <q-space />
          <q-card-actions class="col">
            <div class="row">
              <q-btn size="sm" flat icon="mdi-plus" />
              {{ getCart[index].length }}
              <q-btn size="sm" flat icon="mdi-minus" />
            </div>
          </q-card-actions>
        </q-card>
      </div>
      <div class="col">
        <q-card square class="fixed-bottom" style="margin-bottom:48px">
          <q-card-section>
            <div class="text-h6 text-weight-bold">
              Total: R$
              {{ totalValue }}
            </div>
            <div class="text-subtitle2">{{ getCart.length }} Itens</div>
          </q-card-section>
          <q-card-actions align="center">
            <q-slide-item bottom-color="primary" @left="onLeft">
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
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageCarrinho",
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
  },
  components: {}
};
</script>
