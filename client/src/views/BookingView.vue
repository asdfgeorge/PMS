<template>
  <h1>This is the booking view</h1>
  
  <section class="w-100 p-4 d-flex justify-content-center pb-4">
  <h2>Booking Form</h2>
      <form v-on:submit="submitBookingForm" style="width: 22rem;">
        
        <div class="form-outline mb-4">
          <label class="form-label" for="form2Example1" style="margin-left: 0px;">CheckInBookedTime</label>
          <input type="date" id="form2Example1" class="form-control" v-model="createForm.checkInTime">
        <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 97.6px;"></div><div class="form-notch-trailing"></div></div></div>

        <div class="form-outline mb-4">
          <label class="form-label" for="form2Example2" style="margin-left: 0px;">CheckOutBookedTime</label>
          <input type="date" id="form2Example2" class="form-control" v-model="createForm.checkOutTime">
        <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 68px;"></div><div class="form-notch-trailing"></div></div></div>

        <div class="form-outline mb-4">
          <label class="form-label" for="form2Example2" style="margin-left: 0px;">ParkingSpaceId</label>
          <input type="text" id="form2Example2" class="form-control">
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


</template>

<script>
export default {


  data() {

    return {
      createForm: {
        checkInTime: '',
        checkOutTime: '',
        parkingSpaceId: ''
      }
    }
  }

}
</script>

<style>

</style>