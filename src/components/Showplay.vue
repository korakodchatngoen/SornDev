<template>
  <div id="app">
    <Navbar></Navbar>
    <banner3 :play="play"></banner3>
    <div class="play">
      <div class="container">
          <div class="col-md-12" style="height:478px;overflow: hidden;">
            <div class="col-xs-12 col-md-9" style="padding:0px">
              <div class="embed-responsive embed-responsive-16by9" style="border:5px solid #555">
                <iframe class="embed-responsive-item" :src="'http://www.youtube.com/embed/'+ link + '?autoplay=1'"  frameborder="0" allowfullscreen ></iframe>
              </div>
            </div>
            <div class="col-xs-12 col-md-3 scrollbar" id="style-1">
              <div v-for ="(list, index) in play.list" @click = "setlink(list.link)">
              <a class="list">
                <div class="img">
                  <strong>{{index+1}}&nbsp;</strong>
                  <img class="pull-left" :src="play.img" width="50px">
                  <strong style="text-align:left">{{list.ep}}</strong>
                </div>
              </a>
            </div>
            </div>
          </div>
      </div>
    </div>
    <footers></footers>
  </div>
</template>

<script>
window.onbeforeunload = function () {
  console.log('gg')
  window.location.assign('http://www.w3schools.com')
  // vm.$router.push('./mains')
}
import Navbar from './Navbar'
import Banner3 from './Banner3'
import Footers from './Footers'
export default {
  props: ['listplay'],
  name: 'showplay',
  components: {
    Navbar,
    Banner3,
    Footers
  },
  computed: {
    play () {
      let vm = this
      return vm.listplay.find(item => item.name === vm.$route.params.play)
    }
  },
  data () {
    return {
      link: ''
    }
  },
  mounted () {
    // var vm = this
    this.link = this.play.list[0].link
    let vm = this
    return vm.listplay.find(item => item.name === vm.$route.params.play)
  },
  methods: {
    setlink (link) {
      this.link = link
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
