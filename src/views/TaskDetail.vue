<template>
    <h1>Task detail page</h1>
    <p>task id : {{ id }}</p>
    <router-link to="/">Kembali</router-link>
</template>

<script setup>
    import { useRoute } from 'vue-router';

    const route = useRoute()

    const id = route.params.id

</script>