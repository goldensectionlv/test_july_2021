<template>
  <div>
    <text_item header-text>
      Каталог
    </text_item>


    <div class="filter"
         @click="open_or_close"
         @mouseleave="switchFilterModal(false)"
    >
      <filterMenu
        class="filter__main"
        :active-filter="active_filter"
      />
      <transition
        name="slide"
        mode="out-in"
        :key="filterModalActive"
      >
        <filterModal
          v-if="filterModalActive"
          class="filter__modal"
        />
      </transition>
    </div>


  </div>

</template>

<script>
import vIcon from "~/components/atoms/vIcon";
import text_item from "~/components/atoms/text_item";
import filterMenu from "~/components/molecules/appTitle/filterMenu";
import filterModal from "~/components/molecules/appTitle/filterModal";
import {mapGetters, mapActions} from 'vuex'

export default {
  components: {
    text_item,
    vIcon,
    filterMenu,
    filterModal
  },
  computed: {
    ...mapGetters('modal_filter', ['filterModalActive', 'active_filter']),
    ...mapGetters('products', ['products'])
  },
  methods: {
    ...mapActions('modal_filter', ['switchFilterModal']),
    open_or_close() {
      this.filterModalActive ? this.switchFilterModal(false) : this.switchFilterModal(true)
    }
  }
}
</script>

<style lang="scss" scoped>
.filter {
  position: relative;

  &__main {
    display: flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
  }

  &__modal {
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 1;
    padding: 18px 12px 12px 12px;
    border-radius: 8px;
    min-width: 100%;
    cursor: pointer;
    background-color: white;
  }
}

.slide-enter-active {
  transition: 100ms;
}

.slide-enter {
  transform: translate(0, 40%);
  opacity: 1;
}
</style>
