<template>
    <h1 id="result"> You clicked the input in: {{ time }}ms </h1>
</template>

<script>
    export default{
        name: 'ReflexResult',
        props: [
            'time'
        ]
    }
</script>

<style>
    #result{
        color: green;
    }
</style>