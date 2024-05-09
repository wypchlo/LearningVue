<template>
  <button class="focus:bg-black">Test</button>
  <PopupBox>
    <h1 class="py-6 w-64 border-b border-stone-200 font-bold text-lg text-stone-600"> welcome </h1>
    <form class="w-full font-light flex flex-col items-center justify-center mb-4" id="signupform">
      <label class="flex flex-col w-3/4 h-14 justify-between my-2"> <p class="text-stone-600 font-normal"> name </p> <input class="border-b border-stone-200 outline-none text-center rounded-md" type="text" ref="name" placeholder> </label>
      <label class="flex flex-col w-3/4 h-14 justify-between my-2"> <p class="text-stone-600 font-normal"> surname </p> <input class="border-b border-stone-200 outline-none text-center rounded-md" type="text" ref="surname" placeholder> </label>
      <label class="flex flex-col w-3/4 h-14 justify-between my-2"> <p class="text-stone-600 font-normal"> email </p> <input class="border-b border-stone-200 outline-none text-center rounded-md" type="email" ref="email" placeholder> </label>
      <label class="flex flex-col w-3/4 h-14 justify-between my-2"> <p class="text-stone-600 font-normal"> password </p> <input class="border-b border-stone-200 outline-none text-center rounded-md" type="password" ref="password" placeholder> </label>
    </form>
  </PopupBox>
</template>

<script>
import PopupBox from './components/PopupBox.vue';

export default{
  components: {
    PopupBox
  }
}
</script>

<style>
  #signupform input:not(:placeholder-shown), #signupform input:focus{
    @apply border;
  }
</style>