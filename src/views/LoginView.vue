<script setup>
import router from '@/router';
import { useAuthStore } from '@/stores/auth';
import { onMounted, ref } from 'vue'

const auth = useAuthStore();

const message = ref('Login')

const email = ref('sa@mdndevs.com')
const password = ref('abc@123')


// Hangle Login 
const handleLogin = async (e) => {
    e.preventDefault();

    const data = {
        email: email.value,
        password: password.value
    }

    auth.login(data);
}


onMounted(() => {
    if (auth.authentication) {
        router.push('/')
    }
})

</script>

<template>
    <section class="py-5 my-5">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header bg-primary">
                            <h1 class="text-white">{{ message }}</h1>
                        </div>
                        <div class="card-body">
                            <form action="">
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="email" placeholder="name@example.com"
                                        v-model="email" />
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="password" v-model="password"
                                        placeholder="Type Password" />
                                </div>
                                <div class="mb-3">
                                    <button class="btn btn-primary" @click="handleLogin">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
