<template>
  <div class="border-2 border-gray-400 w-56 bg-gray-100">
    <span class="block">{{ skill.name }}</span>
    <span class="block">{{ skill.value }} in 6</span>
  </div>
</template>

<script>
export default {
  props: {
    skill: {
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
