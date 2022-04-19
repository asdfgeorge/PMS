<template>
  <div class="container">
    <div class="row align-items-center">
      <div class="col">
        <h1>Welcome to ✨OnlyBays✨</h1>
        <h3>This project stemmed from our deep hatred of never knowing where to park</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima eius ad delectus tempore in non recusandae praesentium, odit doloribus eveniet omnis dolorem molestiae ipsam soluta voluptas mollitia amet beatae dolores.</p> 
      </div>
      
      <div class="col login-form">
        <h3>Login Here</h3>
        <form>
          <div class="mb-3"><input type="email" class="form-control" placeholder="Email"></div>
          <div class="mb-3"><input type="password" class="form-control" placeholder="Password"></div>
          <div class="mb-3"><button type="submit" class="btn btn-primary">Submit</button></div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import 'bootstrap/dist/css/bootstrap-grid.css'

export default {
  name: 'HomeView',
}
</script>

<style>

</style>
