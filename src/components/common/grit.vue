<template>
  <div
    class="grid w-64 grid-cols-5 border-4 border-gray-900 rounded-md bg-gradient-to-r from-gray-50 via-gray-200 to-gray-400"
  >
    <div class="grid col-span-4 grid-rows-2">
      <span
        class="flex items-center justify-center text-2xl font-semibold text-gray-600 uppercase"
        >Grit
      </span>
      <span
        class="flex items-center justify-center col-span-1 text-4xl font-bold text-gray-900"
        >{{ grit }}
      </span>
    </div>

    <img class="rounded-sm " src="../icons/chest-armor.svg" alt="Icon" />
  </div>
</template>

<script>
export default {
  props: ["grit"]
};
</script>
