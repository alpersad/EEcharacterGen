<template>
  <div>
    <Attributes :attributes="attributes" />
    <Health :health="health" />
    <Saves :saves="saves" />
    <Skills :skills="skills" />
  </div>
</template>

<script>
import Attributes from "./Attributes.vue";
import Health from "./Health.vue";
import Saves from "./Saves.vue";
import Skills from "./Skills.vue";
import { Bodyguard } from "../js/eeclass/bodyguard";

export default {
  components: {
    Attributes,
    Health,
    Saves,
    Skills
  },
  data() {
    return {
      character: {}
    };
  },
  beforeMount() {
    this.character = new Bodyguard("Tzaki");
    console.log(this.character.toString());
  },
  computed: {
    attributes() {
      return [
        {
          name: "Strength",
          value: this.character.strength || 0,
          mod: this.character.strengthModifier || 0
        },
        {
          name: "Dexterity",
          value: this.character.dexterity || 0,
          mod: this.character.dexterityModifier || 0
        },
        {
          name: "Constitution",
          value: this.character.constitution || 0,
          mod: this.character.constitutionModifier || 0
        },
        {
          name: "Intelligence",
          value: this.character.intelligence || 0,
          mod: this.character.intelligenceModifier || 0
        },
        {
          name: "Wisdom",
          value: this.character.wisdom || 0,
          mod: this.character.wisdomModifier || 0
        },
        {
          name: "Charisma",
          value: this.character.charisma || 0,
          mod: this.character.charismaModifier || 0
        }
      ];
    },
    health() {
      return {
        flesh: this.character.flesh || 0,
        grit: this.character.grit || 0
      };
    },
    saves() {
      return [
        {
          name: "Stunning",
          value: this.character.stun || 0
        },
        {
          name: "Poison",
          value: this.character.poison || 0
        },
        {
          name: "Hazards",
          value: this.character.hazard || 0
        },
        {
          name: "Machines",
          value: this.character.machine || 0
        },
        {
          name: "Magic",
          value: this.character.magic || 0
        }
      ];
    },
    skills() {
      return [
        {
          name: "Athletics",
          value: this.character.athletics
        },
        {
          name: "Charm",
          value: this.character.charm
        },
        {
          name: "Contacts",
          value: this.character.contact
        },
        {
          name: "Driving",
          value: this.character.driving
        },
        {
          name: "Forensics",
          value: this.character.forensics
        },
        {
          name: "Medicine",
          value: this.character.medicine
        },

        {
          name: "Perception",
          value: this.character.perception
        },
        {
          name: "Stealth",
          value: this.character.stealth
        },
        {
          name: "Technology",
          value: this.character.technology
        },
        {
          name: "Translation",
          value: this.character.translation
        },
        {
          name: "Vandalism",
          value: this.character.vandalism
        }
      ];
    }
  }
};
</script>

<style></style>
