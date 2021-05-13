<template>
  <div id="content">
    <section class="sec anoter">
      <div class="animate">
        <span class="char">C</span>
        <span class="char">o</span>
        <span class="char">m</span>
        <span class="char">i</span>
        <span class="char">n</span>
        <span class="char">g</span>
        <span class="char">S</span>
        <span class="char">o</span>
        <span class="char">o</span>
        <span class="char">n</span>
      </div>
    </section>
  </div>
</template>

<script>
import { appear } from '@/appear'

export default {
  mixins: [appear],
  data() {
    return {
      title: 'Welcome To MyPage'
    }
  },
  methods: {
    strAnimate() {
      document.querySelector('.animate').classList.toggle('dancing')
    }
  },
  mounted() {
    this.strAnimate()
  }
}
</script>

<style scoped>
@import "../assets/styles/home.css";
@import "../assets/styles/coming.css";

</style>

