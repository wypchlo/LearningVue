<template>
  <nav class="flex mx-auto w-3/5 justify-center gap-10 h-32 items-center">
    <router-link :to="{name: 'Projects'}" class="font-medium w-fit relative text-2xl text-stone-500 font-teachers tracking-wide uppercase"> projects </router-link> 
    <router-link :to="{name: 'AddProject'}" class="font-medium w-fit relative text-2xl text-stone-500 font-teachers tracking-wide uppercase"> Add a new project </router-link>
  </nav>

  <router-view/>
</template>

<style>
  a::before{
    content: '';
    display: block;
    position: absolute;
    bottom: 20%;
    width: 100%;
    height: 6px;
    transform: skew(-26deg);
    @apply bg-stone-600/[.25];
    transform-origin: center;
    transform: scalex(0);
    transition: transform 0.2s;
  }

  a.router-link-exact-active::before{
    transform: scalex(1);
  }
</style>