<template>
    <div class="flex justify-center py-10">
        <label class="text-center"> <p> Search </p> <input v-model="searchTerm" type="text" class="border"> </label>
    </div>

    <ul class="text-center">
        <li v-for="item in filteredItems" :key="item"> {{ item }} </li>
    </ul>
</template>

<script>
    import {ref, computed} from 'vue';

    export default
    {
        setup()
        {
            const items = ref(['pipeyard', 'chimney canopy', 'the exterior', 'sky islands', 'five pebbles', 'outskirts']);
            const searchTerm = ref(null);
            const filteredItems = computed(() => {
                return items.value.filter(item => item.includes(searchTerm.value))
            }) 


            return {items, searchTerm, filteredItems};
        }
    }
</script>