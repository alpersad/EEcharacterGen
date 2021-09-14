<template>
  <div
    class="flex justify-center w-screen p-1 pb-5 mx-2 bg-gray-800 bg-opacity-75 border-2 border-gray-400 sm:p-5 sm:m-5 sm:w-max sm:h-full"
  >
    <div class="grid max-w-max justify-items-center gap-y-3">
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
