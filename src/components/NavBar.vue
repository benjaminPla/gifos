<template>
  <nav>
    <router-link to="/"><img src='../assets/home.svg' alt='home' /></router-link>
    <div class='links'>
      <router-link to="/favs">FAVS</router-link>
      <router-link to="/mygifos">MY GIFOS</router-link>
      <router-link to="/creategifo">+</router-link>
      <i
        class="fas fa-adjust"
        @click.prevent='setDarkMode'
        :class='darkMode === false ? "dark" : "light"'>
      </i>
    </div>
  </nav>
  <router-view/>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

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
nav {
  font-family: 'Montserrat', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  font-weight: 700;
  .links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30%;
  }
  .links * {
    margin-left: 20px;
  }
  .links *:hover {
    cursor: pointer;
    color: #572ee5;
  }
  .fas {
    transition: 0.2s;
  }
  .dark {
    transform: rotate(180deg);
  }
}
</style>
