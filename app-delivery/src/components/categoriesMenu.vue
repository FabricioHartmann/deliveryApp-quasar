<template>
  <div>
    <div style="color:white" class="text-weight-bold text-subtitle1">
      Categorias
    </div>
    <div class="scrolling-wrapper">
      <q-card
        v-ripple
        v-for="(category, index) in categories"
        :key="index"
        class="hzmenu q-mr-sm "
        @click="goToCategory(index)"
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
  name: "categoriesMenu",
  data() {
    return {};
  },
  methods: {
    goToCategory(index) {
      this.$store.commit("delivery/SET_CATEGORY", { category: index });
      this.$router.push("/cardapio");
    }
  },
  computed: {
    selectedCategory() {
      return this.$store.getters["delivery/getCategory"] - 1;
    }
  },

  props: {
    categories: Array
  }
};
</script>
