<template>
  <div class = "container">
    <div class = "row-align-items-center">
      <div class = "col login-form">
        <h3>User Registration</h3>

        <form @submit.prevent="registerUser(registerForm)">
          <div class="mb-3"><input type="text" class="form-control" placeholder="First Name" v-model="registerForm.fname"></div>
          <div class="mb-3"><input type="text" class="form-control" placeholder="Last Name" v-model="registerForm.lname"></div>
          <div class="mb-3">
            <select class="form-select" aria-label="Default select example" placeholder="Gender" v-model="registerForm.gender">
              <option v-for="(item, index) in options" :key="item" :value="index">{{item}}</option>
            </select>
          </div>
          <div class="mb-3"><input type="text" class="form-control" placeholder="LisNum" v-model="registerForm.lisnum"></div>
          <div class="mb-3"><input type="email" class="form-control" placeholder="Email" v-model="registerForm.email"></div>
          <div class="mb-3"><input type="password" class="form-control" placeholder="Password" v-model="registerForm.pword"></div>
          <div class="mb-3"><button type="submit" class="btn btn-success">Submit</button></div>
          
        </form>

      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'pinia'
import { useStore } from '../stores/store.js'
export default {
  name: 'RegisterView',

  data() {
    return {
      
      registerForm: {
        fname: "",
        lname: "",
        gender:"",
        lisnum: "",
	      email: "",
	      pword: ""

      },

      options: {
        male:'Male',
        female: 'Female',
        pfs: 'Prefer not to Say'
      }

    }
  }, 

  methods: {
    ...mapActions(useStore, ['registerUser'])
  }
}
</script>

<style>

</style>