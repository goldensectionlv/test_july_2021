<template>
  <div>
    <div
      class="category_page"
    >
      <!--    Фотографии с сервера приходят квадратные с большой зоной белого, когда в тз вертикальные прямоугольники и почти без фона-->
      <product_card
        v-for="product of current_page_arr"
        :key="product.id"
        class="product_card"
        :product="product"
        :add-to-basket="addToBasket"
        :is-in-basket-ids="isInBasketIds"
      />
    </div>

    <pagination
      style="display: flex"
      :items_array="products"
      :page-number="pageNumber"
      :page-count="pageCount"
      :action="paginatedData"
    />
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import product_card from "@/components/organizms/product_card";
import pagination from "@/components/atoms/pagination";

export default {
  async fetch({store, params}) {
    await store.dispatch('categories/get_categories', params.id)
    if (Number(params.id) === Number(store.getters['categories/categories'][0].id)) {
      await store.dispatch('products/get_products', params.id)
      await store.dispatch('products/filter_by', store.getters['modal_filter/active_filter'])
      await store.dispatch('pagination/paginatedData', {arr: store.getters['products/products'], pageNumber: 0})
    }
  },
  components: {product_card, pagination},
  computed: {
    ...mapGetters('products', ['products']),
    ...mapGetters('basket', ['basket_list']),
    ...mapGetters('pagination', ['current_page_arr', 'pageCount', 'pageNumber']),

    isInBasketIds: function () {
      let total_items = []
      this.basket_list.map(item => total_items.push(item.id))
      return total_items
    }
  },
  methods: {
    ...mapActions('basket', ['addToBasket']),
    paginatedData(obj) {
      this.$store.dispatch('pagination/paginatedData', obj)
    },
  },
  async mounted() {
    // В соответствии с заданием, другие страницы должны рендериться на стороне клиента
    if (Number(this.$route.params.id) !== Number(this.$store.getters['categories/categories'][0].id)) {
      await this.$store.dispatch('products/get_products', this.$route.params.id)
      await this.$store.dispatch('products/filter_by', this.$store.getters['modal_filter/active_filter'])
      await this.$store.dispatch('pagination/paginatedData', {
        arr: this.$store.getters['products/products'],
        pageNumber: 0
      })
    }
  }
}
</script>

<style scoped>
.category_page {
  display: grid;
  grid-template-columns: repeat(auto-fill, 24%);
  justify-content: space-between;
  width: 100%;
//background-color: rgba(0, 0, 0, .1);
}

.product_card {
  width: 100%;
  margin-bottom: 8.6%;
  cursor: pointer;
}

@media (max-width: 1200px) {
  .category_page {
    grid-template-columns: repeat(auto-fill, 32%);
  }

  .product_card {
    margin-bottom: 8.6%;
  }
}

@media (max-width: 900px) {
  .category_page {
    grid-template-columns: repeat(auto-fill, 48%);
  }

  .product_card {
    margin-bottom: 10%;
  }
}

@media (max-width: 700px) {
  .category_page {
    grid-template-columns: repeat(auto-fill, 100%);
  }

  .product_card {
    margin-bottom: 8%;
  }
}
</style>
