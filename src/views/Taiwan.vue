<template>
    <div id="content">
    <section class="sec">
      <h2 class="sec__title">台湾・台北</h2>
      <div class="content appear up">
        <div class="content__img item">
          <img src="../assets/images/IMG_3954.png" alt="">
        </div>
        <h4 class="content__name item">
          国立中正紀念堂
        </h4>
        <p class="content__about item">
          中正紀念堂とは、中華民国の初代総統である蒋介石を追悼するために<br>
          建てられた建築物です。毎日行われる衛兵交代式は中正紀念堂の名物となっています。<br>
          その広大な土地と、徴兵交代式はぜひ一度訪れてみることをおすすめします。<br>
          異なる文化の面白さを感じることができる機会となります。
        </p>
      </div>
    </section>
        <section class="sec">
      <h2 class="sec__title">台湾・九份</h2>
      <div class="content appear up">
        <div class="content__img item">
          <img src="../assets/images/IMG_4004.png" alt="">
        </div>
        <h4 class="content__name item">
          九份老街
        </h4>
        <p class="content__about item">
          ノスタルジックなその街並みは日本人観光客からも人気があります。<br>
          台北中心地からバスでアクセス可能で、台湾を訪れた際にはマストですね。<br>
          常に観光客であふれる喧騒はやはり楽しいです。コロナが収まったら、<br>
          また訪れたいという人も多いのではないでしょうか。
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
