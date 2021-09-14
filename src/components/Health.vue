<template>
  <div
    class="flex justify-center bg-gray-800 bg-opacity-75 border-2 border-gray-400 sm:p-5 sm:m-5 sm:w-max sm:max-h-full"
  >
    <div class="grid my-3 max-w-max justify-items-center gap-y-3">
      <section-title>Health</section-title>
      <Flesh :flesh="health.flesh" />
      <Grit :grit="health.grit" />
    </div>
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
