<template>
    <router-link :to="{ name: 'job', params: { id: job.id } }" v-for="job in jobs" :key="job.id">
        {{ job.title }}
    </router-link>
</template>

<script>
    export default{
        data() {
            return {
                jobs: [
                    {title: "Job1", id: 1},
                    {title: "Job2", id: 2},
                    {title: "Job3", id: 3}
                ]
            }
        }
    }
</script>