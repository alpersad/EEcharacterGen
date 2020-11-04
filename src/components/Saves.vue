<template>
  <div>
    <b>SAVES VS</b>
    <p v-for="(value, key) in SavesVS" :key="key">
      {{ key }}: {{ saves[value] }}
    </p>
  </div>
</template>

<script>
export const SavingThrows = {
  STUNNING: 0,
  POISON: 1,
  HAZARDS: 2,
  MACHINES: 3,
  MAGIC: 4,
};

export const BaseSaves = {
  BODYGUARD: [10, 8, 13, 9, 12],
  CRIMINAL: [14, 16, 15, 14, 14],
  DOCTOR: [14, 11, 16, 12, 15],
  EXPLORER: [10, 8, 13, 9, 12],
  MERCENARY: [14, 12, 15, 13, 16],
  MYSTIC: [14, 11, 16, 12, 15],
  OCCULTIST: [13, 13, 16, 13, 14],
  SPOOK: [13, 12, 15, 13, 15],
};

export default {
  name: "Saves",
  props: ["saves"],
  data() {
    return {
      SavesVS: SavingThrows,
    };
  },
};
</script>

<style scoped>
</style>