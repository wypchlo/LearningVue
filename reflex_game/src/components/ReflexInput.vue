<template>
    <div v-if='inputShown' @click="stopTimer" id='reflexinput'>
       <b> CLICK NOW {{ delay }}</b> 
    </div>
</template>

<script>
    export default{
        name: 'ReflexInput', 
        props: [
            'delay'
        ],
        data() {
            return {
                inputShown: false,
                timer: null,
                reactionTime: null
            }
        },
        mounted()
        {
            setTimeout(() => {
                this.inputShown = true;
                this.startTimer()
            }, this.delay); 
        },
        methods: {
            startTimer()
            {
                this.timer = setInterval(() => {
                    this.reactionTime += 10
                }, 10);
            },
            stopTimer()
            {
                clearInterval(this.timer);
                this.$emit('timerStopped', this.reactionTime);
            }
        }
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
        cursor: pointer;
    }

    #reflexinput b{
        border-bottom: 1px solid white;
        user-select: none;
    }
</style>