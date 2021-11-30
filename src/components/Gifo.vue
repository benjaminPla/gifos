<template>
  <div class='gifo'>
    <img :src="data.images.fixed_width.url" :alt="data.title">
    <div class='hover'>
      <div>
        <expand-btn class='btn' />
        <favs-btn class='btn' />
        <download-btn class='btn' />
      </div>
      <h4>{{ data.title }}</h4>
    </div>
  </div>
</template>

<script>
import ExpandBtn from './ExpandBtn.vue';
import FavsBtn from './FavsBtn.vue';
import DownloadBtn from './DownloadBtn.vue';

export default {
  name: 'Gifo',
  components: { ExpandBtn, FavsBtn, DownloadBtn },
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
  .btn {
    cursor: pointer;
    border-radius: 10px;
    max-height: 40px;
    max-width: 40px;
    margin-left: 5px;
  }
  h4 {
    text-align: left;
  }
}
</style>
