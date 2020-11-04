<template>
  <div>
    <input v-model="name" placeholder="Enter Character Name" />
    <label for="eeclass"> Select class </label>
    <select v-model="selectedClass">
      <option
        v-for="characterClass in classList"
        :key="characterClass"
        v-bind:value="characterClass"
      >
        {{ characterClass }}
      </option>
    </select>
    <p>Class: {{ selectedClass }}</p>
    <button v-on:click="generateCharacter">Generate Character</button>
    <Attributes
      v-bind:attributes="attributes"
      v-bind:modifiers="modifiers"
      v-on:doppelganger="doppelganger"
    />
    <Health
      v-bind:flesh="flesh"
      v-bind:grit="grit"
      v-bind:armourClass="armourClass"
      v-bind:resourceLevel="resourceLevel"
    />
    <Saves v-bind:saves="saves" />
    <Skills
      v-bind:skills="skills"
      v-bind:selectedClass="selectedClass"
      v-on:reduceskill="reduceSkill"
      v-on:increaseskill="increaseSkill"
    />
  </div>
</template>

<script>
import Attributes from "./Attributes.vue";
import Health from "./Health.vue";
import Saves from "./Saves.vue";
import Skills from "./Skills.vue";

import { EEClass } from "./Class.vue";
import { Attribute } from "./Attributes.vue";
import { SavingThrows } from "./Saves.vue";
import { BaseSaves } from "./Saves.vue";

