<template>
  <span>
    {{
      this.prefix +
        Number.parseFloat(this.value * this.conversion).toFixed(this.precision)
    }}
  </span>
</template>

<script>
export default {
  props: {
    value: Number,
    prefix: {
      type: String,
      default: "Rs."
    },
    precision: {
      type: Number,
      default: 0
    },
    conversion: {
      type: Number,
      default: 1
    }
  }
};
</script>
