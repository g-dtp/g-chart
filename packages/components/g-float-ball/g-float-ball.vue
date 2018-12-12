<template lang='pug'>
	.g-float-ball(@mousedown.stop="onStart" :class="{active:active}")
		.g-float-ball__content
		g-floot-ball-item(v-for="(item,index) in data" :key="index")
</template>

<script>
	import GFlootBallItem from './g-floot-ball-item'
	export default {
		name: "g-float-ball",
		components: {GFlootBallItem},
		props: {
			size: {
				default:50
			},
			data: {
				default: function () {
					return []
				}
			}
		},
		data() {
			return {
				active: false
			}
		},
		mounted() {
		},
		methods: {
			onStart(e) {
				this.active = true
				let el  = this.$el
				console.log(this)
				let maxW = document.body.clientWidth
				let maxH = document.body.clientHeight
				let disx = e.pageX - el.offsetLeft;
				let disy = e.pageY - el.offsetTop;

				document.onmousemove = function (e) {
					this.active = true
					e.stopPropagation()
					e.preventDefault()
					let dx = e.pageX - disx
					let dy = e.pageY - disy
					if(dx < 0){
						dx = 0
					}else if(dx > maxW - el.clientWidth){
						dx =  maxW - el.clientWidth
					}
					if(dy < 0){
						dy  = 0
					}else if(dy > maxH - el.clientHeight){
						dy =  maxH - el.clientHeight
					}
					el.style.left = dx/100 + 'rem';
					el.style.top = dy/100 + 'rem';
				}.bind(this)
				document.onmouseup = function () {
					this.active = false
					document.onmousemove = document.onmouseup = null;
				}.bind(this)
			},
			onMove() {

			}
		}
	}
</script>

<style lang="stylus" scoped>
	.g-float-ball
		position fixed
		cursor pointer
		top 50%
		left 50%
		width 50px
		height 50px
		border-radius 50px
		background rgba(0,0,0,0.8)
		box-shadow 0 0 5px rgba(0,0,0,.5)
		box-sizing border-box
		padding 10px
		opacity .3
		&.active{
			opacity .6
		}
		.g-float-ball__content
			box-sizing border-box
			border 2px solid #ffffff
			width 100%
			height 100%
			border-radius 50%


</style>
