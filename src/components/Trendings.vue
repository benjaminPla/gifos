<template>
  <div class='trendings'>
    <i
      class="fas fa-angle-double-left link"
      @click.prevent='setOffset("previous")'
      :class='offset <= 0 && "disable"'>
    </i>
    <grid :gifos='gifos' />
    <i class="fas fa-angle-double-right link" @click.prevent='setOffset("next")'></i>
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
    const offset = computed(() => store.state.trendingsOffset);
    const setOffset = (type) => store.dispatch('setTrendingsOffset', type);
    onMounted(() => {
      store.dispatch('getTrendingsGifos');
    });
    return { gifos, offset, setOffset };
  },
};
</script>

<style scoped lang='scss'>
@import '../assets/variables';

.trendings {
  background-color: #f3f5f8;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .fas {
    font-size: 3rem;
    color: $colorOne;
    cursor: pointer;
  }
  .disable {
    cursor: not-allowed;
    color: #000;
  }
}
</style>
