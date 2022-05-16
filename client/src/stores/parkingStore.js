import { defineStore } from "pinia";
import axios from 'axios'

export const useStore = defineStore('auth', {
    state: () => ({
        backend: axios.create({
            baseURL: 'http://localhost:5018',
            timeout: 1000,
            headers: {'Access-Control-Allow-Origin': '*'}
          }),

          parkingSpaces: []
    }),

    
})
