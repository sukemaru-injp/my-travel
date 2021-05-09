<template>
  <div id="content">
    <section class="sec">
      <h2 class="sec__title">岡山・王子が岳</h2>
      <div class="content appear up">
        <div class="content__img item">
          <img src="../assets/images/IMG_6568.png" alt="">
        </div>
        <h4 class="content__name item">
          王子が岳
        </h4>
        <p class="content__about item">
          ここではボクの出身地である岡山の王子が岳という、素晴らしい景色を堪能<br>
          できる場所を紹介しておきます。瀬戸内海を一望できるその美しい眺めや<br>
          自然に全身で触れる感覚、その壮大さに心が震えること間違い無しです。<br>
          岡山にお越しの際は、必ず訪れてください！
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
