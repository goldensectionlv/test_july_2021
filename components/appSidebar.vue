<template>
  <div>
    <text_item
      v-for="category in categories"
      :key="category.id"
      regular-text
      class="sidebar-text sidebar-text-hover"
      :class="{'sidebar-text-active': category.active}"
      @click.native="$router.push('/categories/' + category.id)"
    >
      {{ category.name }}
    </text_item>
  </div>
</template>

<script>
import text_item from "~/components/atoms/text_item";
import {mapGetters} from 'vuex'
export default {
  components: {
    text_item
  },
  computed: {
    ...mapGetters('categories', ['categories'])
  }
}
</script>

<style lang="scss" scoped>
.sidebar-text {
  cursor: pointer;
  user-select: none;
  color: #959DAD !important;
  margin-bottom: 16px !important;
  &:hover {
    color: #59606D !important;
  }
  &-active {
    text-decoration: underline;
    color: black !important;
  }
}
</style>
