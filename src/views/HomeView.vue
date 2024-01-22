<script setup>
import InputText from 'primevue/inputtext';

import { ref } from 'vue';

const searchInput = ref('');
</script>

<template>
    <div class="search-container">
      <InputText v-model="searchInput" placeholder="Search..." class="search-input"/>
    </div>
</template>

<style scoped>
  .search-input {
    width: 40% ;
  }

  .search-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
</style>
