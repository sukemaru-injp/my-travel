<template>
<div>
  <slot name='hello' v-bind:user='user' text='text'>
  </slot>
  <slot name='num'>
  </slot>
  <slot></slot>
</div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        first: 'Jack',
        last: 'Ben'
      }
    }
  }
}
</script>

<style scoped>
  
</style>
