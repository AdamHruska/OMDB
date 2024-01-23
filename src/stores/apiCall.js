import { defineStore } from "pinia";
import api from "../axios";
import { watch } from "vue";

export const useApiCallStore = defineStore("apiCall", {
    state: () => ({
        topRatedMovies: [],
        trendingMovies: [],
        upcomingMovies: [],
        pageTopRated: 1,
        pageTrending: 1,
        pageUpcoming: 1,
    }),
    actions: {
        async getTopRatedMovies() {
            const response = await api.get(`/movie/top_rated?language=en-US&page=${this.pageTopRated}`);
            return response.data.results;
        },
        async getTrendingMovies() {
            const response = await api.get(`/trending/movie/day?language=en-US&page=${this.pageTrending}`);
            return response.data.results;
        },
        async getUpcomingMovies() {
            const response = await api.get(`/movie/upcoming?language=en-US&page=${this.pageUpcoming}`);
            return response.data.results;
        }, 
    },
}); 

/* watch() => useApiCallStore.pageTopRated, () => {
            useApiCallStore.getTopRatedMovies();
        } */