<template>
    <div>
        <span :style="{textDecoration: task.done ? 'line-through': 'none'}">{{ task.title }}</span>
        <button @click="$emit('toggle')">Toggle</button>
        <router-link :to="'/task/' + task.id">Detail</router-link>
    </div>
</template>
<script setup>
    const props = defineProps({
        task:Object
    })

    const emit = defineEmits(['toggle'])
</script>