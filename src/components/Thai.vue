<template>
  <div id="content">
    <section class="sec1">
      <h2 class="sec1__title">タイ・バンコク</h2>
      <div class="content appear up">
        <div class="content__img item">
          <img src="../assets/images/IMG_0747.png" alt="">
        </div>
        <h4 class="content__name item">
          ワット・アルン
        </h4>
        <p class="content__about item">
          アルンはタイ語で「暁」の意味があることから、「暁の寺」とも呼ばれております。<br>
          ライトアップされた姿がとても美しく訪れてよかった観光地として、<br>
          タイの中でも上位に君臨します。<br>
          この写真は私が実際にクルーズ船の上から撮ったものです。<br>
          バンコクの混沌とした空気感が好きな方も多いのではないでしょうか。
        </p>
        <button @click="animation">appear</button>
      </div>
    </section>
    <section class="sec2">
      <h2 class="sec1__title">タイ・アユタヤ</h2>
      <div class="content">
        <div class="content__img item">
          <img src="../assets/images/IMG_0785.png" alt="">
        </div>
        <h4 class="content__name item">
          ワット・チャイワタナラーム
        </h4>
        <p class="content__about item">
          アユタヤには魅力的な遺跡がたくさんあります。<br>
          バンコクから電車で約90分かけて訪れる価値は大いにあります。<br>
          古都として、街全体が世界遺産でありバンコクとはまた違った魅力で溢れています。<br>
          一度訪れるとリピートしたくなること間違いなしです。<br>
          私はレンタサイクルで街をめぐりました。
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
    methods: {
    animation: function() {
      let move = document.querySelector('.appear')
      move.classList.toggle('inview')
    }
  }
}
</script>

<style scoped>
@import "../assets/styles/home.css";

</style>
