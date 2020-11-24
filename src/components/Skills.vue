<template>
  <div>
    <b>SKILLS</b>
    <div class="border" v-for="(value, key) in skills" :key="key">
      <p>
        <button v-on:click="$emit('reduceskill', key)">-</button>{{ key
        }}<button v-on:click="$emit('increaseskill', key)">+</button>
      </p>
      <span class="roboto">{{ value }} in 6 </span>
    </div>
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
.border {
  border-style: solid;
}
</style>