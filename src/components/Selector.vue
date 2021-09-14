<template>
  <div
    class="flex justify-center bg-gray-800 bg-opacity-75 border-2 border-gray-400 sm:p-5 sm:m-5 sm:w-max sm:h-full "
  >
    <div class="grid my-3 max-w-max justify-items-center gap-y-3">
      <section-title>Character Select</section-title>
      <select
        class="p-3 bg-gray-100 border-2 border-gray-900 rounded-md"
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
      <div>
        <button
          v-on:click="emit()"
          class="p-2 mr-2 bg-blue-900 border-2 border-blue-500 rounded-md text-blue-50 text hover:bg-blue-800 hover:text-blue-50"
        >
          Generate
        </button>
        <button
          v-on:click="$emit('doppelganger')"
          class="p-2 bg-blue-900 border-2 border-blue-500 rounded-md text-blue-50 text hover:bg-blue-800 hover:text-blue-50"
        >
          Doppelganger
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from "./common/section-title.vue";

export default {
  components: {
    "section-title": SectionTitle
  },
  emits: ["character-gen", "doppelganger"],
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
