<script setup>
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
import { useApiCallStore } from '../stores/apiCall';

const apiCallStore = useApiCallStore();
const movie = ref([])

const route = useRoute();

onMounted(async () => {
    apiCallStore.movieDetails = await apiCallStore.getMovieDetails(route.params.id);
    movie.value = apiCallStore.movieDetails;
    console.log(movie);    
})

const addFavorite = () => {
    apiCallStore.favorites.push(route.params.id);
    
}

</script>
movie.poster_path
<template>

    <div class="movie-detail-container">
            <img :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path" alt="movie poster">
        <div class="movie-detail-info">
            <h2>{{ movie.title }}</h2>
            <p class="overview">{{ movie.overview }}</p>
            <p>Release Date:  {{ movie.release_date }}</p>
            <p>Rating: {{ movie.vote_average }} / 10</p>
            <div class="addFavorite" @click="addFavorite">Add to Favorites</div>
        </div>
    </div>
    
</template>

<style scoped>
.movie-detail-container {  
    background-color: charcoal;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    display: flex;
    align-items: start;
    width: 60%;
    margin: auto;
    height: 500px;
    margin-top: 50px;
}

img {
    width: 40%;
    height: 100%;
    border-radius: 10px 0 0 10px;
    margin-right: 50px;
}

.movie-detail-info {
    margin-top: 100px;
    margin-right: 50px;
}

.movie-detail-info{
    color: #f2f2f2;
}

.movie-detail-info h2{
    font-size: 2rem;
    margin-bottom: 20px;
}

.movie-detail-info p{
    font-size: 0.9rem;
    margin-bottom: 10px;
}

.movie-detail-info .overview{
    margin-bottom: 35px;
}
 .addFavorite {
    float: right;
    margin-right: 50px;
    background-color: #950740;
    color: #f2f2f2;
    outline: none;
    text-decoration: none;
    cursor: pointer;
    box-shadow: none;
    padding: 8px;
    border-radius: 8px;
}
</style>