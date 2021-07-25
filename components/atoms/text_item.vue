<template>
  <span
    :class="{
    'appLogo': appLogo,
    'headerText': headerText,
    'regularText': regularText,
    'greyText': greyText,
    'smallText': smallText,
    'smallTextInactive': smallTextInactive,
    'productName': productName,
    'productPrice': productPrice,
    'basketEmptyText': basketEmptyText,
    'btnText': btnText
    }"
    :style="{
    margin: margin
    }"
  >
    <slot/>
  </span>
</template>

<script>
export default {
  props: {
    appLogo: {
      type: Boolean,
      default: false
    },
    headerText: {
      type: Boolean,
      default: false
    },
    regularText: {
      type: Boolean,
      default: false
    },
    greyText: {
      type: Boolean,
      default: false
    },
    smallText: {
      type: Boolean,
      default: false
    },
    smallTextInactive: {
      type: Boolean,
      default: false
    },
    productName: {
      type: Boolean,
      default: false
    },
    productPrice: {
      type: Boolean,
      default: false
    },
    basketEmptyText: {
      type: Boolean,
      default: false
    },
    btnText: {
      type: Boolean,
      default: false
    },
    margin: {
      type: String,
      default: '0'
    }
  }
}
</script>

<style lang="scss" scoped>
.appLogo {
  font-weight: bold;
  font-size: 22px;
  line-height: 28px;
  color: #59606D;
}

.headerText {
  font-weight: bold;
  font-size: 32px;
  line-height: 41px;
  color: #1F1F1F;
}

.regularText {
  font-size: 16px;
  line-height: 21px;
  color: #1F1F1F;
}

.greyText {
  font-size: 16px;
  line-height: 21px;
  color: #59606D;
}

.smallText {
  font-size: 14px;
  line-height: 18px;
  color: #1F1F1F;
}

.smallTextInactive {
  font-size: 14px;
  line-height: 18px;
  color: #959DAD;
}

.productName {
  font-size: 14px;
  line-height: 18px;
  color: #59606D;
}

.productPrice {
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  color: #1F1F1F;
}

.basketEmptyText {
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 28px;
  color: #000000;
}

.btnText {
  font-size: 16px;
  line-height: 21px;
  text-align: center;
  color: #FFFFFF;
}
</style>
