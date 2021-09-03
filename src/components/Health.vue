<template>
  <div class="w-screen">
    Health
    <div
      class="flex flex-wrap gap-x-3 gap-y-3 justify-center sm:justify-start sm:ml-5"
    >
      <Flesh :flesh="health.flesh" />
      <Grit :grit="health.grit" />
    </div>
  </div>
</template>

<script>
import Flesh from "./common/flesh.vue";
import Grit from "./common/grit.vue";

export default {
  components: {
    Flesh,
    Grit
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
