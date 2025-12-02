<template>
    <div class="item" @click="$emit('toggle')">
        <span :style="{textDecoration: task.done ? 'line-through': 'none'}">{{ task.title }}</span>
        <router-link :to="'/task/' + task.id">Detail</router-link>
    </div>
</template>
<script setup>
    const props = defineProps({
        task:Object
    })

    const emit = defineEmits(['toggle']);
</script>

<style scoped>
.item {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
</style>