<template>
    <div class="flex justify-center w-full font-teachers">
        <div id="container" class="w-fit h-fit rounded-xl bg-white text-center">
            <h1 class="text-2xl font-teachers tracking-wide font-medium text-stone-500 px-36 py-6 border-stone-300 border-b-2"> add project </h1>
            <form @submit.prevent="handleSubmit" class="w-full font-light flex flex-col items-center justify-center mb-4" id="signupform">
            <label class="flex flex-col w-3/4 h-14 justify-between my-6"> <p class="my-2 font-semibold font-teachers text-xl text-stone-500 transition-colors select-none cursor-pointer"> name </p> <input v-model="name" class="border-b-2 border-stone-300 placeholder-stone-400 text-stone-500 outline-none text-center rounded-md" type="text" ref="name" placeholder="vue project"> </label>
            <label class="flex flex-col w-3/4 h-fit justify-between my-2"> <p class="my-2 font-semibold font-teachers text-xl text-stone-500 transition-colors select-none cursor-pointer"> description </p> <textarea v-model="surname" class="bg-stone-100 align-bottom border-b-2 border-stone-300 placeholder-stone-400 text-stone-500 outline-none text-center rounded-md" type="text" ref="surname" placeholder="a simple vue project"></textarea> </label>
            
            <button @submit="submitForm()" class="bg-stone-200 text-stone-600 rounded-full text-2xl font-teachers tracking-wide font-medium mt-6 mb-2 hover:bg-stone-300" type="submit"> <h1 class="w-full px-6 py-1"> confirm </h1> </button>
            </form>        
        </div>   
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        methods: {
            submitForm() {
                
            }
        }
    }
</script>