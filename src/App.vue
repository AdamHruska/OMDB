<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <main>
    <Header />
    <RouterView />
    <Footer />
  </main>
  
</template>

<style scoped>
main {
  background-color: #1a1a1d;
}
</style>
