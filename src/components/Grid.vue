<template>
  <div class='grid'>
    <div v-for='gif in gifos' :key='gif.id'>
      <img :src="gif.images.fixed_width.url" alt="">
      <span>{{ gif.id }}</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Grid',
  props: ['gifos'],
};
</script>

<style scoped lang='scss'>
  .grid {
    width: 70%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }
</style>
