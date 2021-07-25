<template>
  <div>
    <div
      class="number-of-page-item"
      v-for="page of pageCount" :key="page"
      :class="{'active-page': pageNumber === page-1}"
      @click="action({arr: items_array, pageNumber: page-1})"
    >
      {{ page }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items_array: Array,
    action: Function,
    pageCount: Number,
    pageNumber: Number
  }
}
</script>

<style lang="scss" scoped>
.active-page {
  color: red;
}

.number-of-page-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  margin: 30px 1%;
  border: 2px solid black;
  border-radius: 3px;
  cursor: pointer;
}
</style>
