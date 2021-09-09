<template>
  <div class="w-screen">
    <section-title>Character Select</section-title>
    <div class="flex justify-center ">
      <select
        class="p-3 border-2 border-gray-900 rounded-md"
        name="character"
        id="character"
        v-model="character"
      >
        <option :value="null" disabled>Select Character Class</option>
        <option
          v-for="character in characters"
          :key="character"
          :value="character"
          >{{ character }}</option
        >
      </select>
    </div>
    <div class="flex justify-center mt-5">
      <button
        v-on:click="emit()"
        class="p-2 bg-blue-700 border-2 border-blue-900 rounded-md text-blue-50 text hover:bg-blue-600 hover:text-blue-50"
      >
        Generate Character
      </button>
    </div>
  </div>
</template>

<script>
import SectionTitle from "./common/section-title.vue";

export default {
  components: {
    "section-title": SectionTitle
  },
  emits: ["character-gen"],
  data() {
    return {
      character: null,
      characters: [
        "Bodyguard",
        "Criminal",
        "Doctor",
        "Explorer",
        "Mercenary",
        "Mystic",
        "Occultist",
        "Spook"
      ]
    };
  },
  methods: {
    emit() {
      if (this.character == null) {
        return;
      }
      this.$emit("character-gen", this.character);
    }
  }
};
</script>

<style></style>
