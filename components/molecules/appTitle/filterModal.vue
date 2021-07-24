<template>
  <div
  >
    <text_item
      v-for="filter of filter_options"
      :key="filter.name"
      small-text-inactive
      class="text-hover"
      margin="0 0 8px 0"
      @click.native="filter.action"
    >
      {{ 'По ' + filter.name }}
    </text_item>

  </div>
</template>

<script>
import text_item from "~/components/atoms/text_item";
import {mapActions, mapGetters} from 'vuex'

export default {
  data() {
    return {
      filter_options: {
        price: {
          name: 'цене', action: () => this.on_click('цене')
        },
        popularity: {
          name: 'популярности', action: () => this.on_click('популярности')
        }
      }
    }
  },
  components: {
    text_item
  },
  computed: mapGetters('products', ['products']),

  methods: {
    ...mapActions('products', ['filter_by']),
    ...mapActions('modal_filter', ['change_active_filter']),
    ...mapActions('pagination', ['paginatedData']),

    on_click(filter_name) {
      this.filter_by(filter_name)
      this.change_active_filter(filter_name)
      this.paginatedData({arr: this.products, pageNumber: 0})
    }
  }

}
</script>

<style scoped>
.text-hover:hover {
  color: black !important;
}
</style>
