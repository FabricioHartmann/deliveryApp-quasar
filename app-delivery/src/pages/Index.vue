<template>
  <q-page class="q-pa-sm">
    <div>
      <spot-light-card :spot="spot" />
    </div>
    <div class="q-mt-sm">
      <categories-menu :categories="categories" />
    </div>
    <div class="q-mt-sm" style="">
      <last-request :lastRequests="lastRequests" />
    </div>
  </q-page>
</template>

<script>
import spotLightCard from "components/spotLightCard.vue";
import categoriesMenu from "components/categoriesMenu.vue";
import lastRequest from "components/lastRequest.vue";

export default {
  name: "PageIndex",
  data() {
    return {
      //arrays que serão preenchidos pela requisição da api
      categories: [
        { name: "Burgers", img: require("../assets/categories/burgers.jpg") },
        { name: "Combos", img: require("../assets/categories/combos.jpg") },
        { name: "Porções", img: require("../assets/categories/acompanhamentos.jpg") },
        {
          name: "Bebidas",
          img: require("../assets/categories/drinks.jpg")
        },
        {
          name: "Doces",
          img: require("../assets/categories/desserts.jpg")
        }
      ],
      spot: {
        name: "Double Cheddar Bacon",
        ingredients:
          "Pão, 2 camadas de carne e cheddar, bacon e cebola caramelizada",
        price: "19.90",
        oldPrice: "24,90",
        discount: "25%"
      },
      lastRequests: [
        {
          name: "X-Burger",
          ingredients: "Pão, carne e queijo",
          price: "11.90",
          date: "01/08/2020"
        },
        {
          name: "Double Cheddar Bacon",
          ingredients: "Pão, carne, cheddar e baconPão, carne, cheddar e bacon",
          price: "19.90",
          date: "15/07/2020"
        },
        {
          name: "X-Burger",
          ingredients: "Pão, carne e queijo",
          price: "11.90",
          date: "14/07/2020"
        }
      ]
    };
  },
  components: { spotLightCard, categoriesMenu, lastRequest }
};
</script>
