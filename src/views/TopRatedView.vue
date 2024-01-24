<script setup>
import InputText from 'primevue/inputtext';
import { ref, onMounted } from 'vue';
import MovieCard from '../components/MovieCard.vue';
import Paginator from 'primevue/paginator';
const searchInput = ref('');


import { useApiCallStore} from '../stores/apiCall';

const apiCallStore = useApiCallStore();
const topRatedMovies = ref([]);


onMounted(async () => {
  apiCallStore.topRatedMovies = await apiCallStore.getTopRatedMovies();
  topRatedMovies.value = apiCallStore.topRatedMovies
  console.log(topRatedMovies.value);
});


const pagePlusOne = async () => {
  apiCallStore.pageTopRated += 1;
  apiCallStore.topRatedMovies = await apiCallStore.getTopRatedMovies();
  topRatedMovies.value = apiCallStore.topRatedMovies
  window.scrollTo({
  top: 0,
  left: 0,
  behavior: "smooth",
});
}

const pageMinusOne = async () => {
  apiCallStore.pageTopRated -= 1;
  apiCallStore.topRatedMovies = await apiCallStore.getTopRatedMovies();
  topRatedMovies.value = apiCallStore.topRatedMovies
  window.scrollTo({
  top: 0,
  left: 0,
  behavior: "smooth",
});
}


/* SEARCH */
const searchCall = async () => {
  apiCallStore.search = searchInput.value;
  apiCallStore.searchMovies = await apiCallStore.getSearchMovies();
  topRatedMovies.value = apiCallStore.searchMovies;
}

</script>

<template>
    <div class="search-container">
      <InputText v-model="searchInput" @keyup.enter="searchCall" placeholder="Search..." class="search-input"/>
    </div>

      <h2>Top Rated Movies</h2>
    
    <div class="card-container">

      <div class="grid">
        <div class="col-12 md:col-6 lg:col-3" v-for="movie in topRatedMovies">
          <MovieCard  :imgPath="movie.poster_path"
                      :title="movie.title"
                      :vote="movie.vote_average"
                      :id="movie.id"/>
        </div>

        <div class="paginator">
          <button @click="pageMinusOne" class="pageMinusOne">-</button>
          <h3>{{ apiCallStore.pageTopRated }}</h3>
          <button @click="pagePlusOne" class="pagePlusOne">+</button>
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
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
  }
  
.pageMinusOne{
  margin-right: 10px;
  background-color: #950740;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  border: none;
  cursor: pointer;
}

.pagePlusOne{
  margin-left: 10px;
  background-color: #950740;
  border-radius: 50%;
  border: none;
  height: 50px;
  width: 50px;
  cursor: pointer;
}

.paginator h3{
  margin-left: 10px;
  margin-right: 10px;
  color: #f2f2f2;
}

</style>
