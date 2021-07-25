<template>
  <div
    :style="{margin: margin}"
  >
    <!--    header-->
    <text_item basket-order-header>
      Товары в корзине
    </text_item>

    <div
      class="basket-item"
      v-for="(product, index) of basketItems"
      :key="product.id"
    >
      <!-- Т.к. формат картинок отличается от того, что в макете,
      то пришлось здесь изменить стили карточки, чтобы выглядело адекватно-->
      <product_photo
        style="width: 28%"
        :photo-link="'https://frontend-test.idaproject.com' + product.photo"
        :alt="product.name"
      />
      <!--      product information-->
      <div class="product-info">
        <text_item product-name>
          {{
            product.name.toLowerCase().split(/\s+/).map(word => word[0]
              .toUpperCase() + word.substring(1)).join(' ') + ' Количество: ' + product.quantity
          }}
        </text_item>

        <text_item
          product-price
          margin="6px 0 0 0"
        >
          {{ product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') }} &#8381;
        </text_item>

        <ratings
          style="margin-top: 6px"
          :rating="product.rating"
        />
      </div>
      <!--      delete button-->
      <div style="margin-left: auto">
        <vIcon
          width="20px"
          height="22px"
          name="delete"
          @click.native="deleteFromBasket(index)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import text_item from "@/components/atoms/text_item";
import product_photo from "@/components/atoms/product_photo";
import ratings from "@/components/atoms/ratings";
import vIcon from "@/components/atoms/vIcon";

export default {
  components: {
    text_item,
    product_photo,
    ratings,
    vIcon
  },
  props: {
    margin: {
      type: String,
      default: '0',
    },
    basketItems: Array,
    deleteFromBasket: Function
  }
}
</script>

<style lang="scss" scoped>
.basket-item {
  display: flex;
  align-items: center;
  width: 100%;
  height: 120px;
  border-radius: 8px;
  margin-top: 16px;
  padding: 15px 25px 15px 0;
}

.product-info {
  display: flex;
  flex-direction: column;
}

</style>
