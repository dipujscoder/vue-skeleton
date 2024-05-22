// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import SetAuthToken from '@/utils/setToken'
import { jwtDecode } from 'jwt-decode'
import router from '@/router'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: '',
    user: null,
    error: {},
    authentication: true
  }),
  actions: {
    async login(data) {
      try {
        const respons = await axios.post('/v1/auth/login', data)

        const token = respons.data.token
        SetAuthToken(token)

        const user = jwtDecode(token)

        router.push('/')

        this.user = user
        this.token = token

        localStorage.setItem('token', token)
        localStorage.setItem('permissions', JSON.stringify(respons.data?.permissions))
      } catch (error) {
        console.log('error', error.respons.data)
      }
    },

    logout() {
      this.user = null
      this.token = ''
      this.authentication = false

      localStorage.removeItem('token')
      localStorage.removeItem('permissions')
    }
  }
})
