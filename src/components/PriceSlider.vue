<template>
  <transition
    name="custom"
    enter-active-class="animated fadeInDown"
    leave-active-class="animated slideOutRight"
  >
    <div v-if="sliderStatus">
      <div class="align-items-center" :class="sliderState">
        <label class="font-weight-bold mr-2" for="formMax">max</label>
        <input
          type="text"
          id="formMax"
          class="form-control mx-2 text-center"
          style="width: 120px"
          v-model="maxAmount"
          @change="$parent.$emit('update:maximum', maxAmount)"
        />
        <span class="font-weight-bold mr-2">Rs.</span>
        <input
          type="range"
          class="custom-range"
          min="0"
          max="5000"
          v-model="maxAmount"
          @input="$parent.$emit('update:maximum', maxAmount)"
        />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "price-slider",
  data: function () {
    return {
      maxAmount: 5000,
    };
  },
  props: ["sliderStatus"],
  computed: {
    sliderState: function () {
      return this.sliderStatus ? "d-flex" : "d-none";
    },
  },
};
</script>

<style>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease-in-out;
}
</style>
