<template>
   <div class="home">
     <h1>Home Page</h1>

     <!-- input untuk pencarian tugas -->
      <input class="search-input" type="text" v-model="search" placeholder='Cari tugas . . .'>

     <!-- button untuk show modal -->
      <button class="add-btn" @click="showModal = true">Tambah tugas</button>
    
      <!-- Conditional rendering untuk modal berdasarkan value showModal -->
       <Modal v-if="showModal" @close="showModal= false">
            <template #header>Tambah task baru</template>
            <input class="modal-input" type="text" v-model="newTask" placeholder='tambahkan tugas'>
            <button class="save-btn" @click="handleAdd">Simpan</button>
       </Modal>

    <!-- list rendering filtered -->
     <div class="task-list">
         <div class="task-item" :class="{done: task.done}" v-for="task in filtered" :key="task.id">
            <TaskItem :task="task" @toggle="task.done = !task.done"/>
         </div>
     </div>
   </div>
</template>

<script setup>
    import TaskItem from '@/components/TaskItem.vue';
    import { useTasks } from '@/composables/useTasks';
    import Modal from '@/components/Modal.vue';
    import { ref } from 'vue';

    const {tasks, search,filtered,addTask} = useTasks()

    const showModal = ref(false);
    const newTask = ref('');

    function handleAdd(){
        if(!newTask.value) return 
        addTask(newTask.value)
        newTask.value = ''
        showModal.value = false
    }
</script>


<style scoped>
/* Container */
.home {
  max-width: 600px;
  margin: 40px auto;
  padding: 0 20px;
}

/* Title */
h1 {
  font-size: 28px;
  margin-bottom: 20px;
  font-weight: 700;
  color: #1e293b;
}

/* Search Input */
.search-input {
  width: 100%;
  padding: 11px 14px;
  border-radius: 8px;
  border: 1px solid #cbd5e1;
  margin-bottom: 16px;
  font-size: 15px;
  transition: 0.2s ease;
}

.search-input:focus {
  outline: none;
  border-color: #475569;
  box-shadow: 0 0 0 2px rgba(71, 85, 105, 0.3);
}

/* Add button */
.add-btn {
  padding: 10px 18px;
  background: #0f172a;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 15px;
  margin-bottom: 20px;
  transition: 0.2s ease;
}

.add-btn:hover {
  background: #334155;
}

/* Modal input */
.modal-input {
  width: 100%;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #cbd5e1;
  margin-bottom: 14px;
  font-size: 15px;
}

.save-btn {
  padding: 10px 18px;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.save-btn:hover {
  background: #1d4ed8;
}

/* LIST */
.task-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* ITEM */
.task-item {
  background: #f8fafc;
  padding: 14px;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  transition: 0.2s;
}

/* Kalau selesai */
.done {
  background: #e2e8f0;
  color: #64748b;
  text-decoration: line-through;
}
</style>