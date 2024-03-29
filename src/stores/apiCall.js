import { defineStore } from "pinia";
import api from "../axios";

export const useApiCallStore = defineStore("apiCall", {
    state: () => ({
        topRatedMovies: [],
        trendingMovies: [],
        upcomingMovies: [],
        movieDetails: [],
        pageTopRated: 1,
        pageTrending: 1,
        pageUpcoming: 1,
        search: '',
        favoritesID: JSON.parse(localStorage.getItem('favoritesID')) ?? [], // local storage uklada len stringy a nie pole, preto JSON.parse
        favoriteMovies: [],
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
        async getMovieDetails(id) {
            const response = await api.get(`/movie/${id}?language=en-US`); 
            return response.data;
        },
        async getSearchMovies() {
            const response = await api.get(`/search/movie?language=en-US&query=${this.search}`);
            return response.data.results;
        },
        async getFavoriteMovies() {
            this.favoriteMovies = [];
            await Promise.all(this.favoritesID.map(async (id) => {
                const response = await api.get(`/movie/${id}?language=en-US`);
                this.favoriteMovies.push(response.data);
            }));
            return this.favoriteMovies;
        },
    },
}); 
