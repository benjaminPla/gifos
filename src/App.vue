<template>
  <nav-bar />
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'App',
  components: { NavBar },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;700&family=Roboto:wght@300;700&display=swap');
@import './src/assets/_variables.scss';
</style>
