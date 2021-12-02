<template>
  <img
    src='../assets/btn-gif-favs.svg'
    alt='favs'
    class='link'
    @click.prevent='setFavsGifos(gifoId)'
  />
</template>

<script>
export default {
  name: 'FavsBtn',
  props: ['gifoId'],
  setup() {
    /* eslint-disable */
    const setFavsGifos = (gifoId) => {
      const favsGifos = JSON.parse(localStorage.getItem('favsGifos')) || [];
      if (!favsGifos.includes(gifoId)) {
        favsGifos.push(gifoId);
        localStorage.setItem('favsGifos', JSON.stringify(favsGifos));
      };
    };
    /* eslint-disable */
    return { setFavsGifos };
  },
};
</script>
