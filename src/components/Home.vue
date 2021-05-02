<template>
  <div id="content">
    <section class="sec1">
      <h2 class="sec1__title">HOME</h2>
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
        <button @click="animation">appear</button>
      </div>
    </section>

    <section class="sec2">
      <div class="content">
        <h3 class="content__title item">旅の魅力</h3>
        <div class="content__img item">
          <img src="../assets/images/IMG_5917.png" alt="">
        </div>
        <ul class="content__lists">
          <ol>
            <li class="content__list">
              自分の知らないことに直接触れることで、視野を広げることができる。
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
        <button @click="animation">appear</button>
      </div>
    </section>

    <section class="sec3">
      <h2>form</h2>
      <label for="title">
        タイトル
      </label>
      <input type="text" id="title" v-model.lazy="eventData.title">
      <p>
        {{eventData.title}}
      </p>
      <label for="detail">質問内容</label>
      <textarea name="" id="detail" cols="30" rows="10" v-model="eventData.detail">
      </textarea>
      <pre>{{eventData.detail}}</pre>
      <label for="isPrivate">非公開</label>
      <input type="checkbox" id="isPrivate" v-model="eventData.isPrivate">

      <select v-model="eventData.location" class="sel">
        <option v-for="loc in locations" :key="loc">{{ loc }}</option>
      </select>
      <p>{{ eventData.location }}</p>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      locations: [
          "Tokyo",
          "Paris",
          "London"
        ],
      eventData: {
        title: '',
        detail: '',
        isPrivate: false,
        location: "Tokyo"
      }
    }
  },
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
.sel {
  margin: 20px;
}
</style>
