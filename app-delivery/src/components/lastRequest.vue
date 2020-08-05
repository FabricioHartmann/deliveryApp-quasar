<template>
  <div>
    <span class="text-weight-bold text-subtitle1">Histórico</span>
    <div class="scrolling-wrapper">
      <q-card
        class="hzreq q-mr-sm"
        v-for="(category, index) in lastRequests"
        :key="index"
      >
        <q-card-section>
          <div class="row text">
            paaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </div>
          <div class="col q-ml-sm text-subtitle2 text-weight-bold"></div>
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
    </div>
  </div>
</template>
<script>
export default {
  name: "categories",
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
<style>
.scrolling-wrapper {
  overflow-x: scroll;
  overflow-y: hidden;
}
.hzreq {
  display: inline-block;
  width: 55vw;
  height: 30vh;
}
.text{
  white-space: normal;
  word-break: break-all;
}
</style>
