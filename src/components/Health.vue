<template>
  <div class="flex flex-wrap gap-px">
    <Flesh :flesh="health.flesh" />
    <Grit :grit="health.grit" />
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
