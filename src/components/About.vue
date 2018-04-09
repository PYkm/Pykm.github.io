<template>
	<div id="About">
		<div class="content">		
      		<h2>Hi~ This is Jennifer Chan</h2>
      		<p>I like to spend my time to learn language, read books and talk or play with my family. I really enjoy the time with my family. But I also like to stay alone sometime. </p><p>I was grown in a small town in westnorth China. I would like to stay outside if I was in my hometown. The extensice space make me feel free. I think that may be why I like the natural. </p>
      		<p>I am working in Shanghai right now.</p>
      		<p>If you want to know me more, welcome to check my <a href="https://pykm.github.io/Blog/">Blog</a>.
      		</p>
  		</div>
  		<div class="avator">
  			
  		</div>
		
	</div>
	
</template>

<script>
	
export default {
  name: 'About',
  data () {
    return {

    }
  }
}
	
</script>


<style scoped>
.content{
	padding: 10%;
}
.content h2{
	padding:2%;
	border-bottom: dashed 2px;
}

.content p{
	font-size:1.3em;
	text-align: left;
	margin-top: 2%;
}

.content a{
	color: #bbaaaa;
    text-decoration: none;
}

.content a:hover, .content a:visited{
	color: #ccaaaa;
    text-decoration: none;
}
</style>