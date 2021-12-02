<template>
  <nav>
    <router-link to="/" class='link'>HOME</router-link>
    <div class='links'>
      <router-link to="/favs" class='link'>FAVS</router-link>
      <router-link to="/mygifos" class='link'>MY GIFOS</router-link>
      <router-link to="/creategifo" class='link'>CREATE</router-link>
      <a>
        <i class="fas fa-adjust link" @click.prevent='setDarkMode'></i>
      </a>
    </div>
  </nav>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'NavBar',
  setup() {
    const store = useStore();
    const darkMode = computed(() => store.state.darkMode);
    const setDarkMode = () => store.commit('setDarkMode');
    return { darkMode, setDarkMode };
  },
};
</script>

<style lang="scss">
@import './src/assets/variables';

nav {
  position: fixed;
  width: 100%;
  z-index: 10;
  background: #fff;
  border-top: 5px solid $colorOne;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  font-weight: 700;
  color: $colorOne;
  .link {
    margin-left: 20px;
  }
  .links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30%;
  }
  .fas {
    transition: 0.2s;
  }
  a .fas:active {
    transform: rotate(180deg);
  }
}
</style>
