<template lang='pug'>
	.g-floot-ball-item(:style="{transform: `translate(${endPoint[0]}px, ${endPoint[1]}px)`}" @mousedown.stop="onDown" @mouseup.stop="onUp")
		i.iconfont(:class="[item.icon]")

</template>

<script>
	export default {
		name: "g-floot-ball-item",
		props: {
			item: {
				default: function () {
					return {}
				}
			},
			index: {
				default: 0
			},
			size: {
				default: 50
			},
			direction: {
				default: 1
			},
			radius: {
				default: 70
			},
			gap: {
				default: 0
			},
			startDeg: {
				default: -Math.PI / 2
			}
		},
		computed: {
			endPoint() {
				let deg = this.startDeg + this.gap * this.index
				return [Math.cos(deg) * this.radius, Math.sin(deg) * this.radius]
			}
		},
		methods: {
			onDown () {

			}
		}
	}
</script>

<style lang="stylus" scoped>
	.g-floot-ball-item
		position absolute
		width 120%
		height 120%
		border-radius 50%
		background rgba(0, 0, 0, 1)
		transform-origin 50% 50%


</style>
