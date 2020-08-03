<template>
  <q-page class=" q-pa-sm">
    <div>
      <spot-light-card :spot="spot" />
    </div>
    <div class="q-mt-sm">
      <categories-menu :categories="categories" />
    </div>
  </q-page>
</template>

<script>
import categoriesMenu from "components/categoriesMenu.vue";
import spotLightCard from "components/spotLightCard.vue";

export default {
  name: "PageIndex",
  data() {
    return {
      categories: [
        { name: "Burgers", img: "~assets/categories/burgers.jpg" },
        { name: "Combos", img: "~assets/categories/combos.jpg" },
        { name: "Pizzas", img: "~assets/categories/acompanhamentos.jpg" },
        { name: "Porções", img: "~assets/categories/burgers.jpg" },
        { name: "Bebidas", img: "~assets/categories/burgers.jpg" }
      ],
      spot: {
        name: "Double Cheddar Bacon",

        ingredients:
          "Pão, 2 camadas de carne e cheddar, bacon e cebola caramelizada",
        price: "19.90",
        discount: "25%"
      }
    };
  },
  components: { spotLightCard, categoriesMenu }
};
</script>
