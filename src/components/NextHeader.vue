<template>
<div>
  <slot>
    <h2>デフォルト</h2>
  </slot>
</div>
</template>

<script>
export default {
  props: ['headerText']
}
</script>
