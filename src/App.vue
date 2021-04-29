<template>
<div class="main">
  <TravelHeader></TravelHeader>
  <Num v-bind:total-number="number" @my-click='incrementNum'></Num>
  <Num v-bind:total-number="number"></Num>
  <h2 class="num">{{ number }}</h2>
  <Next class="num">
    <template v-slot:hello='slotProps'>
      <hr>
      <h2>hello</h2>
      <h2>{{ slotProps.user.last }}</h2>
    </template>
    <p>yahoo</p>
    <template v-slot:num>
      <hr>
      <h2>{{number}}</h2>
    </template>
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
