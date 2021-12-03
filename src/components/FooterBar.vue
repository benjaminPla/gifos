<template>
  <footer>
    <div class='media'>
      <a href='https://github.com/benjaminPla' target='_blank' class='link'>
        <i class='fab fa-github'></i>
      </a>
      <a href='https://www.linkedin.com/in/benjamin-pla/' target='_blank' class='link'>
        <i class='fab fa-linkedin'></i>
      </a>
      <a href='https://benjaminpla.github.io/cv/' target='_blank' class='link'>
        <i class="far fa-id-badge"></i>
      </a>
    </div>
    <p><i class="fab fa-vuejs"></i> Project made using Vue + Vuex technologies</p>
    <p>Consuming
      <a href='https://developers.giphy.com/' target="_blank" class='link'>GIPHY API</a>
    </p>
  </footer>
</template>

<script>
export default {
  name: 'FooterBar',
};
</script>

<style scoped lang='scss'>
@import '../assets/variables';

footer {
  text-align: center;
  font-size: 1.5rem;
  padding: 20px 15%;
  color: #333;
  p {
    font-size: 0.8rem;
  }
  .media {
    margin-bottom: 10px;
    a {
      margin: 0 10px;
    }
  }
}
</style>
