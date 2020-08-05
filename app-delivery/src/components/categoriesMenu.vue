<template>
  <div>
    <span class="text-weight-bold text-subtitle1">Categorias</span>
    <div class="scrolling-wrapper">
      <q-card
        v-for="(category, index) in categories"
        :key="index"
        class="hzmenu q-mr-sm"
      >
        <q-img class="" src="~assets/categories/burgers.jpg" height="100%">
        </q-img>
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
    categories: Array
  }
};
</script>
<style>
.scrolling-wrapper {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
}
.hzmenu {
  display: inline-block;
  width: 28vw;
  height: 20vh;
}
</style>
