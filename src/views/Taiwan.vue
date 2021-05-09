<template>
    <div id="content">
    <section class="sec">
      <h2 class="sec__title">スペイン・バルセロナ</h2>
      <div class="content appear up">
        <div class="content__img item">
          <img src="../assets/images/IMG_4280.png" alt="">
        </div>
        <h4 class="content__name item">
          サグラダファミリア
        </h4>
        <p class="content__about item">
          建築家ガウディが手がけ、着工から130年以上経った現在も建築途中の教会です。<br>
          世界遺産に登録されたその建築物のもつ美しさに圧倒されること間違いなしです。<br>
          聖堂内部では、ステンドグラスから差し込む光が柱や床を鮮やかに彩っています。<br>
          建築中のその建物が完成した際には、私自身もう一度訪れる予定です。
        </p>
      </div>
    </section>
        <section class="sec">
      <h2 class="sec__title">スペイン・バルセロナ</h2>
      <div class="content appear up">
        <div class="content__img item">
          <img src="../assets/images/IMG_4254.png" alt="">
        </div>
        <h4 class="content__name item">
          グエル公園(Parc Güell)
        </h4>
        <p class="content__about item">
          スペインのバルセロナにある公園で、バルセロナの街が一望できる。<br>
          アントニオ・ガウディの作品群の１つとして1984年にユネスコの世界遺産に登録されました。<br>
          私は朝一で、街を一望しました。公園のあちこちに見どころがあって、<br>
          一枚の写真では伝えることができないほど魅力溢れる公園です。<br>
          バルセロナを訪れた際には、必ず訪れてください。
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
