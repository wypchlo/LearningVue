<template>
    <div class="flex justify-center w-full font-teachers">
        <div id="container" class="w-fit h-fit rounded-xl bg-white text-center">
            <h1 class="text-2xl font-teachers tracking-wide font-medium text-stone-500 px-36 pt-8 uppercase"> add a project </h1>
            <form @submit.prevent="submitForm()" class="w-full font-light flex flex-col items-center justify-center mb-4" id="signupform">
            <label class="flex flex-col w-3/4 h-14 justify-between my-6"> <p class="my-2 font-semibold font-teachers text-xl text-stone-500 transition-colors select-none cursor-pointer"> name </p> <input v-model="name" class="border-b-4 border-stone-300 placeholder-stone-400 text-stone-500 outline-none text-center rounded-md text-lg" type="text" ref="name" required placeholder="vue project"> </label>
            <label class="flex flex-col w-3/4 h-fit justify-between my-2"> <p class="my-2 font-semibold font-teachers text-xl text-stone-500 transition-colors select-none cursor-pointer"> description </p> <textarea v-model="description" class="bg-stone-100 align-bottom border-b-4 border-stone-300 placeholder-stone-400 text-stone-500 outline-none text-center rounded-md text-lg" type="text" ref="description" required placeholder="a simple vue project"></textarea> </label>
            
            <div class="flex justify-between items-center">
                <div class="w-10"></div> 
                <button class="bg-stone-200 text-stone-600 rounded-full text-2xl font-teachers tracking-wide font-medium mt-6 mb-2 hover:bg-stone-300" type="submit"> <h1 class="w-full px-6 py-1"> confirm </h1> </button>
                <span class="material-icons mt-4 w-10 transition-opacity" :class="successClass" ref="success">done</span>
            </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: null,
                description: null,
                uri: 'http://localhost:3000/projects',
                success: false
            }
        },
        methods: {
            async submitForm() {
                fetch(this.uri, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name: this.name,
                        description: this.description,
                        completed: false
                    })
                });
                this.success = true;

                setTimeout(() => {
                    this.success = false;
                }, 1000)
            }
        },
        computed: {
            successClass: function() {
                return this.success ? 'opacity-100' : 'opacity-0';
            }
        }
    }
</script>