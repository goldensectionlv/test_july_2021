<template>
  <div class="app-header">

    <text_item app-logo>
      TestList
    </text_item>

    <div class="basket">

      <div class="basket__counter">
        <span style="margin-top: 1px;">{{ totalBasketQuantity }}</span>
      </div>

      <vIcon
        height="26px"
        width="24px"
        name="basket"
        style="cursor: pointer"
        @click.native="$store.dispatch('basket/switchBasket', true)"
      />
    </div>


  </div>
</template>

<script>
import text_item from "~/components/atoms/text_item";
import vIcon from "~/components/atoms/vIcon";

export default {
  computed: {
    basket_list() {
      return this.$store.getters['basket/basket_list']
    },
    totalBasketQuantity: function () {
      let total = 0
      this.basket_list.map(item => total += item.quantity)
      return total
    }
  },
  components: {
    text_item,
    vIcon
  }
}
</script>

<style lang="scss" scoped>
.basket {
  position: relative;
  &__counter {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15px;
    height: 15px;
    right: 0;
    position: absolute;
    border-radius: 50%;
    background-color: #959DAD;
    font-size: 8px;
    font-weight: 700;
    color: white;
    z-index: 1;
    transform: translate(40%, -40%);
    cursor: pointer;
  }
}
</style>
