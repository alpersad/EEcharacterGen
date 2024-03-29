<template>
  <div
    class="flex flex-wrap justify-center sm:justify-start sm:space-x-5 gap-y-9 my-5"
  >
    <Selector
      v-on:character-gen="generateCharacter($event)"
      v-on:doppelganger="doppelganger()"
      v-on:download="download()"
    />
    <Health :health="health" />
    <Attributes :attributes="attributes" />
    <Saves :saves="saves" />
    <Equipment
      v-on:update-equipment="updateEquipment($event)"
      :equipment="equipment"
      :charclass="charclass"
    />
    <Skills class="" :skills="skills" />
  </div>
</template>

<script>
import Attributes from "./Attributes.vue";
import Health from "./Health.vue";
import Saves from "./Saves.vue";
import Skills from "./Skills.vue";
import Selector from "./Selector.vue";
import Equipment from "./Equipment.vue";
import { Bodyguard } from "../js/eeclass/bodyguard";
import { Criminal } from "../js/eeclass/criminal";
import { Doctor } from "../js/eeclass/doctor";
import { Explorer } from "../js/eeclass/explorers";
import { Mercenary } from "../js/eeclass/mercenaries";
import { Mystic } from "../js/eeclass/mystics";
import { Occultist } from "../js/eeclass/occultists";
import { Spook } from "../js/eeclass/spook";
import { saveAs } from "file-saver";

export default {
  components: {
    Attributes,
    Health,
    Saves,
    Skills,
    Selector,
    Equipment
  },
  data() {
    return {
      character: {},
      charclass: null
    };
  },
  computed: {
    attributes() {
      return [
        {
          name: "Strength",
          value: this.character.strength || 0,
          mod: this.character.strengthModifier || 0,
          icon: require("../assets/icons/weight-lifting-up.svg")
        },
        {
          name: "Dexterity",
          value: this.character.dexterity || 0,
          mod: this.character.dexterityModifier || 0,
          icon: require("../assets/icons/dodging.svg")
        },
        {
          name: "Constitution",
          value: this.character.constitution || 0,
          mod: this.character.constitutionModifier || 0,
          icon: require("../assets/icons/heart-shield.svg")
        },
        {
          name: "Intelligence",
          value: this.character.intelligence || 0,
          mod: this.character.intelligenceModifier || 0,
          icon: require("../assets/icons/brain.svg")
        },
        {
          name: "Wisdom",
          value: this.character.wisdom || 0,
          mod: this.character.wisdomModifier || 0,
          icon: require("../assets/icons/wisdom.svg")
        },
        {
          name: "Charisma",
          value: this.character.charisma || 0,
          mod: this.character.charismaModifier || 0,
          icon: require("../assets/icons/fedora.svg")
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
          icon: require("../assets/icons/star-swirl.svg")
        },
        {
          name: "Poison",
          value: this.character.poison || 0,
          icon: require("../assets/icons/poison-bottle.svg")
        },
        {
          name: "Hazards",
          value: this.character.hazard || 0,
          icon: require("../assets/icons/banana-peel.svg")
        },
        {
          name: "Machines",
          value: this.character.machine || 0,
          icon: require("../assets/icons/vintage-robot.svg")
        },
        {
          name: "Magic",
          value: this.character.magic || 0,
          icon: require("../assets/icons/magic-swirl.svg")
        }
      ];
    },
    skills() {
      return [
        {
          name: "Athletics",
          value: this.character.athletics || 0,
          icon: require("../assets/icons/podium-winner.svg")
        },
        {
          name: "Charm",
          value: this.character.charm || 0,
          icon: require("../assets/icons/cupidon-arrow.svg")
        },
        {
          name: "Contacts",
          value: this.character.contact || 0,
          icon: require("../assets/icons/talk.svg")
        },
        {
          name: "Driving",
          value: this.character.driving || 0,
          icon: require("../assets/icons/city-car.svg")
        },
        {
          name: "Forensics",
          value: this.character.forensics || 0,
          icon: require("../assets/icons/magnifying-glass.svg")
        },
        {
          name: "Medicine",
          value: this.character.medicine || 0,
          icon: require("../assets/icons/medicine-pills.svg")
        },

        {
          name: "Perception",
          value: this.character.perception || 0,
          icon: require("../assets/icons/eyeball.svg")
        },
        {
          name: "Stealth",
          value: this.character.stealth || 0,
          icon: require("../assets/icons/ninja-mask.svg")
        },
        {
          name: "Technology",
          value: this.character.technology || 0,
          icon: require("../assets/icons/pc.svg")
        },
        {
          name: "Translation",
          value: this.character.translation || 0,
          icon: require("../assets/icons/convince.svg")
        },
        {
          name: "Vandalism",
          value: this.character.vandalism || 0,
          icon: require("../assets/icons/hammer-break.svg")
        }
      ];
    },
    equipment() {
      return this.character.equipment;
    },
    characterClass() {
      return this.character.constructor.name;
    }
  },
  methods: {
    generateCharacter(characterClass) {
      this.charclass = characterClass;
      switch (characterClass) {
        case "Bodyguard":
          this.character = new Bodyguard();
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
    },
    doppelganger() {
      if (!this.charclass) {
        // prevent doppelganger when no character class is generated
        return;
      }
      this.character.doppelganger();
      console.log("Doppelganger");
      console.log(this.character.toString());
      this.$forceUpdate();
    },
    download() {
      if (!this.charclass) {
        // prevent download when no character class is generated
        return;
      }
      let blob = new Blob([this.character.toString()], {
        type: "text/plain;charset=utf-8"
      });
      saveAs(blob, `${this.charclass}.txt`);
    },
    updateEquipment(equipment) {
      this.character.equipmentList = equipment;
      console.log(this.character.toString());
    }
  }
};
</script>

<style></style>
