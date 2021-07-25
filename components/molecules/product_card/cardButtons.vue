<template>
  <div>
    <ratings
      :rating="rating"
    />
    <vIcon
      name="basket"
      width="13px"
      height="14px"
      :color="isInBasketIds.includes(product.id) ? 'black' : '#959DAD'"
      style="cursor: pointer"
      @click.native="addToBasket(product)"
    />
  </div>
</template>

<script>
import ratings from "@/components/atoms/ratings";
import vIcon from "@/components/atoms/vIcon";
export default {
  components: {
    ratings,
    vIcon
  },
  props: {
    rating: {
      type: Number,
      default: 0
    },
    addToBasket: Function,
    product: Object,
    isInBasketIds: Array
  }

}
</script>

<style scoped>

</style>
