<template>
  <div id="app">
    <Navbar></Navbar>
    <banner></banner>
    <div class="container" style="margin-top:150px;margin-bottom:100px">
      <div class="title">
        <h1><strong>The insider’s guide to cutting-edge<br>front-end tools and frameworks</strong></h1>
      </div>
      <div class="row">
          <div class="col-xs-6 col-md-2" v-for = "(list, index) in listplay" v-show="index<6">
            <router-link :to="{ name: 'showplay', params: { play:list.name }}">
            <a href="#!" class="thumbnail" style="vertical-align: middle">
              <img class="menu" :src="list.img" width="120">
            <h4>
              {{list.name}}
            </h4>
          </a>
          </router-link>
          </div>
      </div>
    </div>
    <footers></footers>
  </div>
</template>

<script>
import Navbar from './Navbar'
import Banner from './Banner'
import Footers from './Footers'
export default {
  props: ['listplay'],
  components: {
    Navbar,
    Banner,
    Footers
  },
  data () {
    return {
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

.title{
  margin-bottom: 50px;
}
</style>
