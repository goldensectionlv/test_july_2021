<template>
  <div
    class="zoom"
    style="position: relative"
  >
    <cardButtons
      class="buttons"
      :rating="product.rating"
      :add-to-basket="addToBasket"
      :product="product"
      :is-in-basket-ids="isInBasketIds"
    />
    <cardBody
      class="card"
      :photo-link="'https://frontend-test.idaproject.com' + product.photo"
      :price="product.price"
      :product-id="product.id"
      :product-name="product.name"
    />
  </div>

</template>

<script>
import cardButtons from "@/components/molecules/product_card/cardButtons";
import cardBody from "@/components/molecules/product_card/cardBody";

export default {
  components: {
    cardButtons,
    cardBody
  },
  props: {
    product: Object,
    addToBasket: Function,
    isInBasketIds: Array
  }
}
</script>

<style lang="scss" scoped>

.buttons {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  z-index: 1;
  top: 18px;
  padding: 0 16px;
}

.card {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  padding: 16px;
  //border: 1px solid rgba(0, 0, 0, .1);
}

.zoom {
  -ms-transform: scale(1.00); /* IE 9 */
  -webkit-transform: scale(1.00); /* Safari 3-8 */
  transform: scale(1.00);
  transition: 200ms ease-out;
}
.zoom:hover {
  -ms-transform: scale(1.03); /* IE 9 */
  -webkit-transform: scale(1.03); /* Safari 3-8 */
  transform: scale(1.03);
  transition: 200ms ease-out;
}

</style>
