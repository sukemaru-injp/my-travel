<template>
  <div class="header">
    <h2 class="title">My Travel Diary</h2>
    <ul class="countries">
      <li class="country" @click="currentComponent = 'Thai'">タイ</li>
      <li class="country">ベトナム</li>
      <li class="country">香港</li>
    </ul>
  </div>
</template>

<script>
</script>

<style scoped>
  .header {
    background: linear-gradient(45deg, #2af598 0%, #009efd 100%);
    width: 30vw;
    height: 100vh;
    color: white;
  }

  .countries {
    list-style-type: none;
  }

  .country {
    margin-bottom: 15px;
    cursor: pointer;
  }
  .title {
    margin-left: 5px;
  }
</style>
