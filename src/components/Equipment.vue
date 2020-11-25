<template>
  <div class="columns">
    <div class="column">
      <label for="baseGear">Select Starting Equipment</label>

      <select v-model="currentItem" name="baseGear" id="baseGear">
        <optgroup label="Adventure Gear">
          <option v-for="item in adventure_gear" :value="item" :key="item.name">
            {{ item.name }}
          </option>
        </optgroup>
        <optgroup label="Armour">
          <option v-for="item in armour" :value="item" :key="item.name">
            {{ item.name }}
          </option>
        </optgroup>
        <optgroup label="Melee Weapons">
          <option v-for="item in melee_weapons" :value="item" :key="item.name">
            {{ item.name }}
          </option>
        </optgroup>
        <optgroup label="Ranged Weapons">
          <option v-for="item in ranged_weapons" :value="item" :key="item.name">
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
    <div class="column">
      <b>EQUIPMENT LIST</b>
      <p v-for="(item, index) in equipmentList" :key="index">
        <button v-on:click="removeItem(index)">-</button>{{ item.name }}
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
  props: ["equipmentMax", "class"],
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
      equipmentList: [],
    };
  },
  methods: {
    addItem: function () {
      this.equipmentList.push(this.currentItem);
    },
    removeItem: function (index) {
      this.equipmentList.splice(index, 1);
    },
  },
  computed: {
    currentItemDescription: function () {
      return this.currentItem;
    },
  },
};
</script>

<style scoped>
</style>