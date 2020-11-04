<template>
  <div></div>
</template>

<script>
export const EEClass = [
  "BODYGUARD",
  "CRIMINAL",
  "DOCTOR",
  "EXPLORER",
  "MERCENARY",
  "OCCULTIST",
  "MYSTIC",
  "SPOOK",
];

export default {
  name: "Class",
  data: function () {
    return {};
  },
  methods: {
    emitClass: function () {
      this.$emit("emitclass", this.selectedClass);
    },
  },
};
</script>

<style scoped>
</style>