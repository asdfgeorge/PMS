import { defineStore } from "pinia";
import axios from 'axios'

export const useStore = defineStore('auth', {
    state: () => ({
        // auth: false,
        backend: axios.create({
            baseURL: 'http://localhost:5018',
            timeout: 1000,
            headers: {'Access-Control-Allow-Origin': '*'}
          }),
          user: null,
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

        async loginUser(loginForm) {
            
            const res = await this.backend.post('/auth/login', {
                email: loginForm.email,
                pword: loginForm.pword
            })

            if (res.status === 200) {
                this.user = res.data
            }
        },

        logout() {
            this.user = null
        }, 

        async registerUser(registerForm) {
            
            const res = await this.backend.post('/auth/register', {
                fname: registerForm.fname,
                lname: registerForm.lname,
                gender: registerForm.gender,
                lisnum: registerForm.lisnum,
                email: registerForm.email,
                pword: registerForm.pword,
            })

            if (res.status === 201) {
                this.router.push('/')
            }
            
        },

        async getUserBookings() {
            
            const id = this.user._id

            const res = await this.backend.get(`/for/${id}`)

            console.log(res)
        },

        async submitBookingForm(bookingForm) {
            
            const res = await this.backend.post('/booking', {
                userId: this.user._id,
                parkingSpaceId: bookingForm.parkingSpaceId,
                CheckInTime: bookingForm.checkin,
                CheckOutTime: bookingForm.checkout,
            })

            console.log(res)            
        }
    },

    computed: {

    }
})