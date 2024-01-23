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
})

//addFavoreriteMovie
const addFavorite = (id) => {
    apiCallStore.favoritesID.push(route.params.id);
    localStorage.setItem('favoritesID', JSON.stringify(apiCallStore.favoritesID));
    console.log(apiCallStore.favoritesID);
    showAdded();
}

const deleteFavorite = () => {
    const index = apiCallStore.favoritesID.indexOf(route.params.id);
    if (index > -1) {
        apiCallStore.favoritesID.splice(index, 1);
    }
    localStorage.setItem('favoritesID', JSON.stringify(apiCallStore.favoritesID));
    console.log(apiCallStore.favoritesID);
    showDeleted();
}

/* Zobrazovanie add delete buttonov */
const isFav = () => {
    if (apiCallStore.favoritesID.includes(route.params.id)) {
        return true;
    } else {
        return false;
    }
}

/* TOAST */
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';

const toast = useToast();
const showAdded = () => {
    toast.add({ severity: 'success', summary: 'Success Message', detail: 'Movie added', life: 3000 });
};

const showDeleted = () => {
    toast.add({ severity: 'success', summary: 'Success Message', detail: 'Movie deleted', life: 3000 });
};

</script>

<template>
    <div class="movie-detail-container">
        <Toast />
            <img :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path" alt="movie poster">
        <div class="movie-detail-info">
            <h2>{{ movie.title }}</h2>
            <p class="overview">{{ movie.overview }}</p>
            <p>Release Date:  {{ movie.release_date }}</p>
            <p>Rating: {{ movie.vote_average }} / 10</p>
            <div v-if="!isFav()" class="addFavorite" @click="addFavorite()">Add to Favorites</div>
            <div v-else class="addFavorite" @click="deleteFavorite">Delete from Favorites</div>
        </div>
    </div>
    
</template>

<style scoped>
.movie-detail-container {  
    margin-bottom: 140px !important;
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