<template>
  <div class="basket-container"
       ref="basket-container"
       v-show="basket_active"
  >
    <div class="basket-container__main">
      <div>123</div>
    </div>

  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters('basket', ['basket_active'])
  },
  methods: {
    switchBasket(action) {
      this.$store.dispatch('basket/switchBasket', action)
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
      if (item.target === ctx.$refs['basket-container']) ctx.switchBasket(false)
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
    padding: 48px;
    background-color: white;
    border: 1px solid rgba(0,0,0,.3);
    overflow-y: scroll;
  }
}
</style>
