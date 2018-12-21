<template lang='pug'>
	.g-option
		slot
			span {{option[label]}}
</template>

<script>
	export default {
		name: "g-option",
		props: {
			label:{
				type: String,
				default: 'label'
			},
			option: {
				type: Object,
				default: function () {
					return {}
				}
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.g-option
		font-size 14px
		line-height 30px
		cursor pointer
		height 30px
		padding 0 10px
		&:hover
			background-color rgba(0, 22, 56, .8)
		&.current
			background-color rgba(0, 22, 56, .8)
</style>
