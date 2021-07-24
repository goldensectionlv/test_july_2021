<template>
  <div class="container">
  </div>
</template>

<script>
export default {
  async asyncData({store, params}) {
    await store.dispatch('categories/get_categories', params.id)
  },
  computed: {
    categories() {
      return this.$store.getters['categories/categories']
    }
  },

  mounted() {
    if (this.categories.length) this.$router.push('/categories/' + this.categories[0].id)
  }
}
</script>

<style>

</style>
