<template>
  <div id="app">
    <div v-for = "list in listplay">
    </div>
    <router-view :listplay="listplay"></router-view>
  </div>
</template>

<script>
// import Mains from './components/Mains'
// import Showplay from './components/Showplay'
// import Navbar from './components/Navbar'
// import Banner from './components/Banner'
// import Footers from './components/Footers'
import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyDjI8vU1Ej2jGsuXTKj26MKMSVIOU8nCYU',
  authDomain: 'project-c2a75.firebaseapp.com',
  databaseURL: 'https://project-c2a75.firebaseio.com',
  storageBucket: 'project-c2a75.appspot.com',
  messagingSenderId: '584449234491'
}
firebase.initializeApp(config)
var Listplay = firebase.database().ref('listplay')

export default {
  name: 'app',
  components: {
    // Mains,
    // Showplay,
    // Navbar,
    // Banner,
    // Footers
  },
  data () {
    return {
      listplay: [],
      test: []
    }
  },
  mounted () {
    var vm = this
    vm.$router.push('./mains')
    Listplay.on('child_added', function (data) {
      var item = data.val()
      item.id = data.key
      vm.listplay.push(item)
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
