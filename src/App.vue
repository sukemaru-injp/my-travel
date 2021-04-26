<template>
<div class="main">
  <TravelHeader></TravelHeader>
  <Num v-bind:number="number"></Num>
  <Num v-bind:number="number"></Num>
</div>
</template>

<script>
import TravelHeader from './components/TravelHeader.vue'
  export default {
    data() {
      return {
        number: 6
      }
    },
    components: {
      TravelHeader
    }
  }
</script>

<style>
.main {
  display: flex;
}
</style>
