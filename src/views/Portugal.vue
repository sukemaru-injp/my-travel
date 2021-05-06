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
          古都リスボンの丘の上に作られているこの城はリスボンの景色を一望できます。<br>
          リスボン中心部から歩いていくこともでき、その道中では古都ならではの雰囲気を味わう<br>
          こともできます。城内の城壁からは歴史を感じられ、<br>
          展望台からの景色はまさしく絶景です。<br>
          リスボンを訪れた際には、行ってみることを強くおすすめします。
        </p>
      </div>
    </section>

    <section class="sec">
      <h2 class="sec__title">リスボン・ベレン地区
      </h2>
      <div class="content appear up">
        <div class="content__img item">
          <img src="../assets/images/IMG_4061.png" alt="">
        </div>
        <h4 class="content__name item">
          発見のモニュメント
        </h4>
        <p class="content__about item">
          テージョ川を見つめる像は、先頭にエンリケ航海王子、探検家、芸術家、<br>
          科学者・地図制作者・宣教師など、総勢33名が高さ52ｍの船に並んでいます。<br>
          また世界遺産のベレンの塔やジェロニモス修道院とあわせて観光することもでき、<br>
          観光で訪れている人も多いのがとても印象的でした。
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
