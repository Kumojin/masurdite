import devtools from "@vue/devtools";

import Vue from "vue";
import Element from "element-ui";
import firebase from "firebase";
import "element-ui/lib/theme-chalk/index.css";

import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyAiDvnhZJapMmGGY5_f5p2Y3Zy3wAlOjCY",
  authDomain: "masurdite.firebaseapp.com",
  databaseURL: "https://masurdite.firebaseio.com",
  projectId: "masurdite",
  storageBucket: "masurdite.appspot.com",
  messagingSenderId: "133360642586"
};
firebase.initializeApp(firebaseConfig);

if (process.env.NODE_ENV === "development") {
  devtools.connect(/* host, port */);
}

store.subscribe((mutation, state) => {
  localStorage.setItem("store", JSON.stringify(state));
});

Vue.config.productionTip = false;
Vue.use(Element);

function initializeApp() {
  /* eslint-disable no-new */
  new Vue({
    el: "#app",
    store,
    router,
    components: { App },
    template: "<App/>",
    beforeCreate() {}
  });
}

store.commit("initialiseStore");
initializeApp();
