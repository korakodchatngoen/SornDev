<template>
  <nav class="navbar navbar-default navbar-fixed-top">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <router-link to = "/mains">
      <a class="navbar-brand" href="#">SornDev</a>
    </router-link>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <router-link to = "/menus">
      <ul class="nav navbar-nav">
        <li><a href="#">Courses</a></li>
      </ul>
      </router-link>
      <ul class="nav navbar-nav navbar-right">
        <form class="navbar-form navbar-left">
          <!-- <div class="form-group">
            <input type="text" class="form-control" placeholder="Search">
          </div>
          <button type="submit" class="btn btn-default">Search</button> -->
        </form>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
</template>

<script>
import Navbar from './Navbar'

export default {
  components: {
    Navbar
  }
}
</script>

<style>
.navbar{
  background-color: #1b1920;
  border: 0px solid #000;
}
</style>
