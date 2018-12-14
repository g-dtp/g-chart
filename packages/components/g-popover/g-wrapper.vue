<template lang='pug'>
	transition(name="fade" appear)
		.g-wrapper(v-if='show' :class="[uid, position]" :style="styleObj")
			span {{content}}
</template>

<script>
	import BaseWrapper from '../utils/popup/base-wrapper'

	export default {
		name: "g-wrapper",
		extends: BaseWrapper,
		props: {
			content: {
				type: String,
				default: 'My Popover'
			}
		},
		inject: ['popover'],
		computed: {
			styleObj() {
				let boundRect = this.popover.$el.getBoundingClientRect()
				return {
					top: (boundRect.top - boundRect.height) + 'px',
					left: boundRect.left + 'px'
				}
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

	.g-wrapper
		position fixed
		background-color: rgba(0, 0, 0, .8)
		color #ffffff
		box-shadow 0 0 10px rgba(0, 0, 0, .8)
		font-size 14px
		line-height 14px
		max-width 300px
		max-height 100vh
		border-radius 5px
		padding 5px 10px
</style>
