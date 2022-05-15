<template>
  <div class = "container">
    <div class = "row-align-items-center">
      <div class = "col login-form">
        <h3>User Registration</h3>

        <form>
          <div class="mb-3"><input type="text" class="form-control" placeholder="First Name"></div>
          <div class="mb-3"><input type="text" class="form-control" placeholder="Last Name"></div>
          <div class="mb-3"><input type="text" class="form-control" placeholder="Gender"></div>
          <div class="mb-3"><input type="text" placeholder="License number"></div>
          <div class="mb-3"><input type="email" class="form-control" placeholder="Email"></div>
          <div class="mb-3"><input type="password" class="form-control" placeholder="Password"></div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterView',
}
</script>

<style>

</style>