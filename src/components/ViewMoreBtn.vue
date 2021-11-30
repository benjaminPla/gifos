<template>
  <input
    type='button'
    value='View More'
    @click.prevent='viewMore'
    class='link'
    :class='!displayButton && "display"'
  />
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  name: 'ViewMoreBtn',
  setup() {
    const store = useStore();
    const displayButton = computed(() => store.state.displayViewMoreBtn);
    const viewMore = () => store.dispatch('setSearchGifosOffset');
    return { viewMore, displayButton };
  },
};
</script>

<style scoped lang='scss'>
@import '../assets/variables';

input[type='button'] {
  background: $colorOne;
  outline: none;
  border: none;
  padding: 10px 15px;
  border-radius: 20px;
  color: #fff;
  font-weight: 700;
  margin-bottom: 20px;
}
input[type='button']:hover {
  cursor: pointer;
  background-color: $colorTwo;
  color: #fff;
}
</style>
