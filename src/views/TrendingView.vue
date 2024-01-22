<script setup>
import InputText from 'primevue/inputtext';
import { ref } from 'vue';
import MovieCard from '../components/MovieCard.vue';
import Paginator from 'primevue/paginator';
const searchInput = ref('');
</script>

<template>
    <div class="search-container">
      <InputText v-model="searchInput" placeholder="Search..." class="search-input"/>
    </div>

      <h2>Trending Movies</h2>
    
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

        <div class="paginator">
          <Paginator :rows="4" :totalRecords="120" template="PrevPageLink CurrentPageReport NextPageLink"
                      currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" class="border-round-md"/>
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
    /*margin: 0 auto;*/
    margin-left: auto;
    margin-right: auto;
  }

  .paginator {
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
  }
  
</style>
