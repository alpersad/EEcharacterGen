<template>
  <div
    class="grid grid-cols-3 bg-black border-4 border-gray-100 rounded-md w-72 "
  >
    <div class="grid col-span-2 grid-rows-2 p-1">
      <span
        class="flex items-center justify-center text-2xl font-medium text-gray-400 uppercase"
        >{{ skill.name }}
      </span>
      <span
        class="flex items-center justify-center col-span-1 text-2xl font-bold text-gray-100"
        >{{ skill.value }} in 6
      </span>
    </div>

    <img class="p-2" :src="skill.icon" alt="Icon" />
  </div>
</template>

<script>
export default {
  props: {
    skill: {
      type: Object,
      default() {
        return {
          name: "Skill",
          value: 0,
          icon: require("../../assets/icons/fedora.svg")
        };
      }
    }
  }
};
</script>

<style></style>
