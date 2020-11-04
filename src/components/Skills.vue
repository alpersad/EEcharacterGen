<template>
  <div>
    <b>SKILLS</b>
    <p v-for="(value, key) in skills" :key="key">{{ key }}: {{ value }} in 6</p>
  </div>
</template>

<script>
export default {
  name: "Skills",
  props: ["skills"],
};
</script>

<style scoped>
</style>