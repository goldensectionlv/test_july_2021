<template>
  <div>
    <text_item regular-text class="mobileText">
      Сортировать по:
      <text_item grey-text class="mobileText">
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

<style lang="scss" scoped>
.mobileText {

}
@media (max-width: 380px) {
  .mobileText {
  font-size: 14px !important;
  }
}
</style>
