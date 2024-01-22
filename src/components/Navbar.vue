<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
     <nav>
        <div class="link-container">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
        </div>
        <div class="title">
            <h1><span>IMDb</span> Clone</h1>
        </div>
     </nav>
</template>

<style scoped>
nav {
    padding-top: 8px;
    padding-bottom: 8px;
    background-color: #1a1a1d;
    overflow: hidden;
}

nav a {
    float: left;
    color: #f2f2f2;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
}

nav a:hover {
  color: #950740;
}

.link-container {
    margin-left: 350px;
}

.title {
    float: right;
    margin-right: 350px;
    padding: 14px 16px;
}

.title h1 {
    font-size: 20px;
    color: #f2f2f2;
}

.title h1 span {
    font-weight: 500;
    background-color: orange;
    padding: 8px;
    border-radius: 8px;
}
</style>