<template>
  <div class="border-2 border-gray-400 w-56 bg-gray-100">
    <span class="block">Flesh</span>
    <span class="block">{{ flesh }}</span>
  </div>
</template>

<script>
export default {
  props: ["flesh"]
};
</script>
