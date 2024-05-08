<template>
  <h1> Reaction timer </h1>
  <button @click="start()"> Start game </button>
  <ReflexInput v-if="inputShown" @click="handleClick()" />

  <ReflexResult v-if="resultShown" :time="undefined" />
</template>

<script>
import ReflexInput from "./components/ReflexInput.vue";
import ReflexResult from "./components/ReflexResult.vue";

export default {
  name: "App",
  components: {
    ReflexInput,
    ReflexResult,
  },
  data() {
    return {
      inputShown: false,
      resultShown: false,
      isPlaying: false,
    };
  },
  methods: {
    handleClick() {
      this.inputShown = false;
      this.resultShown = true;
      this.isPlaying = false;
      this.$emit("clicked");
    },
    start() {
      if(this.isPlaying == true) return;

      this.resultShown = false;
      this.isPlaying = true;
      this.inputShown = true;      
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
