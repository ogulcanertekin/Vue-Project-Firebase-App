import Vue from "vue";
import ProductList from "./components/products/ProductList"
import ProductSell from "./components/products/ProductSell"
import ProductPurchase from "./components/products/ProductPurchase"
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  { path : "/", component : ProductList },
  { path : "/product-operations", component : ProductPurchase },
  { path : "/product-checkout", component : ProductSell },
  { path : "*", redirect : "/"}
];

export const router = new VueRouter({
  mode : "history",
  routes
});
