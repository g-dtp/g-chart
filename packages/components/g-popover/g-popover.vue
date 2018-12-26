<template lang='pug'>
	span.g-popover(@click="onToggle" @mousedown.stop="stop")
		slot(name="reference")
		g-popover-wrapper(v-if="open" :content="content")
			slot(name="popper")

</template>

<script>
	import GPopoverWrapper from './g-popover-wrapper'
	export default {
		name: "g-popover",
		components: {GPopoverWrapper},
		props:{
			autoClose:{
				type: Boolean,
				default: true
			},
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
				'reference': this
			};
		},
		data(){
			return {
				open: this.show,
				timer: null
			}
		},
		computed:{

		},
		methods: {
			onToggle(){
				this.open = !this.open
				if(this.open && this.autoClose){
					this.addAutoClose()
				}
			},
			addAutoClose() {
				if(this.timer) clearTimeout(this.timer)
				let vm = this
				this.timer = setTimeout(() => {
					vm.open = false
				}, 3000)
			},
			stop () {

			}
		}
	}
</script>
