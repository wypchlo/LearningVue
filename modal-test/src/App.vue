<template>
  <h1 id="title"> Deals </h1>

  <div id='buttons'>
    <button @click="showModal(1, true)"> first deal </button>
    <button @click="showModal(2, true)"> second deal </button>
  </div>

  <div id="modals">
    <ModalPopup v-if="modalShown[1]">
      <h1> Good deal </h1>

      <template v-slot:actions>
        <button @click="modalAction('accept', 1)"> Take the deal </button>
        <button @click="modalAction('decline', 1)"> Decline </button>
      </template>
    </ModalPopup>

    <ModalPopup v-if="modalShown[2]"> 
      <h1> Bad deal </h1>
      
      <template v-slot:actions>
          <button @click="modalAction('accept', 2)"> Take the deal </button>
      </template>
    </ModalPopup>
  </div>
</template>

<script>
import ModalPopup from "./components/ModalPopup.vue";

export default {
  name: 'App',
  data(){
    return{
      modalShown: [null, false, false],
      modalStatus: []
    }
  },
  components: {
    ModalPopup
  },
  methods:
  {
    showModal(modal, state)
    {
      this.modalShown[modal] = state ? true : false;
    },
    modalAction(action, modal)
    {
      switch (action)
      {
        case 'accept':
          this.modalStatus[modal] = 'accepted';
          break;
        case 'decline':
          this.modalStatus[modal] = 'declined';
          break;
      }
      this.showModal(modal, false);
    },
  }
}
</script>

<style>
  #buttons{
    margin: 20px;
  }

  #title{
    border-bottom: 1px solid gray;
    width: fit-content;
    margin: 0 auto;
  }
  
  #app{
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  #modals{
    background: rgb(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
  }
</style>
