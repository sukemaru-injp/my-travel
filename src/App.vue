<template>
<div class="main" id="app">
  <transition name='fade'>
    <div class="header" v-if='show'>
      <h2 class="title">My Travel Diary</h2>
      <ul class="countries">
        <li class="country"><router-link to='/' class="link" active-class="link--active" exact>HOME</router-link></li>
        <li class="country"><router-link to='/thai' class="link" active-class="link--active" exact>タイ</router-link></li>
        <li class="country">ベトナム</li>
        <li class="country">香港</li>
        <li class="country"><router-link to='/portugal' class="link" active-class="link--active" exact>ポルトガル</router-link></li>
        <li class="country"><router-link to='/spain' class="link" active-class="link--active" exact>スペイン</router-link></li>
        <li class="country"><router-link to='/france' class="link" active-class="link--active" exact>フランス</router-link></li>
        <li class="country"><router-link to='/uk' class="link" active-class="link--active" exact>イギリス</router-link></li>
        <li class="country"><router-link to='/belgium' class="link" active-class="link--active" exact>ベルギー</router-link></li>
        <li class="country">UAE</li>
        <li class="country"><router-link to='/taiwan' class="link" active-class="link--active" exact>台湾</router-link></li>
        <li class="country"><router-link to='/yakushima' class="link" active-class="link--active" exact>屋久島</router-link></li>
        <li class="country"><router-link to='/okayama' class="link" active-class="link--active" exact>岡山</router-link></li>
      </ul>
    </div>
  </transition>
  <!-- <keep-alive>
    <component :is="currentComponent"></component>
  </keep-alive> -->
  <router-view></router-view>
</div>
</template>

<script>

  export default {
    data() {
      return {
        currentComponent: 'Home',
        show: true
      }
    },
    components: {
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
