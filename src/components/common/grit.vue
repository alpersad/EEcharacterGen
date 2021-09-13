<template>
  <div class="flex h-16 bg-black border-2 border-gray-400 w-72">
    <img class="w-10 p-2" src="../../assets/icons/chest-armor.svg" alt="Icon" />
    <div class="flex justify-between my-4 ml-2 w-60">
      <span class="text-xl text-gray-100 uppercase"> Grit </span>
      <div class="flex justify-end pb-1 ml-4 mr-2">
        <span class="mr-8 text-xl text-gray-100 uppercase">
          {{ grit }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["grit"]
};
</script>
