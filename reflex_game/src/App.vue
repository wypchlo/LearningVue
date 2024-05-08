<template>
  <h1> Reaction timer </h1>
  <button @click="start()" v-if="{disabled: isPlaying}" :reactionTime="reactionTime"> Start game </button>
  <ReflexInput v-if="isPlaying" :delay="delay" @click="timerStarted" @timerStopped="timerStopped" />

  <ReflexResult v-if="resultShown" :time="undefined" :reactionTime="reactionTime" />
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
      resultShown: false,
      isPlaying: false,
      delay: 0,
      reactionTime: 0
    };
  },
  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000;
      this.resultShown = false;
      this.isPlaying = true;
    },
    timerStopped(time)
    {
      this.reactionTime = time;
      this.isPlaying = false;
      this.resultShown = true;
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
