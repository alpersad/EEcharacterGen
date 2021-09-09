<template>
  <Character class="z-50" />
</template>

<script>
import Character from "./components/Character.vue";

export default {
  name: "App",
  components: {
    Character
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
#app {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.roboto {
  font-family: "Roboto";
}
</style>
