<template>
  <input
    type='search'
    placeholder='Search GIFO'
    v-model='value'
    @search.prevent='searchGifos'
  />
</template>

<script>
import { useStore } from 'vuex';
import { ref } from 'vue';

export default {
  name: 'SearchInput',
  setup() {
    const store = useStore();
    const value = ref('');
    const searchGifos = () => store.dispatch('searchGifos', value.value);
    return { value, searchGifos };
  },
};
</script>

<style scoped lang='scss'>
@import '../assets/variables';

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
  background: url('../assets/cross.svg');
  background-size: contain;
  height: 20px;
  width: 20px;
}
</style>
