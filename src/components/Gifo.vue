<template>
  <div class='gifo'>
    <img :src="data.images.fixed_width.url" :alt="data.title">
    <div class='hover'>
      <div>
        <button class='link'>
          <img src='../assets/btn-gif-expand.svg' alt='expand'/>
        </button>
        <button class='link'>
          <img src='../assets/btn-gif-favs.svg' alt='favs'/>
        </button>
        <button class='link'>
          <img src='../assets/btn-gif-download.svg' alt='download'/>
        </button>
      </div>
      <h4>{{ data.title }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gifo',
  props: ['data'],
};
</script>

<style scoped lang='scss'>
@import '../assets/variables';

.gifo {
  border-radius: 10px;
  overflow: hidden;
  width: 200px;
  height: 200px;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .hover {
    background-color: $colorOne;
    position: absolute;
    top: 0;
    color: #fff;
    padding: 10px;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: 0.2s;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .hover:hover {
    opacity: 0.8;
    text-align: right;
  }
  button {
    cursor: pointer;
    outline: none;
    border-radius: 10px;
    border: none;
    margin-left: 5px;
    height: 40px;
  }
  h4 {
    text-align: left;
  }
}
</style>
