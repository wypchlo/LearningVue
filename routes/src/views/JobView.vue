<template>
    <div> <h1 :v-if="this.job.title"> {{ this.job.title }} </h1> </div>
</template>

<script>
    export default {
        data() {
            return {
                job: null,
                id: this.$route.params.id
            }
        },
        mounted() {
            fetch('http://localhost:3000/jobs/' + this.id)
                .then(res => res.json())
                .then(data => this.job = data)
                .catch(error => console.error(error))
        }
    }
</script>