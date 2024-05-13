<template>
  <div id="sketched" class="w-full py-6">
    <h1 class="text-center text-mono text-3xl font-bold"> Composition API </h1>
  </div>
  <hr>
  <router-view/>
</template>

<style>
  #sketched{
    background: repeating-linear-gradient(45deg, transparent, transparent 22px, lightgray 22px, lightgray 23px);
  }
</style>
