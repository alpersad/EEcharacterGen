<template>
  <div class="w-screen">
    <section-title>Health</section-title>
    <div
      class="flex flex-wrap justify-center gap-x-3 gap-y-3 sm:justify-start sm:ml-5"
    >
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
