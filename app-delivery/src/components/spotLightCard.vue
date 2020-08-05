<template>
  <q-card>
    <q-card-section>
      <div class="row">
        <div class="col">
          <q-img src="~assets/burgers/cheddar-burger.jpg" height="100%">
            <q-badge
              style="opacity:0.7; height:5vh; bottom:0px;right:0px;"
              color="red"
            >
              <span class=""> - {{ spot.discount }}</span>
            </q-badge>
          </q-img>
        </div>
        <div class="col q-ml-sm text-subtitle2 text-weight-bold">
          <span>{{ spot.name }}</span>
          <q-icon size="3.5vh" name="mdi-information-outline">
            <q-tooltip anchor="bottom middle" self="top middle"
              >
              <span class="text-subtitle2">{{ spot.ingredients }}</span>
            </q-tooltip>
          </q-icon>
          <br />
          <span style="text-decoration: line-through;">{{
            spot.oldPrice
          }}</span>
          <span
            class="secondary"
            style=" font-size:18px; color:rgb(252, 114, 0);font-weight: 999;"
          >
            R$ {{ spot.price }}</span
          >
        </div>
      </div>
      <div class="row q-mt-sm">
        <q-btn
          dense
          class="full-width"
          color="primary"
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
<style></style>
