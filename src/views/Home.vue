<template>
  <div class="view">
    <h1>GIFOS</h1>
    <h2>Get inspired, search, save, and create<br>the best <span>GIFOS</span></h2>
    <img src='../assets/main-img.svg' alt='main-img'>
    <search-input />
    <grid :gifos='gifos' />
    <view-more-btn />
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import Grid from '../components/Grid.vue';
import SearchInput from '../components/SearchInput.vue';
import ViewMoreBtn from '../components/ViewMoreBtn.vue';

export default {
  name: 'Home',
  components: { Grid, SearchInput, ViewMoreBtn },
  setup() {
    const store = useStore();
    const gifos = computed(() => store.state.searchGifos);
    return { gifos };
  },
};
</script>

<style scoped lang='scss'>
@import './src/assets/variables';

h1 {
  color: $colorOne;
  font-size: 3rem;
}
h2 {
  color: $colorOne;
  text-align: center;
  font-size: 2rem;
  margin: 10px 0;
  span {
    color: $colorTwo;
  }
}
img {
  width: 40%;
}
</style>
