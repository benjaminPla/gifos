<template>
  <div class='trendings'>
    <i class="fas fa-angle-double-left" @click.prevent='setOffset("previous")'></i>
    <grid :gifos='gifos'/>
    <i class="fas fa-angle-double-right" @click.prevent='setOffset("next")'></i>
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
    const setOffset = (type) => store.dispatch('setTrendingsOffset', type);
    onMounted(() => {
      store.dispatch('getTrendingsGifos');
    });
    return { gifos, setOffset };
  },
};
</script>

<style scoped lang='scss'>
@import '../assets/_variables.scss';

.trendings {
  background-color: #f3f5f8;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .fas {
    font-size: 3rem;
    font-family: "Font Awesome 5 Free";
    color: $colorOne;
    cursor: pointer;
  }
}
</style>
