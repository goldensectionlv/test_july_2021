<template>
  <div
    class="thanks"
  >
    <img :src="require('@/assets/icons/ok-hand-sign.svg')"
         alt="thanks"
         style="margin-bottom: 24px"
    >
    <text_item thanks-text>
      Заявка успешно отправлена
    </text_item>

    <text_item grey-text margin="2px 0 0 0">
      Вскоре наш менеджер свяжется с Вами
    </text_item>

  </div>
</template>

<script>
import text_item from "@/components/atoms/text_item";
export default {
  components: {
    text_item
  }
}
</script>

<style lang="scss" scoped>
.thanks {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  height: 85%;
  width: 100%;
}
</style>
