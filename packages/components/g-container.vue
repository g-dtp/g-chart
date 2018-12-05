<template lang='pug'>
	.g-container
		slot
		i.corner.top-left
		i.corner.top-right
		i.corner.bottom-left
		i.corner.bottom-right

</template>

<script>
	export default {
		name: "g-container",
	}
</script>

<style lang="stylus" scoped>
	.g-container
		position relative
		min-height 20px
		min-width 20px
		background rgba(26,103,232,0.10)
		box-shadow 0 0 5px rgba(0,0,0,.2)
		.corner
			position absolute
			display block
			border-color #52B8DF
			border-style solid
			height 14px
			width 14px
			&.top-left
				border-width 2px 0 0 2px
				top 0
				left 0
			&.top-right
				border-width 2px 2px 0 0
				top 0
				right 0
			&.bottom-left
				border-width 0 0 2px 2px
				bottom 0
				left 0
			&.bottom-right
				border-width 0 2px 2px 0px
				bottom 0
				right 0
</style>
