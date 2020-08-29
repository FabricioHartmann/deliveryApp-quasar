<template>
  <q-page class="q-pa-sm">
    <transition name="slide-fade">
      <div v-show="mainShow">
        <div style="height:calc(80vh - 100px)"></div>
        <div class="relative-position">
          <q-btn
            color="primary"
            class="absolute-center"
            style="width:70%"
            label="Login"
            @click="loginCard()"
          />
        </div>
        <div style="margin-top: 55px" class="relative-position">
          <q-btn
            color="primary"
            class="absolute-center"
            style="width:70%"
            label="Cadastre-se"
            @click="registerCard()"
          />
        </div>
        <div align="center" style="margin-top: 110px" class="relative-position">
          <div align="center" style="margin-bottom:10px; color:white">
            ou logue com
          </div>
          <q-icon
            v-for="(item, index) in icons"
            :key="index"
            v-ripple
            class="q-mx-sm"
            style="border-radius:15px"
            size="30px"
            color="white"
            :name="item"
          />
        </div>
      </div>
    </transition>
    <transition name="slide-fade">
      <div align="center" v-show="loginShow">
        <div style="height:50vh"></div>
        <q-card
          bordered
          class=" text-weight-bold"
          align="start"
          style=" width:90vw"
        >
          <div class="text-h6 q-pt-sm q-pl-md">Login</div>
          <q-card-section>
            <q-input
              class="q-my-sm"
              outlined
              dense
              type="text"
              label="Usuário"
            />
            <q-input
              class="q-my-sm"
              outlined
              dense
              type="password"
              label="Senha"
            />
            <div class="row q-pt-lg">
              <q-btn outline @click="backToMain()" label="voltar" />
              <q-space />
              <q-btn :disable="loadingLogin" style="width:100px" @click="login()" color="primary">
                <div v-if="!loadingLogin">
                  Login
                </div>
                <div v-else>
                  <q-spinner-pie color="white" size="1em" />
                </div>
              </q-btn>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </transition>
    <transition name="slide-fade">
      <div align="center" v-show="registerShow">
        <q-card
          style=" height:calc(100vh - 32px); min-height:466px"
          class=" q-ma-sm text-weight-bold"
          align="start"
        >
          <div class="text-h6 q-pt-sm q-pl-md">Cadastre-se</div>
          <q-card-section>
            <q-input
              v-for="(item, index) in inputs"
              :key="index"
              class=" q-py-sm"
              outlined
              dense
              :type="item.type"
              :label="item.label"
              :mask="item.mask"
            />
          </q-card-section>
          <div class="q-ma-md row absolute-bottom ">
            <q-btn outline @click="backToMain()" label="voltar" />
            <q-space />
            <q-btn color="primary"> Cadastrar </q-btn>
          </div>
        </q-card>
      </div>
    </transition>
  </q-page>
</template>

<script>
import { setTimeout } from "timers";
export default {
  name: "LoginPage",
  data() {
    return {
      mainShow: true,
      loginShow: false,
      registerShow: false,
      loadingLogin: false,
      user: "",
      pswrd: "",
      icons: ["mdi-facebook", "mdi-google", "mdi-twitter", "mdi-instagram"],
      inputs: [
        { label: "Usuário", type: "text" },
        { label: "Senha", type: "password" },
        { label: "Confirme sua Senha", type: "password" },
        { label: "Nome Completo", type: "text" },
        { label: "E-Mail", type: "email" },
        { label: "Celular", type: "tel", mask: "(##) #####-####" }
      ]
    };
  },
  methods: {
    //  nesta versão o login é apenas demonstrativo
    login() {
      this.loadingLogin = true;
      setTimeout(() => {
        this.$store.commit("delivery/SET_LOGIN", true);
        this.$router.push("/");
        this.loadingLogin = false;
      }, 1500);
    },
    loginCard() {
      this.mainShow = false;
      setTimeout(() => {
        this.loginShow = true;
      }, 800);
    },
    registerCard() {
      this.mainShow = false;
      setTimeout(() => {
        this.registerShow = true;
      }, 800);
    },
    backToMain() {
      this.loginShow = false;
      this.registerShow = false;
      setTimeout(() => {
        this.mainShow = true;
      }, 800);
    }
  }
};
</script>
