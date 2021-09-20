<template>
  <div
    class="grid justify-center bg-gray-800 bg-opacity-75 border-2 border-gray-400 gap-y-1 p-4 w-max h-full justify-self-center"
  >
    <section-title>Character Select</section-title>
    <select
      class="p-3 bg-gray-100 border-2 border-gray-900 rounded-md w-max justify-self-center"
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
    <button
      v-on:click="emit()"
      class="p-2 bg-blue-700 border-2 border-blue-400 rounded-md justify-self-center text-blue-50 text hover:bg-blue-500 hover:text-blue-50 w-max"
    >
      Generate
    </button>
    <button
      v-on:click="$emit('doppelganger')"
      class="p-2 bg-blue-700 border-2 border-blue-400 rounded-md text-blue-50 text hover:bg-blue-500 hover:text-blue-50 w-max justify-self-center"
    >
      Doppelganger
    </button>
    <button
      v-on:click="$emit('download')"
      class="p-2 bg-blue-700 border-2 border-blue-400 rounded-md text-blue-50 text hover:bg-blue-500 hover:text-blue-50 w-max justify-self-center"
    >
      Download
    </button>
  </div>
</template>

<script>
import SectionTitle from "./common/section-title.vue";

export default {
  components: {
    "section-title": SectionTitle
  },
  emits: ["character-gen", "doppelganger", "download"],
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
