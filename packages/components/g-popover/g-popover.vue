<template lang='pug'>
	span.g-popover(@click="onOpen" v-clickoutside="handleClose")
		slot(name="reference")
		slot(name="wrapper")
</template>

<script>
	import Clickoutside from '../utils/clickoutside'
	import PopupManager from '../utils/popup/popup-manager'
	import GWrapper from './g-wrapper'
	import {uid} from '../utils/utils'
	export default {
		name: "g-popover",
		model: {
			prop: 'show',
			event: 'change'
		},
		directives: {Clickoutside},
		props:{
			show: {
				type: Boolean,
				default: false
			},
			trigger:{
				type:String,
				default: 'hover'
			},
			content: String,
			position:{
				type:String,
				default: 'bottom'
			},
		},
		provide() {
			return {
				'popover': this
			}
		},
		beforeCreate(){
			this._popover_uid = uid()
		},
		data(){
			return {
				open: this.show
			}
		},
		computed:{
			styleObj(){
				return {

				}
			},
			transition (){
				return this.position
			}
		},
		mounted(){
			window.addEventListener("mousedown touchstart", this.closeByEvent);
		},
		beforeDestroy(){
			window.removeEventListener("mousedown touchstart", this.closeByEvent);
		},
		methods: {
			onOpen(){
				this.open = !this.open
				if(this.open){
					this.onPopup()
				}else{
					this.handleClose()
				}
			},
			onPopup () {
				PopupManager.getInstance().popup({
					type:'g-popover',
					uid: this._popover_uid,
					parent: this,
					wrapper:GWrapper,
					components:{}
				})
			},
			handleClose () {
				if(this.open) {
					this.open = false
					PopupManager.getInstance().close(this._popover_uid)
				}
			},
			closeByEvent(){
				this.handleClose()
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.g-popover
		display inline-block
</style>
