<script setup>
import { useAuthStore } from '@/stores/auth';
import { onMounted, ref } from 'vue';


const auth = useAuthStore();

const _auth = ref(false)

// Handle Login 
const handleLogout = () => {
  auth.logout()
}

onMounted(() => {
  if (auth.authentication) {
    _auth.value = true
  }
})


</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">Home</RouterLink>
            <!-- <a class="nav-link active" href="#">Home</a> -->
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/about">About</RouterLink>
          </li>

          <li class="nav-item" v-if="!_auth">
            <RouterLink class="nav-link" to="/login">Login</RouterLink>
          </li>
          <li class="nav-item" v-else>
            <button class="btn nav-link" @click="handleLogout">Logout</button>
          </li>





        </ul>

      </div>
    </div>
  </nav>
</template>
