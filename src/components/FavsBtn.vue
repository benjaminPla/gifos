<template>
  <img
    src='../assets/btn-gif-favs.svg'
    alt='favs'
    class='link'
    @click.prevent='save(data)'
  />
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'FavsBtn',
  props: ['data'],
  setup() {
    const store = useStore();
    const favs = computed(() => store.state.favsGifos);
    /* eslint-disable */
    const save = (data) => {
      !favs.value.includes(data) && store.commit('setFavsGifos', data);
      localStorage.setItem('favs', JSON.stringify(favs.value));
    };
    /* eslint-disable */
    return { favs, save };
  },
};
</script>
