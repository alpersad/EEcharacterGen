<template>
  <div
    class="flex flex-wrap justify-center w-screen p-5 m-5 bg-gray-800 bg-opacity-50 border-2 border-gray-400 sm:w-max"
  >
    <div class="grid max-w-max justify-items-center gap-y-3 gap-x-3">
      <section-title>
        Attributes
      </section-title>
      <div class="grid grid-cols-1 gap-y-3">
        <Attribute
          v-for="attr in attributes"
          :key="attr.name"
          :attribute="attr"
        />
      </div>
    </div>
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
