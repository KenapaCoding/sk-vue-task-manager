<script setup></script>

<template>
  <header class="navbar">
    <h2 class="logo">Task Manager</h2>
    <nav class="nav-links">
      <router-link to="/" class="link">
        Home
      </router-link>
      <router-link to="/about" class="link">
        About
      </router-link>
    </nav>
  </header>
  <router-view/>
</template>

<style scoped>
  /* Navbar Container */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background: #1e293b; /* navy gelap */
  color: white;
  box-shadow: 0 2px 10px rgb(0 0 0 / 15%);
  border-radius: 0 0 10px 10px;
}

/* Logo */
.logo {
  margin: 0;
  font-size: 22px;
  font-weight: 600;
}

/* Link Container */
.nav-links {
  display: flex;
  gap: 18px;
}

/* Router Links */
.link {
  color: #cbd5e1;
  text-decoration: none;
  font-size: 16px;
  transition: 0.2s;
  padding: 6px 10px;
  border-radius: 6px;
}

.link:hover {
  background: #334155;
  color: white;
}

/* Active Link */
.router-link-active {
  background: #475569;
  color: white !important;
  border-radius: 6px;
  padding: 6px 10px;
}

/* Content Container */
.container {
  padding: 24px;
  max-width: 800px;
  margin: 0 auto;
}
</style>
