<template>
  <div id="content">
    <section class="sec">
      <h3 class="coming">Coming Soon</h3>
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
  }
}
</script>

<style scoped>
@import "../assets/styles/home.css";


</style>

