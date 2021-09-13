<template>
  <div
    class="flex flex-wrap justify-center w-screen p-1 pb-5 mx-2 bg-gray-800 bg-opacity-50 border-2 border-gray-400 sm:p-5 sm:m-5 sm:w-max sm:h-full"
  >
    <div class="grid max-w-max justify-items-center gap-y-3">
      <section-title>Skills</section-title>
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
