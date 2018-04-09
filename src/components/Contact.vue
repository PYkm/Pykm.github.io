<template>
	<div id="Contact">
		<div class="content">
		<p>Hi, happy to see you in this page, if you want to communicate with me on something we both interested, you may send me an <a target="_blank" title="send me email" href="mailto:jennifer.chan3@hotmail.com">email</a>. </p>
		<p>You may <a target="_blank" title="follow me at Zcool" href="http://www.zcool.com.cn/u/2275669">follow me at Zcool</a>, Sometime I may upload some of my graffiti.</p>
		<p>I'm a Github User too. Here is my <a target="_blank" title="follow me at Github" href="https://github.com/pykm">personal page</a>.</p>

		<p>And My <a target="_blank" title="" href="https://pykm.github.io/Blog/">Blog</a> will be updated from time to time.</p>
  		</div>
	</div>
	
</template>



<script>
	
export default {
  name: 'Contact',
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