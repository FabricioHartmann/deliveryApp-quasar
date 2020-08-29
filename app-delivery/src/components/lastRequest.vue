<template>
  <div>
    <div style="color:white" class="text-weight-bold text-subtitle1">
      Histórico
    </div>
    <div class="scrolling-wrapper">
      <q-card
        class="hzreq q-mr-md"
        style="min-height:150px"
        v-for="(last, index) in lastRequests"
        :key="index"
      >
        <div class="row">
          <q-chip outline class="text-weight-bold">
            {{ last.date }}
          </q-chip>
          <q-space />
        </div>
        <div class="column q-mx-sm">
          <div class="row text-weight-bold">
            {{ last.name }}
          </div>
          <div class="row">
            <q-btn icon="mdi-nutrition" outline size="xs">
              <q-tooltip anchor="bottom middle" self="top middle">
                <span class="text-subtitle2">{{ last.ingredients }}</span>
              </q-tooltip>
            </q-btn>
          </div>
          <q-space />
        </div>
        <q-card-actions class="absolute-bottom">
          <q-btn
            @click="addToCart(last)"
            align="around"
            class="col q-ma-xs "
            dense
            color="grey-10"
          >
            <q-icon size="xs" name="mdi-cart-outline" />
            R$ {{ last.price }}
          </q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>
<script>
export default {
  name: "lastRequest",
  data() {
    return {};
  },
  methods: {
    addToCart(last) {
      this.$store.commit("delivery/ADD_TO_CART", last);
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
    lastRequests: Array
  }
};
</script>
