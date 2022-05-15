import { defineStore } from "pinia";
import axios from 'axios'

export const useStore = defineStore('auth', {
    state: () => ({
        auth: false,
        backend: axios.create({
            baseURL: 'http://localhost:5018',
            timeout: 1000,
            headers: {'Access-Control-Allow-Origin': '*'}
          }),
        //   user: null
    }), 

    actions: {
        toggleAuth() {
            this.auth = !this.auth
            // console.log(this.auth)
        },

        async getAllUsers() {
            const res = await this.backend.get('/user')
            console.log(res.data);
        },

        // async loginUser(loginForm) {
        //     res = await this.backend.post('/auth/login', loginForm)

        //     console.log(res)
        // }
    }
})