<template>
  <div
    class="grid grid-cols-5 border-4 border-gray-900 rounded-md w-72 bg-gradient-to-r from-gray-50 via-gray-200 to-gray-400"
  >
    <div class="grid col-span-4 grid-rows-2">
      <span
        class="flex items-center justify-center text-2xl font-semibold text-gray-600 uppercase"
        >{{ save.name }}
      </span>
      <span
        class="flex items-center justify-center col-span-1 text-4xl font-bold text-gray-900"
        >{{ save.value }}+
      </span>
    </div>

    <img class="rounded-sm " :src="save.icon" alt="Icon" />
  </div>
</template>

<script>
export default {
  props: {
    save: {
      type: Object,
      default() {
        return {
          name: "Skill",
          value: 0,
          icon: require("../icons/fedora.svg")
        };
      }
    }
  }
};
</script>

<style></style>
