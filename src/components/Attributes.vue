<template>
  <div>
    <p>Attributes: {{ attributes }}</p>
    <p>Modifiers: {{ modifiers }}</p>
    <button v-on:click="$emit('doppelganger')">Doppelganger</button>
  </div>
</template>

<script>
export const Attribute = {
  STRENGTH: 0,
  DEXTERITY: 1,
  CONSTITUTION: 2,
  INTELLIGENCE: 3,
  WISDOM: 4,
  CHARISMA: 5,
};

export default {
  name: "Attributes",
  props: ["attributes", "modifiers"],
  data: function () {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
</style>