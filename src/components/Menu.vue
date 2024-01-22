<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <nav>
        <div class="link-container">
            <RouterLink to="/trending">Trending</RouterLink>
            <RouterLink to="/topRated">Top Rated</RouterLink>
            <RouterLink to="/upcoming">Upcoming</RouterLink>
        </div>
     </nav>
</template>

<style scoped>
    nav {
        width: 100%;
        background-color: #950740;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    .link-container {
        display: flex;
        justify-content: center;
        gap: 30px;
    }

    nav a {
        text-decoration: none;
        color: #f2f2f2;
    }

    nav a:hover {
        color: #1a1a1d;
    }
</style>