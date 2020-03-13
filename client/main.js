/**
 * fileName: main.js
 * discription:  vue入口文件
 * author: TangYang
 * date: 2020-03-11
 * Copyright (C) 2020 Private
 */

import Vue from "vue";
import App from "./App";
import VueRouter from "vue-router";
import Vuex from "vuex";

//自定义配置文件 导入
import createRouter from "./router/router.js";
import createStore from "./store/store.js";

//css样式导入
import "./assets/style/global.styl";
import "./assets/style/style.sass";

//监听导入
import monitorVuex from "./monitor/monitor";

Vue.use(VueRouter);
Vue.use(Vuex);

const router = createRouter();
const store = createStore();

monitorVuex(store);

// //新增
// Vue.config.productionTip = false;
// new Vue({
//   el: "#app",
//   router,
//   store,
//   components: {
//     App
//   },
//   template: "<App/>"
// });
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
