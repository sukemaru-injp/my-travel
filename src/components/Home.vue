<template>
  <div id="content">
    <section class="sec1">
      <h2 class="sec1__title">HOME</h2>
      <div class="content">
        <h3 class="content__produce">自己紹介</h3>

        <p>これは私の趣味である旅行遍歴による<br>各地域のおすすめポイントをまとめたものです。</p>
      </div>
    </section>
    <section class="sec2">
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
  created() {
    console.log('create');
  },
  destroyed() {
    console.log('destroy')
  },
  deactivated() {
    console.log('ディアクティベイテッド')
  }
}
</script>

<style scoped>
@import "../assets/styles/home.css";
.sec1 {
  height: 100vh;
}

.sel {
  margin: 20px;
}
</style>
