<template lang='pug'>
	.g-float-ball(@mousedown.stop="onStart" :class="{active:active || open}" @click="onOpen")
		.g-float-ball__content
			g-floot-ball-item(v-for="(item,index) in data" :key="index" :index="index" :item="item" :gap="gap" @click.native.stop="onItem(item, $event)" v-if='open')
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
				active: false,
				open:false,
				move:false
			}
		},
		beforeCreate() {
			this._deg = [-Math.PI / 2, Math.PI / 2]
			this._timer = null
		},
		computed: {
			gap() {
				return Math.PI/(this.data.length-1)
			}
		},
		mounted() {

		},
		methods: {
			onOpen () {
				if(this.move) return
				this.open = !this.open
				if(this.open){
					if(this._timer) clearTimeout(this._timer)
					this._timer = setTimeout(()=> {
						this.open = false
					}, 3000)
				}
			},
			onStart(e) {
				this.active = true
				this.move = false
				let el  = this.$el
				let maxW = document.body.clientWidth
				let maxH = document.body.clientHeight
				let disx = e.pageX - el.offsetLeft;
				let disy = e.pageY - el.offsetTop;

				document.onmousemove = function (e) {
					if(this.open) return
					this.active = true
					this.move = true
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
			onItem (item, e) {
				e.stopPropagation()
				e.preventDefault()
				this.$emit('command', item)
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
		padding 8px
		opacity .3
		&.active
			opacity .6
		.g-float-ball__content
			box-sizing border-box
			border 2px solid #ffffff
			width 100%
			height 100%
			border-radius 50%
			position relative
</style>
