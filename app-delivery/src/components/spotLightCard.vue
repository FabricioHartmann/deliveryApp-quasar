<template>
  <q-card class="background" style="">
    <div
      class="text-h6 q-mx-md q-pt-sm text-weight-bold"
      style="margin-bottom:-15px"
    >
      Destaque
    </div>
    <q-card-section>
      <div class="row">
        <div class="col">
          <q-img
            src="~assets/burgers/cheddar-burger.jpg"
            width="40vw"
            height="100%"
          >
            <q-badge
              style="opacity:0.7; height:20%; bottom:0px;right:0px;"
              color="red"
            >
              <span> - {{ spot.discount }}</span>
            </q-badge>
          </q-img>
        </div>
        <div class="col q-ml-sm text-subtitle1 text-weight-bold">
          <span>{{ spot.name }}</span>
          <q-icon size="3.5vh" name="mdi-information-outline">
            <q-tooltip anchor="bottom middle" self="top middle">
              <span class="text-subtitle1">{{ spot.ingredients }}</span>
            </q-tooltip>
          </q-icon>
          <br />
         <span>Valor: R$ {{ spot.price }}</span> 
        </div>
      </div>
      <div class="row q-mt-sm">
        <q-btn class="full-width" color="primary" label="Adicionar ao Carrinho" />
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
<style>
.background {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
