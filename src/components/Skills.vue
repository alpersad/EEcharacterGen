<template>
  <div>
    <b>SKILLS</b>
    <p v-for="(value, key) in skills" :key="key">
      {{ key }}: {{ value }} in 6
      <button v-if="criminal" v-on:click="$emit('reduceskill', key)">-</button>
      <button v-if="criminal" v-on:click="$emit('increaseskill', key)">
        +
      </button>
    </p>
  </div>
</template>

<script>
export default {
  name: "Skills",
  props: ["skills", "selectedClass"],
  data() {
    return {
      criminal: false,
    };
  },
  updated: function () {
    if (this.selectedClass == "CRIMINAL") {
      this.criminal = true;
    } else {
      this.criminal = false;
    }
  },
};
</script>

<style scoped>
</style>