<template>
  <div id="content">
    <section class="sec1">
      <p>これは私の趣味である旅行遍歴による<br>各地域のおすすめポイントをまとめたものです。</p>
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
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      eventData: {
        title: '',
        detail: '',
        isPrivate: false
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
.sec1 {
 height: 100vh;
}
</style>
