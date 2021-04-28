<template>
<div>
  <slot name='hello'>
  </slot>
  <slot name='num'>
  </slot>
  <slot></slot>
</div>
</template>

<script>
export default {
  props: ['headerText']
}
</script>

<style scoped>
  
</style>
