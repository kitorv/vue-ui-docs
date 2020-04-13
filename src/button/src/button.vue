<template>
  <button v-bind="$attrs" class="v-button" type="button" @click="handleClick">
    <span class="v-buttov--text">
      <slot>{{ text }}</slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "VButton",
  props: {
    text: String
  },
  methods: {
    handleClick(event) {
      this.$emit("click", event);
    }
  }
};
</script>

<style lang="scss">
.v-button {
  position: relative;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  background-image: none;
  border: 1px solid #41a259;
  background-color: #41a259;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
  transition: all 0.3s;
  user-select: none;
  height: 32px;
  min-width: 88px;
  padding: 0 16px;
  font-size: 14px;
  border-radius: 4px;
  color: #ffffff;
  outline: 0;
  font-family: inherit;
  cursor: pointer;

  &:active,
  &:focus {
    outline: 0;
  }
}
</style>
