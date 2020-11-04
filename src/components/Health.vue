<template>
  <div>
    <p>Flesh: {{ flesh }}</p>
    <p>Grit: {{ grit }}</p>
  </div>
</template>

<script>
export default {
  name: "Health",
  props: ["flesh", "grit"],
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>