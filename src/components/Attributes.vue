<template>
  <div
    class="grid justify-center bg-gray-800 bg-opacity-75 border-2 border-gray-400  p-4 w-max justify-self-center  h-full gap-2"
  >
    <section-title>
      Attributes
    </section-title>
    <Attribute v-for="attr in attributes" :key="attr.name" :attribute="attr" />
  </div>
</template>

<script>
import Attribute from "./common/attribute.vue";
import SectionTitle from "./common/section-title.vue";

export default {
  components: {
    Attribute,
    "section-title": SectionTitle
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
