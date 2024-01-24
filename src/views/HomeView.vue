<script setup>
import InputText from 'primevue/inputtext';
import { ref, onMounted } from 'vue';
import MovieCard from '../components/MovieCard.vue';
import Paginator from 'primevue/paginator';
const searchInput = ref('');
import axios from 'axios';

import { useApiCallStore} from '../stores/apiCall';
const apiCallStore = useApiCallStore();
const favoriteMovies = ref([]);

onMounted(async () => {
  apiCallStore.favoriteMovies = await apiCallStore.getFavoriteMovies();
  favoriteMovies.value = apiCallStore.favoriteMovies
  console.log(favoriteMovies.value);
});

/* SEARCH */
const searchCall = async () => {
  apiCallStore.search = searchInput.value;
  apiCallStore.searchMovies = await apiCallStore.getSearchMovies();
  favoriteMovies.value = apiCallStore.searchMovies;
}

</script>

<template>
    <div class="search-container">
      <InputText v-model="searchInput" @keyup.enter="searchCall" placeholder="Search..." class="search-input"/>
    </div>

      <h2>Your Favorite Movies</h2>
    
    <div class="card-container">

      <div class="grid">
         <div class="col-12 md:col-6 lg:col-3" v-for="favoriteMovie in favoriteMovies">
          <MovieCard  :imgPath="favoriteMovie.poster_path"
                     :title="favoriteMovie.title"
                     :vote="favoriteMovie.vote_average" 
                     :id="favoriteMovie.id"/>
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
