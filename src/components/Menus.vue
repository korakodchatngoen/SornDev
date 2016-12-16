<template>
  <div id="app">
    <Navbar></Navbar>
    <banner2></banner2>
    <div class="menu">
      <div class="container">
        <div class="row">
            <div class="col-xs-6 col-md-4" v-for = "list in listplay">
              <router-link :to="{ name: 'showplay', params: { play:list.name }}">
              <a class="thumbnail" style="vertical-align: middle">
                <img :src="list.img" width="120">
              <h4>
                {{list.name}}
              </h4>
            </a>
            </router-link>
            </div>
        </div>
      </div>
    </div>
    <footers></footers>
  </div>
</template>

<script>
import Navbar from './Navbar'
import Banner2 from './Banner2'
import Footers from './Footers'
export default {
  props: ['listplay'],
  name: 'menus',
  components: {
    Navbar,
    Banner2,
    Footers
  },
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
