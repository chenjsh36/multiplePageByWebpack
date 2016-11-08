<template>
	<div id="app">
		<p> welcome {{title}}</p>
	</div>
</template>

<script>
export default {
	name: 'part',
	data() {
		return {
			title: '海河大数据'
		}
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
	margin-top: 60px;
}
 
body {
	background-color: gray;
}
</style>
