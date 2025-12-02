<template>
    <Teleport to='body'>
        <div @click.self="$emit('close')" class="modal-overlay">
            <div class="modal-box">
                <h3 class="modal-title"><slot name="header"/></h3>
                <div class="modal-body">
                    <slot/>
                </div>
                <button class="btn-close" @click="$emit('close')">Tutup</button>
            </div>
        </div>
    </Teleport>
</template>

<script setup>
    const emit = defineEmits(['close']);
</script>

<style scoped>
    /* Overlay gelap */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.45);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
}

/* Kotak modal */
.modal-box {
  background: white;
  padding: 20px;
  width: 320px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  animation: fadeSlide 0.25s ease;
}

/* Animasi modal muncul */
@keyframes fadeSlide {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Judul modal */
.modal-title {
  margin-bottom: 12px;
  font-size: 18px;
}

/* Body konten modal */
.modal-body {
  margin-bottom: 16px;
}

/* Tombol close – seragam dengan TaskItem & TaskDetail */
.btn-close {
  background: #2563eb;
  color: white;
  padding: 8px 14px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: 0.2s;
  width: 100%;
}

.btn-close:hover {
  background: #1d4ed8;
}
</style>