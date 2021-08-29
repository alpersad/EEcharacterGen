<template>
  <div class="flex flex-wrap gap-px">
    <Attribute v-for="attr in attributes" :key="attr.name" :attribute="attr" />
  </div>
</template>

<script>
import Attribute from "./common/attribute.vue";
export default {
  components: {
    Attribute
  },
  props: {
    attributes: {
      type: Array,
      default() {
        return [
          {
            name: "Strength",
            value: 0,
            mod: 0
          },
          {
            name: "Dexterity",
            value: 0,
            mod: 0
          },
          {
            name: "Constitution",
            value: 0,
            mod: 0
          },
          {
            name: "Intelligence",
            value: 0,
            mod: 0
          },
          {
            name: "Wisdom",
            value: 0,
            mod: 0
          },
          {
            name: "Charisma",
            value: 0,
            mod: 0
          }
        ];
      }
    }
  }
};
</script>

<style></style>
