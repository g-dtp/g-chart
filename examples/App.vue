<template lang="pug">
	#app
		router-view
</template>

<script>
	export default {
		name: 'App'
	}
</script>

<style lang="stylus">
	@import "../node_modules/highlight.js/styles/color-brewer.css"
	#app
		font-family 'Avenir', Helvetica, Arial, sans-serif
		-webkit-font-smoothing antialiased
		-moz-osx-font-smoothing grayscale
		color #2c3e50
</style>
