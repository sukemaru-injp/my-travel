<template>
  <div id="content">
    <section class="sec">
      <h2 class="sec__title">HOME</h2>
      <div class="content appear up">
        <h3 class="content__produce item">自己紹介</h3>
        <div class="content__img item">
          <img src="../assets/images/IMG_5456.png" alt="">
        </div>
        <h4 class="content__name item">
          Ryosuke Kubota
        </h4>
        <p class="content__about item">
          これは私が過去に行った国や地域をまとめたポートフォリオです。<br>
          旅行好きである私は年に2~3回は海外旅行をしていましたが、<br>
          コロナの影響で我慢を強いられています。そこで過去の旅行をまとめました。<br>
          その地のおすすめポイントなどをまとめています。<br>
          今後旅行を計画している人の参考にもなればと思います。<br>
        </p>
      </div>
    </section>

    <section class="sec">
      <div class="content appear up">
        <h2 class="content__title item">旅の魅力</h2>
        <div class="content__img item">
          <img src="../assets/images/IMG_5917.png" alt="">
        </div>
        <ul class="content__lists item">
          <ol>
            <li class="content__list">
              自分の知らない世界に直接触れることで、視野を広げることができる。
            </li>
            <li class="content__list">
              日本の常識は世界の非常識。日本の魅力を再確認できる。
            </li>
            <li class="content__list">
              予定通りに進まないこともしばしば。柔軟な対応力が身につく。
            </li>
            <li class="content__list">
              自分の興味のあることに足を止めて、時間を気にせず没頭できる。
            </li>
          </ol>
        </ul>
      </div>
    </section>

    <section class="sec">
      <div class="content appear up">
        <h2 class="content__title item">{{ title | upperCase }}</h2>
        <h2 class="content__profile item">My Account List</h2>
        <ul class="content__lists item">
          <li class="content__list item none">
            <a href="https://www.facebook.com/profile.php?id=100029782609298" class="account">Facebook Account<font-awesome-icon :icon="['fab', 'facebook']" class="fa" /></a>
          </li>
          <li class="content__list item none">
            <a href="https://github.com/sukemaru-injp" class="account">Github Account<font-awesome-icon :icon="['fab', 'github']" class="fa" /></a>
          </li>
          <li class="content__list item none">
            <a href="https://www.instagram.com/kubota____/" class="account">Instgram Account<font-awesome-icon :icon="['fab', 'instagram']" class="fa" /></a>
          </li>
        </ul>
      </div>
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

