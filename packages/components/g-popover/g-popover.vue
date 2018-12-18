<template lang='pug'>
	span.g-popover(@click="onToggle" v-clickoutside="handleClose")
		slot(name="reference")
		g-popover-wrapper(v-if="open" :content="content")
			slot(name="popper")

</template>

<script>
	import Clickoutside from '../utils/clickoutside'
	import GPopoverWrapper from './g-popover-wrapper'
	export default {
		name: "g-popover",
		components: {GPopoverWrapper},
		directives: {Clickoutside},
		props:{
			show: {
				type: Boolean,
				default: false
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
			};
		},
		data(){
			return {
				open: this.show
			}
		},
		computed:{

		},
		methods: {
			onToggle(){
				this.open = !this.open
			},
			handleClose () {

			}
		}
	}
</script>

<style lang="stylus" scoped>

	.g-popover
		display inline-block
</style>
