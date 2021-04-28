<template>
<div class="main">
  <TravelHeader></TravelHeader>
  <Num v-bind:total-number="number" @my-click='incrementNum'></Num>
  <Num v-bind:total-number="number"></Num>
  <h2 class="num">{{ number }}</h2>
  <Next class="num" header-text='hello'>
  </Next>
</div>
</template>

<script>
import TravelHeader from './components/TravelHeader.vue'

  export default {
    data() {
      return {
        number: 14
      }
    },
    components: {
      TravelHeader
    },
    methods: {
      incrementNum(val) {
        this.number = val;
      }
    }
  }
</script>

<style>
.main {
  display: flex;
}

.num {
  margin-left: 20px;
}

</style>
