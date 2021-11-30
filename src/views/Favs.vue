<template>
  <div class="view">
    <grid :gifos='favsGifos'/>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import Grid from '../components/Grid.vue';

export default {
  name: 'Favs',
  components: { Grid },
  setup() {
    const store = useStore();
    const favsGifos = computed(() => store.state.favsGifos);
    onMounted(() => {
      store.dispatch('getFavsGifos', favsGifos);
    });
    return { favsGifos };
  },
};
</script>

<style scoped lang='scss'>
  .view {
    padding-top: 80px;
    height: 100vh;
  }
</style>
