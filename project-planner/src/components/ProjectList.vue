<template> 
    <div class="flex flex-col gap-6 items-center py-6">
        <button @click="expand(project.id)" class="bg-white rounded-lg p-6 min-w-96 w-3/4 border-b-4 select-none cursor-pointer" :class="project.completed ? 'border-lime-800'  : 'border-red-800'" v-for="(project, index) in projects" :key="project">
            <div id="container" class="flex justify-between">
                <div id="content" class="text-left" v-if="editing != project.id">
                    <h1 class="text-2xl font-teachers tracking-wide font-medium text-stone-500"> {{ project.name }} </h1>
                    <div v-if="expanded.includes(project.id)" class="text-stone-400 font-teachers"> {{ project.description }} </div>
                </div>

                <div id="contentEditing" @keyup.enter="saveEdit(project.id, index)" class="text-left" v-else>
                    <h1 class="text-2xl font-teachers tracking-wide font-medium text-stone-500"> <input class="outline-none" v-model="projects[index].name"> </h1>
                    <div v-if="expanded.includes(project.id)" class="text-stone-400 font-teachers"> <input class="w-96 outline-none" v-model="projects[index].description"> </div>
                </div>

                <div id="icons" class="h-full flex my-auto gap-3">
                    <button @click.stop="editProject(project.id)"> <span class="material-icons text-stone-400 text-2xl hover:text-stone-500">edit</span> </button>
                    <button @click.stop="deleteProject(project.id, index)"> <span class="material-icons text-stone-400 text-2xl hover:text-stone-500">delete</span> </button>
                    <button @click.stop="completeProject(project.id, index)"> <span class="material-icons text-stone-400 text-2xl hover:text-stone-500 font-bold">done</span> </button>
                </div>
            </div>
        </button>
    </div> 
</template>

<script>
    export default {
        name: "ProjectList",
        props: [ 'filter' ],
        data() {
            return {
                expanded: [],
                projects: [],
                editing: null,
                uri: 'http://localhost:3000/projects/'
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
                if(this.editing == id) return;
                if(this.expanded.includes(id)) this.expanded.splice(this.expanded.indexOf(id), 1);
                else this.expanded.push(id);
            },
            editProject(id) {
                if(!this.expanded.includes(id)) this.expanded.push(id);
                this.editing = id;
            },
            saveEdit(id, index) {
                this.editing = null;
                fetch(this.uri+id, { 
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name: this.projects[index].name, description: this.projects[index].description })
                })
            },
            deleteProject(id, index) {
                fetch(this.uri+id, {method: 'DELETE'});
                this.projects.splice(index, 1);
            },
            completeProject(id, index) {
                fetch(this.uri+id, { 
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ completed: !this.projects[index].completed })
                });
                this.projects[index].completed = !this.projects[index].completed;
            }
        },
        mounted() {
            this.renderList()
        }
    }
</script>