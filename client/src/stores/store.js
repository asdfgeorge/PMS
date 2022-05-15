import { defineStore } from "pinia";

export const useStore = defineStore('auth', {
    state: () => ({
        auth: false
    }), 

    actions: {
        toggleAuth() {
            this.auth = !this.auth
            // console.log(this.auth)
        }
    }
})