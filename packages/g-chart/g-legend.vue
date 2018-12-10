<script>
	import GBase from './base/g-base'
	export default {
		extends: GBase,
		name: "g-legend",
		props:{
			data:{
				default:function () {
					return []
				}
			},
			left: {
				type: Number,
				default: 20
			},
			right: {
				type: Number,
				default: 20
			},
			bottom: {
				type: Number,
				default: 20
			},
			top: {
				type: Number,
				default: 20
			},
			hAlign: {
				default: 'center'
			},
			vAlign: {
				default: ''
			}
		},
		data(){
			return {
				options:{
					...this.$props,
				}
			}
		},
		created(){
			if(this.hAlign){
				this.options.left = this.hAlign
			}
			if(this.vAlign){
				this.options.left = this.vAlign
			}
			this.chartsOptions.legend = {...this.options}
		},
	}
</script>
