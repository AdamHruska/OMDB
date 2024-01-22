<script setup>
import InputText from 'primevue/inputtext';
import { ref } from 'vue';
import MovieCard from '../components/MovieCard.vue';
const searchInput = ref('');
</script>

<template>
    <div class="search-container">
      <InputText v-model="searchInput" placeholder="Search..." class="search-input"/>
    </div>

      <h2>Your Favorite Movies</h2>
    
    <div class="card-container">

      <div class="grid">
        <div class="col-3">
          <MovieCard />
        </div>
        <div class="col-3">
          <MovieCard />
        </div>
        <div class="col-3">
          <MovieCard />
        </div>
        <div class="col-3">
          <MovieCard />
        </div>
        <div class="col-3">
          <MovieCard />
        </div>
        <div class="col-3">
          <MovieCard />
        </div>
        <div class="col-3">
          <MovieCard />
        </div>
        <div class="col-3">
          <MovieCard />
        </div>
      </div>

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

   h2 {
    margin-top: 40px;
    text-align: center;
    color: #f2f2f2;
    margin-bottom: 60px;
  }

  /* Card Container */
  .card-container {
   max-width: 65%;
    margin: 0 auto;
  }
  
</style>
