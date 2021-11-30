<template>
  <img
    src='../assets/btn-gif-favs.svg'
    alt='favs'
    class='link'
    @click.prevent='setFavsGifos(data)'
  />
</template>

<script>
export default {
  name: 'FavsBtn',
  props: ['data'],
  setup() {
    /* eslint-disable */
    const setFavsGifos = (id) => {
      const favsGifos = JSON.parse(localStorage.getItem('favsGifos')) || [];
      if (!favsGifos.includes(id)) {
        favsGifos.push(id);
        localStorage.setItem('favsGifos', JSON.stringify(favsGifos));
      };
    };
    /* eslint-disable */
    return { setFavsGifos };
  },
};
</script>
