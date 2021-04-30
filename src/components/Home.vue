<template>
  <div id="content">
    <section class="section1">
      <p>これは私の趣味である旅行遍歴による各地域のおすすめポイントをまとめたものです。</p>
    </section>
  </div>
</template>

<script>
export default {
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
