<template>
  <div class="flex h-16 bg-black border-2 border-gray-400 w-72">
    <img class="w-10 p-2" :src="skill.icon" alt="Icon" />
    <div class="flex justify-between my-4 ml-2 w-72">
      <span class="text-xl text-gray-100 uppercase">{{ skill.name }} </span>
      <div class="flex justify-end pb-1 ml-4 mr-2">
        <span class="mr-1 text-xl text-gray-100"> {{ skill.value }} in 6 </span>
      </div>
    </div>
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
