<template>
  <q-card class="blured">
    <q-card-section >
      <div  class="row">
        <div class="col">
          <q-img
            class="rounded-borders"
            src="~assets/burgers/cheddar-burger.jpg"
            height="15vh"
            style="min-height:70px"
          >
            <div class="absolute-bottom-right">
            {{spot.discount}} OFF
          </div>
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
      <div class="row q-mt-sm">
        <q-btn
          class=" full-width "
          color="black"
          style="font-size:2vh"
          label="Adicionar ao Carrinho"
        />
      </div>
    </q-card-section>
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
  methods: {},
  computed: {},
  props: {
    spot: Object
  }
};
</script>
