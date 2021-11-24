<template>
  <div class='trendings'>
    <grid :gifos='gifos'/>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import Grid from './Grid.vue';

export default {
  name: 'Trendings',
  components: { Grid },
  setup() {
    const store = useStore();
    const gifos = computed(() => store.state.trendingsGifos);
    onMounted(() => {
      store.dispatch('getTrendingsGifos');
    });
    return { gifos };
  },
};
</script>

<style scoped lang='scss'>
@import '../assets/_variables.scss';

.trendings {
  background-color: #f3f5f8;
  padding: 20px 0;
}
</style>
