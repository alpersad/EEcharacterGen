<template>
  <div class="border-4 border-gray-900 w-56 bg-purple-200">
    <span class="block">{{ attribute.name }}</span>
    <span class="block">{{ attribute.value }} </span>
    <span class="block">{{ attribute.mod }} </span>
  </div>
</template>

<script>
export default {
  props: {
    attribute: {
      type: Object,
      default() {
        return {
          name: "Strength",
          value: 4,
          mod: -3
        };
      }
    }
  }
};
</script>

<style></style>
