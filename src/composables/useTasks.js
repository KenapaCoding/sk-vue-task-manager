import { ref, computed, watch } from "vue";


export function useTasks(){
    const tasks = ref([
        { id: 1, title: "Belajar Vue", done: false },
        { id: 2, title: "Buat Project", done: true },
    ])

    const search = ref("")

    const filtered = computed(() => {
        return tasks.value.filter( t => 
            t.title.toLowerCase().includes(search.value.toLowerCase()))
    })

    watch(search, () => {
        console.log("Pencarian task berubah: ", search.value.toLowerCase())
    })

    function addTask(title){
        tasks.value.push({
            id: Date.now(),
            title,
            done: false
        })
    }

    return {tasks, search, filtered, addTask}
}