<template>
  <div
    class="grid justify-center bg-gray-800 bg-opacity-75 border-2 border-gray-400 p-4 w-max justify-self-center h-full gap-2"
  >
    <section-title>Health</section-title>
    <Flesh :flesh="health.flesh" />
    <Grit :grit="health.grit" />
  </div>
</template>

<script>
import Flesh from "./common/flesh.vue";
import Grit from "./common/grit.vue";
import SectionTitle from "./common/section-title.vue";

export default {
  components: {
    Flesh,
    Grit,
    "section-title": SectionTitle
  },
  props: {
    health: {
      type: Object,
      default() {
        return {
          flesh: 0,
          grit: 0
        };
      }
    }
  }
};
</script>
