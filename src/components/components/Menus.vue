<template>
  <div id="app">
    <div class="menu">
      <div class="container">
        <div class="row">
            <div class="col-xs-6 col-md-4">
              <a href="#!" class="thumbnail" style="vertical-align: middle">
                <img src="https://cdn.auth0.com/blog/react-js/react.png" width="120">
              <h4>
                React
              </h4>
            </a>
            </div>
            <div class="col-xs-6 col-md-4">
              <a href="#!" class="thumbnail" style="vertical-align: middle">
                <img src="http://www.w3devcampus.com/wp-content/uploads/logoAndOther/logo_JavaScript.png" width="120">
              <h4>
                JavaScript
              </h4>
            </a>
            </div>
            
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

h4{
  color:#555;
  text-decoration: none;
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
  text-decoration: none;
  font-weight: bold;
}

.title{
  margin-bottom: 50px;
}

.menu{
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
