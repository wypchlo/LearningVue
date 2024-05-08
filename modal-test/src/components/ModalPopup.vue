<template>
    <div id="modal">
        <slot> Sample deal </slot>

        <slot name="actions">
            <button> Sample action </button>
            <button> Sample action </button>
        </slot>
    </div>
</template>

<script>
    export default
    {
        name: 'ModalPopup'
    }
</script>

<style>
    #modal{
        height: 300px;
        margin: 30px;
        width: 100%;
        background: white;
        text-align: center;
        border-radius: 5px;
    }
</style>