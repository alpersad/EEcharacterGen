<template>
  <div
    class="grid grid-flow-row sm:grid-cols-4 grid-cols-1 gap-2 justify-center bg-gray-800 bg-opacity-75 border-2 border-gray-400 p-4  w-max justify-self-center h-full"
  >
    <section-title class="mb-5 col-span-full">Skills</section-title>
    <Skill v-for="skill in skills" :key="skill.name" :skill="skill" />
  </div>
</template>

<script>
import Skill from "./common/skill.vue";
import SectionTitle from "./common/section-title.vue";

export default {
  components: {
    Skill,
    "section-title": SectionTitle
  },
  props: {
    skills: {
      type: Array,
      default() {
        return [
          {
            name: "Athletics",
            value: 0
          },
          {
            name: "Charm",
            value: 0
          },
          {
            name: "Contacts",
            value: 0
          },
          {
            name: "Driving",
            value: 0
          },
          {
            name: "Forensics",
            value: 0
          },
          {
            name: "Medicine",
            value: 0
          },

          {
            name: "Perception",
            value: 0
          },
          {
            name: "Stealth",
            value: 0
          },
          {
            name: "Technology",
            value: 0
          },
          {
            name: "Translation",
            value: 0
          },
          {
            name: "Vandalism",
            value: 0
          }
        ];
      }
    }
  }
};
</script>

<style></style>
