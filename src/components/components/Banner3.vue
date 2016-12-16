<template>
  <div id="app">
    <div class="banner">
      <div class="container">
        <div class="title col-md-12">
          <img class="pull-left" src="https://cdn.auth0.com/blog/react-js/react.png" width="65px">
          <h1>&nbsp;Reach</h1>
          <hr>
          <p>Lots of people use React as the V in MVC. Since React makes no assumptions about the rest of your technology stack, it's easy to try it out on a small feature in an existing project.</p>
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
  color:#fff;
}

p{
  font-weight: normal;
  text-align: left;
  font-size: 16px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}


.banner{
  background-color: #1b1920;
  margin-top:50px;
  padding-top: 20px;
  padding-bottom: 40px;

}

h1.banner_h1{
  color:#fff;
  font-weight: 700;
  font-size: 70px;
  padding-bottom: 50px;
}

p{
  color:#fff;
}

.title{
  display: inline-block;
  text-align: left;
  vertical-align: middle;
}



</style>
