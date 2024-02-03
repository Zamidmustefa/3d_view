<template>
  <div>
    <div class="header">
      <img
        src="../../public/logo.png"
        width="240px"
        style="margin-bottom: 20px"
        alt=""
      />
      <ul class="menu">
        <li><a href="/">Home</a></li>
        <li><a href="/upload">Upload your design</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
    <br />
    <div>
      <VueSlickCarousel v-bind="settings">
        <img src="https://firebasestorage.googleapis.com/v0/b/d-view-lus.appspot.com/o/2.jpg?alt=media&token=eb6993e5-bed4-4001-9f8d-f64718d34b48" alt="" height="500px"  style="background-color: gold;" />
        <img src="https://firebasestorage.googleapis.com/v0/b/d-view-lus.appspot.com/o/1.jpg?alt=media&token=ba9a85a7-b5ff-48ec-b952-b1f558e475fa" alt="" height="500px"  style="background-color: gold;" />
      </VueSlickCarousel>
    </div>
    <div style="margin: 50px 0">
      <h4>Shop the best</h4>
      <div style="display: flex; justify-content: space-around; margin-top: 30px;">
        <div class="cat-box">Jewellery</div>
        <div class="cat-box">Home Furniture</div>
        <div class="cat-box">Fashion & Style</div>
      </div>
    </div>
    <navbar
      :cart="cart"
      :cartQty="cartQty"
      :cartTotal="cartTotal"
      :showDollarButton="true"
    ></navbar>

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
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "products",
  props: [
    "products",
    "maximum",
    "cart",
    "cartQty",
    "cartTotal",
    "sliderStatus",
    "sliderState",
  ],
  data() {
    return {
      settings: {
        dots: true,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    };
  },
  components: {
    Navbar,
    PriceSlider,
    ProductList,
    VueSlickCarousel,
  },
};
</script>
<style>
.cat-box {
  border: 1px solid rgba(0, 0, 0, 0.187);
  border-radius: 10px;
  width: 180px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.menu {
  display: flex;
  list-style-type: none;
}

.menu > li {
  margin-right: 30px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
