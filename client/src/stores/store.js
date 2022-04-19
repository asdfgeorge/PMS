import { defineStore } from "pinia";

export const useStore = defineStore('auth', {
    state: () => {
        return { auth:false }
    }, 

    actions: {
        toggleAuth: {
            toogleAuth() {
                this.auth = !this.auth
            }
        }
    }
})