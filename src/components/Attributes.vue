<template>
  <div>
    <button v-on:click="rollAttributes">Roll Normal</button>
    <div>{{ attributeValue }}</div>
    <button v-on:click="doppelganger">Roll Doppleganger</button>
    <div>{{ attributeModifier }}</div>
  </div>
</template>

<script>
export const Attribute = {
  STRENGTH: 0,
  DEXTERITY: 1,
  CONSTITUTION: 2,
  INTELLIGENCE: 3,
  WISDOM: 4,
  CHARISMA: 5,
};

export default {
  name: "Attributes",
  props: [],
  data: function () {
    return {
      attributeValue: [],
      attributeModifier: [],
    };
  },
  methods: {
    generateAttributes: function () {
      this.rollAttributes();
    },

    rollAttributes: function () {
      var diceRoll;
      diceRoll = this.esotericEnterprisesAttrRoll;
      this.count = diceRoll();
      this.attributeValue.splice(0, this.attributeValue.length);
      for (let i = 0; i < Object.keys(Attribute).length; i++) {
        this.attributeValue.push(diceRoll());
      }
      this.generateModifiers();
    },

    rollD6: function () {
      return Math.floor(Math.random() * 6) + 1;
    },

    esotericEnterprisesAttrRoll: function () {
      return this.rollD6() + this.rollD6() + this.rollD6();
    },

    doppelganger: function () {
      for (let key in Attribute) {
        this.attributeValue[Attribute[key]] =
          21 - this.attributeValue[Attribute[key]];
      }
      this.generateModifiers();
    },

    generateModifiers: function () {
      var stat;
      for (let key in Attribute) {
        stat = this.attributeValue[Attribute[key]];
        if (stat <= 3) {
          this.attributeModifier[Attribute[key]] = -3;
        } else if (stat <= 5) {
          this.attributeModifier[Attribute[key]] = -2;
        } else if (stat <= 8) {
          this.attributeModifier[Attribute[key]] = -1;
        } else if (stat <= 12) {
          this.attributeModifier[Attribute[key]] = -0;
        } else if (stat <= 15) {
          this.attributeModifier[Attribute[key]] = 1;
        } else if (stat <= 17) {
          this.attributeModifier[Attribute[key]] = 2;
        } else {
          this.attributeModifier[Attribute[key]] = 3;
        }
      }
      this.$emit("attrcompleted", {
        value: this.attributeValue,
        modifier: this.attributeModifier,
      });
    },
  },
  mounted: function () {
    this.generateAttributes();
  },
};
</script>

<style scoped>
</style>