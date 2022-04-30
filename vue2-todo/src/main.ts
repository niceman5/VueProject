import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

/**
 * 할일관리 app (CRUD)
 * 할일추가
 * 할일조회
 * 할일삭제
 * 할일수정
 */
