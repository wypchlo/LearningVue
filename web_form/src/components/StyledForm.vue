<template>
    <div id="backdrop">
        <form action=""> 
            <h1>{{ title }}</h1>
            <slot></slot>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'StyledForm',
        props: 
        [
            'title'
        ]
    }
</script>

<style>
   #backdrop{
        position: absolute;
        top: 0;
        background: rgb(0, 0, 0, 0.5); 
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
   } 

   #backdrop form{
        width: 400px;
        background: white;
        border-radius: 10px;
        padding-bottom: 40px;
   }

   #backdrop form h1{
        padding-bottom: 10px;
        margin-bottom: 0px;
        border-bottom: 1px solid #F4F2F2
   }
   
   #backdrop form input{
        border: 1px solid #F4F2F2;
        border-top: 0;
        border-right: 0;
        border-left: 0;
        outline: 0;
   }

   #backdrop form input:focus{
        border: 1px solid #F4F2F2;
        background-color: #F4F2F2;
        padding: 0;
   }
</style>