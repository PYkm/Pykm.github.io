<template>
	<div class="header">

	<div class="menu-list">
    <!--<a class="menu_button" @click="toggleMenuList"></a>-->
    <a class="logo" href="/_"></a>

    
  <!--<transition name="fade">
    <div class="list" v-show="list">-->
  <div class="list">
    <ul>
      <li v-for="(nav,index) in navs" :key="index">
        <router-link tag="a" :to="'/' + nav.name">{{nav.name}}</router-link>  
      </li>
    </ul>
  </div>
  <!--</div>
  </transition>-->
  
	</div>

	<router-view></router-view>

	</div>

</template>


<script>

export default {
  name: 'Header',
  list: false,
  data () {
    return {
    navs: [
      {name: 'Home'},
      {name: 'About'},
      {name: 'Contact'}
      /*,
      {name: 'Contact'}*/
    ],
    list: this.list,
    activeName: this.$route.path.slice(1,),
    }
  },
  methods: {
    toggleMenuList: function(){
      this.list = !this.list;      
    }
  }
}

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  height:90%;
}


.menu-list{
  width:100%;
  height:10%;
  min-height:58px;
}

.logo{
    position: absolute;
    width: 50px;
    height: 50px;
    background: url(../assets/logo.png) center center no-repeat;
    background-size: 50px;
    top: 8px;
    left: 12px;
}

.menu_button{
    position: absolute;
    width: 50px;
    height: 50px;
    background: url(../assets/menu.png) center center no-repeat;
    background-size: 50px;
    top: 5px;
    right: 5%;
    margin-left: -15px;

}

ul {
  list-style-type: none;
  padding: 10px;
  width:90%;
  float:right;
}
li {
  display: inline-block;
  margin: 10px 10px;
}
a {
  font-size:1em;
  font-weight:600;
  color: #ffffee;
  text-transform: uppercase;
  text-decoration: none;
}

ul li a:hover{
  color: #668855;
}

.router-link-active{
  color: #2c3e50;

}

#Home, #About, #Contact{
  margin:5% auto 0;
  /*height:90%;*/
  min-height: 532px;
  background: #ffffee;
  width:90%;    
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>