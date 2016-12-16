<template>
  <div id="app">
    <div class="footer">
      <div class="container">
        <div class="col-xs-12 col-md-12" style="padding-top:20px">
          <ul>SornDev</ul>
            <li><a href="#">Go Pro</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Contact</a></li>
          <hr>
          <p>SornDev © 2016</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
  font-weight: bold;
  font-size: 20px
}

li {
  display: inline-block;
  margin: 10px 5px;
  font-weight: bold;
  font-size: 15px
}

p{
  color: #8d9aa8;
}

a {
  text-decoration:none;
}

li.hover{
  color: #fff;
}

.footer{
  color: #8d9aa8;
  background-color: #1b1920;
  height: 180px;
}

</style>
