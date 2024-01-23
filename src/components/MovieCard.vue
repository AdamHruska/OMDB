<script setup>
import { defineProps } from 'vue';
import Card from 'primevue/card';

const {imgPath, title} = defineProps(['imgPath', 'title'])
</script>

<template>
    <Card style="width: 17em; height: 580px;" class="border-round-md surface-0 mt-3">
    <template #header>
        <img alt="user header" :src="'https://image.tmdb.org/t/p/w500/' + imgPath" class="border-round-top-md"/>
    </template>
    <template #title><span>{{ title }}</span></template>
    <template #subtitle>8.1/10</template>
    <template #footer>128 likes</template>
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
    span {
        font-size: 1.2rem;
    }
    #title {
        padding-top: 0;
    }
</style>