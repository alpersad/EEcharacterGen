<template>
  <HelloWorld msg="Esoteric Enterprises Character Generation" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Condiment&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
#app {
  font-family: "Condiment";
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
