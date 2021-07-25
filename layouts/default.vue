<template>
  <div>
    <basket
    />
    <appHeader class="app-header"
    />
    <div class="main-layout">
      <appTitle
        class="app-title"
      />
      <appSidebar
        class="app-sidebar"
      />
      <div class="app-body">
        <Nuxt/>
      </div>
    </div>

  </div>
</template>

<script>
import text_item from "~/components/atoms/text_item";
import appHeader from "~/components/appHeader";
import appTitle from "~/components/appTitle";
import appSidebar from "~/components/appSidebar";
import basket from "@/components/organizms/basket";

export default {
  components: {
    appHeader,
    appTitle,
    text_item,
    appSidebar,
    basket
  },
  mounted() {
    this.$store.dispatch('basket/localStorageRequest')
  }
}
</script>

<style lang="scss">
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  font-family: 'PT Sans', sans-serif;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 66px;
  padding: 0 6.11vw; /* 88px от 1440px = 6.11%  */
  //border: 1px solid black;
}

.main-layout {
  display: grid;
  padding: 0 6.11vw; /* 88px от 1440px = 6.11%  */
  grid-template-columns: minmax(11vw, 161px) 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
      "app_title app_title"
      "app_sidebar app_body";
}

.app-title {
  grid-area: app_title;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 0 24px 0;
  //border: 1px solid black
}

.app-sidebar {
  grid-area: app_sidebar;
  display: flex;
  flex-direction: column;
  //margin-top: 25px; //border: 1px solid black
}

.app-body {
  grid-area: app_body;
  //margin-top: 25px; //border: 1px solid black
}
</style>
