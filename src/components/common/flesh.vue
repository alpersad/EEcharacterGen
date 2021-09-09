<template>
  <div
    class="grid w-64 grid-cols-5 border-4 border-gray-900 rounded-md bg-gradient-to-r from-gray-50 via-gray-200 to-gray-400"
  >
    <div class="grid col-span-4 grid-rows-2">
      <span
        class="flex items-center justify-center text-2xl font-semibold text-gray-600 uppercase"
        >Flesh
      </span>
      <span
        class="flex items-center justify-center text-4xl font-bold text-gray-900"
        >{{ flesh }}
      </span>
    </div>

    <img
      class="rounded-sm "
      src="../../assets/icons/fleshy-mass.svg"
      alt="Icon"
    />
  </div>
</template>

<script>
export default {
  props: ["flesh"]
};
</script>
