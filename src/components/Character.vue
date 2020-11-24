<template>
  <div>
    <div class="columns">
      <div class="column">
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
      </div>
      <div class="column">
        <Attributes
          v-bind:attributes="attributes"
          v-on:doppelganger="doppelganger"
          v-on:increaseattr="increaseAttribute"
          v-on:decreaseattr="decreaseAttribute"
        />
      </div>
      <div class="column">
        <Health
          v-bind:flesh="flesh"
          v-bind:grit="grit"
          v-bind:armourClass="armourClass"
          v-bind:resourceLevel="resourceLevel"
        />
      </div>
      <div class="column">
        <Saves
          v-bind:saves="saves"
          v-on:increasesave="increaseSave"
          v-on:decreasesave="decreaseSave"
        />
      </div>
      <div class="column">
        <Skills
          v-bind:skills="skills"
          v-bind:selectedClass="selectedClass"
          v-on:reduceskill="reduceSkill"
          v-on:increaseskill="increaseSkill"
        />
      </div>
    </div>
  </div>
</template>

<script>
// JSON
/*
import adventure_gear from "../assets/items/adventure_gear.json";
import armour from "../assets/items/armour.json";
import esoteric_equipment from "../assets/items/esoteric_equipment.json";
import grimoires from "../assets/items/grimoires.json";
import melee_weapons from "../assets/items/melee_weapons.json";
import ranged_weapons from "../assets/items/ranged_weapons.json";
import social_advantages from "../assets/items/social_advantages.json";
import spells from "../assets/items/spells.json";
import vehicles from "../assets/items/vehicles.json";
*/

// Component
import Attributes from "./Attributes.vue";
import Health from "./Health.vue";
import Saves from "./Saves.vue";
import Skills from "./Skills.vue";

