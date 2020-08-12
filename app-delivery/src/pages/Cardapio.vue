<template>
  <q-page class="q-pa-sm">
    <div class="row" style="min-height:70px">
      <!-- <div style="color:white" class="text-weight-bold text-subtitle1">
        Categorias
      </div> -->
      <div class="scrolling-wrapper">
        <q-card
          v-on:click="selectCategory(item, index)"
          v-ripple
          v-for="(item, index) in categories"
          :key="index"
          style="margin-right:8px; white-space: normal; word-break: break-all;display: inline-block;width: 25vw; min-width:85px; height: 60px"
        >
          <div
            style="font-size:16px"
            class="absolute-full text-weight-bolder flex flex-center"
          >
            {{ item.name }}
          </div>
          <transition name="fade">
            <q-img
              style="border-radius: 3px; min-height:60px "
              v-show="index !== selectedCategory"
              :src="item.img"
              height="100%"
            >
              <div class="absolute-full text-weight-bold flex flex-center">
                {{ item.name }}
              </div>
            </q-img>
          </transition>
        </q-card>
      </div>
    </div>
    <div style="height:" class="row">
      <q-tab-panels
        style=" margin-left:-15px; margin-right:-15px"
        v-model="selectedCategory"
        animated
        class="transparent"
      >
        <q-tab-panel
          style="height:calc(100vh - 140px); overflow-y:auto"
          v-for="(item, index) in categories"
          :key="index"
          :name="index"
        >
          <div
            style="color:white; margin-top: -20px"
            class="text-weight-bold text-subtitle1"
          >
            {{ item.name }}
          </div>
          <div class=" row q-col-gutter-md">
            <div
              class=" col-6"
              style="min-width:48vw"
              v-for="(card, index) in foodMenu.filter(
                i => i.category == item.idCategory
              )"
              :key="index"
            >
              <q-card style="width:100%; height:33vh; min-height:150px">
                <q-img :src="card.img" height="12vh"> </q-img>
                <div
                  style="height:12vh"
                  class="q-ma-xs q-mx-sm row justify-end"
                >
                  <div class="text-weight-bold">
                    {{ card.name }}
                    <q-btn
                      icon="mdi-nutrition"
                      class="q-mx-sm"
                      outline
                      size="xs"
                    >
                      <q-tooltip anchor="bottom middle" self="top middle">
                        <span class="text-subtitle2">{{
                          card.ingredients
                        }}</span>
                      </q-tooltip>
                    </q-btn>
                  </div>
                  <q-space />
                </div>
                <div class="row ">
                  <q-btn color="black" class="col q-mx-sm " style="height:7vh">
                    <q-icon color="white" name="mdi-cart-outline" />
                  </q-btn>
                  <div class="col q-ma-xs text-weight-bold">
                    <div>R$</div>
                    <div class="price-tag">{{ card.price }}</div>
                  </div>
                </div>
              </q-card>
            </div>
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageCardapio",
  data() {
    return {
      categories: [
        {
          idCategory: 1,
          name: "Burgers",
          img: require("../assets/categories/burgers.jpg")
        },
        {
          idCategory: 2,
          name: "Combos",
          img: require("../assets/categories/combos.jpg")
        },
        {
          idCategory: 3,
          name: "Porções",
          img: require("../assets/categories/acompanhamentos.jpg")
        },
        {
          idCategory: 4,
          name: "Bebidas",
          img: require("../assets/categories/drinks.jpg")
        },
        {
          idCategory: 5,
          name: "Doces",
          img: require("../assets/categories/desserts.jpg")
        }
      ],
      foodMenu: [
        {
          id: 1,
          name: "X-Burger",
          ingredients: "Pão, carne e queijo",
          price: "11.90",
          category: 1,
          img: require("../assets/categories/burgers.jpg")
        },
        {
          id: 1,
          name: "X-Burger",
          ingredients: "Pão, carne e queijo",
          price: "11.90",
          category: 1,
          img: require("../assets/categories/burgers.jpg")
        },
        {
          id: 1,
          name: "X-Salada",
          ingredients: "Pão, carne, queijo e salada",
          price: "12.90",
          category: 1,
          img: require("../assets/burgers/cheddar-burger.jpg")
        },
        {
          id: 2,
          name: "Double Cheddar Bacon",
          ingredients: "Pão, carne, cheddar e bacon",
          price: "19.90",
          category: 1,
          img: require("../assets/categories/burgers.jpg")
        },
        {
          id: 1,
          name: "X-Burger + Batata ",
          ingredients: "Pão, carne e queijo",
          price: "19.90",
          category: 2,
          img: require("../assets/categories/burgers.jpg")
        },
        {
          id: 2,
          name: "Double Cheddar Bacon + Batata Média + Refrigerante",
          ingredients: "Pão, carne, cheddar e bacon",
          price: "27.90",
          category: 2,
          img: require("../assets/categories/burgers.jpg")
        },
        {
          id: 3,
          name: "Smash Burger",
          ingredients: "Pão, carne, cheddar",
          price: "13.90",
          category: 1,
          img: require("../assets/categories/burgers.jpg")
        },
        {
          id: 11,
          name: "Coca-Cola 350ml",
          ingredients: "",
          price: "5.50",
          category: 4,
          img: null
        },
        {
          id: 12,
          name: "Guaraná 350ml",
          ingredients: "",
          price: "5.50",
          category: 4,
          img: null
        },
        {
          id: 21,
          name: "Batata Frita Peq",
          ingredients: "",
          price: "5.00",
          category: 3,
          img: null
        },
        {
          id: 22,
          name: "Batata Rústica",
          ingredients: "",
          price: "7.00",
          category: 3,
          img: require("../assets/categories/acompanhamentos.jpg")
        },
        {
          id: 23,
          name: "Nuggets 6 unidades",
          ingredients: "",
          price: "7.00",
          category: 3,
          img: require("../assets/categories/acompanhamentos.jpg")
        }
      ]
    };
  },
  methods: {
    selectCategory(item, index) {
       this.$store.commit("delivery/SET_CATEGORY", { category: index });
      console.log(item);
    }
  },
  computed: {
    selectedCategory() {
      return this.$store.getters["delivery/getCategory"];
    }
  },
  components: {}
};
</script>
