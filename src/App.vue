<template>
<div class="main" id="app">
  <transition name='fade'>
    <div class="header" v-if='show'>
      <h2 class="title">My Travel Diary</h2>
      <ul class="countries">
        <li class="country" @click="currentComponent = 'Home'">Home</li>
        <li class="country" @click="currentComponent = 'Thai'">タイ</li>
        <li class="country">ベトナム</li>
        <li class="country">香港</li>
        <li class="country">ポルトガル</li>
      </ul>
    </div>
  </transition>
  <keep-alive>
    <component :is="currentComponent"></component>
  </keep-alive>
</div>
</template>

<script>
import Home from'./components/Home.vue'
import Thai from'./components/Thai.vue'

  export default {
    data() {
      return {
        currentComponent: 'Home',
        show: true
      }
    },
    components: {
      Home,
      Thai
    },
    methods: {
      showTrue() {
        this.show = true
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

/* fade */
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 1s;
}

.fade-enter-to {
  opacity: 1;
}

.fade-leave {
  opacity: 1;
}

.fade-leave-active {
  transition: opacity 1s;
}

.fade-leave-to {
  opacity: 0;
}

</style>
