<template>
    <div class="detail-container">
        <h1>Detail Tugas</h1>
        <div class="card">
            <p><strong>ID:</strong>{{ id }}</p>
            <p><strong>Judul:</strong>{{ task.title }}</p>
            <p><strong>Status:</strong>{{ task.done ? 'Selesai' : 'Belum Selesai' }}</p>
            <router-link to='/' class="btn-back">Kembali</router-link>
        </div>
    </div>
</template>

<script setup>
    import { useTasks } from '@/composables/useTasks';
import { useRoute } from 'vue-router';

    const route = useRoute()    

    const id = route.params.id

    const {tasks} =useTasks()

    const task = tasks.value.find(t => t.id == id)

</script>

<style scoped>
.detail-container {
  max-width: 600px;
  margin: 30px auto;
}

.card {
  background: white;
  border: 1px solid #e5e7eb;
  padding: 18px;
  border-radius: 8px;
}

.done {
  text-decoration: line-through;
  color: #999;
}

/* Tombol biru sama kayak style di TaskItem & Home */
.btn-back {
  display: inline-block;
  margin-top: 20px;
  padding: 8px 14px;
  background: #2563eb;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: 0.2s;
}

.btn-back:hover {
  background: #1d4ed8;
}
</style>