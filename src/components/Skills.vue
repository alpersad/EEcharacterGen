<template>
  <div class="w-screen">
    Skills
    <div
      class="flex flex-wrap gap-x-3 gap-y-3 justify-center sm:justify-start sm:ml-5"
    >
      <Skill v-for="skill in skills" :key="skill.name" :skill="skill" />
    </div>
  </div>
</template>

<script>
import Skill from "./common/skill.vue";

export default {
  components: {
    Skill
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
