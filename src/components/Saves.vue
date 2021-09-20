<template>
  <div
    class="grid justify-center bg-gray-800 bg-opacity-75 border-2 border-gray-400  p-4 w-max justify-self-center h-full gap-2"
  >
    <section-title>Saves</section-title>
    <Save v-for="save in saves" :key="save.name" :save="save" />
  </div>
</template>

<script>
import Save from "./common/save.vue";
import SectionTitle from "./common/section-title.vue";

export default {
  components: {
    Save,
    "section-title": SectionTitle
  },
  props: {
    saves: {
      type: Array,
      default() {
        return [
          {
            name: "Stunning",
            value: 0
          },
          {
            name: "Poison",
            value: 0
          },
          {
            name: "Hazards",
            value: 0
          },
          {
            name: "Machines",
            value: 0
          },
          {
            name: "Wisdom",
            value: 0
          },
          {
            name: "Magic",
            value: 0
          }
        ];
      }
    }
  }
};
</script>

<style></style>
