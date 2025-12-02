<template>
    <div class="about-container">
        <h1>Tentang Aplikasi</h1>
        <div class="card">
            <p>Task Manager sederhana, untuk mengelola daftar tugas. Aplikasi ini dibuat untuk study kasus pembelajaran Vue.js dengan materi :</p>
            <ul>
                <li>Reactive State</li>
                <li>Attribute binding dan Interpolation</li>
                <li>Watch dan Computed Property</li>
                <li>Props, emit, slot</li>
                <li>Composables</li>
                <li>Lifecyle hooks</li>
                <li>Vue router, dll</li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.about-container {
  max-width: 600px;
  margin: 30px auto;
}

h1 {
  margin-bottom: 15px;
}

.card {
  background: white;
  border: 1px solid #e5e7eb;
  padding: 16px;
  border-radius: 8px;
  line-height: 1.7;
}

.card ul {
  padding-left: 20px;
  margin-top: 10px;
}
</style>