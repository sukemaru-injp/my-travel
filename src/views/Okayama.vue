<template>
  <div id="content">
    <section class="sec">
      <h2 class="sec__title">岡山・王子が岳</h2>
      <div class="content appear up">
        <div class="content__img item">
          <img src="../assets/images/IMG_6568.png" alt="">
        </div>
        <h4 class="content__name item">
          ルーブル美術館
        </h4>
        <p class="content__about item">
          ルーヴル美術館の展示スペースは6万平方メートルと大変広く、展示されている作品数は<br>
          3万5千点とも言われています。ミロのヴィーナスやサモトラケのニケ、モナリザなど著名な作品が<br>
          展示されています。私自身２度訪れていますが、それでも時間が足りていないほどです。<br>
          さすが世界最大級の美術館です。パリに訪れた際には、マストとも言える観光地です。
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import { appear } from '@/appear';

export default {
  mixins: [appear],
}
</script>

<style scoped>
@import "../assets/styles/home.css";

</style>
