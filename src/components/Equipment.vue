<template>
  <div
    class="grid justify-center bg-gray-800 bg-opacity-75 border-2 border-gray-400 p-4 sm:w-max w-screen justify-self-center h-full gap-2"
  >
    <div class="grid justify-center gap-y-2">
      <section-title>
        Equipment
      </section-title>
      <div class="grid grid-cols-5 " v-for="n in equipment" :key="n">
        <div class="sm:inline-block flex flex-col  space-x-2 col-span-1 w-max">
          <Chip
            v-if="rarity(n - 1)"
            :class="rarity(n - 1) ? 'bg-yellow-300' : 'invisible'"
            >rare</Chip
          >
          <Chip
            v-if="light(n - 1)"
            :class="light(n - 1) ? 'bg-blue-300' : 'invisible'"
            >light</Chip
          >
        </div>
        <select
          class="p-2 ml-2 col-span-4 text-gray-100 bg-black border-2 border-gray-200 "
          v-model="equipmentList[n - 1]"
        >
          <optgroup label="Adventure Gear">
            <option
              v-for="(equipment, index) in adventure_gear"
              :key="index"
              :value="equipment"
            >
              {{ equipment.name }}
            </option>
          </optgroup>
          <optgroup label="Armour">
            <option
              v-for="(equipment, index) in armour"
              :key="index"
              :value="equipment"
            >
              {{ equipment.name }}
            </option>
          </optgroup>
          <optgroup label="Melee Weapons">
            <option
              v-for="(equipment, index) in melee_weapons"
              :key="index"
              :value="equipment"
            >
              {{ equipment.name }}
            </option>
          </optgroup>
          <optgroup label="Ranged Weapons">
            <option
              v-for="(equipment, index) in ranged_weapons"
              :key="index"
              :value="equipment"
            >
              {{ equipment.name }}
            </option>
          </optgroup>
          <optgroup label="Vehicles">
            <option
              v-for="(equipment, index) in vehicles"
              :key="index"
              :value="equipment"
            >
              {{ equipment.name }}
            </option>
          </optgroup>
          <optgroup label="Social Advantages">
            <option
              v-for="(equipment, index) in social_advantages"
              :key="index"
              :value="equipment"
            >
              {{ equipment.name }}
            </option>
          </optgroup>
          <optgroup label="Grimoires">
            <option
              v-for="(equipment, index) in grimoires"
              :key="index"
              :value="equipment"
            >
              {{ equipment.name }}
            </option>
          </optgroup>
        </select>
      </div>
    </div>

    <!-- Criminal -->
    <div v-show="isCriminal" class="grid justify-center gap-y-2">
      <section-title>
        Criminal Bonus
      </section-title>
      <div class="grid grid-cols-5" v-for="n in 2" :key="n">
        <div class="sm:inline-block flex flex-col space-x-2 col-span-1 w-max">
          <Chip
            :class="rarity(equipment + n - 1) ? 'bg-yellow-300' : 'invisible'"
            >rare</Chip
          >
          <Chip :class="light(equipment + n - 1) ? 'bg-blue-300' : 'invisible'"
            >light</Chip
          >
        </div>
        <select
          class="p-2 ml-2 col-span-4 text-gray-100 bg-black border-2 border-gray-200"
          v-model="equipmentList[equipment + n - 1]"
        >
          <optgroup label="Adventure Gear">
            <option
              v-for="(equipment, index) in adventure_gear"
              :key="index"
              :value="equipment"
            >
              {{ equipment.name }}
            </option>
          </optgroup>
        </select>
      </div>
    </div>
    <!-- Mercenary -->
    <template v-if="isMercenary">
      <div class="grid justify-center gap-y-2">
        <section-title>
          Mercenary Bonus
        </section-title>
        <div class="grid grid-cols-5" v-for="n in 2" :key="n">
          <div class="sm:inline-block flex flex-col space-x-2 col-span-1 w-max">
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
            class="p-2 ml-2 col-span-4 text-gray-100 bg-black border-2 border-gray-200"
            v-model="equipmentList[equipment + n - 1]"
          >
            <optgroup label="Armour">
              <option
                v-for="(equipment, index) in armour"
                :key="index"
                :value="equipment"
              >
                {{ equipment.name }}
              </option>
            </optgroup>
            <optgroup label="Melee Weapons">
              <option
                v-for="(equipment, index) in melee_weapons"
                :key="index"
                :value="equipment"
              >
                {{ equipment.name }}
              </option>
            </optgroup>
            <optgroup label="Ranged Weapons">
              <option
                v-for="(equipment, index) in ranged_weapons"
                :key="index"
                :value="equipment"
              >
                {{ equipment.name }}
              </option>
            </optgroup>
          </select>
        </div>
      </div>
    </template>
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
  props: ["equipment", "charclass"],
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
      return this.charclass == "Criminal";
    },
    isMercenary: function() {
      return this.charclass == "Mercenary";
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
