<template>
  <header>
    <h1> Reaction timer </h1>
    <button @click="start()" v-if="{disabled: isPlaying}" :reactionTime="reactionTime"> Start game </button>
  </header>
  
  <ReflexInput v-if="isPlaying" :delay="delay" @click="startGame" @timerStopped="endGame" />
  <ReflexResult v-if="resultShown" :reactionTime="reactionTime" />
</template>

<script>
import ReflexInput from "./components/ReflexInput.vue";
import ReflexResult from "./components/ReflexResult.vue";

export default {
  name: "App",
  data() {
    return {
      resultShown: false,
      isPlaying: false,
      delay: null,
      reactionTime: null
    };
  },
  methods: {
    startGame() {
      this.delay = 2000 + Math.random() * 5000;
      this.resultShown = false;
      this.isPlaying = true;
    },
    endGame(duration)
    {
      this.reactionTime = duration;
      this.isPlaying = false;
      this.resultShown = true;
    },
  },
  components: {
    ReflexInput,
    ReflexResult,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
