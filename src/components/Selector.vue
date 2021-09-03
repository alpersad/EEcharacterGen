<template>
  <div class="w-screen">
    Character Select
    <div class="flex justify-center ">
      <select
        class="border-2 border-gray-900 rounded-md p-3"
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
        class="border-2 border-blue-900 rounded-md bg-blue-700 text-blue-50 text p-2 hover:bg-blue-600 hover:text-blue-50"
      >
        Generate Character
      </button>
    </div>
  </div>
</template>

<script>
export default {
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
