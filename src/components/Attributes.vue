<template>
  <div>
    <div
      class="seperate"
      v-for="(attrIndex, attrKey) in attributeList"
      :key="attrKey"
    >
      <p>
        <button v-on:click="$emit('decreaseattr', attrIndex)">-</button>
        {{ attrKey }}
        <button v-on:click="$emit('increaseattr', attrIndex)">+</button>
      </p>
      <span class="roboto">
        {{ attributes.value[attrIndex] }}
        |
        {{ attributes.modifiers[attrIndex] }}
      </span>
    </div>
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
  props: ["attributes"],
  data: function () {
    return {
      attributeList: Attribute,
    };
  },
  methods: {},
};
</script>

<style scoped>
.seperate {
  border-style: solid;
}
</style>