<template>
    <div>
        <div>
            <h3><slot name="header"/></h3>
            <slot/>
            <button @click="$emit('close')">Tutup</button>
        </div>
    </div>
</template>

<script setup>
    const emit = defineEmits(['close']);
</script>