<template> 
    <ul class="flex flex-col gap-6 items-center py-6">
        <li @click="expand(project.id)" class="bg-white rounded-lg p-6 min-w-96 w-3/4 border-b-4 select-none cursor-pointer" :class="project.completed ? 'border-lime-800'  : 'border-red-800'" v-for="project in projects" :key="project">
            <h1 class="text-2xl font-teachers tracking-wide font-medium text-stone-500 text-center"> {{ project.name }} </h1>
            <div v-if="expanded.includes(project.id)" class="text-center text-stone-400 font-teachers"> {{ project.description }} </div>
        </li>
    </ul> 
</template>

<script>
    export default {
        name: "ProjectList",
        props: [ 'filter' ],
        data() {
            return {
                expanded: [],
                projects: []
            }
        },
        methods: {
            async renderList() {
                let unfilteredProjects;
                let promise = fetch('http://localhost:3000/projects')
                    .then(res => res.json())
                    .then(data => unfilteredProjects = data)
                    .catch(error => console.log(error));
               
                await(promise);

                switch (this.filter) {
                    case 'all':
                        this.projects = unfilteredProjects; 
                        break;
                    case 'completed':
                        this.projects = unfilteredProjects.filter(val => val.completed)
                        break;
                    case 'ongoing':
                        this.projects = unfilteredProjects.filter(val => !val.completed)
                        break;
                };
                this.expanded = [];
            },
            expand(id) {
                if(this.expanded.includes(id)) this.expanded.splice(this.expanded.indexOf(id), 1);
                else this.expanded.push(id);
            }
        },
        mounted() {
            this.renderList()
        }
    }
</script>