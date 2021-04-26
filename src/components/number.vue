<template>
<div>
  <p>いいね{{number}}</p>
  <button @click="increment">+</button>
</div>
</template>

<script>
export default {
  props: [
    'number'
  ],
  methods: {
    increment() {
      this.number++;
    }
  }
};
</script>

<style>

</style>