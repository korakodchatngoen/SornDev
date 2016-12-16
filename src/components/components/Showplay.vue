<template>
  <div id="app">
  <div class="play">
    <div class="container">
        <div class="col-md-12" style="height:478px;overflow: hidden;">
          <div class="col-xs-12 col-md-9" style="padding:0px">
            <div class="embed-responsive embed-responsive-16by9" style="border:5px solid #555">
              <iframe class="embed-responsive-item" src='http://www.youtube.com/embed/RCMXO9sBIcU' frameborder="0" allowfullscreen ></iframe>
            </div>
          </div>
          <div class="col-xs-12 col-md-3 scrollbar" id="style-1">
            <a href="#" class="list">
              <div class="img">
                <strong>1&nbsp;</strong>
                <img class="pull-left" src="https://cdn.auth0.com/blog/react-js/react.png" width="50px">
                <strong style="text-align:left">Use create-react-app to Setup a Simple React App</strong>
              </div>
            </a>
            <a href="#" class="list">
              <div class="img">
                <strong>2&nbsp;</strong>
                <img class="pull-left" src="https://cdn.auth0.com/blog/react-js/react.png" width="50px">
                <strong style="text-align:left">Write a "Hello World" React Component</strong>
              </div>
            </a>
            <a href="#" class="list">
              <div class="img">
                <strong>3&nbsp;</strong>
                <img class="pull-left" src="https://cdn.auth0.com/blog/react-js/react.png" width="50px">
                <strong style="text-align:left">Display Output in React with a Component's render Method</strong>
              </div>
            </a>
            <a href="#" class="list">
              <div class="img">
                <strong>4&nbsp;</strong>
                <img class="pull-left" src="https://cdn.auth0.com/blog/react-js/react.png" width="50px">
                <strong style="text-align:left">Set Properties on React Components</strong>
              </div>
            </a>
            <a href="#" class="list">
              <div class="img">
                <strong>5&nbsp;</strong>
                <img class="pull-left" src="https://cdn.auth0.com/blog/react-js/react.png" width="50px">
                <strong style="text-align:left">Manage React Component State with setState</strong>
              </div>
            </a>
            <a href="#" class="list">
              <div class="img">
                <strong>6&nbsp;</strong>
                <img class="pull-left" src="https://cdn.auth0.com/blog/react-js/react.png" width="50px">
                <strong style="text-align:left">Use React Components as Children for Other Components</strong>
              </div>
            </a>
          </div>
        </div>
    </div>
  </div>
  <!-- <div class="course">
    <div class="container">
      <h3>Recommended Course<h3>
      <div class="row">
          <div class="col-xs-4 col-md-4">
            <a href="#!" class="thumbnail" style="vertical-align: middle">
              <img src="https://cdn.auth0.com/blog/react-js/react.png" width="120">
            <h4>
              React
            </h4>
          </a>
          </div>
          <div class="col-xs-4 col-md-4">
            <a href="#!" class="thumbnail" style="vertical-align: middle">
              <img src="http://www.w3devcampus.com/wp-content/uploads/logoAndOther/logo_JavaScript.png" width="120">
            <h4>
              JavaScript
            </h4>
          </a>
          </div>
          <div class="col-xs-4 col-md-4">
            <a href="#!" class="thumbnail" style="vertical-align: middle">
              <img src="http://drupal.sh/sites/default/files/styles/large/public/2016-06/angular.png?itok=OAeCV0KX" width="120">
            <h4>
              Angular 2
            </h4>
          </a>
          </div>
      </div>
    </div>
  </div> -->
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
  color: #555;
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
  color: #fff;
}

.play{
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: #1b1920;
}

.playlist{
  border: 2px solid #555;
  height: 420px;
}

.list{
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 10px;
  border-bottom: 5px solid #222;
  margin-right: 1px;
  display: block;
}
.img{
  padding: 0;
  display: flex;
  align-items: center;
}
.list:hover{
  background-color: #777;
  text-decoration: none;
}

.list:active,
.list:focus{
  text-decoration:none;
  border:1px solid #FFFF00;
  background-color: #323232;
}

.course{
  margin-top: 20px;
}

.scrollbar
{
	overflow-y: scroll;
	margin-bottom: 25px;
  background-color:#252525;
  padding:0px;
  border-top:5px solid #555;
  border-bottom:5px solid #555;
  border-right:5px solid #555;
  height:478px;
}

#style-1::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #252525;
}

#style-1::-webkit-scrollbar
{
	width: 12px;
	background-color: #252525;
}

#style-1::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #9a9a9a;
}


</style>
