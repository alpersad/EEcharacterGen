<template>
  <div class="border-2 border-gray-400 w-56 bg-gray-100">
    <span class="block">Strength</span>
    <span class="block">18</span>
    <span class="block">+3</span>
  </div>
</template>

<script>
// import { Character } from "../js/character";
// import { Bodyguard } from "../js/eeclass/bodyguard";
import { Criminal } from "../js/eeclass/criminal";

export default {
  data() {
    return {
      data: null
    };
  },
  mounted() {
    let x = new Criminal("Mimi");
    console.log(x.toString());
    this.data = x;
  }
};
</script>

<style></style>
