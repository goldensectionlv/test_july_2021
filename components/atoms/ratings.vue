<template>
  <div style="display: flex; align-items: center">
    <img v-if="rating === 1 || rating===0" :src="require('@/assets/icons/1star.svg')" alt="">
    <img v-else-if="rating === 2" :src="require('@/assets/icons/2star.svg')" alt="">
    <img v-else-if="rating === 3" :src="require('@/assets/icons/3star.svg')" alt="">
    <img v-else-if="rating === 4" :src="require('@/assets/icons/4star.svg')" alt="">
    <img v-else-if="rating === 5" :src="require('@/assets/icons/5star.svg')" alt="">
    <span class="rating-num">{{rating}}</span>
  </div>
</template>

<script>
export default {
  props: {
    rating: {
      type: Number,
      default: 5
    }
  },
}
</script>

<style lang="scss" scoped>
.rating-num {
  color: #F2C94C;
  font-weight: bold;
  font-size: 10px;
}
</style>
