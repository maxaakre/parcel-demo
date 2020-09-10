import Vue from "vue";
import App from "./component/App.vue";

console.log("Enviroment varible demo : " + process.env.DEMO);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
