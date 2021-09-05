<template>
  <div class="flex flex-wrap gap-y-16 ">
    <Selector v-on:character-gen="generateCharacter($event)" />
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
import Selector from "./Selector.vue";
import { Bodyguard } from "../js/eeclass/bodyguard";
import { Criminal } from "../js/eeclass/criminal";
import { Doctor } from "../js/eeclass/doctor";
import { Explorer } from "../js/eeclass/explorers";
import { Mercenary } from "../js/eeclass/mercenaries";
import { Mystic } from "../js/eeclass/mystics";
import { Occultist } from "../js/eeclass/occultists";
import { Spook } from "../js/eeclass/spook";

export default {
  components: {
    Attributes,
    Health,
    Saves,
    Skills,
    Selector
  },
  data() {
    return {
      character: {}
    };
  },
  computed: {
    attributes() {
      return [
        {
          name: "Strength",
          value: this.character.strength || 0,
          mod: this.character.strengthModifier || 0,
          icon: require("./icons/weight-lifting-up.svg")
        },
        {
          name: "Dexterity",
          value: this.character.dexterity || 0,
          mod: this.character.dexterityModifier || 0,
          icon: require("./icons/dodging.svg")
        },
        {
          name: "Constitution",
          value: this.character.constitution || 0,
          mod: this.character.constitutionModifier || 0,
          icon: require("./icons/heart-shield.svg")
        },
        {
          name: "Intelligence",
          value: this.character.intelligence || 0,
          mod: this.character.intelligenceModifier || 0,
          icon: require("./icons/brain.svg")
        },
        {
          name: "Wisdom",
          value: this.character.wisdom || 0,
          mod: this.character.wisdomModifier || 0,
          icon: require("./icons/wisdom.svg")
        },
        {
          name: "Charisma",
          value: this.character.charisma || 0,
          mod: this.character.charismaModifier || 0,
          icon: require("./icons/fedora.svg")
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
          value: this.character.stun || 0,
          icon: require("./icons/star-swirl.svg")
        },
        {
          name: "Poison",
          value: this.character.poison || 0,
          icon: require("./icons/poison-bottle.svg")
        },
        {
          name: "Hazards",
          value: this.character.hazard || 0,
          icon: require("./icons/banana-peel.svg")
        },
        {
          name: "Machines",
          value: this.character.machine || 0,
          icon: require("./icons/vintage-robot.svg")
        },
        {
          name: "Magic",
          value: this.character.magic || 0,
          icon: require("./icons/magic-swirl.svg")
        }
      ];
    },
    skills() {
      return [
        {
          name: "Athletics",
          value: this.character.athletics || 0,
          icon: require("./icons/podium-winner.svg")
        },
        {
          name: "Charm",
          value: this.character.charm || 0,
          icon: require("./icons/cupidon-arrow.svg")
        },
        {
          name: "Contacts",
          value: this.character.contact || 0,
          icon: require("./icons/talk.svg")
        },
        {
          name: "Driving",
          value: this.character.driving || 0,
          icon: require("./icons/city-car.svg")
        },
        {
          name: "Forensics",
          value: this.character.forensics || 0,
          icon: require("./icons/magnifying-glass.svg")
        },
        {
          name: "Medicine",
          value: this.character.medicine || 0,
          icon: require("./icons/medicine-pills.svg")
        },

        {
          name: "Perception",
          value: this.character.perception || 0,
          icon: require("./icons/eyeball.svg")
        },
        {
          name: "Stealth",
          value: this.character.stealth || 0,
          icon: require("./icons/ninja-mask.svg")
        },
        {
          name: "Technology",
          value: this.character.technology || 0,
          icon: require("./icons/pc.svg")
        },
        {
          name: "Translation",
          value: this.character.translation || 0,
          icon: require("./icons/convince.svg")
        },
        {
          name: "Vandalism",
          value: this.character.vandalism || 0,
          icon: require("./icons/hammer-break.svg")
        }
      ];
    }
  },
  methods: {
    generateCharacter(character_class) {
      switch (character_class) {
        case "Bodyguard":
          this.character = new Bodyguard("Name");
          break;
        case "Criminal":
          this.character = new Criminal();
          break;
        case "Doctor":
          this.character = new Doctor();
          break;
        case "Explorer":
          this.character = new Explorer();
          break;
        case "Mercenary":
          this.character = new Mercenary();
          break;
        case "Mystic":
          this.character = new Mystic();
          break;
        case "Occultist":
          this.character = new Occultist();
          break;
        case "Spook":
          this.character = new Spook();
          break;
        default:
        // execution should not reach here
      }
      console.log(this.character.toString());
    }
  }
};
</script>

<style></style>
