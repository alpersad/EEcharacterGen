<template>
  <div
    class="flex flex-wrap justify-center w-screen p-1 pb-5 mx-2 bg-gray-800 bg-opacity-75 border-2 border-gray-400 sm:p-5 sm:m-5 sm:w-max sm:h-full"
  >
    <div class="grid max-w-max justify-items-center gap-y-3">
      <section-title>Saves</section-title>
      <Save v-for="save in saves" :key="save.name" :save="save" />
    </div>
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
