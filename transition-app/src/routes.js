import Vue from "vue";
import VueRouter from "vue-router";
import Products from "./components/Products.vue";
import Cart from "./components/Cart.vue";
import Home from "./components/Home.vue";
import ErrorPage from "./components/ErrorPage.vue";
Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/home", component: Home },
    { path: "/products/:productId?", component: Products },
    { path: "/cart", component: Cart },
    { path: "*", component: ErrorPage },
  ],
});
