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
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      eventData: {
        title: ''
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
