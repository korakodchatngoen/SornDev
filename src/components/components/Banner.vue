<template>
  <div id="app">
    <div class="banner">
      <div class="container">
        <div class="banner">
          <h1 class="banner_h1">Video tutorials for badass web developers</h1>
          <p class="banner_p">Learn the latest frameworks from industry pros</p>
          <a href="#"><button class="btn btn-danger" style="padding:15px"><strong>PICK A COURSE TO WATCH</strong></button></a>
        </div>
      </div>
    </div>
    <div class="army-chevron"></div>
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
  padding-top: 50px;
  padding-bottom: 50px;
}

h1.banner_h1{
  color:#fff;
  font-weight: 700;
  font-size: 70px;
  padding-bottom: 50px;
}

p.banner_p{
  color:#fff;
  font-weight: 100;
  font-size: 30px;
  padding-bottom: 30px;
}

.army-chevron {
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  width: 100%;
  height: 150px;
  position: relative;
  margin-top:-100px;
  padding-top: 5px;
  border: none;
  font: normal 100%/normal Arial, Helvetica, sans-serif;
  color: #1b1920;
  text-align: center;
  -o-text-overflow: clip;
  text-overflow: clip;
}

.army-chevron::before {
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  width: 50%;
  height: 100%;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  border: none;
  font: normal 100%/normal Arial, Helvetica, sans-serif;
  color: #1b1920;
  -o-text-overflow: clip;
  text-overflow: clip;
  background: #1b1920;
  text-shadow: none;
  -webkit-transform:    skewY(6deg);
  transform:    skewY(6deg);
}

.army-chevron::after {
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  width: 50%;
  height: 100%;
  position: absolute;
  content: "";
  top: 0;
  right: 0;
  border: none;
  font: normal 100%/normal Arial, Helvetica, sans-serif;
  color: #1b1920;
  -o-text-overflow: clip;
  text-overflow: clip;
  background: #1b1920;
  text-shadow: none;
  -webkit-transform:    skewY(-6deg);
  transform:    skewY(-6deg);
}



</style>
