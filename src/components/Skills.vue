<template>
  <div
    class="flex flex-wrap justify-center w-screen p-1 pb-5 mx-2 bg-gray-800 bg-opacity-75 border-2 border-gray-400 sm:p-5 sm:mx-5 sm:max-w-screen-xl sm:h-full"
  >
    <section-title class="mb-5">Skills</section-title>

    <div class="flex flex-row flex-wrap justify-center gap-x-3 gap-y-3">
      <Skill v-for="skill in skills" :key="skill.name" :skill="skill" />
    </div>
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
