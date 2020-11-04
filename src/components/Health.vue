<template>
  <div>
    <p>{{ flesh }}</p>
    <p>{{ grit }}</p>
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