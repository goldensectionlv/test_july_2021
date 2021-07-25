<template>
  <div
    class="empty-container"
    :style="{margin: margin}"
  >
    <text_item header-text>
      Корзина
    </text_item>

    <vIcon
      width="14px"
      height="14px"
      name="close"
      style="cursor: pointer"
      @click.native="onClose"
    />
  </div>
</template>

<script>
import text_item from "@/components/atoms/text_item";
import vIcon from "@/components/atoms/vIcon";

export default {
  components: {
    text_item,
    vIcon
  },
  props: {
    onClose: Function,
    margin: {
      type: String,
      default: '0'
    }
  }
}
</script>

<style lang="scss" scoped>
.empty-container {
  display: flex;
  justify-content: space-between;
  align-items: center
}
</style>
