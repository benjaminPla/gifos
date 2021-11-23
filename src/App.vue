<template>
  <div id="nav">
    <router-link to="/"><img src='./assets/home.svg' alt='home' /></router-link>
    <router-link to="/favs">FAVS</router-link>
    <router-link to="/mygifos">MY GIFOS</router-link>
    <router-link to="/creategifo">+</router-link>
    <i class="fas fa-adjust"></i>
  </div>
  <router-view/>
</template>

<style lang="scss">

</style>
