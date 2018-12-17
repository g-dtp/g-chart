<template lang='pug'>
	.g-select-dropdown(:style="styleObj" :class="[position]" @click.stop="stop" @mousedown.stop="stop")
		.g-select-dropdown__warp.g-select-dropdown__list
			g-option(v-for="item in data" :key="item.value" @click.stop.native="onItem(item)" :option="item")
</template>

<script>
	import BaseWrapper from '../utils/popup/base-wrapper'
	import GOption from './g-option'
	export default {
		name: "select-dropdown",
		inject:['select'],
		components: {GOption},
		extends: BaseWrapper,
		props: {
			position: String
		},
		data() {
			return {
			}
		},
		computed: {
			styleObj() {
				let rect = this.select.$el.getBoundingClientRect()
				let h = rect.x < 100 ? 'left' : 'right'
				let v = rect.y < 100 ? 'bottom' : 'top'
				return {
					top: rect.bottom + 'px',
					left: rect.left + 'px',
					bottom: 'auto'
				}
			}
		},
		methods: {
			onItem (item) {
				this.select.onChange(item)
			},
			stop (e) {
				e.stopPropagation()
				e.preventDefault()
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.g-select-dropdown
		position fixed
		background-color: #003173
		color #52B8DF
		box-shadow 0 0 10px rgba(0, 0, 0, .8)
		font-size 14px
		line-height 14px
		max-width 300px
		min-width 100px
		max-height 100vh
		border-radius 3px
		padding 10px
		margin-top 5px
</style>
