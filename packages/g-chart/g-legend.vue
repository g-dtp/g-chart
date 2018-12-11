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
				default: 'auto'
			},
			right: {
				default: 'auto'
			},
			bottom: {
				default: 'auto'
			},
			top: {
				default: 'auto'
			},
			orient: {
				default: 'horizontal'
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
			this.chartsOptions.legend = {...this.options}
		},
	}
</script>
