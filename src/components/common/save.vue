<template>
  <div class="border-2 border-gray-400 w-56 bg-gray-100">
    <span class="block">{{ save.name }}</span>
    <span class="block">{{ save.value }}+</span>
  </div>
</template>

<script>
export default {
  props: {
    save: {
      type: Object,
      default() {
        return {
          name: "Skill",
          value: 0
        };
      }
    }
  }
};
</script>

<style></style>
