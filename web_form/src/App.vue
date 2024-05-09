<template>
  <StyledForm title="Welcome!">
      <label><p> Name </p><input type="text"></label>
      <label><p> Surname </p><input type="text"></label>
      <label><p> Email </p><input type="email"></label>
  </StyledForm>
</template>

<script>
import StyledForm from './components/StyledForm.vue';

export default {
  name: 'App',
  components: {
    StyledForm 
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif; 
  text-align: center;
  color: #4F4746;
  margin-top: 60px;
}
</style>
