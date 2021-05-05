<template>
  <div id="content">
    <section class="sec">
      <h2 class="sec__title">ポルトガル・リスボン</h2>
      <div class="content appear up">
        <div class="content__img item">
          <img src="../assets/images/IMG_4013.png" alt="">
        </div>
        <h4 class="content__name item">
          サン・ジョルジェ城
        </h4>
        <p class="content__about item">
          アルンはタイ語で「暁」の意味があることから、「暁の寺」とも呼ばれております。<br>
          ライトアップされた姿がとても美しく訪れてよかった観光地として、<br>
          タイの中でも上位に君臨します。<br>
          この写真は私が実際にクルーズ船の上から撮ったものです。<br>
          バンコクの混沌とした空気感が好きな方も多いのではないでしょうか。
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
