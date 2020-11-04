<template>
  <div>
    <b>HEALTH</b>
    <p>Flesh: {{ flesh }}</p>
    <p>Grit: {{ grit }}</p>
    <p>Armour Class: {{ armourClass }}</p>
    <p>Resource Level: {{ resourceLevel }}</p>
  </div>
</template>

<script>
export default {
  name: "Health",
  props: ["flesh", "grit", "armourClass", "resourceLevel"],
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>