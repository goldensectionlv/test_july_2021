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
        v-if="!basket_list.length && !isThanksActive"
        margin="24px 0 0 0"
        :on-close="onClose"
      />
      <notEmptyBasketBody
        v-if="basket_list.length"
        margin="24px 0 0 0"
        :basket-items="basket_list"
        :delete-from-basket="deleteFromBasket"
      />
      <myForm
        v-if="basket_list.length"
      />
      <thanksForOrder
        v-if="!basket_list.length && isThanksActive"
      />
    </div>

  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import basketHeader from "@/components/molecules/basket/basketHeader";
import emptyBasketInfo from "@/components/molecules/basket/emptyBasketInfo";
import notEmptyBasketBody from "@/components/molecules/basket/notEmptyBasketBody";
import myForm from "@/components/molecules/basket/myForm";
import thanksForOrder from "@/components/molecules/basket/thanksForOrder";

export default {
  components: {
    basketHeader,
    emptyBasketInfo,
    notEmptyBasketBody,
    myForm,
    thanksForOrder
  },
  computed: {
    ...mapGetters('basket', ['basket_active', 'basket_list', 'isThanksActive'])
  },
  methods: {
    onClose() {
      this.$store.dispatch('basket/switchBasket', false)
    },
    deleteFromBasket(index) {
      this.$store.dispatch('basket/deleteFromBasket', index)
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
    // ref close on click
    let ctx = this
    document.addEventListener('click', (item) => {
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
  z-index: 2;
  background-color: rgba(255, 255, 255, .8);

  &__main {
    width: 460px;
    max-width: 100vw;
    height: 100%;
    padding: 52px 48px 48px 48px;
    background-color: white;
    overflow-y: scroll;
  }
}
</style>
