<template>
  <div class='grid'>
    <gifo v-for='gifo in gifos' :key='gifo.id' :gifo='gifo' />
  </div>
</template>

<script>
import Gifo from './Gifo.vue';

export default {
  name: 'Grid',
  components: { Gifo },
  props: ['gifos'],
};
</script>

<style scoped lang='scss'>
@import '../assets/variables';

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin: 20px;
}
</style>
