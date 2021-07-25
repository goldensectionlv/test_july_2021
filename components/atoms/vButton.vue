<template>
  <div>
    <button class="my_btn">
      <text_item btn-text>
        <slot></slot>
      </text_item>
    </button>
  </div>
</template>

<script>
import text_item from "@/components/atoms/text_item";

export default {
  components: {text_item}

}
</script>

<style lang="scss" scoped>
.my_btn {
  width: 100%;
  margin-top: 24px;
  height: 50px;
  border-radius: 8px;
  background-color: #1F1F1F;
  border: none;
  cursor: pointer;
  color: white;
}

.my_btn:hover {
  background-color: #59606D;
}
</style>
