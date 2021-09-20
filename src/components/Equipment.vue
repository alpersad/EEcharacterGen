<template>
  <div
    class="flex justify-center w-screen p-1 pb-5 mx-2 bg-gray-800 bg-opacity-75 border-2 border-gray-400 sm:p-5 sm:m-5 sm:w-max sm:h-full"
  >
    <div class="grid max-w-max justify-items-center gap-y-3">
      <div class="grid grid-cols-1 justify-items-center gap-y-3">
        <section-title>
          Equipment
        </section-title>
        <div class="my-2" v-for="n in equipment" :key="n">
          <div class="inline-block space-x-2">
            <Chip :class="rarity(n - 1) ? 'bg-yellow-300' : 'invisible'"
              >rare</Chip
            >
            <Chip :class="light(n - 1) ? 'bg-blue-300' : 'invisible'"
              >light</Chip
            >
          </div>
          <select
            class="p-2 ml-2 text-gray-100 bg-black border-2 border-gray-200 w-44 sm:w-80"
            v-model="equipmentList[n - 1]"
          >
            <optgroup label="Adventure Gear">
              <option
                v-for="(equipment, index) in adventure_gear"
                :key="index"
                :value="{
                  name: equipment.name,
                  rarity: equipment.rare,
                  light: equipment.light
                }"
              >
                {{ equipment.name }}
              </option>
            </optgroup>
            <optgroup label="Armour">
              <option
                v-for="(equipment, index) in armour"
                :key="index"
                :value="{
                  name: equipment.name,
                  rarity: equipment.rare,
                  light: equipment.light
                }"
              >
                {{ equipment.name }}
              </option>
            </optgroup>
            <optgroup label="Melee Weapons">
              <option
                v-for="(equipment, index) in melee_weapons"
                :key="index"
                :value="{
                  name: equipment.name,
                  rarity: equipment.rare,
                  light: equipment.light
                }"
              >
                {{ equipment.name }}
              </option>
            </optgroup>
            <optgroup label="Ranged Weapons">
              <option
                v-for="(equipment, index) in ranged_weapons"
                :key="index"
                :value="{
                  name: equipment.name,
                  rarity: equipment.rare,
                  light: equipment.light
                }"
              >
                {{ equipment.name }}
              </option>
            </optgroup>
            <optgroup label="Vehicles">
              <option
                v-for="(equipment, index) in vehicles"
                :key="index"
                :value="{
                  name: equipment.name,
                  rarity: equipment.rare,
                  light: equipment.light
                }"
              >
                {{ equipment.name }}
              </option>
            </optgroup>
            <optgroup label="Social Advantages">
              <option
                v-for="(equipment, index) in social_advantages"
                :key="index"
                :value="{
                  name: equipment.name,
                  rarity: equipment.rare,
                  light: equipment.light
                }"
              >
                {{ equipment.name }}
              </option>
            </optgroup>
            <optgroup label="Grimoires">
              <option
                v-for="(equipment, index) in grimoires"
                :key="index"
                :value="{
                  name: equipment.name,
                  rarity: equipment.rare,
                  light: equipment.light
                }"
              >
                {{ equipment.name }}
              </option>
            </optgroup>
          </select>
        </div>
      </div>

      <div
        v-if="isCriminal"
        class="grid grid-cols-1 gap-y-3 justify-items-center"
      >
        <section-title>
          Criminal Bonus
        </section-title>
        <div class="my-2" v-for="n in 2" :key="n">
          <div class="inline-block space-x-2">
            <Chip
              :class="rarity(equipment + n - 1) ? 'bg-yellow-300' : 'invisible'"
              >rare</Chip
            >
            <Chip
              :class="light(equipment + n - 1) ? 'bg-blue-300' : 'invisible'"
              >light</Chip
            >
          </div>
          <select
            class="p-2 ml-2 text-gray-100 bg-black border-2 border-gray-200 w-44 sm:w-80"
            v-model="equipmentList[equipment + n - 1]"
          >
            <optgroup label="Adventure Gear">
              <option
                v-for="(equipment, index) in adventure_gear"
                :key="index"
                :value="{
                  name: equipment.name,
                  rarity: equipment.rare,
                  light: equipment.light
                }"
              >
                {{ equipment.name }}
              </option>
            </optgroup>
          </select>
        </div>
      </div>
      <div
        v-if="isMercenary"
        class="grid grid-cols-1 gap-y-3 justify-items-center"
      >
        <section-title>
          Mercenary Bonus
        </section-title>
        <div class="my-2" v-for="n in 2" :key="n">
          <div class="inline-block space-x-2">
            <Chip
              :class="rarity(equipment + n - 1) ? 'bg-yellow-300' : 'invisible'"
              >rare</Chip
            >
            <Chip
              :class="light(equipment + n - 1) ? 'bg-blue-300' : 'invisible'"
              >light</Chip
            >
          </div>
          <select
            class="p-2 ml-2 text-gray-100 bg-black border-2 border-gray-200 w-44 sm:w-80"
            v-model="equipmentList[equipment + n - 1]"
          >
            <optgroup label="Armour">
              <option
                v-for="(equipment, index) in armour"
                :key="index"
                :value="{
                  name: equipment.name,
                  rarity: equipment.rare,
                  light: equipment.light
                }"
              >
                {{ equipment.name }}
              </option>
            </optgroup>
            <optgroup label="Melee Weapons">
              <option
                v-for="(equipment, index) in melee_weapons"
                :key="index"
                :value="{
                  name: equipment.name,
                  rarity: equipment.rare,
                  light: equipment.light
                }"
              >
                {{ equipment.name }}
              </option>
            </optgroup>
            <optgroup label="Ranged Weapons">
              <option
                v-for="(equipment, index) in ranged_weapons"
                :key="index"
                :value="{
                  name: equipment.name,
                  rarity: equipment.rare,
                  light: equipment.light
                }"
              >
                {{ equipment.name }}
              </option>
            </optgroup>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// json
import adventure_gear from "../assets/items/adventure_gear.json";
import armour from "../assets/items/armour.json";
import melee_weapons from "../assets/items/melee_weapons.json";
import ranged_weapons from "../assets/items/ranged_weapons.json";
import vehicles from "../assets/items/vehicles.json";
import social_advantages from "../assets/items/social_advantages.json";
import grimoires from "../assets/items/grimoires.json";

// components
import Chip from "./common/chip.vue";
import SectionTitle from "./common/section-title.vue";

export default {
  props: ["equipment", "characterClass"],
  components: {
    Chip,
    "section-title": SectionTitle
  },
  data() {
    return {
      adventure_gear: adventure_gear,
      armour: armour,
      melee_weapons: melee_weapons,
      ranged_weapons: ranged_weapons,
      vehicles: vehicles,
      social_advantages: social_advantages,
      grimoires: grimoires,
      rare: 2,
      equipmentList: []
    };
  },
  methods: {
    rarity(index) {
      if (this.equipmentList[index]) {
        return this.equipmentList[index].rarity;
      }
      return false;
    },
    light(index) {
      if (this.equipmentList[index]) {
        return this.equipmentList[index].light;
      }
      return false;
    }
  },
  computed: {
    isCriminal: function() {
      return this.characterClass == "Criminal";
    },
    isMercenary: function() {
      return this.characterClass == "Mercenary";
    }
  },
  watch: {
    equipmentList: {
      deep: true,
      handler() {
        this.$emit("update-equipment", this.equipmentList);
      }
    }
  }
};
</script>

<style scoped></style>
