<template>
  <div>
    <product_photo
      style="width: 90%"
      :photo-link="photoLink"
      :alt="productName"
    />
    <text_item
      product-name
      margin="0 0 6px 0"
      style="align-self: start"
    >
      {{
        productName.toLowerCase().split(/\s+/).map(word => word[0].
        toUpperCase() + word.substring(1)).join(' ') + ' ' + productId
      }}
    </text_item>

    <text_item
      product-price
      style="align-self: start"
    >
      {{ price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') }} &#8381;
    </text_item>

  </div>
</template>

<script>
import product_photo from "@/components/atoms/product_photo";
import text_item from "@/components/atoms/text_item";
export default {
  components: {
    product_photo,
    text_item
  },
  props: {
    productName: String,
    price: Number,
    photoLink: String,
    productId: Number
  }

}
</script>

<style scoped>

</style>
