<template>
  <div>
    <label for="eeclass"> Select class </label>
    <select v-model="selectedClass">
      <option
        v-on:click="emitClass"
        v-for="charClass in classList"
        :key="charClass"
        v-bind:value="charClass"
      >
        {{ charClass }}
      </option>
    </select>
  </div>
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
    return {
      classList: EEClass,
      selectedClass: "",
    };
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