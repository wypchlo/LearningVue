<template>
    <div v-if="jobs.length">
        <router-link :to="{ name: 'job', params: { id: job.id } }" v-for="job in jobs" :key="job.id"> {{ job.title }} </router-link>
    </div> 
    <div v-else> Loading... </div>
</template>

<script>
    export default{
        data() {
            return {
                jobs: []
            }
        },
        mounted() {
            fetch('http://localhost:3000/jobs')
                .then((res) => res.json())
                .then((data) => this.jobs = data)
                .catch(err => console.error(err.messsage))
        }
    }
</script>