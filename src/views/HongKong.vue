<template>
    <div id="content">
    <section class="sec">
      <h2 class="sec__title">香港</h2>
      <div class="content appear up">
        <div class="content__img item">
          <img src="../assets/images/IMG_0362.png" alt="">
        </div>
        <h4 class="content__name item">
          ヴィクトリアピーク
        </h4>
        <p class="content__about item">
          香港の夜景の名所。<br>
          ヴィクトリア・ピークから見下ろすビクトリア・ハーバーを含む夜景は<br>
          世界三大夜景のひとつとして知られています。山頂まではピークトラムで<br>
          移動します。見下ろす景色は飽きることなくまた行きたいと思わされる景色です。
        </p>
      </div>
    </section>
        <section class="sec">
      <h2 class="sec__title">香港</h2>
      <div class="content appear up">
        <div class="content__img item">
          <img src="../assets/images/IMG_0394.png" alt="">
        </div>
        <h4 class="content__name item">
          ヴィクトリアハーバー
        </h4>
        <p class="content__about item">
          九龍側から香港湾を見渡すと、香港島の高層ビル群やビクトリア・ハーバーの<br>
          美しい景色が楽しめます。クルージングも楽しむことができます。<br>
          シンフォニー・オブ・ライツという音楽と光のショーが有名で<br>
          訪れた際にはマストの観光地です。
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
