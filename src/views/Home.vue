<template>
  <div class="view">
    <h1>GIFOS</h1>
    <h2>Get inspired, search, save, and create<br>the best <span>GIFOS</span></h2>
    <img src='../assets/main-img.svg' alt='main-img'>
    <input type='search' placeholder='Search GIFO' @search.prevent='searchGifo'/>
    <grid :gifos='gifos' />
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import Grid from '../components/Grid.vue';

export default {
  name: 'Home',
  components: { Grid },
  setup() {
    const store = useStore();
    const gifos = computed(() => store.state.gifos);
    onMounted(() => {
      store.dispatch('getGifos');
    });
    return { gifos };
  },
};
</script>

<style scoped lang='scss'>
@import './src/assets/_variables.scss';

.view {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 5%;
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
  input[type='search'] {
    padding: 15px 25px;
    border-radius: 25px;
    outline: none;
    border: 1px solid $colorOne;
    width: 50%;
  }
  input[type='search']::-webkit-search-cancel-button {
    cursor: pointer;
    -webkit-appearance: none;
    background: url('../assets/icon-search.svg');
    background-size: contain;
    height: 20px;
    width: 20px;
  }
}
</style>
