<template>
  {{ name }} {{ surname }}
  <button class="focus:bg-black">Test</button>
  <PopupBox>
    <h1 class="py-6 w-64 border-b border-stone-200 font-bold text-lg text-stone-600"> welcome </h1>
    <form class="w-full font-light flex flex-col items-center justify-center mb-4" id="signupform">
      <label class="flex flex-col w-3/4 h-14 justify-between my-2"> <p class="text-stone-600 font-normal"> name </p> <input v-model="name" class="border-b border-stone-200 outline-none text-center rounded-md" type="text" ref="name" placeholder> </label>
      <label class="flex flex-col w-3/4 h-14 justify-between my-2"> <p class="text-stone-600 font-normal"> surname </p> <input v-model="surname" class="border-b border-stone-200 outline-none text-center rounded-md" type="text" ref="surname" placeholder> </label>
      <label class="flex flex-col w-3/4 h-14 justify-between my-2"> <p class="text-stone-600 font-normal"> email </p> <input v-model="email" class="border-b border-stone-200 outline-none text-center rounded-md" type="email" ref="email" placeholder> </label>
      <label class="flex flex-col w-3/4 h-14 justify-between my-2"> <p class="text-stone-600 font-normal"> password </p> <input v-model="password" class="border-b border-stone-200 outline-none text-center rounded-md" type="password" ref="password" placeholder> </label>
      
      <label class="flex flex-col w-3/4 h-14 justify-between my-2"> <p class="text-stone-600 font-normal"> gender </p> 
        <select>
          <option value="man">man</option>
          <option value="woman">woman</option>
          <option value="other">other</option>
        </select>
      </label>

      <label class="flex flex-col w-3/4 h-14 justify-between my-2"> <p class="text-stone-600 font-normal"> skills </p> <input @keyup.alt="addSkill" v-model="tempSkill" class="border-b border-stone-200 outline-none text-center rounded-md" type="text" ref="tempSkills" placeholder> </label>
      <div class="flex max-w-64 flex-wrap justify-center">
        <button @click="removeSkill(skill)" type="button" v-for="skill in skills" :key="skill" class="py bg-stone-200 px-2 rounded-full m-2 hover:bg-red-400" > {{ skill }} </button>
      </div>
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
    }
  }
}
</script>

<style>
  #signupform input:not(:placeholder-shown), #signupform input:focus{
    @apply border;
  }
</style>