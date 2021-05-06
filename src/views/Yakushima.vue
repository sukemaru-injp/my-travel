<template>
  <div id="content">
    <section class="sec">
      <h2 class="sec__title">屋久島</h2>
      <div class="content appear up">
        <div class="content__img item">
          <img src="../assets/images/IMG_5578.png" alt="">
        </div>
        <h4 class="content__name item">
          千尋の滝
        </h4>
        <p class="content__about item">
          
        </p>
      </div>
    </section>
    <section class="sec">
      <h2 class="sec__title">タイ・アユタヤ</h2>
      <div class="content appear up">
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
import { appear } from '@/appear';

export default {
  mixins: [appear],
}
</script>

<style scoped>
@import "../assets/styles/home.css";

</style>
