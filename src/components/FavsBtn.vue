<template>
  <img
    src='../assets/btn-gif-favs.svg'
    alt='favs'
    class='link'
    @click.prevent='save'
  />
</template>

<script>
export default {
  name: 'FavsBtn',
  setup() {
    const save = () => localStorage.setItem('favs', 'si');
    return { save };
  },
};
</script>
