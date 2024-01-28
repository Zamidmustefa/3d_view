<template>
  <div>
    <img src="../../public/logo.png" width="240px" style="margin-bottom: 20px;" alt=""> <br>
    <a style="text-decoration: underline;" href="/upload">Upload your design</a>
    <navbar :cart="cart" :cartQty="cartQty" :cartTotal="cartTotal" :showDollarButton="true"></navbar>

    <price-slider
      :sliderStatus="sliderStatus"
      :maximum.sync="maximum"
    ></price-slider>

    <product-list :maximum="maximum" :products="products"> </product-list>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import PriceSlider from "./PriceSlider.vue";
import ProductList from "./ProductList.vue";

export default {
  name: "products",
  props: [
    "products",
    "maximum",
    "cart",
    "cartQty",
    "cartTotal",
    "sliderStatus",
    "sliderState"
  ],
  components: {
    Navbar,
    PriceSlider,
    ProductList
  }
};
</script>
