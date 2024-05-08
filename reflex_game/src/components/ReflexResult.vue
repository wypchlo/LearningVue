<template>
  <h1 id="result">You clicked the input in: {{ reactionTime }}ms</h1>
</template>

<script>
export default {
  name: "ReflexResult",
  props: [
    "reactionTime"
  ],
};
</script>

<style>
#result {
  color: green;
}
</style>
