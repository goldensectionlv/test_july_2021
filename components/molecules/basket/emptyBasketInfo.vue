<template>
  <div
    :style="{margin: margin}"
  >
    <text_item basket-empty-text>
      Пока что вы ничего не добавили в корзину.
    </text_item>

    <vButton @click.native="onClose">
      Перейти к выбору
    </vButton>

  </div>
</template>

<script>
import text_item from "@/components/atoms/text_item";
import vButton from "@/components/atoms/vButton";
export default {
  components: {
    text_item,
    vButton
  },
  props: {
    margin: {
      type: String,
      default: '0'
    },
    onClose: Function
  }
}
</script>

<style lang="scss" scoped>

</style>
