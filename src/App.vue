<template>
<div class="main">
  <TravelHeader></TravelHeader>
  <Num v-bind:total-number="number" @my-click='incrementNum'></Num>
  <Next class="num">
    <h3>hello</h3>
  </Next>
  <button class='btn' @click="currentComponent = 'Home'">Home</button>
    <button class='btn' @click="currentComponent = 'Thai'">Thai</button>
  <component :is="currentComponent"></component>
</div>
</template>

<script>
import TravelHeader from './components/TravelHeader.vue'
import Home from'./components/Home.vue'
import Thai from'./components/Thai.vue'

  export default {
    data() {
      return {
        number: 14,
        currentComponent: ''
      }
    },
    components: {
      TravelHeader,
      Home,
      Thai
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

.btn {
  height: 100px;
  margin-left: 30px;
}

</style>
