<template>
    <div id="container" class="mx-auto flex flex-col w-fit">
        <header class="flex gap-5"> 
            <button class="font-semibold font-teachers text-xl text-stone-400"> view all </button>
            <button class="font-semibold font-teachers text-xl text-stone-400"> completed </button>
            <button class="font-semibold font-teachers text-xl text-stone-400"> ongoing </button>
        </header>
    </div>

    <ProjectList filter="all"/>
</template>

<script>
    import ProjectList from '../components/ProjectList.vue'

    export default {
        components: { ProjectList }
    }
</script>