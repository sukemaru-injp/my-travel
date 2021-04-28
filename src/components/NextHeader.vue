<template>
<div>
  <slot name='hello'>
    <h2>デフォルト</h2>
  </slot>
  <slot>
    <h2>デフォルト2</h2>
  </slot>
</div>
</template>

<script>
export default {
  props: ['headerText']
}
</script>

<style scoped>
  
</style>
