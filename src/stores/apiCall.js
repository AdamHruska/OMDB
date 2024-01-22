import { defineStore } from "pinia";
import api from "../axios";

export const useApiCallStore = defineStore("apiCall", {
    state: () => ({
       topRatedMovies: [],
    }),
    actions: {
        async getTopRatedMovies() {
            const response = await api.get("/movie/top_rated?language=en-US&page=1");
            return response.data.results;
        },
    },
}); 