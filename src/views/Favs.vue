<template>
  <div class="view">
    <grid :gifos='gifos' />
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
    const gifos = computed(() => store.state.favsGifos);
    onMounted(() => {
      store.dispatch('getFavsGifos');
    });
    return { gifos };
  },
};
</script>
