<template lang='pug'>
	span.g-popover(@click="onPopup" v-clickoutside="handleClose")
		slot(name="reference")
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
		computed:{
			styleObj(){
				return {

				}
			},
			transition (){
				return this.position
			}
		},
		methods: {
			onPopup () {
				PopupManager.getInstance().popup({
					uid: this._popover_uid,
					parent: this,
					wrapper:GWrapper,
					components:{}
				})
			},
			handleClose () {
				PopupManager.getInstance().close(this._popover_uid)
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.g-popover
		display inline-block
</style>
