import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCavAo1jQTj_Fjic4d2V1bMZf8ciaWH4qc",
  authDomain: "wenopapavuejs.firebaseapp.com",
  projectId: "wenopapavuejs",
  storageBucket: "wenopapavuejs.appspot.com",
  messagingSenderId: "471505732690",
  appId: "1:471505732690:web:05d6f3ff71ac14ad14cb8b",
  measurementId: "G-Z0XD0BEV83",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
