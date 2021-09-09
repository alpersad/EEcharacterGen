<template>
  <div class="w-screen">
    <section-title>Saves</section-title>
    <div
      class="flex flex-wrap justify-center gap-x-3 gap-y-3 sm:justify-start sm:ml-5"
    >
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
