<template>
  <div>
    <b>HEALTH</b>
    <div class="border">
      <p>FLESH</p>
      <span class="roboto"> {{ flesh }}</span>
    </div>
    <div class="border">
      <p>GRIT</p>
      <span class="roboto"> {{ grit }}</span>
    </div>
    <div class="border">
      <p>ARMOUR CLASS</p>
      <span class="roboto"> {{ armourClass }}</span>
    </div>
    <div class="border">
      <p>RESOURCE LEVEL</p>
      <span class="roboto"> {{ resourceLevel }}</span>
    </div>
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
.border {
  border-style: solid;
}
</style>