<template>
  <div
    class="grid w-64 h-24 grid-cols-3 bg-black border-4 border-gray-100 rounded-md"
  >
    <div class="grid col-span-2 grid-rows-2 p-1">
      <span
        class="flex items-center justify-center text-2xl font-medium text-gray-400 uppercase"
        >Flesh
      </span>
      <span
        class="flex items-center justify-center text-2xl font-bold text-gray-100"
        >{{ flesh }}
      </span>
    </div>

    <img class="p-2" src="../../assets/icons/fleshy-mass.svg" alt="Icon" />
  </div>
</template>

<script>
export default {
  props: ["flesh"]
};
</script>
