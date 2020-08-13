<template>
  <q-card class="">
    <q-card-section>
      <div class="row" style="margin:-7px">
        <div class="col">
          <q-img
            class="rounded-borders"
            src="~assets/burgers/cheddar-burger.jpg"
            height="15vh"
            style="min-height:70px"
          >
            <div class="absolute-bottom-right">{{ spot.discount }} OFF</div>
          </q-img>
        </div>
        <div class="col q-ml-sm text-subtitle2 text-weight-bold">
          <span>{{ spot.name }}</span>
          <q-btn icon="mdi-nutrition" class="q-mx-sm" outline size="xs">
            <q-tooltip anchor="bottom middle" self="top middle">
              <span class="text-subtitle2">{{ spot.ingredients }}</span>
            </q-tooltip>
          </q-btn>
          <br />
          <!-- style="text-decoration: line-through;" -->
          <div class="row q-ma-xs text-weight-bold">
            <div style="font-size: 12px; text-decoration: line-through;">
              R${{ spot.oldPrice }}
            </div>
            <div class="price-tag">{{ spot.price }}</div>
          </div>
        </div>
      </div>
    </q-card-section>
    <q-card-actions>
      <q-btn
        @click="addToCart(spot)"
        class=" full-width "
        color="grey-10"
        label="Adicionar ao Carrinho"
      />
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  name: "spotLightCard",
  components: {},
  data() {
    return {
      leftDrawerOpen: false
    };
  },
  methods: {
    addToCart(card) {
      this.$store.commit("delivery/ADD_TO_CART", card);
      this.$q.notify({
        message: "Produto adicionado ao Carrinho",
        color: "green",
        position: "top",
        timeout: 400
      });
    }
  },
  computed: {},
  props: {
    spot: Object
  }
};
</script>
