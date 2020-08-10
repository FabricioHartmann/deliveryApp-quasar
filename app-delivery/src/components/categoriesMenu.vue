<template>
  <div>
    <div style="color:white" class="text-weight-bold text-subtitle1"
      >Categorias</div
    >
    <div class="scrolling-wrapper">
      <q-card
      v-ripple
        v-for="(category, index) in categories"
        :key="index"
        class="hzmenu q-mr-sm "
      >
        <q-img class="" :src="category.img" height="100%">
          <div class=" absolute-full flex flex-center ">
            <div class="text-weight-bold" style="font-size: 16px">
              {{ category.name }}
            </div>
          </div>
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
