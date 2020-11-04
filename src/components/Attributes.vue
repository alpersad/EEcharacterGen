<template>
  <div>
    <p v-for="(value, key) in attributeList" :key="key">
      {{ key }}: {{ attributes[value] }}
    </p>
    <p v-for="(value, key) in attributeList" :key="key">
      {{ key }} Modifiers: {{ modifiers[value] }}
    </p>
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
    return {
      attributeList: Attribute,
    };
  },
  methods: {},
};
</script>

<style scoped>
</style>