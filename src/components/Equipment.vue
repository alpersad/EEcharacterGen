<template>
  <div class="columns">
    <div class="column">
      <div>
        <label for="baseGear">Select Basic Starting Equipment</label>
        <select v-model="currentItem" name="baseGear" id="baseGear">
          <optgroup label="Adventure Gear">
            <option
              v-for="item in adventure_gear"
              :value="item"
              :key="item.name"
            >
              {{ item.name }}
            </option>
          </optgroup>
          <optgroup label="Armour">
            <option v-for="item in armour" :value="item" :key="item.name">
              {{ item.name }}
            </option>
          </optgroup>
          <optgroup label="Melee Weapons">
            <option
              v-for="item in melee_weapons"
              :value="item"
              :key="item.name"
            >
              {{ item.name }}
            </option>
          </optgroup>
          <optgroup label="Ranged Weapons">
            <option
              v-for="item in ranged_weapons"
              :value="item"
              :key="item.name"
            >
              {{ item.name }}
            </option>
          </optgroup>
          <optgroup label="Vehicles">
            <option v-for="item in vehicles" :value="item" :key="item.name">
              {{ item.name }}
            </option>
          </optgroup>
          <optgroup label="Social Advantages">
            <option
              v-for="item in social_advantages"
              :value="item"
              :key="item.name"
            >
              {{ item.name }}
            </option>
          </optgroup>
          <optgroup label="Grimoires">
            <option v-for="item in grimoires" :value="item" :key="item.name">
              {{ item.name }}
            </option>
          </optgroup>
        </select>

        <button v-on:click="addItem">+</button>
        <p>{{ currentItemDescription }}</p>
      </div>
      <div v-if="isMercenary">
        <label for="mercGear">Select Mercenary Perk Equipment</label>
        <select v-model="mercItem" name="mercGear" id="mercGear">
          <optgroup label="Armour">
            <option v-for="item in armour" :value="item" :key="item.name">
              {{ item.name }}
            </option>
          </optgroup>
          <optgroup label="Melee Weapons">
            <option
              v-for="item in melee_weapons"
              :value="item"
              :key="item.name"
            >
              {{ item.name }}
            </option>
          </optgroup>
          <optgroup label="Ranged Weapons">
            <option
              v-for="item in ranged_weapons"
              :value="item"
              :key="item.name"
            >
              {{ item.name }}
            </option>
          </optgroup>
        </select>
        <button v-on:click="addMercItem">+</button>
        <p>{{ currentMercItemDescription }}</p>
      </div>

      <div v-if="isCriminal">
        <label for="crimGear">Select Criminal Perk Equipment</label>
        <select v-model="crimItem" name="crimGear" id="crimGear">
          <optgroup label="Adventure Gear">
            <option
              v-for="item in adventure_gear"
              :value="item"
              :key="item.name"
            >
              {{ item.name }}
            </option>
          </optgroup>
        </select>
        <button v-on:click="addCrimItem">+</button>
        <p>{{ currentCrimItemDescription }}</p>
      </div>
    </div>
    <div class="column">
      <b>EQUIPMENT LIST</b>
      <p>{{ equipmentList.length }} / {{ equipmentMax.common }}</p>
      <p v-for="(item, index) in equipmentList" :key="index">
        <button v-on:click="removeItem(index, equipmentList)">-</button
        >{{ item.name }}
      </p>
    </div>
    <div v-if="isMercenary" class="column">
      <b>MERCENARY PERK</b>
      <p>{{ mercenaryEquipment.length }}/2</p>
      <p v-for="(item, index) in mercenaryEquipment" :key="index">
        <button v-on:click="removeItem(index, mercenaryEquipment)">-</button
        >{{ item.name }}
      </p>
    </div>
    <div v-if="isCriminal" class="column">
      <b>CRIMINAL PERK</b>
      <p>{{ criminalEquipment.length }}/2</p>
      <p v-for="(item, index) in criminalEquipment" :key="index">
        <button v-on:click="removeItem(index, criminalEquipment)">-</button
        >{{ item.name }}
      </p>
    </div>
  </div>
</template>

<script>
import adventure_gear from "../assets/items/adventure_gear.json";
import armour from "../assets/items/armour.json";
import melee_weapons from "../assets/items/melee_weapons.json";
import ranged_weapons from "../assets/items/ranged_weapons.json";
import vehicles from "../assets/items/vehicles.json";
import social_advantages from "../assets/items/social_advantages.json";
import grimoires from "../assets/items/grimoires.json";

export default {
  name: "Equipment",
  props: ["equipmentMax", "selectedClass"],
  data() {
    return {
      adventure_gear: adventure_gear,
      armour: armour,
      melee_weapons: melee_weapons,
      ranged_weapons: ranged_weapons,
      vehicles: vehicles,
      social_advantages: social_advantages,
      grimoires: grimoires,
      currentItem: null,
      mercItem: null,
      crimItem: null,
      equipmentList: [],
      mercenaryEquipment: [],
      criminalEquipment: [],
    };
  },
  methods: {
    addItem: function () {
      if (this.currentItem != null) {
        this.equipmentList.push(this.currentItem);
      }
    },
    addMercItem: function () {
      if (this.mercItem != null) {
        this.mercenaryEquipment.push(this.mercItem);
      }
    },
    addCrimItem: function () {
      if (this.crimItem != null) {
        this.criminalEquipment.push(this.crimItem);
      }
    },
    removeItem: function (index, equipment) {
      equipment.splice(index, 1);
    },
  },
  computed: {
    currentItemDescription: function () {
      if (this.currentItem != null) {
        return this.currentItem.description;
      }
      return " ";
    },
    currentMercItemDescription: function () {
      if (this.mercItem != null) {
        return this.mercItem.description;
      }
      return " ";
    },
    currentCrimItemDescription: function () {
      if (this.crimItem != null) {
        return this.crimItem.description;
      }
      return " ";
    },
    isMercenary: function () {
      if (this.selectedClass == "MERCENARY") {
        return true;
      }
      return false;
    },
    isCriminal: function () {
      if (this.selectedClass == "CRIMINAL") {
        return true;
      }
      return false;
    },
  },
};
</script>

<style scoped>
</style>