// External Objects
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
      jsontest: null,
      name: "",
      level: 1,
      attributes: { value: [0, 0, 0, 0, 0, 0], modifiers: [0, 0, 0, 0, 0, 0] },
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
      equipmentMax: { base: 5, light: 0, rare: 2 },
      equipmentList: [],
      experience: 0,
      saves: [0, 0, 0, 0, 0],
      armourClass: 10,
      resourceLevel: 1,
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

    /*---------------------------------------------------------------------------
        Methods used to calculate the Attribute values of the generated character
    -----------------------------------------------------------------------------*/

    rollAttributes: function () {
      var attributeRoll;
      attributeRoll = this.esotericEnterprisesAttrRoll; // Sets the attribute roll to the chosen d&d system
      this.attributes.value.splice(0, this.attributes.value.length); // Removes all values from the attribute array
      for (let i = 0; i < Object.keys(Attribute).length; i++) {
        this.attributes.value.push(attributeRoll());
      }
      this.generateModifiers();
    },

    esotericEnterprisesAttrRoll: function () {
      return this.rollDice(6) + this.rollDice(6) + this.rollDice(6);
    },

    generateModifiers: function () {
      var stat;
      for (let key in Attribute) {
        stat = this.attributes.value[Attribute[key]];
        if (stat <= 3) {
          this.attributes.modifiers[Attribute[key]] = -3;
        } else if (stat <= 5) {
          this.attributes.modifiers[Attribute[key]] = -2;
        } else if (stat <= 8) {
          this.attributes.modifiers[Attribute[key]] = -1;
        } else if (stat <= 12) {
          this.attributes.modifiers[Attribute[key]] = -0;
        } else if (stat <= 15) {
          this.attributes.modifiers[Attribute[key]] = 1;
        } else if (stat <= 17) {
          this.attributes.modifiers[Attribute[key]] = 2;
        } else {
          this.attributes.modifiers[Attribute[key]] = 3;
        }
      }
      if (this.selectedClass == "BODYGUARD") {
        this.attributes.modifiers[Attribute.CONSTITUTION] += 1;
      }
      if (this.selectedClass == "EXPLORER") {
        this.attributes.modifiers[Attribute.DEXTERITY] += 1;
      }
    },

    updateAttributes: function () {
      this.generateModifiers();
      this.updateHealth();
      this.assignSaves();
      this.assignSkills();
      this.assignArmourClass();
    },

    doppelganger: function () {
      for (let key in Attribute) {
        this.attributes.value[Attribute[key]] =
          21 - this.attributes.value[Attribute[key]];
      }
      this.updateAttributes();
    },

    increaseAttribute: function (type) {
      this.attributes.value[type] += 1;
      this.updateAttributes();
    },

    decreaseAttribute: function (type) {
      this.attributes.value[type] -= 1;
      this.updateAttributes();
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
      this.flesh =
        this.baseFlesh + this.attributes.modifiers[Attribute.CONSTITUTION];
      this.baseGrit = this.rollDice(healthDice);
      this.grit =
        this.baseGrit + this.attributes.modifiers[Attribute.CONSTITUTION];

      this.flesh = this.flesh > 0 ? this.flesh : 1;
      this.grit = this.grit >= 0 ? this.grit : 0;
    },

    updateHealth: function () {
      this.flesh =
        this.baseFlesh + this.attributes.modifiers[Attribute.CONSTITUTION];
      this.grit =
        this.baseGrit + this.attributes.modifiers[Attribute.CONSTITUTION];

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
      this.saves[SavingThrows.STUNNING] -= this.attributes.modifiers[
        Attribute.CONSTITUTION
      ];
      this.saves[SavingThrows.POISON] -= this.attributes.modifiers[
        Attribute.CONSTITUTION
      ];
      this.saves[SavingThrows.HAZARDS] -= this.attributes.modifiers[
        Attribute.DEXTERITY
      ];
      this.saves[SavingThrows.MACHINES] -= this.attributes.modifiers[
        Attribute.INTELLIGENCE
      ];
      this.saves[SavingThrows.MAGIC] -= this.attributes.modifiers[
        Attribute.WISDOM
      ];
    },

    increaseSave: function (type) {
      this.saves[SavingThrows[type]] += 1;
    },

    decreaseSave: function (type) {
      this.saves[SavingThrows[type]] -= 1;
      if (this.saves[SavingThrows[type]] < 0) {
        this.saves[SavingThrows[type]] = 0;
      }
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
      this.skills["ATHLETICS"] += this.attributes.modifiers[Attribute.STRENGTH];
      this.skills["VANDALISM"] += this.attributes.modifiers[Attribute.STRENGTH];
      this.skills["DRIVING"] += this.attributes.modifiers[Attribute.DEXTERITY];
      this.skills["STEALTH"] += this.attributes.modifiers[Attribute.DEXTERITY];
      this.skills["MEDICINE"] += this.attributes.modifiers[
        Attribute.INTELLIGENCE
      ];
      this.skills["TECHNOLOGY"] += this.attributes.modifiers[
        Attribute.INTELLIGENCE
      ];
      this.skills["TRANSLATION"] += this.attributes.modifiers[
        Attribute.INTELLIGENCE
      ];
      this.skills["FORENSICS"] += this.attributes.modifiers[Attribute.WISDOM];
      this.skills["PERCEPTION"] += this.attributes.modifiers[Attribute.WISDOM];
      this.skills["CHARM"] += this.attributes.modifiers[Attribute.CHARISMA];
      this.skills["CONTACTS"] += this.attributes.modifiers[Attribute.CHARISMA];

      for (let key in this.skills) {
        this.skills[key] = this.skills[key] < 0 ? 0 : this.skills[key];
      }

      for (let key in this.skills) {
        this.skills[key] = this.skills[key] > 6 ? 6 : this.skills[key];
      }
    },

    increaseSkill: function (type) {
      if (this.skills[type] < 6) {
        this.skills[type] += 1;
      }
    },

    reduceSkill: function (type) {
      if (this.skills[type] > 0) {
        this.skills[type] -= 1;
      }
    },

    /*-----------------------------------------------------------------------------
        Methods used to calculate the Armour Class value of the generated character
    -------------------------------------------------------------------------------*/
    assignArmourClass: function () {
      this.armourClass = 10 + this.attributes.modifiers[Attribute.DEXTERITY];
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