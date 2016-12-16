<template>
  <div id="app">
    <div class="banner">
      <div class="container">
          <h1>Video tutorials for badass web developers</h1>
          <p>Learn the latest frameworks from industry pros</p>
      </div>
    </div>
    <div class="search">
      <div class="container" style="padding-top:45px;padding-left:300px;padding-right:300px">
          <div id="custom-search-input" class="col-md-12" >
            <div class="input-group col-md-12">
              <input type="text" class="form-control input-lg" placeholder="search for courses" />
                <span class="input-group-btn">
                  <button class="btn btn-info btn-lg" type="submit">
                    <i class="glyphicon glyphicon-search"></i>
                  </button>
                </span>
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
  color:#fff;
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
  background-color: #42494b;
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

.search{
  height: 150px;
  background-color: #ededed;
}

#custom-search-input{
  padding: 3px;
  border: solid 1px #E4E4E4;
  border-radius: 6px;
  background-color: #fff;
}

#custom-search-input input{
    border: 0;
    box-shadow: none;
}

#custom-search-input button{
    margin: 2px 0 0 0;
    background: none;
    box-shadow: none;
    border: 0;
    color: #666666;
    padding: 0 8px 0 10px;
    border-left: solid 1px #ccc;
}

#custom-search-input button:hover{
    border: 0;
    box-shadow: none;
    border-left: solid 1px #ccc;
}

#custom-search-input .glyphicon-search{
    font-size: 23px;
}



</style>
