<template>
  <div class="flex h-16 bg-black border-2 border-gray-400 w-72">
    <img class="w-10 p-2" :src="attribute.icon" alt="Icon" />
    <div class="flex justify-between my-4 ml-2 w-60">
      <span class="text-xl text-gray-100 uppercase">{{ attribute.name }} </span>
      <div class="flex justify-end pb-1 ml-4 mr-2">
        <span class="mr-8 text-xl text-gray-100 uppercase">
          {{ attribute.mod }}
        </span>
        <span class="absolute pt-2 text-xs text-gray-100 uppercase">
          ({{ attribute.value }})
        </span>
      </div>
    </div>
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
