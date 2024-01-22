<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'

</script>

<template>
  <main>
    <Header />


    <RouterView />
  </main>
  
</template>

<style scoped>
main {
  background-color: #1a1a1d;
  min-height: 100vh;  
}
</style>
