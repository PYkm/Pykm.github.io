<template>
	<div id="Home">
		<div class="content">
      <span class="line"></span>
      <h1>I strove with none,
      <br>for none was worth my strife;  
      <br>Nature I loved,
      <br>and next to Nature, Art;  
      <br>I warmed both hands before the fire of life;  
      <br>It sinks, 
      <br>and I am ready to depart.  </h1>
      <span class="line"></span>
  	</div>
	</div>
</template>



<script>

export default {
  name: 'Home',
  data () {
    return {

    }
  }
}
	
</script>


<style scoped>
	#Home{
    background: #ffffee;
    width:90%;    
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .content{
    height:100%;
    /*background: url(../assets/bg.jpg) center center no-repeat;*/
    background: #ffffee;
    display: flex;
    justify-content: center;
    align-items: center;
    /*flex-wrap: wrap;*/
    flex-direction: column;
  }
  /*
  .content p{
    color: #aa8877;
    font-weight: 600;
    font-size: 1.3em;
    text-align: left;
    padding: 5%;
    margin: 5%;
  }
  */
  .line{
    /*display: block;*/
    border-top: 3px #2c3e50 solid;
    margin: 30px auto;
    overflow: hidden;
    width: 40%;
    height: 4px;

  }
</style>