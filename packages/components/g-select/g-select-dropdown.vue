<template lang='pug'>
	transition(name="fade" @after-leave="doClose")
		.g-select-dropdown(:style="styleObj" :class="[_uid, position]" @click.stop="stop" @mousedown.stop="stop")
			.g-select-dropdown__warp.g-select-dropdown__list
				slot
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
			stop (e) {
				e.stopPropagation()
				e.preventDefault()
			},
			doClose(){
				this.$emit('dropdown-leave')
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.fade-enter-active {
		transition: opacity 0.3s ease;
	}

	.fade-leave-active {
		transition: opacity 0.3s;
	}

	.fade-enter,
	.fade-leave-to {
		opacity: 0;
	}
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
		margin-top 5px
		overflow-y auto
		>>>.g-option
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
