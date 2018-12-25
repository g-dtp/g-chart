<template lang='pug'>
	transition(name="fade")
		.g-popover-wrapper(:class="[_uid, position]" :style="styleObj")
			slot
				span span {{content}}
</template>

<script>
	import BaseWrapper from '../utils/popup/base-wrapper'

	export default {
		name: "g-popover-wrapper",
		extends: BaseWrapper,
		props: {
			content: {
				type: String,
				default: 'My Popover'
			}
		},
		data(){
			return {
			}
		},
		inject: ['popover'],
		methods: {
			top(rect) {

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
	.g-popover-wrapper
		position fixed
		background-color: rgba(255, 255, 255, 1)
		color #333333
		box-shadow 0 0 10px rgba(0, 0, 0, .8)
		font-size 14px
		line-height 14px
		max-width 300px
		max-height 100vh
		border-radius 3px
		padding 10px
		margin-top 5px
</style>
