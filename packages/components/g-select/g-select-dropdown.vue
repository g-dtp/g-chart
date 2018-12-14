<template lang='pug'>
	transition
		.select-dropdown(:style="style" :class="[position]")
			slot
</template>

<script>
	export default {
		name: "select-dropdown",
		inject: ['select'],
		props: {
			position: {
				type: String,
				default: 'bottom'
			}
		},
		data(){
			return {
				style:{}
			}
		},
		mounted() {
			console.log( document.body.scrollTop)
			this.style = {
				left: 0,
				top: this.position == 'bottom' ? (this.select.$el.offsetHeight) +'px'  : 'auto',
			}
			console.log(this.style)
		}
	}
</script>

<style lang="stylus" scoped>
	.select-dropdown
		color inherit
		position absolute
		min-width 100px
		max-width 300px
		min-height 100px
</style>