export default {
  name: "Character",
  components: {
    Attributes,
    Health,
    Saves,
    Skills,
  },
  data: function () {
    return {
      name: "",
      level: 1,
      attributes: [],
      baseFlesh: 0,
      flesh: 0,
      baseGrit: 0,
      grit: 0,
      skills: {
        ATHLETICS: 1,
        VANDALISM: 1,
        DRIVING: 1,
        STEALTH: 1,
        MEDICINE: 1,
        TECHNOLOGY: 1,
        TRANSLATION: 1,
        FORENSICS: 1,
        PERCEPTION: 1,
        CHARM: 1,
        CONTACTS: 1,
      },
      skillPoint: 6,
      equipmentMax: { base: 5, light: 0, rare: 2 },
      equipmentList: [],
      experience: 0,
      saves: [0, 0, 0, 0, 0],
      armourClass: 10,
      resourceLevel: 1,
      modifiers: [0, 0, 0, 0, 0, 0],
      spellList: [],
      abilityList: [],
      clicked: false,
      rerender: 0,
      classList: EEClass,
      selectedClass: "BODYGUARD",
    };
  },
  methods: {
    rollDice: function (dice) {
      return Math.floor(Math.random() * dice) + 1;
    },
    generateCharacter: function () {
      this.rollAttributes();
      this.rollHealth();
      this.assignSaves();
      this.assignSkills();
      this.assignArmourClass();
    },

    doppelganger: function () {
      for (let key in Attribute) {
        this.attributes[Attribute[key]] = 21 - this.attributes[Attribute[key]];
      }
      this.generateModifiers();
      this.updateDoppelgangerHealth();
      this.assignSaves();
      this.assignSkills();
      this.assignArmourClass();
    },

    /*-------------------------------------------------------------------
        Methods used to roll the Attribute values of the generated character
    ---------------------------------------------------------------------*/

    rollAttributes: function () {
      var attributeRoll;
      attributeRoll = this.esotericEnterprisesAttrRoll; // Sets the attribute roll to the chosen d&d system
      this.attributes.splice(0, this.attributes.length); // Removes all values from the attribute array
      for (let i = 0; i < Object.keys(Attribute).length; i++) {
        this.attributes.push(attributeRoll());
      }
      this.generateModifiers();
    },

    esotericEnterprisesAttrRoll: function () {
      return this.rollDice(6) + this.rollDice(6) + this.rollDice(6);
    },

    generateModifiers: function () {
      var stat;
      for (let key in Attribute) {
        stat = this.attributes[Attribute[key]];
        if (stat <= 3) {
          this.modifiers[Attribute[key]] = -3;
        } else if (stat <= 5) {
          this.modifiers[Attribute[key]] = -2;
        } else if (stat <= 8) {
          this.modifiers[Attribute[key]] = -1;
        } else if (stat <= 12) {
          this.modifiers[Attribute[key]] = -0;
        } else if (stat <= 15) {
          this.modifiers[Attribute[key]] = 1;
        } else if (stat <= 17) {
          this.modifiers[Attribute[key]] = 2;
        } else {
          this.modifiers[Attribute[key]] = 3;
        }
      }
      if (this.selectedClass == "BODYGUARD") {
        this.modifiers[Attribute.CONSTITUTION] += 1;
      }
      if (this.selectedClass == "EXPLORER") {
        this.modifiers[Attribute.DEXTERITY] += 1;
      }
    },

    /*-------------------------------------------------------------------
        Methods used to roll the Health values of the generated character
    ---------------------------------------------------------------------*/

    /*
      Calculates both the flesh and grit of the character
    */
    rollHealth: function () {
      var healthDice = 0;
      switch (this.selectedClass) {
        case "BODYGUARD":
          healthDice = 10;
          break;
        case "CRIMINAL":
          healthDice = 6;
          break;
        case "DOCTOR":
          healthDice = 6;
          break;
        case "EXPLORER":
          healthDice = 6;
          break;
        case "MERCENARY":
          healthDice = 8;
          break;
        case "OCCULTIST":
          healthDice = 4;
          break;
        case "MYSTIC":
          healthDice = 6;
          break;
        case "SPOOK":
          healthDice = 6;
          break;
        default:
          //should never enter here
          console.log("Rolling Health: Class selection error");
      }
      this.baseFlesh = this.rollDice(healthDice);
      this.flesh = this.baseFlesh + this.modifiers[Attribute.CONSTITUTION];
      this.baseGrit = this.rollDice(healthDice);
      this.grit = this.baseGrit + this.modifiers[Attribute.CONSTITUTION];

      this.flesh = this.flesh > 0 ? this.flesh : 1;
      this.grit = this.grit >= 0 ? this.grit : 0;
    },

    updateDoppelgangerHealth: function () {
      this.flesh = this.baseFlesh + this.modifiers[Attribute.CONSTITUTION];
      this.grit = this.baseGrit + this.modifiers[Attribute.CONSTITUTION];

      this.flesh = this.flesh > 0 ? this.flesh : 1;
      this.grit = this.grit >= 0 ? this.grit : 0;
    },

    /*-------------------------------------------------------------------
        Methods used to roll the Saves values of the generated character
    ---------------------------------------------------------------------*/

    assignSaves: function () {
      switch (this.selectedClass) {
        case "BODYGUARD":
          this.saves = Array.from(BaseSaves.BODYGUARD);
          break;
        case "CRIMINAL":
          this.saves = Array.from(BaseSaves.CRIMINAL);
          break;
        case "DOCTOR":
          this.saves = Array.from(BaseSaves.DOCTOR);
          break;
        case "EXPLORER":
          this.saves = Array.from(BaseSaves.EXPLORER);
          break;
        case "MERCENARY":
          this.saves = Array.from(BaseSaves.MERCENARY);
          break;
        case "OCCULTIST":
          this.saves = Array.from(BaseSaves.OCCULTIST);
          break;
        case "MYSTIC":
          this.saves = Array.from(BaseSaves.MYSTIC);
          break;
        case "SPOOK":
          this.saves = Array.from(BaseSaves.SPOOK);
          break;
        default:
          this.saves = this.saves.splice(0, this.saves.length);
      }
      this.saves[SavingThrows.STUNNING] += this.modifiers[
        Attribute.CONSTITUTION
      ];
      this.saves[SavingThrows.POISON] += this.modifiers[Attribute.CONSTITUTION];
      this.saves[SavingThrows.HAZARDS] += this.modifiers[Attribute.DEXTERITY];
      this.saves[SavingThrows.MACHINES] += this.modifiers[
        Attribute.INTELLIGENCE
      ];
      this.saves[SavingThrows.MAGIC] += this.modifiers[Attribute.WISDOM];
    },

    /*-----------------------------------------------------------------------
        Methods used to calculate the Skill values of the generated character
    -------------------------------------------------------------------------*/
    assignSkills: function () {
      // Update the skill chance based on selected class
      for (let key in this.skills) {
        this.skills[key] = 1;
      }
      switch (this.selectedClass) {
        case "BODYGUARD":
          this.skills["PERCEPTION"] = 3;
          break;
        case "EXPLORER":
          this.skills["STEALTH"] = 3;
          this.skills["ATHLETICS"] = 5;
          break;
        case "DOCTOR":
          this.skills["MEDICINE"] = 5;
          break;
        default:
        // no modifcation to skills required based on class chosen
      }
      this.skills["ATHLETICS"] += this.modifiers[Attribute.STRENGTH];
      this.skills["VANDALISM"] += this.modifiers[Attribute.STRENGTH];
      this.skills["DRIVING"] += this.modifiers[Attribute.DEXTERITY];
      this.skills["STEALTH"] += this.modifiers[Attribute.DEXTERITY];
      this.skills["MEDICINE"] += this.modifiers[Attribute.INTELLIGENCE];
      this.skills["TECHNOLOGY"] += this.modifiers[Attribute.INTELLIGENCE];
      this.skills["TRANSLATION"] += this.modifiers[Attribute.INTELLIGENCE];
      this.skills["FORENSICS"] += this.modifiers[Attribute.WISDOM];
      this.skills["PERCEPTION"] += this.modifiers[Attribute.WISDOM];
      this.skills["CHARM"] += this.modifiers[Attribute.CHARISMA];
      this.skills["CONTACTS"] += this.modifiers[Attribute.CHARISMA];

      for (let key in this.skills) {
        this.skills[key] = this.skills[key] < 0 ? 0 : this.skills[key];
      }

      for (let key in this.skills) {
        this.skills[key] = this.skills[key] > 6 ? 6 : this.skills[key];
      }
    },

    increaseSkill: function (type) {
      if (this.skills[type] < 6 && this.skillPoint > 0) {
        this.skills[type] += 1;
        this.skillPoint -= 1;
      }
    },

    reduceSkill: function (type) {
      if (this.skills[type] > 0 && this.skillPoint < 6) {
        this.skills[type] -= 1;
        this.skillPoint += 1;
      }
    },

    /*-----------------------------------------------------------------------------
        Methods used to calculate the Armour Class value of the generated character
    -------------------------------------------------------------------------------*/
    assignArmourClass: function () {
      this.armourClass = 10 + this.modifiers[Attribute.DEXTERITY];
    },
    /*------------------------------------------------------------------------------------
        Methods used to calculate the maximum equipment allowed of the generated character
    --------------------------------------------------------------------------------------*/
    assignEquipmentMax: function () {},
  },
};
</script>

<style scoped>
</style>