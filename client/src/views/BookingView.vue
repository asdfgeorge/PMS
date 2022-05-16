<template>

  <div>
  <h1 class="d-flex justify-content-center p-4">This is the booking view</h1>
  
  
  <section class="w-100 p-4 d-flex justify-content-center pb-4 flex-column">
  <h2>Bookings For you:</h2>
  <br>

  <!--    List all bookings owned by user -->
    <ul>
      <li>
        <h3>Parking Space Name</h3>
        <p>At: 01/01/2022 18:21</p>
        <p>To: 01/01/2022 21:21</p>

        <!--   Conditionally format so only check in / check out / pay is displayed  -->
        <!--   Display Pay if has both checkout and checkin time  -->
        <!--   Display check out if has checkin time -->
        <!--  Else display check in -->
        <div class="mb-3"><button type="button" class="btn btn-primary">Check in</button></div>
        <div class="mb-3"><button type="button" class="btn btn-warning">Check out</button></div>
        <div class="mb-3"><button type="button" class="btn btn-success">Pay</button></div>
        <div class="mb-3"><button type="button" class="btn btn-danger">Delete</button></div>
      </li>
    </ul>
  </section>


  <section class="w-100 p-4 d-flex justify-content-center pb-4 flex-column">
      <h2>Booking Form</h2>
      <br>
      <form v-on:submit="submitBookingForm" style="width: 22rem;">
        
        <div class="form-outline mb-4">
          <label class="form-label" for="form2Example1" style="margin-left: 0px;">CheckInBookedTime</label>
          <input type="datetime-local" id="form2Example1" class="form-control" v-model="createForm.checkInTime">
        <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 97.6px;"></div><div class="form-notch-trailing"></div></div></div>

        <div class="form-outline mb-4">
          <label class="form-label" for="form2Example2" style="margin-left: 0px;">CheckOutBookedTime</label>
          <input type="datetime-local" id="form2Example2" class="form-control" v-model="createForm.checkOutTime">
        <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 68px;"></div><div class="form-notch-trailing"></div></div></div>

        <div class="form-outline mb-4">
          <label class="form-label" for="form2Example2" style="margin-left: 0px;">ParkingSpaceId</label>
          <input type="text" id="form2Example2" class="form-control">
          <select name="cars" id="cars" class="form-control">
            <option value="saab">Parking Place 1</option>
          </select>
        <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 68px;"></div><div class="form-notch-trailing"></div></div></div>


        <!-- Submit button -->
        <button type="submit" class="btn btn-primary btn-block mb-4">Create Booking</button>
      </form>
    </section>

    <section class="w-100 p-4 d-flex justify-content-center pb-4">
      <ul> 
        <li></li>
      </ul>
    </section>
    </div>

</template>

<script>
import { mapActions } from 'pinia'
import { useStore } from '../stores/store.js'


export default {


  data() {

    return {
      createForm: {
        checkInTime: '',
        checkOutTime: '',
        parkingSpaceId: ''
      }
    }
  },

  methods: {
    ...mapActions(useStore, ['loginUser'])
  }

}
</script>

<style>

</style>