<template>
  <div>
    <text_item regular-text>
      Сортировать по:
      <text_item grey-text>
        {{ activeFilter }}
      </text_item>
    </text_item>

    <vIcon
      name="open"
      width="5px"
      height="4px"
      margin="1px 0 0 4px"
      color="#59606D"
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
  },
  props: {
    activeFilter: String
  }
}
</script>

<style scoped>

</style>
