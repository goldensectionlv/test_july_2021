<template>
  <div
    class="zoom"
    style="position: relative"
  >
    <div
      class="buttons"
    >
      <ratings
        :rating="product.rating"
      />
      <vIcon
        name="basket"
        width="13px"
        height="14px"
        color="#959DAD"
        style="cursor: pointer"
      />
    </div>

    <div
      class="card"
    >
      <product_photo
        style="width: 90%"
        :photo-link="'https://frontend-test.idaproject.com' + product.photo"
      />
      <text_item
        product-name
        margin="0 0 6px 0"
        style="align-self: start"
      >
        {{
          product.name.toLowerCase().split(/\s+/).map(word => word[0].
          toUpperCase() + word.substring(1)).join(' ') + ' ' + product.id
        }}
      </text_item>

      <text_item
        product-price
        style="align-self: start"
      >
        {{ product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') }} &#8381;
      </text_item>


    </div>
  </div>

</template>

<script>
import product_photo from "@/components/atoms/product_photo";
import text_item from "@/components/atoms/text_item";
import ratings from "@/components/atoms/ratings";
import vIcon from "@/components/atoms/vIcon";

export default {
  components: {
    product_photo,
    text_item,
    ratings,
    vIcon
  },
  props: {
    product: Array
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
