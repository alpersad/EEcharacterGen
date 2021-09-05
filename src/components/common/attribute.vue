<template>
  <div
    class="grid w-64 grid-cols-5 grid-rows-2 border-4 border-gray-900 rounded-md bg-gradient-to-r from-gray-50 via-gray-200 to-gray-400"
  >
    <span
      class="flex items-center justify-center col-span-4 text-2xl font-semibold text-gray-600 uppercase"
      >{{ attribute.name }}
    </span>
    <img class="col-span-1 rounded-sm" :src="attribute.icon" alt="Icon" />
    <span
      class="flex items-center justify-center col-span-4 text-4xl font-bold text-gray-900"
    >
      {{ attribute.mod }}
    </span>
    <span
      class="flex items-center justify-center col-span-1 text-xl font-light"
    >
      {{ attribute.value }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    attribute: {
      type: Object,
      default() {
        return {
          name: "Strength",
          value: 4,
          mod: -3,
          icon: "fleshy-mass.svg"
        };
      }
    }
  }
};
</script>

<style></style>
