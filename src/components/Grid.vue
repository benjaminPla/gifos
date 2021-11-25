<template>
  <div class='grid'>
    <div v-for='gif in gifos' :key='gif.id' class='gifo'>
      <img :src="gif.images.fixed_width.url" :alt="gif.title">
      <!-- <h4>{{ gif.title }}</h4> -->
      <!-- <span>{{ gif.user.username }}</span> -->
    </div>
  </div>
  <input
    type='button'
    value='View More'
    @click.prevent='viewMore'
    :class='!displayButton && "display"'/>
</template>

<script>
import { useStore } from 'vuex';

export default {
  name: 'Grid',
  props: ['gifos'],
  setup() {
    const store = useStore();
    const displayButton = true;
    const viewMore = () => store.dispatch('setSearchGifosOffset');
    return { viewMore, displayButton };
  },
};
</script>

<style scoped lang='scss'>
@import '../assets/variables';

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin: 20px;
  .gifo {
    border-radius: 10px;
    overflow: hidden;
    width: 200px;
    height: 200px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
