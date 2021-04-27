<template>
<div>
  <p>いいね{{ halfNum }}</p>
  <button @click="increment">+</button>
</div>
</template>

<script>
export default {
  props: {
    totalNumber: {
      type: Number,
      required: true,
      default: 4
    }
  },
  computed: {
    halfNum() {
      return this.totalNumber / 2
    }
  },
  methods: {
    increment() {
      this.$emit('my-click', this.totalNumber+2);
    }
  }
};
</script>

<style>

</style>