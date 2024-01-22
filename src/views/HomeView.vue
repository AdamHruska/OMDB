<script setup>
import InputText from 'primevue/inputtext';
import { ref, onMounted } from 'vue';
import MovieCard from '../components/MovieCard.vue';
import Paginator from 'primevue/paginator';
const searchInput = ref('');
import axios from 'axios';
/*
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjBkMzUxNTAwYjNlZWRkYTNkNGI1NDM0OTdkMGIzMCIsInN1YiI6IjY1YWViNDRlNTQ0YzQxMDBlZGMzM2Y0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3rPgg_UV--cwT3jnMv-jaEKcVVzAihp765mnfmG3PD8'
  }
};

onMounted(() => {
  axios.get('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => console.log(response))
});
*//*
const movies = ref([]);
import {useApiStore} from '../stores/apiStore';

const apiStore = useApiStore();

onMounted(() => {
  movies.value =  apiStore.getTopRatedMovies();
  console.log(movies.value);
});*/
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
