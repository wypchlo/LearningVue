<template>
    <div id="container" class="mx-auto flex flex-col w-fit">
        <header class="flex gap-5"> 
            <button @click="listProjects('all')" class="font-semibold font-teachers text-xl text-stone-400 transition-colors select-none cursor-pointer" :class="{'text-stone-500' : filter === 'all'}"> view all </button>
            <button @click="listProjects('completed')" class="font-semibold font-teachers text-xl text-stone-400 transition-colors select-none cursor-pointer" :class="{'text-stone-500' : filter === 'completed'}"> completed </button>
            <button @click="listProjects('ongoing')" class="font-semibold font-teachers text-xl text-stone-400 transition-colors select-none cursor-pointer" :class="{'text-stone-500' : filter === 'ongoing'}"> ongoing </button>
        </header>
    </div>

    <ProjectList ref="projectList" :filter="filter"/>
</template>

<script>
    import ProjectList from "../components/ProjectList.vue";

    export default {
        components: { ProjectList },
        data() {
            return {
                filter: "all",
                buttonSelected: 'all'
            }
        },
        methods: {
            listProjects(filter) {
                this.filter = filter;
                this.$refs.projectList.renderList(filter);
            }
        }
    }
</script>