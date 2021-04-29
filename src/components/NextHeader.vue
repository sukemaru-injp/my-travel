<template>
<div>
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
