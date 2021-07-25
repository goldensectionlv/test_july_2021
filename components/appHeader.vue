<template>
  <div class="app-header">

    <text_item app-logo>
      TestList
    </text_item>

    <vIcon
      height="26px"
      width="24px"
      name="basket"
      style="cursor: pointer"
      @click.native="$store.dispatch('basket/switchBasket', true)"
    />

  </div>
</template>

<script>
import text_item from "~/components/atoms/text_item";
import vIcon from "~/components/atoms/vIcon";
export default {
  components: {
    text_item,
    vIcon
  }
}
</script>

<style scoped>
</style>
