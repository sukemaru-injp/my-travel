<template>
<div class="main" id="app">
  <div class="header">
    <h2 class="title">My Travel Diary</h2>
    <ul class="countries">
      <li class="country" @click="currentComponent = 'Home'">Home</li>
      <li class="country" @click="currentComponent = 'Thai'">タイ</li>
      <li class="country">ベトナム</li>
      <li class="country">香港</li>
      <li class="country">ポルトガル</li>
    </ul>
  </div>
  <!-- <Num v-bind:total-number="number" @my-click='incrementNum'></Num> -->
  <keep-alive>
    <component :is="currentComponent"></component>
  </keep-alive>
  <TravelHeader></TravelHeader>
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
        currentComponent: 'Home'
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
@import "./assets/styles/bootstrap-reboot.css";
@import "./assets/styles/header.css";
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap");

#app {
  font-family: 'Playfair Display', serif;
}

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
