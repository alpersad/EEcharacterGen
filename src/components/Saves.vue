<template>
  <div>
    <p>{{ saves }}</p>
  </div>
</template>

<script>
import { Attribute } from "./Attributes.vue";

const savingThrows = {
  STUNNING: 0,
  POISON: 1,
  HAZARDS: 2,
  MACHINES: 3,
  MAGIC: 4,
};

export default {
  name: "Saves",
  props: ["modifier", "chosenclass"],
  data() {
    return {
      saves: [0, 0, 0, 0, 0],
      baseSaveBodyguard: [10, 8, 13, 9, 12],
      baseSaveCriminal: [14, 16, 15, 14, 14],
      baseSaveDoctor: [14, 11, 16, 12, 15],
      baseSaveExplorer: [10, 8, 13, 9, 12],
      baseSaveMercenary: [14, 12, 15, 13, 16],
      baseSaveMystic: [14, 11, 16, 12, 15],
      baseSaveOccultist: [13, 13, 16, 13, 14],
      baseSaveSpook: [13, 12, 15, 13, 15],
    };
  },
  methods: {
    selectBaseSave: function () {
      switch (this.chosenclass) {
        case "BODYGUARD":
          this.saves = this.baseSaveBodyguard;
          break;
        case "CRIMINAL":
          this.saves = this.baseSaveCriminal;
          break;
        case "DOCTOR":
          this.saves = this.baseSaveDoctor;
          break;
        case "EXPLORER":
          this.saves = this.baseSaveExplorer;
          break;
        case "MERCENARY":
          this.saves = this.baseSaveMercenary;
          break;
        case "OCCULTIST":
          this.saves = this.baseSaveOccultist;
          break;
        case "MYSTIC":
          this.saves = this.baseSaveMystic;
          break;
        case "SPOOK":
          this.saves = this.baseSaveSpook;
          break;
        default:
          this.saves = [];
      }
      this.saves[savingThrows.STUNNING] += this.modifier[
        Attribute.CONSTITUTION
      ];
      this.saves[this.savingThrows.POISON] += this.modifier[
        Attribute.CONSTITUTION
      ];
      this.saves[this.savingThrows.HAZARDS] += this.modifier[
        Attribute.DEXTERITY
      ];
      this.saves[this.savingThrows.MACHINES] += this.modifier[
        Attribute.INTELLIGENCE
      ];
      this.saves[this.savingThrows.MAGIC] += this.modifier[Attribute.WISDOM];
      this.$emit("updatesaves", this.saves);
    },
  },
  updated: function () {
    this.selectBaseSave();
  },
};
</script>

<style scoped>
</style>