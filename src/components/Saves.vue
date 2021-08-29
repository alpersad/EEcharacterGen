<template>
  <div class="flex flex-wrap gap-px">
    <Save v-for="save in saves" :key="save.name" :save="save" />
  </div>
</template>

<script>
import Save from "./common/save.vue";

export default {
  components: {
    Save
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
