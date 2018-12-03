<template lang="pug">
	#app
		.side
		router-view.content
</template>

<script>
	export default {
		name: 'App'
	}
</script>

<style lang="stylus">
	@import "../node_modules/highlight.js/styles/color-brewer.css"
	html
		height 100%
		font-family "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif
	body
		height 100%
		margin 0
	#app
		-webkit-font-smoothing antialiased
		-moz-osx-font-smoothing grayscale
		width 1140px
		margin 0 auto
		height 100%
		color #1f2f3d
		.side
			position fixed
			top 0
			height 100%
			width 240px
		.content
			box-sizing border-box
			padding-left 240px
			flex auto
			h1
				font-size 28px
				font-weight 400
				color #1f2f3d
			p
				font-size 14px
				color #5e6d82
				line-height 1.5em
</style>
