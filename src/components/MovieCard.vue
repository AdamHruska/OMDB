<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';
import Card from 'primevue/card';

const {imgPath, title, vote, id} = defineProps(['imgPath', 'title', 'vote', 'id'])

const router = useRouter();

const routeChange = () => {
    router.push({path: `/movie/${id}`})
}

</script>

<template>
    <Card style="width: 17em; height: 580px;" class="border-round-md surface-0 mt-3" @click="routeChange">
    <template #header>
        <img alt="user header" :src="'https://image.tmdb.org/t/p/w500/' + imgPath" class="border-round-top-md"/>
    </template>
    <template #title><span>{{ title }}</span></template>
    <template #subtitle>{{ vote.toFixed(2) }}/10</template>
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