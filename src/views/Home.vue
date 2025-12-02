<template>
   <div>
     <h1>Home Page</h1>

     <!-- input untuk pencarian tugas -->
      <input type="text" v-model="search" placeholder='Cari tugas . . .'>

     <!-- button untuk show modal -->
      <button @click="showModal = true">Tambah tugas</button>
    
      <!-- Conditional rendering untuk modal berdasarkan value showModal -->
       <Modal v-if="showModal" @close="showModal= false">
            <template #header>Tambah task baru</template>
            <input type="text" v-model="newTask" placeholder='tambahkan tugas'>
            <button @click="handleAdd">Simpan</button>
       </Modal>

    <!-- list rendering filtered -->
     <div v-for="task in filtered" :key="task.id">
        <TaskItem :task="task" @toggle="task.done = !task.done"/>
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