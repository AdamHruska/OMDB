<script setup>
import Card from 'primevue/card';
</script>

<template>
    <Card style="width: 17em; " class="border-round-md surface-0 mt-3">
    <template #header>
        <img alt="user header" src="https://cdn.sktorrent.eu/obrazky/650091379fa2b6e08ff441cbe129196d2cb8798f.jpg" class="border-round-top-md"/>
    </template>
    <template #title> Advanced Card </template>
    <template #subtitle>8.1/10</template>
    <template #footer>
        128 likes
    </template>
</Card>
</template>

<style scoped>
    img {
        width: 100%;
        height: auto;
    }
    * {
        cursor: pointer;
    }
</style>