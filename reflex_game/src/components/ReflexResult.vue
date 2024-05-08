<template>
  <h1 id="result" ref="result"> You clicked the input in {{ reactionTime }}ms </h1>
</template>

<script>
export default {
  name: "ReflexResult",
  props: [
    "reactionTime"
  ],
  mounted() { 
    let score = (this.reactionTime - 200) / 400;
    this.$refs.result.style.color = 'rgb(' + (score * 255) + ', ' + (-score * 255 + 255) + '0, 0)'; 
  }
};
</script>