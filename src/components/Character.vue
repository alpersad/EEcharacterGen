<template>
  <div>
    <Class v-on:emitclass="updateClass" />
    <button v-on:click="generateAttributes">Generate Character</button>
    <Attributes
      v-on:attrcompleted="updateAttributes"
      v-if="clicked"
      v-bind:key="rerender"
    />
    <Health
      v-bind:modifier="character.modifiers"
      v-bind:chosenclass="character.class"
      v-on:updatehealth="updateHealth"
    />
    <Saves
      v-bind:modifier="character.modifiers"
      v-bind:chosenclass="character.class"
      v-on:updatesaves="updateSaves"
    />
    <p>{{ character }}</p>
  </div>
</template>

<script>
import Attributes from "./Attributes.vue";
import Class from "./Class.vue";
import Health from "./Health.vue";
import Saves from "./Saves.vue";

export default {
  name: "Character",
  components: {
    Attributes,
    Class,
    Health,
    Saves,
  },
  data: function () {
    return {
      character: {
        name: "",
        level: 0,
        class: "",
        attributes: [],
        flesh: 0,
        grit: 0,
        skills: [],
        equipmentMax: { basic: 0, light: 0, rare: 0 },
        equipmentList: [],
        experience: 0,
        saves: [],
        armourClass: 0,
        resourceLevel: 0,
        modifiers: [0, 0, 0, 0, 0, 0],
        spellList: [],
        abilityList: [],
      },
      clicked: false,
      rerender: 0,
    };
  },
  methods: {
    generateAttributes: function () {
      this.clicked = true;
      this.rerender = this.rerender % 2 ? 0 : 1;
    },

    updateAttributes: function (event) {
      this.character.attributes = event.value;
      this.character.modifiers = event.modifier;
    },

    updateClass: function (event) {
      this.character.class = event;
    },

    updateHealth: function (event) {
      this.character.flesh = event.flesh;
      this.character.grit = event.grit;
    },
    updateSaves: function (event) {
      this.character.saves = event;
    },
  },
};
</script>

<style scoped>
</style>