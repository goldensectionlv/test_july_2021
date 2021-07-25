<template>
  <div class="basket-container"
       ref="basket-container"
       v-show="basket_active"
  >
    <div class="basket-container__main">

      <basketHeader
        style="width: 100%"
        :on-close="onClose"
      />

      <emptyBasketInfo
        style="width: 100%"
        margin="24px 0 0 0"
        :on-close="onClose"
      />

    </div>

  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import text_item from "@/components/atoms/text_item";
import vIcon from "@/components/atoms/vIcon";
import basketHeader from "@/components/molecules/basket/basketHeader";
import emptyBasketInfo from "@/components/molecules/basket/emptyBasketInfo";
export default {
  components: {
    text_item, vIcon,
    basketHeader,
    emptyBasketInfo
  },
  computed: {
    ...mapGetters('basket', ['basket_active'])
  },
  methods: {
    onClose() {
      this.$store.dispatch('basket/switchBasket', false)
    }
  },
  watch: {
    // prevent scroll when basket is active
    basket_active: function () {
      if (this.basket_active) document.documentElement.style.overflow = 'hidden'
      else document.documentElement.style.overflow = 'auto'
    }
  },
  mounted() {
    let ctx = this
    document.addEventListener('click',  (item) => {
      if (item.target === ctx.$refs['basket-container']) ctx.onClose()
    })
  }
}
</script>

<style lang="scss" scoped>
.basket-container {
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: flex-end;
  z-index: 1;
  background-color: rgba(255, 255, 255, .8);
  &__main {
    width: 460px;
    max-width: 100vw;
    height: 100%;
    padding: 52px 48px 48px 48px;
    background-color: white;
    border: 1px solid rgba(0,0,0,.3);
    overflow-y: scroll;
  }
}
</style>
