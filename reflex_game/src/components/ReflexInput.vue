<template>
    <div id='reflexinput'>
       <b> CLICK NOW </b> 
    </div>
</template>

<script>
    export default{
        name: 'ReflexInput'
    }
</script>

<style>
    #reflexinput{
        font-size: 50px;
        color: white;
        top: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(0, 255, 0, .25);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #reflexinput b{
        border-bottom: 1px solid white;
        user-select: none;
    }
</style>