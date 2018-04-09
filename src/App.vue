<template>
  <div id="app">
    <!--<img src="./assets/logo.png">
    <router-view/>-->
    <v-header></v-header>
    <!--<home></home>
    <about></about>
    <blog></blog>
    <life></life>-->
  </div>
</template>

<script>
import header from './components/Header'
import home from './components/Home'
import about from './components/About'
import contact from './components/Contact'


export default {
  name: 'App',
  components: {
    'v-header': header,
    'home': home,
    'about': about,
    'contact': contact
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
  height:100%;
 /* margin-top: 60px; */
}

*{
  /* background: #9478a2;*/
    margin:0;
    padding:0;
   
}

html, body {
  height:100%;
  /*background: #6688aa;*/
  background: #bbaaaa;

}

</style>
