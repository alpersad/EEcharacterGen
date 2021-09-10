<template>
  <div
    class="grid w-64 grid-cols-4 bg-black border-4 border-gray-100 rounded-md"
  >
    <div class="col-span-3 p-2">
      <div class="grid grid-rows-2">
        <div>
          <span
            class="flex justify-center text-2xl font-medium text-gray-400 uppercase"
            >{{ attribute.name }}
          </span>
        </div>
        <div class="grid grid-cols-2">
          <div class="flex justify-end col-span-1">
            <span class="text-2xl font-bold text-gray-100">
              {{ attribute.mod }}
            </span>
          </div>
          <div class="flex justify-end ">
            <span class="mt-1 text-xl font-light text-gray-400 mr-7">
              {{ attribute.value }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="col-span-1">
      <img class="col-span-1 p-2 mt-2" :src="attribute.icon" alt="Icon" />
    </div>
    <!-- <span
      class="flex items-center justify-center col-span-2 text-2xl font-medium text-gray-400 uppercase"
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
    </span> -->
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
