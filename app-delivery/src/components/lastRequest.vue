<template>
  <div>
    <div style="color:white " class="text-weight-bold text-subtitle1">Histórico</div>
    <div class="scrolling-wrapper">
      <q-card
        class="hzreq blured q-mr-md"
        v-for="(last, index) in lastRequests"
        :key="index"
      >
        <div style="height:7vh" class="row">
          <q-chip outline class="text-weight-bold">
            {{ last.date }}
          </q-chip>
          <q-space />
        </div>
        <div style="height:8vh" class="row q-mx-sm justify-end">
          <div class="text-weight-bold">
            {{ last.name }}
          <q-btn icon="mdi-nutrition" class="q-mx-sm" outline size="xs">
            <q-tooltip anchor="bottom middle" self="top middle">
              <span class="text-subtitle2">{{ last.ingredients }}</span>
            </q-tooltip>
          </q-btn>
          </div>
          <q-space />
        </div>
        <div class="row q-mt-sm q-ma-xs">
          <q-btn color="black" class="col q-ma-xs " style="height:7vh">
            <q-icon color="white" name="mdi-cart-outline" />
          </q-btn>
          <div class="col q-ma-xs text-weight-bold">
            <div>R$</div>
            <div class="price-tag">{{ last.price }}</div>
          </div>
        </div>
      </q-card>
    </div>
  </div>
</template>
<script>
export default {
  name: "categories",
  ratingModel: 1,
  components: {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
  props: {
    lastRequests: Array
  }
};
</script>
