<template>
  {{ name }} {{ surname }}
  <button class="focus:bg-black">Test</button>
  <PopupBox>
    <h1 class="py-6 w-96 border-b border-stone-300 font-bold text-lg text-stone-600 uppercase"> welcome </h1>
    <form @submit.prevent="handleSubmit" class="w-full font-light flex flex-col items-center justify-center mb-4" id="signupform">
      <label class="flex flex-col w-3/4 h-14 justify-between my-2"> <p class="text-stone-500 font-medium uppercase text-sm tracking-wider"> name </p> <input v-model="name" class="border-b border-stone-200 text-stone-500 outline-none text-center rounded-md" type="text" ref="name" placeholder="Adam"> </label>
      <label class="flex flex-col w-3/4 h-14 justify-between my-2"> <p class="text-stone-500 font-medium uppercase text-sm tracking-wider"> surname </p> <input v-model="surname" class="border-b border-stone-200 outline-none text-center rounded-md" type="text" ref="surname" placeholder> </label>
      <label class="flex flex-col w-3/4 h-14 justify-between my-2"> <p class="text-stone-500 font-medium uppercase text-sm tracking-wider"> email </p> <input v-model="email" class="border-b border-stone-200 outline-none text-center rounded-md" type="email" ref="email" placeholder> </label>
      <label class="flex flex-col w-3/4 h-14 justify-between my-2"> <p class="text-stone-500 font-medium uppercase text-sm tracking-wider"> password </p> <input v-model="password" class="border-b border-stone-200 outline-none text-center rounded-md" type="password" ref="password" placeholder> </label>
      <label class="flex flex-col w-3/4 h-14 justify-between my-2"> <p class="text-stone-500 font-medium uppercase text-sm tracking-wider"> skills </p> <input @keyup.alt="addSkill" v-model="tempSkill" class="border-b border-stone-200 outline-none text-center rounded-md" type="text" ref="tempSkills" placeholder> </label>
      <div class="flex max-w-64 flex-wrap justify-center">
        <button @click="removeSkill(skill)" type="button" v-for="skill in skills" :key="skill" class="py bg-stone-200 px-2 rounded-full m-2 hover:bg-red-400" > {{ skill }} </button>
      </div>

      <label class="flex w-3/4 h-14 justify-center items-center my-2"> <p class="text-stone-600 font-normal"> gender </p> 
        <select class="bg-stone-200 border-b border-stone-200 outline-none text-center rounded-md font-light ml-4">
          <option value="man">man</option>
          <option value="woman">woman</option>
          <option value="other">other</option>
        </select>
      </label>

      <h1 class="border-t border-stone-200 w-full pt-6 pb-2"> <button class="bg-stone-200 px-6 py-1 rounded-full font-light text-lg text-stone-600" type="submit"> submit form </button> </h1>
    </form>
  </PopupBox>
</template>

<script>
import PopupBox from './components/PopupBox.vue';

export default{
  components: {
    PopupBox
  },
  data() {
    return {
      name: null,
      surname: null,
      email: null,
      password: null,
      tempSkill: null,
      skills: []
    }
  },
  methods: {
    addSkill(e) {
      if(e.key !== ',') return;
      if(!this.skills.includes(this.tempSkill))
      {
        this.skills.push(this.tempSkill);
        console.log(this.tempSkill);
        this.tempSkill = '';
      }
    },
    removeSkill(skill) {
      let skillIndex = this.skills.indexOf(skill);
      this.skills.splice(skillIndex, 1);
    },
    handleSubmit() {
      console.log("submit");
    }
  }
}
</script>

<style>
  #signupform input:not(:placeholder-shown), #signupform input:focus{
    @apply border;
  }
</style>