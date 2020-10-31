<template>
  <div></div>
</template>

<script>
import { Attribute } from "./Attributes.vue";

export default {
  name: "Health",
  props: ["modifier", "chosenclass"],
  data() {
    return {
      flesh: 0,
      grit: 0,
      previousClass: "",
      previousConstitution: 0,
    };
  },
  methods: {
    rollDice: function (dice) {
      return Math.floor(Math.random() * dice) + 1;
    },
    calculateFlesh: function () {
      var fleshRoll = 0;
      switch (this.chosenclass) {
        case "BODYGUARD":
          fleshRoll = 10;
          break;
        case "CRIMINAL":
          fleshRoll = 6;
          break;
        case "DOCTOR":
          fleshRoll = 6;
          break;
        case "EXPLORER":
          fleshRoll = 6;
          break;
        case "MERCENARY":
          fleshRoll = 8;
          break;
        case "OCCULTIST":
          fleshRoll = 4;
          break;
        case "MYSTIC":
          fleshRoll = 6;
          break;
        case "SPOOK":
          fleshRoll = 6;
          break;
        default:
          fleshRoll = 0;
      }
      this.flesh =
        this.rollDice(fleshRoll) + this.modifier[Attribute.CONSTITUTION];
      this.flesh = this.flesh > 0 ? this.flesh : 1;
    },

    calculateGrit: function () {
      var gritRoll = 0;
      switch (this.chosenclass) {
        case "BODYGUARD":
          gritRoll = 10;
          break;
        case "CRIMINAL":
          gritRoll = 6;
          break;
        case "DOCTOR":
          gritRoll = 6;
          break;
        case "EXPLORER":
          gritRoll = 6;
          break;
        case "MERCENARY":
          gritRoll = 8;
          break;
        case "OCCULTIST":
          gritRoll = 4;
          break;
        case "MYSTIC":
          gritRoll = 6;
          break;
        case "SPOOK":
          gritRoll = 6;
          break;
        default:
          gritRoll = 0;
      }
      this.grit =
        this.rollDice(gritRoll) + this.modifier[Attribute.CONSTITUTION];
      this.grit = this.grit >= 0 ? this.grit : 0;
      this.$emit("updatehealth", { flesh: this.flesh, grit: this.grit }); // Poor Placement. Dependent on updated fn ordering
    },
    modifyHealth: function () {
      console.log(
        this.modifier[Attribute.CONSTITUTION] + " " + this.previousConstitution
      );
      this.flesh =
        this.flesh -
        this.previousConstitution +
        this.modifier[Attribute.CONSTITUTION];
      this.grit =
        this.grit -
        this.previousConstitution +
        this.modifier[Attribute.CONSTITUTION];
      this.grit = this.grit >= 0 ? this.grit : 0;
      this.flesh = this.flesh > 0 ? this.flesh : 1;
      this.$emit("updatehealth", { flesh: this.flesh, grit: this.grit }); // Poor Placement. Dependent on updated fn ordering
    },
    updatePrevious: function () {
      console.log("updatePrevious");
      this.previousConstitution = this.modifier[Attribute.CONSTITUTION];
      this.previousClass = this.chosenclass;
    },
  },
  updated: function () {
    console.log(
      "Previous: " + this.previousClass + " " + "New: " + this.chosenclass
    );
    if (this.previousClass === this.chosenclass) {
      console.log("modify");
      if (this.chosenclass != "") {
        this.modifyHealth();
      }
    } else {
      console.log("new");
      this.calculateFlesh();
      this.calculateGrit();
    }
    this.updatePrevious();
  },
};
</script>

<style scoped>
</style>